import React from 'react';
import Header from '../component/Header';
import Value from '../component/Value';
import Checkbox from '../component/Checkbox'

function Page3() {
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
                        <div className='brandBx'>
                            <div className='imgWrap'>
                                <img src='/img/brand_iksan.png' alt='brand' />
                            </div>
                            닉네임
                        </div>
                        <div>
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
                    </div>
                    <div className='card timeCard'>
                        <h2 className='startTime'>시작 시간</h2>
                        <div className="time">2024.03.03 18:00</div>
                        <Value color='#000' />
                    </div>
                </div>

                
            </div>
        </div>

        {/* 최종확인 모달 */}
        <div className='enterScrim modal'>
            <div className='modalSign'></div>
            <div className="modalBody">
                <div className='caution'>
                    <p>주의사항1</p>
                    <p>주의사항2</p>
                    <p>주의사항3</p>
                </div>
                <Checkbox label={'스크림 신청 주의사항을 확인했습니다'} />
                <button class="blackBtn">스크림 수락하기</button>
            </div>
        </div>

        {/* 완료 팝업 */}
        <div className='modal alert'>
            <div className='modalSign'></div>
            <div className="modalBody">
                스크림 매칭이 완료되었습니다.
                <button class="blackBtn">확인</button>
            </div>
        </div>

    </>
}
export default Page3;