import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technology from "./components/technology/Technology";
import type { Itech } from "./types/tech";

const techFetch = async ():Promise<Itech[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const techPromise = techFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading..........</h2>}>
        <Technology techPromise={techPromise} />
      </Suspense>
    </>
  )
}

export default App
