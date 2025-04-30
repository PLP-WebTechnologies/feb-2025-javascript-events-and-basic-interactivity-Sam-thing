// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const message = document.getElementById("message");
  const changeTextBtn = document.getElementById("changeTextBtn");
  const toggleBoxBtn = document.getElementById("toggleBoxBtn");
  
  let isBackgroundColored = false; // Track if the background is currently colored
  let longPressTimer;

    // Add event listener for "Change Text" button
    changeTextBtn.addEventListener("click", () => {
        message.textContent = "changeTextBtn was clicked!";
        message.classList.toggle("highlight"); // Optional: Add a highlight effect
      });


  // Create a box element dynamically
  const box = document.createElement("div");
  box.id = "box";

  // Add event listener for "Change Text" button
  changeTextBtn.addEventListener("click", () => {
    message.textContent = "changeTextBtn was clicked!";
    message.classList.toggle("highlight"); // Optional: Add a highlight effect
  });

    // Add event listeners for long press on "Background Color" button
    toggleBoxBtn.addEventListener("mousedown", () => {
        longPressTimer = setTimeout(() => {
            if (isBackgroundColored) {
                document.body.style.backgroundColor = ""; // Reset to default background
              } else {
                document.body.style.backgroundColor = getRandomColor(); // Change to random color
              }
              isBackgroundColored = !isBackgroundColored; // Toggle the state
            }, 1000); // Trigger after 1 second
      });
    
      toggleBoxBtn.addEventListener("mouseup", () => {
        clearTimeout(longPressTimer); // Cancel the long press if the button is released early
      });
    
      toggleBoxBtn.addEventListener("mouseleave", () => {
        clearTimeout(longPressTimer); // Cancel the long press if the cursor leaves the button
      });
    
      // Function to generate a random color
      function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    });

document.addEventListener("keydown", (event) => {
      console.log(`Key pressed: ${event.key}`);
      if (event.key === "Enter") {
        alert("You pressed the Enter key!");
      }
    });

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const changeTextBtn = document.getElementById("changeTextBtn");
  const message = document.getElementById("message");

  // Change text and color on button click
  changeTextBtn.addEventListener("click", () => {
    message.textContent = "The text has been updated!";
    message.style.color = message.style.color === "red" ? "blue" : "red"; // Toggle color
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  let currentIndex = 0;

  const galleryImage = document.getElementById("galleryImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Update the image source
  const updateImage = () => {
    galleryImage.src = images[currentIndex];
  };

  // Previous button
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  // Next button
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.style.display = "none";
      });

      // Show the selected tab content
      document.getElementById(targetTab).style.display = "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = ["download (1).jpeg", "download (2).jpeg", "download (3).jpeg", "download.jpeg"];
  let currentIndex = 0;

  const slideshowImage = document.getElementById("slideshowImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Function to update the image source
  const updateImage = () => {
    slideshowImage.src = images[currentIndex];
  };

  // Event listener for the "Previous" button
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop backward
    updateImage();
  });

  // Event listener for the "Next" button
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop forward
    updateImage();
  });

  // Optional: Auto-play the slideshow every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Real-time feedback for email validation
  emailInput.addEventListener("input", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }
  });

  // Real-time feedback for password validation
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }
  });

  // Form submission validation
  form.addEventListener("submit", (event) => {
    let isValid = true;

    // Check email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = "block";
      isValid = false;
    }

    // Check password
    if (passwordInput.value.length < 8) {
      passwordError.style.display = "block";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
});

