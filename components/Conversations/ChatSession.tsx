import React, { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import EmojiPicker from "react-emoji-picker";
import Image1 from "../../public/janedoe.PNG";
import Image2 from "../../public/assessmentimage1.PNG";
import { BsHandbag } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { BsCheck } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const ChatSession: React.ForwardRefRenderFunction<any, any> = (props, ref) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof message === "string" && message.trim() !== "") {
      setChatMessages((prevMessages) => [...prevMessages, message]);
      setMessage("");
      // Redirect to the chat session when the "Send" button is clicked
      router.push("/chat-session");
    }
  };

  // const handleEmojiClick = (emoji: string) => {
  //   setMessage((prevMessage) => (prevMessage ? prevMessage + emoji : emoji));
  //   setShowEmojiPicker(false);
  // };
  const resetMessage = () => {
    setMessage("");
  };
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center">
        <Image
          src={Image1}
          alt="chat"
          className="w-16 h-16 object-cover rounded"
          width={110}
          height={110}
          priority
        />
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mt-2 text-gray-600 ">Jane Doe</p>
            </div>

            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="mr-3 bg-[#FFF9EE] rounded-full text-xs">
                  {" "}
                  New Customer
                </p>
              </div>
              <div>
                <Link
                  href="/orders"
                  className="mt-4 mb-4 text-xs py-3 hover:text-blue-1"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className=" text-gray-600 ">
              {" "}
              <span>
                <GoDotFill />
              </span>{" "}
              Online
            </p>

            <div className=" rounded-lg text-center text-black mt-2 text-xs">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <Link
                    href="/orders"
                    className="mt-4 mb-4  py-3 hover:text-blue-1"
                  >
                    <BsHandbag width={22} />
                  </Link>
                </div>
                <div>
                  <p className="ml-2 ">0</p>
                  <p className="ml-2">Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-32 mx-auto p-2 mt-4">
        <p className="mr-3 bg-[#A6A8B1] text-black rounded-full text-xs">
          {" "}
          12 August 2022
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src={Image2}
          alt="chat"
          className="w-16 h-16 object-cover rounded"
          width={110}
          height={110}
          priority
        />
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <p className=" text-gray-600 "> iPhone 13</p>
            <p className=" text-gray-600 "> </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className=" text-gray-600 ">N730,000.00</div>
            <div className=" text-gray-300 text-xs ">12 in Stock</div>
          </div>
        </div>
      </div>
      <div className="chat-section mt-4">
        <div className="items-start">
          <div className="flex flex-col items-start bg-[#5570f1] rounded-lg p-3 mb-2">
            <p className="text-white">
              Hello, I want to make inquiries about your product
            </p>
            <p className="text-gray-300 text-xs">12:55 am</p>
          </div>
          <div className="flex flex-col items-end bg-[#FFF9EE] rounded-lg p-3 mb-2">
            <p className="text-black">
              Hello Janet, thank you for reaching out
            </p>
            <p className="text-gray-300 text-xs flex items-center">
              12:57 am <BsCheck className="ml-1" />
            </p>
          </div>
          <div className="flex flex-col items-end  bg-[#FFF9EE] rounded-lg p-3 mb-2">
            <p className="text-black">What do you need to know?</p>
            <p className="text-gray-300 text-xs flex items-center">
              12:57 am <BsCheck className="ml-1" />
            </p>
          </div>
        </div>
        <div className="w-32 mx-auto p-2 mt-4">
          <p className="bg-[#A6A8B1] text-black rounded-full text-xs px-3 py-1">
            Today
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col  bg-[#5570f1] rounded-lg p-3 mb-2">
            <p className="text-white">
              I want to know if the price is negotiable, I need about 2 units
            </p>
            <p className="text-gray-300 text-xs">12:55 am</p>
          </div>
        </div>
        <div className="mt-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="relative flex">
              {/* {showEmojiPicker && (
                <div className="">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )} */}
              <input
                type="text"
                placeholder="+ Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded px-10 py-2 w-64 focus:ring focus:ring-blue-500 focus:outline-none"
              />
              {/* <button
                type="button"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className=""
              >
                😄
              </button> */}

              <button
                id="#message"
                type="submit"
                onClick={resetMessage}
                className="bg-[#FFF9EE] text-black ml-2 px-4 py-2 rounded"
              >
                Send{" "}
                <span className="ml-1">
                  <RiSendPlaneFill />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(ChatSession);
