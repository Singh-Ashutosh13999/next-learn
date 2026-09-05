import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "../../../lib/db";
import User from "../../../lib/models/user";

export async function POST(request) {
  let details;

  try {
    details = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit valid signup details." }, { status: 400 });
  }

  if (!details || typeof details !== "object" || Array.isArray(details)) {
    return NextResponse.json({ error: "Please submit valid signup details." }, { status: 400 });
  }

  const { name, email, password } = details;
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  const normalizedName = typeof name === "string" ? name.trim() : "";

  if (!normalizedEmail || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (typeof password !== "string" || password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ error: "MONGODB_URI is not configured." }, { status: 500 });
  }

  try {
    await connectDB();

    const existingUser = await User.findOne({ email: normalizedEmail }).lean();
    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists. Please sign in." },
        { status: 409 },
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await User.create({
      name: normalizedName,
      email: normalizedEmail,
      password: passwordHash,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    if (error?.code === 11000) {
      return NextResponse.json(
        { error: "An account with this email already exists. Please sign in." },
        { status: 409 },
      );
    }

    console.error("Signup failed:", error);
    if (error?.message?.startsWith("MONGODB_URI is invalid")) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (error?.name === "MongoServerSelectionError" || error?.code === "ENOTFOUND") {
      return NextResponse.json(
        { error: "MongoDB could not be reached. Check your connection string and Atlas network access." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "Unable to create your account. Check your MongoDB connection settings." },
      { status: 500 },
    );
  }
}
