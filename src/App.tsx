import Calendar from "./components/Calendar"
import Profile from "./components/Profile"
import Repos from "./components/Repos"

function App() {
  return (
    <div data-theme="night" className="h-full">
      <Profile></Profile>
      <Calendar></Calendar>
      <Repos></Repos>
    </div>
  )
}

export default App
