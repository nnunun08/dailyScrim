import React, {useState} from 'react';

function ComboBox({comboWidth,value,option}) {

        const [comboState, setComboState] = useState('')
        const comboBoxToggle = () => {
            comboState === '' ? setComboState('ac') : setComboState('')
        }

        return (
            <div className={`comboBox ${comboState}`} style={comboWidth} onClick={comboBoxToggle}>
                <div className='select'>
                    <span className='value'>{value}</span>
                    <div className='body'>
                        <div className='dropItem'>
                            {option}
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default ComboBox;