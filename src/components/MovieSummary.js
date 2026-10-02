function MovieSummary({ totalCount, favoriteCount, visibleCount }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        textAlign: "center",
        padding: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <span>Tổng: {totalCount}</span>
      <span aria-hidden="true">|</span>
      <span>Yêu thích: {favoriteCount}</span>
      <span aria-hidden="true">|</span>
      <span>Đang hiển thị: {visibleCount}</span>
    </div>
  );
}

export default MovieSummary;