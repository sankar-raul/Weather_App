import { WeatherInfo, MoreDetails } from "../Section1Componets"
export default function Section2(props) {
    return (
            <div className="Section2">
            <MoreDetails data={props.data} />
        </div>
    )
}