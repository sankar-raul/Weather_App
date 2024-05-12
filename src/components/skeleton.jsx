import react from "react"
import "./stylesheets/skeleton.css"
import "./stylesheets/sectionStyle.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Section1Skeleton({className}) {
    const Load = components[className]
    return (
        <>
         <div className={`${className} skeleton`}>
            <Load />
         </div>
        </>
    )
}
function Section1() {
    return (
        <>
        <div className="cityName">
               <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"60%"} height={25}/>
               <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"30%"} height={25}/>
                <p className="date">
                <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"45%"} height={17}/>
                </p>
            </div>
            <div className="weather-main" style={{gap: "10px"}}>
                <div className="weather-icon" style={{position: "relative"}}>
                <Skeleton style={{position: "absolute"}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"100%"} height={"100%"}/>
                    <img src="/src/components/componentAssets/weather/sun-cloud.png" className="icon- skeleton temp-icon" alt="&nbsp; ok"/>
                </div>
                <div className="temperature">
                    <p className="temp">
                    <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"30%"} height={"55%"} inline={true}/>
                        <sup className="tf"><sup>
                            &nbsp;
                            <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"30px"} height={"55%"} inline={true}/>
                            </sup>
                            </sup></p>
                    <p className="description">
                    <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"50%"} height={"25px"} inline={true}/>
                    </p>
                </div>
                </div>
                <Weatherbox />
        </>
    )
}
function Section2() {
    return (
        <>
        <p>skeleton 2</p>
        </>
    )
}
function Section3() {
    return (
        <>
        <p>skeleton 3</p>
        </>
    )
}
function Weatherbox() {
    return (
        <div className="weatherbox skeleton">
        <div className="infos" style={{position: "relative"}}>
        <Skeleton style={{position: "absolute"}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"50px"} height={"55%"} inline={true}/>
            <img src='/src/components/componentAssets/weather/pressure.png' alt="air pressure" className="icon temp-icon" />
            <p className="value"></p>
            <p className="name">&nbsp;</p>
        </div>
        <div className="infos" style={{position: "relative"}}>
        <Skeleton style={{position: "absolute"}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"50px"} height={"55%"} inline={true}/>
        <img src='/src/components/componentAssets/weather/wind.png' alt="wind speed" className="icon temp-icon" />
            <p className="value">&nbsp;</p>
            <p className="name">&nbsp;</p>
        </div>
        <div className="infos" style={{position: "relative"}}>
        <Skeleton style={{position: "absolute"}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"50px"} height={"55%"} inline={true}/>
        <img src='/src/components/componentAssets/weather/humidity.png' alt="humidity" className="icon temp-icon" />
            <p className="value">&nbsp;</p>
            <p className="name">&nbsp;</p>
        </div>
    </div>
    )
}
const components = {
    Section1,
    Section2,
    Section3
  };