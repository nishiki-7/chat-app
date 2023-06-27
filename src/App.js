import React, { useState } from 'react'
import "./App.css"
import Post from "./components/Post/Post.js"
import Input from "./components/Input/Input.js"

function App() {
  // Appコンポーネントで、チャットの内容を格納する配列を定義する
  const [chatTimeline, setChatTimeline] = useState([]); 

  const [inputText, setInputText] = useState("");
  const onChangeInputText = (event) => setInputText(event.target.value);

  // 送信ボタンをクリックしたら、テキストを追加する処理
  const onClickSend = () => {
    const newChatTimeLine = [...chatTimeline, inputText];
    setChatTimeline(newChatTimeLine);
    setInputText("");

    console.log(chatTimeline[0] + "が送信されました！");
  }


  return (
   <div className='app'>
    <Post chatTimeline={chatTimeline}/>
    {/* <Post inputText={inputText}/> */}

    {/* メッセージを入力する箇所 */}
    <Input 
      inputText={inputText}
      onChange={onChangeInputText}
      onClick={onClickSend}
    />
   </div>
  )
}

export default App
