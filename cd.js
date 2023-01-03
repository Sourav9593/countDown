const bDate="7 october 2023 00:00 AM"; 
document.getElementById('bDate').innerText=bDate;
const input = document.querySelectorAll("input")

function clock(){
    const end = new Date(bDate)
    const now = new Date()
    const diff = (end-now)/1000 ;
    input[0].value =(Math.floor(diff/60/60/24))
    input[1].value =(Math.floor(diff/3600)%24)
    input[2].value =(Math.floor(diff/60)%60)
    input[3].value =(Math.floor(diff%60))
      
}
setInterval(() => {
    clock()
}, 1000);
