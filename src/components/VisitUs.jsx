import React from "react";

function VisitUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-12 gap-10">
      {/* Left Side - Address & Contact Details */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-[#f07167]">
          Come Visit Us Today
        </h2>
        <p className="text-lg text-gray-700 capitalize">
          <strong>Civil Veterinary Hospital wanbhachran</strong>
        </p>
        <p className="text-lg text-gray-700">
          <strong>Phone : </strong> 92-0000-00000
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email : </strong>farmvet@gmail.com
        </p>
        <p className="text-lg text-gray-700">
          <strong>Hours : </strong>
          <br />
          Mon-Fri : 7:30am - 5:30pm
        </p>
      </div>

      <div className="md:w-1/2 w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=https://maps.app.goo.gl/zhpGuZ96izVGE1438&output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default VisitUs;
