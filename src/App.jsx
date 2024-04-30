// import {Suspense} from 'react';
// import {Canvas} from '@react-three/fiber';
// import Panorama from './components/Panorama';
// import Panoramabackground from './components/Panoramabackground';
// import Controls from './components/Controls';
// import Helicopter from './components/Helicopter';
import {useRef} from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import './App.css';
import {styled} from 'styled-components';
import { useState } from 'react';
<<<<<<< HEAD
import SceneComponent from './components/SceneComponent.jsx'
=======
import ModelUpload from "./components/ModelUpload.jsx";

>>>>>>> brherold

const StyledDiv = styled.div`
    text-align: center;
    // textTransform: 'uppercase',
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0;
    margin: 0 0;
`;

const StyledP = styled.p`
    font-weight: 800;
    text-align: center;
`

const StyledDiv2 = styled.div`
    display: flex;
    flex-direction: column;

`



const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function App() {
<<<<<<< HEAD
=======

    const [userImage, setUserImage] = useState(null); 
>>>>>>> brherold
    const parallax = useRef(null); // Removed type annotation

    return (
        <div id='Page-container' style={{height: "100%", width: "100%", background: "#253237"}}>
            <Parallax ref={parallax} pages={4}>

                {/* Start of Background */}
                <ParallaxLayer offset={1} speed={0} factor={3} style={{backgroundColor: '#87BCDE', opacity: 0.5}}/>
                <ParallaxLayer offset={3} speed={0} factor={2} style={{backgroundColor: '#87BCDE'}}/>

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer offset={1} speed={0.8} style={{opacity: 0.1}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '55%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '15%'}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{opacity: 0.1}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '70%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '40%'}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{opacity: 0.2}}>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '10%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '75%'}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.8} style={{opacity: 0.1}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '55%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '15%'}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={2.75} speed={0.5} style={{opacity: 0.1}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '70%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '40%'}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.2} style={{opacity: 0.2}}>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '10%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '75%'}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={-0.1} style={{opacity: 0.4}}>
                    <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '60%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '25%', marginLeft: '30%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '80%'}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={3.4} speed={0.4} style={{opacity: 0.6}}>
                    <img src={url('cloud')} style={{display: "block", width: '20%', marginLeft: '5%'}}/>
                    <img src={url('cloud')} style={{display: 'block', width: '15%', marginLeft: '75%'}}/>
                </ParallaxLayer>
                {/*<ParallaxLayer offset={3.4} speed={0.4}>*/}
                {/*    <StyledP style={{left: '5%', fontSize: "3em", display: "block"}}>Chunhao Bi</StyledP>*/}
                {/*</ParallaxLayer>*/}

                <ParallaxLayer
                    offset={3.5}
                    speed={-0.3}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
<<<<<<< HEAD
                        pointerEvents: 'none',
                    }}>
                    <img src={url('earth')} style={{width: '60%'}}/>
=======
                        pointerEvents: 'auto',
                    }}
                    onClick={() => setUserImage('./snow.jpg')}
                    >
                    <img src={'/pool.jpg'} style={{width: '60%'}}/>
                    
>>>>>>> brherold
                </ParallaxLayer>
                {/* End of Background */}




                {/* Start of Title */}
                <ParallaxLayer sticky={{ start: 0.3, end: 2 }}  style={{justifyContent: 'flex-start' }}>
                    <StyledDiv style={{color: "white", fontSize: "4em"}}>
                        <p>Online 3D File Reader</p>
                    </StyledDiv>
                </ParallaxLayer>
                {/* End of Title */}


                <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'auto',
                }}>
<<<<<<< HEAD
                    <SceneComponent />
=======
                    <div id='Canvas-container' >
                        <Canvas>
                            <Controls/>
                            <Suspense fallback={null}>
                                <Panorama userImage={userImage} />
                                {/* <Panoramabackground></Panoramabackground> */}
                                <Helicopter/>
                            </Suspense>

                            <ambientLight intensity={0.5}/>

                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                            <pointLight position={[-10, -10, -10]}/>
                        </Canvas>



                        {/* ========================================= */}
                        <StyledDiv2>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*"
                                label = "image"
                                style={{
                                    width: '100%',
                                    margin: '10px 0'
                                }}
                            />
                            <ModelUpload
                                style={{
                                    width: '100%',
                                    margin: '10px 0'
                                }}
                            />
                        </StyledDiv2>



                        {/* ========================================= */}


                    </div>


>>>>>>> brherold
                </ParallaxLayer>
            </Parallax>

        </div>
    )
}