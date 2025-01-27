# React useEffect: Memory Leak with Async/Await

This repository demonstrates a common mistake when using `async/await` within a `useEffect` hook in React: forgetting to provide a cleanup function to prevent memory leaks.

## Bug
The `bug.js` file contains a component with an `useEffect` hook that fetches data asynchronously using `async/await`.  However, it lacks a return function to clean up any running asynchronous operations when the component unmounts.

## Solution
The `bugSolution.js` file shows the corrected version, including a cleanup function that aborts the fetch request if the component unmounts before the data is retrieved.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the behavior of both the buggy and corrected components.