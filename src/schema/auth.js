import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password2: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const UpdateSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!'),
    city: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!'),
    country: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!'),
    walletAddress: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!'),
    bioText: Yup.string()
        .min(5, 'Too Short!'),
    password2: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email'),
});