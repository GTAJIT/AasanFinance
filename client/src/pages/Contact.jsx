import React from "react";
import { SocialIcons, ContactForm } from "../components/component";

export default function Contact() {
  return (
    <div className="min-h-fit flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Get In Touch</h1>
      <p className="text-lg mb-10 text-gray-600 max-w-2xl text-center warp-anywhere">
        We’d love to connect! Fill out the form or use the info below to reach
        out.
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl p-10 items-center justify-between isolate border-none rounded-2xl bg-white/20 shadow-lg ring-1 ring-black/5">
        {/* Contact Info Card */}
        <div className="bg-teal-500 text-white rounded-2xl shadow-lg flex-1 p-10 flex gap-10 justify-between min-w-[270px]">
          <div className="flex flex-col justify-between ">
            <div className="mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-6 text-teal-100 wrap-anywhere">
                  Let’s create finance amazing together. Reach out for
                  collaborations or just a friendly hello!
                </p>
              </div>
              <div className="space-y-3 text-base">
                <div className="flex items-center gap-2">
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>aasanfinace@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Kolkata, India</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <SocialIcons />
            </div>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
