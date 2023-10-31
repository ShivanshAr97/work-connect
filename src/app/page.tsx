import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white text-8xl font-extrabold flex flex-col justify-center h-80">
        <div className="pl-40 mt-12">
          <h1 className="text-c3 ">Get the People</h1>
          <h1 className="pl-72 ">That Suits Your</h1>
          <h1 className="text-c3 pl-96 ">
            <span className="text-c2">~</span> Choice{" "}
            <span className="text-c2">~</span>
          </h1>
        </div>
        {/* <Image
            src={"/image11.png"}
            width={200}
            height={300}
            alt="workConnect"
          /> */}

        {/* < className="w-80" src="./group5.png" alt="group" /> */}
        <Image
          className="mx-auto mt-8 rounded-lg"
          src={"/group5.jpg"}
          width={600}
          height={400}
          alt="group"
        />
      </div>
      <div className="text-white flex text-3xl font-bold  pl-40 pt-28">
        <h1>
          Find Your <span className="text-c3">Perfect Find</span>{" "}
        </h1>
        <h1 className="mx-2">With Few Steps</h1>
      </div>
      <div className="flex justify-between text-neutral-50 px-40 pt-8 mb-20">
        <div className="p-4 m-4 border-2 rounded-lg hover:bg-c1Light border-cBorder w-80 ">
          <h1 className="text-lg font-semibold pb-2 w-50">
          Unlock Your Professional Potential
          </h1>
          <p className="text-l font-light text-neutral-300">
          Build, Showcase, and Connect with Your Skills and Projects in Development, Design, Content Creation, and Marketing.
          </p>
        </div>
        <div className="p-4 m-4 w-80 border-2 rounded-lg hover:bg-c1Light border-cBorder">
          <h1 className="text-lg font-semibold pb-2 w-60">
          Elevate Your Career Opportunities
          </h1>
          <p className="text-l font-light text-neutral-300">
          Curate your online presence with ease, syncing portfolios from multiple platforms, highlight your expertise for part-time, full-time, gig, or internships.
          </p>
        </div>
        <div className="p-4  m-4 w-80 border-2 rounded-lg hover:bg-c1Light border-cBorder">
          <h1 className="text-lg font-semibold pb-2 w-60">
          Make a Lasting Impression
          </h1>
          <p className="text-l font-light text-neutral-300">
          Stand out with a personal touch - add a 1-minute video testimonial to let your skills and personality shine on your WorkConnect profile.
          </p>
        </div>
      </div>
      <div className="px-40 flex justify-between gap-24">
        <Image className="mb-12" src="/work.jpg" height={300} width={350} alt="work" />
        <div className="">
          <h1 className="text-c3 text-l font-bold pt-16 leading-10">
            About Us
          </h1>
          <h3 className="text-white text-2xl font-medium pb-4">
            Where great you find great people
          </h3>
          <p className="text-l font-light text-neutral-300">
          At WorkConnect, we're dedicated to revolutionizing how professionals in development, design, content creation, and marketing build their online portfolios and connect with job opportunities. We empower individuals at all career stages, offering a seamless platform to aggregate their work from multiple sources, add personalized 1-minute video testimonials, and denote their availability for part-time, full-time, gig, or internship roles. WorkConnect is not just a tool; it's a vibrant community where talent and opportunity converge, helping you unlock your true professional potential. Join us in redefining the way you showcase your skills and launch your career to new heights. Welcome to WorkConnect, where your success story begins.
          </p>
        </div>
      </div>
    </>
  );
}
