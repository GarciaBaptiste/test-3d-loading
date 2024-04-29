import './App.css'
import React from 'react';
import styled from 'styled-components'

const LoadingWrapper = styled.section``;

const Scene = styled.div``;

const Face = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

const FaceBackground = styled.div`
  width: 100%;
  height: 100%;
  border: solid 2px black;
  border-radius: 35vw;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.p`
  font-size: 24px;
`;

class BasicFace extends React.Component {
  render() {
    return(
      <Face>
        <FaceBackground>
          <LoadingText><i>Loading...</i></LoadingText>
        </FaceBackground>
      </Face>
    )
  }
}

function App() {
  return (
    <>
      <LoadingWrapper>
        <Scene>
          <BasicFace></BasicFace>
        </Scene>
      </LoadingWrapper>
    </>
  )
}

export default App
