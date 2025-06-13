import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const socialIcon = {
    hover: {
      y: -5,
      scale: 1.1,
      backgroundColor: 'rgba(74, 222, 128, 0.1)',
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <motion.footer
      className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <motion.div
        className="text-white-500 flex gap-2"
        variants={item}
      >
        <motion.p whileHover={{ color: '#4ade80' }}>Terms & Conditions</motion.p>
        <p>|</p>
        <motion.p whileHover={{ color: '#4ade80' }}>Privacy Policy</motion.p>
      </motion.div>

      <motion.div
        className="flex gap-3"
        variants={item}
      >
        {[{ icon: 'github', link: "https://github.com/musthak582" }, { icon: 'linkedin', link: "https://www.linkedin.com/in/mohammed-musthak" }].map((social) => (
          <motion.div
            key={social.icon}
            className="social-icon"
            variants={socialIcon}
            whileHover="hover"
          >
            <a href={social.link} target="_blank" className="flex items-center justify-center">
              <motion.img
                src={`assets/${social.icon}-original.svg`}
                alt={social.icon}
                className="w-6 h-6"
                whileHover={{ rotate: 15 }}
              />
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-white-500"
        variants={item}
      >
        © 2025 Mohammed Musthak. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;