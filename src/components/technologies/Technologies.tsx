import { useState } from "react";
import { iconsData } from "./iconsData";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const rows = [
    iconsData.slice(0, 20),
    iconsData.slice(20, 40),
    iconsData.slice(40, 60),
    iconsData.slice(60),
  ];

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return (IconComponent || Icons.Code2) as React.ComponentType<{
      className?: string;
    }>;
  };
  return (
    <section
      id="tech-stack"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <p className="text-sm font-mono text-accent uppercase tracking-wider">
              Tech Stack
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Technologies & Tools I Master
            </h2>
          </motion.div>

          <div className="space-y-6 relative">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="relative">
                <div className="marquee-container">
                  <motion.div
                    className="marquee-content"
                    animate={{
                      x: rowIndex % 2 === 0 ? [0, -1920] : [-1920, 0],
                    }}
                    transition={{
                      x: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 30 + rowIndex * 5,
                        ease: "linear",
                      },
                    }}
                  >
                    {/* Duplicate the row twice for seamless loop */}
                    {[...row, ...row].map((tech, index) => {
                      const IconComponent = getIcon(tech.icon);
                      return (
                        <motion.div
                          key={`${tech.name}-${index}`}
                          className="marquee-item"
                          onHoverStart={() => setHoveredTech(tech.name)}
                          onHoverEnd={() => setHoveredTech(null)}
                          whileHover={{ scale: 1.1 }}
                        >
                          <div
                            className={`
                            relative px-6 py-4 rounded-xl border-2
                            bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm
                            shadow-lg transition-all duration-300
                            ${tech.color || "border-border"}
                            hover:shadow-2xl hover:shadow-accent/30 hover:border-accent
                            group cursor-default
                          `}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                              animate={{
                                x:
                                  hoveredTech === tech.name
                                    ? ["-200%", "200%"]
                                    : "-200%",
                              }}
                              transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                repeat:
                                  hoveredTech === tech.name
                                    ? Number.POSITIVE_INFINITY
                                    : 0,
                              }}
                            />

                            <div className="relative flex items-center gap-3">
                              {IconComponent && (
                                <IconComponent className="w-5 h-5 flex-shrink-0" />
                              )}
                              <h3 className="font-bold text-base whitespace-nowrap">
                                {tech.name}
                              </h3>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-mono">
                                {tech.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            ))}

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
