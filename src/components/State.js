import React from 'react'
import { useState } from 'react'
export default function State() {
 const [count, change] = useState(0);
  return (
    <div>
      <h1>This is the new state Component{count}</h1>
      <button onClick={() => change(count + 1)}>
        Click me{count}
      </button>

    </div>
  )
}
