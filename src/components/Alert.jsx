import React, { useEffect, useState } from "react";

export default function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div
          id="alert-3"
          className={`flex items-center p-4 mb-4 absolute z-10 right-1 rounded-lg ${
            props.alertType === "success"
              ? "bg-green-50 text-green-600 dark:bg-gray-800 dark:text-green-400"
              : "bg-red-50 text-red-600 dark:bg-gray-800 dark:text-red-400"
          }`}
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="ms-3 text-sm font-bold">{props.alert}</div>
          <button
            type="button"
            className={`ms-auto -mx-1.5 -my-1.5 rounded-lg ${
              props.alertType === "success"
                ? "bg-green-50 text-green-500 hover:bg-gray-200"
                : "bg-red-50 text-red-500 hover:bg-gray-200"
            } inline-flex items-center justify-center h-8 w-8 dark:bg-transparent dark:hover:bg-gray-700`}
            data-dismiss-target="#alert-3"
            aria-label="Close"
            onClick={handleCloseClick}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
