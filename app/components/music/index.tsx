import React, {useEffect, useRef, useState} from 'react'
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'
import { ThemeMode } from '~/styles/themes/themes'

type BoxProps = {
    theme?: ThemeMode
    children: React.ReactNode[]
}

const Box = styled.div<BoxProps>`
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    height: 1.6rem;
    padding-top: 0.8rem;
  
  
    ${props => props.children.map((child, index) => {
        return `
            &>*:nth-child(${index + 1}){
                animation-delay: ${index * 0.2}s;
            }
        `
    }, [])}
`

const play = keyframes`
    0%{
        transform:scaleY(1);
    }
    50%{
        transform:scaleY(2);
    }
    100%{
        transform:scaleY(1);
    }
`

type LineProps = {
    theme?: ThemeMode
    height?: string
    play: boolean
}

const Line = styled.span<LineProps>`
    background: ${props => props.theme.text};
    //border: 1px solid ${props => props.theme.body};
    animation: ${play} 1s ease infinite;
    animation-play-state: ${props => props.play ? "running" : "paused"};
    height: ${props => props.height || "1rem"};
    width: 2px;
    margin:0 0.1rem
`

const Volume = styled.input`
  -webkit-appearance: none;
  width: 70%;
  margin-top: 1rem;
  height: 0.2rem;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0.5rem;
    height: 0.5rem;
    background: #04AA6D;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 0.5rem;
    height: 0.5rem;
    background: #04AA6D;
    cursor: pointer;
  }
`;
const SoundBar = () => {

    const ref = useRef(null);
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.1);

    const handleClick = () => {
        setPlay(!play);
        if(!play){
            // @ts-ignore
            ref.current.play();
        }else{
            // @ts-ignore
            ref.current.pause();
        }
    }

    useEffect(() => {
        // @ts-ignore
        ref.current.volume = volume;
    }, [volume, play]);

    return (
        <>
            <audio src="/music/good-night.mp3" ref={ref}  loop />
            <Box onClick={() => handleClick()}>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
                <Line play={play} height="0.8rem"/>
            </Box>
            <Volume type="range" step="0.01" min="0" max="1" value={volume} onChange={(a) => setVolume(a.target.value)}/>
        </>
    )
}

export default SoundBar
