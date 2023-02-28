let currentMusic = 0;
const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');
const songList = document.querySelector('.song-list');

// Setup music
const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
};

// Play music
const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
    const playingSong = document.querySelector('.song.playing');
    if (playingSong) {
        playingSong.classList.remove('playing');
    }
    const newPlayingSong = document.querySelectorAll('.song')[currentMusic];
    newPlayingSong.classList.add('playing');
};

// Format time
const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
};

// Play/pause button
playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        music.pause();
    } else {
        music.play();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
});

// Seek bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
});

// Forward and backward button
forwardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
});

backwardBtn.addEventListener('click', () => {
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
});

// Continuous music play
music.addEventListener('ended', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
});

// Shuffle music
const shuffleBtn = document.querySelector('.shuffle-btn');
let shuffle = false;

shuffleBtn.addEventListener('click', () => {
    shuffle = !shuffle;
    if (shuffle) {
        shuffleBtn.classList.add('active');
    } else {
        shuffleBtn.classList.remove('active');
    }
})

// Repeat music
const repeatBtn = document.querySelector('.repeat-btn');
let repeat = false;

repeatBtn.addEventListener('click', () => {
    repeat = !repeat;
    if (repeat) {
        repeatBtn.classList.add('active');
    } else {
        repeatBtn.classList.remove('active');
    }
})
let currentMusic = 0;
const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');
const songList = document.querySelector('.song-list');

// Setup music
const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
};

// Play music
const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
    const playingSong = document.querySelector('.song.playing');
    if (playingSong) {
        playingSong.classList.remove('playing');
    }
    const newPlayingSong = document.querySelectorAll('.song')[currentMusic];
    newPlayingSong.classList.add('playing');
};

// Format time
const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
};

// Play/pause button
playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        music.pause();
    } else {
        music.play();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
});

// Seek bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
});

// Forward and backward button
forwardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
});

backwardBtn.addEventListener('click', () => {
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
});

// Continuous music play
music.addEventListener('ended', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
});

// Shuffle music
const shuffleBtn = document.querySelector('.shuffle-btn');
let shuffle = false;

shuffleBtn.addEventListener('click', () => {
    shuffle = !shuffle;
    if (shuffle) {
        shuffleBtn.classList.add('active');
    } else {
        shuffleBtn.classList.remove('active');
    }
})

// Repeat music
const repeatBtn = document.querySelector('.repeat-btn');
let repeat = false;

repeatBtn.addEventListener('click', () => {
    repeat = !repeat;
    if (repeat) {
        repeatBtn.classList.add('active');
    } else {
        repeatBtn.classList.remove('active');
    }
})

// Keyboard event listener
document.addEventListener('keydown', (event) => {
        if (event.code === "Space") {
            event.preventDefault();
            playBtn.click();
        } else if (event.code === "ArrowRight") {
            event.preventDefault();
            forwardBtn.click();
        } else if (event.code === "ArrowLeft") {
            event.preventDefault();
            backwardBtn.click();
        }
    })
    // Keyboard event listener
document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        playBtn.click();
    } else if (event.code === "ArrowRight") {
        event.preventDefault();
        forwardBtn.click();
    } else if (event.code === "ArrowLeft") {
        event.preventDefault();
        backwardBtn.click();
    }
})