import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import MainSceneWrapper from "./MainSceneWrapper.jsx";
import {styled} from "styled-components";
import {useRef} from 'react';

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
    font-weight: 900;
    font-size: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
`

const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function MainPage() {
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

                <ParallaxLayer offset={3.2} speed={1.0} style={{opacity: 0.9}}>
                    <StyledP> Created by: </StyledP>
                    <StyledP style={{fontSize: "2em"}}> Chunhao Bi, Fanjie Gao, Brandon Herold </StyledP>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.8}
                    speed={-0.3}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <img src={url('earth')} style={{width: '60%'}}/>
                </ParallaxLayer>
                 {/*End of Background*/}


                {/* Start of Title */}
                <ParallaxLayer sticky={{start: 0.3, end: 2}} style={{justifyContent: 'flex-start'}}>
                    <StyledDiv style={{color: "white", fontSize: "4em"}}>
                        <p>Online OBJ File Reader</p>
                    </StyledDiv>

                </ParallaxLayer>
                {/* End of Title */}

                {/* Start of Scene */}
                <ParallaxLayer sticky={{start: 1, end: 2}} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'auto',
                }}>
                    <div id='Canvas-container' style={{height: "60%", width: "60%"}}>
                        <MainSceneWrapper/>
                    </div>
                </ParallaxLayer>
                {/* End of Scene */}

            </Parallax>
        </div>
    )
}