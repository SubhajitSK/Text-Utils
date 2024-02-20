import React, { useEffect, useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const [isDisable, setisDisable] = useState(false);

  useEffect(() => {
    if (text.length === 0) {
      setisDisable(true);
      console.log("disabled");
    } else {
      setisDisable(false);
      console.log("enabled");
    }
  }, [text]);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCopyClick = () => {
    var copyText = document.getElementById("message");
    copyText.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
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
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2 disabled:opacity-85 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
            onClick={handleUpperCaseClick}
            disabled={isDisable}
          >
            Convert to uppercase
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2 disabled:opacity-85 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
            onClick={handleLowerCaseClick}
            disabled={isDisable}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2 disabled:opacity-85 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
            onClick={handleClearClick}
            disabled={isDisable}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2 disabled:opacity-85 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
            onClick={handleCopyClick}
            disabled={isDisable}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mt-2 disabled:opacity-85 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
            onClick={handleExtraSpaces}
            disabled={isDisable}
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
            <p>
              {text.length > 0
                ? text
                : "Nothing to preview, write something to preview it here."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
