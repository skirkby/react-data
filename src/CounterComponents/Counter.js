/*

  This is a module that exports a component function
  for the "Counter" component. This is the parent
  component for the buttons that change the "count", as
  well as the label the displays it.

  We have componentized the "buttons", so we import the
  CounterButton component module. This lets us duplicate
  all of the styling and logic/behavior of a "counter button"
  as a component.

*/

//
// We want to create a state variable, and a setter method,
// so we need the React "useState" hook (method). We could
// access it as a member of the React object (i.e.
// React.useState()), or we can import it as a named import...
//
// We can surmise that the "react" module exports an object
// as the "default" export, *and* also exports useState as
// a named object. (In fact, all of the hook methods are
// exported as named exports...)
//
import React, { useState } from "react";
import CounterButton from "./CounterButton.js";

export default function Counter() {
  //
  // We want to keep track of the "count", and modify the
  // UI/DOM as the count changes... smells like state
  // (medium rare)...
  //
  // We set the count initial value to "0" (the param passed
  // to useState()).
  //
  // You should create state objects as far down the
  // hierarchy as you can, but high enough that all child
  // components that need to access or manipulate state data
  // can be "passed" the data through JSX tag properties (similar
  // to HTML element properties.)
  //
  const [count, setCount] = useState(0);

  //
  // We need to create methods to manipulate state using
  // the setCount() setter, so that we can pass these
  // state-altering methods to child components as a "property"
  // ("prop" for short).
  //
  // You don't create an onClick() event handler for custom
  // components... rather, you create onClick() event handlers
  // for the JSX components that represent normal HTML elements.
  //
  // See the <CounterButton /> components below for how we pass
  // these methods, and other info, to the CounterButton component
  // function, so it can use them.
  //
  // In the CounterButton component function, an onClick() event
  // handler will be created for the <button /> element that
  // is returned from the component function.
  //
  // Since it's a component, it's meant to be used to create
  // multiple instances of the same thing, but that doesn't
  // mean you can't customize each instance... you can pass
  // "customization data" to a component instance through the
  // JSX tag "properties" or "props". These are accessed in
  // a parameter that is passed to the component function.
  //
  // See the ComponentButton() component runction in
  // ComponentButton.js for an example.
  //
  const addNumber = () => {
    setCount(count + 1);
  };

  const multNumber = () => {
    setCount(count * 5);
  };

  const resetNumber = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>React Counter</h2>
      <p className="click_desc">
        Your count: <span>{count}</span>
      </p>
      <div className="button_container">
        {/* 
          These <CounterButton /> components each have custom
          "properties" (props) set. This allows us to create
          multiple instances of the component, but customize
          each one. Each of the buttons below has a different
          "label", and a different method to call in the 
          onClick() handler created in the ultimate <button/>
          component.
        */}
        <CounterButton numberFunction={addNumber} buttonLabel="++" />
        <CounterButton numberFunction={multNumber} buttonLabel="*=5" />
        <CounterButton numberFunction={resetNumber} buttonLabel="=0" />
      </div>
    </div>
  );
}

// See CounterButton.js next.
// See also ColorPicker.js.
