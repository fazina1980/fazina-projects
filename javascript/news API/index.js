let key="7e8c836d0d964ba79fabd9377fe28b62"
let cardData=document.querySelector(".cardData");
const getData=async() =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=saniamirza&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles[0]);


    let divs=document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
    <img src="${jsonData.articles[0].urlToImage}" alt="">
    <h3></h3>
    <p></p>
    
    `
    
}
getData();