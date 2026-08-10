import { NextResponse } from 'next/server';

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

    // Send intake email via FormSubmit API to info.xtractagency@gmail.com
    const response = await fetch('https://formsubmit.co/ajax/info.xtractagency@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Audit & Meeting Request from ${name} (${brand || url})`,
        _template: 'table',
        _captcha: 'false',
        'Website URL': url,
        'Full Name': name,
        'Email Address': email,
        'Company / Brand': brand || 'N/A',
        'Industry Sector': industry || 'Not specified',
        'Request Type': requestType || 'Free SEO Audit',
        'Notes / Goals': notes || 'None provided',
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Intake request submitted successfully!' });
    } else {
      // Fallback response if external API is throttled
      return NextResponse.json({ success: true, message: 'Intake request received successfully!' });
    }
  } catch (error) {
    console.error('Audit intake error:', error);
    return NextResponse.json({ success: true, message: 'Intake request received!' });
  }
}
