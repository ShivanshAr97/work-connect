import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white text-8xl font-extrabold flex flex-col justify-center h-80">
        <div className="pl-40">
          <h1 className="text-c3 ">Get the Career</h1>
          <h1 className="pl-72 ">That Suits Your</h1>
          <h1 className="text-c3 pl-96 ">
            <span className="text-c2">~</span> Lifestyle{" "}
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
      <div className="text-white text-3xl font-bold  pl-40 pt-16">
        <h1>
          Find Your <span className="text-c3">Perfect Job</span>{" "}
        </h1>
        <h1>With Few Steps</h1>
      </div>
      <div className="flex justify-between text-neutral-50 px-40 pt-8 mb-20">
        <div className="p-4 border-2 rounded-lg hover:bg-c1Light border-cBorder w-80 ">
          <h1 className="text-xl font-semibold pb-2 w-40">
            Complete Your Profile
          </h1>
          <p className="text-l font-light text-neutral-300">
            Complete your profile to provide all the necessary information and
            details that will enhance your chances of finding the perfect job.
          </p>
        </div>
        <div className="p-4 w-80 border-2 rounded-lg hover:bg-c1Light border-cBorder">
          <h1 className="text-xl font-semibold pb-2 w-40">
            Directly CV Upload
          </h1>
          <p className="text-l font-light text-neutral-300">
            Upload your CV directly to the platform to ensure that employers
            have access to your detailed resume.
          </p>
        </div>
        <div className="p-4 w-80 border-2 rounded-lg hover:bg-c1Light border-cBorder">
          <h1 className="text-xl font-semibold pb-2 w-40">
            Scheduling Interview
          </h1>
          <p className="text-l font-light text-neutral-300">
            Select suitable time slots and arrange interviews with potential
            employers at your convenience.
          </p>
        </div>
      </div>
      <div className="px-40 flex justify-between gap-24">
        <Image src="/work.jpg" height={300} width={350} alt="work" />
        <div className="">
          <h1 className="text-c3 text-l font-bold pt-16 leading-10">
            About Us
          </h1>
          <h3 className="text-white text-2xl font-medium pb-4">
            Where great companies hire great people
          </h3>
          <p className="text-l font-light text-neutral-300">
            WorkConnet is your go-to destination for finding the perfect job.
            With a user-friendly platform and a vast range of job listings, we
            make your job search easy and efficient. Join us today and take the
            next step towards your dream career.
          </p>
        </div>
      </div>
    </>
  );
}
