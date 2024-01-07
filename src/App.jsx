import { useState } from 'react'

function App() {

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1,
      
  //   }
  //   console.log(clicks)
  //   setClicks(newClicks)
  // }

  // simplificando la funcion 

  const handleLeftClick = () =>
    setClicks({...clicks, left: clicks.left +1})

  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1
  //   }
  //   console.log(clicks)
  //   setClicks(newClicks)
  // }

  // simplificando la funcion 

  const handleRightClick = () =>
  setClicks({...clicks, right: clicks.right +1})

  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>{'<- Left'}</button>
      <button onClick={handleRightClick}>{'Right ->'}</button>
      {clicks.right}
    </div>
  )

  
}

export default App
