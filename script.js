const redslider = document.getElementById('redslider');
const greenslider = document.getElementById('greenslider');
const blueslider = document.getElementById('blueslider');


const redvaluespan=document.getElementById('redvalue');
const greenvaluespan=document.getElementById('greenvalue');
const bluevaluespan=document.getElementById('bluevalue');

const colorbox=document.getElementById('colorbox');
const copybtn=document.getElementById('copybtn');
const colorvalue=document.getElementById('colorvalue');


redslider.addEventListener('input',updatecolor);
greenslider.addEventListener('input',updatecolor);
blueslider.addEventListener('input',updatecolor);
copybtn.addEventListener('click',copyRGBvalue);



function updatecolor(){

const redvalue=redslider.value;
const greenvalue=greenslider.value;
const bluevalue=blueslider.value;


// console.log(redvalue,greenvalue,bluevalue);
const rgbcolor  =`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;
// console.log(rgbcolor);

colorbox.style.backgroundColor = rgbcolor;









redvaluespan.textContent=redvalue;
greenvaluespan.textContent=greenvalue;
bluevaluespan.textContent=bluevalue;


colorvalue.textContent=rgbcolor;
 

}

updatecolor();



function copyRGBvalue(){
 
 const redvalue=redslider.value;
 const greenvalue=greenslider.value;
 const bluevalue=blueslider.value;


 const rgbcolor  =`rgb(${redvalue}, ${greenvalue}, ${bluevalue})`;

 navigator.clipboard.writeText(rgbcolor)
 .then(()=>{
 alert('RGB color value copied to clipboard'+ rgbcolor);
 })
 .catch((error)=>{
  console.error('Failed rto copy RGB values',error);
 });

}
