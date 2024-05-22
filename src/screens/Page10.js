import React from 'react';
import Header from '../component/Header';


function Page10() {

    return <>
        <Header />


        <div className='sub4Wrap'>
            <div className='inner'>
                <h2>회원정보 수정</h2>
                <div className='tray'>
                    <div className='inputWrap'>
                        <label className='inputLabel'>
                            닉네임
                            <input type='text' placeholder='닉네임을 입력해주세요'/>
                        </label>
                        <label className='inputLabel'>
                            비밀번호
                            <input type='password' placeholder='비밀번호를 입력해주세요' />
                        </label>
                        <label className='inputLabel'>
                            비밀번호 확인
                            <input className='alert' type='password' placeholder='비밀번호를 입력해주세요' value={'1234'} />
                            <div className='alertMsg'>{`비밀번호를 확인해주세요`}</div>
                        </label>
                    </div>

                    <h3>소개 한 마디</h3>

                    <textarea></textarea>

                    <button className='redBtn'>수정 완료</button>
                </div>

                <div className='bottom'>
                    <button className='borderBtn'>회원 탈퇴</button>
                </div>
            </div>
        </div>


        <div className='modal type3'> 
            <div className='modalHead noBorder'>
            회원 탈퇴
            </div>
            <div className="modalBody">
                <select>
                    <option>회원탈퇴 사유</option>
                </select>

                <div className='guide'>회원탈퇴 희망 시 “탈퇴에 동의합니다”를 적어주세요.</div>
                <input type='text' placeholder='탈퇴에 동의합니다.' />
                <p className='alert'>
                    회원 탈퇴 시 3개월 간 재가입이 불가능하며 모든 기록이 삭제됩니다.<br /> 
                    그럼에도 탈퇴를 원하시면 회원탈퇴하기를 클릭해주세요.
                </p>
                <button className='blackBtn'>회원탈퇴하기</button>
            </div>
        </div>

        <div className='modal type2'> 
            <div className='modalHead'>
            수정 완료
            </div>
            <div className="modalBody">
                수정 정보가 정상 적용되었습니다
                <button class="blackBtn">확인</button>
            </div>
        </div>

        <div className='modal type2'> 
            <div className='modalHead'>
            회원 탈퇴 완료
            </div>
            <div className="modalBody">
                회원탈퇴가 완료되었습니다
                <button class="blackBtn">확인</button>
            </div>
        </div>

        

        
    </>
}
export default Page10;