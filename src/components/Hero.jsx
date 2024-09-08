import DamiPic from '../assets/dami.png'

const Hero = () => {
  return (
    <div className="border border-black border-4 mt-[8rem] flex justify-between items-center border border-black px-[2rem]">
        <div className="left ">
            <h1>Hi 👋, <br /> My name is <span>Damilola Oni</span>. <br /> I build things for web</h1>
        </div>

        <div className="right">
            <div className="image-frame h-[12rem] w-[12rem] flex items-center justify-center rounded-[50%]" style={{backgroundImage: "linear-gradient(to bottom, brown, gray)"}}>
                <div className="image-frame-inside h-[11.3rem] w-[11.3rem] rounded-[50%] bg-cover" style={{backgroundImage: `url(${DamiPic})`}}>
                    {/* <img src="" alt="" />    */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero