import blog from '../assets/blog-solid.svg'
import github from '../assets/github-brands-solid.svg'
import linkedin from '../assets/linkedin-brands-solid.svg'

const Header = () => {
  return (
    <div className="border border-black flex items-center justify-between px-[1.5rem]">
        <div className="left">
            <h1 className='text-[2.5rem]'>Dami-Oni</h1>
        </div>

        <div className="right flex justify-between items-center gap-10">
            <div className="menu">
                <ul className="flex gap-6 items-center justify-center">
                    <li className="">Home</li>
                    <li>About</li>
                    <li>Tech Stack</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="icons flex justify-center items-center gap-4">
                <img src={github} alt="github icon" width="18px" />
                <img src={linkedin} alt="linkedin icon" width="18px" />
                <img src={blog} alt="blog icon" width="18px" />
            </div>
        </div>
    </div>
  )
}

export default Header