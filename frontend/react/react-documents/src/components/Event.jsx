import { useState } from "react";

function MyBtn() {
  const [count, setCount] = useState(0);
  function handleClick() {
    // alert("Click me?");
    setCount(count + 1)
  }

  return <button onClick={handleClick}>
    Clicked {count} times.
  </button>;
}

export default MyBtn;
