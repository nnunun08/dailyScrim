import React from 'react';
import Value from './Value';

function ListGridItem({state='',}) {
    return <>

        <div className={`item ${state}`}>
            <div className='info'>
                <div className='flex-v top'>
                    <div className='rel thumb'>
                        <div className='profile'>
                            <img src='/img/img_esports_kr.png' alt='profile'/>
                        </div>
                        <div className='national'>
                            <img src='/img/ic_korea.png' alt='national'/>
                        </div>
                    </div>
                    <div className='nickname'>닉네임</div>
                </div>
                <div className='state'>
                    대기중
                </div>
                <div className='mid'>
                    <div className='tit'>스크림 제목스크림 제목스크림 제목스크림 제목스크림 제목스크림 제목스크림 제목스크림 제목스크림 제목</div>
                    <div className='count flex-v'>
                        <span className='ic'></span>
                        <span className='date'>02/27</span>
                        <span className='time'>20:00</span>
                    </div>
                </div>
                <div className='flex-v bottom'>
                    <Value />
                </div>
            </div>
            <button className='btn'>신청하기</button>
        </div>

        {/* <div className='article1' style={style}>
            <div className={inner}>
                <div className="keyword">{keyword}</div>
                <h2>{h2}</h2>
                <p className='subTit'>{p}</p>
                {img}
                {push}
                <div className={`infoBx ${dis}`}>
                    <div className='tit'>{tit}</div>
                    <div className='list'>
                        {item}
                    </div>
                </div>
            </div>
        </div> */}
    </>
}

export default ListGridItem;