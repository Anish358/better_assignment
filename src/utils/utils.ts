
import * as Yup from 'yup';

// Password Strength Checker
export const checkPasswordStrength = (password: string) => {
  let strength = 0;
  let category = 'Weak';

  if (password.length >= 8) strength++;
  if (password.match(/[a-z]+/)) strength++;
  if (password.match(/[A-Z]+/)) strength++;
  if (password.match(/[0-9]+/)) strength++;
  if (password.match(/[$@#&!]+/)) strength++;

  if (strength <= 2) {
    category = 'Weak';
  } else if (strength <= 4) {
    category = 'Medium';
  } else {
    category = 'Strong';
  }

  return { strength, category };
};


  export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First Name is required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must include uppercase, lowercase, number, and special character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required')
  });

  export  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  });