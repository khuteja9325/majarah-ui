import { headers } from "next/headers";
import { NextResponse } from "next/server";

const nodemailer = require('nodemailer')

export async function POST(request: Request) {
    const body = await request.json()
    
    // Format the form data for email
    const formatFormData = (data: any) => {
        let html = '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">';
        html += '<h2 style="color: #4899E3; border-bottom: 2px solid #4899E3; padding-bottom: 10px;">New Contact Form Submission</h2>';
        
        // Add contact type
        html += `<p><strong>Contact Type:</strong> ${data.contactType || 'Not specified'}</p>`;
        
        // Add all form fields
        Object.entries(data).forEach(([key, value]) => {
            if (key !== 'contactType' && key !== 'submittedAt' && value) {
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                let displayValue = value;
                
                // Handle arrays (like primaryInterest)
                if (Array.isArray(value)) {
                    displayValue = value.join(', ');
                }
                
                // Handle dates
                if (key === 'selectedDate' && value && typeof value === 'string') {
                    displayValue = new Date(value).toLocaleDateString();
                }
                
                html += `<p><strong>${label}:</strong> ${displayValue}</p>`;
            }
        });
        
        html += '<hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">';
        html += `<p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>`;
        html += '</div>';
        
        return html;
    };

    const message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New ${body.contactType || 'Contact'} Form Submission - Majarah`,
        html: formatFormData(body),
        headers: {
            'X-Entity-Ref-ID': "newmail",
        },
    };

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_APP_PASSWORD || process.env.PASS,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        }
    });
    
    try {
        await transporter.sendMail(message);
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    } catch (e: any) {
        console.error('Email sending error:', e);
        return NextResponse.json({ message: `Email sending failed: ${e.message}` }, { status: 500 })
    }
}