import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Header({ darkMode, toggleTheme }) {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "30px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h1>Mini Movie Manager</h1>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        {darkMode ? (
          <>
            <CiLight />
            Light
          </>
        ) : (
          <>
            <MdDarkMode />
            Dark
          </>
        )}
      </button>
    </header>
  );
}

export default Header;