import { useNavigate } from "react-router-dom";
import { useEffect, useInsertionEffect, useRef, useState } from "react";
const Chat = () => {
    let navigate = useNavigate();

    const ref = useRef();

    const onChange = (e) => {
        let value = e.target.value;
        let enter = document.querySelector('#chat-enter');
        if(value === ""){
            enter.classList.remove('active');
        }else{
            enter.classList.add('active');
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let message = document.getElementById('input-message');
        const data = new Date();
        let hours = data.getHours();
        let minutes = data.getMinutes();
        if(message.value === ""){
            return;
        }else{
            let template = 
            `<li class="d-flex-l p-rela my-message">
                <div class="chat_bub">
                    <p class="chat_basic">${message.value}</p>
                </div>
                <div class="chat_text_div">
                    <p class="chat_text why">안읽음</p>
                    <p class="chat_text bottom">${hours >= 12 ? "오후" : "오전"} ${hours}:${minutes}</p>
                </div>
            </li>`;
            const chat_bg = document.querySelector('#chat-bg');
            chat_bg.insertAdjacentHTML('beforeend', template);
            ref.current.scrollTop = ref.current.scrollHeight;
            document.querySelector('#chat-enter').classList.remove('active');
            message.value = "";
        }
    }

    return(
        <div className="chat-wrap" ref={ref}>
            <div className='friend'>
                <button className="back-btn" onClick={() => {
                    navigate('/auto-chat')
                }}>뒤로</button>
                <div className='img'>
                    <img src={process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                </div>
                <div className='name'>
                    짱구귀여워
                </div>
            </div>
            <div className="chat-inner">
                <ul className="chat-bg" id="chat-bg">
                    <li className="d-flex-l p-rela admin">
                        <div className="chat_bub">
                            <p className="i-notice"><span className="text-red">개인정보가 포함된 글과 광고성 게시물</span>은 관리자에 의해 <span className="text-red">임의로 삭제</span>될 수 있습니다.</p>
                        </div>
                    </li>
                    {/* 유저 말풍선 */}
                    <li className="d-flex-l p-rela my-message">
                        <div className="chat_bub">
                            <p className="chat_basic">안녕하세요~</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text why">안읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    {/* 상대방 말풍선 */}
                    <li className="d-flex-l p-rela other-message">
                        <div className="friend">
                            <img src={process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                        </div>
                        <div className="chat_bub">
                            <p className="user-name">짱구귀여워</p>
                            <p className="chat_basic">반가워요.</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text">읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela my-message">
                        <div className="chat_bub">
                            <p className="chat_basic">잘있어요</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text why">안읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela other-message">
                        <div className="friend">
                            <img src={process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                        </div>
                        <div className="chat_bub">
                            <p className="user-name">짱구귀여워</p>
                            <p className="chat_basic">다시 만나요!</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text">읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela my-message">
                        <div className="chat_bub">
                            <p className="chat_basic">힘들었던 하루~~ 많이도 지쳤지만~ 우리들 모두 다 하루 일을 시작해~~</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text why">안읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela other-message">
                        <div className="friend">
                            <img src={process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                        </div>
                        <div className="chat_bub">
                            <p className="user-name">짱구귀여워</p>
                            <p className="chat_basic">안녕하세요</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text">읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela my-message">
                        <div className="chat_bub">
                            <p className="chat_basic">감사해요</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text why">안읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela my-message">
                        <div className="chat_bub">
                            <p className="chat_basic">잘 있어요</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text why">안읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela other-message">
                        <div className="friend">
                            <img src={process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                        </div>
                        <div className="chat_bub">
                            <p className="user-name">짱구귀여워</p>
                            <p className="chat_basic">다시 만나요~~</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text">읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela other-message">
                        <div className="friend">
                            <img src={process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                        </div>
                        <div className="chat_bub">
                            <p className="user-name">짱구귀여워</p>
                            <p className="chat_basic">힘들었던 하루~~(힘들었던 하루~)</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text">읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    <li className="d-flex-l p-rela other-message">
                        <div className="friend">
                            <img src={process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                        </div>
                        <div className="chat_bub">
                            <p className="user-name">짱구귀여워</p>
                            <p className="chat_basic">많이도 지쳤지만~~~ 우리들 모두 다~~~</p>
                        </div>
                        <div className="chat_text_div">
                            <p className="chat_text">읽음</p>
                            <p className="chat_text bottom">오후 5:56</p>
                        </div>
                    </li>
                    {/* 입력중 */}
                    <div className="d-flex-l p-rela text-ing">
                        <div className="text-ing2"></div>
                    </div>
                </ul>
            </div>
            <div className="footer-chat">
                <div className="d-flex chat-content">
                    <form className="chat-input">
                        <input type="text" onChange={onChange} placeholder="메세지를 입력하세요." id="input-message" />
                        {/* active 클래스 추가 시 색상 활성화 */}
                        <button type="submit" onClick={onSubmit} className="chat-enter" id="chat-enter">보내기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Chat;