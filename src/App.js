import "./styles.css";

import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const person = {
        name: title,
        date: new Date().toLocaleString()
      };
      setPeople([...people, person]);
      setTitle("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <div className="App">
      <input
        placeholder="type here"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Create new Article</button>

      {people.map((person, index) => {
        const { name, date } = person;

        return (
          <div className="article" key={index}>
            <h2>{name}</h2>
            <p>{date}</p>
            <button>EDIT</button>
            <button>DELETE</button>
          </div>
        );
      })}
    </div>
  );
}
