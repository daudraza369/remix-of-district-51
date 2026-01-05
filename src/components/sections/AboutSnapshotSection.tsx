import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import teamImage from '@/assets/hotel-atrium.jpg';

export function AboutSnapshotSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-padding bg-night-green pattern-overlay relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-ivory mb-6">Designed to Breathe Life Into Spaces</h2>
            <p className="text-xl text-stone mb-4">A design-driven approach to greenery.</p>
            <p className="text-body text-stone/80 leading-relaxed">
              District Interiors specializes in transforming indoor and outdoor environments through expert plantscaping, luxury softscaping, and custom tree fabrication. Our mission is simple: to merge natural aesthetics with architectural precision to deliver beauty, sustainability, and comfort.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src={teamImage}
                alt="Luxury hotel atrium with greenery installations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-green/30 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pear/20 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-ivory/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-l from-pear/5 to-transparent -translate-y-1/2" />
    </section>
  );
}
