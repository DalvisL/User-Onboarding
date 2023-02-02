import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`

`

export default function Form(props) {
    const {formData, setFormData, change, disabled} = props;
  return (
    <div>
        <StyledForm>
            <div>
                <label> First Name
                    <input onChange={change} type='text' value={formData.first_name} name='first_name' placeholder='First Name' ></input>
                </label>  
                <label> Last Name
                    <input onChange={change} type='text' value={formData.last_name} name='last_name' placeholder='Last Name'></input>
                </label> 
            </div>
            <label> Email
                <input onChange={change} type='email' value={formData.email} name='email' placeholder='Email Address'></input>
            </label>
            <label> Password
                <input onChange={change} type='text' value={formData.password} name='password' placeholder='password'></input>
            </label>
            <label> Agree to the Terms and Conditions
                <input onChange={change} type='checkbox' value={formData.terms} name='terms'></input>
            </label>
                
        </StyledForm>
    </div>
  )
}
