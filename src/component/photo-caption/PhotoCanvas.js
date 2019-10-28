import React from "react"

import devfest from "../../images/devfest-photo-caption.jpg"

import ImageUpload from "./ImageUpload"
import NameInput from "./NameInput"

class PhotoCanvas extends React.Component {
    state = {
        fullName: "",
        userUpload: null
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const context = canvas.getContext("2d")
        const canvasImg = this.refs.canvasImg

        context.font = "45px arial"
        context.fillStyle = "white"

        canvasImg.onload = () => {
            context.drawImage(canvasImg, 0, 0, canvas.width, canvas.height)
            context.fillText("[YOUR NAME HERE]", 484, 350, 580)
        }
    }

    drawUserImage = () => {
        const canvas = this.refs.canvas
        const context = canvas.getContext("2d")
        const userImg = this.refs.userImg

        // check for image size before rendering
        userImg.onload = () => {
            if(userImg.width === userImg.height) {
                context.clearRect(62, 282, 370, 370)
                context.drawImage(userImg, 62, 282, 370, 370)
            } else {
                let scaleX = userImg.width
                let scaleY = userImg.height

                let centerX = 0
                
                if(userImg.width < userImg.height) {
                    scaleY = userImg.width
                } else if(userImg.height < userImg.width) {
                    scaleX = userImg.height

                    let calcPositionX = (userImg.width - scaleX) / 2
                    centerX += calcPositionX
                }

                context.clearRect(62, 282, 370, 370)
                context.drawImage(userImg, centerX, 0, scaleX, scaleY, 62, 282, 370, 370 )
            }
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleImage = (event) => {
        event.preventDefault()

        this.setState({
            userUpload: URL.createObjectURL(event.target.files[0])
        })

        this.drawUserImage()
    }
    
    handleText = (event) => {
        event.preventDefault()

        const canvas = this.refs.canvas
        const context = canvas.getContext("2d")
        const userName = this.state.fullName

        const canvasImg = this.refs.canvasImg
        const userImg = this.refs.userImg

        if(userName) {
            context.clearRect(375, 0, canvas.width, canvas.height)
            context.drawImage(canvasImg, 0, 0, canvas.width, canvas.height)
            
            if(userImg) {
                if(userImg.width === userImg.height) {
                    context.clearRect(62, 282, 370, 370)
                    context.drawImage(userImg, 62, 282, 370, 370)
                } else {
                    let scaleX = userImg.width
                    let scaleY = userImg.height
    
                    let centerX = 0
                    
                    if(userImg.width < userImg.height) {
                        scaleY = userImg.width
                    } else if(userImg.height < userImg.width) {
                        scaleX = userImg.height
    
                        let calcPositionX = (userImg.width - scaleX) / 2
                        centerX += calcPositionX
                    }
    
                    context.clearRect(62, 282, 370, 370)
                    context.drawImage(userImg, centerX, 0, scaleX, scaleY, 62, 282, 370, 370 )
                }
            }

            context.fillText(userName.toUpperCase(), 484, 350, 580)
            this.refs.download.style.display = "block"
        }
    }
    
    handleDownload = (event) => {
        const dataURL = this.refs.canvas.toDataURL()
    
        const tempLink = document.createElement("a")
        tempLink.download = "Devfest Ogbomoso.jpg"
        tempLink.href = dataURL

        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
    }
    
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <ImageUpload eventHandler = {this} />
                    <NameInput eventHandler = {this} />

                    <div
                        ref="download"
                        className="flexbox steps-container"
                        style={{display:"none"}}
                    >
                        <span className="label">Step 4:</span>
                        <button
                            onClick={this.handleDownload}
                        >Download</button>
                    </div>
                </div>

                <div className="col-md-auto">
                    <canvas ref="canvas" width={1080} height={1080}></canvas>
                    <img style={{display:"none"}} ref="canvasImg" src={devfest} alt=""/>
                    <img style={{display:"none"}} ref="userImg" src={this.state.userUpload} alt=""/>

                </div>
            </div>
        )
    }
}

export default PhotoCanvas