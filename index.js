

function kiiras() {
    const http = new XMLHttpRequest();
    http.onload = function() {
        document.getElementById("demo").innerHTML=this.responseText;
    }
    http.open("GET", "termek.json")
    http.send()
}