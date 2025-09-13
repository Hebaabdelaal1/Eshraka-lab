import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { HiMenu, HiX, HiHome } from "react-icons/hi"; 
import { FaInfoCircle } from "react-icons/fa"; 
import { MdDesignServices } from "react-icons/md"; 
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
                <motion.p
  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }}
>
    <header className="bg-white text-sky-400 fixed w-full top-0 z-50 shadow-md py-2">

      <div className="flex items-center justify-between px-3 ">
      
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 font-semibold w-full">
          <a href="#home" className="flex items-center gap-2 hover:text-sky-600 transition">
            <IoHome className="h-5 w-5" />
             الرئيسية 
          </a>
          <a href="#about" className="flex items-center gap-2 hover:text-sky-600 transition">
            <FaInfoCircle className="h-5 w-5" />
        من نحن
          </a>
          <a href="#services" className="flex items-center gap-2 hover:text-sky-600 transition">
            <MdDesignServices className="h-5 w-5" /> 
            خدماتنا
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-sky-600 transition">
            <BiSolidContact className="h-5 w-5" />
            تواصل معنا
          </a>

          {/* Logo */}
          <img 
            src="/imgs/Logo2.jpg" 
            alt="Logo" 
            className="h-25 w-80  ml-auto"
          />
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-sky-400"
        >
          {isOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-6 bg-white px-6 py-6 text-sky-400 font-semibold">
          <a
            href="#home"
            className="flex items-center gap-2 hover:text-sky-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <HiHome className="h-5 w-5" />  الرئيسية
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-sky-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaInfoCircle className="h-5 w-5" /> من نحن
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 hover:text-sky-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <MdDesignServices className="h-5 w-5" /> خدماتنا
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-sky-600 transition"
            onClick={() => setIsOpen(false)}
          >
            <BiSolidContact className="h-5 w-5" /> تواصل معنا
          </a>
        </nav>
      )}
    </header>

<div
id="home"
className="w-full h-[60vh] md:h-[90vh] bg-cover bg-center relative"
  style={{ backgroundImage: "url('/imgs/header.jpeg')" }}
>
<div className="absolute inset-0 text-white px-4 flex flex-col items-end justify-center">
<h1 className="text-4xl md:text-7xl font-bold mb-4">
  Eshraka Lab
</h1>

<p className="text-base md:text-xl leading-relaxed">
  نمنحك ابتسامة مشرقة باستخدام أحدث تقنيات التركيبات السنية
</p>
<p className="text-base md:text-xl leading-relaxed font-semibold">
  مع دقة عالية وجودة تضمن لك راحة وثقة كل يوم
</p>




<button
  onClick={() => window.open("https://wa.me/201501502126?text=مرحبا!%20أود%20الاستفسار%20عن%20خدماتكم", "_blank")}
  className="bg-gradient-to-r from-sky-500 to-sky-300 text-white px-6 py-3 rounded-lg font-semibold mt-10 shadow-lg hover:opacity-90 transition flex items-center gap-2"
>
  تواصل معنا
  <FaWhatsapp className="text-white text-lg" />
</button>




</div>

</div>




</motion.p>

    </>
  );
};

export default Navbar;
