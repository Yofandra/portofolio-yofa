import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, ValidationError } from '@formspree/react';
import {useState} from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
    const [state, handleSubmit] = useForm("xldgqryg");
    const [name, setName] = useState("");

    const customSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("subject", `New message from ${name}`);

        const toastId = toast.loading("Sending your message...");

        try {
            await handleSubmit(formData);
    
            toast.success(`Thank you, ${name}! Your message has been sent.`, {
                id: toastId,
            });
        } catch {
            toast.error("Failed to send message. Please try again.", {
                id: toastId,
            });
        }
    };
    return(
        <>
        <div id="contact-section" className="flex flex-col items-center font-barlow">
            <h1 className="font-semibold text-2xl text-center md:text-3xl">CONTACT ME</h1>
            <p className="px-4 md:px-0 font-semibold text-primary text-sm mt-2 text-center md:text-[20px] md:mt-5">Feel free to reach out! I’m here to help with innovative web solutions and great user experiences</p>
            <div className="md:flex flex-row-reverse w-full md:!w-[1120px] mt-5 md:mt-14">
                <div className="w-full px-8 md:px-0 md:!w-[680px] ">
                    <form onSubmit={customSubmit}>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                            <input type="text" name="text" onChange={(e) => setName(e.target.value)} className="mt-1 md:mt-0 md:mb-4 bg-secondary border-b-2 shadow-sm border-black focus:outline-none block w-full h-[30px] md:h-12 sm:text-sm" placeholder="Name" />
                            <input type="email" name="email" className="mt-1 md:mt-0 md:mb-4 bg-secondary border-b-2 shadow-sm border-black focus:outline-none block w-full h-[30px] md:h-12 sm:text-sm" placeholder="Email" />
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>
                        <textarea type="text" name="text" className="mt-6 md:mt-4 md:mb-4 bg-secondary border-b-2 shadow-sm border-black focus:outline-none block w-full h-[30px] md:h-20 sm:text-sm" placeholder="Message" />
                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        <button type='submit' disabled={state.submitting} className="mt-7 w-full bg-primary text-secondary py-2 rounded-md">Send Message</button>
                        </form>
                    <Toaster />
                </div>
                <div className="flex flex-col items-center md:!items-start mt-6 md:w-[400px] md:mt-0 md:mr-10">
                    <h3 className="text-primary font-bold text-lg md:text-xl mb-2">Get In Touch</h3>
                    <div className="flex md:flex-col">
                        <div className="flex items-center md:mt-5 mr-3 md:mr-0">
                            <EnvelopeIcon className="w-4 md:w-10 text-primary" />
                            <div className="mx-2">
                                <h5 className="text-primary text-sm md:text-sm font-bold">Email</h5>
                                <a href="mailto:yofandraarta@gmail.com" className="text-primary text-sm md:text-sm">yofandraarta@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center md:mt-5">
                            <PhoneIcon className="w-4 md:w-10 text-primary" />
                            <div className="mx-2">
                                <h5 className="text-primary text-sm md:text-sm font-bold">Phone Number</h5>
                                <a href="https://wa.me/6282140950530" className="text-primary text-sm md:text-sm">+62 821-4095-0530</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact