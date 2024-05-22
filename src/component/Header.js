import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

function Header({login, page1, page2, page3, page4}) {

    // login = login
    const [alram, setAlram] = useState('')
    const alramToggle = () => {
        alram === '' ? setAlram('on') : setAlram('')
    }

    // 
    const [profile, setProfile] = useState('')
    const profileToggle = () => {
        profile === '' ? setProfile('on') : setProfile('')
    }

    // loginModal
    const [loginModal, setLoginModal] = useState('')
    const loginOpen = () => {
        loginModal === '' ? setLoginModal('on') : setLoginModal('')
    }

    return <>
        <header className='gnb'>
            <div className='gnb-left'>
                <Link to='/' className="home">
                    <img src='/img/logo_dailyscrim.png' alt='logo' />
                </Link>
                
                <Link className={page1} to='/'>스크림</Link>
                <Link className={page2} to='/'>팀원 모집</Link>
                <Link className={page3} to='/'>랭킹</Link>
                <Link className={page4} to='/'>내정보</Link>
            </div>
            <div className='gnb-right'>
                {/* <div className='icon lang'></div> */}
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
                        <button className='loginBtn' onClick={loginOpen}>로그인</button>
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

        <div className={`loginPage ${loginModal}`}>
            <div className='loginWrap'>
                <button className='close' onClick={loginOpen}></button>
                <h2>VSS.GG 로그인</h2>
                <input className='input' type='text' placeholder='아이디(이메일)'/>
                <input className='input' type='password' placeholder='비밀번호'/>
                <Checkbox label={'자동 로그인'} />
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

export default Header;