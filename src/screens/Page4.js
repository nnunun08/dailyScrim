import React from 'react';
import Header from '../component/Header';
import Value from '../component/Value';
import Checkbox from '../component/Checkbox'

function Page4() {
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

            <div className='grid noShadow'>
                <div className="inner">
                    <table>
                        <colgroup>
                            <col width={'10%'}></col>
                            <col width={'20%'}></col>
                            <col width={'10%'}></col>
                        </colgroup>
                        <tr>
                            <th className='grid-item'>작성자</th>
                            <th className='grid-item'>주요 요청 사항</th>
                            <th className='grid-item'>매칭 포인트</th>
                        </tr>
                        <tr>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>탑 위주로 봐주세요</td>
                            <td className='grid-item'><Value color='#000'/></td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='chatWrap'>
                <div className='inner'>
                    <div className='msgView'>

                        <div className='receiver'>
                            <div className='profile'></div>
                            <div className='msgWrap'>
                                <div>
                                    <div className='name'>상대 팀</div>
                                    <div className='msg'>요청사항 요청사항</div>
                                </div>
                                <div className='msgtime'>hh:mm </div>
                            </div>
                        </div>

                        <div className='sender'>
                            <div className='msgWrap'> 
                                <div className='msgtime'>hh:mm </div>
                                <div className='msg'>답변답변답변 답변</div>
                            </div>
                        </div>

                        <div className='sender'>
                            <div className='msgWrap'> 
                                <div className='msgtime'>hh:mm </div>
                                <div className='msg'>답변답변답변 답변</div>
                            </div>
                        </div>

                    </div>
                    <label className='mesgInsert'>
                        <input className='insert' type='text' placeholder='메시지를 입력해 주세요' />
                        <button className='send'>send</button>
                    </label>
                </div>
            </div>

            <div className='center100'>
                <button className='blackBtn-md'>스크림 완료</button>
                <button className='borderBtn-md'>이의제기</button>
            </div>
        </div>

        <div className='confirm'>
            <h5>스크림 완료</h5>
            <p>스크림이 정상적으로 완료되면 확인 버튼을 클릭해주세요.</p>
            <p className='red'>*확인 버튼 클릭 시 스크림 팀에 포인트가 지급됩니다</p>
            <div className='bottom'>
                <button className='blackBtn'>확인</button>
                <button className='borderBtn'>취소</button>
            </div>
        </div>

        <div className='confirm prompt'>
            <h5>스크림 진행에 문제가 있었나요?</h5>
            <p className='small'>이의제기 사유를 적고 확인버튼을 클릭하면 <br/>
            이의제기 신청이 완료됩니다</p>
            <input type='text' />
            <div className='bottom'>
                <button className='blackBtn'>확인</button>
                <button className='borderBtn'>취소</button>
            </div>
        </div>

    </>
}
export default Page4;