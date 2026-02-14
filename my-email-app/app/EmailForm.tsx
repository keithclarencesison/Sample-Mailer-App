"use client";

import { sendWelcomeEmail } from "./actions";
import { useState } from "react";

export default function EmailForm() {
  const [message, setMessage] = useState<string | null>(null);

  async function handleAction(formData: FormData) {
    const result = await sendWelcomeEmail(formData);
    
    if (result.success) {
      setMessage("✅ Success! Check your inbox.");
    } else {
      setMessage("❌ Something went wrong. Try again.");
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">⚠️⚠️This is a Virus App ⚠️⚠️</h2>
      <p className="text-black mb-6">Enter your email here to download a free virus!🦠☣️ </p>
      
      <form action={handleAction} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-black transition-all"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md active:transform active:scale-95"
        >
          Submit My Email
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center font-medium ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}