import React from 'react';
import styled from 'styled-components';

const ScoredStyled= styled.div`
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    width: 80px;
    small {
        font-weight: 700;
        color: #2A45C2;
        text-transform: uppercase;
        font-size: 10px;
    }

    p {
        color: #565468;
        font-size: 40px;
        margin: 0;
        font-weight: 700;
    }
`;


const Score = () => {
    return ( 
        <ScoredStyled>
            <small>Score</small>
            <p>12</p>
        </ScoredStyled>
     );
}
 
export default Score;