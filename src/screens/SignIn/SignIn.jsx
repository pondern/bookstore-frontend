import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();

    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/grid");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;

  return (
    <div className="pageContainer">
    <div className="form-container">
      <h3>Sign In</h3>
      <form onSubmit={onSignIn}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {renderError()}
        <a href="/users/sign-up">Create Account</a>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
