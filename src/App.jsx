import { useState } from 'react'
import './index.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Experience from './Experience.jsx'
import Overlay from './Overlay.jsx';

function App() {

  return (
    <>

<header className="header"><a href="https://janaaumueller.cargo.site/Page-1">

<h1><u> projects→	</u></h1></a>
</header>
<Canvas
camera={ {
    fov: 45,
    near: 0.1,
    far: 2000,
    position: [ -3, 1.5, 4 ]
} }
>

   <Experience />
 </Canvas>
 </>
  )
}

export default App
