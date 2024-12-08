import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginSchema } from '../utils/utils';
import '../App.css';


// Login Form Component
const Login: React.FC = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

    
    return (
      <div className="form-container">
      <h2>Welcome Back</h2>
      {loginSuccess && (
        <div className="success-message">
          Login Successful! Redirecting to dashboard.
        </div>
      )}
      <Formik
        initialValues={{
          email: localStorage.getItem('rememberedEmail') || '',
          password: '',
          rememberMe: false
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            if (rememberMe) {
              localStorage.setItem('rememberedEmail', values.email);
            } else {
              localStorage.removeItem('rememberedEmail');
            }
            setLoginSuccess(true);
            setSubmitting(false);
            resetForm();
            setTimeout(() => setLoginSuccess(false), 3000);
          }, 400);
          
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
              />
                <ErrorMessage 
                  name="password" 
                  component="div" 
                  className="error-message" 
                />
              </div>
  
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  aria-label="Remember Me"
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
  
              <button type="submit" className="submit-btn">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  export default Login;