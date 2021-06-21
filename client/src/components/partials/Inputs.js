import React from 'react'
import { Fieldset, InputContainer, Inputs } from '../styles/Styles'

const Input = ({
    children,
    icon,type, 
    name, title, 
    placeholder, 
    value, onClick, 
    onChange, 
    id, 
    }, 
    ref) => {

    return (
        <Fieldset id={id}>
            {title && <label htmlFor={name}>{title}</label>}
                <InputContainer>
                    {icon}
                    <Inputs
                    
                        ref={ref}
                        type={type} 
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onClick={onClick}
                        onChange={onChange}

                    />
                    {children}
                </InputContainer>
        </Fieldset>
    )
}


const InputRef = React.forwardRef(Input)

export default InputRef;
