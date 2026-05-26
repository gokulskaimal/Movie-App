interface Props {
  currentPage: number;
  totalPages: number;

  onPageChange:
    (
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

      const maxPages =
        Math.min(
          totalPages,
          5
        );

      return Array.from(
        {
          length:
            maxPages
        },
        (_, index) =>
          index + 1
      );
    };

  return (
    <div
      style={{
        display:
          "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        gap:
          "10px",

        marginTop:
          "30px"
      }}
    >
      <button
        disabled={
          currentPage ===
          1
        }

        onClick={() =>
          onPageChange(
            currentPage - 1
          )
        }
      >
        Prev
      </button>

      {getPages()
        .map(
          (page) => (
            <button
              key={page}

              onClick={() =>
                onPageChange(
                  page
                )
              }

              style={{
                fontWeight:
                  currentPage ===
                  page
                    ? "bold"
                    : "normal"
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
      >
        Next
      </button>
    </div>
  );
}

export default
Pagination;