import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      message,
      fabricType,
      quantity,
      application,
      timeline,
    } = await req.json();

  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

    await transporter.sendMail({
      from: `"Xiimba Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr/>

        <p><strong>Fabric Type:</strong> ${fabricType}</p>
        <p><strong>Application:</strong> ${application}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>

        <hr/>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}