import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    contactMethod: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+91[- ]?)?[6-9]\d{9}$/;

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";
    
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Please enter a valid Indian phone number";
    
    if (!formData.service) newErrors.service = "Please select a service type";
    if (!formData.message.trim()) newErrors.message = "Please enter your message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      _captcha: "false",
      _template: "table",
      subject: formData.subject || `New Contact Form Submission - ${formData.service} Inquiry`,
      fullName: `${formData.firstName} ${formData.lastName}`.trim(),
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@arrowemsg-engg.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("🎉 Message sent successfully! We'll get back to you within 24 hours.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          subject: "",
          contactMethod: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email Us",
      details: " info@arrowemsg-engg.net",
      bgColor: "bg-blue-600",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Call Us",
      details: "+65 6909 7403",
      bgColor: "bg-purple-600",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Visit Us",
      details: "7 Gambas Crescent, ARK @ Gambas #05-45, Singapore 757087",
      bgColor: "bg-orange-500",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: "WhatsApp",
      details: "+65 6909 7403",
      bgColor: "bg-green-600",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Other",
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <ToastContainer 
        position="top-center" 
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      {/* HERO HEADER */}
      <header className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-linear-to-r from-[#024369] to-cyan-600 text-white shadow-2xl"
        >
          <div className="px-6 sm:px-10 lg:px-12 py-10 md:py-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Get In Touch
            </h1>
            <p className="mt-3 text-sm md:text-base opacity-90 max-w-2xl">
              Have a project in mind? We're here to help bring your ideas to life. 
              Let's discuss how we can work together.
            </p>
          </div>
        </motion.div>
      </header>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT FORM */}
          <div className="lg:col-span-2 -mt-20">
            <motion.form
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-7"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
                  <FiMessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Send Us a Message</h2>
                  <p className="text-xs text-gray-500">
                    We typically reply within 2-4 hours during business days.
                  </p>
                </div>
              </motion.div>

              {/* FORM GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    First Name*
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border pl-10 pr-3 py-3 focus:outline-none focus:ring-2 transition-all ${
                        errors.firstName
                          ? "border-red-400 ring-red-200"
                          : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                      }`}
                      placeholder="Your first name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                  )}
                </motion.div>

                {/* Last Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    placeholder="Your last name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email Address*
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border pl-10 pr-3 py-3 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-400 ring-red-200"
                          : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                      }`}
                      placeholder="you@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Phone Number*
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full rounded-lg border pl-10 pr-3 py-3 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? "border-red-400 ring-red-200"
                          : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                      }`}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </motion.div>

                {/* Service */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="md:col-span-2"
                >
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Service Type*
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.service
                        ? "border-red-400 ring-red-200"
                        : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-500 mt-1">{errors.service}</p>
                  )}
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6"
              >
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                  placeholder="Project title or short subject"
                />
              </motion.div>

              {/* Contact Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-6"
              >
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Preferred Contact Method
                </label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                >
                  <option value="">No preference</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-6"
              >
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full rounded-lg border px-3 py-3 focus:outline-none focus:ring-2 transition-all ${
                    errors.message
                      ? "border-red-400 ring-red-200"
                      : "border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                  }`}
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex justify-end mt-8"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all flex items-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </div>

          {/* RIGHT SIDE INFO CARDS */}
          <aside className="space-y-5">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-center bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`${method.bgColor} w-20 h-full flex items-center justify-center text-white text-xl`}>
                  {method.icon}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">{method.title}</h4>
                  <p className="text-sm text-gray-600">{method.details}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-md border p-5 flex flex-col"
            >
              <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebookF />, color: "bg-blue-600" },
                  { icon: <FaTwitter />, color: "bg-sky-400" },
                  { icon: <FaLinkedinIn />, color: "bg-blue-800" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 rounded-lg ${social.color} text-white flex items-center justify-center shadow cursor-pointer hover:shadow-md transition-all`}
                  >
                    {social.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>

        {/* MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14"
        >
          <div className="bg-white border rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">Find Us Here</h3>
              <p className="text-sm text-gray-500">Our office location</p>
            </div>
            <div className="w-full h-80 md:h-96">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}