import React from 'react';
import Header from '../component/Header';
import Value from '../component/Value';
import Checkbox from '../component/Checkbox'
import Paging from '../component/Paging';

function Page9() {
    return <>
        <Header />

        <div className='sub2Wrap'>
            <div className='inner'>
                <div className='mtInfoWrap'>
                    <div className="flex-v sectionTit">
                        <h2>내 정보</h2>
                    </div>
                    <div className='cardWrap'>
                        <div className='card infoCard'>
                            <div className='brandBx'>
                                <div className='imgWrap'>
                                    <img src='/img/brand_iksan.png' alt='brand' />
                                </div>
                            </div>
                            <div>
                                <table className='myInfo'>
                                    <tr><th>ID</th><td>이메일 ID</td></tr>
                                    <tr><th>닉네임</th><td>닉네임</td></tr>
                                    <tr><th>소개 한 마디</th><td>자기 소개 멘트</td></tr>
                                </table>
                            </div>
                        </div>
                        <div className='card pointCard'>
                            <h2 className='myPoint'>내 보유 포인트</h2>
                            <Value color='#000' />
                            <div className='buttonWrap'>
                                <button>환전</button>
                                <button>충전</button>
                                <button>보내기</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='friendsWrap'>
                    <div className="flex-v sectionTit">
                        <h2>친구정보</h2>
                    </div>
                    <div className='grid'>
                        <div className="inner">
                            <table>
                                <colgroup>
                                    <col width={'40%'}></col>
                                    <col width={'25%'}></col>
                                    <col width={'20%'}></col>
                                    <col width={'20%'}></col>
                                    <col width={'20%'}></col>
                                </colgroup>
                                <tr>
                                    <th className='grid-item'>닉네임</th>
                                    <th className='grid-item'>소개 한 마디</th>
                                    <th className='grid-item'>최근 접속 일자</th>
                                    <th className='grid-item'></th>
                                    <th className='grid-item'></th>
                                </tr>
                                <tr>
                                    <td className='grid-item'>이스포츠코리아</td>
                                    <td className='grid-item'>자기 소개 멘트</td>
                                    <td className='grid-item'>YY.MM.DD hh:mm</td>
                                    <td className='grid-item'><button className='redBtn-sm'>쪽지 보내기</button></td>
                                    <td className='grid-item'><button className='borderBtn-sm'>삭제</button></td>
                                </tr>
                                <tr>
                                    <td className='grid-item'>이스포츠코리아</td>
                                    <td className='grid-item'>자기 소개 멘트</td>
                                    <td className='grid-item'>YY.MM.DD hh:mm</td>
                                    <td className='grid-item'><button className='redBtn-sm'>쪽지 보내기</button></td>
                                    <td className='grid-item'><button className='borderBtn-sm'>삭제</button></td>
                                </tr>
                                <tr>
                                    <td className='grid-item'>이스포츠코리아</td>
                                    <td className='grid-item'>자기 소개 멘트</td>
                                    <td className='grid-item'>YY.MM.DD hh:mm</td>
                                    <td className='grid-item'><button className='redBtn-sm'>쪽지 보내기</button></td>
                                    <td className='grid-item'><button className='borderBtn-sm'>삭제</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='btnWrap'><button className='redBtn-md'>친구 관리</button></div>
                </div>

                <div className='planWrap'>
                    <div className="flex-v sectionTit">
                        <h2>일정</h2>
                        <select className='select'>
                            <option>매칭 여부</option>
                        </select>
                    </div>
                    <div className='grid'>
                        <div className="inner">
                            <table>
                                <colgroup>
                                    <col width={'20%'}></col>
                                    <col width={'25%'}></col>
                                    <col width={'15%'}></col>
                                    <col width={'10%'}></col>
                                    <col width={'20%'}></col>
                                    <col width={'10%'}></col>
                                </colgroup>
                                <tr>
                                    <th className='grid-item'>게임명</th>
                                    <th className='grid-item'>상대 닉네임</th>
                                    <th className='grid-item'>진행 시간</th>
                                    <th className='grid-item'>매칭 여부</th>
                                    <th className='grid-item'><Value color='#000' value='포인트' /></th>
                                    <th className='grid-item'></th>
                                </tr>
                                <tr>
                                    <td className='grid-item'>배틀그라운드</td>
                                    <td className='grid-item'>이스포츠코리아</td>
                                    <td className='grid-item'>24.03.01 20:00</td>
                                    <td className='grid-item'>스크림 완료</td>
                                    <td className='grid-item'>-10,000</td>
                                    <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                                </tr>
                                <tr>
                                    <td className='grid-item'>오버워치2</td>
                                    <td className='grid-item'>이스포츠코리아</td>
                                    <td className='grid-item'>24.03.02 18:00</td>
                                    <td className='grid-item'>매칭 완료</td>
                                    <td className='grid-item'>+20,000</td>
                                    <td className='grid-item'><button className='borderBtn-sm'>상세보기<i className='new'></i></button></td>
                                </tr>
                                <tr>
                                    <td className='grid-item'>리그오브레전드</td>
                                    <td className='grid-item'></td>
                                    <td className='grid-item'>24.03.03 21:00</td>
                                    <td className='grid-item'>스크림 완료</td>
                                    <td className='grid-item'>-</td>
                                    <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>



            </div>
        </div>

        <div className='modal point round'> 
            <h3 className='title'>V 포인트 충전</h3>
            <div className="modalBody charge">
                <button class="blackBtn-md">카카오페이로 충전</button>
                <button class="blackBtn-md">카카오페이로 충전</button>
            </div>
        </div>


        <div className='modal point round'> 
            <h3 className='title'>V 포인트 환전</h3>
            <div className="modalBody pointBody">
                <div className='pointTop'>
                    <div className='item'>
                        보유 포인트:
                        <Value color='#000' value='20000' />
                    </div>
                    <div className='item'>
                        환전 포인트: 
                        <input type='text' placeholder='숫자만 입력' />
                    </div>
                </div>
                <div className='pointMiddle'>
                    <select className='select'>
                        <option>은행</option>
                    </select>
                    <input type='text' placeholder='계좌번호' />
                </div>

                <button class="blackBtn-md">환전 신청하기</button>
                <div className='guide'>환전 신청 후 5분 이내에 환전이 완료됩니다</div>
            </div>
        </div>

        <div className='modal point round'> 
            <h3 className='title'>V 포인트 보내기</h3>
            <div className="modalBody pointBody">
                <div className='pointTop'>
                    <div className='item'>
                        보유 포인트:
                        <Value color='#000' value='20000' />
                    </div>
                    <div className='item'>
                        환전 포인트: 
                        <input type='text' placeholder='숫자만 입력' />
                    </div>
                </div>
                <div className='pointMiddle'>
                    <input type='text' placeholder='상대방 닉네임' />
                </div>

                <button class="blackBtn-md">포인트 보내기</button>
            </div>
        </div>


        {/* 스크림 신청 모달 팝업 */}
        <div className='enterScrim modal'>
            <div className='modalSign'></div>
            <div className="modalBody">
                <div className='top'>
                    <label>닉네임:</label>
                    <input type='text' placeholder=''/>
                </div>
                <textarea placeholder='쪽지내용' />
                <button class="blackBtn">쪽지 보내기</button>
            </div>
        </div>

        <div className='modal round friend'> 
            <h3 className='title'>친구 요청 내역</h3>
            <div className="modalBody">
                
                <table>
                    <tr>
                        <td>이스포츠</td>
                        <td>자기 소개 멘트</td>
                        <td><button className='blueBtn-sm'>수락</button></td>
                        <td><button className='borderBtn-sm'>거절</button></td>
                    </tr>
                    <tr>
                        <td>이스포츠</td>
                        <td>자기 소개 멘트</td>
                        <td><button className='blueBtn-sm'>수락</button></td>
                        <td><button className='borderBtn-sm'>거절</button></td>
                    </tr>
                    <tr>
                        <td>이스포츠</td>
                        <td>자기 소개 멘트</td>
                        <td><button className='blueBtn-sm'>수락</button></td>
                        <td><button className='borderBtn-sm'>거절</button></td>
                    </tr>
                    <tr>
                        <td>이스포츠</td>
                        <td>자기 소개 멘트</td>
                        <td><button className='blueBtn-sm'>수락</button></td>
                        <td><button className='borderBtn-sm'>거절</button></td>
                    </tr>
                </table>

                <button class="blackBtn-md">친구 추가</button>
            </div>
        </div>

        {/* 스크림 신청 모달 팝업 */}
        <div className='enterScrim modal round addFriend'>
            <div className='modalSign'>친구 추가</div>
            <div className="modalBody">
                <div className='top'>
                    <label>닉네임:</label>
                    <input type='text' placeholder='‘vss.gg 닉네임'/>
                </div>
                <div className='top'>
                    <label>친구요청 메세지:</label>
                    <input type='text' placeholder='친구 요청 메세지'/>
                </div>
                <button class="blackBtn-md">친구 추가 요청</button>
            </div>
        </div>

        {/* 완료 팝업 */}
        <div className='modal alert round'>
            <div className='modalSign'></div>
            <div className="modalBody">
                친구 추가 요청이 전송되었습니다
                <button class="blackBtn">확인</button>
            </div>
        </div>

    </>
}
export default Page9;