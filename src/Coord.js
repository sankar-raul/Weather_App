export default async function getLocation() {
    try {
      let position = await new Promise((resolve,reject) => navigator.geolocation.getCurrentPosition(resolve,reject))
      return await position.coords
    } catch (err) {
        console.log("Error : ", err)
        return null
    }
}
