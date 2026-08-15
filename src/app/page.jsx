"use client";
import Container from "@/components/container";
import Image from "next/image";
import profilePic from "../app/hero.png";
import ContactsContainer from "@/components/contacts";
export default function Home() {
  return (
    <Container className="  rounded-3xl p-8 shadow-lg bg-back ">
      <div className="flex flex-col  items-center justify-center w-full h-full">
        <div className=" flex flex-col items-center justify-center">
          <Image
            src={profilePic}
            alt="Profile"
            className="w-50 h-50 rounded-full mb-4"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className=" flex flex-col items-center justify-center text-center w-full gap-4">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold mb-4 text-white">Ahmed Shawky</h1>
            <p className="text-xl  text-primary-text mb-4 ">Data Analyst</p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <ContactsContainer
              ref="https://www.linkedin.com/in/ahmed-shawky-a94003335/"
              title="LinkedIn"
            />
            <ContactsContainer
              ref="https://portfolioda-sigma.vercel.app/"
              title="Portfolio"
            />
            <ContactsContainer
              ref="https://github.com/AhmedShawkyDev"
              title="GitHub"
            />
            <ContactsContainer
              ref="https://mail.google.com/mail/?view=cm&to=ahshawky7@gmail.com"
              title="Email Me"
            />
            <ContactsContainer
              ref="https://wa.me/+966561417008"
              title="What's App"
            />
            <ContactsContainer ref="tel:+966561417008" title="Call Me" />
          </div>
        </div>
      </div>
    </Container>
  );
}

