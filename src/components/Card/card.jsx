import React from "react";
import { useTransition, useChain, config, useTrail } from "react-spring";
import {
  CardWrap,
  CardItemWrap,
  CardItem,
  QuestionMarkIcon,
} from "./card-styles";
// import { Tooltip } from "antd";
// import "antd/lib/style/core/motion/";
// // import "antd/lib/tooltip/style/index.css";
// // import "antd/lib/tooltip/style/index.less";

const data = [
  "Structural Engineering",
  "Civil Engineering",
  "Bridge Engineering",
  "Consulting",
  "Project Management",
  "On Site Assistance",
  "BIM & CAD Services",
  "Reinforcement Detailing",
  "Digital Engineering",
  "Environmental",
  "Bespoke Engineering Software Design",
];

const Card = () => {
  React.useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 300 && show == false) {
          setShow(true);
        }
      },
      false
    );
  });
  const [show, setShow] = React.useState(false);
  const cardRef = React.useRef();
  const itemRef = React.useRef();
  const cardOpacityAnimation = useTransition(show, null, {
    ref: cardRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  const ItemPositionAnimation = useTransition(
    show ? data : [],
    (item) => item,
    {
      ref: itemRef,
      from: { transform: "translate3d(-50px,0,0)", opacity: 0 },
      enter: { transform: "translat3d(0px,0,0)", opacity: 1 },
      leave: { transform: "translate3d(50px,0,0)", opacity: 0 },
      config: config.wobbly,
    }
  );

  useChain([cardRef, itemRef], [0, 0.2]);
  return cardOpacityAnimation.map(
    ({ item, key, props }) =>
      item && (
        <CardWrap key={key} style={props}>
          {ItemPositionAnimation.map(
            ({ item, key, props }) =>
              item && (
                <CardItemWrap key={key} style={props}>
                  <CardItem>{item}</CardItem>
                  {/* <Tooltip placement="right" title="hello"> */}
                  <QuestionMarkIcon />
                  {/* </Tooltip> */}
                </CardItemWrap>
              )
          )}
        </CardWrap>
      )
  );
};
export default Card;
