import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly bg-c1Dark py-20 text-white">
        <div>
          {/* <img className="w-12 h-12" src="./logo.png" alt="workConnect" /> */}
          <h1 className="font-extrabold text-c3 text-2xl underline underline-offset-8">
            WorkConnect
          </h1>
          <p className="text-xl antialiased tracking-widest leading-8 text-center text-white">
            Open for Work
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-medium pb-4">About</h1>
          <div className="text-neutral-300 text-base">
            <h3>Home</h3>
            <h3>Feature</h3>
            <h3>About</h3>
            <h3>Blog</h3>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium pb-4">Jobs</h1>
          <div className="text-neutral-300 text-base">
            <h3>Job Refferals</h3>
            <h3>Help and Support</h3>
            <h3>Affiliate</h3>
            <h3>Help</h3>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium pb-4">Terms</h1>
          <div>
            <h3>Privacy</h3>
            <h3>Policy</h3>
            <h3>Terms</h3>
            <h3>Contact</h3>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium pb-4">Your One Stop Job Shop</h1>
          <input type="email" placeholder="Enter your Email" />
          <button>Go</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
