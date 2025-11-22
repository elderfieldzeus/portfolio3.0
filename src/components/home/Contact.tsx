import React from "react";
import BlurFade from "../ui/blur-fade";
import { MagicCard } from "../ui/magic-card";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaGithub, FaPhone } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center font-kanit relative mt-24 pb-20">
      <BlurFade delay={0.25} inView>
        <p id="contact" className="text-4xl">
          Contact Me
        </p>
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <div className="w-(--w-max) md:w-[50rem] grid grid-cols-1 md:grid-cols-3 gap-2">
          <MagicCard className="border w-full rounded-lg border-opacity-20 bg-black h-24 p-5">
            <div className="h-full w-full flex gap-3">
              <div className="aspect-square h-full w-auto flex justify-center items-center rounded-full bg-zinc-900 bg-opacity-20 text-gray-300">
                <IoShareSocialSharp className="size-6" />
              </div>
              <div className="text-gray-300 flex flex-col gap-1">
                <p className="text-xl">Socials</p>
                <div className="flex gap-1">
                  <a
                    href="https://www.linkedin.com/in/elderfieldzeus/"
                    target="_blank"
                  >
                    <FaLinkedin
                      className="size-5 transition-colors hover:text-[#0077B5] active:text-[#0077B5] hover:cursor-pointer"
                      onClick={() => {}}
                    />
                  </a>
                  <a href="https://github.com/elderfieldzeus" target="_blank">
                    <FaGithub className="size-5 transition-colors hover:text-[#0d74e7] active:text-[#0d74e7] hover:cursor-pointer" />
                  </a>
                  <a
                    href="https://www.facebook.com/elderfieldzeus/"
                    target="_blank"
                  >
                    <FaFacebook className="size-5 transition-colors hover:text-[#4267B2] active:text-[#4267B2] hover:cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </MagicCard>

          <a href="mailto:elderfieldzeus@gmail.com">
            <MagicCard className="border w-full rounded-lg border-opacity-20 bg-black h-24 p-5">
              <div className="h-full w-full flex gap-3">
                <div className="aspect-square h-full w-auto flex justify-center items-center rounded-full bg-zinc-900 bg-opacity-20 text-gray-300">
                  <IoIosMail className="size-6" />
                </div>
                <div className="text-gray-300 flex flex-col gap-1">
                  <p className="text-xl">Email</p>
                  <div className="flex">
                    <p className="font-light text-sm md:text-xs">
                      elderfieldzeus@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </MagicCard>
          </a>

          <MagicCard className="border w-full rounded-lg border-opacity-20 bg-black h-24 p-5">
            <div className="h-full w-full flex gap-3">
              <div className="aspect-square h-full w-auto flex justify-center items-center rounded-full bg-zinc-900 bg-opacity-20 text-gray-300">
                <FaPhone className="size-6" />
              </div>
              <div className="text-gray-300 flex flex-col gap-1">
                <p className="text-xl">Contact No.</p>
                <div className="flex">
                  <p className="font-light text-sm md:text-xs">
                    +63 917 775 5790
                  </p>
                </div>
              </div>
            </div>
          </MagicCard>
        </div>
      </BlurFade>
    </div>
  );
};

export default Contact;
