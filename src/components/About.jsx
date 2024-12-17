

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
        <div className="realtice mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase  md:text-[10px]">Welcome to LCS</h2>
            <div className="mt-5 text-center text-4xl uppercase leading-0.8 md:text-[6rem]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </div>

            <div className="about-subtext">
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img src="img/about.webg" alt="Background"
                className="absolute left-0 top-0 size-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default About
