import {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from "react";

import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import Header from "./Header";
import MovieSummary from "./MovieSummary";
import MovieFilters from "./MovieFilters";

import { ThemeContext } from "../contexts/ThemeContext";
import useLocalStorage from "../hooks/useLocalStorage";
import movies from "../data/movies";
import taskReducer from "../reducers/taskReducer";

function Movie() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const [savedTasks, setSavedTasks] = useLocalStorage("tasks", movies);
    const [tasks, dispatch] = useReducer(taskReducer, savedTasks);
    const [searchTerm, setSearchTerm] = useState("");
    const [genreFilter, setGenreFilter] = useState("all");
    const [ratingSort, setRatingSort] = useState("none");

    useEffect(() => {
        setSavedTasks(tasks);
    }, [tasks, setSavedTasks]);

    const favoriteCount = useMemo(() => {
        return tasks.filter((task) => task.isFavorite).length;
    }, [tasks]);
    const genres = useMemo(() => {
        return [...new Set(tasks.map((task) => task.genre).filter(Boolean))].sort();
    }, [tasks]);
    const filteredTasks = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return tasks.filter((task) => {
            const matchesSearch = task.title.toLowerCase().includes(normalizedSearch);
            const matchesGenre = genreFilter === "all" || task.genre === genreFilter;

            return matchesSearch && matchesGenre;
        });
    }, [tasks, searchTerm, genreFilter]);
    const sortedTasks = useMemo(() => {
        if (ratingSort === "none") {
            return filteredTasks;
        }

        return [...filteredTasks].sort((first, second) =>
            ratingSort === "ascending"
                ? first.rating - second.rating
                : second.rating - first.rating,
        );
    }, [filteredTasks, ratingSort]);
    const emptyMessage =
        searchTerm.trim() ||
        genreFilter !== "all"
            ? "Không tìm thấy phim."
            : "Chưa có phim.";

    const addTask = useCallback((title) => {
        dispatch({
            type: "ADD_TASK",
            payload: title,
        });
    }, []);

    const toggleFavorite = useCallback((id) => {
        dispatch({
            type: "TOGGLE_FAVORITE",
            payload: id,
        });
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: darkMode ? "#222" : "#f5f5f5",
                color: darkMode ? "white" : "black",
            }}
        >
            <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            <MovieFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                genres={genres}
                genreFilter={genreFilter}
                onGenreFilterChange={setGenreFilter}
                ratingSort={ratingSort}
                onRatingSortChange={setRatingSort}
            />
            <MovieSummary
                totalCount={tasks.length}
                favoriteCount={favoriteCount}
                visibleCount={filteredTasks.length}
            />
            <MovieList
                tasks={sortedTasks}
                toggleFavorite={toggleFavorite}
                emptyMessage={emptyMessage}
            />
        </div>
    );
}

export default Movie;