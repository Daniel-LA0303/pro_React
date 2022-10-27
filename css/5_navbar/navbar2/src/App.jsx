
import Button from "./components/Button"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <section
      className=" h-screen bg-cover md:bg-top bg-center"
    >
      <NavBar />
      <div
        className="flex flex-col justify-center text-center items-center"
      >
        <h2 className="  text-2xl font-medium">Fashion Tips</h2>
        <h1 className="md:text-5xl text-3xl  font-semibold py-5">
          Items every woman should have
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
  )
}

export default App
