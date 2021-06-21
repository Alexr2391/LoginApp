

export default function validateform(values) {
    let errors = {}
    if(!values.username.trim()){
        errors.username = 'Username Required'
    }

    if(!values.password.trim()) {
        errors.password = 'Password Required'
    } else if(values.password.length < 5) {
        errors.password = "Password must be 5 characters or more"
    }

    return errors
}