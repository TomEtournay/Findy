
const PrincipalCategorie = document.querySelector("#title-categorie")
const PrincipalRecommandation = document.querySelector("#title-recommandation")
const PrincipalTarif = document.querySelector("#title-tarif")
const PurpleDiv = document.querySelector("#title-coulissant")
const CoulissantPrincipal = document.querySelector("#Coulissant-principal")

PrincipalCategorie.addEventListener("click", () =>{
    CoulissantPrincipal.style.transform = "translateX(0%)"

    PrincipalCategorie.classList.add("active")
    PrincipalTarif.classList.remove("active")
    PrincipalRecommandation.classList.remove("active")

    PurpleDiv.style.transform = "translateX(0px)"
})

PrincipalRecommandation.addEventListener("click", () =>{
    CoulissantPrincipal.style.transform = "translateX(-33.33%)"
    PrincipalRecommandation.classList.add("active")
    PrincipalCategorie.classList.remove("active")
    PrincipalTarif.classList.remove("active")

    PurpleDiv.style.transform = "translateX(208px)"
    
})

PrincipalTarif.addEventListener("click", () =>{
    CoulissantPrincipal.style.transform = "translateX(-66.66%)"

    PrincipalTarif.classList.add("active")
    PrincipalCategorie.classList.remove("active")
    PrincipalRecommandation.classList.remove("active")
    PurpleDiv.style.transform = "translateX(416px)"
})







const SecondaireLivre = document.querySelector("#Livre")
const SecondaireSerie = document.querySelector("#Serie")
const SecondaireFilm = document.querySelector("#Film")
const SecondaireSiteInternet = document.querySelector("#Site")
const SecondaireApplicationWeb = document.querySelector("#ApplicationWeb")
const SecondaireApplicationMobile = document.querySelector("#ApplicationMobile")

const CoulissantSelectionSecondaire = document.querySelector("#title-coulissant-secondaire")
const CoulissantSecondaire = document.querySelector(".coulissant-selection-secondaire")
const BlockCoulissantSecondaire = document.querySelector("#coulissant-secondaire")

const OrangeLeftArrow = document.querySelector("#OrangeLeftArrow")
const OrangeRightArrow = document.querySelector("#OrangeRightArrow")


secondairevalue = 0;



OrangeLeftArrow.addEventListener("click", () =>{
    
    CoulissantSecondaire.style.transform = "translateX(0%)";
})

OrangeRightArrow.addEventListener("click", () =>{
    
    CoulissantSecondaire.style.transform = "translateX(-50%)"
})


SecondaireLivre.addEventListener("click", () =>{
    CoulissantSelectionSecondaire.style.transform = "translateX(0px)"
    SecondaireLivre.classList.add("active")
    SecondaireSerie.classList.remove("active")
    SecondaireFilm.classList.remove("active")
    SecondaireSiteInternet.classList.remove("active")
    SecondaireApplicationWeb.classList.remove("active")
    SecondaireApplicationMobile.classList.remove("active")

    secondairevalue = 0;

    BlockCoulissantSecondaire.style.transform = "translateX(0%)"
})

SecondaireSerie.addEventListener("click", () =>{
    CoulissantSelectionSecondaire.style.transform = "translateX(208px)"
    SecondaireLivre.classList.remove("active")
    SecondaireSerie.classList.add("active")
    SecondaireFilm.classList.remove("active")
    SecondaireSiteInternet.classList.remove("active")
    SecondaireApplicationWeb.classList.remove("active")
    SecondaireApplicationMobile.classList.remove("active")

    secondairevalue = 100 / 6;

    BlockCoulissantSecondaire.style.transform = `translateX(-${secondairevalue}%)`;
})

SecondaireFilm.addEventListener("click", () =>{
    CoulissantSelectionSecondaire.style.transform = "translateX(416px)"
    SecondaireLivre.classList.remove("active")
    SecondaireSerie.classList.remove("active")
    SecondaireFilm.classList.add("active")
    SecondaireSiteInternet.classList.remove("active")
    SecondaireApplicationWeb.classList.remove("active")
    SecondaireApplicationMobile.classList.remove("active")


    secondairevalue = (100 / 6) * 2;

    BlockCoulissantSecondaire.style.transform = `translateX(-${secondairevalue}%)`;
})

SecondaireSiteInternet.addEventListener("click", () =>{
    CoulissantSelectionSecondaire.style.transform = "translateX(624px)"   
    SecondaireLivre.classList.remove("active")
    SecondaireSerie.classList.remove("active")
    SecondaireFilm.classList.remove("active")
    SecondaireSiteInternet.classList.add("active")
    SecondaireApplicationWeb.classList.remove("active")
    SecondaireApplicationMobile.classList.remove("active")

    secondairevalue = (100 / 6) * 3;

    BlockCoulissantSecondaire.style.transform = `translateX(-${secondairevalue}%)`;
})

SecondaireApplicationWeb.addEventListener("click", () =>{
    CoulissantSelectionSecondaire.style.transform = "translateX(832px)"
    SecondaireLivre.classList.remove("active")
    SecondaireSerie.classList.remove("active")
    SecondaireFilm.classList.remove("active")
    SecondaireSiteInternet.classList.remove("active")
    SecondaireApplicationWeb.classList.add("active")
    SecondaireApplicationMobile.classList.remove("active")

    secondairevalue = (100 / 6) * 4;

    BlockCoulissantSecondaire.style.transform = `translateX(-${secondairevalue}%)`;
})

SecondaireApplicationMobile.addEventListener("click", () =>{
    CoulissantSelectionSecondaire.style.transform = "translateX(1040px)"
    SecondaireLivre.classList.remove("active")
    SecondaireSerie.classList.remove("active")
    SecondaireFilm.classList.remove("active")
    SecondaireSiteInternet.classList.remove("active")
    SecondaireApplicationWeb.classList.remove("active")
    SecondaireApplicationMobile.classList.add("active")

    secondairevalue = (100 / 6) * 5;

    BlockCoulissantSecondaire.style.transform = `translateX(-${secondairevalue}%)`;
})












const TestimonyLeftArrow = document.querySelector("#Testimony-LeftArrow")
const TestimonyRightArrow = document.querySelector("#Testimony-RightArrow")

const TestimonyCoulissant = document.querySelector(".cards")

var coulissanttestimonyvalue = 40.4;
var testimonyvalue = 6;



TestimonyLeftArrow.addEventListener("click", () =>{

    if(testimonyvalue >= 10){
        coulissanttestimonyvalue = -20.2;
        testimonyvalue = 0;
        TestimonyCoulissant.style.transform = 'translateX(0%)'

    }

    testimonyvalue += 2;
    coulissanttestimonyvalue += 20.2; 

    console.log(testimonyvalue)

    TestimonyCoulissant.style.transition = 'all ease-in 400ms'
    TestimonyCoulissant.style.transform = `translateX(-${coulissanttestimonyvalue}%)`
})

TestimonyRightArrow.addEventListener("click", () =>{

    if(testimonyvalue === 2){
        coulissanttestimonyvalue = 101;
        testimonyvalue = 12;
        TestimonyCoulissant.style.transform = 'translateX(0%)'

    }

    // BUG INCROMPRÉHENSIBLE
    if(testimonyvalue === 4){
        TestimonyCoulissant.style.transform = 'translateX(0%)'
    }

    testimonyvalue -= 2;
    coulissanttestimonyvalue -= 20.2; 

    console.log(testimonyvalue)

    TestimonyCoulissant.style.transition = 'all ease-in 400ms'
    TestimonyCoulissant.style.transform = `translateX(-${coulissanttestimonyvalue}%)`
    
})








const burger = document.querySelector("#burger");
const ResponsiveMenu = document.querySelector("#responsive-menu")
const cross = document.querySelector("#cross")


burger.addEventListener("click", ()=>{
    ResponsiveMenu.style.transform = "translateX(0%)"
})

cross.addEventListener("click", ()=>{
    ResponsiveMenu.style.transform = "translateX(100%)"
})




