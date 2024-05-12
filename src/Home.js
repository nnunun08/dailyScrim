import React from "react";
import { Link } from 'react-router-dom';

function Home() {

    const ul = {
        padding: '40px 20px',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        marginTop: '60px',
        backgroundColor: '#f7f8f9'
    }
    const li = {
        fontFamily: 'Pretendard',
        fontSize: '16px',
        marginBottom: '20px'
    }
    return(

        <ul style={ul}>
            <li style={li}><Link to='/Page1'>page1</Link></li>
            <li style={li}><Link to='/Page2'>Page2</Link></li>
            <li style={li}><Link to='/Page3'>Page3</Link></li>
            <li style={li}><Link to='/Page4'>Page4</Link></li>
            <li style={li}><Link to='/Page5'>Page5</Link></li>
            <li style={li}><Link to='/Page6'>Page6</Link></li>
            <li style={li}><Link to='/Page7'>Page7</Link></li>
            <li style={li}><Link to='/Page8'>Page8</Link></li>
            <li style={li}><Link to='/Page9'>Page9</Link></li>
            <li style={li}><Link to='/Page10'>Page10</Link></li>
            <li style={li}><Link to='/Page11'>Page11</Link></li>
            <li style={li}><Link to='/Page12'>Page12</Link></li>
            <li style={li}><Link to='/Page13'>Page13</Link></li>
            <li style={li}><Link to='/Page14'>Page14</Link></li>
        </ul>
    ) 
}
export default Home;