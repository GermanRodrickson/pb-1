import React from "react";
import styled from "styled-components";

import Professions from './Professions'
import Friends from './Friends'
import HairColorWrapper from './HairColor'

const Wrapper = styled.section`
  position: relative;
  transition: all 200ms ease;
  padding: 2.5rem;
  background: #fff;
  border: 1px solid #ebecec;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  width: 350px;
  height: 750px;
  vertical-align: top;
  display: inline-block;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
  vertical-align: top;
`;

const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  display: inline-block;
`;

const Img = styled.img`
  position: absolute;
  width: 50px;
  top: 10px;
  right: 10px;
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

const Gnomes = (props) => {

  const name = props.name;
  const thumbnail = props.thumbnail;
  const height = props.height;
  const weight = props.weight;
  const hairColor = props.hairColor;
  const professions = props.professions;
  const friends = props.friends;
  const genre = props.genre;

  return <Wrapper>
      <Thumbnail src={thumbnail} alt="thumbnail" />
      <Name>{name}</Name>
      <Text><strong>Height:</strong> {height}  ||  <strong>Weight:</strong> {weight}</Text>

      <Text><strong>Hair Color:</strong></Text> <HairColorWrapper hairColor={hairColor}></HairColorWrapper>

      <Professions professions = {professions} />
      <Friends friends = {friends} />

      <Img src={genre} alt="genre" />
      
    </Wrapper>;
}


export default Gnomes;