import "../Header/Header.css";
export default function Header() {
  return (
    <>
      <div>
        <header className="row">
          <div className="header">
            <img
              alt="Logo"
              className="logo-style"
              src="https://www.botshot.in/logo/botshot_logo.png"
            />
            <div className="header__burgermenu">
              <img
                alt="menu"
                src="https://th.bing.com/th/id/OIP.aY7m5Dxx_84nmndzwNFk7gAAAA?w=180&h=180&c=7&o=5&dpr=1.25&pid=1.7"
              />
            </div>
            <ul>
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">Our Product</a>
              </li>
              <li>
                <a href="/#">Integration</a>
              </li>
              <li>
                <a href="/#">Pricing</a>
              </li>
            </ul>
            {/* <button>SCHEDULE A DEMO</button> */}
          </div>
        </header>
      </div>
    </>
  );
}
