import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, toFieldErrors } from "@/lib/validation";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid form data",
          details: toFieldErrors(result.error.issues),
        },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
      whatsapp,
      preferredMethod,
    } = result.data;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json({
        success: true,
        message: "Message received (email temporarily disabled)",
      });
    }

    const resendFromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendFromEmail) {
      return NextResponse.json(
        { error: "Resend sender email is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: "sharafukp19@gmail.com",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "—")}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline || "—")}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp || "—")}</p>
        <p><strong>Preferred Contact:</strong> ${escapeHtml(preferredMethod || "—")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}