let progress=document.getElementById("progress");
let song=document.getElementById("song");
let icons=document.getElementById("icons");


song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
    // progress.max=song.duration;
}
function playPause(){
    if(icons.classList.contains("fa-pause")){
        song.pause();
        icons.classList.remove("fa-pause");
        icons.classList.add("fa-play");

    }
    else{
        song.play();
        icons.classList.add("fa-pause");
        icons.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime
    },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    icons.classList.add("fa-pause");
    icons.classList.remove("fa-play");
}
