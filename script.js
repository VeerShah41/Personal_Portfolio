const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.style.display = (navbar.style.display === "flex") ? "none" : "flex";
});
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    cursorFollower.style.top = `${e.clientY}px`;
    cursorFollower.style.left = `${e.clientX}px`;
});
document.addEventListener("click", () => {
    cursorFollower.classList.add("cursor-follower-clicked");

    setTimeout(() => {
        cursorFollower.classList.remove("cursor-follower-clicked");
    }, 500);
});