import Header from './Header'
import Footer from './Footer'
import Chat from "../components/Chat";
import { useNavigate } from "react-router-dom";
const Main = () => {
    const navigate = useNavigate();
    return(
        <div className='wrap'>
            <Header/>
            <div className='main'>
                <div className='friend'  onClick={() => {
                    navigate(`chat`);
                }}>
                    <div className='img'>
                        <img src="../img/img1.jpg" alt="user"/>
                    </div>
                    <div className='name'>
                        짱구귀여워
                    </div>
                </div>
                <div className='friend' onClick={() => {
                    navigate(`chat`);
                }}>
                    <div className='img'>
                        <img src="../img/img1.jpg" alt="user"/>
                    </div>
                    <div className='name'>
                        짱구귀여워
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Main;