import countryList from "./country-list.json"
export default function getCountry(code="IN") {
     const country = countryList.filter(data => data.code === code)
    return country[0].name
}