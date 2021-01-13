import './App.css';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState({text: 'testes'});

  function handleChange(value){
    console.log(value);
    setText({text:value});
  }
  const modulo = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] },{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike','link', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},{'indent': '-1'}, {'indent': '+1'},{ 'align': [] } ],
      [{ 'color': [] }, { 'background': [] },'image', 'code-block'],
      ['clean']
    ]
  }

  return (
    <div className="App">
      <div className="text-editor" 
        dangerouslySetInnerHTML={{__html: text.text}}>
      </div>
      <ReactQuill
        value={text.text}
        onChange={handleChange}
        modules={modulo}
      />
    </div>
  );
}

export default App;
