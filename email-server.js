import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const RESEND_API_KEY = "re_fe4zn1sJ_HNsQrGL1un6EPii5BXqKGDiU";
const TARGET_EMAIL = "krishna613460@gmail.com";

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // Default sender domain for Resend sandbox accounts
        to: TARGET_EMAIL,
        subject: `New Inquiry from ${name} (Kalpit Films Website)`,
        html: `
          <h3>New Website Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; padding: 10px; background: #f3f4f6; border-radius: 4px;">${message}</p>
        `
      })
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ success: true, data });
    } else {
      res.status(response.status).json({ success: false, error: data });
    }
  } catch (error) {
    console.error("Email dispatch failed:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Secure Email Proxy Server is active on http://localhost:${PORT}`);
});
