import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn } from 'lucide-react';
interface GalleryImage {
  url: string;
  title: string;
  category?: string;
}
export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  // Initial 3 images - you can easily add more to this array
  const images: GalleryImage[] = [{
    url: "/WhatsApp_Image_2025-11-29_at_22.56.06_247c653e.jpg",
    title: 'Cellmax Power in Action',
    category: 'Product'
  }, {
    url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    title: 'Performance Testing',
    category: 'Technology'
  }, {
    url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    title: 'Ready for Adventure',
    category: 'Lifestyle'
  }
  // Add more images here - the layout will automatically adapt
  ];
  return <section id="gallery" className="py-24 bg-gradient-to-b from-[#0a0e1a] to-[#1a1f2e] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#FFD700]">GALLERY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cellmax batteries powering journeys around the world
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" onClick={() => setSelectedImage(image)}>
              {/* Image */}
              <motion.img src={image.url} alt={image.title} className="w-full h-full object-cover" whileHover={{
            scale: 1.1
          }} transition={{
            duration: 0.4
          }} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <motion.div initial={{
                scale: 0
              }} whileHover={{
                scale: 1
              }} transition={{
                duration: 0.3
              }} className="w-16 h-16 bg-[#FFD700]/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-2 border-[#FFD700]">
                    <ZoomIn className="w-8 h-8 text-[#FFD700]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">
                    {image.title}
                  </h3>
                  {image.category && <span className="text-sm text-[#FFD700] font-medium">
                      {image.category}
                    </span>}
                </div>
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFD700] transition-colors duration-300 rounded-2xl"></div>
            </motion.div>)}
        </div>

        {/* Add more images prompt */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="text-center mt-12">
          <div className="inline-block bg-[#1a1f2e] border border-[#FFD700]/30 rounded-full px-8 py-4">
            <p className="text-gray-300">
              <span className="text-[#FFD700] font-bold">{images.length}</span>{' '}
              images • More coming soon
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e1a]/95 backdrop-blur-lg p-4" onClick={() => setSelectedImage(null)}>
            <motion.button initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.8
        }} className="absolute top-6 right-6 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-colors duration-300 z-10" onClick={() => setSelectedImage(null)}>
              <X className="w-6 h-6 text-[#0a0e1a]" />
            </motion.button>

            <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.8,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="max-w-6xl w-full" onClick={e => e.stopPropagation()}>
              <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
              <div className="text-center mt-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.category && <span className="text-lg text-[#FFD700] font-medium">
                    {selectedImage.category}
                  </span>}
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </section>;
}