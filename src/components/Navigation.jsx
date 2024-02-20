const Navigation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ul className="text-2xl space-y-10 text-center">
        <li className="">
          <a href="/home">Home</a>
        </li>
        <li className="/search">
          <a href="#">Search</a>
        </li>
        <li className="/schedule">
          <a href="#">My Schedule</a>
        </li>
        <li className="/login">
          <a href="#">Log in</a>
        </li>
        <li className="">
          <a href="#">Log out</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
