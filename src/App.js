import React, { useState } from 'react'
import "./style.css"
const App = () => {

  const [input,setInput]=useState('');
  const[item,setItem]=useState([]); 

  const addItem = ()=>{
    if(!input){
      alert('Empty List Cannot Be Store..!!')
    }else{
    setItem([...item,input]);
    setInput('');
    }
  }

  return (
    <>
      <div className='main-div'>
          <div className='child-div'>
              <figure>
                <img src='' alt='todo-logo'/>
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
                         {item.map((curElem,index)=>{
                          return (
                            <div className='eachItem' key={index}>
                            <h3>{curElem}</h3>
                            <div className='todo-btn'>
                               <i className='far fa-edit add-btn' ></i>
                               <i className='far fa-trash-alt add-btn' ></i>
                             </div>
                          </div>
                          )
                          })}
                      </div>

                      {/* Remove Button */}
                <div className='showItems'>
                 <button className='btn effect04' data-sm-link-text="REMOVE ALL"> <span> CHECK LIST</span> </button>
              </div>
         </div>
      </div> 
    </>
  )
}

export default App
