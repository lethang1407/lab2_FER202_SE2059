import { memo } from "react";

function MovieItem({ task, toggleFavorite }) {
  return (
    <div
      role="listitem"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          width: "400px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <input
          type="checkbox"
          aria-label={`Yêu thích ${task.title}`}
          checked={Boolean(task.isFavorite)}
          onChange={() => toggleFavorite(task.id)}
          style={{
            width: "18px",
            height: "18px",
            flexShrink: 0,
            cursor: "pointer",
          }}
        />
        <span style={{ fontSize: "16px" }}>{task.title} </span>
        <span>| {task.genre} </span>
        <span>| {task.year} </span>
        <span>| {task.rating} </span>
      </div>

      <button
        onClick={() => toggleFavorite(task.id)}
        style={{
          padding: "8px 15px",
          fontSize: "16px",
        }}
      >
        {task.isFavorite ? "Bỏ yêu thích" : "Yêu thích"}
      </button>
      <button
        onClick={() =>
          window.alert(
            `Movie Details\n--------------\nTitle: ${task.title}\nGenre: ${task.genre}\nYear: ${task.year}\nRating: ${task.rating}\nDirector: ${task.director}\nDuration: ${task.duration} minutes\n\nDescription: ${task.description}\n--------------`,
          )
        }
        style={{
          padding: "8px 15px",
          fontSize: "16px",
        }}
      >
        Chi tiết
      </button>
    </div>
  );
}

export default memo(MovieItem);
