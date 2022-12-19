import React from 'react'
import './Form3.css'
import { useState } from 'react';
import { Progress, Form, FormGroup, Label, Input } from 'reactstrap';


  
function Form3() {
    const [state, setState] = useState(true);
  return (
    <div className='Rightmain'>
      <p className='Rightcontainertitle'>Dashboard</p>
        <div className='Rightcontainer'>
        <div className='Row1'>
            <div className='Row1a'>
                <div className='Row1a1'>
                <p className='Row1a1aa'>Available balance</p>
                <div className='Row1a1aa1'>
                <p className='Row1a1aa'>Credit</p>
                

                <Form>
     
      <FormGroup switch>
        <Input
          type="switch"
          checked={state}
          onClick={() => {
            setState(!state);
          }}
        /></FormGroup>
        </Form>
        </div>

                
                </div>
                <p className='Row1a2'>$ 12,234</p>
                <div className='Row1a3q'>
                <p className='Row1a3'>**** 4532</p>
                <img className='Row1a3img'src='images/images (7).png'alt=''></img>
                </div>
            </div>
            <div className='Row1b'>
                <p className='Row1b1'>Expenses statistics</p>
                <div  className='Row1b11'>
                <label for='week'></label>
                <select name='week'id='week'>
                    
                    <option value='week1'>week1</option>
                    <option value='week2'>week2</option>
                    <option value='week3'>week3</option>
                    <option value='week4'>week4</option>
                </select>
                </div>
                <img className='Row1b2'src='images/Untitled.jpg'alt=''></img>
            </div>
        </div>
        <div className='Row2'>
        <div className='Row2a'>
            <div className='Row2a1'>
            <p>Internet payment limit</p>
            <p><span className='span'>$1,200</span>/3,000</p>
            </div>
            <Progress
    className="my-3"
    style={{
      height: '5px'
    }}
    value={65}
  />
            
            <div className='Row2a2'>
            <div className='Row2a2a'>
                
              <p><span className='span2'>Income</span><br/><b>$5,700</b></p>
            </div>
            <div className='Row2a2a'>
                <p><span className='span2'>Spendings</span><br/><b>$2,254</b></p>
            </div>
            </div>
        </div>
        <div className='Row2b'>
            <p  className='Row2b1'>Send money to <hr/></p>
            <div className='Row2b2'>
            <button className='Row2b3butn'><i className='fa fa-plus-circle fa-2x'aria-hidden='true'></i></button>
                <button className='Row2b3butn'><img className='Row2b3'src='images/images (31).jpeg'alt=''></img></button>
                <button className='Row2b3butn'><img className='Row2b3'src='images/images (32).jpeg'alt=''></img></button>
                <button className='Row2b3butn'><img className='Row2b3'src='images/images (33).jpeg'alt=''></img></button>
                <button className='Row2b3butn'><img className='Row2b3'src='images/images (34).jpeg'alt=''></img></button>
            </div>
        </div>
        </div>
        <div className='Row3'>
        <div className='Row3a'>
            
            <div className='Row3acontent'>
            <p className='Row3atitle'><b>Latest spendings</b></p>
            <button type='submit' className='Row3aview'>View All</button>
            </div>
             <hr></hr>   
            <div className='Row3a1'>
                <div className='Row3acon'><i className='fa fa-shopping-cart'aria-hidden='true'></i>
                <p>Online store<br/><span className='prod'>May 23,2022 at 8:20PM</span></p>
                </div>

                <p><b>-$32.50</b></p>
            </div>
            <div className='Row3a2'>
            <div className='Row3acon'>
            <i className='fa fa-home'aria-hidden='true'></i>
                <p>Housekeeping<br/><span className='prod'>May 23,2022 at 4:20PM</span></p>
                </div>
                <p><b>-$4.20</b></p>
            </div>
            <div className='Row3a3'>
            <div className='Row3acon'>
            <i className='fa fa-users'aria-hidden='true'></i>
                <p>Tickets<br/><span className='prod'>May 23,2022 at 1:30PM</span></p>
                </div>
                <p><b>-$100.29</b></p>
            </div>
        </div>
        <div className='Row3b'>
            <p><b>Scheduled payments</b></p>
            <div className='Row3b2'>
            <div className='Row3b2a'>
                <p  className='rowimg'>$13.99/m</p>
                <i className='fa fa-gamepad'aria-hidden='true'></i>
                <p>Ps5 Game</p>
            </div>
            <div className='Row3b2b'>
            <p  className='rowimg'>$1.99/m</p>
                <i className='fa fa-users'aria-hidden='true'></i>
                <p>Discord</p>
            </div>
            <div className='Row3b2c'>
            <p  className='rowimg'>$10.00/m</p>
                <i className='fa fa-bolt'aria-hidden='true'></i>
                <p>Ps5 Game</p>
            </div>
            </div>
        </div>

        </div>
        
        </div>


    </div>
  )
}

export default Form3
