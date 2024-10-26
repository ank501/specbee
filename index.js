document.addEventListener("DOMContentLoaded", function () {
    const speakersContainer = document.getElementById("speakersContainer");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");
    const popupImg = document.getElementById("popupImg");
    const popupName = document.getElementById("popupName");
    const popupContact = document.getElementById("popupContact");
    const popupTitle = document.getElementById("popupTitle");
    const popupDescription = document.getElementById("popupDescription");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
  
    // Array holding speaker data
    const speakersData = [
      // 8+ Speaker objects with id, name, contact, title, image, description...
      { id: 1, name: "John Doe", contact: "johndoe@example.com", title: "AI Expert", image: "./img/speaker1.jpeg", description: "John has 10 years of experience in AI." },
      { id: 2, name: "Jane Smith", contact: "janesmith@example.com", title: "Blockchain Specialist", image: "./img/speaker2.jpeg", description: "Jane is an expert in blockchain." },
      { id: 3, name: "Michael Johnson", contact: "michaeljohnson@example.com", title: "Cybersecurity Analyst", image: "./img/speaker3.jpeg", description: "Michael is skilled in cybersecurity." },
      { id: 4, name: "Alice Brown", contact: "alicebrown@example.com", title: "Web Developer", image: "./img/speaker4.jpeg", description: "Alice is a full-stack web developer." },
      { id: 5, name: "Robert White", contact: "robertwhite@example.com", title: "Data Scientist", image: "speaker5.jpg", description: "Robert is experienced in data science." },
      { id: 6, name: "Nancy Davis", contact: "nancydavis@example.com", title: "UX Designer", image: "speaker6.jpg", description: "Nancy is a talented UX designer." },
      { id: 7, name: "Chris Lee", contact: "chrislee@example.com", title: "Digital Marketer", image: "speaker7.jpg", description: "Chris specializes in digital marketing." },
      { id: 8, name: "Anna Scott", contact: "annascott@example.com", title: "Product Manager", image: "speaker8.jpg", description: "Anna has a knack for product management." }
    ];
  
    // Pagination setup
    const cardsPerPage = 4;
    let startIndex = 0;
  
    // Function to create and display speaker cards
    function displayCards() {
      speakersContainer.innerHTML = ""; // Clear existing cards
      const endIndex = startIndex + cardsPerPage;
      const currentSpeakers = speakersData.slice(startIndex, endIndex);
  
      currentSpeakers.forEach(speaker => {
        const card = document.createElement("div");
        card.classList.add("speaker-card");
        card.dataset.id = speaker.id;
        card.innerHTML = `
        <div class="speaker-content-wrapper">
          <img src="${speaker.image}" alt="${speaker.name}" class="speaker-img">
          <div class="speaker-detail-wrapper">
            <p class="speaker-name">${speaker.name}</p>
            <p class="speaker-post">Contact: ${speaker.post}</p>
            <p class="speaker-company">Contact: ${speaker.company}</p>
          </div>
        </div>
            `;
        card.addEventListener("click", () => showPopup(speaker));
        speakersContainer.appendChild(card);
      });
  
      // Toggle button visibility
      prevBtn.style.display = startIndex === 0 ? "none" : "inline-block";
      nextBtn.style.display = endIndex >= speakersData.length ? "none" : "inline-block";
    }
  
    // Show popup with speaker details
    function showPopup(speaker) {
      popupImg.src = speaker.image;
      popupName.textContent = speaker.name;
      popupContact.textContent = `Contact: ${speaker.contact}`;
      popupTitle.textContent = `Title: ${speaker.title}`;
      popupDescription.textContent = speaker.description;
      popup.style.display = "flex";
    }
  
    // Event listeners for next and prev buttons
    nextBtn.addEventListener("click", () => {
      if (startIndex + cardsPerPage < speakersData.length) {
        startIndex += cardsPerPage;
        displayCards();
      }
    });
  
    prevBtn.addEventListener("click", () => {
      if (startIndex - cardsPerPage >= 0) {
        startIndex -= cardsPerPage;
        displayCards();
      }
    });
  
    // Close popup
    closeBtn.addEventListener("click", () => popup.style.display = "none");
  
    // Initial display
    displayCards();
  });
  