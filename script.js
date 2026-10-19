// Annie Do — Lab 8

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