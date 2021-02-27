import React, {useState} from 'react';
import {Form } from 'react-bootstrap';

function Radio_check() {
  const [gender, setGender] = useState('female');
 const handleGender =(e)=>{
  
  setGender(e.target.value)

 }

  return (
    <>
     Room :- {gender}
       <Form>
          <Form.Check label="Male" 
          type="radio" 
          value="male" 
           checked={gender === 'male'}
           onChange={handleGender}
           name="gender"  
          />

          <Form.Check label="Female" 
           type="radio" 
           value="female" 
           checked={gender === 'female'}
           onChange={handleGender}
           name="gender"
          />

        
      </Form>
     
    </>
  );
}

export default Radio_check;
