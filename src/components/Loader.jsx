import React from 'react'
import Loader from "../assets/images/loader.mp4"

const Loader = () => {
return (
<div>
    <>
        <div id="site-loader" className="load-complete">
            <div className="sec1">
                <video  src={Loader} loop playsInline  muted autoPlay></video>
            </div>
        </div>
        <canvas id="canvas" />
    </>

</div>
)
}

export default Loader