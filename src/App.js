import React from 'react'
import "./style.css"
const App = () => {
  return (
    <>
      <div className='main-div'>
          <div className='child-div'>
              <figure>
                <img src='' alt='todo-logo'/>
                <figcaption>Add Your List Here...✌</figcaption>
              </figure>
                <div className='addItem'>
                   <input type='text' placeholder=' ✍ Add Item..' className='form-control'/>
                   <i className='fa fa-plus add-btn' ></i>
                </div>
                      {/* Show Items Here */}

                      <div className='showItems'>
                         <div className='eachItem'>
                            <h3>apple</h3>
                            <div className='todo-btn'>
                               <i className='far fa-edit add-btn' ></i>
                               <i className='far fa-trash-alt add-btn' ></i>
                             </div>
                          </div>
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
