


window.onload=function(){ 
let initialSuperHeros=[
    {
    Name:"Thor",
    Age:22,
    Planet:"Earth",
    Height:6
    },
    {
        Name:"Iron Man",
        Age:22,
        Planet:"Earth",
        Height:8
    },
    {
            Name:"Captain America",
            Age:22,
            Planet:"Earth",
            Height:7
    }]

    if(localStorage.getItem("superheros")===null){
      let stringSuperHeros= JSON.stringify(initialSuperHeros);
      localStorage.setItem("superheros",stringSuperHeros);
  }}
    function display(){
       let superheros=JSON.parse(localStorage.getItem("superheros"));
       let totalContent="";
       superheros.forEach(function(superhero,index){
      let currentrow=`<tr>
        <td>${superhero.Name}</td>
        <td>${superhero.Age}</td>
        <td>${superhero.Planet}</td>
        <td>${superhero.Height}</td> 
        <td class="actions"><button id="deleteButton" onclick="deleteElement(${index})">Delete<button/><button id="updateButton" onclick="showModel(${index}),copyElements(${index})">Update<button/></td>
      </tr>`
       totalContent +=currentrow;
    });
      document.getElementsByClassName("tableBody")[0].innerHTML=totalContent;
    
      localStorage.setItem("superheros", JSON.stringify(superheros));
   }
   display( );
     
   function addSuperHero(event){
    event.preventDefault();
   let newSuperHero={};
    
    let newSuperHeroName=document.getElementById("input1").value;
    let newSuperHeroAge=document.getElementById("input2").value;
    let newSuperHeroPlanet=document.getElementById("input3").value;
    let newSuperHeroHeight=document.getElementById("input4").value;
    newSuperHero.Name=newSuperHeroName;
    newSuperHero.Age=newSuperHeroAge;
    newSuperHero.Planet=newSuperHeroPlanet;
    newSuperHero.Height=newSuperHeroHeight;
     
    let superheros=JSON.parse(localStorage.getItem("superheros"));
    superheros.push(newSuperHero);
    localStorage.setItem("superheros", JSON.stringify(superheros));

    display( );
    
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("input3").value="";
    document.getElementById("input4").value="";
 }
 
 function deleteElement(index){
  let superheros=JSON.parse(localStorage.getItem("superheros"));
   superheros.splice(index,1);
   localStorage.setItem("superheros", JSON.stringify(superheros));
   display( );
   
 }

function showModel(index){
let showingModel=document.getElementsByClassName("form1")[0];
let showingModel2=document.getElementsByClassName("form-group")[0];
showingModel.style.display="block";
showingModel2.style.opacity="0.8";
copyElements(index);
}
var updateIndex;
function copyElements(index){
  let superheros=JSON.parse(localStorage.getItem("superheros"));
updateIndex =index;
let copiedHero=superheros[index];
document.getElementById("unput1").value=copiedHero.Name;
document.getElementById("unput2").value=copiedHero.Age;
document.getElementById("unput3").value=copiedHero.Planet;
document.getElementById("unput4").value=copiedHero.Height;
 
}


function updateSuperHero(event){
    event.preventDefault();
    let superheros=JSON.parse(localStorage.getItem("superheros"));
    let updatedHero=superheros[updateIndex];
    let newUpdatedName=document.getElementById("unput1").value;
    let newUpdatedAge=document.getElementById("unput2").value;
    let newUpdatedPlanet=document.getElementById("unput3").value;
    let newUpdatedHeight=document.getElementById("unput4").value;
    updatedHero.Name=newUpdatedName;
    updatedHero.Age=newUpdatedAge;
    updatedHero.Planet=newUpdatedPlanet;
    updatedHero.Height=newUpdatedHeight;
    document.getElementsByClassName("form1")[0].style="none";
    document.getElementsByClassName("form-group")[0].style="block";
    
    localStorage.setItem("superheros", JSON.stringify(superheros));
    display( );

  
}
 
function searchElement(){
let searchingElement=document.getElementById("input5").value;
let superheros=JSON.parse(localStorage.getItem("superheros"));
let search=superheros.filter(function(superhero){
   return superhero.Name.toUpperCase().indexOf(searchingElement.toUpperCase())==0;
});
searchBox(search);
}
 
function searchBox(search){
  let superheros=search;
  let totalContent="";
  superheros.forEach(function(superhero,index){
 let currentrow=`<tr>
   <td>${superhero.Name}</td>
   <td>${superhero.Age}</td>
   <td>${superhero.Planet}</td>
   <td>${superhero.Height}</td> 
   <td class="actions"><button id="deleteButton" onclick="deleteElement(${index})">Delete<button/><button id="updateButton" onclick="showModel(${index}),copyElements(${index})">Update<button/></td>
 </tr>`
  totalContent +=currentrow;
});
 document.getElementsByClassName("tableBody")[0].innerHTML=totalContent;

}


















