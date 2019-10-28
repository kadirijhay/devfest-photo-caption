import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import Header from "./component/Header"
import PhotoCanvas from "./component/photo-caption/PhotoCanvas"
import Footer from "./component/Footer"
import CountdownTimer from "./component/countdown-timer/CountdownTimer"

function App() {
    return(
        <div className="container">
            <Header />
            <CountdownTimer />
            <PhotoCanvas />
            <Footer />
        </div>
    )
}

export default App