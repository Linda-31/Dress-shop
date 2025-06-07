import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register,handleSubmit,formState: { errors },watch,} = useForm();

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    alert(`Account created for: ${data.fullName}`);
  };

  const password = watch('password');

  return (
   
        <div className="container signup-container d-flex justify-content-end align-items-center">
      <div className="card p-4 shadow signup-card">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && (
              <div className="invalid-feedback">{errors.fullName.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
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
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
         <div className="mt-3 text-center">
      Already have an account?{' '}
      <a href="/login" className="text-primary">
        Login
      </a>
    </div>
      </div>
    </div>
    
  );
}

export default Signup;
