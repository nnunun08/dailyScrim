import React from 'react';
import Header from '../component/Header';
import Checkbox from '../component/Checkbox';



function Page13() {
    const style = {
        display:'block'
    }
    return <>
        <Header />
        <div className='inquery'>
            <div className='inner'>
                <div className='tab'>
                    <button className='tabItem'>문의내역</button>
                    <button className='tabItem ac'>문의하기</button>
                </div>
                <div className='tabContents'>

                </div>
                <div className='tabContents ac'>

                    <div className='accodion'>
                        <h5>문의 유형</h5>
                        {/* <button className='trigger'>일반문의</button> */}
                        <select className='blackSelect'>
                            <option>일반문의</option>
                            <option>일반문의2</option>
                            <option>일반문의3</option>
                        </select>
                        <div className='contents' style={style}>
                            <h5>문의 내용</h5>
                            <div className='descWrap'>
                                <p className='desc'>안녕하세요! 즐겜러입니다. 프로정도의 실력은 되지 않습니다. 평일에 퇴근하고 3시간정도 플레이 합니다. 정글을 주로 하지만 탑이나 미드도 가능합니다. 재미있는 플레이를 하고 싶어요. 함께 즐겜합시당</p>
                            </div>
                            <h5>첨부이미지</h5>
                            <em className='blueText'>최대 20MB 이하의 이미지가 첨부 가능합니다.</em>
                            <div className='imgList'>
                                <div className='item'>
                                    <img src='/img/img_attatch_01.png' />
                                    <button className='del'>X</button>
                                </div>
                                <input type='file' className='add' />
                            </div>
                        </div>
                    </div>

                    <div className='btnWrap'><button className='goldBtn'>문의하기</button></div>
                </div>
            </div>
        </div>
        
    </>
}
export default Page13;