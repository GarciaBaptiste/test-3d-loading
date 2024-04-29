import './App.css'
import React from 'react';
import styled from 'styled-components'

const LoadingWrapper = styled.section`
`;

const Scene = styled.div`
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  position: relative;
  animation: rotate 7s infinite reverse;
`;

const Face = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  transform: rotateY(${props => props.rotation}deg) translateZ(50vw);
  position: absolute;
`;

const FaceBackground = styled.div`
  width: 100%;
  height: 100%;
  border: solid 3px black;
  border-radius: calc((100vw + 100vh) / 8);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.p`
  font-size: 12vw;
`;

const BasicFace = ({ rotation }) => {
  return (
    <Face rotation={rotation}>
      <FaceBackground>
        <LoadingText style={{fontVariationSettings : '"wdth" 999, "wght" 400'}}>LOADING...</LoadingText>
      </FaceBackground>
    </Face>
  )
}

function App() {
  return (
    <>
      <LoadingWrapper>
        <Scene>
          <BasicFace rotation={0}></BasicFace>
          <BasicFace rotation={90}></BasicFace>
          <BasicFace rotation={180}></BasicFace>
          <BasicFace rotation={270}></BasicFace>
        </Scene>
      </LoadingWrapper>
    </>
  )
}

export default App
