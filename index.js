
// console.log("fuck this ");
// document.getElementById("p").textContent=" hey mother fucker ";
// document.getElementById("h1").textContent=" hey mother fucker ";


const min =1 ; 
const max =100 ; 
const answer = Math.floor(Math.random()*(max - min )); 
console.log(answer);
let att = 0 ; 
let guss ; 
let running =true ; 
while(running ){
    

    guss= window.prompt(`guss a number between ${max}-${min}`);
    guss= Number(guss);
   if (isNaN(guss))
    window.alert("enter a number ");
else if (guss < min || guss>  max )
    window.alert(`enter a number btwee${min}-${max}`);
else{ 
att++ ; 
if ( guss < answer ) 
    window.alert("too low try again  ");  
else if ( guss < answer ) 
window.alert("too hghi try again ");  
else {
window.alert("  correct  "+`the answe was ${answer} and took you ${att}of trying `);  

running=false;
}

}



};
