import { ThemeProvider } from './context/ThemeContext';

import Content from './components/Content';

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
