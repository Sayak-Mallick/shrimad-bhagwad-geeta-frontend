import React, { useState } from "react";
import promptsubmit from "../images/submit.svg";
import mandala from "../images/Mandala.svg";
import slokaleft from "../images/sloka-left.png";
import slokaright from "../images/sloka-right.png";
import ServerBanner from "../images/Server Banner Display.png";
import Slider from "./Slider";

const MainContent = () => {
  const [response, setResponse] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const question = event.target.elements.question.value;

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    })
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => console.error(error));
  };

  //   console.log(response.videosRelatedToRelatedChapters[0].url);
  return (
    <>
      <section className="main-content">
        <h1
          style={{
            fontFamily: "Samarkan Normal",
            fontWeight: "bold",
          }}
          className="question"
        >
          What Troubles you my Friend ?
        </h1>
        <p className="tagline">Find solace in the wisdom of Shree Krishna</p>
        <p className="counter">5,85,030+ Updesh generated so far</p>

        <img src={slokaleft} className="sloka-left" alt="" />

        <img className="mandala" src={mandala} alt="" />

        <img src={slokaright} className="sloka-right" alt="" />

        <form className="prompt-section" onSubmit={handleSubmit}>
          <input
            type="text"
            className="prompt-container"
            placeholder="Enter The Question [Eg :- What is Inner peace ? ]"
            name="question"
          />
          <button className="prompt-submit" type="submit">
            <img
              src={promptsubmit}
              style={{ width: "80%", marginTop: "8px" }}
              alt=""
            />
          </button>

          <textarea
            className="prompt-answer"
            value={response.generatedAnswer}
            readOnly
          />

          <div className="chapter">
            <p className="chapter-name">
              Chapter:{response.chapter} , Verse:{response.verse}
            </p>
            {/* <p className="chapter-name"></p> */}
            <p className="chapter-description">
              Original Shloka:{response.shlokaText}
            </p>
            <p className="chapter-description">
              Shloka Meaning:{response.shlokaMeaning}
            </p>
          </div>
        </form>
      </section>
      <section className="community">
        <h1
          style={{
            fontFamily: "Samarkan Normal",
            fontWeight: "bold",
            fontSize: "55px",
          }}
          className="join-community"
        >
          Join Our Community
        </h1>

        <ul>
          <li>
            <b>Chatting –</b> You get to interact with likeminded people. Chat with them and share ideas, images,
information, knowledge and be a part of a community.
          </li>

          <li>
          <b> Free Music Channel –</b>  You can access our music library of Bhajans and Kirtans as per your
preferences and listen as well as share.
          </li>

          <li>
        <b>Free Personalized Image Builder –</b>     We connect you the most popular Image Buliding AI for free.
You can connect to this and just type out the kind of image you want and the AI tool will generate
an unique image for you. You can download this image for free. Please follow our instruction video
for easy access to this tool.
          </li>

<li>

           <b> Notice board –</b> We will post events, competitions, donation drives, seva opportunities and
important information for community members in this section.

</li>

<li>
<b>Hindu Calender –</b> Here you can see also the important dates and their significance.
</li>


<li>
   <b> Exchange Counter –</b> Coming Soon ! – Here you can trade/exchange credit points earned and NFTs
</li>

        </ul>

        <button className="join-now">Join Now</button>

        <img src={ServerBanner} className="server-banner" alt="server Banner" />
      </section>
      <section className="slider">
        <h4
          style={{
            fontFamily: "Samarkan Normal",
            fontWeight: "bold",
            fontSize: "35px",
            top: "-90px",
            position: " absolute",
          }}
          className="videos-heading"
        >
          Know More From Popular Videos
        </h4>
        <Slider videos={response.videosRelatedToRelatedChapters} />
      </section>
    </>
  );
};

export default MainContent;
