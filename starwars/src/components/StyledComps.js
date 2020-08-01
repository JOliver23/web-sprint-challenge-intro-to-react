import styled from 'styled-components';

export const GridDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 90vw;
    margin-left: 5vw;
`;

export const NameTag = styled.h2`
    color: #37C88D;
    background: black;
    font-weight: bolder;
`;

export const CardDiv = styled.div`
    background: rgb(155, 68, 155);
    width: 25vw;
    border: double .5rem #37C88D;
`;

export const RoundImg = styled.img`
    border-radius: 100%;
`;

export const Txter = styled.p`
    font-family: 'Baloo Bhaina 2', cursive;

    ${props => props.type ==="every" ? 'color: papayawhip; background: black; border: .1rem dotted #37C88D' : null}
    ${props => props.type === "other" ? 'border: .2rem double slategrey; background: linear-gradient(#37C88D, rgb(155, 68, 155)); font-size: large;' : null}
`;