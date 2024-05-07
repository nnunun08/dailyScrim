import React from "react"

function Value({color}) {
    const style = {
        color : color
    }
    return <>
        <div className="flex-v ic-v-wrap">
            <span className='ic-v'></span>
            <span className='ic-v-value' style={style}>20000</span>
        </div>
    </>
}

export default Value;
