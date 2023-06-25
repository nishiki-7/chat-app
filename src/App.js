import React, { useState } from 'react'
import "./App.css"
import Post from "./components/Post/Post.js"
import Input from "./components/Input/Input.js"

function App() {

  const [inputText, setInputText] = useState("");
  const onChangeInputText = (event) => setInputText(event.target.value);

  // 送信ボタンをクリックしたら、テキストを追加する処理
  const onClickSend = () => {
    const sendText = inputText;
    setInputText(sendText);
    console.log(inputText + "が送信されました！");
  }


  return (
   <div className='app'>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />

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
