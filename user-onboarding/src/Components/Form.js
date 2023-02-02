import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
label {
    font-size: 3rem;
    color: grey;
    input {
        margin-left: 10px;
        font-size: 2.5rem;
    }
}
button {
    font-size: 3rem;
    width: fit-content;
    background: white;
    border: solid green 2px;
    border-radius: 5px;
    color: green;
    margin-top: 20px;
    &:hover {
        background: green;
        color: white;
    }
    &:disabled {
        border: solid red 2px;
        color: red;
        background: #FAFAFA;
    }
}
.error {
    color: red;
}

`

export default function Form(props) {
    const {formData, change, submit, disabled, errors} = props;
  return (
    <div>
        <StyledForm onSubmit={submit}>
            <div>
                <div className='errors'>
                    {errors.first_name.length > 0 && <p className='error'>{errors.first_name}</p>}
                    {errors.last_name.length > 0 && <p className='error'>{errors.last_name}</p>}
                </div>
                <label> First Name
                    <input onChange={change} type='text' value={formData.first_name} name='first_name' placeholder='First Name' ></input>
                </label>  
                <label> Last Name
                    <input onChange={change} type='text' value={formData.last_name} name='last_name' placeholder='Last Name'></input>
                </label> 
            </div>
            <div>
                <div className='errors'>
                    {errors.email.length > 0 && <p className='error'>{errors.email}</p>}
                    {errors.password.length > 0 && <p className='error'>{errors.password}</p>}
                </div>
                <label> Email
                    <input onChange={change} type='email' value={formData.email} name='email' placeholder='Email Address'></input>
                </label>
                <label> Password
                    <input onChange={change} type='password' value={formData.password} name='password' placeholder='Password'></input>
                </label>  
            </div>
            {errors.terms.length > 0 && <p className='error'>{errors.terms}</p>}
            <label>
                <input onChange={change} type='checkbox' value={formData.terms} name='terms'></input>
                 Agree to the Terms and Conditions
            </label>
            <button type='submit' disabled={disabled}>Submit</button>
        </StyledForm>
    </div>
  )
}
