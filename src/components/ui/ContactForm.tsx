"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-card/50 border border-brand-border/60 p-8 rounded-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-cyan/15 border border-brand-cyan/35 mb-2">
          <CheckCircle2 className="h-7 w-7 text-brand-cyan" />
        </div>
        <h3 className="text-xl font-display font-extrabold text-brand-text">Message Sent!</h3>
        <p className="text-sm font-sans text-brand-muted max-w-sm mx-auto leading-relaxed">
          Thanks for contacting us, <span className="text-brand-text font-semibold">{formData.fullName}</span>. We&apos;ve received your message and will respond to <span className="text-brand-text font-mono text-xs">{formData.email}</span> shortly.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                subject: "General Inquiry",
                message: "",
              });
            }}
            className="px-5 py-2 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-bg font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-card/50 border border-brand-border/60 p-6 md:p-8 rounded-2xl space-y-5">
      {/* Name Input */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
          Full Name <span className="text-brand-cyan">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={`w-full px-4 py-3 rounded-xl bg-brand-surface border text-sm text-brand-text transition-colors focus:outline-none ${
            errors.fullName ? "border-red-500/60" : "border-brand-border/60 hover:border-brand-border focus:border-brand-cyan"
          }`}
        />
        {errors.fullName && <p className="text-xs text-red-400 font-sans">{errors.fullName}</p>}
      </div>

      {/* Grid: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
            Email Address <span className="text-brand-cyan">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-brand-surface border text-sm text-brand-text transition-colors focus:outline-none ${
              errors.email ? "border-red-500/60" : "border-brand-border/60 hover:border-brand-border focus:border-brand-cyan"
            }`}
          />
          {errors.email && <p className="text-xs text-red-400 font-sans">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7721 855393"
            className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text transition-colors focus:outline-none"
          />
        </div>
      </div>

      {/* Select: Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text transition-colors focus:outline-none"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="RFQ">RFQ Submission</option>
          <option value="PCB Assembly">PCB Assembly Quote</option>
          <option value="Partnership">Partnership Opportunities</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Textarea: Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
          Message <span className="text-brand-cyan">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="How can our components desk assist you today?"
          className={`w-full px-4 py-3 rounded-xl bg-brand-surface border text-sm text-brand-text transition-colors focus:outline-none ${
            errors.message ? "border-red-500/60" : "border-brand-border/60 hover:border-brand-border focus:border-brand-cyan"
          }`}
        />
        {errors.message && <p className="text-xs text-red-400 font-sans">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark disabled:bg-brand-cyan-dark/60 text-brand-bg font-sans font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow-cyan cursor-pointer"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-brand-bg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending Message...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </span>
        )}
      </button>
    </form>
  );
}
