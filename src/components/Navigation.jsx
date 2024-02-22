const Navigation = () => {
  return (
    <div className="flex justify-center text-black items-center h-screen">
      <ul className="text-2xl space-y-10 text-center">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/schedule">My Schedule</a>
        </li>
        <li>
          <a href="/login">Log in</a>
        </li>
        <li>
          <a href="#">Log out</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
