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

        {/* 약관 팝업 */}
        <div className='modal type3'> 
            <div className='modalHead noBorder'>
            서비스 이용약관
            </div>
            <div className="modalBody">
                <div className='tit'>DAILYSCRIM 이용약관</div>
                <p className='desc'>
                시행일: 2022년2월 14일<br/>
                서비스 이용약관 및 개인정보처리방침을 자세히 읽어주시기 바랍니다.<br/>
                본 이용약관(이하 "약관")은 COGNOSPHERE PTE. LTD.(이하 "COGNOSPHERE", "저희", "회사")와 이용자 간의 법적 구속력을 갖는 규약입니다. 본 약관은 게스트와 등록된 이용자 모두에게 적용되며, 회사가 제공하는 COGNOSPHERE 게임 및 웹사이트, 특정 게임 사이트, 고객 지원센터, 소셜 미디어, 커뮤니티 및/또는 COGNOSPHERE, COGNOSPHERE에 의해 승인된 제3자가 제공하는 기타 온라인 서비스(통칭 "COGNOSPHERE 서비스")에서의 행위를 제약합니다.
                본 약관의 제 12조를 주의 깊게 읽어보시기 바랍니다.<br/>
                부모 및 법정대리인 주의사항: 미성년자가 동의 없이 서비스를 이용하지 못하도록 관리 및 감독해 주시기 바랍니다. 자녀가 개인정보를 제공하지 않도록 해주시고 서비스를 안전하게 사용할 수 있도록 관리 감독해 주시기 바랍니다.<br/>
                ‘COGNOSPHERE 게임(이하 "게임")’이란 COGNOSPHERE가 출시, 출시 예정, 테스트 중인 모든 게임을 의미합니다.<br/>
                게임엔 회사가 본 약관에 따라 제공하는 것 외에도 게임 소프트웨어(게임 전체 소프트웨어 및 관련 콘텐츠, 부품, 요소, 기능 등 포함), 응용 프로그램 패치 및 업데이트 파일, 관련 콘텐츠, 문서, 첨부파일, 게임 관련 서비스, 해당 내용의 사본 등을 포함합니다.<br/>
                주의사항: 게임 소프트웨어에는 부정행위 감시 기능 및 소프트웨어를 포함할 수 있습니다. "부정행위 감시"란 부정행위를 식별하는 기능입니다. "부정행위"란 이용자가 게임 중 불공정한 이득을 취하게 할 수 있는 모든 형식의 소프트웨어 또는 하드웨어를 갖춘 프로그램, 방법, 프로세스 또는 비인가 프로그램을 사용하는 것을 의미합니다. 부정행위 감시 소프트웨어 설치에 동의하지 않으시거나 해당 기능을 제거 및 비활성화할 경우 본 약관에 따라 승인이 자동 중지되며 COGNOSPHERE 서비스 이용이 즉시 종료됩니다.<br/>
                주의사항: 부정행위 감시 소프트웨어가 포함된 게임은 개인정보처리방침에 따라 이용자의 계정, 게임 플레이, 비인가 프로그램 및 프로세스 사용 여부를 수집합니다. 부정행위 적발 시 본 약관에 따라 회사는 일부 또는 모든 권리를 행사할 수 있으며 설치, 복사, 실행 혹은 기타 방식으로 게임을 이용할 경우 약관의 규약에 동의한 것으로 간주합니다.<br/>
                가입, 계정 신청, 회사 소프트웨어 다운로드, 게임 실행(업데이트, 패치 다운로드 등 포함), 사이트 열람, 온라인 이용, 유지관리 서비스 등의 모든 COGNOSPHERE 서비스 이용 시 약관의 모든 조항을 읽고 동의한 것으로 간주합니다.<br/>
                COGNOSPHERE는 약관을 개정, 변경할 수 있는 권한을 지니며, 이용자는 정기적으로 약관의 새로운 조항을 확인합니다. 주의사항: 지속적인 COGNOSPHERE 서비스 이용은 변경된 약관 조항에 동의한 것으로 간주합니다.<br/>
                본 약관에 동의하지 않을 경우 COGNOSPHERE 서비스 이용을 중단하시기 바랍니다.<br/>
                제 1조 HoYoverse 계정<br/>
                1. COGNOSPHERE 서비스 이용을 위해 이용자는 HoYoverse 계정("계정")을 가입 혹은 소유해야 할 수 있습니다.
                계정 생성을 위해 이용자로 등록해야 하며 HoYoverse 계정 서비스 약관에 동의해야 합니다. 해당 조항에 동의하지 않을 경우 계정을 생성할 수 없습니다.
                2. 거주국가의 법적 성인, 그리고 COGNOSPHERE 서비스의 이용 금지가 내려지지 않은 신청인의 경우에만 계정을 생성할 수 있습니다.
                </p>
                <button className='blackBtn'>확인</button>
            </div>
        </div>

        

        
    </>
}
export default Page11;