import {useState, useEffect} from 'react'
import Axios from 'axios'

const useControl = (callback,validateform) => {


    const [values, setValues] = useState({
        username: '', 
        password: ''
    })

    const [errors, setErrors] = useState({})

    const [submitted, setSubmitted] = useState(false)


    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values, 
            [name] : value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrors(validateform(values))
        setSubmitted(true)
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submitted) {

           (async() => { const {data} = await Axios({
                url : '/api',
                method: 'post', 
                data: {
                    ...values
                }
            })

            if(data.isSuccess) return callback(values.username)

            return setErrors({
                ...errors,
                submit : data.message
            })
        })()
        }
    }, [errors, callback, submitted, values])

    return {handleChange, handleSubmit, values, errors}
}

export default useControl
