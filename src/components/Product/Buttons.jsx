import React from "react";

const Buttons = (props) => {
  return <button onClick={() => props.onBuyNow(props.id)}>Buy Now</button>;
}
export default Buttons;
