import { useState, useEffect } from 'react';
import Form from './Components/Form';
import schema from './validation/schema'
import * as yup from 'yup';

function App() {

  const [formData, setFormData] = useState({ // Form Data state
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    terms: false 
  })
  const [errors, setErrors] = useState({ // Form error state
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    terms: '' 
  })
  const [disabled, setDisabled] = useState(true);

  const change = (event) => { // onChange event handler function
   const  {name, type, checked, value} = event.target;
   const valueToUse = type === 'checkbox' ? checked : value;
   setFormData({...formData, [name] : valueToUse});
  }

  const setFormErrors = (name, value) => {
    yup.reach(schema, name)
      .validate()
  }

  useEffect(() => {
    schema.isValid(formData).then(valid => setDisabled(!valid));
  }
  ,[formData])

  return (
    <div className="App">
      <Form formData={formData} setFormData={setFormData} change={change} disabled={disabled}/>
    </div>
  );
}

export default App;
