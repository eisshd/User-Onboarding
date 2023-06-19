import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
    email: yup
        .string()
        .email('Not a vaild email')
        .required('is required'),
    password: yup
        .string()
        .required('is required')
        .min(8, 'Must be 8 charaters long')
    tos: yup
        .boolean()
        .oneOf([true])
    


})

export default formSchema