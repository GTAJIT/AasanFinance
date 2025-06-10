import React from "react";
import { InputMsg } from "./ui/ui";



export default function ContactForm() {
    const Inputs = [
        {
            type: "text",
            placeholder: "Name",
            label: "Your Name"
        },
        {
            type: "email",
            placeholder: "Email",
            label: "Your Email"
        },
        {
            type: "text",
            placeholder: "How can I help you?",
            label: "Subject"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };
    return (
        <form className="bg-white rounded-2xl shadow-lg flex-1 p-8 flex flex-col gap-4 min-w-[320px] text-black ">
            <div className="flex flex-col md:flex-row gap-4">
                {Inputs.slice(0,2).map((input, index) => (
                    <InputMsg
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                    >
                        {input.label}
                    </InputMsg>
                ))}
            </div>
            {Inputs.slice(2,3).map((input, index) => (
                <InputMsg
                    key={index}
                    type={input.type}
                    placeholder={input.placeholder}
                >
                    {input.label}
                </InputMsg>
            ))}
            <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                    placeholder="Write your message"
                    rows={4}
                    className="w-full border-b-2 border-gray-200 focus:border-teal-500 outline-none py-2 px-1 bg-transparent resize-none"
                ></textarea>
            </div>
            <button
                type="submit"
                className="mt-4 bg-teal-500 text-white font-semibold py-2 rounded hover:bg-teal-600 transition-colors"
                onClick={handleSubmit}
            >
                Send Message
            </button>
        </form>
    )
}