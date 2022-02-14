console.log("Welcome To HearPure");
let songindex = 0;
let masterplay = document.getElementById("masterplay");
let bar = document.getElementById("seek");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let chan = Array.from(document.getElementsByClassName('ch'));
let songs = [
  {
    songName: "Excuses - AP Dhillon",
    filepath: "songs/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songName: "Udd Gaye - Ritviz",
    filepath: "songs/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songName: "Jugnu - Baadshah",
    filepath: "songs/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songName: "Baaraat - Nucleya, Ritviz",
    filepath: "songs/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songName: "Baarishein - Anuv Jain",
    filepath: "songs/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songName: "Stay - The kid Laroi, Justin Bieber",
    filepath: "songs/6.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    songName: "Tu Aake Dekhle - KING",
    filepath: "songs/7.mp3",
    coverpath: "covers/7.jpg",
  },
  {
    songName: "Tera naam - Tulsi Kumar, Darshan Raval",
    filepath: "songs/8.mp3",
    coverpath: "covers/8.jpg",
  },
  {
    songName: "Savage Love - Jawsh 865",
    filepath: "songs/9.mp3",
    coverpath: "covers/9.jpg",
  },
  {
    songName: "Love Nwantiti - Ckay",
    filepath: "songs/10.mp3",
    coverpath: "covers/10.jpg",
  },
];
let audioElement = new Audio("./songs/1.mp3");

songitem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});
// Listen to events

// Play and pause
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    mastersongname.innerText = songs[songindex].songName;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// let progress=0;
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // Update seek bar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  // console.log(progress);
  bar.value = progress;
  if (bar.value == 100) {
    audioElement.src = `songs/${songindex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
  }
});

bar.addEventListener("change", () => {
  audioElement.currentTime = (bar.value * audioElement.duration) / 100;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songdirectplay")).forEach(
    (ele) => {
      ele.classList.remove("fa-pause-circle");
      ele.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songdirectplay")).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    makeAllplays();
    songindex = parseInt(e.target.id);

    mastersongname.innerText = songs[songindex].songName;
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioElement.src = `songs/${songindex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
  });
});



// Previous and next button.

document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 9) {
    songindex = 0;
  } else {
    songindex++;
  }
  audioElement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});

// next element.

document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex--;
  }
  audioElement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});