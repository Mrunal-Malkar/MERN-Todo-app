import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router';
import AboutDeveloper from './components/aboutdeveloper';
import SignIn from './components/signin';
import Todo from './components/todo';
import Notes from './components/note';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-12 flex justify-center align-middle bg-[#7EA8BE]'>
      <h3 className='font-serif self-center'>“Rename your “To-Do” list to your “Opportunities” list. Each day is a treasure chest filled with limitless opportunities; take joy in checking many off your list.”</h3>
    </div>
    <div className='md:w-[90%] lg:w-[60%]  w-full h-screen bg-gray-400 md:m-auto flex md:justify-start flex-row'>
    <Navbar />
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/aboutdeveloper' element={<AboutDeveloper/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/notes' element={<Notes/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
