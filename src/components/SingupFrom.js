import { useState, useRef } from 'react';

const SignupForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length < 1) {
      setError('Name must have at least one character');
      setName('');
      nameRef.current.focus();
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      setEmail('');
      emailRef.current.focus();
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setPassword('');
      passwordRef.current.focus();
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setConfirmPassword('');
      setPassword('');
      passwordRef.current.focus();
      return;
    }
    console.log('Submitted form data:', {
      name,
      email,
      password,
      confirmPassword,
    });

    setError('');
    setTimeout(() => {
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }, 3000);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
          className="form-control"
          id="nameInput"
          placeholder="Please enter your name..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          className="form-control"
          id="emailInput"
          placeholder="Plese enter your email..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password:
        </label>
        <input
          type="password"
          value={password}
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
          className="form-control"
          id="passwordInput"
          placeholder="Your password must have at least 6 characters..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPasswordInput" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          value={confirmPassword}
          minLength={6}
          onChange={(e) => setConfirmPassword(e.target.value)}
          ref={confirmPasswordRef}
          className="form-control"
          id="confirmPasswordInput"
          placeholder="Please repeat your password..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {error && (
        <div className="mt-2 text-sm font-medium text-danger">{error}</div>
      )}
    </form>
  );
};

export default SignupForm;
