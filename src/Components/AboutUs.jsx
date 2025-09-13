import React from 'react'
import { motion } from "framer-motion";


const AboutUs = () => {
  return (
    
    <div className="px-6 py-12 max-w-6xl mx-auto text-gray-800 leading-relaxed text-center mt-15" id="about">
      <motion.p
  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }}
>
    <h2 className="text-5xl font-extrabold mb-10 text-sky-700 border-b-4 border-sky-300 inline-block pb-3 ">
    About Us
  </h2>
<section className="mb-16 text-right bg-gray-50 p-10 rounded-2xl shadow-md">
  <p className="mb-8 text-xl md:text-2xl leading-relaxed font-semibold text-gray-800">
    في <span className="text-sky-700">معمل Eshraka Lab</span> نضع الابتسامة في قلب
    رسالتنا، ونسعى دائمًا لتقديم حلول متطورة في عالم التركيبات السنية لتلبية احتياجات
    أطباء الأسنان ومنح مرضاهم أفضل النتائج.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
    نؤمن أن <span className="font-bold text-sky-700">الجودة والدقة</span> هما أساس النجاح،
    لذلك نعتمد على أحدث التقنيات العالمية مثل <span className="font-bold">CAD/CAM</span>،
    والمسح الرقمي <span className="font-bold">(Intraoral Scanning)</span> لضمان تصميم
    تركيبات دقيقة ومريحة، بعيدًا عن الطرق التقليدية.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
    خبرتنا تمتد عبر سنوات من العمل مع أطباء الأسنان لتقديم حلول متكاملة
    في التركيبات الثابتة والمتحركة، حيث نجمع بين التكنولوجيا المتقدمة
    والخبرة العملية لنمنح التركيبات الشكل الطبيعي والمتانة المطلوبة.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
    نحن لا نعتبر أنفسنا مجرد معمل، بل <span className="font-bold text-sky-700">شريك نجاح</span>
    للطبيب في كل خطوة، نحرص على دعمه بخدمة موثوقة وأسعار تنافسية وجودة تضاهي المعايير
    العالمية. فنجاح الطبيب أمام مرضاه هو نجاحنا الحقيقي، ورضا المريض هو رسالتنا الدائمة.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
    نسعى باستمرار لمواكبة أحدث ما توصلت إليه تقنيات طب الأسنان الرقمية، لأننا نؤمن أن 
    الاستثمار في التكنولوجيا هو استثمار في صحة المريض وراحة الطبيب.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
    فريقنا يضم نخبة من الأخصائيين والفنيين المدربين على أعلى مستوى، يعملون بشغف 
    ودقة ليقدموا حلولًا مبتكرة في كل حالة مهما كانت درجة صعوبتها.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
    نلتزم بتقديم خدمة عملاء متميزة وسرعة في الإنجاز، مع الحفاظ على أعلى درجات الجودة، 
    لأن وقت الطبيب والمريض لا يقدر بثمن.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed text-gray-700">
    في معمل إشراقة نؤمن أن الابتسامة ليست مجرد مظهر جمالي، بل هي مفتاح للثقة 
    والسعادة وجودة الحياة، لذلك نجعلها محور كل ما نقوم به.
  </p>

  <p className="mb-8 text-xl md:text-2xl leading-relaxed font-semibold text-gray-800">
    معمل إشراقة… <span className="text-sky-700">وجهتك الأولى</span> لابتسامة تدوم.
  </p>
</section>

   
   </motion.p>
    </div>
  )
}

export default AboutUs
