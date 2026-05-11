import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { saveContactSubmission } from "@/lib/db-contact";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      subject,
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    // SMTP validation
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.ADMIN_EMAIL
    ) {
      console.error("SMTP environment variables missing");

      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        {
          status: 500,
        }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),

      // true only for 465
      secure: Number(process.env.SMTP_PORT) === 465,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Xiimba Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          ${
            phone
              ? `
            <p>
              <strong>Phone:</strong> ${phone}
            </p>
          `
              : ""
          }

          <p>
            <strong>Subject:</strong> ${
              subject || "Contact Form Submission"
            }
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message.replace(/\n/g, "<br>")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}