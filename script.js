/* =========================
   PAGE SWITCHING
========================= */

function hideAllPages() {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

}


function showMemories() {

    hideAllPages();

    setTimeout(() => {
        document.getElementById("memories").classList.add("active");
    }, 100);

}


function showCake() {

    hideAllPages();

    setTimeout(() => {
        document.getElementById("cake").classList.add("active");
    }, 100);

}


function showFinal() {

    hideAllPages();

    setTimeout(() => {
        document.getElementById("final").classList.add("active");
    }, 100);

}


/* =========================
   MEMORY DATA
========================= */

const memories = {

    1: {
        image: "images/photo1.jpg.jpeg",
        small: "A LITTLE MEMORY",
        title: "You Are Special ❤️",
        message:
            "Some people come into our lives and make ordinary moments feel a little more beautiful. You are one of those people."
    },

    2: {
        image: "images/photo2.jpg.jpeg",
        small: "JUST A LITTLE NOTE",
        title: "Keep Smiling 🌸",
        message:
            "Never stop smiling. Your smile has a way of making even simple moments feel special."
    },

    3: {
        image: "images/photo3.jpg.jpeg",
        small: "SOMETHING FROM MY HEART",
        title: "You Matter ❤️",
        message:
            "I hope you always remember how important and special you are. You deserve beautiful things."
    },

    4: {
        image: "images/photo4.jpg.jpeg",
        small: "A WISH FOR YOU",
        title: "Stay Happy ✨",
        message:
            "May every new chapter of your life bring you more happiness, peace, success and beautiful memories."
    },

    5: {
        image: "images/photo5.jpg.jpeg",
        small: "ONE MORE THING",
        title: "For Someone Special 💕",
        message:
            "Out of all the things I could say today, I simply want you to know that you are truly special to me."
    }

};


/* =========================
   OPEN MEMORY
========================= */

function openMemory(number) {

    const data = memories[number];

    document.getElementById("modalImage").src = data.image;

    document.getElementById("modalSmallText").textContent =
        data.small;

    document.getElementById("modalTitle").textContent =
        data.title;

    document.getElementById("modalMessage").textContent =
        data.message;

    document.getElementById("memoryModal")
        .classList.add("show");
}


/* =========================
   CLOSE MEMORY
========================= */

function closeMemory() {

    document.getElementById("memoryModal")
        .classList.remove("show");

}


/* =========================
   CAKE
========================= */

function blowCandle() {

    const flame = document.getElementById("flame");

    flame.classList.add("off");

    document.getElementById("wishText").textContent =
        "Wish made... ✨❤️";

    const button = document.getElementById("blowBtn");

    button.textContent = "Continue The Surprise 💌";

    button.onclick = showFinal;

}


/* =========================
   FINAL MESSAGE
========================= */

function openFinalMessage() {

    document.getElementById("finalModal")
        .classList.add("show");

}


function closeFinalMessage() {

    document.getElementById("finalModal")
        .classList.remove("show");

}


/* =========================
   CLOSE MODALS ON BACKDROP
========================= */

document.getElementById("memoryModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeMemory();
        }

    });


document.getElementById("finalModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeFinalMessage();
        }

    });

