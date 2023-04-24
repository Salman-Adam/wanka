import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes } from 'react-router-dom'
import  {Blog, Contact, Features, Home, Pricing} from './PageRouter/index'
import Navbar from './Components/Navbar/Navbar'
import  Container  from './Components/Container/Container'
import { Footer } from './Components/index'
const app = () => {

    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Features' element={<Features />} />
                    <Route path='/Pricing' element={<Pricing />} />
                    <Route path='/Blog' element={<Blog />} />
                    <Route path='/Contact Us' element={<Contact />} />
                </Routes>
            </Container>
            <Footer/>
        </>
    )
}

export default app