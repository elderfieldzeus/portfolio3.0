import { useState } from "react";
import LandingButton from "../custom-ui/LandingButton";
import { MessageCircleCodeIcon } from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import Chatbox from "./Chatbox";

const ChatbotButton = () => {
  const [isChatOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100"`}
      >
        <LandingButton
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="group relative overflow-hidden text-black hover:text-zinc-800 shadow-lg rounded-full px-4 hover:cursor-pointer bg-primary"
        >
          <div className="flex items-center gap-3 text-black">
            <div
              className={`transition-all duration-400 ease-in-out group-hover:scale-110 opacity-100 translate-x-0`}
            >
              <MessageCircleCodeIcon className="size-4 text-black" />
            </div>
            <span
              className={`font-medium text-sm whitespace-nowrap transition-all duration-400 ease-in-out opacity-100 translate-x-0`}
            >
              {"Chat with Zeus"}
            </span>
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 rounded-full" />

          <div
            className={`absolute inset-0 bg-white/10 rounded-full transition-opacity duration-200 opacity-100`}
          />
        </LandingButton>
      </div>
      <MagicCard
        className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] h-[min(32rem,90vh)] md:w-96 transition-all duration-500 ease-in-out flex flex-col ${isChatOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <Chatbox handleClose={() => setIsOpen(false)} />
      </MagicCard>
    </>
  );
};

export default ChatbotButton;
