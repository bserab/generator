import { useState } from "react";

export default function App() {
    
    const[name, setName] = useState("Bob");
    const[showStory,setStory]= useState(null);
    const[ukus,setUkus] = useState("us");
    const[temp,setTemp] = useState("94 fahrenheit");
    const[unit,setUnit] = useState("300 pounds");
    
    var items1 = ["Willy the Goblin","Big Daddy","Father Christmas"];
    var items2 = ["the soup kitchen","Disneyland","the White House"];
    var items3 = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

    function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    }

    function changeUkus(){
        setUkus(event.target.value);
        if(event.target.value=="uk"){
            setTemp("34 centigrade");
            setUnit("21 stone");
        }else{
            setTemp("94 fahrenheit");
            setUnit("300 pounds");
        }
    }

    function generateStory(){
        const xItem = randomValueFromArray(items1);
        const yItem = randomValueFromArray(items2);
        const zItem = randomValueFromArray(items3);
        return `It was ${temp} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} ${unit}, and it was a hot day.`;
    }

    function handleClick(){
        const makedStory = generateStory();
        setStory(makedStory);
    }

    function changeName(){
        const newName = event.target.value;
        setName(newName)
    }
    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" onChange = {changeName}/>
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} onChange={changeUkus}/>
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} onChange={changeUkus}/>
        </div>
        <div>
          <button onClick={handleClick}>Generate random story</button>

        </div>
        {showStory && (
          <p>
            {showStory}
          </p>
        )}
      </>
    );
  }