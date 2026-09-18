"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  X,
  User,
  Phone,
  Mail,
  Layers,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Lock,
  Clock,
  ShieldCheck,
  ChevronDown,
  Code,
  Layout,
  ShoppingCart,
  Globe,
  Rocket,
  Cpu,
  Search,
  Paintbrush,
  Check,
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialService = "",
}: QuoteModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService || "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isServicePickerOpen, setIsServicePickerOpen] = useState(false);

  // Sync initialService when modal opens
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService, isOpen]);

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isServicePickerOpen) {
          setIsServicePickerOpen(false);
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isServicePickerOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = "Enter valid 10-digit phone";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }
    if (!formData.service) {
      newErrors.service = "Select a service";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        source: "UrbanTech Webs Website",
      };

      await fetch("https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/2vNEjNzv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Privyr Webhook submission error:", err);
    } finally {
      setIsSubmitting(false);
      const queryParams = new URLSearchParams({
        name: formData.name,
        service: formData.service,
        phone: formData.phone,
        email: formData.email,
      });
      onClose();
      router.push(`/thank-you?${queryParams.toString()}`);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setIsServicePickerOpen(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setErrors({});
    onClose();
  };

  const servicesList = [
    { name: "Website Development", desc: "Custom, scalable business sites", icon: Code },
    { name: "Website Design", desc: "Modern UI/UX & responsive layouts", icon: Layout },
    { name: "E-commerce Development", desc: "Online stores & payment gateways", icon: ShoppingCart },
    { name: "WordPress Development", desc: "Easy CMS management & themes", icon: Globe },
    { name: "Landing Page Design", desc: "Lead generation & campaign pages", icon: Rocket },
    { name: "Web Application Dev", desc: "Custom portals, dashboards & apps", icon: Cpu },
    { name: "SEO & Performance", desc: "Search visibility & speed tuning", icon: Search },
    { name: "Logo & Brand Design", desc: "Custom logo & visual identity", icon: Paintbrush },
    { name: "Other Custom Solution", desc: "Tailored digital web requirements", icon: Sparkles },
  ];

  const handleWhatsAppRedirect = () => {
    const text = `Hi UrbanTechWebs, I submitted a quote request:%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Email:* ${encodeURIComponent(
      formData.email
    )}%0A*Service Required:* ${encodeURIComponent(
      formData.service
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/917827775353?text=${text}`, "_blank");
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-start sm:items-center justify-center p-0 sm:p-5 overflow-y-auto overscroll-contain touch-pan-y animate-in fade-in duration-200"
        onClick={handleResetAndClose}
        aria-modal="true"
        role="dialog"
      >
        {/* MAIN FORM CONTAINER (100% Full Screen on Mobile, Centered Card on Desktop) */}
        <div
          className="relative w-full min-h-screen sm:min-h-0 sm:max-w-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-0 sm:border-2 border-cyan-500/40 rounded-none p-5 sm:p-8 shadow-[0_0_60px_rgba(34,211,238,0.2)] text-white my-0 sm:my-auto flex flex-col justify-between animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

          {/* Ambient Neon Glow Accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/15 rounded-none blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-none blur-3xl pointer-events-none" />

          {isSuccess ? (
            /* SUCCESS STATE */
            <div className="text-center py-6 sm:py-8 space-y-5">
              <div className="flex justify-end mb-2">
                <button
                  onClick={handleResetAndClose}
                  aria-label="Close form"
                  className="p-2 rounded-none text-slate-400 hover:text-white bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-none bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Quote Request Submitted!
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you <span className="text-cyan-400 font-bold">{formData.name}</span>. Our expert team will review your requirement and call you back within <span className="font-bold text-white">30 minutes</span>!
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-none p-4 text-left text-xs sm:text-sm space-y-2 text-slate-300 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Selected Service:</span>
                  <span className="font-semibold text-cyan-400">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Phone Number:</span>
                  <span className="font-semibold text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Email:</span>
                  <span className="font-semibold text-white">{formData.email}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2.5 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-4 rounded-none bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5" />
                  <span>Connect Instantly on WhatsApp</span>
                </button>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 rounded-none bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <div className="space-y-4 relative z-10">
              {/* Header Strip with Flex Alignment for Badges & Close Button */}
              <div className="border-b border-slate-800/90 pb-3.5">
                <div className="flex items-start justify-between gap-2.5 mb-2">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-none bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 fill-cyan-400/20 flex-shrink-0" />
                      <span className="hidden sm:inline">GET A FREE CONSULTATION & QUOTE</span>
                      <span className="inline sm:hidden">GET A FREE QUOTE</span>
                    </div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-none bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider font-mono">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 flex-shrink-0" />
                      <span>30-MIN CALLBACK</span>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={handleResetAndClose}
                    aria-label="Close form"
                    className="p-2 sm:p-2.5 rounded-none text-slate-400 hover:text-white bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer flex-shrink-0 shadow-md group"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                  Let&apos;s Build Your Business Website
                </h2>
              </div>

              {/* 2-Column Form */}
              <form onSubmit={handleSubmit} data-gtm="contact-form" className="space-y-4">
                {/* Row 1: Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4.5 h-4.5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-none bg-slate-900 border-2 ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30"
                        } text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all font-medium`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        className={`w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-none bg-slate-900 border-2 ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30"
                        } text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all font-medium`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Custom Popup Service Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className={`w-full pl-11 pr-4 py-3.5 sm:py-4 rounded-none bg-slate-900 border-2 ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30"
                        } text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all font-medium`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* CUSTOM POPUP SERVICE TRIGGER FIELD */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                      Service Required <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Layers className="w-4.5 h-4.5 text-cyan-400" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsServicePickerOpen(true)}
                        className={`w-full pl-11 pr-10 py-3.5 sm:py-4 rounded-none bg-slate-900 border-2 ${
                          errors.service
                            ? "border-red-500"
                            : "border-slate-800 hover:border-cyan-400"
                        } text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-all font-medium cursor-pointer text-left flex items-center justify-between group`}
                      >
                        <span className={formData.service ? "text-cyan-400 font-bold truncate" : "text-slate-400 text-sm sm:text-base truncate"}>
                          {formData.service || "Select required service..."}
                        </span>
                        <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1 font-medium">{errors.service}</p>
                    )}
                  </div>
                </div>

                {/* Message Field (Full Width) */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Message / Requirements <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4.5 h-4.5" />
                    </div>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your business, features needed, or project requirements..."
                      className={`w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-none bg-slate-900 border-2 ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/30"
                      } text-white text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none font-medium`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-gtm="quote-submit-btn"
                    className="w-full py-4 rounded-none bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.005] active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Get a Free Consultation</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Features Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800/90 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>100% Privacy Protected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero Spam Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>30-Min Callback</span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* CUSTOM SERVICE SELECTION POPUP IN THE MIDDLE OF FORM/SCREEN */}
      {isServicePickerOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setIsServicePickerOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-slate-950 border-2 border-cyan-400 rounded-none p-5 sm:p-7 shadow-[0_0_60px_rgba(34,211,238,0.3)] text-white my-auto overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Select Required Service
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsServicePickerOpen(false)}
                className="p-2 rounded-none text-slate-400 hover:text-white bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Grid of Services (Middle Popup Options) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[60vh] overflow-y-auto pr-1">
              {servicesList.map((item) => {
                const IconComp = item.icon;
                const isSelected = formData.service === item.name;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, service: item.name }));
                      if (errors.service) {
                        setErrors((prev) => ({ ...prev, service: "" }));
                      }
                      setIsServicePickerOpen(false);
                    }}
                    className={`p-3.5 rounded-none border-2 text-left transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        : "bg-slate-900/90 border-slate-800/90 hover:border-cyan-400/80 hover:bg-slate-900 text-slate-300 hover:text-white"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-none flex items-center justify-center flex-shrink-0 font-bold transition-colors ${
                        isSelected
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-cyan-400"
                      }`}
                    >
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-bold truncate flex items-center justify-between gap-1">
                        <span className="truncate">{item.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Footer Actions */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setIsServicePickerOpen(false)}
                className="px-5 py-2.5 rounded-none bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
