import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEye, faHeart, faStar} from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faHeart, faStar);

export function EyeCounter() {
  return <FontAwesomeIcon icon={["fas", "eye"]} color="#3164DB" style={{margin: "0 5px 0 0"}}/>
}

export function HeartCounter() {
  return <FontAwesomeIcon icon={["fas", "heart"]} color="#ff403d" style={{margin: "0 5px 0 0"}}/>
}

export function StarCounter() {
  return <FontAwesomeIcon icon={["fas", "star"]} color="#ff6d21" style={{margin: "0 5px 0 0"}}/>
}