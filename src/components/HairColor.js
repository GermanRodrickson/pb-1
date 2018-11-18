import React from "react";
import styled from "styled-components"

const Hair = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 6px;
  display: inline-block;
  vertical-align: top;
`;

const HairColor = (props) => {

const hairColor = props.hairColor;

    return (
      <Hair style={{'backgroundColor' : hairColor}}></Hair>
    )
  }



export default HairColor;