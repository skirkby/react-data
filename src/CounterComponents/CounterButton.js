import React from "react";

//
// Note the "props" parameter passed in to the Component
// function... this is how we access the properties that are
// set on the component instance by whatever parent component
// is creating a CounterButton.
//
// We have no validation here, we are assuming that the component
// instantiator is passing the properties that we need/care about...
//
// The props.numberFunction property is a function to be called in
// the onClick() event handler... in this case, it's a function
// that modifies the state object, "count". See Counter.js.
//
// The props.buttonLabel is just the text to display on the button.
//
// Note that the onClick event handler can just reference the
// function value from props, without creating a different
// anonymous function (or arrow function).
//
// Shout out to Sean Hockin for bringing this up!
//
export default function CounterButton(props) {
  return <button onClick={props.numberFunction}>{props.buttonLabel}</button>;
}
