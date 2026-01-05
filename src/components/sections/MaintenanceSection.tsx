import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import maintenanceImage from '@/assets/maintenance-tech.jpg';

export function MaintenanceSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="section-padding bg-stone relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
              <img
                src={maintenanceImage}
                alt="Technician maintaining plants in office"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-pear/40 rounded-sm -z-10"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-night-green mb-6">We Don't Just Install. We Maintain.</h2>
            <p className="text-xl text-slate-moss mb-4">
              Ensuring your trees stay in shape, season after season.
            </p>
            <p className="text-body text-slate-moss/80 leading-relaxed mb-8">
              Our maintenance programs cover scheduled cleaning, branch alignment, and replacements to preserve perfection. We also offer upgrade paths for expanding greenery programs, so your space can grow with you.
            </p>
            <Button variant="default" size="lg" onClick={scrollToContact}>
              Ask About Our Maintenance Plans
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
