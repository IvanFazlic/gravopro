import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

const SMTP_CONFIG = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Port 465 requires a secure connection (SSL/TLS)
    auth: {
        user: process.env.EMAIL_USER, // Set to your Gmail address, e.g., dragan@gravopro.rs
        pass: process.env.EMAIL_PASS,
    },
    // Optional: uncomment if you face certificate issues
    // tls: { rejectUnauthorized: false },
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
                // Use your authenticated email as sender
                from: process.env.EMAIL_USER, // dragan@gravopro.rs
                // Set the client's email as reply-to
                replyTo: email,
                to: process.env.RECEIVING, // The receiving email address
                subject: 'Kontakt klijenta',
                text: `Dobili ste poruku od:
Ime: ${name} ${surname}
Email: ${email}
Poruka: ${message}`,
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
        let bool = true;
        try {
            await transporter.sendMail(mailOptions); // Wait for the email to be sent
        } catch (error) {
            console.log(error);
            bool = false;
        } finally {
            return bool ? redirect('/success') : redirect('/fail');
        }
    }
    
    
    return (
        <div className="flex flex-col items-center min-h-screen bg-white pt-2 set-an-image">
            <div className="w-4/5 md:w-3/5 p-4 md:p-8 text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Kontakt</h1>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    Adresa: Kolonija br. 1, Banjica, Beograd
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    Mob: <a href="tel:+381603097128" className="text-blue-500">060/ 3097 128</a>
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    E-mail: <a href="mailto:gravoprodukt@gmail.com" className="text-blue-500">gravoprodukt@gmail.com</a>
                </p>
                <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                    Radno vreme: Ponedeljak - subota 10h-20h
                </p>
            </div>
            {/* Google Map */}
            <div className="w-full md:w-3/5 p-4 mb-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.8930123443298!2d20.477348065816756!3d44.75064981728348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a713634d80591%3A0x56ec3d5b4644f2b4!2sLasersko%20se%C4%8Denje%20i%20graviranje%20Beograd%20-%20FD%20Gravoprodukt!5e0!3m2!1ssr!2srs!4v1743851753392!5m2!1ssr!2srs" 
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                />
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
