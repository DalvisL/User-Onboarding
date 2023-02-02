import { useState, useEffect } from 'react';
import Form from './Components/Form';
import schema from './validation/schema'
import * as yup from 'yup';
import axios from 'axios';

function App() {
  // Slices of State
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
  const [disabled, setDisabled] = useState(true);// Disabled button state 
  const [users, setUsers] = useState([]);

  const setFormErrors = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(valid => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }
  const change = (event) => { // onChange event handler function
   const  {name, type, checked, value} = event.target;
   const valueToUse = type === 'checkbox' ? checked : value;
   setFormData({...formData, [name] : valueToUse});
   setFormErrors(name, valueToUse);
  }
  const submit = (event) => {
    event.preventDefault()
    const newUser = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email,
      password: formData.password,
      terms: formData.terms
    }

    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        const newArr = [...users];
        newArr.push(res.data);
        setUsers(newArr);
        console.log(users);
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          terms: false 
        })
      })
      .catch(err => console.error)
  }

  useEffect(() => { // sets button disabled
    schema.isValid(formData).then(valid => setDisabled(!valid));
  }
  ,[formData])

  return (
    <div className="App">
      <Form formData={formData} change={change} submit={submit} disabled={disabled} errors={errors}/>
      {users.length > 0 && users.map((user, index) => {
        return(
          <pre className='users'>{JSON.stringify(user)}</pre>
        )
      })}
    </div>
  );
}

export default App;
