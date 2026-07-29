import AboutMe from "@/entities/AboutMe/AboutMe"
import style from "./style.module.css"

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.title}>
        <h1>Vlad.THK</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className={style.aboutMe}>
        <AboutMe/>
      </div>
    </div>
  )
}

export default Hero

