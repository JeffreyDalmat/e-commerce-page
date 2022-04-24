// == Import
import './app.scss';

import Header from 'src/components/Header';
import Content from 'src/components/Content';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}

// == Export
export default App;
