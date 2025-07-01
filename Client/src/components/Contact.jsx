import React, {useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

const textVariant = {
    hidden: {opacity: 0, y: 20},
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

const Contact = () => {
    const form = useRef();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
        )

            .then(
                (result) => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <motion.section
            id="contact"
            className="py-20 px-6 h-auto min-h-screen bg-black"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 1, ease: 'easeOut'}}
        >
            <motion.h2
                className="text-4xl font-bold mb-10 text-blue-400 text-center"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                custom={0}
            >
                Contact
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
                {/* Contact Details */}
                <motion.div
                    className="w-full lg:w-1/2 space-y-6"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                >
                    <div className=" border p-2 rounded-md bg-gray-500 gap-2 border-gray-600">
                        <motion.p
                            className="text-lg text-white"
                            variants={textVariant}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                        >
                            Email:{" "}
                            <motion.a
                                // whileHover={{ scale: 1.05, color: '#2563eb' }}
                                className=" text-white"
                                href="mailto:shyam8patidar@gmail.com"
                            >
                                shyam8patidar@gmail.com
                            </motion.a>
                        </motion.p>

                        <motion.p
                            className="text-lg text-white"
                            variants={textVariant}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                        >
                            Phone:{" "}
                            <motion.a
                                // whileHover={{ scale: 1.05, color: '#16a34a' }}
                                className=" text-white"
                                href="tel:+916263662870"
                            >
                                +91 6263662870
                            </motion.a>
                        </motion.p>

                        <motion.p
                            className="text-lg text-white"
                            variants={textVariant}
                            initial="hidden"
                            whileInView="visible"
                            custom={3}
                        >
                            Location: Indore, MP, India
                        </motion.p>
                    </div>


                    {/* Contact Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-4 mt-8"
                    >
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                        />
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            required
                            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Map Embed */}
                <motion.div
                    className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-700"
                    initial={{scale: 0.9, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.6}}
                >
                    <iframe
                        title="Indore Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1701426096793!2d75.8577277750518!3d22.71956887938878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc2cba1a5db%3A0x8919274091d8e983!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1689153084723!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                    ></iframe>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
