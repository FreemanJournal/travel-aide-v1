import axios from 'axios'


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (type,sw, ne) => {

  try {

    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'fcacc6e166msh7021f397bc46930p1f463djsncadb6006dcee'
        // 'x-rapidapi-key': '0a68d9abd5msh1202aba44e0d476p1b279cjsncc7f881056b7'
        // 'x-rapidapi-key': '117ba48599mshbdb1971ada38572p1c4033jsn79f3bb84f6ec'
      },
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
