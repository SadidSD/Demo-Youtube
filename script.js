let subscribe = document.getElementById("subscribe")
let like = document.getElementById("like")
let share = document.getElementById("share")
let download = document.getElementById("download")

subscribe.addEventListener("click",function(){
  subscribe.innerText = "Subscribed"
  subscribe.style.backgroundColor = "rgb(209, 66, 66)"
})

like.addEventListener("click",function(){
  like.innerText = "liked"
})