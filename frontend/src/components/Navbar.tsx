import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        padding: "18px 24px 0 24px", // Removed bottom padding for tabs
        borderRadius: "22px 22px 0 0", // Squared off the bottom corners
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "32px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        borderBottom: "2px solid #e5e7eb" // A subtle line for tabs to sit on
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "18px"
        }}
      >
        🎬 Movie App
      </h2>

      <div
        style={{
          display: "flex",
          gap: "24px" // More space between tabs
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            padding: "10px 18px",
            color: isActive ? "#2563eb" : "#6b7280",
            fontWeight: isActive ? "700" : "500",
            borderBottom: isActive ? "3px solid #2563eb" : "3px solid transparent",
            marginBottom: "-2px", // Pulls the border down to overlap the container's border
            textDecoration: "none",
            transition: "0.2s ease"
          })}
        >
          Search
        </NavLink>

        <NavLink
          to="/favorites"
          style={({ isActive }) => ({
            padding: "10px 18px",
            color: isActive ? "#e11d48" : "#6b7280", // Slightly reddish for favorites
            fontWeight: isActive ? "700" : "500",
            borderBottom: isActive ? "3px solid #e11d48" : "3px solid transparent",
            marginBottom: "-2px",
            textDecoration: "none",
            transition: "0.2s ease"
          })}
        >
          ❤️ Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
