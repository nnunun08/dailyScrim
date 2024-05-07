import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Header({login}) {
    // login = login
    const [alram, setAlram] = useState('')
    const alramToggle = () => {
        alram === '' ? setAlram('on') : setAlram('')
    }

    const [profile, setProfile] = useState('')
    const profileToggle = () => {
        profile === '' ? setProfile('on') : setProfile('')
    }

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
                <div className={`icon alram ${alram}`} onClick={alramToggle} >
                    <div className='alramList'>
                        <div className='tit'>알림</div>
                        <ul>
                            <li className='fill'>
                                <div className='mesg'>ROCODS님이 스크림 매칭을 수락했습니다</div>
                                <div className='time'>10분전</div>
                            </li>
                            <li className='fill'>
                                <div className='mesg'>vd님이 쪽지를 보냈습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className=''>
                                <div className='mesg'>sldee님이 스크림 신청이 왔습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className='fill'>
                                <div className='mesg'>ROCODS님이 스크림 매칭을 수락했습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className=''>
                                <div className='mesg'>vd님이 쪽지를 보냈습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className=''>
                                <div className='mesg'>vd님이 쪽지를 보냈습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className=''>
                                <div className='mesg'>vd님이 쪽지를 보냈습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className=''>
                                <div className='mesg'>vd님이 쪽지를 보냈습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className=''>
                                <div className='mesg'>vd님이 쪽지를 보냈습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                            <li className=''>
                                <div className='mesg'>vd님이 쪽지를 보냈습니다</div>
                                <div className='time'>2023.06.30 16:50</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`loginState ${login}`} >
                    <div className=''>
                        <Link to='/' className='loginBtn'>로그인</Link>
                    </div>
                    <div className={`rel ${profile}`}>
                        <div className='icon profile' onClick={profileToggle}>
                            <img src='/img/img_profile_df.jpg' alt='profile' />
                        </div>
                        <div className='profile-option'>
                            <div className='imgWrap'>
                                <img src='/img/img_profile_df.jpg' alt='profile' />
                            </div>
                            <div className='nickname'>닉네임</div>
                            <ul>
                                <li><Link to='/' className='list'>마이페이지</Link></li>
                                <li><Link to='/' className='list'>회원정보 수정</Link></li>
                                <li><Link to='/' className='list'>마이페이지</Link></li>
                            </ul>
                            <button className='btn'>로그아웃</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;