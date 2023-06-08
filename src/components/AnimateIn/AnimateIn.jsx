import React from "react"
import { useInView } from "react-intersection-observer"

function AnimateIn({ threshold = 0.35, triggerOnce = true, type, ...remainingProps }) {
  const [ref, inView] = useInView({ threshold, triggerOnce })
  let style = ''
  switch (type) {
    case 'zoom':
      style = {transform: `scale(${inView ? 1 : 1.1})`}
      break;
    case 'slide':
      style = {transform: `translateY(${inView ? 0 : 20}%)`}
      break;
    case 'scaleY':
      style = {transform: `scaleY(${inView ? 1 : 0})`, transformOrigin: 'bottom left'}
      break;
    default:
      style = {transform: `translateY(${inView ? 0 : 20}%)`}
    }
  return (
    <div
      ref={ref}
      style={{
        // adjust these as desired
        transition: "opacity 600ms, transform 600ms, scale 600ms",
        opacity: inView ? 1 : 0,
        ...style
      }}
      {...remainingProps}
    />
  )
}

export default AnimateIn;