import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adminlogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin-login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        navigate("/dashboard"); // SUCCESS
      } else {
        setError("Invalid admin credentials");
      }
    } catch (err) {
      setError("Backend not running");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[350px] shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl  w;lg-[300px] bg-blue-700  h-[300px]">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="userName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="ms-input mt-20 bg-white m-4 w-[80%] pl-[10px] p-1 border-[1px] border-gray-400 focus:border-blue-600 focus:outline-none"
          />

          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ms-input bg-white w-[100%] pl-[10px] p-1 border-[1px] border-gray-400 focus:border-blue-600 focus:outline-none"
          />

          {error && (
            <p className="text-red-400 text-center text-sm mt-1">{error}</p>
          )}

          <button className="h-8 pb-8 text-white w-[200px] bg-red-600 border-blue-700 rounded-lg">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
