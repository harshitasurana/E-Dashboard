import React from 'react'
import Nav from './components/nav'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Nav />
      <main className="flex-grow p-6">
      <Routes>
        <Route path='/' element={<h1>Product listing component</h1>}></Route>
        <Route path='/add' element={<h1> Add Productcomponent</h1>}></Route>
        <Route path='/update' element={<h1> Update Productcomponent</h1>}></Route>
        <Route path='/logout' element={<h1> logout Productcomponent</h1>}></Route>
        <Route path='/profile' element={<h1> profile Productcomponent</h1>}></Route>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      </main>
      <Footer />
    </div >
  )
}

export default App

