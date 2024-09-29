import ProjectCard from "../components/ProjectCard"

function page() {

  return (

    <div className="flex flex-wrap gap-10 justify-center p-3 md:p-5">
        
         <ProjectCard title={"Weather App"} img={"https://weather-woad-sigma.vercel.app/images/clouds.png"} desc={"This is the best weahter app of all the world"} liveLink={"https://weather-woad-sigma.vercel.app/"} sourceLink={"https://github.com/seyedehsandev/weather/tree/master"}/>
         <ProjectCard title={"Personal Webpage"} img={"https://personal-webpage-eta.vercel.app/profile.png"} desc={"This is the best weahter app of all the world"} liveLink={"https://personal-webpage-eta.vercel.app/"} sourceLink={"https://github.com/seyedehsandev/personal-webpage/tree/main"}/>


    </div>
   


   
    
  )
}

export default page