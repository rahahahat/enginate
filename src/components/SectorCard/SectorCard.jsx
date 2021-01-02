import React from "react";

export default function SectorCard({ sector, src }) {
  return (
    <div
      css={`
        place-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(22, 132, 196, 0.1);
        /* box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1); */
        width: 240px;
        height: 240px;
        border-radius: 10%;
      `}
    >
      <img
        src={src}
        css={`
          align-self: center;
        `}
      />
      <div
        css={`
          font-size: 3.1rem;
          font-family: "Bebas Neue";
          align-self: center;
          color: #2b2b2b;
        `}
      >
        {sector}
      </div>
    </div>
  );
}
