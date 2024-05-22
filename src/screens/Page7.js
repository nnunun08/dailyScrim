import React from 'react';
import Header from '../component/Header';
import Checkbox from '../component/Checkbox';

function Page7() {

    return <>
        <Header />

        <div className='team-regist'>
            <div className='inner'>
                <h2>팀원 모집 등록</h2>

                <div className='tray'>
                    <table>
                        <tr>
                            <th>
                            게임명:
                            </th>
                            <td>
                            게임명
                            </td>
                        </tr>
                        <tr>
                            <th>
                            제목: 
                            </th>
                            <td>
                                <input type='text' value={'제목'} />
                            </td>
                        </tr>
                    </table>
                    <div>
                        <textarea placeholder='팀원 모집 내용을 적어주세요.'></textarea>
                        <div className='textlimit'>{`0/1000`}</div>
                    </div>
                </div>

                <div className='bottom'>
                    <button className='redBtn-md'>등록</button>
                </div>

            </div>
        </div>

        {/* 완료 팝업 */}
        <div className='modal alert'>
            <div className='modalSign'></div>
            <div className="modalBody">
                등록이 완료되었습니다.
                <button class="blackBtn">확인</button>
            </div>
        </div>

    </>
}
export default Page7;