import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

function Main() {

  const { prevPrompts, setPrevPrompts,
    onSent,
    recentPrompt, setRecentPrompt,
    showResult, setShowResult,
    loading, setLoading,
    resultData, input,
    setInput } = useContext(Context)

  return (
    <div className='main' id="main">
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className='main-container'>

        {!showResult ? <>
          <div className='greet'>
            <p><span>Hello, Akanksha</span></p>
            <p>How can I help you today ?</p>
          </div>
          {/* Cards */}
          <div className='cards'>
            <div className='card'>
              <p>Help me draft a response to a friend</p>
              <img src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div className='card'>
              <p>Create vibrant & playful image with lots of details</p>
              <img src={assets.bulb_icon} alt="compass-icon" />
            </div>
            <div className='card'>
              <p>What are some tips to improve public speaking skills for beginners?</p>
              <img src={assets.message_icon} alt="compass-icon" />
            </div>
            <div className='card'>
              <p>Generate an image of a grand intergalactic bake-off</p>
              <img src={assets.code_icon} alt="compass-icon" />
            </div>
          </div>
        </>
          :
          <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt="user-icon " />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt="gemini" />
              {
                loading ?
                  <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  :
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }

        {/* Main Bottom for input */}

        <div className='main-bottom'>
          <div className="search-box">
            <input onChange={(e) => {
              setInput(e.target.value)
            }} value={input} type="text" placeholder='Enter a prompt here' />
            <div className='input'>
              <img src={assets.gallery_icon} alt="galley-icon" />
              <img src={assets.mic_icon} alt="mic-icon" />
              {
                input ?
                  <img onClick={() => {
                    onSent()
                  }} src={assets.send_icon} alt="send-icon" /> : null
              }
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. <a href="#">Your privacy and Gemini Apps</a>
          </p>

        </div>



      </div>

    </div >
  )
}

export default Main