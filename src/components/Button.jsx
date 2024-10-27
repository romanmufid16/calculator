import React from "react";

function Button(props) {
  return (
    <div className="grid grid-cols-4 gap-2 transition-all duration-200 ease-in-out">
      <button
        name="C"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        C
      </button>
      <div className="grid grid-cols-2 gap-1">
        <button
          name="("
          onClick={(e) => props.onClick(e.target.name)}
          className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
        >
          (
        </button>
        <button
          name=")"
          onClick={(e) => props.onClick(e.target.name)}
          className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
        >
          )
        </button>
      </div>

      <button
        name="%"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        %
      </button>
      <button
        name="/"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-orange-500 font-semibold rounded-lg"
      >
        /
      </button>

      <button
        name="7"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        7
      </button>
      <button
        name="8"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        8
      </button>
      <button
        name="9"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        9
      </button>
      <button
        name="*"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-orange-500 font-semibold rounded-lg"
      >
        x
      </button>

      <button
        name="4"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        4
      </button>
      <button
        name="5"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        5
      </button>
      <button
        name="6"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        6
      </button>
      <button
        name="-"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-orange-500 font-semibold rounded-lg"
      >
        -
      </button>

      <button
        name="3"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        3
      </button>
      <button
        name="2"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        2
      </button>
      <button
        name="1"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        1
      </button>
      <button
        name="+"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-orange-500 font-semibold rounded-lg"
      >
        +
      </button>

      <button
        name="CE"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        CE
      </button>
      <button
        name="0"
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        0
      </button>
      <button
        name="."
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gray-950 font-semibold rounded-lg"
      >
        .
      </button>
      <button
        name="="
        onClick={(e) => props.onClick(e.target.name)}
        className="h-[60px] text-[30px] bg-gradient-to-b from-orange-500 to-orange-300 font-semibold rounded-lg"
      >
        =
      </button>
    </div>
  );
}

export default Button;
