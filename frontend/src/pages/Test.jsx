import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const k = [
    "Learn JavaScript",
    "story book",
    "Watch documentary",
    "Bake cupcakes",
  ];

  return (
    <div>
      <Item />
    </div>
  );
};
export default Test;

//mutating the original array

function Item({ item }) {
  const data = useRef(); //don't eed to initialize it / can evne do that by doing (useRef(value you want to put no.,strings,objects anything))

  useEffect(() => {
    function Focus(e) {
      if ("/" == e.key) {
        e.preventDefault();
        data.current.focus();
      }
    }
    const k = window.addEventListener("keypress", Focus);

    return () => {
      removeEventListener("keypress", Focus);
    };
  }, []);

  return (
    <>
      <input type="text" name="name" ref={data} />
      <button>Submit</button>
    </>
  );
}


/*
//not mutating the original array
function Item({ item }) {
  const [state, setState] = useState(true);
  return (
    <li>
      {state && item}
      {state && (
        <button
          onClick={() => {
            setState(!state);
          }}
        >
          Remove
        </button>
      )}
    </li>
  );
}
*/

/*
//marking the item as delete
function Item({ item }) {
  const [state, setState] = useState(true);
  const removeElement = () => {
    console.log("js");
  };
  return (
    <li key={item}>
      {state ? item : <del>{item}</del>}
      {state && (
        <button
          onClick={() => {
            setState(!state);
          }}
        >
          Done
        </button>
      )}
    </li>
  );
}
*/
