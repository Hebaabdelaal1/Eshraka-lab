import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20" id="contact">
<motion.p
  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }}
>
<h2 className="text-5xl font-extrabold mb-12 text-sky-700 border-b-4 border-sky-300 pb-3 text-center w-fit mx-auto">
  Contact Us
</h2>



      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto text-right">

        <a
          href="tel:01501502126"
          className="flex flex-row-reverse items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <FaPhoneAlt className="text-sky-600 text-2xl ml-2" />
          <p className="text-gray-600">01501502126</p>
        </a>


        <a
          href="https://wa.me/201501502126"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row-reverse items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <FaWhatsapp className="text-green-500 text-2xl ml-2" />
          <p className="text-gray-600">01501502126</p>
        </a>


        {/* <div className="flex flex-row-reverse items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
          <FaMapMarkerAlt className="text-red-500 text-2xl ml-2" />
          <p className="text-gray-600">
            ميدان الشبان، أعلى صيدلية السلامة، سوهاج، مصر
          </p>
        </div> */}

        <a
          href="https://www.facebook.com/search/top?q=%D8%A7%D8%B4%D8%B1%D8%A7%D9%82%D8%A9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row-reverse items-center bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:col-span-2"
        >
          <FaFacebook className="text-blue-600 text-2xl ml-2" />
          <span className="text-sky-600 hover:underline">
            صفحة إشراقة على فيسبوك
          </span>
        </a>
      </div>

 {/* <section className="py-16 bg-gray-50">
  <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
    <iframe
      title="Eshraka Digital-Lab Location"
      src="https://www.google.com/maps?q=26.5503056,31.6998056&hl=ar&z=17&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section> */}


</motion.p>
    </div>
  );
};

export default Contactus;
