import React from "react";
function Checkbox({label}) {
    return (
        <>
        <label className='checkboxWrap'><input type='checkbox' />{label}</label>
        </>
    )
}
export default Checkbox;