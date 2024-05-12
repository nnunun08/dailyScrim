import React from 'react';
import Header from '../component/Header';
import Checkbox from '../component/Checkbox';



function Page11() {

    const h1 = {
        marginBottom : '49px',
    }
    const h3 = {
        marginBottom : '18px'
    }
    return <>
        <Header />


        <div className='sub4Wrap'>
            <div className='inner'>
                <h1 style={h1}>회원가입</h1>
                <div className='tray'>
                    <h3 style={h3}>기본 정보 입력</h3>
                    <div className='inputWrap'>
                        <label className='inputLabel'>
                            이메일
                            <input type='email' placeholder='이메일을 입력해주세요'/>
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
                        <label className='inputLabel'>
                            닉네임
                            <input type='text' placeholder='닉네임을 입력해주세요'/>
                        </label>
                    </div>
                </div>
                
                <div className='checkWrap'>
                    <label className='checkList'>
                        <Checkbox label='[필수] 서비스 이용약관 동의'/>
                        <i>arrowIcon</i>
                    </label>
                </div>

                <div className='bottom'>
                    <button className='blackBtn'>회원가입</button>
                </div>
            </div>
        </div>

        {/* 완료 팝업 */}
        <div className='modal alert round'>
            <div className='modalSign'></div>
            <div className="modalBody">
                회원가입이 완료되었습니다
                <button class="blackBtn">확인</button>
            </div>
        </div>

        

        
    </>
}
export default Page11;