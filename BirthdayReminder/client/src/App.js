import Birthday from "./Birthday";
import {data} from './data';
import {useState} from 'react';
import "./App.css";
function App() {
const [person,setPerson]=useState(data);
  return (
      <article className="container">
       <h4>{person.length} birthdays today</h4>
       {person.map((people)=>{
        return (
          <div>
            <Birthday men={people} />
          </div>
        )
       })}


      </article>
   
  );
}

export default App;
