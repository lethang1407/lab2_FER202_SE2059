function MovieFilters({
    searchTerm,
    onSearchChange,
    genres,
    genreFilter,
    onGenreFilterChange,
    ratingSort,
    onRatingSortChange,
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
                maxWidth: "800px",
                margin: "0 auto",
                padding: "20px",
            }}
        >
            <input
                type="search"
                placeholder="Tìm tên phim..."
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
                style={{
                    flex: "1 1 260px",
                    minWidth: "0",
                    padding: "10px",
                    fontSize: "16px",
                }}
            />
            <select
                aria-label="Lọc theo thể loại"
                value={genreFilter}
                onChange={(event) => onGenreFilterChange(event.target.value)}
                style={{
                    flex: "0 1 180px",
                    minWidth: "0",
                    padding: "10px",
                    fontSize: "16px",
                }}
            >
                <option value="all">Tất cả thể loại</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
            <select
                aria-label="Sắp xếp theo rating"
                value={ratingSort}
                onChange={(event) => onRatingSortChange(event.target.value)}
                style={{
                    flex: "0 1 180px",
                    minWidth: "0",
                    padding: "10px",
                    fontSize: "16px",
                }}
            >
                <option value="none">Mặc định</option>
                <option value="ascending">Low - High</option>
                <option value="descending">High - Low</option>
            </select>
        </div>
    );
}

export default MovieFilters;