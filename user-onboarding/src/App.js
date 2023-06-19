import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import { useState } from 'react';
import formSchema from './validation/formSchema';
import * as yup from yup
import axios from axios



  const initialFromValues = {
    username: '', 
    email '', 
    password: '', 
    tos: false
  }

  const initialFromErrors = {
    username: '', 
    email '', 
    password: '', 
    tos: ''
  }

function App() {
  const [formValues, setFormValues] = useState(initialFromValues)
  const [formErrors, setFormErrors] = useState('')
  const [users, setUsers] = useState([])

  const handleChange = (name, value) => {
      setFormValues({...formValues, [name]: value})
      validate(name, value)
  }

  const handleSubmit = () => {
    axios.post(`https://reqres.in/api/users`, formValues)
         .then(res => {
          setUsers([res.data, ...users])
         })
         .catch(err => console.log(err))
  }

  const validate = (name, values) => (
    yup.reach(formSchema, name)
        .validate(values)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  )

  return (
    <div className="App">
        <Form  values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
    </div>
  );
}

export default App;
