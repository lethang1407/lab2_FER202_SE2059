import TodoApp from "./components/TodoApp";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <TodoApp />
    </ThemeProvider>
  );
}

export default App;
