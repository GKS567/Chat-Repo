import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Dou</span>
            <p>lorem ipsum dolor, sit amet. </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Jane Dou ds fe feekrntjkn tjer ntjgkr jtjker jgtn kledmk; gnejk
              jfge; jmnfjkeb jkfgenjkl bfkjeb kfjj lebj kfbejkb fje njklfebn j
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Jane Dou ds fe feekrntjkn tjer ntjgkr jtjker jgtn kledmk; gnejk
              jfge; jmnfjkeb jkfgenjkl bfkjeb kfjj lebj kfbejkb fje njklfebn j
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Jane Dou ds fe feekrntjkn tjer ntjgkr jtjker jgtn kledmk; gnejk
              jfge; jmnfjkeb jkfgenjkl bfkjeb kfjj lebj kfbejkb fje njklfebn j
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Jane Dou ds fe feekrntjkn tjer ntjgkr jtjker jgtn kledmk; gnejk
              jfge; jmnfjkeb jkfgenjkl bfkjeb kfjj lebj kfbejkb fje njklfebn j
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Jane Dou ds fe feekrntjkn tjer ntjgkr jtjker jgtn kledmk; gnejk
              jfge; jmnfjkeb jkfgenjkl bfkjeb kfjj lebj kfbejkb fje njklfebn j
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Jane Dou ds fe feekrntjkn tjer ntjgkr jtjker jgtn kledmk; gnejk
              jfge; jmnfjkeb jkfgenjkl bfkjeb kfjj lebj kfbejkb fje njklfebn j
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="emojiPicker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
