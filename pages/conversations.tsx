import React, { useRef } from "react";
import ChatSession from "@/components/Conversations/ChatSession";
import Contacts from "@/components/Conversations/Contacts";
import Image1 from "../public/cont1.PNG";
import Image2 from "../public/cont2.PNG";
import Image3 from "../public/cont3.PNG";
import ConversationsLayout from "@/layout/ConversationLayout";

const ConversationsPage: React.FC = () => {
  const chatSessionRef = useRef<HTMLDivElement>(null);

  const handleNewMessageClick = () => {
    if (chatSessionRef.current) {
      chatSessionRef.current.resetMessage();
    }
  };
  const contacts = [
    {
      image: Image1,
      name: "Jane Doe",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "New",
    },
    {
      image: Image2,
      name: "Janet Adebayo",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "New",
    },
    {
      image: Image3,
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "New",
    },
    {
      image: Image1,
      name: "Jane Doe",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "3",
    },
    {
      image: Image2,
      name: "Janet Adebayo",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "",
    },
    {
      image: Image3,
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "",
    },
    {
      image: Image1,
      name: "Jane Doe",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "",
    },
    {
      image: Image2,
      name: "Janet Adebayo",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "",
    },
    {
      image: Image3,
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "",
    },
    {
      image: Image3,
      name: "Kunle Adekunle",
      message: "Hi, i want to make enquiries about yo...",
      date: "12:55 am",
      status: "",
    },
  ];
  return (
    <ConversationsLayout>
      <div className="m-2 mb-7 mt-5  bg-[#EFEDFF]">
        <div className="flex justify-between mt-4 p-2">
          <div>
            <p className="text-black">Conversations with Customers</p>
          </div>
          <div>
            <button
              className="bg-[#5570f1] text-white px-4 py-2 rounded"
              onClick={handleNewMessageClick}
            >
              New Message
            </button>
          </div>
        </div>
        <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Contacts contacts={contacts} />
          <ChatSession ref={chatSessionRef} />
        </div>
      </div>
    </ConversationsLayout>
  );
};

export default ConversationsPage;
