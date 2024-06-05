import React from 'react';
import Header from '../component/Header';
import Paging from '../component/Paging';

function Page5() {

    const gridTop = {
        marginTop : '30px'
    }
    const btnPosition = {
        marginRight : `60px`
    }
    return <>
        <Header
            page2={'ac'}
        />

        <div className='sub3Wrap'>
            <div className='inner'>
                <h2>팀원 모집</h2>

                <div className='game-cate'>
                    <div class="inner">
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_league.png'/>
                            <div className='name'>리그오브레전드</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_valorant.png'/>
                            <div className='name'>발로란트</div>
                        </div>
                        <div className='item ac'>
                            <img className='symbol' alt='symbol' src='/img/game_eternal.png'/>
                            <div className='name'>이터널리턴</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_battlegrounds.png'/>
                            <div className='name'>배틀그라운드</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_battlegrounds_m.png'/>
                            <div className='name'>배틀그라운드 M</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_sudden_attack.png'/>
                            <div className='name'>서든어택</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_starcraft.png'/>
                            <div className='name'>스타크래프트</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_overwatch2.png'/>
                            <div className='name'>오버워치2</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_kartrider.png'/>
                            <div className='name'>카트라이더</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_kartrider_rush.png'/>
                            <div className='name'>카트라이더 <br/>러쉬 플러스</div>
                        </div>
                        <div className='item'>
                            <img className='symbol' alt='symbol' src='/img/game_fifa4.png'/>
                            <div className='name'>카트라이더 <br/>FC온라인</div>
                        </div>
                        <div className='item'>
                            <div className='name'>기타</div>
                        </div>
                    </div>
                </div>


                <div class="clear-both">
                    <button class="insert_scrim float-right noIcon" style={btnPosition}>팀원 모집 글쓰기</button>
                </div>

                <div className='grid' style={gridTop}>
                    <table>
                        <colgroup>
                            <col width={'10%'}></col>
                            <col width={'20%'}></col>
                            <col width={'10%'}></col>
                            <col width={'10%'}></col>
                            <col width={'10%'}></col>
                        </colgroup>
                        <tr>
                            <th className='grid-item'>번호</th>
                            <th className='grid-item'>제목</th>
                            <th className='grid-item'>작성자</th>
                            <th className='grid-item'>등록일자</th>
                            <th className='grid-item'>상세보기</th>
                        </tr>
                        <tr>
                            <td className='grid-item'>20</td>
                            <td className='grid-item'>123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>19</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>18</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>17</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>16</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>16</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>15</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>14</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>13</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>12</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>11</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>10</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>9</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>8</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                        <tr>
                            <td className='grid-item'>7</td>
                            <td className='grid-item'>이스포츠코리아에서 탑을 구합니다</td>
                            <td className='grid-item'>닉네임</td>
                            <td className='grid-item'>YY.MM.DD hh:mm</td>
                            <td className='grid-item'><button className='borderBtn-sm'>상세보기</button></td>
                        </tr>
                    </table>

                    <div className='grid-bottom'>
                        <Paging />
                    </div>
                </div>

            </div>
        </div>

        

    </>
}
export default Page5;