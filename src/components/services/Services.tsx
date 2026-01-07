import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { services } from "@/utils/serviceData";
import { processSteps } from "@/utils/processSteps";
import { whyChooseMe } from "@/utils/whyChooseMe";
import { pricingModels } from "@/utils/pricingModels";

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

const Services = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            SERVICES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
            Tech Services <span className="text-gradient">I Offer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From concept to deployment, I provide end-to-end solutions for your
            digital needs. Whether you're a startup, business, or individual, I
            can help bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass-effect rounded-2xl p-8 relative group"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  Popular
                </div>
              )}

              <div className="inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6">
                <service.icon size={32} />
              </div>

              <h3 className="text-xl font-display font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <CheckCircle2
                      size={16}
                      className="text-primary mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-balance">
              How I Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven process that ensures successful project delivery from
              start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-6 h-full">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-primary/30" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
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
            {whyChooseMe.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Pricing Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-balance">
              Flexible Engagement Models
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the working model that best fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingModels.map((model) => (
              <motion.div
                key={model.title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`glass-effect rounded-2xl p-8 text-center ${
                  model.popular ? "border-2 border-primary" : ""
                }`}
              >
                {model.popular && (
                  <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium mb-4">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center justify-center"
                    >
                      <CheckCircle2 size={16} className="text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center glass-effect rounded-2xl p-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg text-pretty">
            Let's discuss how I can help you achieve your goals. Get a free
            consultation and project quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                Get Free Consultation
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
