import GlobalStyle from './components/globalStyles'
import Header from './components/Header'
import FavoriteBar from './components/FavoriteBar'
import PokeList from './components/PokeList/PokeList'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FavoriteBar />
      <PokeList />
    </>
  );
}

export default App;