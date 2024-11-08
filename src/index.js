import { pageController } from "./DomController";
import "./styles.css";


const enterLocationForm = document.getElementById("enter-location-form");

enterLocationForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    pageController.displayDays();

    
});