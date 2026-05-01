import { NextResponse } from "next/server";
import type { ContactFormData, ContactApiResponse } from "@/lib/types";

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

    // TODO (@dev): Integrate with an email provider (e.g. Resend, SendGrid)
    // For now, log the message in development
    if (process.env.NODE_ENV === "development") {
      console.log("📬 Contact form submission:", { name, email, message });
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
