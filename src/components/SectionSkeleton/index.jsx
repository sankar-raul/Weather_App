import "./skeleton.css"
import "../Section1/sectionStyle.css" // can comment
// import '../Section2/section2.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function SectionSkeleton({className}) {
    const Loading = components[className]
    return (
        <>
         <div className={`${className}`}>
            <Loading />
         </div>
        </>
    )
}
export function Section2ForecastSkeleton() {
    const items = []
    for (let i = 0; i < 16; i++) {
        items.push(
            <div key={`${Math.random()+new Date()}`} style={{display: "block"}} className="forecast">
                <Skeleton baseColor="#e3F0fdaa" borderRadius='12px' highlightColor="#07affe11" duration={1.3} width={"100%"} height="100%"/>
            </div>
            )
    }
    return (
        <div key={`${Math.random()+new Date()}`} style={{overflow: "hidden"}} className="forecast-container">
            {items}
        </div>
    )
}
function Section1() {
    return (
        <>
        <div className="cityName">
               <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"60%"} borderRadius={6} height={16}/>
               <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"40%"} borderRadius={6} height={16}/>
                <p className="date">
                <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"35%"} borderRadius={6} height={12}/>
                </p>
            </div>
            <div className="weather-main" style={{gap: "10px"}}>
                <div className="weather-icon" style={{position: "relative", height: "100%"}}>
                <Skeleton style={{position: ""}} baseColor="#e3F0fdaa" highlightColor="#07affe11" borderRadius={6} duration={1.3} width={"80%"} height={"100%"}/>
                </div>
                <div className="temperature">
                    <p className="temp">
                    <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} borderRadius={6} width={"30%"} height={"55%"} inline={true}/>
                        <sup className="tf"><sup>
                            &nbsp;
                            <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"20%"} height={"55%"} inline={true}/>
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
            <Section2ForecastSkeleton />
            <div className="weather-info"></div>
        </>
    )
}
function Section3() {
    return (
        <>
        <p>Loading...</p>
        </>
    )
}
function Weatherbox() {
    return (
        <div className="weatherbox">
        <div className="infos" style={{position: "relative"}}>
        <Skeleton style={{position: ""}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"50px"} height={"165%"} inline={false}/>
            <p style={{margin: '3%'}} className="value">&nbsp;</p>
            <p className="name">
            <Skeleton style={{position: "relative", marginTop: "0%"}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"60px"} height={"75%"} inline={false}/>
            </p>
        </div>
        <div className="infos" style={{position: "relative"}}>
        <Skeleton style={{position: ""}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"50px"} height={"165%"} inline={false}/>
            <p style={{margin: '3%'}} className="value">&nbsp;</p>
            <p className="name">
                <Skeleton style={{position: "relative", marginTop: "0%"}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"60px"} height={"75%"} inline={false}/>
            </p>
        </div>
        <div className="infos" style={{position: "relative"}}>
        <Skeleton style={{position: ""}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"50px"} height={"165%"} inline={false}/>
            <p style={{margin: '3%'}} className="value">&nbsp;</p>
            <p className="name"><Skeleton style={{position: "relative", marginTop: "0%"}} baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"60px"} height={"75%"} inline={false}/></p>
        </div>
    </div>
    )
}
const components = {
    Section1,
    Section2,
    Section3
  };