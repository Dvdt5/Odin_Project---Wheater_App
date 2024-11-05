import { getWheaterData } from "./getData";



class DomElements {
    
    displayDays(){

        const daysTable = document.getElementById("days-table");
        const daysTableDataContainer = document.getElementById("days-table-data-container");


        daysTableDataContainer.innerHTML = "";

        let data = [];

        getWheaterData().then(response => {
            data = response.days;
            console.log(data)

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
            });

        });
    }
}

export const pageController = new DomElements();