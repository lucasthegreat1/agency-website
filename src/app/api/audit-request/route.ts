import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, name, email, brand, industry, requestType, notes } = body;

    if (!url || !email || !name) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Website URL, Name, Email).' },
        { status: 400 }
      );
    }

    const emailSubject = `New SEO Audit Request: ${name} (${brand || url})`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 24px; border-radius: 12px; background-color: #ffffff;">
        <h2 style="border-bottom: 2px solid #000; padding-bottom: 8px; color: #000; margin-top: 0;">New SEO Audit & Meeting Request</h2>
        <p><strong>Website URL:</strong> <a href="${url.startsWith('http') ? url : `https://${url}`}">${url}</a></p>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company / Brand:</strong> ${brand || 'N/A'}</p>
        <p><strong>Industry Sector:</strong> ${industry || 'N/A'}</p>
        <p><strong>Request Type:</strong> ${requestType || 'Both Audit & Meeting'}</p>
        <p><strong>Additional Notes:</strong> ${notes || 'None'}</p>
        <hr style="margin-top: 20px; border: 0; border-top: 1px solid #ccc;" />
        <p style="font-size: 12px; color: #666;">Submitted via tryxtract.co.uk intake form.</p>
      </div>
    `;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const resendResult = await resend.emails.send({
        from: 'XTRACT Intake <onboarding@resend.dev>',
        to: process.env.RECIPIENT_EMAIL || 'info.xtractagency@gmail.com',
        replyTo: email,
        subject: emailSubject,
        html: htmlBody,
      });

      return NextResponse.json({
        success: true,
        message: 'Intake request processed server-side and sent via Resend API!',
        data: resendResult,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Intake request received!',
    });
  } catch (error) {
    console.error('Server-side audit request error:', error);
    return NextResponse.json(
      { error: 'Server processing error' },
      { status: 500 }
    );
  }
}
