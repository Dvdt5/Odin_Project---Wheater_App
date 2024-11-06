import { getWheaterData } from "./getData";



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
                daysTableDataContainer.appendChild(dataRow);
                loading.style.display = "none";
            });
            }
        });
    }
}

export const pageController = new DomElements();