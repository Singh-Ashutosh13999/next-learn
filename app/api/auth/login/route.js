import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../../lib/db';
import User from '../../../lib/models/user';

export async function POST(request) {
  let credentials;

  try {
    credentials = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please submit valid login details.' }, { status: 400 });
  }

  if (!credentials || typeof credentials !== 'object' || Array.isArray(credentials)) {
    return NextResponse.json({ error: 'Please submit valid login details.' }, { status: 400 });
  }

  const { email, password } = credentials;

  if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!process.env.JWT_SECRET) {
    return NextResponse.json({ error: 'JWT_SECRET is not configured.' }, { status: 500 });
  }

  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ error: 'MONGODB_URI is not configured.' }, { status: 500 });
  }

  try {
    await connectDB();
    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return NextResponse.json(
        { error: 'No account found. Please sign up first, then log in.' },
        { status: 401 },
      );
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' },
    );
    const response = NextResponse.json({ success: true });
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400,
      path: '/',
    });
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    if (error?.message?.startsWith('MONGODB_URI is invalid')) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (error?.name === 'MongoServerSelectionError' || error?.code === 'ENOTFOUND') {
      return NextResponse.json(
        { error: 'MongoDB could not be reached. Check your connection string and Atlas network access.' },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: 'Unable to connect to the database. Check your MongoDB connection settings.' },
      { status: 500 },
    );
  }
}
