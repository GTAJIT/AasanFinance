import { Children } from "react";
import { Outlet } from "react-router-dom";
import {Navbar, Footer, Container} from "./components/component";

export default function App(){
  return (
    <>
      <div className="bg-gradient-to-b from-[#35ffff] to-white p-2 flex flex-col justify-between min-h-screen">
      <Navbar/>
      <Container>
      <main className="flex flex-col items-center">
          <Outlet/>
      </main>
      </Container>
      <Footer/>
      </div>
    </>
  )
}

//daffff