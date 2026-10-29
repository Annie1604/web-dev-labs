// Annie Do — Lab 9

/*console.log("1. Starting");
setTimeout(function(){
    console.log("2. This runs later");
}, 1000);
console.log("3. This runs immediately"); */

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");
const themeBtn = document.querySelector("#theme-btn");
const goalsList = document.querySelector("#goals-list");

function updateLikeDisplay(count) {
    if (likeCount) {
        likeCount.textContent = `${count} likes`;
    } else {
        console.warn("like-count not found on this page");
    }

    if (likeMessage) {
        if (count >= 10) {
            likeMessage.textContent = "Wow, thanks for all the likes!";
        } else if (count >= 5) {
            likeMessage.textContent = "Glad you like it!";
        } else {
            likeMessage.textContent = "";
        }
    } else {
        console.warn("like-message not found on this page");
    }
}

const LikeCounter = {
    likes: 0,

    increment() {
        this.likes = this.likes + 1;
        this.render();
    },

    render() {
        updateLikeDisplay(this.likes);
    }
};

function incrementLikes() {
    LikeCounter.increment();
}

if (likeBtn) {
    likeBtn.addEventListener("click", incrementLikes);
} else {
    console.warn("like-btn not found on this page");
}


const goals = ["HTML", "CSS", "JavaScript"];

if (goalsList) {
    goals.forEach(function(goal) {
        const item = document.createElement("li");
        item.textContent = goal;
        goalsList.appendChild(item);
    });
} else {
    console.warn("goals-list not found on this page");
}

if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark");
    });
} else {
    console.warn("theme-btn not found on this page");
}
//lab 9

function  getGreetingAfterDelay(){
    return new Promise(function(resolve) {
        setTimeout(function(){
            resolve("Hello from the future!");
        }, 800);
    });
}

async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}
showGreeting();

const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

async function loadFact() {
    factDisplay.textContent= "Loading...";
    try{
        const response= await fetch("https://catfact.ninja/fact");
        if (!response.ok){
            throw new Error("Server responded with an error");
        }
        const data = await response.json();
        factDisplay.textContent = data.fact;
    } catch (error) {
        factDisplat.textContent = "Couldn't load a fact right now. Try again.";
        console.error(error);
    }
}

factBtn.addEventListener("click", loadFact);