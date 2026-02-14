"use server";

import nodemailer from "nodemailer";

export async function sendWelcomeEmail(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) return { error: "Email is required" };

  // 1. Create the Transporter (The connection to Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 2. Send the Mail
    await transporter.sendMail({
      from: `"Macca" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Download the virus here!!!",
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; text-align: center;">
            <h2>So you still enter your email, huh? 🤨🤨🤨 Anyways...</h2>
            <h1 style="color: #e91e63;">Happy Valentine's Day!</h1>
            <p>This is a special message from Macca!</p>
            <a href="https://valentine-s-letter.vercel.app/" 
               style="background-color: #e91e63; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                Open Your Valentine Card 🌹
            </a>
            <p style="margin-top: 20px;">I'm glad you're here!</p>
        </div>
      `,
    });

    return { success: true };
  } catch (err: any) {
    console.error("NODEMAILER ERROR:", err);
    return { success: false, error: err.message };
  }
}