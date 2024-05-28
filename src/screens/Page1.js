import React from 'react';
import { Link } from 'react-router-dom';
// $ npm install react-slick --save // 라이브러리 설치
// $ npm install slick-carousel --save // css 설치
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../component/Header';
import ListGridItem from '../component/ListGridItem';
import ComboBox from '../component/ComboBox';


function Page1() {
    // hero slide
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return <>
        <Header 
            // login='login'
            page1={'ac'}
        />

        <div className='hero'>
            <div className='inner'>
                <Slider {...settings}>
                    <div className='item'>
                    메인배너1
                    </div>
                    <div className='item'>
                    메인배너2
                    </div>
                </Slider>
            </div>
        </div>

        <div className='game-cate'>
            <div class="inner">
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_league.png'/>
                    <div className='name'>리그오브레전드</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_valorant.png'/>
                    <div className='name'>발로란트</div>
                </div>
                <div className='item ac'>
                    <img className='symbol' alt='symbol' src='/img/game_eternal.png'/>
                    <div className='name'>이터널리턴</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_battlegrounds.png'/>
                    <div className='name'>배틀그라운드</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_battlegrounds_m.png'/>
                    <div className='name'>배틀그라운드 M</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_sudden_attack.png'/>
                    <div className='name'>서든어택</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_starcraft.png'/>
                    <div className='name'>스타크래프트</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_overwatch2.png'/>
                    <div className='name'>오버워치2</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_kartrider.png'/>
                    <div className='name'>카트라이더</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_kartrider_rush.png'/>
                    <div className='name'>카트라이더 <br/>러쉬 플러스</div>
                </div>
                <div className='item'>
                    <img className='symbol' alt='symbol' src='/img/game_fifa4.png'/>
                    <div className='name'>카트라이더 <br/>FC온라인</div>
                </div>
                <div className='item'>
                    <div className='name'>기타</div>
                </div>
            </div>
        </div>


        <div className='cal-control'>
            <div className='inner'>
                <div className='month'>
                    <select name="" id="">
                        <option>1월</option>
                        <option>2월</option>
                        <option>3월</option>
                        <option>4월</option>
                        <option>5월</option>
                        <option>6월</option>
                        <option>7월</option>
                        <option>8월</option>
                        <option>9월</option>
                        <option>10월</option>
                        <option>11월</option>
                        <option>12월</option>
                    </select></div>
                <div className='dailyControlWrap'>
                    <button className='prev'></button>
                    <div className='dailyControl'>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn ac'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                        <div className='dateBtn'>
                            <div className='day'>월</div>
                            <div className='date'>25</div>
                        </div>
                    </div>
                    <button className='next'></button>
                </div>
            </div>
        </div>
        
        <div className='filter'>
            <div className='inner'>
                <div className="selectWrap">
                    <ComboBox
                        value={'현재 상태'}
                        option={
                            <>
                                <option>현재 상태</option>
                                <option>현재 상태</option>
                            </>
                        }
                    />
                </div>
            </div>
        </div>

        <div className='scrimList'>
            <div className='inner'>
                <div className='clear-both'>
                    <button className='insert_scrim float-right'>스크림 등록하기</button>
                </div>
                <div className='listGrid'>
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem 
                        state = 'play'
                    />
                    <ListGridItem />
                    <ListGridItem 
                        state = 'complate'
                    />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                    <ListGridItem />
                </div>
            </div>
        </div>
    </>
}

export default Page1;