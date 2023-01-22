import React from "react";
import { useState } from "react";
let str = "</>";
export default function Textform() {
  const [text, change] = useState("Enter Text Here...");
  function upEvent() {
    change(text.toUpperCase());
  }
  function capEvent(event) {
    if (!text.length) return;
    let Myarr = text.split(" ");
    for (let i = 0; i < Myarr.length; i++) {
      const words = text.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      change(words.join(" "));
    }
  }
  function lowEvent() {
    change(text.toLowerCase());
  }
  function clear() {
    change("Enter Text Here...");
  }
  function updateText(event) {
    // console.log("hellp")
    change(event.target.value);
  }
  function lascap() {
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].substr(0, words[i].length - 1) +
        words[i][words[i].length - 1].toUpperCase();
    }
    change(words.join(" "));
  }

  // JavaScript program to remove duplicate character
  // from character array and print in sorted
  // order
  // Driver code
  return (
    <>
      <div className="container my-4">
        <h1>Text Formater{str} </h1>
        <div class="form-outline">
          <textarea
            class="form-control"
            id="textAreaExample1"
            rows="8"
            value={text}
            onChange={updateText}
          ></textarea>
          <button
            type="button"
            class="btn btn-danger my-4 mx-3"
            onClick={clear}
          >
            Clear
          </button>
          <button
            type="button"
            class="btn btn-primary my-4 mx-3"
            onClick={upEvent}
          >
            Upper Case
          </button>
          <button
            type="button"
            class="btn btn-primary my-4 mx-3"
            onClick={lowEvent}
          >
            Lower Case
          </button>
          <button
            type="button"
            class="btn btn-primary my-4 mx-3"
            onClick={capEvent}
          >
            Captialize
          </button>
          <button
            type="button"
            class="btn btn-primary my-4 mx-3"
            onClick={lascap}
          >
            Last Capital
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h3>Text Summary</h3>
        {text.split(" ").length} words {text.length} character
      </div>
    </>
  );
}
