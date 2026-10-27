import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput]= useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleChange=(e)=>{
    const {name,value}= e.target;

    setInput((abc)=> ({...abc,[name]:value,}))

  }
  
   const submitForm = (e) => (
      e.preventDefault(),
      console.log(input)
    );

  return (
    <>
      <form onSubmit={submitForm}>
      <label htmlFor="firstname">firstname:
        <input type="text"
        name='firstname'
        id="firsttname"
        value={input.firstname}
        onChange={handleChange}
        className='bg-amber-700'  
        />
      </label>

        <label htmlFor="lastname">lastname:
        <input type="text"
        name='lastname'
        id="lastname"
        value={input.lastname}
        onChange={handleChange} 
        className='bg-amber-700'
         
        />
      </label>

       <label htmlFor="tel">Phone:</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          value={input.tel}
          onChange={handleChange}
          className="bg-amber-700"
        />

      <label htmlFor="email">Email:
        <input type="email"
        name='email'
        id='email'
        value={input.email}
        onChange={handleChange}
        className='bg-amber-700'
        />
      </label>

      <label htmlFor="password">Password:
        <input type="password"
        name='password'
        id='password'
        value={input.password}
        onChange={handleChange}
        className='bg-amber-700'
        />
      </label>



      <button type='submit'>Submit</button>
      
      <h1>Ashish Kumar V</h1>
      </form>
    </>
  )
}

export default App
