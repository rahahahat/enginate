import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
export default function Footer() {
  return (
    <footer
      css={`
        height: 300px;
        background-color: #353535;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <div
        css={`
          font-family: "Raleway";
          font-size: 1rem;
          color: white;
          align-self: center;
          font
        `}
      >
        <span
          css={`
            margin-right: 5px;
          `}
        >
          Property of Enginate Consultants
        </span>
        <span>
          <AiOutlineCopyright
            css={`
              color: white;
              position: relative;
              top: 3px;
            `}
          />
        </span>
        <span
          css={`
            margin-left: 5px;
          `}
        >
          2020
        </span>
      </div>
      <div
        css={`
          font-family: "Raleway";
          font-size: 1rem;
          color: white;
          align-self: center;
          margin-top: 5px;
          font
        `}
      >
        <span
          css={`
            font-family: "Raleway";
          `}
        >
          Icons by icons8.com
        </span>
      </div>
    </footer>
  );
}
