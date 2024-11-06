

export async function getWheaterData () {
    const location = document.getElementById("location-input").value;
    const loading = document.getElementById("loading-screen");

    loading.style.display = "block";

    const apiData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=BXLX3MCDLNNBRR288CBDJG85N&contentType=json`);
    
    if (apiData.status == 200) {
        return await apiData.json();
    }
    
    return [];
}