import React, { useState } from "react";

export default function About() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const aboutData = [
    {
      question: "What are Text Utils?",
      answer:
        "Text Utils are a set of tools designed to manipulate and analyze text data. These utilities can perform various operations on textual content, making it easier for developers to handle and process strings.",
    },
    {
      question: "What functionalities do Text Utils provide?",
      answer:
        "Text Utils offer a range of functionalities such as string manipulation, character count, word count, case conversion (uppercase/lowercase), and more. These tools are useful for tasks like formatting, cleaning, and extracting information from text.",
    },
    {
      question: "How can Text Utils be utilized in development?",
      answer:
        "In development, Text Utils can be integrated into applications and projects to enhance the processing and presentation of textual data. Developers can leverage these utilities to streamline text-related operations and improve the overall user experience.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2 ">
          <h1 className="text-3xl font-bold dark:text-white mt-10">About Us</h1>
          {aboutData.map(({ question, answer }, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between p-5 font-medium bg-slate-50 dark:bg-transparent dark:text-white border rounded border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <span>{question}</span>
                <svg
                  className={`w-3 h-3 transform ${
                    activeAccordion === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 10 6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5 5 1 1 5" />
                </svg>
              </button>
              {activeAccordion === index && (
                <div className="p-5 border rounded border-t-0 bg-slate-100 dark:bg-transparent border-gray-200 dark:border-gray-700">
                  <p className=" text-gray-800 dark:text-gray-300 ">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
