import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="text-2xl">Count: {count}</p>
      <div className="space-x-4 mt-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
