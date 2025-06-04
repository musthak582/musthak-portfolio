import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../public/constants';

const NavItems = ({ onClick = () => { } }) => {
  // Updated with your green color
  const desktopItem = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      color: "#4ade80",
      transition: {
        type: "spring",
        stiffness: 500
      }
    }
  };

  return (
    <ul className="nav-ul">
      {navLinks.map((item, index) => (
        <motion.li
          key={item.id}
          className="nav-li"
          variants={desktopItem}
          whileHover="hover"
          custom={index}
        >
          <motion.a
            href={item.href}
            className="nav-li_a"
            onClick={onClick}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              color: "#4ade80"
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              className="relative inline-block"
              whileHover={{
                transition: { staggerChildren: 0.1 }
              }}
            >
              {item.name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  whileHover={{
                    y: -3,
                    color: "#4ade80",
                    transition: {
                      type: "spring",
                      stiffness: 500
                    }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
};

const MobileNavItems = ({ onClick = () => { }, isOpen }) => {
  // Updated with your green color
  const mobileItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      color: "#4ade80",
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="nav-ul"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            },
            hidden: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 }
            }
          }}
        >
          {navLinks.map((item, index) => (
            <motion.li
              key={item.id}
              className="nav-li"
              variants={mobileItem}
              custom={index}
              whileHover="hover"
            >
              <a href={item.href} className="nav-li_a" onClick={onClick}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const AnimatedLogo = () => {
  const logoText = "{<Musthak />}";
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
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className="flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {logoText.split('').map((char, index) => {
        const greenChars = ['<', '>', '/'];

        return (
          <motion.span
            key={index}
            variants={item}
            className={`text-xl font-mono font-bold ${greenChars.includes(char)
              ? 'text-[#4ade80]'
              : 'text-white'
              }`}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Menu button animation
  const menuButton = {
    tap: { scale: 0.9 },
    hover: { scale: 1.1, color: "#4ade80" } // Added your green to hover
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="flex items-center">
            <AnimatedLogo />
          </a>

          <motion.button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-[#4ade80] focus:outline-none sm:hidden flex" // Added your green
            aria-label="Toggle menu"
            variants={menuButton}
            whileHover="hover"
            whileTap="tap"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </motion.button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <MobileNavItems onClick={closeMenu} isOpen={isOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;