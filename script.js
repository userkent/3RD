/* =========================================================
   LOVE STORY JAVASCRIPT
========================================================= */


/* =========================================================
   ANNIVERSARY COUNTER
========================================================= */

const Time = "2023-09-29T00:00:00";

/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const girlfriendName = "Aiza Lalovee";
const boyfriendName = "your Gwapo KJ ❤️";


/*
   YOUR 3-YEAR ANNIVERSARY

   September 29, 2023
   → September 29, 2026
*/

const anniversaryDate =
    new Date("2023-09-29T00:00:00");


/* =========================================================
   SELECTOR
========================================================= */

const $ = (selector) => {
    return document.querySelector(selector);
};

const $$ = (selector) => {
    return document.querySelectorAll(selector);
};


/* =========================================================
   PERSONALIZATION
========================================================= */

const bfName = $("#bfName");

if (bfName) {
    bfName.textContent = boyfriendName;
}


/* =========================================================
   NAVIGATION
========================================================= */

function go(sceneID) {

    $$(".scene").forEach((scene) => {
        scene.classList.remove("active");
    });

    const target = $(`#${sceneID}`);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


$$("[data-go]").forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            button.getAttribute("data-go");

        go(target);

    });

});

/* =========================================================
   MEMORIES
========================================================= */

const memories = [

    {
        image: "images/PHOTO1.jpg",
        title: "Our G12 Graduation Day ❤️"
    },

    {
        image: "images/PHOTO2.jpg",
        title: "2025 New Year With You"
    },

    {
        image: "images/PHOTO3.jpg",
        title: "Your 18 Debut Together"
    },

    {
        image: "images/PHOTO4.jpg",
        title: "Dahilayan with You ❤️"
    },

    {
        image: "images/PHOTO5.jpg",
        title: "Here's Another One ❤️"
    },

    {
        image: "images/PHOTO6.jpg",
        title: "Together"
    },

    {
        image: "images/PHOTO7.jpg",
        title: "Foreverr ❤️"
    },

    {
        image: "images/PHOTO8.jpg",
        title: "nganong Gahilak na Gwapa Mana ❤️"
    }

];


const memoryField = $("#memoryField");
const memoryGallery = $("#memoryGallery");
const galleryGrid = $(".memory-gallery-grid");
const closeGallery = $("#closeMemoryGallery");

let currentMemory = 0;
let memoryImages = [];


/* =========================================================
   CREATE SLIDESHOW
========================================================= */

if (memoryField) {

    memories.forEach((memory, index) => {

        const img = document.createElement("img");

        img.src = memory.image;
        img.alt = memory.title;

        img.className = "memory-slide";

        if (index === 0) {
            img.classList.add("active");
        }

        memoryField.appendChild(img);

    });

    memoryImages =
        document.querySelectorAll(
            "#memoryField .memory-slide"
        );
}


/* =========================================================
   AUTOMATIC SLIDESHOW
========================================================= */

function changeMemory() {

    if (memoryImages.length === 0) {
        return;
    }

    memoryImages[currentMemory]
        .classList.remove("active");

    currentMemory++;

    if (currentMemory >= memoryImages.length) {
        currentMemory = 0;
    }

    memoryImages[currentMemory]
        .classList.add("active");
}


setInterval(changeMemory, 4000);


/* =========================================================
   CREATE OLD MEMORY CARD DESIGN
========================================================= */

if (galleryGrid) {

    memories.forEach(memory => {

        const card = document.createElement("div");

        card.className = "memory-card";

        card.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}">

            <div class="memory-card-title">
                ${memory.title}
            </div>
        `;

        galleryGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN OLD MEMORY DESIGN
========================================================= */

if (memoryField) {

    memoryField.addEventListener("click", () => {

        memoryGallery.classList.add("show");

        document.body.classList.add(
            "memory-gallery-open"
        );

    });

}


/* =========================================================
   CLOSE OLD MEMORY DESIGN
========================================================= */

if (closeGallery) {

    closeGallery.addEventListener("click", () => {

        memoryGallery.classList.remove("show");

        document.body.classList.remove(
            "memory-gallery-open"
        );

    });

}

/* =========================================================
   MUSIC DATABASE
========================================================= */
const songs = [
    {
        title: "14",
        artist: "Our Song",
        audio: "music/14_spotdown.org.mp3",
        cover: "images/PHOTO1.jpg"
    },
    {
        title: "Andam Na Ko",
        artist: "Our Song",
        audio: "music/Andam Na Ko_spotdown.org.mp3",
        cover: "images/PHOTO2.jpg"
    },
    {
        title: "Be With You",
        artist: "Our Song",
        audio: "music/Be With You_spotdown.org.mp3",
        cover: "images/PHOTO3.jpg"
    },
    {
        title: "Hindi Ako Mawawala",
        artist: "Our Song",
        audio: "music/Hindi Ako Mawawala_spotdown.org.mp3",
        cover: "images/PHOTO4.jpg"
    },
    {
        title: "Palagi - TJxKZ Version",
        artist: "Our Song",
        audio: "music/Palagi - TJxKZ Version_spotdown.org.mp3",
        cover: "images/PHOTO5.jpg"
    },
    {
        title: "Sa Tuwina",
        artist: "Our Song",
        audio: "music/Sa Tuwina_spotdown.org.mp3",
        cover: "images/PHOTO6.jpg"
    },
    {
        title: "Sinta",
        artist: "Our Song",
        audio: "music/Sinta_spotdown.org.mp3",
        cover: "images/PHOTO7.jpg"
    },
    {
        title: "U-Belt",
        artist: "Our Song",
        audio: "music/U-Belt_spotdown.org.mp3",
        cover: "images/PHOTO8.jpg"
    }
];


/* =========================================================
   MUSIC ELEMENTS
========================================================= */

const audio =
    $("#audio");

const albumButton =
    $("#albumButton");

const albumArt =
    $("#albumArt");

const songTitle =
    $("#songTitle");

const artist =
    $("#artist");

const playIcon =
    $("#playIcon");

const playlist =
    $("#playlist");

const playlistPanel =
    $("#playlistPanel");

const playlistBtn =
    $("#playlistBtn");

const closePlaylist =
    $("#closePlaylist");

const prev =
    $("#prev");

const next =
    $("#next");

const seek =
    $("#seek");

const current =
    $("#current");

const total =
    $("#total");


let currentSong = 0;


/* =========================================================
   LOAD SONG
========================================================= */

function loadSong(index) {

    if (!songs[index]) {
        return;
    }

    currentSong = index;

    const song =
        songs[index];

    audio.src =
        song.audio;

    albumArt.src =
        song.cover;

    songTitle.textContent =
        song.title;

    artist.textContent =
        song.artist;

    updatePlaylist();

}


/* =========================================================
   PLAY / PAUSE
========================================================= */

function toggleMusic() {

    if (audio.paused) {

        audio.play()
            .catch((error) => {
                console.log(
                    "Music could not play:",
                    error
                );
            });

    } else {

        audio.pause();

    }

}


if (albumButton) {

    albumButton.addEventListener(
        "click",
        toggleMusic
    );

}


/* =========================================================
   MUSIC STATE
========================================================= */

audio.addEventListener(
    "play",
    () => {

        albumButton.classList.add(
            "playing"
        );

        playIcon.textContent =
            "❚❚";

    }
);


audio.addEventListener(
    "pause",
    () => {

        albumButton.classList.remove(
            "playing"
        );

        playIcon.textContent =
            "❤️";

    }
);


/* =========================================================
   NEXT SONG
========================================================= */

function nextSong() {

    currentSong++;

    if (
        currentSong >= songs.length
    ) {
        currentSong = 0;
    }

    loadSong(currentSong);

    audio.play();

}


if (next) {

    next.addEventListener(
        "click",
        nextSong
    );

}


/* =========================================================
   PREVIOUS SONG
========================================================= */

function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong =
            songs.length - 1;
    }

    loadSong(currentSong);

    audio.play();

}


if (prev) {

    prev.addEventListener(
        "click",
        previousSong
    );

}


/* =========================================================
   AUTO NEXT
========================================================= */

audio.addEventListener(
    "ended",
    nextSong
);


/* =========================================================
   PLAYLIST
========================================================= */

function updatePlaylist() {

    if (!playlist) {
        return;
    }

    playlist.innerHTML = "";

    songs.forEach(
        (song, index) => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "playlist-item";

            if (
                index === currentSong
            ) {
                item.classList.add(
                    "active"
                );
            }

            item.innerHTML = `

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                >

                <div>

                    <strong>
                        ${song.title}
                    </strong>

                    <small>
                        ${song.artist}
                    </small>

                </div>

            `;

            item.addEventListener(
                "click",
                () => {

                    loadSong(index);

                    audio.play();

                    playlistPanel.classList.remove(
                        "open"
                    );

                }
            );

            playlist.appendChild(item);

        }
    );

}


/* =========================================================
   OPEN PLAYLIST
========================================================= */

if (playlistBtn) {

    playlistBtn.addEventListener(
        "click",
        () => {

            playlistPanel.classList.add(
                "open"
            );

        }
    );

}


/* =========================================================
   CLOSE PLAYLIST
========================================================= */

if (closePlaylist) {

    closePlaylist.addEventListener(
        "click",
        () => {

            playlistPanel.classList.remove(
                "open"
            );

        }
    );

}


/* =========================================================
   MUSIC TIME
========================================================= */

function formatTime(seconds) {

    if (
        !Number.isFinite(seconds)
    ) {
        return "0:00";
    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    const secs =
        Math.floor(
            seconds % 60
        );

    return `${minutes}:${String(secs).padStart(2, "0")}`;

}


audio.addEventListener(
    "loadedmetadata",
    () => {

        if (total) {
            total.textContent =
                formatTime(
                    audio.duration
                );
        }

    }
);


audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) {
            return;
        }

        const percentage =
            (
                audio.currentTime /
                audio.duration
            ) * 100;

        if (seek) {
            seek.value =
                percentage;
        }

        if (current) {
            current.textContent =
                formatTime(
                    audio.currentTime
                );
        }

    }
);


if (seek) {

    seek.addEventListener(
        "input",
        () => {

            if (!audio.duration) {
                return;
            }

            audio.currentTime =
                (
                    seek.value / 100
                ) * audio.duration;

        }
    );

}


/* =========================================================
   LOAD FIRST SONG
========================================================= */

loadSong(0);


// =====================================================
// TIME TOGETHER COUNTER
// =====================================================

function updateCounter() {

    const now =
        new Date();

    const start =
        new Date(
            anniversaryDate
        );


    let years =
        now.getFullYear() -
        start.getFullYear();


    let anniversary =
        new Date(start);


    anniversary.setFullYear(
        start.getFullYear() +
        years
    );


    if (
        anniversary > now
    ) {

        years--;

        anniversary.setFullYear(
            anniversary.getFullYear() - 1
        );

    }


    let months = 0;


    while (
        months < 12
    ) {

        const nextMonth =
            new Date(
                anniversary
            );


        nextMonth.setMonth(
            nextMonth.getMonth() + 1
        );


        if (
            nextMonth > now
        ) {
            break;
        }


        anniversary =
            nextMonth;

        months++;

    }


    let difference =
        now - anniversary;


    const days =
        Math.floor(
            difference /
            86400000
        );


    difference %=
        86400000;


    const hours =
        Math.floor(
            difference /
            3600000
        );


    difference %=
        3600000;


    const minutes =
        Math.floor(
            difference /
            60000
        );


    difference %=
        60000;


    const seconds =
        Math.floor(
            difference /
            1000
        );


    $("#yy").textContent =
        String(years)
            .padStart(2, "0");

    $("#mm").textContent =
        String(months)
            .padStart(2, "0");

    $("#dd").textContent =
        String(days)
            .padStart(2, "0");

    $("#hh").textContent =
        String(hours)
            .padStart(2, "0");

    $("#mi").textContent =
        String(minutes)
            .padStart(2, "0");

    $("#ss").textContent =
        String(seconds)
            .padStart(2, "0");

}


setInterval(
    updateCounter,
    1000
);


updateCounter();

/* =========================================================
   SURPRISE
========================================================= */

const unlock =
    $("#unlock");

const finalMessage =
    $("#finalMessage");


if (unlock) {

    unlock.addEventListener(
        "click",
        () => {

            finalMessage.classList.add(
                "show"
            );

            unlock.textContent =
                "❤️ I LOVE YOU";

        }
    );

}

/* =====================================================
   LOVE HEART EXPLOSION
===================================================== */

const unlockButton = document.getElementById("unlock");

unlockButton.addEventListener("click", function () {

    // Big heart in the center
    const bigHeart = document.createElement("div");

    bigHeart.classList.add("love-burst");
    bigHeart.innerHTML = "♥";

    document.body.appendChild(bigHeart);

    setTimeout(() => {
        bigHeart.remove();
    }, 1000);


    // Create many floating hearts
    const hearts = [
        "♥",
        "❤",
        "♡",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.classList.add("love-heart");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        // Random direction
        const x = (Math.random() - 0.5) * 700;
        const y = (Math.random() - 0.5) * 600;

        const rotation = (Math.random() - 0.5) * 720;

        heart.style.setProperty("--x", `${x}px`);
        heart.style.setProperty("--y", `${y}px`);
        heart.style.setProperty("--rotate", `${rotation}deg`);

        // Random size
        heart.style.fontSize =
            `${20 + Math.random() * 35}px`;

        // Different animation speed
        heart.style.animationDuration =
            `${1.5 + Math.random() * 1.5}s`;

        // Random delay
        heart.style.animationDelay =
            `${Math.random() * 0.3}s`;

        document.body.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 3500);
    }

});