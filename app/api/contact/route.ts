import { NextResponse } from "next/server";
import type { ContactFormData, ContactApiResponse } from "@/lib/types";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // 1. Send notification email to the site owner (Geetartha)
    await sendEmail({
      to: "geetgohain14@gmail.com",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <tr>
            <td style="background-color: #111; padding: 20px; color: #fff; text-align: center;">
              <h2 style="margin:0; font-size: 18px; letter-spacing: 1px;">NEW PORTFOLIO MESSAGE</h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 10px; color: #666; font-size: 12px; text-transform: uppercase; font-weight: bold;">Sender Details</p>
              <p style="margin: 0 0 5px; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 20px; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              
              <p style="margin: 0 0 10px; color: #666; font-size: 12px; text-transform: uppercase; font-weight: bold;">Message</p>
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333;">${message.replace(/\n/g, "<br>")}</p>
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

    // 2. Send thanking email to the sender
    await sendEmail({
      to: email,
      subject: "Thank you for reaching out!",
      text: `Hi ${name},\n\nThank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.`,
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background-color:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <tr>
            <td align="center" style="padding:80px 40px;">
              <h1 style="
                margin:0;
                font-family: Arial, Helvetica, sans-serif;
                font-size:32px;
                line-height:1.2;
                font-weight:bold;
                color:#111111;
                letter-spacing: -0.5px;
              ">
                THANK YOU FOR CONNECTING
              </h1>
              <p style="margin: 20px 0 0; font-family: Arial, sans-serif; font-size: 16px; color: #666; line-height: 1.5;">
                Hi ${name}, I've received your message and will get back to you shortly.
              </p>
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

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

