import React, { useState } from "react"

type Props = {
  value?: number
}

export const Counter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const onMins = () => {
    setCounter((prve) => prve - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMins}> - </button>
      <button onClick={onPlus}> + </button>
    </div>
  )
}

export default Counter
