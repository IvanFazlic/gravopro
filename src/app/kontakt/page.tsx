import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

const SMTP_CONFIG = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
};

const Contact = () => {
    async function submitForm(formData: FormData) {
        "use server";
    
        function validateEmail(email: string): boolean {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    
        function createMailOptions(name: string, surname: string, email: string, message: string) {
            return {
                from: `${name} ${surname} <${email}>`,
                to: process.env.RECEIVING, // Your receiving email
                subject: 'Kontakt klijenta',
                text: `Dobili ste poruku od:\n\nIme: ${name} ${surname}\nEmail: ${email}\nPoruka: ${message}`,
            };
        }
    
        const name = formData.get('name') as string;
        const surname = formData.get('surname') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
    
        if (!validateEmail(email)) {
            console.error('Invalid email address:', email);
            return redirect('/fail'); // Early return with redirect
        }
    
        const transporter = nodemailer.createTransport(SMTP_CONFIG);
        const mailOptions = createMailOptions(name, surname, email, message);
        let bool = true
        try {
            await transporter.sendMail(mailOptions); // Wait for the email to be sent
        } catch (error) {
            console.log(error);
            bool = false
        }finally{
            return bool ? redirect('/success') : redirect('/fail');;
        }
    }
    
    

    
    return (
        <div className="flex flex-col items-center min-h-screen bg-white pt-8">
            <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Kontakt</h1>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    Adresa: Kolonija br. 1, Banjica, Beograd
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    Mob: <a href="tel:+381603097128" className="text-blue-500">060/ 3097 128</a>
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    E-mail: <a href="mailto:gravopro@gmail.com" className="text-blue-500">gravopro@gmail.com</a>
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    Radno vreme: Ponedeljak - subota 10h-20h
                </p>
            </div>
            {/* Google Map */}
            <div className="w-full md:w-4/5 p-4 mb-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.4632985501876!2d20.471276690510663!3d44.7509653061625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a710e23bf569f%3A0xbbe811784f34184a!2z0JrQvtC70L7QvdC40ZjQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1729278005626!5m2!1ssr!2srs"
                    width="100%"
                    height="400" // Increased height for desktop view
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
            {/* Contact Form */}
            <div className="w-4/5 md:w-3/5 p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Kontakt forma</h2>
                <form action={submitForm} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ime"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Prezime"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Poruka"
                        className="p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
                    >
                        Pošalji
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
