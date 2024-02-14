const userId = window.location.search.replace("?userId=", "");
console.log(userId);

document.addEventListener("DOMContentLoaded", fetchPosts());
function fetchPosts() {
    fetch(`https://dummyjson.com/posts/user/${userId}`)
        .then((res) => res.json())
        .then((data) => renderPosts(data.posts));
}

function renderPosts(posts) {
    const feeds = document.querySelector(".user-feeds");
    const feedTemplate = document.querySelector("#feed-template");
    feeds.innerHTML = `User ${userId}'s Posts`;
    posts.forEach((post) => {
        const feed = feedTemplate.content.cloneNode(true);
        feed.querySelector(".feed-template b").innerText = post.title;
        feed.querySelector(".feed-template p").innerText = post.body;

        feeds.appendChild(feed);
    });
}
