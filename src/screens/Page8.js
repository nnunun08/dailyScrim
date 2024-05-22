import React from 'react';
import Header from '../component/Header';
import Paging from '../component/Paging';


function Page8() {

    const gridTop = {
        marginTop : '40px'
    }
    return <>
        <Header page3={'ac'} />

        <div className='sub3Wrap'>
            <div className='inner'>
                <h2>랭킹</h2>

                <div className='grid' style={gridTop}>
                    <table>
                        <colgroup>
                            <col width={'10%'}></col>
                            <col width={'10%'}></col>
                            <col width={'20%'}></col>
                            <col width={'10%'}></col>
                            <col width={'20%'}></col>
                            <col width={'10%'}></col>
                        </colgroup>
                        <tr>
                            <th className='grid-item'></th>
                            <th className='grid-item'>순위</th>
                            <th className='grid-item'>닉네임</th>
                            <th className='grid-item'>매치수</th>
                            <th className='grid-item'>한 마디 소개</th>
                            <th className='grid-item'>V포인트</th>
                        </tr>
                        <tr>
                            <td className='grid-item'><span className='stay'>-</span></td>
                            <td className='grid-item'>1</td>
                            <td className='grid-item'><div className='nickName'><img className='thumb' src='/img/img_nickProfile.png' alt='nickProfile'/><span>닉네임</span></div></td>
                            <td className='grid-item'>10</td>
                            <td className='grid-item'>이스포츠코리아에서 활동합니다</td>
                            <td className='grid-item'>20,000</td>
                        </tr>
                        <tr>
                            <td className='grid-item'><span className='up'>1</span></td>
                            <td className='grid-item'>2</td>
                            <td className='grid-item'><div className='nickName'><img className='thumb' src='/img/img_nickProfile.png' alt='nickProfile'/><span>닉네임</span></div></td>
                            <td className='grid-item'>9</td>
                            <td className='grid-item'>이스포츠코리아에서 활동합니다</td>
                            <td className='grid-item'>20,000</td>
                        </tr>
                        <tr>
                            <td className='grid-item'><span className='down'>1</span></td>
                            <td className='grid-item'>15</td>
                            <td className='grid-item'><div className='nickName'><img className='thumb' src='/img/img_nickProfile.png' alt='nickProfile'/><span>닉네임</span></div></td>
                            <td className='grid-item'>10</td>
                            <td className='grid-item'>이스포츠코리아에서 활동합니다</td>
                            <td className='grid-item'>20,000</td>
                        </tr>
                        <tr>
                            <td className='grid-item'><span className='up'>8</span></td>
                            <td className='grid-item'>3</td>
                            <td className='grid-item'><div className='nickName'><img className='thumb' src='/img/img_nickProfile.png' alt='nickProfile'/><span>닉네임</span></div></td>
                            <td className='grid-item'>11</td>
                            <td className='grid-item'>이스포츠코리아에서 활동합니다</td>
                            <td className='grid-item'>20,000</td>
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
export default Page8;