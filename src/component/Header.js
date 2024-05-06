import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <>
        <header className='gnb'>
            <div className='gnb-left'>
                <Link to='/' className="home">
                    <img src='/img/logo_dailyscrim.png' alt='logo' />
                </Link>
                
                <Link to='/'>스크림</Link>
                <Link to='/'>팀원 모집</Link>
                <Link to='/'>랭킹</Link>
                <Link to='/'>내정보</Link>
            </div>
            <div className='gnb-right'>
                <div className='icon lang'></div>
                <div className='icon alram'></div>
                <div className='loginState'>
                    <div className='ac'>
                        <Link to='/' className='loginBtn'>로그인</Link>
                    </div>
                    <div className=''>
                        <div className='icon profile'>
                            <img src='/img/img_profile_df.jpg' alt='profile' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;