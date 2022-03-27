import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight);

export function LargeForwardNavigationArrow() {
  return <div>hey</div>
}

export function LargeBackwardNavigationArrow() {
  return <div>yeh</div>
}

export function SmallForwardNavigationArrow() {
  return <FontAwesomeIcon icon={["fas", "chevron-right"]} />
}

export function SmallBackwardNavigationArrow() {
  return <FontAwesomeIcon icon={["fas", "chevron-left"]} />
}