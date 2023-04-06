import React, { useState } from "react";
import promptsubmit from "../images/submit.svg";
import mandala from "../images/Mandala.svg";
import slokaleft from "../images/sloka-left.png";
import slokaright from "../images/sloka-right.png";
import ServerBanner from "../images/Server Banner Display.png";
import Slider from "./Slider";
import VideoPlayer from "./VideoPlayer";

const MainContent = () => {
  const [response, setResponse] = useState({});

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
            fontSize: "55px",
          }}
          className="question"
        >
          What Troubles you my Friend ???
        </h1>
        <p className="tagline">Find solace in the wisdom of Shree Krishna</p>
        <p style={{ top: "465px", left: "550px" }} className="counter">
          5,85,030+ Updesh generated so far
        </p>

        <img src={slokaleft} className="sloka-left" alt="" />

        <img className="mandala" src={mandala} alt="" />

        <img src={slokaright} className="sloka-right" alt="" />

        <form className="prompt-section" onSubmit={handleSubmit}>
          <input
            type="text"
            className="prompt-container"
            placeholder="Enter The Question"
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
            <p className="chapter-name">Chapter:{response.chapter}</p>
            <p className="chapter-name">Verse:{response.verse}</p>
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
            Discover the world of bhagwad gita ai and connect with fellow
            seekers on our discord community. Share insights, explore new
            perspectives, and learn from each other
          </li>

          <li>
            Discover the world of bhagwad gita ai and connect with fellow
            seekers on our discord community. Share insights, explore new
            perspectives, and learn from each other
          </li>
        </ul>

        <button className="join-now">Join Now</button>

        <img src={ServerBanner} className="server-banner" alt="server Banner" />
      </section>
      <section className="slider">
        <Slider videos={response.videosRelatedToRelatedChapters} />
      </section>
    </>
  );
};

export default MainContent;
