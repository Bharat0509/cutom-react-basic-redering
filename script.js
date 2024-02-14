// const searchSubmit = document.querySelector(".search-bar button")
// const feeds = document.querySelector(".feeds")
// const feedTemplate = document.querySelector("#feed-template")

import { createElement, useState } from "./MyReact.js";

// ========Event Listeners===========
// document.addEventListener("DOMContentLoaded", fetchPosts)
// searchSubmit.addEventListener("click", handleSubmit)

// // Without USING ASYNC/AWAIT
// function fetchPosts() {
//     fetch("https://dummyjson.com/posts")
//         .then((res) => res.json())
//         .then((data) => renderPosts(data.posts))
// }

// USING ASYNC/AWAIT
// async function fetchPosts() {
//     const posts = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//     ).then((res) => res.json())
//     renderPosts(posts)
// }

// Manually creating UI elements
// function renderPosts(posts) {
//     const feeds = document.querySelector(".feeds")
//     posts.forEach((post) => {
//         const p = document.createElement("p")
//         p.innerText = post.body

//         feeds.appendChild(p)
//     })
// }

// elements Using Template

// function renderPosts(posts) {
//     // if (posts.length == 0) {
//     //     feed.innerHTML =
//     //         "Ooops...No Search Results Found. Please try again with different keywords."
//     //     return
//     // }

//     posts.forEach((post) => {
//         const feed = feedTemplate.content.cloneNode(true)
//         feed.querySelector(
//             ".feed-template a"
//         ).href = `/starter/userPosts/index.html?userId=${post?.userId}`
//         feed.querySelector(".feed-template  h6").innerText = post.userId
//         feed.querySelector(".feed-template  b").innerText = post.title
//         feed.querySelector(".feed-template p").innerText = post.body
//         feed.querySelector(
//             "img"
//         ).src = `https://picsum.photos/seed/picsum/1024/400`

//         feeds.appendChild(feed)
//     })
// }

// function handleSubmit() {
//     const searchInput = document.querySelector(".search-bar input")

//     fetch(`https://dummyjson.com/posts/search?q=${searchInput.value}`)
//         .then((res) => res.json())
//         .then((data) => renderPosts(data.posts))
//     searchInput.value = ""
// }

const [name, setName] = useState("Bharat");
console.log(name);
setName('nit')
console.log(name)

const root = {
    type: "nav",
    props: {
        id: "navbar",
        style: "background-color: #808080; padding: 10px 10%;",
    },
    Children: [
        {
            type: "span",
            props: { style: "color: white; font-size: 20px;" },
            Children: [`${name}`],
        },
        {
            type: "ul",
            props: {
                style: "list-style-type: none; margin: 0; padding: 0; overflow: hidden;display:flex;gap:2rem",
            },
            Children: [
                {
                    type: "li",
                    props: { style: "float: left;" },
                    Children: ["Home"],
                },
                {
                    type: "li",
                    props: { style: "float: left;" },
                    Children: ["About"],
                },
                {
                    type: "li",
                    props: { style: "float: left;" },
                    Children: ["Contact"],
                },
            ],
        },
    ],
};
const element = createElement(root);
document.body.appendChild(element);
