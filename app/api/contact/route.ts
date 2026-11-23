import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

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
          details: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = result.data;
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
      subject: `${subject} from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New message from ${escapeHtml(name)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;padding:28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="display:inline-block;width:36px;height:36px;background:#2fa36a;border-radius:8px;vertical-align:middle;"></span>
                    <span style="display:inline-block;margin-left:12px;color:#ffffff;font-size:18px;font-weight:600;vertical-align:middle;letter-spacing:-0.3px;">Sharaf</span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:#2fa36a;color:#ffffff;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:6px 14px;border-radius:20px;vertical-align:middle;">New message</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Subject bar -->
          <tr>
            <td style="background:#2fa36a;padding:14px 32px;">
              <p style="margin:0;color:#ffffff;font-size:15px;font-weight:600;">${escapeHtml(subject)}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 8px;color:#0a0a0a;font-size:14px;font-weight:600;">You received a new message from your portfolio contact form.</p>
              <p style="margin:0 0 24px;color:#6b7280;font-size:13px;">Reply directly to this email to respond to the sender.</p>

              <!-- Field: Name -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td width="35%" style="color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Name</td>
                  <td width="65%" style="color:#0a0a0a;font-size:14px;font-weight:500;">${escapeHtml(name)}</td>
                </tr>
              </table>

              <!-- Field: Email -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td width="35%" style="color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Email</td>
                  <td width="65%"><a href="mailto:${escapeHtml(email)}" style="color:#2fa36a;text-decoration:none;font-size:14px;font-weight:500;">${escapeHtml(email)}</a></td>
                </tr>
              </table>

              <!-- Field: Phone -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td width="35%" style="color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Phone</td>
                  <td width="65%"><a href="tel:${escapeHtml(phone)}" style="color:#2fa36a;text-decoration:none;font-size:14px;font-weight:500;">${escapeHtml(phone)}</a></td>
                </tr>
              </table>

              <!-- Message card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;background:#f9fafb;border-left:4px solid #2fa36a;border-radius:0 8px 8px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;color:#0a0a0a;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
                    <p style="margin:0;color:#374151;font-size:14px;line-height:1.7;">${escapeHtml(message).replace(/\n/g, "<br />")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0a0a;padding:20px 32px;">
              <p style="margin:0;color:#6b7280;font-size:12px;">This message was sent from your portfolio website contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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