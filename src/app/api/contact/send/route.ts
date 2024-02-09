import { EmailTemplate } from "../../../../components/EmailTemplate";
import { Resend } from "resend";
import { schema } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const bodyResponse = schema.safeParse(await req.json());

  if (!bodyResponse.success) {
    return Response.json({ error: bodyResponse.error }, { status: 400 });
  }

  const { name, email, message } = bodyResponse.data;

  try {
    const data = await resend.emails.send({
      from: "oscarkemuel.com <onboarding@resend.dev>",
      to: ["oscar.kemuel5@gmail.com"],
      subject: "Novo contato! 🚀",
      react: EmailTemplate({ name, email, message }),
    });

    return Response.json({
      message: "Email sent successfully!",
      email_id: data.data?.id || null,
    });
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
