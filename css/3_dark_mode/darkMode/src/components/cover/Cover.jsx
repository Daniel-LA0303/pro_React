import React from 'react'
import { 
    CoverContainer,
    CoverWrapper,
    InfoContainer,
    CustomButton

} from './Cover.elements';
import {BsSun, BsMoon} from "react-icons/bs"

const Cover = ({theme}) => {

    let icon = theme === 'light' ? <BsSun/> : <BsMoon />
    let leyenda = theme === 'light' ? <h1>Light Mode</h1> : <h1>Dark Mode</h1>

    return (  
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        {icon}
                        {leyenda}
                        <CustomButton>Get Started</CustomButton>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
}
 
export default Cover;