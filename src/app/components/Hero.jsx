import { FaTelegram , FaGithub , FaLinkedin } from "react-icons/fa";


export default function Hero() {
  return (
      <div className="flex gap-x-3">
    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
      <FaTelegram className="rounded-full text-3xl text-white" />
    </a>
    <a href="https://github.com/seyedehsandev" target="_blank" rel="noopener noreferrer">
      <FaGithub className="rounded-full  text-3xl text-white" />
    </a>
    <a href="https://www.linkedin.com/in/seyed-ehsan-hosseini-91722b2a5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFMs53Q4HSQqfoaW8xJtJmA%3D%3D" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-3xl text-white"/>      
    </a>
      </div>
  );
}
