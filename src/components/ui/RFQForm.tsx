"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Upload, X, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  file?: string;
  general?: string;
}

// Inner Form component that uses search params
function RFQFormInner() {
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "Industrial Automation",
    partsList: "",
    quantity: "",
    targetPrice: "",
    notes: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-fill parts list if part query param exists
  useEffect(() => {
    const part = searchParams.get("part");
    if (part) {
      setFormData((prev) => ({
        ...prev,
        partsList: `Part requested: ${part}\n\nQuantity: `,
      }));
    }
  }, [searchParams]);

  // Form Field handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Drag & drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (selectedFile: File): boolean => {
    const allowedExtensions = ["xlsx", "csv", "pdf", "xls"];
    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase() || "";
    
    if (!allowedExtensions.includes(fileExtension)) {
      setErrors((prev) => ({
        ...prev,
        file: "Invalid file format. Only .xlsx, .csv, .pdf, and .xls are supported.",
      }));
      return false;
    }

    if (selectedFile.size > 10 * 1024 * 1024) { // 10MB
      setErrors((prev) => ({
        ...prev,
        file: "File size exceeds the 10MB limit.",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, file: undefined }));
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!file && !formData.partsList.trim()) {
      newErrors.general = "Please upload a BOM file OR paste your component list.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00D4FF", "#0099CC", "#FFFFFF", "#1E3A5F"]
      });

    } catch (err) {
      setIsSubmitting(false);
      setErrors((prev) => ({ ...prev, general: "An error occurred. Please try again." }));
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-card/50 border border-brand-border/60 p-8 rounded-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-cyan/15 border border-brand-cyan/35 mb-4">
          <CheckCircle2 className="h-8 w-8 text-brand-cyan" />
        </div>
        <h3 className="text-2xl font-display font-extrabold text-brand-text">RFQ Submitted Successfully!</h3>
        <p className="text-sm font-sans text-brand-muted max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-brand-text font-semibold">{formData.fullName}</span>. We have received your parts list. A pricing engineer from <span className="text-brand-text">Zentrix</span> will email you at <span className="text-brand-text font-mono text-xs">{formData.email}</span> with a custom quote within 24 hours.
        </p>
        <div className="pt-4">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFile(null);
              setFormData({
                fullName: "",
                companyName: "",
                email: "",
                phone: "",
                industry: "Industrial Automation",
                partsList: "",
                quantity: "",
                targetPrice: "",
                notes: "",
              });
            }}
            className="px-6 py-2.5 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-bg font-sans font-bold text-sm transition-all duration-300"
          >
            Submit Another RFQ
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-card/50 border border-brand-border/60 p-6 md:p-8 rounded-2xl space-y-6">
      {errors.general && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex gap-3 text-red-400 text-sm font-sans">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* Grid: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

        <div className="space-y-2">
          <label htmlFor="companyName" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
            Company Name <span className="text-brand-cyan">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={`w-full px-4 py-3 rounded-xl bg-brand-surface border text-sm text-brand-text transition-colors focus:outline-none ${
              errors.companyName ? "border-red-500/60" : "border-brand-border/60 hover:border-brand-border focus:border-brand-cyan"
            }`}
          />
          {errors.companyName && <p className="text-xs text-red-400 font-sans">{errors.companyName}</p>}
        </div>
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

      {/* Dropdown: Industry */}
      <div className="space-y-2">
        <label htmlFor="industry" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
          Industry / Application
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text transition-colors focus:outline-none"
        >
          <option value="Industrial Automation">Industrial Automation</option>
          <option value="Automotive Electronics">Automotive Electronics</option>
          <option value="Consumer Electronics">Consumer Electronics</option>
          <option value="IoT & Smart Devices">IoT & Smart Devices</option>
          <option value="Medical Electronics">Medical Electronics</option>
          <option value="Renewable Energy">Renewable Energy</option>
          <option value="Telecom & Networking">Telecom & Networking</option>
          <option value="Robotics & Embedded Systems">Robotics & Embedded Systems</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Custom File Upload Component */}
      <div className="space-y-2">
        <label className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted block">
          Upload BOM File <span className="text-[10px] text-brand-cyan lowercase">(optional if pasting below)</span>
        </label>
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all ${
            dragActive
              ? "border-brand-cyan bg-brand-cyan/5"
              : errors.file
              ? "border-red-500/50 bg-red-500/5"
              : "border-brand-border/60 hover:border-brand-border bg-brand-surface/30 hover:bg-brand-surface/50"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            accept=".xlsx,.xls,.csv,.pdf"
            className="hidden"
          />

          {!file ? (
            <label htmlFor="file-upload" className="cursor-pointer space-y-3 flex flex-col items-center">
              <div className="p-3 bg-brand-card rounded-xl border border-brand-border/80 text-brand-cyan group-hover:scale-105 transition-transform duration-300">
                <Upload className="h-6 w-6" />
              </div>
              <div>
                <span className="text-brand-cyan hover:underline font-semibold text-sm">Click to upload</span>
                <span className="text-brand-muted text-sm"> or drag and drop your file</span>
              </div>
              <p className="text-[11px] text-brand-muted/70">
                Supports .xlsx, .csv, .pdf, .xls (Max 10MB)
              </p>
            </label>
          ) : (
            <div className="flex items-center gap-3 bg-brand-card p-3 rounded-xl border border-brand-border w-full max-w-md">
              <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan">
                <Upload className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-sans font-bold text-brand-text truncate">{file.name}</p>
                <p className="text-xs font-mono text-brand-muted">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1 rounded-lg hover:bg-brand-surface text-brand-muted hover:text-brand-text transition-colors"
                aria-label="Remove uploaded file"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        {errors.file && <p className="text-xs text-red-400 font-sans mt-1">{errors.file}</p>}
      </div>

      {/* Or Divider */}
      <div className="relative flex items-center justify-center my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-brand-border/40"></div>
        </div>
        <span className="relative px-3 bg-[#0c1224] text-xs font-display font-bold uppercase tracking-wider text-brand-muted">
          OR
        </span>
      </div>

      {/* Textarea: Parts List */}
      <div className="space-y-2">
        <label htmlFor="partsList" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
          Parts / Components List <span className="text-[10px] text-brand-cyan lowercase">(optional if uploading BOM)</span>
        </label>
        <textarea
          id="partsList"
          name="partsList"
          value={formData.partsList}
          onChange={handleChange}
          rows={5}
          placeholder="Paste parts numbers, manufacturer names, and quantities here. (e.g. STM32F103C8T6 - STMicroelectronics - 50 pcs)"
          className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text font-mono transition-colors focus:outline-none placeholder:font-sans"
        />
      </div>

      {/* Grid: Quantity & Target Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="quantity" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
            Quantity Required
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 500 units"
            className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text transition-colors focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="targetPrice" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
            Target Price / Budget <span className="text-[10px] text-brand-cyan lowercase">(optional)</span>
          </label>
          <input
            type="text"
            id="targetPrice"
            name="targetPrice"
            value={formData.targetPrice}
            onChange={handleChange}
            placeholder="e.g. $1.50 per unit"
            className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text transition-colors focus:outline-none"
          />
        </div>
      </div>

      {/* Textarea: Additional Notes */}
      <div className="space-y-2">
        <label htmlFor="notes" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-muted">
          Additional Notes / Packaging Requirements <span className="text-[10px] text-brand-cyan lowercase">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Specify lead time constraints, reel packaging, custom labeling, testing reports, or dynamic target price adjustments."
          className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border/60 hover:border-brand-border focus:border-brand-cyan text-sm text-brand-text transition-colors focus:outline-none"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark disabled:bg-brand-cyan-dark/60 text-brand-bg font-sans font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow-cyan cursor-pointer"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-brand-bg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing Request...
          </span>
        ) : (
          "Submit RFQ"
        )}
      </button>
    </form>
  );
}

// Wrapper to provide Suspense context for search parameters
export default function RFQForm() {
  return (
    <Suspense fallback={
      <div className="bg-brand-card/50 border border-brand-border/60 p-8 rounded-2xl text-center">
        <p className="text-brand-muted font-sans text-sm animate-pulse">Loading RFQ Form...</p>
      </div>
    }>
      <RFQFormInner />
    </Suspense>
  );
}
