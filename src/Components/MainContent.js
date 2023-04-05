import React from 'react'
import promptsubmit from '../images/submit.svg';
import mandala from "../images/Mandala.svg";
import slokaleft from "../images/sloka-left.png";
import slokaright from "../images/sloka-right.png";
import ServerBanner from "../images/Server Banner Display.png";
import Slider from './Slider';



const MainContent = () => {
  return (
    <>
        <section className="main-content">
			<h1 style={{fontFamily:'Samarkan Normal', fontWeight:'bold', fontSize: "55px"}} className='question'>What Troubles you my Friend ???</h1>
            <p className='tagline'>Find solace in the wisdom of Shree Krishna</p>
            <p style={{top: "465px",left: "550px"}} className='counter'>5,85,030+ Updesh generated so far</p>
           
            <img src={slokaleft} className='sloka-left' alt="" />

            <img className='mandala' src={mandala} alt="" />
           
            <img src={slokaright} className='sloka-right' alt="" />

            <div className="prompt-section">
                <input type="text" className='prompt-container' placeholder='Enter The Question' />
                <button className='prompt-submit' type="submit">
                     <img src={promptsubmit} style={{width:"80%",marginTop:"8px"}} alt="" />
                </button>

           
                {/* <div className="suggestions">
                    <div className="suggestion">Meaning Of Dharma</div>
                    <div style={{top:"630px",left: "640px"}} className="suggestion">What is Life</div>
                    <div style={{left:"827px",top: "602px"}} className="suggestion">How to get inner peace</div>
                </div> */}

                <textarea className='prompt-answer' name="" id="">
                    To attain peace, one must practice detachment from the material world and focus on the spiritual. This can be done through meditation, prayer, and other spiritual practices. Additionally, one must strive to cultivate virtues such as truthfulness, compassion, and non-violence. By living in harmony with the laws of nature, one can find true peace.
                </textarea>

                <div className="chapter">
                   <p className='chapter-name'>Chapter 1 Verse 1</p>
                   <p className='chapter-description'>To attain peace, one must practice detachment from the material world and focus on the spiritual. This can be done through meditation, prayer, and other spiritual practices. Additionally, one must strive to cultivate virtues such as truthfulness, compassion, and non-violence. By living in harmony with the laws of nature, one can find true peace.</p>
                </div>
            </div>
		</section>


 
        <section className='community'>
            <h1 style={{fontFamily:'Samarkan Normal', fontWeight:'bold', fontSize: "55px"}} className='join-community'>Join Our Community</h1>
            
            <ul>
                <li>Discover the world of bhagwad gita ai and connect with fellow seekers on our discord community. Share insights, explore new perspectives, and learn from each other</li>

                <li>Discover the world of bhagwad gita ai and connect with fellow seekers on our discord community. Share insights, explore new perspectives, and learn from each other</li>
                
            </ul>

            <button className='join-now'>Join Now</button>
          
            <img src={ServerBanner} className='server-banner' alt="server Banner" />

        </section>


                <section className='slider'>
                    <Slider />
                </section>
               
            

    </>
  )
}

export default MainContent
