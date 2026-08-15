import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { LightReflectiveCard } from '../components/common/LightReflectiveCard';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to deliver message. Please reach out directly via email.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Could not connect to the mail service. You can send an email directly to varunch.1729@gmail.com.');
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="personal-container max-w-[820px] space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-zinc-500 font-mono text-xs tracking-wider uppercase font-medium">
            Direct Contact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            Whether you want to discuss applied cryptography, systems engineering, or collaborative research, 
            feel free to send a message below or email me directly at{' '}
            <a 
              href="mailto:varunch.1729@gmail.com" 
              className="text-white underline underline-offset-4 hover:text-zinc-200"
            >
              varunch.1729@gmail.com
            </a>.
          </p>
        </div>

        {/* Spacious Contact Form Card */}
        <LightReflectiveCard className="p-8 sm:p-12 md:p-14 space-y-8">
          
          {status === 'success' ? (
            <div className="py-12 text-center space-y-5">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Message Delivered</h2>
              <p className="text-zinc-300 max-w-md mx-auto text-base sm:text-lg leading-relaxed">
                Thank you for reaching out. Your message has been sent directly to Varun. I'll get back to you shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setStatus('idle')}
                  className="clean-btn clean-btn-primary text-sm py-2.5 px-6 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              
              {/* Error Alert */}
              {status === 'error' && (
                <div className="p-5 rounded-xl bg-red-950/40 border border-red-900/60 flex items-start gap-3 text-red-200 text-sm sm:text-base">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">{errorMessage}</div>
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2.5">
                <label htmlFor="contact-name" className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                  Name <span className="text-zinc-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-100 text-base sm:text-lg placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors disabled:opacity-50"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2.5">
                <label htmlFor="contact-email" className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                  Email <span className="text-zinc-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-100 text-base sm:text-lg placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors disabled:opacity-50"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2.5">
                <label htmlFor="contact-message" className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                  Message <span className="text-zinc-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message, project inquiry, or technical discussion..."
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-100 text-base sm:text-lg placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors disabled:opacity-50 resize-y min-h-[180px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="clean-btn clean-btn-primary w-full justify-center py-4 px-8 text-base font-semibold rounded-xl cursor-pointer disabled:opacity-50 shadow-md"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </LightReflectiveCard>

      </div>
    </div>
  );
};

export default ContactPage;
