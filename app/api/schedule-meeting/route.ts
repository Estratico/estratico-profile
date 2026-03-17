import { google } from "googleapis";
import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/email-template";
import { nanoid } from "nanoid"; // Recommended: npm install uuid

export async function POST(req: Request) {
  try {
    const { email, dateTime } = await req.json();

    // 1. Generate a Unique Jitsi Room
    // Format: https://meet.jit.si/Estratico-Discovery-UniqueString
    const uniqueRoomId = `Estratico-Discovery-${nanoid().substring(0, 8)}`;
    const jitsiLink = `https://meet.jit.si/${uniqueRoomId}`;

    // 2. Setup Google Auth to track the event on your calendar
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`)
        .join("\n")
        .replace(/"/g, ""),
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const startTime = new Date(dateTime);
    const endTime = new Date(startTime.getTime() + 30 * 60000);

    // 3. Insert into Calendar (Without requesting Google Meet)
    await calendar.events.insert({
      calendarId: process.env.GOOGLE_ADMIN_EMAIL,
      requestBody: {
        summary: `Discovery Call: Estratico x ${email.split('@')[0]}`,
        description: `Technical consultation. Join link: ${jitsiLink}`,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Africa/Harare",
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Africa/Harare",
        },
        location: jitsiLink, // Put the Jitsi link in the location field
      },
    });

    // 4. Send the Branded Email via Resend
    await resend.emails.send({
      from: 'Estratico <hello@estratico.org.zw>',
      to: email,
      subject: 'Confirmed: Your Discovery Call with Estratico',
      react: EmailTemplate({ 
        type: "discovery", 
        data: {
          link: jitsiLink,
          time: dateTime
        } 
      }),
    });

    return new Response(JSON.stringify({ 
      hangoutLink: jitsiLink, 
      startTime: startTime.toISOString() 
    }), { status: 200 });

  } catch (error: any) {
    console.error("Discovery Call Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}