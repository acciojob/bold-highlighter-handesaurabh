function highlight() {
    //Write your code here
	const mouseOver=document.querySelectorAll("strong");
mouseOver.forEach((item)=>{
	item.style.color="rgb(0, 128, 0)";
});
}


function return_normal() {
    //Write your code here
const mouseOut=document.querySelectorAll("strong");
mouseOut.forEach((item)=>{
	item.style.color="rgb(0, 0, 0)";
});
    
}
