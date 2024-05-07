import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return <>
        <div className='loginPage'>
            <div className='loginWrap'>
                <button className='close'></button>
                <h2>VSS.GG 로그인</h2>
                <input className='input' type='text' placeholder='아이디(이메일)'/>
                <input className='input' type='password' placeholder='비밀번호'/>
                <label className='checkboxWrap'><input type='checkbox' />자동 로그인</label>
                <button className='btn-login'>로그인</button>
                <div className='flex-v find'>
                    <Link to='/'>ID/PW 찾기</Link>
                    <span className='divider'></span>
                    <Link to='/'>회원가입</Link>
                </div>
                <div className='sns'>
                    <div>간편로그인</div>
                    <ul>
                        <li><Link to='/'><img src='/img/ic_kakao.svg' alt='ic_kakao'/></Link></li>
                        <li><Link to='/'><img src='/img/ic_naver.svg' alt='ic_naver'/></Link></li>
                        <li><Link to='/'><img src='/img/ic_apple.svg' alt='ic_apple'/></Link></li>
                        <li><Link to='/'><img src='/img/ic_google.svg' alt='ic_google'/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Login;