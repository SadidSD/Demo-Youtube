let subscribe = document.getElementById("subscribe")
let like = document.getElementById("like")
let share = document.getElementById("share")
let download = document.getElementById("download")

let isSubscribed = false;
subscribe.addEventListener("click",function(){
  isSubscribed = !isSubscribed; 
  if(isSubscribed){
  subscribe.innerText = "Subscribed"
  subscribe.style.backgroundColor = "rgb(209, 66, 66)"}
  else{
    subscribe.innerText = "Subscribe";
    subscribe.style.backgroundColor = "";
  }})

  let isLiked = false;


like.addEventListener("click",function(){
  isLiked= !isLiked;
  if(isLiked){
    like.innerText = "liked"}
    else{
      like.innerText = "like";
    }
  }
)