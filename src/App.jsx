import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  console.log(uuid());
  return (
    <div>
      hello
    </div>
  )
}

export default App
