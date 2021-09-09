import { Route, Switch } from "react-router-dom";
import SongList from "./components/SongList";
import CreateSong from "./components/CreateSong";
import SongDetail from "./components/SongDetail";
function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={SongList} />
        <Route path="/songs/new" exact component={CreateSong} />
        <Route path="/songs/:id" component={SongDetail} />
      </Switch>
    </div>
  );
}

export default App;
