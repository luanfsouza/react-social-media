import './ChatOnline.css'
export default function ChatOnline(){
      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"src={PF+"person/person3.jpg"}/>
                    <div className="chatOnlineBedge"></div>
                </div>
                <span className="chatOnlineName">Luan luan</span>
            
            </div>
        </div>
    )
}