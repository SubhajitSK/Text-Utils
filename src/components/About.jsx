import React, { useState } from "react";

export default function About() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2 ">
          <h1 className="text-3xl font-bold dark:text-white mt-10">About Us</h1>
          {[
            {
              question: "What is Flowbite?",
              answer:
                "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
            },
            {
              question: "Is there a Figma file available?",
              answer:
                "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
            },
            {
              question:
                "What are the differences between Flowbite and Tailwind UI?",
              answer:
                "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
            },
          ].map(({ question, answer }, index) => (
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
