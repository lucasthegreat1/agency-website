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

    const payload = {
      _subject: `New Intake Request: ${name} (${brand || url})`,
      'Website URL': url,
      'Full Name': name,
      'Work Email': email,
      'Company / Brand': brand || 'N/A',
      'Industry Sector': industry || 'Not specified',
      'Request Type': requestType || 'Both Audit & Meeting',
      'Additional Notes': notes || 'None provided',
    };

    // Primary delivery: FormSubmit API endpoint
    try {
      await fetch('https://formsubmit.co/ajax/info.xtractagency@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (e) {
      // ignore backup error
    }

    return NextResponse.json({
      success: true,
      message: 'Intake request received successfully!',
      data: payload,
    });
  } catch (error) {
    console.error('Audit intake submission error:', error);
    return NextResponse.json({ success: true, message: 'Intake request received!' });
  }
}
