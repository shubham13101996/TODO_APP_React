import React, { useEffect, useState } from 'react'
import "./style.css"


// getting the localStorage data 
const getStorageData = ()=>{
const data = localStorage.getItem('myList');
 if (data) {
return JSON.parse(data);
} else {
  return [];
}
};


const App = () => {
  //  our state variable
  const [input,setInput]=useState('');
  const[item,setItem]=useState(getStorageData()); 

  // adding the item 
  const addItem = ()=>{
    if(!input){
      alert('Empty List Cannot Be Add..!!')
    } else {
      const myNewData = {
        id : new Date().getTime().toString(),
        name:input
      }
     setItem([...item,myNewData]);
     setInput('');
    }
  };

  // deleting the particular item 
  const deleteItem=(index)=>{
    const filteredData = item.filter((curElem)=>{
      return curElem.id!==index;
    })
    setItem(filteredData);
  };

// removing all the list 
const clearAll = ()=>{
  setItem([]);
};

// adding localStorage using useEffect hook
useEffect(()=>{
localStorage.setItem('myList', JSON.stringify(item));
},[item]);


  return (
    <>
      <div className='main-div'>
          <div className='child-div'>
              <figure>
                <img src='./todo.webp' alt='todo-logo'/>
                <figcaption>Add Your List Here...✌</figcaption>
              </figure>
                <div className='addItem'>
                   <input type='text' placeholder=' ✍ Add Item..' className='form-control'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                   />
                   <i className='fa fa-plus add-btn' onClick={addItem}></i>
                </div>
                      {/* Show Items Here */}

                      <div className='showItems'>
                         {item.map((curElem)=>{
                          return (
                            <div className='eachItem' key={curElem.id}>
                            <h3>{curElem.name}</h3>
                            <div className='todo-btn'>
                               <i className='far fa-edit add-btn' ></i>
                               <i className='far fa-trash-alt add-btn' onClick={()=>{deleteItem(curElem.id)}}></i>
                             </div>
                          </div>
                          )
                          })}
                      </div>

                      {/* Remove Button */}
                <div className='showItems'>
                 <button className='btn effect04' data-sm-link-text="REMOVE ALL" onClick={clearAll}> <span> CHECK LIST</span> </button>
              </div>
         </div>
      </div> 
    </>
  )
}

export default App
