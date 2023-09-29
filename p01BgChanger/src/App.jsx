import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <div
      className="h-screen w-full bg-black flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 flex justify-center align-middle gap-3 bg-white rounded-xl p-2 shadow-xl">
        <button
          onClick={() => {
            setColor("red");
          }}
          className="rounded-xl border-4 border-slate-200 text-white px-2 py-1"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="rounded-xl border-4 border-slate-200 text-white px-2 py-1"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="rounded-xl border-4 border-slate-200 text-white px-2 py-1"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="rounded-xl border-4 border-slate-200 text-orange-700 px-2 py-1"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("orange");
          }}
          className="rounded-xl border-4 border-slate-200 text-white px-2 py-1"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => {
            setColor("orangered");
          }}
          className="rounded-xl border-4 border-slate-200 text-white px-2 py-1"
          style={{ backgroundColor: "orangered" }}
        >
          Orangered
        </button>
        <button
          onClick={() => {
            setColor("royalblue");
          }}
          className="rounded-xl border-4 border-slate-200 text-white px-2 py-1"
          style={{ backgroundColor: "royalblue" }}
        >
          Royalblue
        </button>
      </div>
    </div>
  );
}

export default App;
