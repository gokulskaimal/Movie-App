interface Props {
  currentPage: number;
  totalPages: number;

  onPageChange: (
    page: number
  ) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: Props) {

  const getPages =
    () => {

      const pages = [];

      const start =
        Math.max(
          1,
          currentPage - 2
        );

      const end =
        Math.min(
          totalPages,
          currentPage + 2
        );

      for (
        let i = start;
        i <= end;
        i++
      ) {
        pages.push(i);
      }

      return pages;
    };

  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        gap: "12px",
        marginTop: "40px",
        flexWrap: "wrap"
      }}
    >
      <button
        disabled={
          currentPage === 1
        }

        onClick={() =>
          onPageChange(
            currentPage - 1
          )
        }

        style={{
          padding:
            "12px 18px",

          border:
            "none",

          borderRadius:
            "14px",

          background:
            "#e5e7eb",

          cursor:
            currentPage === 1
              ? "not-allowed"
              : "pointer",

          opacity:
            currentPage === 1
              ? 0.5
              : 1,

          fontWeight:
            "600"
        }}
      >
        ← Prev
      </button>

      {getPages().map(
        (page) => (
          <button
            key={page}

            onClick={() =>
              onPageChange(
                page
              )
            }

            style={{
              width: "48px",
              height: "48px",

              border:
                "none",

              borderRadius:
                "14px",

              cursor:
                "pointer",

              fontWeight:
                "700",

              fontSize:
                "16px",

              background:
                currentPage ===
                page
                  ? "#2563eb"
                  : "#fff",

              color:
                currentPage ===
                page
                  ? "#fff"
                  : "#111827",

              boxShadow:
                currentPage ===
                page
                  ? "0 8px 20px rgba(37,99,235,0.35)"
                  : "0 4px 10px rgba(0,0,0,0.08)"
            }}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={
          currentPage ===
          totalPages
        }

        onClick={() =>
          onPageChange(
            currentPage + 1
          )
        }

        style={{
          padding:
            "12px 18px",

          border:
            "none",

          borderRadius:
            "14px",

          background:
            "#e5e7eb",

          cursor:
            currentPage ===
            totalPages
              ? "not-allowed"
              : "pointer",

          opacity:
            currentPage ===
            totalPages
              ? 0.5
              : 1,

          fontWeight:
            "600"
        }}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;