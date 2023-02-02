import * as yup from 'yup'

const schema = yup.object().shape({
    first_name: yup.string().required('First Name is a required field'),
    last_name: yup.string().required('Last Name is a required field'),
    email: yup.string().email('Must be a valid email address').required('Email is a required field'),
    password: yup.string().required('Password is a required field').min(6, 'Password must be a minimum of 6 Characters'),
    terms: yup.boolean().oneOf([true], 'You must agree to the Terms and Conditions')
})

export default schema;