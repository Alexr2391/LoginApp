import React, { useRef, useState} from 'react'
import {FormSection, FormImage, FormContainer , FormLayout, FormTitle, ErrorSpan} from './styles/Styles'
import useControl from './useControl'
import InputRef from './partials/Inputs'
import validateform from './validateform'
import { FaUserAlt} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri"

const Form = ({submitted}) => {

    const [show, setShow] = useState('password')
    const tickBox = useRef();
    
    const {handleChange,handleSubmit, values, errors} = useControl(submitted, validateform)

    return (
        <FormSection>
            <FormContainer>
                <FormLayout
                    onSubmit={handleSubmit}
                >
                    <FormTitle>Welcome to Log App</FormTitle>
                    <InputRef 
                        icon={<FaUserAlt style={{fontSize: '2rem', color: '#EF5407'}}/>}
                        name="username" 
                        type="text"
                        placeholder="@username"
                        onChange={handleChange}
                        value={values.username}
                        />
                        {errors.username 
                        && <ErrorSpan
                            initial= {{y: -10, opacity: 0}}
                            animate ={{y: 0, opacity: 1}}
                            exit = {{y: -10, opacity: 0}}
                            transition={{ duration: .1 }}
                            >
                            {errors.username}
                        </ErrorSpan>
                        }
                    <InputRef 
                        icon={<RiLockPasswordFill style={{fontSize: '2rem', color: '#EF5407'}}/>}
                        name="password" 
                        type={show}
                        placeholder="password"
                        onChange={handleChange}
                        value={values.password}

                        />
                        {errors.password 
                        && <ErrorSpan
                            initial= {{y: -10, opacity: 0}}
                            animate ={{y: 0, opacity: 1}}
                            exit = {{y: -10, opacity: 0}}
                            transition={{ duration: .1 }}
                            >{errors.password}
                            </ErrorSpan>}
                    <InputRef 
                        id="tickbox"
  
                        name="tickbox" 
                        type="checkbox"
                        ref={tickBox}
                        onClick={() => tickBox.current.checked 
                            ? setShow("text")
                            : setShow("password")}
                        >
                            <span>Show password</span>
                        </InputRef>
                        {errors.submit 
                        && <ErrorSpan
                            initial= {{y: -10, opacity: 0}}
                            animate ={{y: 0, opacity: 1}}
                            exit = {{y: -10, opacity: 0}}
                            transition={{ duration: .1 }}
                            >
                                {errors.submit}
                            </ErrorSpan>}
                    <InputRef 
                    id="submit"
                        type="submit"
                        value="Submit"
                        />
                </ FormLayout>
                </FormContainer>
            <FormImage />
        </FormSection>
    )
}

export default Form
