const statusDiv = document.getElementById("status");
statusDiv.textContent = (new Date().getDay() === 5) ? "Yes, it's Friday!" : "Nope, not yet.";