import React from "react"

class ImageUpload extends React.Component {
    handleUploadAlt = () => {
        this.refs.imgUpload.click()
    }

    render() {
        return (
            <div className="steps-container">
                <label>
                    <span className="label">Step 1:</span>
                    <input
                        ref="imgUpload"
                        style={{display:"none"}}
                        type="file"
                        accept="image/*"
                        onChange={this.props.eventHandler.handleImage}
                    />
                </label>              
                <button onClick={this.handleUploadAlt}>Upload your Picture</button>
                <p style={{color:"#003E73",fontWeight:"bold"}}>[PS: for best result, upload a square-sized Image]</p>
            </div>
        )
    }
}

export default ImageUpload