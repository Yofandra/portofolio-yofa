import HeaderMenu from "../components/HeaderMenu"
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
        <div id="contact-section" className="flex flex-col items-center font-overpass">
            <HeaderMenu 
                title={'CONTACT ME'}
                desc1={'Feel free to reach out! I’m here to help with innovative web solutions and great user experiences'}
            />
            <div className="md:flex flex-row-reverse w-full md:!w-[1120px] md:mt-14">
                <div className="w-full px-4 md:!w-[680px] ">
                    <form onSubmit={customSubmit}>
                        <label className="text-[12px] md:text-lg">
                            Name
                        <input type="text" name="text" onChange={(e) => setName(e.target.value)} className="mt-1 md:mt-0 md:mb-4 px-3 py-2 bg-secondary border shadow-sm border-black focus:outline-none focus:border-teal-800 focus:ring-teal-800 block w-full h-[30px] md:h-12 rounded-md sm:text-sm focus:ring-1" placeholder="input your name" />
                        </label>
                        <label className="text-[12px] md:text-lg">
                            Email
                        <input type="email" name="email" className="mt-1 md:mt-0 md:mb-4 px-3 py-2 bg-secondary border shadow-sm border-black focus:outline-none focus:border-teal-800 focus:ring-teal-800 block w-full h-[30px] md:h-12 rounded-md sm:text-sm focus:ring-1" placeholder="input your email" />
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </label>
                        <label className="text-[12px] md:text-lg">
                            Message
                        <textarea type="text" name="text" className="mt-1 md:mt-0 px-3 py-2 bg-secondary border shadow-sm border-black focus:outline-none focus:border-teal-800 focus:ring-teal-800 block w-full h-[60px] rounded-md sm:text-sm focus:ring-1" placeholder="input your message" />
                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </label>
                        <button type='submit' disabled={state.submitting} className="mt-7 w-full bg-primary text-secondary py-2 rounded-md">Send Message</button>
                        </form>
                    <Toaster />
                </div>
                <div className="flex flex-col items-center md:!items-start mt-4 md:w-[400px] md:mt-0 md:mr-10">
                    <h3 className="text-primary font-bold text-[13px] md:text-xl mb-2">Get In Touch</h3>
                    <div className="flex md:flex-col">
                        <div className="flex items-start md:mt-5 mr-3 md:mr-0">
                            <EnvelopeIcon className="w-[12px] md:w-10 text-primary" />
                            <div className="mx-2">
                                <h5 className="text-primary text-[10px] md:text-lg font-bold">Email</h5>
                                <a href="mailto:yofandraarta@gmail.com" className="text-primary text-[10px] md:text-lg">yofandraarta@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start md:mt-5">
                            <PhoneIcon className="w-[12px] md:w-10 text-primary" />
                            <div className="mx-2">
                                <h5 className="text-primary text-[10px] md:text-lg font-bold">Phone Number</h5>
                                <a href="https://wa.me/6282140950530" className="text-primary text-[10px] md:text-lg">+62 821-4095-0530</a>
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