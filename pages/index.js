function Card(){
  return(
    <>
      <div className="flex-none m-[23px] w-[177px] h-[256px] rounded-[30px] bg-[green]">
      </div>
    </>
  )
}

function Carousel(){
  return(
    <div className="flex overflow-x-auto scroll-smooth justify-center content-center w-[1479px] h-[424px] bg-gradient-to-r from-[#001A3F] to-[#273EE2] left-[-19px] ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
export default function Home() {
  return (
      <Carousel/>
  )
}
