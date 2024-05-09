import React from "react";

function Paging() {
    return <>
        <div className='grid-bottom'>
            <div className='paging'>
                <button className='start'></button>
                <button className='prev'></button>
                <div className='page ac'>1</div>
                <div className='page'>2</div>
                <button className='next'></button>
                <button className='end'></button>
            </div>
        </div>
    </>
}
export default Paging;