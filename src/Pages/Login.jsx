const Login = () => {
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
        <div className="">
          <input
            className="w-[335px] h-[50px] mb-[16px] rounded-full border pl-4 border-solid bg-[#FBFBFB]"
            type="email"
            placeholder="Enter your email..."
          />
          <input
            className="w-[335px] h-[50px] mb-[16px] rounded-full border pl-4 border-solid bg-[#FBFBFB]"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="text-center font-bold items-center bg-[#F1C40E] w-[334px] h-[50px] rounded-full">
            Log in
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
