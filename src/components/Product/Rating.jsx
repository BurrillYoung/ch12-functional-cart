import React from "react";

const Rating = (props) => {
  return   <p>Rating: {props.rating.rate} from {props.rating.count} users</p>;
}
 
export default Rating;
