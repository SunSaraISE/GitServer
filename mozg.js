function pikcha(event,charm){
var i, content, otkroisa;
otkroisa=document.getElementsByClassName("otkroisa");
for(i=0; i<otkroisa.length; i++)
{
    otkroisa[i].style.display="none";
}
content = document.getElementsByClassName("content");
for (i = 0; i < content.length; i++) 
{
    content[i].className = content[i].className.replace(" active", "");
}
document.getElementById(charm).style.display = "block";
event.currentTarget.className += " active";
}