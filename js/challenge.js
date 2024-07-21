document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    let timerInterval;
  
    // functionality
    function startTimer() {
      timerInterval = setInterval(() => {
        count++;
        document.getElementById("counter").innerText = count;
      }, 1000);
    }
    startTimer();
  
    // plus and minus functionality
    document.getElementById("plus").addEventListener("click", () => {
      count++;
      document.getElementById("counter").innerText = count;
    });
  
    document.getElementById("minus").addEventListener("click", () => {
      count--;
      document.getElementById("counter").innerText = count;
    });
  
    const likes = {};
  //heart functionality
    document.getElementById("heart").addEventListener("click", () => {
      likes[count] = (likes[count] || 0) + 1;
      const likesList = document.querySelector(".likes");
      const existingLike = document.getElementById(`like-${count}`);
      if (existingLike) {
        existingLike.innerText = `${count} has been liked ${likes[count]} times`;
      } else {
        const likeItem = document.createElement("li");
        likeItem.id =` like-${count}`;
        likeItem.innerText = `${count} has been liked ${likes[count]} times`;
        likesList.appendChild(likeItem);
      }
    });
  
    // Pause and resume functionality
    const pauseButton = document.getElementById("pause");
  
    pauseButton.addEventListener("click", () => {
      if (pauseButton.innerText === "pause") {
        clearInterval(timerInterval);
        pauseButton.innerText = "resume";
        document.querySelectorAll("button:not(#pause)").forEach(btn => btn.disabled = true);
      } else {
        startTimer();
        pauseButton.innerText = "pause";
        document.querySelectorAll("button:not(#pause)").forEach(btn => btn.disabled = false);
      }
    });
  
    // Comment functionality
    document.getElementById("comment-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const commentText = document.getElementById("comment-input").value.trim();
      if (commentText) {
        const commentList = document.getElementById("list");
        const commentItem = document.createElement("p");
        commentItem.innerText = commentText;
        commentList.appendChild(commentItem);
        document.getElementById("comment-input").value = "";
      }
    });
  });