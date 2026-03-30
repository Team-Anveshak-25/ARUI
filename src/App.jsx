import { NetworkStatus } from "./components/NetworkStatus"
import { RoverInfo } from "./components/RoverInfo"
import { Title } from "./components/Title"

function App() {
  return (
    <div className="bg-stone-950">
      <Title />
      <div className="flex flex-row gap-2 mt-4">
        <NetworkStatus />
        <RoverInfo />
      </div>
    </div>
  )
}

export default App