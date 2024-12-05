import React, { useRef, useState } from 'react';
import 'animate.css'; // Ensure animate.css is imported
import './App.css'; // Import your custom CSS file

const App = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const countRef = useRef(null); // Reference for the label

  const triggerAnimation = () => {
    if (countRef.current) {
      const element = countRef.current;
      element.classList.remove('animate__flipInX', 'animate-fast'); // Remove animation classes
      void element.offsetWidth; // Trigger reflow to restart animation
      element.classList.add('animate__flipInX', 'animate-fast'); // Add animation classes
    }
  };

  const generateRandomCount = () => {
    setLoading(true); // Start loading state
    let interval = setInterval(() => {
       setCount("Waiting..  "+Math.floor(Math.random() * 100,)); // Show random numbers during loading
    }, 100); // Update every 100ms

    setTimeout(() => {
      clearInterval(interval); // Stop the interval after 2 seconds
      const finalRandom = "winner"+"   " + Math.floor(Math.random() * 100);
      setCount(finalRandom); // Set the final random number
      setLoading(false); // End loading state
      triggerAnimation(); // Trigger animation for the final number
    }, 2000); // 2 seconds loading duration
  };

  return (
    <div className="m-5 p-20 bg-blue-700">
      <label
        ref={countRef} // Assign the ref to this element
        className="count animate__animated animate-fast capitalize font-bold text-4xl text-gray-50 flex justify-center items-center w-52"
      >
        {count}
      </label>
      <br />
      <button
        type="button"
        className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          setCount(count + 1);
          triggerAnimation(); // Trigger animation on increment
        }}
      >
        Increment
      </button>
      <button
        type="button"
        className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          setCount(count > 0 ? count - 1 : 0);
          triggerAnimation(); // Trigger animation on decrement
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={generateRandomCount}
      >
        Random
      </button>
    </div>
  );
};

export default App;
