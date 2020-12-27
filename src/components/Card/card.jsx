import React from "react";
import { useTransition, useChain } from "react-spring";
import { CardWrap, CardListItem } from "./card-styles";
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
  
  const ItemPositionAnimation = useTransition(data, (item) => item, {
    ref: itemRef,
    from: { transform: "translateX(-50px)", opacity: 0 },
    enter: { transform: "translateX(0px)", opacity: 1 },
    leave: { transform: "translateX(50px)", opacity: 0 },
    config: { duration: 300 },
  });

  useChain([cardRef, itemRef], [0, 0.2]);
  return cardOpacityAnimation.map(({ item, key, props }) => (
    item && <CardWrap key={key} style={props}>
      {ItemPositionAnimation.map(({ item, key, props }) => (
        <CardListItem key={key} style={props}>
          {item}
        </CardListItem>
      ))}
    </CardWrap>
  ));
};
export default Card;
