function Text(props){
  return(
    <div className="flex justify-centerw-[177px] h-[60px]">
      <h3 className="text-[22px] text-white text-center  tracking-[0.04em] leading-[26px]">{props.children}</h3>
    </div>
    
  )
}
function Card(props){
  return(
    <>
      <div className="flex justify-center items-end m-[23px] w-[177px] h-[256px] rounded-[30px] bg-[green] hover:border-4 border-[#54C5C9]">
        <Text>{props.children}</Text>
      </div>
    </>
  )
}

function Carousel(){
  return(
    <div className="flex justify-center items-center overflow-x-auto scroll-smooth  w-[1479px] h-[424px] bg-gradient-to-r from-[#001A3F] to-[#273EE2] left-[-19px] ">
      {"<"}
      <Card>DESTAQUE</Card>
      <Card>EVENTOS DA SEMANA</Card>
      <Card>PRÊMIO ECO</Card>
      <Card>NOTÍCIAS</Card>
      <Card>DESTAQUE 2</Card>

      {">"}
    </div>
  )
}

import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>
      <Carousel/>
    </>
    
  )
}
