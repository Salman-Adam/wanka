import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes } from 'react-router-dom'
import { Home} from './PageRouter/index'
import Navbar from './Components/Navbar/Navbar'
import { Container } from './Components/index'
const app = () => {

    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Container>
        </>
    )
}

export default app