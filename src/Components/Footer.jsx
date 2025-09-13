import React from "react";
import { FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
 <footer className="bg-sky-400 text-white pt-10 pb-6 mt-10">
    <motion.p
  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }}
>
  <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-6 text-center md:text-right items-start">
    <div>
      <h3 className="text-lg font-semibold mb-1 border-b border-white pb-1 inline-block">
          Quick Links
      </h3>
      <ul className="space-y-2">
        <li><a href="#home" className="hover:text-sky-200 transition"> Home</a></li>
        <li><a href="#about" className="hover:text-sky-200 transition">  About us</a></li>
        <li><a href="#services" className="hover:text-sky-200 transition">Services</a></li>
        <li><a href="#work" className="hover:text-sky-200 transition">Our Work</a></li>
        <li><a href="#contact" className="hover:text-sky-200 transition"> Contact us</a></li>
      </ul>
    </div>

  
    <div className="flex flex-col items-start px-25">
      <h3 className="text-lg font-semibold mb-1 border-b border-white pb-1 inline-block">
         Contact us
      </h3>
      <ul className="space-y-1">
        <li className="flex items-center gap-2">
          <FaPhone className="text-white" />
          <a href="tel:01501502126" className="hover:text-sky-200">01501502126</a>
        </li>
        <li className="flex items-center gap-2">
          <FaWhatsapp className="text-white" />
          <a href="https://wa.me/201501502126" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200">
            Whatsapp
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaFacebook className="text-white" />
          <a href="https://www.facebook.com/search/top?q=%D8%A7%D8%B4%D8%B1%D8%A7%D9%82%D8%A9" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200">
            Facebook
          </a>
        </li>
      </ul>
    </div>

 
    <div>
      <h2 className="text-2xl font-bold mb-3">إشراقة</h2>
      <p className="text-sm leading-relaxed">
        إشراقة هي وجهتك الأولى للتقنيات الطبية المتطورة.  
        نحرص على تقديم أفضل الأجهزة والحلول الرقمية لراحتك وجودة خدماتك.
      </p>
    </div>
  </div>

  <div className="text-center text-sm text-white mt-8 border-t border-white pt-4">
    © 2025 إشراقة | جميع الحقوق محفوظة
  </div>
  </motion.p>
</footer>

  );
};

export default Footer;
