import React, { useState } from "react";

import Image from "next/image";

const ContactCard: React.FC<{
  image: string;
  name: string;
  message: string;
  date: string;
  status: string;
}> = ({ image, name, message, date, status }) => {
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded"
          width={110}
          height={110}
          priority
        />
        <div className="ml-4">
          <div className="grid grid-cols-2 gap-4">
            {" "}
            <p className="mt-2 text-gray-600 ">{name}</p>
            <p
              className={`bg-[#FFF9EE] rounded-full p-1 text-center mt-2 text-gray-600 text-xs ${
                status === "New" ? "bg-[#FFECCB]" : ""
              }`}
            >
              {status}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="mt-2 text-gray-600 "> {message}</p>
            <p className="mt-2 text-gray-300 text-xs "> {date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC<{ contacts: any[] }> = ({ contacts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="mt-2 mb-2 flex justify-between text-black">
        <p className="text-gray-800">Contacts</p>
        <div className="text-gray-300">34</div>
      </div>

      <div className="relative flex items-center mb-4">
        <svg
          className="h-5 w-5 absolute left-3 text-gray-500"
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <g className="search-path" fill="none" stroke="#848F91">
            <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-10 py-2 w-64 focus:ring focus:ring-blue-500 focus:outline-none"
        />
      </div>
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          image={contact.image}
          name={contact.name}
          message={contact.message}
          date={contact.date}
          status={contact.status}
        />
      ))}
    </div>
  );
};

export default Contact;
