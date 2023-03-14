# useReducer Hook
Counter.tsx

useReducer typing

    import React, { useReducer } from "react";

    const initialState = { count: 0 };

    type CounterState = {
      count: number;
    };
    type CounterAction = {
      type: string;
      payload: number;
    };

    const reducer = (state: CounterState, action: CounterAction) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + action.payload };
        case "decrement":
          return { count: state.count - action.payload };
        default:
          return state;
      }
    };

    export const Counter = () => {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
            Increment 10
          </button>
          <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
            Decrement 10
          </button>
        </>
      );
    };


## useReducer Strict Action Types
The issue here is the type string
    
  - type: "decrement"
  
So when passing in a different string, typescript won't detect any issue

What we can do is use template literal instead of strings, in our counter action type.
- Our typing is now more strict.

      type CounterAction = {
        type: 'increment' | 'decrement',
        payload: number;
      };

### __How to fix action payload__
The feature is call discriminated unions in typescript, and is recommended approach for useReducer in typescript.

By spliting the Action into two typing
  - UpdateAction and ResetAction

CounterAction can then be set to be ether typing

    type UpdateAction = {
      type: "increment" | "decrement"
      payload: number
    }

    type ResetAction = {
      type: "reset"
    }

    type CounterAction = UpdateAction | ResetAction

When now have increment/decrement with a payload and reset without a payload. 