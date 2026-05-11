import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { saveContactSubmission } from "@/lib/db-contact";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      message,
      subject,
    } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    // Save to database
    try {
      await saveContactSubmission({
        name,
        email,
        subject: subject || "Contact Form Submission",
        message,
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      // Continue with email even if DB save fails
    }

    // Send email notification
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
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message received" });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to process submission" },
      { status: 500 }
    );
  }
}