import { useNavigate } from "react-router-dom";
import { useEffect, useInsertionEffect, useRef, useState } from "react";
import { Configuration, OpenAIApi } from 'openai';

const Chat = () => {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        if(message.value === ""){
            return;
        }else{
            let template = 
            `<li class="d-flex-l p-rela my-message">
                <div class="chat_bub">
                    <p class="chat_basic">${message.value}</p>
                </div>
                <div class="chat_text_div">
                    <p class="chat_text bottom">${hours >= 12 ? "오후" : "오전"} ${hours}:${minutes}</p>
                </div>
            </li>`;
            
            const chat_bg = document.querySelector('#chat-bg');
            chat_bg.insertAdjacentHTML('beforeend', template);
            ref.current.scrollTop = ref.current.scrollHeight;
            document.querySelector('#chat-enter').classList.remove('active');
            message.value = "";


            const configuration = new Configuration({
                // apiKey: process.env.OPENAI_API_KEY,
                apiKey: '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',
            });
            const openai = new OpenAIApi(configuration);
            // const { Configuration, OpenAIApi } = require("openai");

            openai.createCompletion({
                model: "text-davinci-002",
                prompt: message.value,
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                stop: [" Human:", " AI:"],
            }).then((result) => {
                setLoading(false);
                console.log(result.data);
                let ai_template = 
                    `<li class="d-flex-l p-rela other-message">
                        <div class="friend">
                            <img src=${process.env.PUBLIC_URL + "/img/img1.jpg"} alt="user"/>
                        </div>
                        <div class="chat_bub">
                            <p class="user-">짱구귀여워</p>
                            <p class="chat_basic">${result.data.choices[0].text}</p>
                        </div>
                        <div class="chat_text_div">
                            <p class="chat_text bottom">${hours >= 12 ? "오후" : "오전"} ${hours}:${minutes}</p>
                        </div>
                    </li>`;
                const chat_bg = document.querySelector('#chat-bg');
                chat_bg.insertAdjacentHTML('beforeend', ai_template);
                ref.current.scrollTop = ref.current.scrollHeight;
            }).catch((error) => {
                console.log('openai error', error)
            });
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
                <div className="bg">
                    <ul className="chat-bg" id="chat-bg">
                        {/* <li className="d-flex-l p-rela admin">
                            <div className="chat_bub">
                                <p className="i-notice"><span className="text-red">개인정보가 포함된 글과 광고성 게시물</span>은 관리자에 의해 <span className="text-red">임의로 삭제</span>될 수 있습니다.</p>
                            </div>
                        </li> */}
                        {/* 유저 말풍선 */}
                        <li className="d-flex-l p-rela my-message">
                            <div className="chat_bub">
                                <p className="chat_basic">메세지를 입력해보세요!</p>
                            </div>
                            <div className="chat_text_div">
                                {/* <p className="chat_text why">안읽음</p> */}
                                <p className="chat_text bottom">오후 13:30</p>
                            </div>
                        </li>
                        {/* 상대방 말풍선 */}
                        {/* <li className="d-flex-l p-rela other-message">
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
                        </li> */}
                        
                        {/* 입력중 */}
                        {loading && (
                            <div className="d-flex-l p-rela text-ing">
                                <div className="text-ing2"></div>
                            </div>
                        )}
                    </ul>

                </div>
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