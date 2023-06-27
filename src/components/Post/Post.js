import React from 'react'
import "./Post.css"

function Post(props) {
  const {chatTimeline} = props;

  return (
    <>
    {chatTimeline.map((timeline) => {
      <div className='post'>
        <div className='post-avatar'>
          な
        </div>
        <div className='post-message'>
            {timeline}
        </div>
        <button>削除</button>
      </div>
    })}
    
    </>
  )
}

export default Post
