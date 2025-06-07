import React from 'react';
import "../Styles/style.css";
import { useForm } from 'react-hook-form';

function Login() {
  const { register,handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert(`Welcome, ${data.email}!`);
  };

  return (
        
      <div className="container login-container d-flex justify-content-end align-items-center">
      <div className="card p-4 shadow login-card">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Enter email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
        <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="rememberMe"
          {...register('rememberMe')}
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
      Don't you have an account?{' '}
      <a href="/signup" className="text-primary">
        Signup
      </a>
    </div>
      </div>
    </div>
         
    
  );
}

export default Login;

