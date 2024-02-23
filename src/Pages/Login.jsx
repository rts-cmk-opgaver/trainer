import { useAuth } from "../Context/Auth";
import { useState } from "react";
import ReactLoading from "react-loading";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError("");
      if (!username || !password) {
        setError(alert("Please fill in username and password to continue"));
        setIsLoading(false);
        return;
      }

      const { token, userId } = await login(username, password);

      console.log("Token received in Login component:", token);
      console.log("UserId received in Login component:", userId);

      setIsLoggedIn(true);
    } catch (error) {
      setError("Invalid username or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main>
        <h1 className="text-[#F1C40E] mt-[74px] text-8xl font-bold">
          Believe
          <br />
          Yourself
        </h1>
        <div className="flex items-center mb-[61px]">
          <div className="bg-black h-1 w-8 mr-3"></div>
          <p className="font-bold text-3xl">Train like a pro</p>
        </div>

        <p className="text-2xl font-bold mb-[15px]">
          Log in with your credentials
        </p>
        <div>
          <input
            className="w-[335px] h-[50px] mb-[16px] rounded-full border pl-4 border-solid bg-[#FBFBFB]"
            type="email"
            placeholder="Enter your email..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-[335px] h-[50px] mb-[16px] rounded-full border pl-4 border-solid bg-[#FBFBFB]"
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoading ? (
            <div className="flex justify-center mr-10">
              <ReactLoading type="spin" color="#F1C40E" />
            </div>
          ) : (
            <button
              type="button"
              onClick={handleLogin}
              className="text-center font-bold items-center bg-[#F1C40E] w-[334px] h-[50px] rounded-full"
            >
              Log in
            </button>
          )}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </main>
    </>
  );
};

export default Login;
