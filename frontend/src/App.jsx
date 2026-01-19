import React from 'react'
import Nav from './components/nav'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import AddProduct from './pages/AddProduct'

const App = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Nav />
      <main className="flex-grow p-6">

        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<h1>Product listing component</h1>}></Route>
            <Route path='/add-product' element={<AddProduct />}></Route>
            <Route path='/update' element={<h1> Update Productcomponent</h1>}></Route>
            <Route path='/logout' element={<h1> logout Productcomponent</h1>}></Route>
            <Route path='/profile' element={<h1> profile Productcomponent</h1>}></Route>
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div >
  )
}

export default App

