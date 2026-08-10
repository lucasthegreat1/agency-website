import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.RECIPIENT_EMAIL || 'info.xtractagency@gmail.com';

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'RESEND_API_KEY environment variable is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'XTRACT Agency <onboarding@resend.dev>',
      to: recipient,
      subject: 'Resend API Test Email - XTRACT Website',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #000;">Resend Integration Test</h2>
          <p>This is a test email confirming that Resend API is configured and working server-side.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p><strong>Recipient:</strong> ${recipient}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend test email error:', error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `Test email dispatched to ${recipient}`,
      data,
    });
  } catch (err: any) {
    console.error('Test email route exception:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
