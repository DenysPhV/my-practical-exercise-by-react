import PaintingList from './components/PaintingList';

import paintings from './paintings.json';

function App() {
  return (
    <div>
      <PaintingList items={paintings} />
    </div>
  );
}

export default App;
