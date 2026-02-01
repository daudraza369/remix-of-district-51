import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plane, CalendarClock, Building2, Truck, Award, Flower2, Download } from 'lucide-react';
import catalogPreview from '@/assets/flowers-catalog-preview.png';

// Upload your PDF to: public/catalogs/wholesale-catalog.pdf
const CATALOG_FILENAME = "District-Flowers-Wholesale-Catalog.pdf";
const CATALOG_PATH = "/catalogs/wholesale-catalog.pdf";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Flowers = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      
      {/* Section 1: Value Proposition Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-mauve via-lavender/40 to-blush" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-green/10 to-transparent" />
        {/* Darker overlay in upper-left for logo contrast */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[hsl(270,25%,55%)] via-mauve/60 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-ivory/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pear/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-night-green font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6"
            >
              Premium Wholesale Flowers,
              <br />
              Fresh from&nbsp;Source
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-night-green/80 font-body text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto"
            >
              Direct imports from Holland & Kenya • Weekly shipments • Trusted supplier to Fairmont&nbsp;Hotels
            </motion.p>
            
            {/* Differentiator Badges */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              <div className="inline-flex items-center gap-2 bg-ivory/90 backdrop-blur-sm px-4 py-2.5 rounded-full text-night-green font-body text-sm md:text-base shadow-sm">
                <Plane className="w-4 h-4 text-lavender" />
                <span>Holland & Kenya Direct&nbsp;Imports</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-ivory/90 backdrop-blur-sm px-4 py-2.5 rounded-full text-night-green font-body text-sm md:text-base shadow-sm">
                <CalendarClock className="w-4 h-4 text-lavender" />
                <span>Fresh Weekly&nbsp;Arrivals</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-ivory/90 backdrop-blur-sm px-4 py-2.5 rounded-full text-night-green font-body text-sm md:text-base shadow-sm">
                <Building2 className="w-4 h-4 text-lavender" />
                <span>Fairmont Hotel&nbsp;Partner</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Catalog Download CTA */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Section Heading */}
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-moss/70 text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-3"
            >
              Download Now
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="text-night-green font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-10"
            >
              This Week's Wholesale&nbsp;Pricelist
            </motion.h2>
            
            {/* Catalog Preview Card */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative group mb-10"
            >
              <div className="relative max-w-md mx-auto">
                {/* Shadow/glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-lavender/20 to-mauve/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white rounded-xl shadow-xl border border-stone/20 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={catalogPreview}
                    alt="District Flowers Wholesale Catalog Preview"
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-night-green/0 group-hover:bg-night-green/5 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
            
            {/* Download Button */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <Button
                asChild
                size="xl"
                className="w-full sm:w-auto sm:min-w-[280px] gap-2 sm:gap-3 text-xs sm:text-sm md:text-base px-4 sm:px-6 py-3 sm:py-4 whitespace-normal text-center leading-tight"
              >
                <a href={CATALOG_PATH} download={CATALOG_FILENAME} className="flex items-center justify-center">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Download the Full Catalogue for Latest Arrivals</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Why Choose District Flowers */}
      <section className="py-20 md:py-28 bg-stone/10">
        <div className="container px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-14"
            >
              <p className="text-slate-moss/70 text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-3">
                The District Difference
              </p>
              <h2 className="text-night-green font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight">
                Why Choose District&nbsp;Flowers
              </h2>
            </motion.div>
            
            {/* 3-Column Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Column 1: Reliable Supply */}
              <motion.div
                variants={fadeUpVariants}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender/30 mb-6 group-hover:bg-lavender/50 transition-colors duration-300">
                  <Truck className="w-7 h-7 text-night-green" />
                </div>
                <h3 className="text-night-green font-heading text-xl md:text-2xl uppercase tracking-tight mb-3">
                  Reliable Supply
                </h3>
                <p className="text-slate-moss font-body text-base md:text-lg leading-relaxed">
                  Weekly shipments plus emergency backup stock ensure you never run&nbsp;short.
                </p>
              </motion.div>
              
              {/* Column 2: Premium Quality */}
              <motion.div
                variants={fadeUpVariants}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender/30 mb-6 group-hover:bg-lavender/50 transition-colors duration-300">
                  <Award className="w-7 h-7 text-night-green" />
                </div>
                <h3 className="text-night-green font-heading text-xl md:text-2xl uppercase tracking-tight mb-3">
                  Premium Quality
                </h3>
                <p className="text-slate-moss font-body text-base md:text-lg leading-relaxed">
                  Hotel-grade flowers at wholesale prices, sourced from specialty&nbsp;farms.
                </p>
              </motion.div>
              
              {/* Column 3: Wide Selection */}
              <motion.div
                variants={fadeUpVariants}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mauve/30 mb-6 group-hover:bg-mauve/50 transition-colors duration-300">
                  <Flower2 className="w-7 h-7 text-night-green" />
                </div>
                <h3 className="text-night-green font-heading text-xl md:text-2xl uppercase tracking-tight mb-3">
                  Wide Selection
                </h3>
                <p className="text-slate-moss font-body text-base md:text-lg leading-relaxed">
                  Extensive variety from Holland and Kenya's finest specialty&nbsp;farms.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flowers;
