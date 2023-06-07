import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import Dashboard from './pages/Dashboard'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/book' element={<Book />} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing