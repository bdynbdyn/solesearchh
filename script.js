document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("feedbackModal");
    const btn = document.getElementById("feedbackBtn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("feedbackForm");

   
    btn.onclick = function() {
        modal.style.display = "block";
    }

   
    span.onclick = function() {
        modal.style.display = "none";
    }

   
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    form.onsubmit = function(e) {
        e.preventDefault();
        alert("Thank you for your feedback!");
        modal.style.display = "none";
        form.reset();
    }
});
