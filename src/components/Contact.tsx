import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../constants';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id='contact' className='section-padding relative bg-gradient-to-br from-[#f7faff] via-[#e3e8f7] to-[#c7d2fe] dark:from-[#181c2b] dark:via-[#232946] dark:to-[#1e293b] transition-colors duration-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-16'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <p className='subheading text-primary-500 dark:text-primary-300'>Get In Touch</p>
          <h2 className='heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-200 drop-shadow-lg'>Contact</h2>
        </motion.div>

        <div className='mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col gap-6 sm:gap-8'
          >
            <h3 className='text-xl sm:text-2xl font-bold text-primary-700 dark:text-primary-200'>Let's talk</h3>
            <p className='text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed'>
              Have a project in mind or just want to connect? Feel free to reach out and I'll get back to you as soon as possible.
            </p>

            <div className='flex flex-col gap-4 sm:gap-6 mt-2 sm:mt-4'>
              <div className='flex items-center gap-3 sm:gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-500/10 flex items-center justify-center'>
                  <Phone className='w-4 h-4 sm:w-5 sm:h-5 text-primary-500' />
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-medium text-primary-700 dark:text-primary-200'>Phone</h4>
                  <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>{contactInfo.phone}</p>
                </div>
              </div>

              <div className='flex items-center gap-3 sm:gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-500/10 flex items-center justify-center'>
                  <Mail className='w-4 h-4 sm:w-5 sm:h-5 text-primary-500' />
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-medium text-primary-700 dark:text-primary-200'>Email</h4>
                  <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 break-all'>{contactInfo.email}</p>
                </div>
              </div>

              <div className='flex items-center gap-3 sm:gap-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-500/10 flex items-center justify-center'>
                  <MapPin className='w-4 h-4 sm:w-5 sm:h-5 text-primary-500' />
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-medium text-primary-700 dark:text-primary-200'>Location</h4>
                  <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>{contactInfo.location}</p>
                </div>
              </div>
              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-primary-200 dark:border-primary-700 mt-2">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=YOUR_LOCATION&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col gap-6 sm:gap-8'
          >
            <div className='glass-card p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-primary-200 dark:border-primary-700'>
              <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-4 sm:gap-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium mb-2 text-primary-700 dark:text-primary-200'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Kishore'
                    required
                    className='form-input bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-primary-200 dark:border-primary-700 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium mb-2 text-primary-700 dark:text-primary-200'>
                    Your Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='kishore@gmail.com'
                    required
                    className='form-input bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-primary-200 dark:border-primary-700 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium mb-2 text-primary-700 dark:text-primary-200'>
                    Your Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='How can I help you?'
                    rows={4}
                    required
                    className='form-input resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-primary-200 dark:border-primary-700 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base'
                  />
                </div>

                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn btn-primary w-full text-sm sm:text-base'
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-green-500 text-center mt-2 text-sm sm:text-base'
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;