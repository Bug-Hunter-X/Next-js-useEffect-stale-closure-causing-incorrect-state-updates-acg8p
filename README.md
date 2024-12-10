# Next.js useEffect stale closure bug

This repository demonstrates a common bug in Next.js applications involving the use of `useEffect` with asynchronous operations. The bug arises from using the previous state value inside the asynchronous function, leading to unexpected behavior.

## Bug Description

The `MyComponent` component uses `useEffect` to update the state variable `count` every second. However, the asynchronous nature of `setTimeout` combined with a stale closure leads to incorrect state updates. The function within `setTimeout` uses the initial value of `count` and not the updated value after each interval, causing the counter to increment by 1 only once.

## Solution

The solution involves using the functional update form of `useState` to ensure the latest state value is used within the asynchronous function.