import ProjectCard from "../components/ProjectCard"

function page() {

  return (

    <div className="flex flex-wrap gap-10 justify-center p-3 md:p-5">
        
         <ProjectCard title={"Weather App"} img={"/1.jpg"} desc={"This is the best weahter app of all the world"} liveLink={"sourceLinkhttps://weather-woad-sigma.vercel.app/"} sourceLink={"https://github.com/seyedehsandev/weather/tree/master"}/>
         <ProjectCard title={"Weather App"} img={"/1.jpg"} desc={"This is the best weahter app of all the world"} liveLink={"sourceLinkhttps://weather-woad-sigma.vercel.app/"} sourceLink={"https://github.com/seyedehsandev/weather/tree/master"}/>


    </div>
   


   
    
  )
}

export default page