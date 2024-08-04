import React from 'react'
import Navbar from './navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Services from './components/Services'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/about" component={About} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/contact" component={Contact} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
