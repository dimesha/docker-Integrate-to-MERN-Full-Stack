import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

const [notes, SetNotes] = useState(null);

useEffect(() => {
  axios
  .get("http://localhost:4000/api/notes")
  .then((res) => {
    console.log(res?.data);
    SetNotes(res?.data?.data);
  });
},[]);


  return (
    <div className="App">
      <h1>Notes</h1>
      {notes? (
        <ul>
          {notes?.map((note,index) => (
            <li key={index}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>

            </li>
          ))}
        </ul>
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
}

export default App;
