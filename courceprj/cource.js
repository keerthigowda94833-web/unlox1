document.getElementById("searchBtn").addEventListener("click",function(){

let course=document.querySelector("input").value;

if(course=="")
{
alert("Please enter a course name.");
}
else
{
alert("Searching for : "+course);
}

});


let buttons=document.querySelectorAll(".course button");

buttons.forEach(function(btn){

btn.addEventListener("click",function(){

alert("Course Added Successfully!");

});

});
