import { Text,Image, Html,ContactShadows,Float, Environment, PresentationControls, useGLTF } from '@react-three/drei'
import './index.css'
export default function Experience()
{
    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
    return <>
     <Environment preset='city'/>
        <color args = { ['#180038']} attach = "background"/>
        
<PresentationControls 
    global
    rotation={[0.13,0.1,0]}
    polar = {[-0.4, 0.2]}
    azimuth={[-1,0.75]}
    config = {{mass:2, tension:400}}
    snap={{mass:4, tension:400}}
    >
    <Float rotationIntensity= {0.4}>
    <Text
        font="./RobotoMono-ThinItalic.ttf"
        fontSize={ 0.3 }
        position={ [ -2.4, 0.75, 1.2 ] }
        rotation-y={ - 1.25 }
        maxWidth={ 1 }>Hi, Im Jana,</Text>
    <rectAreaLight
    width={2.5}
    height={1.65}
    intensity={65}
    color={ '#bd377a'}
    rotation = {[0.1, Math.PI, 0]}
    position={[0,0.55,-1.15]}/>

    <primitive object={computer.scene}
    position-y = {-2.2}
    position-x = {1.2}
    scale ={1.3}
    rotation-y = {-0.2}
    >
        <Html
        transform
        wrapperClass='htmlScreen'
        distanceFactor={1.17}
        position={[0,1.56,-1.4]}
        rotation-x= {-0.260}
        >

        <iframe src="https://janaaumueller.cargo.site/"></iframe></Html>
        </primitive>

         
            
           

    
    </Float>
  
    </PresentationControls>
    <ContactShadows 
    position-y={-1.4}
    opacity={0.4}
    scale={5}
    blur={2.4}
   
    />
    </>
}