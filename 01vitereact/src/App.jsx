import Chai from "./chai"
function App() {
  return (
    //we cant return multiple elements in jsx
    //so we use <> </> called fragements..
    <>
      <Chai/>
      <h1>This is second element wrapped in fragment</h1>
    </>
    
  )
}

export default App
