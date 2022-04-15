import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const counterStyles = {
  margin: "0 5px 0 0",
};

export function EyeCounter() {
  return <FontAwesomeIcon icon={faEye} color="#3164DB" style={counterStyles} />;
}

export function HeartCounter() {
  return <FontAwesomeIcon icon={faHeart} color="#ff403d" style={counterStyles} />;
}

export function StarCounter() {
  return <FontAwesomeIcon icon={faStar} color="#ff6d21" style={counterStyles} />;
}
