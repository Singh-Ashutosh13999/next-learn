import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, phone, email, course } = await request.json();

    const data = await resend.emails.send({
      from: 'DevCourses <onboarding@resend.dev>', // You should use your verified domain here
      to: ['1306shub@gmail.com'],
      subject: `New Course Enrollment: ${course}`,
      html: `
        <h2>New Course Enrollment</h2>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
