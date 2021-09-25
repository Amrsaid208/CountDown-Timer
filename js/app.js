const weekdays=[
    'Saterday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',

];
const months=[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Seb',
    'Oct',
    'Nov',
    'Dec',
];

const items=document.querySelectorAll(".cont h4");
const con=document.querySelector(".cont");

// console.log(finDate)
const finDate=new Date(2021,8,28,2,50);
let futDate=new Date(2021,8,28,11,20).getTime();
 


function getRemainingTime(){
    const currentDate=new Date().getTime();
    
    let t=futDate-currentDate;
    
    const oneDay=24*60*60*1000;
    const oneHour=oneDay/24;
    const oneMin=oneHour/60;
    const days=Math.floor(t/oneDay);
    const hours=Math.floor((t%oneDay)/oneHour);
    const mins=Math.floor((t%oneHour)/oneMin); 
    const secs=Math.floor((t%oneMin)/1000); 
    
    const arr=[days,hours,mins,secs];
    function format(item){
        if(item<10) return item=`0${item}`;
        else return item;
    
    }

    items.forEach(function(item,idx){
        
        item.innerHTML=format(arr[idx]);
    });
    if(t<1) {
        clearInterval(count);
        con.innerHTML=`<h1>GameOver</h1>`
        
    }

};
let count=setInterval(getRemainingTime,1000);


getRemainingTime();