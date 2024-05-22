import React from 'react';
import Header from '../component/Header';
import Value from '../component/Value';
import Checkbox from '../component/Checkbox'

function Page2() {
    return <>
        <Header
            page1={'ac'}
        />

        <div className='sub2Wrap'>
            <div className='inner'>
                <div className="flex-v sectionTit">
                    <h2>스크림 신청</h2>
                    <button className='urlCopy'>URL 복사</button>
                </div>
                <div className='cardWrap'>
                    <div className='card'>
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

                <button className='redkBtn'>스크림 신청하기</button>
            </div>
        </div>

        {/* 스크림 신청 모달 팝업 */}
        <div className='enterScrim modal'>
            <div className='modalSign'></div>
            <div className="modalBody">
                <div className='top'>
                    <label>제시포인트:</label>
                    <input type='text' placeholder='20,000'/>
                </div>
                <label>요청 사항</label>
                <textarea placeholder='스크림 시 요청사항을 적어주세요.' />
                <p>주의사항1</p>
                <p>주의사항2</p>
                <p>주의사항3</p>
                <Checkbox label={'스크림 신청 주의사항을 확인했습니다'} />
                <button class="blackBtn">스크림 신청</button>
            </div>
        </div>

        <div className='modal alert'>
            <div className='modalSign'></div>
            <div className="modalBody">
                신청이 완료되었습니다.
                <button class="blackBtn">확인</button>
            </div>
        </div>

        <div className='modal alert'>
            <div className='modalSign'></div>
            <div className="modalBody">
                URL이 복사되었습니다
                <button class="blackBtn">확인</button>
            </div>
        </div>

    </>
}
export default Page2;