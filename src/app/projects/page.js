import ProjectCard from "../components/ProjectCard";

function page() {
  return (
    <div className="flex flex-wrap gap-10 justify-center p-3 md:p-5">
      <ProjectCard
        title={"Weather App"}
        img={"https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?w=1500&quality=82&strip=all&ssl=1"}
        desc={"A weather app providing real-time weather updates for any location."}
        liveLink={"https://weather-woad-sigma.vercel.app/"}
        sourceLink={"https://github.com/seyedehsandev/weather/tree/master"}
      />
      <ProjectCard
        title={"Personal Webpage"}
        img={"https://cdn.prod.website-files.com/62c5836076839ad95e36215d/64fb2b64316862df3d2e099a_rcQYosTUaQ6hiJSAk7JphBXJCcZpPSAnq6u8U_3pnj0UVcHM5niGdGNBZ625bnZmRDTg4UQFOjd8tuczIfNSZ7JQeRBtnY4NHvGyGjRBe_DVE4QiDsVy9vcllRT7B1Ut7wx9CBDr945F26Um1hF4xM4.png"}
        desc={"My personal portfolio showcasing my skills and projects."}
        liveLink={"https://personal-webpage-eta.vercel.app/"}
        sourceLink={"https://github.com/seyedehsandev/personal-webpage/tree/main"}
      />
      <ProjectCard
        title={"Shopping Website"}
        img={"https://s3-alpha.figma.com/hub/file/2049257694/00cb45c2-2208-4ac3-be39-fc5684d481fb-cover.png"}
        desc={"An e-commerce platform with product listings and shopping cart."}
        liveLink={"https://ecommerce-2-fawn.vercel.app/"}
        sourceLink={"https://github.com/seyedehsandev/ecommerce-2/tree/main"}
      />
      <ProjectCard
        title={"Restaurant Menu"}
        img={"https://s.tmimgcdn.com/scr/800x500/255800/restfood-restaurant-one-page-html5-website-template_255812-original.png"}
        desc={"A digital menu showcasing restaurant dishes with descriptions."}
        liveLink={"https://sample-menu.vercel.app"}
        sourceLink={"https://github.com/seyedehsandev/sample-menu/tree/main"}
      />
    </div>
  );
}

export default page;
