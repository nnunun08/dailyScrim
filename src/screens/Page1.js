import React from 'react';
import { Link } from 'react-router-dom';
// $ npm install react-slick --save // 라이브러리 설치
// $ npm install slick-carousel --save // css 설치
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Page1() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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


        <div className='hero'>
            <div className='inner'>
                <Slider {...settings}>
                    <div>
                        <h3>메인배너</h3>
                    </div>
                    <div>
                        <h3>메인배너</h3>
                    </div>
                </Slider>
            </div>
        </div>

        
    </>
}

export default Page1;