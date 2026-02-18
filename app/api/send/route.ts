import { NextRequest } from "next/server";
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { type, ...rest } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Estratico <onboarding@resend.dev>",
      to: [siteConfig.contact.email],
      subject: rest.subject,
      react: EmailTemplate({ type, data: rest }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
