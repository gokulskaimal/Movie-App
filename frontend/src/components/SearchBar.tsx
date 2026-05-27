interface Props {
  value: string;

  onChange:
    (
      value: string
    ) => void;
}

function SearchBar({
  value,
  onChange
}: Props) {

  return (
    <div
      style={{
        marginBottom:
          "32px"
      }}
    >
      <input
        type="text"

        placeholder=
          "Search movies..."

        value={
          value
        }

        onChange={(e) =>
          onChange(
            e.target.value
          )
        }

        style={{
          width:
            "100%",

          padding:
            "18px 22px",

          fontSize:
            "16px",

          borderRadius:
            "16px",

          border:
            "1px solid #E5E7EB",

          outline:
            "none",

          background:
            "#ffffff",

          boxShadow:
            "0 4px 16px rgba(0,0,0,0.06)",

          transition:
            "all 0.2s ease",

          boxSizing:
            "border-box"
        }}
      />
    </div>
  );
}

export default SearchBar;