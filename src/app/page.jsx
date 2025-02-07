"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

const Home = () => {
  const [showHearts, setShowHearts] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(100);
  const [noButtonText, setNoButtonText] = useState("No");
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "40%",
    left: "60%",
  });

  const renderHearts = () => {
    return Array.from({ length: 20 }).map((_, index) => (
      <Heart
        key={index}
        color="pink"
        fill="pink"
        size={Math.random() * 50 + 20}
        className="absolute animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ));
  };

  const texts = [
    "enipe???",
    "Really?",
    "Ah😭 you clicked no ke??",
    "you want me to die???",
    "But i love you!!!",
    "joor na",
    "Are you sure? 🥺",
    "Pretty please? 💕",
    "yo yo yo I'm kiddinggg",
    "Don't do this 😭",
    "Why are you like this?",
    "You know you want to! 💝",
  ];

  const increaseYesButton = () => {
    setYesButtonSize((prev) => prev + 100);
    setNoButtonText(texts[Math.floor(Math.random() * texts.length)]);

    setNoButtonPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  const [showMessage, setShowMessage] = useState(false);

  const handleYesClick = () => {
    setShowMessage(true);
    setShowHearts(true);
  };

  return (
    <div className="main min-h-screen bg-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      {showHearts && renderHearts()}

      {!showMessage ? (
        <div className="content text-center bg-white p-8 rounded-xl shadow-lg max-w-xl w-full relative">
          <Heart className="mx-auto mb-4 text-red-500" size={100} />
          <div className="text-content">
            <p className="text-2xl text-pink-800 mb-4">
              I love you more than words can express. It's hard to imagine what
              my life was like before I met you. You complete me, and I adore
              everything about you—from your smile and laugh to your eyes and
              voice. The way you give me butterflies and make me feel all warm
              inside... you make me feel loved in ways I never thought possible.
              There's nothing I'd want more than the honor of being your
              Valentine on this special day.
            </p>

            <p className="text-2xl text-pink-800">
              Hi Riri, Would you be my Valentine? 🥺
            </p>
          </div>

          <div className="flex justify-center items-center relative min-h-[300px]">
            <button
              onClick={handleYesClick}
              className="absolute bg-pink-800 text-white rounded-lg p-4 transition-all duration-300 hover:bg-pink-700"
              style={{
                width: `${yesButtonSize}px`,
                height: `${yesButtonSize}px`,
                fontSize: `${Math.min(yesButtonSize / 4, 32)}px`,
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "30%",
              }}
            >
              Yes
            </button>

            <button
              onClick={increaseYesButton}
              className="absolute bg-green-400 text-white rounded-lg p-4 hover:bg-green-500 transition-all duration-300 min-w-32 h-100"
              style={{
                position: "absolute",
                top: noButtonPosition.top,
                left: noButtonPosition.left,
                transition: "top 0.3s ease, left 0.3s ease",
              }}
            >
              {noButtonText}
            </button>
          </div>
        </div>
      ) : (
        <div className="content text-center bg-white p-8 rounded-xl shadow-lg max-w-xl w-full">
          <p className="text-3xl text-pink-800 font-bold animate-bounce">
            I knew you'd say yes!!! 💖 I love you princess
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
