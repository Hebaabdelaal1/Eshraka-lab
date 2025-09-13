import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const devices = [
    {
      title: "3D Printer",
      desc: "Advanced 3D printer for high-precision dental restorations and ideal prototype printing.",
      img: "/imgs/3d-printer.jpeg",
    },
    {
      title: "Curing Box",
      desc: "Device dedicated to curing and processing dental restorations for long-lasting strength and durability.",
      img: "/imgs/curing-box.jpeg",
    },
    {
      title: "Extra Oral Scanner",
      desc: "High-precision extraoral scanner to capture restoration details quickly and easily.",
      img: "/imgs/extra-oral.jpeg",
    },
    {
      title: "Intraoral Scanner",
      desc: "State-of-the-art intraoral scanning technology for accurate digital impressions, eliminating traditional methods.",
      img: "/imgs/scaner.jpeg",
    },
    {
      title: "Milling Machine",
      desc: "Advanced milling machine for zirconia fabrication with the highest quality, ensuring optimal clinical results.",
      img: "/imgs/miling-machinejpeg.jpeg",
    },
    {
      title: "Sintering Furnace – Old",
      desc: "The old sintering furnace uses the same heating principle but with less precision and slower speed.",
      img: "/imgs/sintering-fulance.jpg",
    },
    {
      title: "Sintering Furnace – Modern",
      desc: "The modern sintering furnace ensures zirconia heating at precise temperatures for strong, durable dental restorations.",
      img: "/imgs/sintering-furance2.jpg",
    }
  ];

  const servicesList = [
    { name: "Zircon HT", price: "500 EGP" },
    { name: "Zircon Katana", price: "850 EGP" },
    { name: "Zircon 3D", price: "750 EGP" },
    { name: "PMMA", price: "200 EGP" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20" id="services">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-8 text-sky-700 border-b-4 border-sky-300 inline-block pb-3">
            أجهزتنا
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-semibold">
            في <span className="text-sky-700">معمل Eshraka Digital-Lab</span> نسعى دائمًا لتقديم
            حلول متكاملة في عالم التركيبات السنية، بداية من المسح الرقمي وحتى التصميم
            والطباعة بأحدث الأجهزة والخامات. هدفنا أن نكون شريكك الأمثل لتحقيق الجودة
            والنجاح في كل خطوة.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-20">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              <img
                src={device.img}
                alt={device.title}
                className="w-full h-64 md:h-72 lg:h-80 object-cover flex-shrink-0"
              />
              <div className="p-6 text-left flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{device.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{device.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services & Price List */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-sky-700">
            Eshraka Services and List Price
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-6 flex flex-col items-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-sky-600 text-lg font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
