import React from 'react';
import Header from '../component/Header';
import Checkbox from '../component/Checkbox';

function Page6() {

    return <>
        <Header />

        <div className='game-board'>
            <div className='inner'>
                <h2>팀원 모집</h2>
                <div className='board'>
                    <h3 className='tit'>제목제목제목제목제목제목</h3>
                    <div className='info'>
                        <div className='flex-v'>
                            <div className='game'>게임명</div>
                            <div className='nickname'>닉네임닉네임</div>
                            <div className='date'>6시간 전</div>
                        </div>
                        <div className='flex-v'>
                            <div className='ic-chat'>11</div>
                            <div className='ic-view'>222</div>
                        </div>
                    </div>
                    <p className='contents'>
                        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용내용내용내용내용내용내용내용내・・・
                    </p>
                </div>

                <div className='comment'>
                    <div className='comment-list'>
                        <div className='comment-item'>
                            <div className='flex-v'>
                                <div className='nickname'>닉네임닉네임</div>
                                <button className='post'>쪽지 보내기</button>
                                <div className='dot'></div>
                                <div className='date'>6시간 전</div>
                            </div>
                            <p className='para'>내용내용내용내용내용내용내용</p>
                            <div className='flex-v'>
                                <button className='reply'>답글쓰기</button>
                            </div>
                        </div>
                        <div className='comment-item'>
                            <div className='flex-v'>
                                <div className='nickname'>닉네임닉네임</div>
                                <button className='post'>쪽지 보내기</button>
                                <div className='dot'></div>
                                <div className='date'>6시간 전</div>
                            </div>
                            <p className='para'>내용내용내용내용내용내용내용</p>
                            <div className='flex-v'>
                                <button className='reply'>답글쓰기</button>
                            </div>
                        </div>
                        <div className='comment-item'>
                            <div className='flex-v'>
                                <div className='nickname'>접속 유저</div>
                                <button className='post'>쪽지 보내기</button>
                                <div className='dot'></div>
                                <div className='date'>6시간 전</div>
                            </div>
                            <p className='para'>내용내용내용내용내용내용내용</p>
                            <div className='flex-v'>
                                <button className='reply'>답글쓰기</button>
                                <button className='del'>삭제</button>
                            </div>
                        </div>
                    </div>

                    <label className='msgField'>
                        <input className='insertMsg' type="text" placeholder='댓글을 입력해주세요'/>
                        <button className='postComment'>댓글 등록</button>
                    </label>
                </div>
            </div>
        </div>

        {/* 스크림 신청 모달 팝업 */}
        <div className='enterScrim modal'>
            <div className='modalSign'></div>
            <div className="modalBody">
                <div className='top'>
                    <label>닉네임:</label>
                    <input type='text' placeholder='' value={'닉네임닉네임'}/>
                </div>
                <textarea placeholder='쪽지내용'></textarea>
                <button class="blackBtn">쪽지 보내기</button>
            </div>
        </div>

    </>
}
export default Page6;