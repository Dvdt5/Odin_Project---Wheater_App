

export async function getWheaterData () {
    const apiData = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Antalya?unitGroup=us&key=BXLX3MCDLNNBRR288CBDJG85N&contentType=json");
    
    if (apiData.status == 200) {
        return await apiData.json();
    }
    
    return [];
}