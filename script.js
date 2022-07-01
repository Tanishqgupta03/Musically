console.log("Welcome to Musically");
//initialise the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {
        songName: "Pasoori",filePath: "1.mp3",coverPath: "pasoori.jpg"
    },
    {
        songName: "295",filePath: "2.mp3",coverPath: "295.jpg"
    },
    {
        songName: "Jamil",filePath: "3.mp3",coverPath: "jamila.jpg"
    },
    {
        songName: "Excuses",filePath: "4.mp3",coverPath: "excuses.jpg"
    },
    {
        songName: "Blue Eyes",filePath: "5.mp3",coverPath: "Blue.jpg"
    }
    
]
songItems.forEach((element,i) => {
   
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    
});
//handle play/pause clicks
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// () => is call back function




//listen to events
audioElement.addEventListener('timeupdate',()=>{
   //console.log(audioElement.duration);
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);

    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        //koi na koi gana phele play ho raha hoga.
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
    
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        var songIndex  = parseInt(e.target.id);
        songIndex  = songIndex +1;
        songIndex =songIndex +".mp3";
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=songIndex ;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

next.addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=songIndex ;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

previous.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=songIndex ;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})