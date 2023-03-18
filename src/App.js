import { useState } from 'react';
import './App.css';
import birthdays from './Birthdays';
function Data(){
  const[people,setpeople]=useState(birthdays);   
  return (
      <>
       <h1>{people.length} birthdays today</h1>
      {people.map(({ photo, name,age }) => (
        <>
        <div style={{display:'flex'}}>
        <img  src={photo}></img>
        <div>
        <h3>{name}</h3>
        <h4>{age}</h4>
        </div>
    </div>
     </>
      
      ))}
      <div className='buton'>
         <button onClick={()=>setpeople([])}>Clear all</button> 
       </div>
        
    </>
    );
  
}
function App() {

return(
    <div className='container'>
      <div>
       <Data/>
        </div>   
    </div>)
  
}


export default App;
