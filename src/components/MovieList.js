import MovieItem from "./MovieItem";

function MovieList({ tasks, toggleFavorite, emptyMessage }) {
  if (tasks.length === 0) {
    return (
      <p
        style={{
          textAlign: "center",
          padding: "30px",
        }}
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <section
      role="list"
      style={{
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {tasks.map((task) => (
        <MovieItem
          key={task.id}
          task={task}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </section>
  );
}

export default MovieList;
