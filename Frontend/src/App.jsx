import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Courses from './Courses/Courses';
import Signup from './Component/Signup';
import Contacts from './Contacts/Contacts';



const App = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contacts/>}/>

      </Routes>
    </div>
  )
}

export default App;