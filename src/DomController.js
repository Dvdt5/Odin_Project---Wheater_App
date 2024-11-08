import { getWheaterData } from "./getData";
import rainyImg from ".//imgs/rainy.png";
import sunnyImg from ".//imgs/sunny.png";
import partlyCloudyImg from ".//imgs/partly-cloud.png";
import snowyImg from ".//imgs/snowy.png";
import cloudyImg from ".//imgs/cloudy.png";
import windyImg from ".//imgs/windy.png";

class DomElements {
    
    displayDays(){

        const daysTable = document.getElementById("days-table");
        const daysTableDataContainer = document.getElementById("days-table-data-container");
        const tableDesc = document.getElementById("page-info");
        const loading = document.getElementById("loading-screen");

        daysTableDataContainer.innerHTML = "";

        let data = [];

        getWheaterData().then(response => {
            if (response.length === 0){
                tableDesc.textContent = 'Something went wrong. Please check for mistype...';
                loading.style.display = "none";
                
            }
            else
            {

            data = response.days;
            tableDesc.textContent = `Results for ${document.getElementById("location-input").value}...`;
            console.log(data);

            data.forEach(day => {
                const dataRow = document.createElement("tr");
                dataRow.innerHTML = `
                    <td>${day.datetime}</td>
                    <td>${response.resolvedAddress}</td>
                    <td>${Math.round((day.temp - 32)/1.8)}(C&deg;) / ${day.temp}(F&deg;)</td>
                    <td>${Math.round((day.feelslike - 32)/1.8)}(C&deg;) / ${day.feelslike}(F&deg;)</td>
                    <td></td>
                    <td>${day.description}</td>
                    <td>${day.humidity}</td>
                `;

                const creat = document.createElement("img");
                switch (day.icon){

                    case ("clear-day"):
                        creat.src = sunnyImg;
                        break;
                    
                    case ("cloudy"):
                        creat.src = cloudyImg;
                        break;
                    
                    case ("rain"):
                        creat.src = rainyImg;
                        break;

                    case ("partly-cloudy-day"):
                        creat.src = partlyCloudyImg;
                        break;

                    case ("snow"):
                        creat.src = snowyImg;
                        break;

                    default:
                        creat.alt = "No-icon-found";
                        break;
                    
                }

                var elements = dataRow.children;
                elements.item(4).style.backgroundColor = "gray";
                elements.item(4).style.textAlign = "center";
                elements.item(4).appendChild(creat);

                daysTableDataContainer.appendChild(dataRow);
                loading.style.display = "none";
            });
            }
        });
    }
}

export const pageController = new DomElements();