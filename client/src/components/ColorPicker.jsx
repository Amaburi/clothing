import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#00ff9e",
          "#fbff00",
          "#66672b",
          "#00cdff",
          "#ff5e70",
          "#fc9faa",
          "#f8001b",
          "#ff49c0",
          "#ff9d46",
          "#31fc85",
          "#ffdccb",
          "#b76339",
          "#38bbc4",
          "#b856f2",
          "#838383",
          "#666566",
          "#333233",
          "#00fffd"
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker