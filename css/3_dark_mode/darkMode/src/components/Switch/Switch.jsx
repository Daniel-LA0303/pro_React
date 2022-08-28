import React, { useState } from 'react';
import { SwitchBGC, SwitchContainer, SwitchWrapper, ButtonSwitch } from './SwitchElement';


const Switch = ({
    theme,
    setTheme
}) => {

    const [position, setPosition] = useState(false);

    const changeMode= () => {
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
            changePos();
        }
    }

    const changePos = () => {
        setPosition(!position);
    }
    
    return (  
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch
                            onClick={() => changeMode()}
                            position={position}
                        ></ButtonSwitch>
                    </SwitchBGC>
                </SwitchWrapper>

            </SwitchContainer>
        </>

    );
}
 
export default Switch;