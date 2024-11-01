import Image from "next/image";

export default function Home () {
  return (

     <div>
      <nav className="flex bg-black w-full justify-between items-center p-4">
      <h1 className="bg-white h-10 w-20 flex items-center justify-center text-center">My Web</h1>
      
      <h1 className="bg-purple-400 space-x-10  h-10 w-10 flex items-center justify-between text-center"></h1>


      <div className="flex w-full justify-end align-end">

        <ul className="bg-blue-600 h-10 w-10 align-end"></ul>

        <ul className="bg-yellow-400 h-10 w-10"></ul>

        <ul className="bg-pink-400 h-10 w-10"></ul>

        <ul className="bg-green-200 h-10 w-10"></ul>

        <ul className="bg-blue-400 h-10 w-10"></ul>

       </div>

      </nav>
      <br></br>
      <br></br>

          <div className="flex space-x-6 px-3 w-full justify-between">
            <h1 className="bg-pink-400 h-20 w-1/2"></h1>
            <h1 className="bg-green-500 h-20 w-1/2"></h1>
            <h1 className="bg-purple-500 h-20 w-1/2"></h1>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <div className="flex space-x-10 px-4 w-full justify-between">
          <h1 className="bg-gray-400 h-40 w-1/2"></h1>
          <h1 className="bg-black h-40 w-1/2"></h1>
          </div>
        <br></br>
        <br></br>

        <footer>
          <h1 className="bg-black text-white font-bold align-right justify-right text-right h-10 w-full">Made By Hira Imtiaz</h1>
          </footer>
   </div>
          
  )
}
