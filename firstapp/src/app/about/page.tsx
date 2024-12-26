"use client";
import { useRouter } from "next/navigation";
import Loading from "./loading";

const About = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Navigated to Home Page");
    router.push("/");
  };

  const randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber == 1) {
    throw new Error("Error Occurred");
  }
  return (
    <div>
      <h1>About Page</h1>

      <button
        className='bg-black text-white px-6 py-3 rounded-md w-fit mt-20'
        onClick={handleClick}
      >
        Navigate to Home Page
      </button>
    </div>
  );
};
export default About;
