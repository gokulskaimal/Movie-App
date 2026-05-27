import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        padding: "18px 24px",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "32px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#111827"
        }}
      >
        🎬 Movie App
      </h2>

      <div
        style={{
          display: "flex",
          gap: "16px"
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            padding:
              "10px 18px",

            borderRadius:
              "10px",

            background:
              isActive
                ? "#2563eb"
                : "transparent",

            color:
              isActive
                ? "#fff"
                : "#374151",

            fontWeight:
              "600",

            transition:
              "0.2s ease"
          })}
        >
          Search
        </NavLink>

        <NavLink
          to="/favorites"
          style={({ isActive }) => ({
            padding:
              "10px 18px",

            borderRadius:
              "10px",

            background:
              isActive
                ? "#2563eb"
                : "transparent",

            color:
              isActive
                ? "#fff"
                : "#374151",

            fontWeight:
              "600",

            transition:
              "0.2s ease"
          })}
        >
          ❤️ Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;