import Image from "next/image";
import MDEditor from "@uiw/react-md-editor";
import "./styles/markdown.css";

interface MessageProps {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
}

const Message = ({ role, content, isLoading }: MessageProps) => {
  return (
    <div
      className={`flex flex-col ${role === "user" ? "items-end" : "items-start"}`}
    >
      {role === "assistant" && (
        <div className="flex gap-1 items-center">
          <div className="size-6 flex items-center justify-center overflow-hidden rounded-full">
            <Image
              className="object-cover w-full h-auto"
              src="/images/me_aha.jpeg"
              alt="Me"
              height={10000}
              width={10000}
            />
          </div>

          <p className="text-sm">Zeus E.</p>
        </div>
      )}

      <div
        className={`${role === "user" ? "bg-white text-black" : "bg-primary/10 text-white"} rounded-lg p-3 max-w-[80%] mt-2 mb-4 text-sm`}
      >
        {isLoading ? (
          <div className="markdown animate-pulse text-gray-500">Typing...</div>
        ) : (
          <MDEditor.Markdown className="markdown" source={content} />
        )}
      </div>
    </div>
  );
};

export default Message;
