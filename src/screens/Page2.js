import React from 'react';
import Header from '../component/Header';
import Value from '../component/Value';

function Page2() {
    return <>
        <Header />

        <div className='sub2Wrap'>
            <div className='inner'>
                <div className="flex-v sectionTit">
                    <h2>스크림 신청</h2>
                    <button className='urlCopy'>URL 복사</button>
                </div>
                <div className='cardWrap'>
                    <div className='card'>
                        <h2>제목</h2>
                        <p className='para'>
                        Team Name : KT Rolster CL<br/>
                        •Tournament draft, 3games<br/>
                        • Server : TR<br/>
                        • Date/Starting Time : KST<br/>
                        • 코칭비 : 20,000vp<br/>
                        • 진행하면서 전략 꿀팁 알려드립니다
                        </p>
                    </div>
                    <div className='card timeCard'>
                        <h2 className='startTime'>시작 시간</h2>
                        <div className="time">2024.03.03 18:00</div>
                        <Value color='#000' />
                    </div>
                </div>

                <button className='blackBtn'>스크림 신청하기</button>
            </div>
        </div>
    </>
}
export default Page2;