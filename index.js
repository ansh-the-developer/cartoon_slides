
const characters=[{
    img:'chan.jpg',
    name:'Sinchan Nohara',
    title:'Coolest Kid in The Block',
    description:'Loves: Action Kamen'
},
{
    img:'doremon.png',
    name:'Doremon',
    title:'Robo??? Cat??? ROBOcat!!!',
    description:'Loves: Doracake'
},
{
    img:'jerry.jpg',
    name:'Jerry',
    title:'Does all the mischives .',
    description:'Loves: Cheese '
},
{
    img:'tom.png',
    name:'Tom',
    title:'The supposedly evil one',
    description:'Loves:to sleep'
},
]


var currentSlideIndex=0;

function displaySlide() {
    var file = characters[ currentSlideIndex ].img;

    document.getElementById("photo").src = file;
    document.getElementById("names").innerHTML=characters[ currentSlideIndex ].name; 
    document.getElementById("titles").innerHTML=characters[ currentSlideIndex ].title;
    document.getElementById("descriptions").innerHTML=characters[ currentSlideIndex ].description;
}

function nextSlide() {
    currentSlideIndex++;
    if( currentSlideIndex >= characters.length ) {
        currentSlideIndex = 0;
    }
    displaySlide();
}
// function previousSlide() {
//     currentSlideIndex++;
//     if( currentSlideIndex >= characters.length ) {
//         currentSlideIndex =characters[characters.length] ;
//     }
    
//     displaySlide();
// }

function goRandom() {
    window.alert('                                  ***WARNING*** \n this button will generate random name and descrition ')
    document.getElementById("photo").src=characters[Math.floor(Math.random()*4)].img;
    document.getElementById("names").innerHTML=characters[[Math.floor(Math.random()*4)]].name; 
    document.getElementById("titles").innerHTML=characters[[Math.floor(Math.random()*4)]].title;
    document.getElementById("descriptions").innerHTML=characters[[Math.floor(Math.random()*4)]].description;
    
}


// function backButton() {

    
     
   
//     document.getElementById("photo").src=characters[2].img;
//     document.getElementById("names").innerHTML=characters[2].name; 
//     document.getElementById("titles").innerHTML=characters[2].title;
//     document.getElementById("descriptions").innerHTML=characters[2].description;
    
   
    
// }
    
// function forwardButton() {
//     document.getElementById("photo").src=characters[3].img;
//     document.getElementById("names").innerHTML=characters[3].name; 
//     document.getElementById("titles").innerHTML=characters[3].title;
//     document.getElementById("descriptions").innerHTML=characters[3].description;
//     // i++;
// }

