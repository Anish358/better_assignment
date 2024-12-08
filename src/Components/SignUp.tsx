import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {SignupSchema, checkPasswordStrength} from "../utils/utils"
import '../App.css';

const SignUp: React.FC = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ strength: 0, category: 'Weak' });
    
    return (
      <div className="form-container">
      <h2>Create Your Account</h2>
      {signupSuccess && (
        <div className="success-message">
          Account Created Successfully! Welcome aboard.
        </div>
      )}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSignupSuccess(true);
            setSubmitting(false);
            resetForm();
            setTimeout(() => setSignupSuccess(false), 3000);
          }, 400);
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field 
                name="firstName" 
                type="text" 
                aria-label="First Name"
                aria-invalid={errors.firstName && touched.firstName}
              />
              <ErrorMessage 
                name="firstName" 
                component="div" 
                className="error-message" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field 
                name="lastName" 
                type="text" 
                aria-label="Last Name"
                aria-invalid={errors.lastName && touched.lastName}
              />
              <ErrorMessage 
                name="lastName" 
                component="div" 
                className="error-message" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Field 
                name="email" 
                type="email" 
                aria-label="Email"
                aria-invalid={errors.email && touched.email}
              />
              <ErrorMessage 
                name="email" 
                component="div" 
                className="error-message" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field 
                name="password" 
                type="password" 
                aria-label="Password"
                aria-invalid={errors.password && touched.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setPasswordStrength(checkPasswordStrength(e.target.value));
                }}
              />
              <div className={`password-strength password-strength-${passwordStrength.category.toLowerCase()}`}>
                {passwordStrength.category} Password
              </div>
              <ErrorMessage 
                name="password" 
                component="div" 
                className="error-message" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field 
                name="confirmPassword" 
                type="password" 
                aria-label="Confirm Password"
                aria-invalid={errors.confirmPassword && touched.confirmPassword}
              />
              <ErrorMessage 
                name="confirmPassword" 
                component="div" 
                className="error-message" 
              />
            </div>

            <button type="submit" className="submit-btn">
              Create Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
    );
  };

  export default SignUp