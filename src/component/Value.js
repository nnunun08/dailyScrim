import React from "react"

function Value({color, value=`20000`}) {
    const style = {
        color : color
    }
    return <>
        <div className="flex-v ic-v-wrap">
            <span className='ic-v'></span>
            <span className='ic-v-value' style={style}>{value}</span>
        </div>
    </>
}

export default Value;
