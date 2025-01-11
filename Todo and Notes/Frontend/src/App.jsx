import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router';
import AboutUs from './components/aboutus';
import SignIn from './components/signin';
import Todo from './components/todo';
import Notes from './components/note';
import Home from './components/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Navbar />
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/notes' element={<Notes/>}/>
    </Routes>
  )
}

export default App
