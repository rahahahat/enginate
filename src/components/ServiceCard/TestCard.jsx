import React from "react";

export default function TestCard() {
  return (
    <div
      class="flip-container"
      css={`
        .flip-container {
          perspective: 1000px;
        }
      `}
    >
      <div
        class="flipper"
        css={`
          width: 320px;
          height: 480px;
          transition: 0.6s;
          transform-style: preserve-3d;
          position: relative;
          :hover {
            transform: rotateY(180deg);
          }
        `}
      >
        <div
          class="front"
          css={`
            width: 320px;
            height: 480px;
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            background-color: red;
            transform: rotateY(0deg);
          `}
        ></div>
        <div
          class="back"
          css={`
            width: 320px;
            height: 480px;
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #00ccff;
            transform: rotateY(180deg);
          `}
        ></div>
      </div>
    </div>
  );
}
