function Card(){
  return(
    <>
      <div className="m-[23px] w-[177px] h-[256px] rounded-[30px] bg-[green]">
      </div>
    </>
  )
}

function Carousel(){
  return(
    <div className="flex justify-center items-center overflow-x-auto scroll-smooth  w-[1479px] h-[424px] bg-gradient-to-r from-[#001A3F] to-[#273EE2] left-[-19px] ">
      {"<"}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      {">"}
    </div>
  )
}
export default function Home() {
  return (
      <Carousel/>
  )
}
