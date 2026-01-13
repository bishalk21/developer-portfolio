import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { services } from "@/utils/serviceData";
import { processSteps } from "@/utils/processSteps";
import { whyChooseMe } from "@/utils/whyChooseMe";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const pricingModels = [
  {
    title: "Project-Based",
    description:
      "Fixed price for defined scope and deliverables. Perfect for specific projects with clear requirements.",
    features: ["Fixed timeline", "Clear deliverables", "Milestone payments"],
    popular: false,
  },
  {
    title: "Hourly Rate",
    description:
      "Pay only for the hours worked. Ideal for ongoing development and maintenance work.",
    features: ["Flexible scope", "Time tracking", "Regular updates"],
    popular: true,
  },
  {
    title: "Monthly Retainer",
    description:
      "Dedicated hours each month. Best for long-term partnerships and continuous development.",
    features: ["Priority support", "Cost effective", "Ongoing partnership"],
    popular: false,
  },
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: whyProgress } = useScroll({
    target: whyChooseRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });

  const servicesY = useTransform(servicesProgress, [0, 1], [100, -100]);
  const whyY = useTransform(whyProgress, [0, 1], [80, -80]);
  const ctaScale = useTransform(ctaProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const ctaOpacity = useTransform(
    ctaProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.8]
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen relative overflow-hidden items-center text-center flex flex-col px-4 sm:px-6 lg:px-8 py-24"
    >
      <h2 className="mb-2 relative text-5xl font-extrabold capitalize z-10 inline-block">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-[#8a8a8a5a] text-8xl">
          01
        </span>{" "}
        Services
      </h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From concept to deployment, I provide end-to-end solutions for your
            digital needs. Whether you're a startup, business, or individual, I
            can help bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesRef}
          style={{ y: servicesY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-effect rounded-2xl p-8 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {service.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-xs font-medium shadow-lg"
                >
                  Popular
                </motion.div>
              )}

              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300 mb-6 relative z-10"
              >
                <service.icon size={32} />
              </motion.div>

              <h3 className="text-xl font-display font-bold mb-3 relative z-10">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>

              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-primary mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles size={16} />
              PROCESS
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-balance">
              How I Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven process that ensures successful project delivery from
              start to finish.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />

                    <motion.div
                      className="relative mb-6 inline-flex"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      <div className="relative p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300">
                        <step.icon size={40} />
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-colors"
                    >
                      <span className="text-2xl font-display font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {step.description}
                    </p>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                      whileHover={{ scale: 1.2 }}
                      className="hidden lg:flex absolute top-24 -right-4 transform -translate-y-1/2 z-10 items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50"
                    >
                      <ArrowRight
                        className="text-primary-foreground"
                        size={20}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Me */}
        <motion.div
          ref={whyChooseRef}
          style={{ y: whyY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles size={16} />
              WHY ME
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-balance">
              Why Work With Me?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Combining technical expertise with a client-focused approach to
              deliver exceptional results.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {whyChooseMe.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-effect rounded-2xl p-6 text-center relative group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent mb-4 relative z-10"
                >
                  <item.icon
                    size={28}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </motion.div>
                <h3 className="font-bold mb-2 text-lg relative z-10">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {item.description}
                </p>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          style={{ scale: ctaScale, opacity: ctaOpacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center relative rounded-2xl p-12 max-w-3xl mx-auto overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="glass-effect rounded-2xl p-12 relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles size={16} />
              LET'S COLLABORATE
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-balance">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg text-pretty">
              Let's discuss how I can help you achieve your goals. Get a free
              consultation and project quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden"
                  onClick={() => scrollToSection("#contact")}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                >
                  View My Work
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
