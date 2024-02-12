import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    var copyText = document.getElementById("message");
    copyText.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const calculateReadingTime = () => {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return words ? 0.008 * words : 0;
  };

  const charactersCount = text.replace(/\s/g, "").length;
  const wordsCount = text.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = calculateReadingTime();

  return (
    <>
      <div className="dark:text-white max-w-3xl mx-auto m-10 p-5">
        <form>
          <label htmlFor="message" className="block mb-2 text-2xl font-medium">
            Enter Text Here:
          </label>
          <textarea
            id="message"
            rows="5"
            className="block p-2.5 w-full text-sm dark:text-white dark:bg-gray-900 rounded-lg border border-gray-300"
            placeholder="Enter your text here..."
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2"
            onClick={handleUpperCaseClick}
          >
            Convert to uppercase
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2"
            onClick={handleLowerCaseClick}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </form>
        <div className="my-2 text-sm">
          <p>
            {wordsCount} words and {charactersCount} characters are there
          </p>
          <p>{readingTime.toFixed(2)} minutes to read</p>
          <div>
            <p className="my-2 text-2xl font-medium">Preview</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
