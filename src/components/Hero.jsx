import DamiPic from '../assets/dami.png'

const Hero = () => {
  return (
    <div className="my-[8rem] flex justify-between items-center px-[2rem]">
        <div className="left ">
            <h1 className='text-[2rem] font-bold'>Hi 👋, <br /> My name is <br /><span>Damilola Oni</span>. <br /> I build things for web</h1>
        </div>

        <div className="right">
            <div className="image-frame h-[14rem] w-[14rem] flex items-center justify-center rounded-[50%]" style={{backgroundImage: "linear-gradient(to bottom, brown, gray)"}}>
                <div className="image-frame-inside h-[13.3rem] w-[13.3rem] rounded-[50%] bg-cover" style={{backgroundImage: `url(${DamiPic})`}}>
                    {/* <img src="" alt="" />    */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero