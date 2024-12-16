import { useRef, useState } from "react"
import Button from "./button"
import { TiLocationArrow } from "react-icons/ti"

const Hero = () => {

    const [currentIndex, setcurrentIndex] = useState(1)
    const [hasClicked, sethasClicked] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [loadedVideos, setloadedVideos] = useState(0)

    const totalVideos=4
    const nextVdRef = useRef(null)

    const upcomingVideos =( currentIndex%totalVideos) + 1

    const handleMiniVdClick = () =>{
        sethasClicked(true)
        setcurrentIndex(upcomingVideos)
    }

    const handlevideoLoad = () =>{
        setloadedVideos(prev => prev + 1)
    }

    const getVideoSrc = (index)=> `videos/hero-${index}.mp4`


    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVdRef}
                                src={getVideoSrc(upcomingVideos)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handlevideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handlevideoLoad}
                    />
                    <video
                        src={getVideoSrc(currentIndex === totalVideos -1 ? 1: currentIndex)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-ccenter"

                    />
                </div>

                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                   L <b>C</b> S
                </h1>
                <div className="absolute left-4 top-0 z-40 size-full">
                    <div className="mt-2 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100 ">literal <br/>cultural society</h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">The Cultural Society <br/> NIT Rourkela</p>
                    </div>
                    <Button id="watch-trailer" title="Know More" leftIcon={<TiLocationArrow/>} containerClass="bg-yellow flex-center gap-1"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
