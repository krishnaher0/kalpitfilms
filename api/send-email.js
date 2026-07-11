export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY || "re_fe4zn1sJ_HNsQrGL1un6EPii5BXqKGDiU";
  const TARGET_EMAIL = "kalpitfilms@gmail.com";

  try {
    const formattedDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' });
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: TARGET_EMAIL,
        subject: `New Inquiry from ${name} (Kalpit Films Website)`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f9fc; margin: 0; padding: 0; }
              .wrapper { width: 100%; background-color: #f6f9fc; padding: 40px 0; }
              .container { max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e6ebf1; }
              .header { background-color: #0c0d0e; padding: 30px; text-align: center; border-bottom: 3px solid #d97706; }
              .header-logo { font-family: Georgia, serif; font-size: 22px; font-weight: bold; color: #fbbf24; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; }
              .header-subtitle { color: #9ca3af; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 5px; margin-bottom: 0; }
              .content { padding: 40px; }
              .title { font-size: 20px; font-weight: 600; color: #1f2937; margin-top: 0; margin-bottom: 24px; }
              .field-row { margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px; }
              .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #9ca3af; font-weight: bold; margin-bottom: 4px; }
              .field-value { font-size: 15px; color: #374151; margin: 0; }
              .message-box { background-color: #f9fafb; border-left: 4px solid #d97706; padding: 20px; border-radius: 0 6px 6px 0; margin-top: 24px; }
              .message-text { font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0; white-space: pre-wrap; }
              .footer { background-color: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e6ebf1; }
              .footer-text { font-size: 12px; color: #9ca3af; margin: 0; line-height: 1.5; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="container">
                <div class="header">
                  <h1 class="header-logo">KALPIT FILMS</h1>
                  <p class="header-subtitle">Inquiry Dispatch System</p>
                </div>
                <div class="content">
                  <h2 class="title">New Website Inquiry</h2>
                  
                  <div class="field-row">
                    <div class="field-label">Sender Name</div>
                    <div class="field-value">${name}</div>
                  </div>
                  
                  <div class="field-row">
                    <div class="field-label">Email Address</div>
                    <div class="field-value">
                      <a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a>
                    </div>
                  </div>

                  <div class="field-row">
                    <div class="field-label">Timestamp</div>
                    <div class="field-value">${formattedDate} (NPT)</div>
                  </div>
                  
                  <div class="message-box">
                    <div class="field-label" style="margin-bottom: 8px;">Message / Narrative Scope</div>
                    <p class="message-text">${message}</p>
                  </div>
                </div>
                <div class="footer">
                  <p class="footer-text">
                    This email was securely delivered from the <strong>Kalpit Films</strong> contact form.<br>
                    &copy; ${new Date().getFullYear()} Kalpit Films. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      const errorMessage = data.message || (typeof data === 'object' ? JSON.stringify(data) : data);
      return res.status(response.status).json({ success: false, error: errorMessage });
    }
  } catch (error) {
    console.error("Email API failed:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
