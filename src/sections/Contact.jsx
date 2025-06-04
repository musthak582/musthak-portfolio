import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
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

  const inputFocus = {
    focus: {
      borderColor: '#4ade80',
      boxShadow: '0 0 0 2px rgba(74, 222, 128, 0.2)',
      transition: { duration: 0.2 }
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const dotColors = {
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500'
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Mohammed Musthak',
          from_email: form.email,
          to_email: 'mhdmusthak582@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <motion.section
      className="c-space my-20"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {alert.show && <Alert {...alert} />}

      <motion.div
        className="relative min-h-screen flex items-center justify-center flex-col p-8 bg-black-200 border border-black-300 rounded-md"
        variants={item}
      >
        <motion.div
          className="w-full max-w-3xl bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
          whileHover={{ y: -5 }}
        >
          {/* Terminal Header */}
          <motion.div
            className="flex items-center bg-gray-900 px-4 py-2"
            variants={item}
          >
            <div className="flex space-x-2 mr-4">
              {['red', 'yellow', 'green'].map((color) => (
                <motion.div
                  key={color}
                  className={`w-3 h-3 rounded-full ${dotColors[color]}`}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </div>
            <div className="text-gray-300 text-sm font-mono">contact-form.js</div>
          </motion.div>

          {/* Terminal Body */}
          <motion.div
            className="p-6 font-mono text-gray-300 bg-black-200 border border-black-300"
            variants={container}
          >
            <motion.div className="mb-8" variants={item}>
              <motion.h3
                className="text-2xl font-bold text-[#22C55E] mb-2"
                animate={{
                  textShadow: ['0 0 0px #22C55E', '0 0 8px #22C55E', '0 0 0px #22C55E'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                // Let's talk
              </motion.h3>
              <motion.p
                className="text-[#afb0b6]"
                variants={item}
              >
                {'/*'}
                Whether you're looking to build a new website, improve your existing platform,
                or bring a unique project to life, I'm here to help.
                {'*/'}
              </motion.p>
            </motion.div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'message'].map((field) => (
                <motion.div
                  key={field}
                  className="flex flex-col"
                  variants={item}
                >
                  <label className="text-blue-400 mb-1">
                    <span className="text-purple-400">const</span> {field} =
                    <span className="text-yellow-300">
                      '{field === 'message' ?
                        (form[field] ? `${form[field].substring(0, 20)}${form[field].length > 20 ? '...' : ''}` : '')
                        : form[field] || ''}'
                    </span>;
                  </label>
                  {field === 'message' ? (
                    <motion.textarea
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-black-300 rounded px-3 py-2 text-[#afb0b6] outline-none border border-transparent"
                      placeholder={`Enter your ${field}`}
                      variants={inputFocus}
                      whileFocus="focus"
                    />
                  ) : (
                    <motion.input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      className="bg-black-300 rounded px-3 py-2 text-[#afb0b6] outline-none border border-transparent"
                      placeholder={`Enter your ${field}`}
                      variants={inputFocus}
                      whileFocus="focus"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded font-mono ${loading
                  ? 'bg-yellow-600 text-yellow-100 cursor-not-allowed'
                  : 'bg-black-300 text-white'
                  } flex items-center gap-1 border border-black-300`}
                variants={item}
                whileHover={!loading ? {
                  backgroundColor: '#4ade80',
                  color: '#000',
                  scale: 1.05
                } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
              >
                {loading ? 'Sending...' : 'SendMessage'}
                <span className="text-yellow-300">()</span>
                {!loading && (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  >
                    →
                  </motion.span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;