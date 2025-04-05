import React from "react";

function Contact() {
  return (
    <div className="bg-[#f07167] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 card shadow-lg rounded-lg p-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Civil Veterinary Hospital Wanbhachran
            </h2>
            <p className="text-white mb-4">
              <strong>Location:</strong> Wan Bhachran, Jahaz Chok
            </p>
            <p className="text-white mb-4">
              <strong>Phone:</strong> 92-0000-00000
            </p>
            <p className="text-white mb-4">
              <strong>Email:</strong> farmvet@gmail.com
            </p>
            <p className="text-white mb-4">
              <strong>Hours:</strong>
              <br />
              Mon-Fri: 7:30am - 5:30pm
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              We'd Love to Hear From You
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 text-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f07167]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 text-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f07167]"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border text-zinc-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f07167] h-32 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#e05b52] text-white py-3 px-6 rounded-md w-full hover:bg-[#c44545] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
