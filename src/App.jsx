import { Suspense, useState } from 'react'
import './index.css'
import {Canvas} from "@react-three/fiber";
import Experience from './Experience.jsx'


function App() {

  return (
    <>
<Suspense fallback= {null}>
<header className="header"><a href="https://janaaumueller.cargo.site/Page-1">

<h2> projects	</h2></a>
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
 </Suspense>
 
 </>
  )
}

export default App
