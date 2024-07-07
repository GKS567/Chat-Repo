import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"

const App = () => {
  return (
    <div className='container'>
      <Chat />
      <List />
      <Detail />
    </div>
  )
}

export default App