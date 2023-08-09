/* eslint react-hooks/exhaustive-deps: off */
import React, {useEffect, useState} from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  console.log('レンダリング')
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false)
  const onClickCountUp = () => {
    setNum(num + 1)
    console.log(num)
  }

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true)
      } else {
        faceShowFlag && setFaceShowFlag(false)
      }
    }
  }, [num])


  // stateの変数名、stateを更新する関数名
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue">
        "お元気ですか"
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        "元気です"
      </ColorfulMessage>
      <button onClick={ onClickCountUp } >カウントアップ</button>
      <br></br>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p> ^^) _旦~~</p>}


    </>
  )
}

export default App