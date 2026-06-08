function Loader() {

  return (
    <div
      style={{
        display:
          "grid",

        gridTemplateColumns:
          "repeat(auto-fill, minmax(240px, 260px))",

        justifyContent:
          "center",

        gap:
          "20px",

        marginTop:
          "20px"
      }}
    >
      {Array.from({
        length: 10
      }).map(
        (_, index) => (
          <div
            key={index}

            style={{
              background:
                "#ffffff",

              borderRadius:
                "22px",

              overflow:
                "hidden",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)",

              animation:
                "pulse 1.5s infinite ease-in-out"
            }}
          >
            <div
              style={{
                width:
                  "100%",

                height:
                  "360px",

                background:
                  "#e5e7eb"
              }}
            />

            <div
              style={{
                padding:
                  "18px"
              }}
            >
              <div
                style={{
                  height:
                    "20px",

                  width:
                    "85%",

                  borderRadius:
                    "10px",

                  background:
                    "#e5e7eb",

                  marginBottom:
                    "12px"
                }}
              />

              <div
                style={{
                  height:
                    "14px",

                  width:
                    "40%",

                  borderRadius:
                    "10px",

                  background:
                    "#e5e7eb"
                }}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Loader;