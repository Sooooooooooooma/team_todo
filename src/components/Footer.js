import { useState } from "react";
import "./Footer.css"

const Footer = () => {
  // creditsを書き換えると表示内容が変わります。
  const credits = [
    {"name":"ta2bey371","text":"hello world!"},
    {"name":"test_name","text":"test_text"},
    {"name":"test_name","text":"test_text"},
  ];
  const [showId,setShowId] = useState(null);
  return (
    <dl>
      {credits.map((credit,index)=>{
        const showControre = (index) => {
          if(showId===index)setShowId(null);
          else setShowId(index);
        }
        return (
          <div key={index}>
            <dt onClick={()=>showControre(index)}>{credit.name}</dt>
            {showId === index?<dd>{credit.text}</dd>:<dd style={{display:"none"}}></dd>}
          </div>
        );
      })}
      <a href="/">ログアウト</a>
    </dl>
  )
}

export default Footer