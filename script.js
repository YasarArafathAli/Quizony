let menu_item = document.getElementById('menu');


function navToggle() {
    let headerEle = document.getElementById("header");
    headerEle.classList.toggle("active");

}




var signupModal = document.getElementById("signup-modal");
var loginModal = document.getElementById("login-modal");

var signupBtn = document.getElementById("signup-btn");
var loginBtn = document.getElementById("login-btn");


var innerSignupBtn = document.getElementById("inner-signup-btn");
var innerLoginBtn = document.getElementById("inner-login-btn");


var signupClose = document.getElementsByClassName("close")[0];
var loginClose = document.getElementsByClassName("close")[1];

signupBtn.onclick = function() {
  signupModal.style.display = "block";
}
loginBtn.onclick = function() {
  loginModal.style.display = "block";
}


innerSignupBtn.onclick = function() {
    signupModal.style.display = "block";
  loginModal.style.display = "none";
    
}
innerLoginBtn.onclick = function() {
    loginModal.style.display = "block";
    signupModal.style.display = "none";
    
}

signupClose.onclick = function() {
  signupModal.style.display = "none";
}

loginClose.onclick = function() {
  loginModal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == signupModal || event.target == loginModal ) {
    event.target.style.display = "none";
  }
}




quizzes.map(quiz => {
    
    const card = document.createElement('div')
    card.classList.add("quiz-card-outer")
    card.innerHTML = `<div class="quiz-card">
                        <a href="#">
                            <div class="head-info">
                                <span class="tag quiz">Quiz</span>
                                <img src= ${"https://www.quizony.com/" + quiz.image}>
                                <span class="time">${quiz.date}</span>
                            </div>
                            <div class="quiz-info">
                                <h4>${quiz.title}</h4>
                                <p>${quiz.descr}</p>
                            </div>
                        </a>
                    </div>
                    <div class="stats">
                        <div class="trending"><i class="fa fa-list" aria-hidden="true"></i><span
                                class="trend-num">12</span></div>
                        <div class="seen"><i class="fa fa-eye" aria-hidden="true"></i><span
                                class="seen-num">232323</span></div>
                        <div class="likes"><i class="fas fa-thumbs-up "></i><span class="likes-num">22</span></div>
                        <div class="user"><i class="fa fa-user" aria-hidden="true"></i><span
                                class="user-name">${quiz.author}</span></div>
                    </div>`;
    menu_item.appendChild(card)
})


