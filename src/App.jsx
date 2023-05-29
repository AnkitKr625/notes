import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TextArea from './components/TextArea';
import './App.css';

function App() {
  const [text, setText] = useState('')
  return (
    <div>
      <TextArea newNote={text} setNewNote={setText}/>
      {text}
    </div>
  )
}

export default App
