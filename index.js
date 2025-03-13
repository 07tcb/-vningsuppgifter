function togglePopup(product) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const popupImg = document.getElementById("popup-img");

    if (product === "aerox") {
        popupText.textContent = "Aerox Stage 90cc - Stunter's Enthusiast";
        popupImg.src = "aerox.jfif";
    } else if (product === "derbi") {
        popupText.textContent = "Derbi Senda 110 Parmakit - Speed Demon";
        popupImg.src = "derbi1.jpg";
    } else if (product === "kundvagn") {
        popupText.textContent = "125cc Kundvagn - Ultimate Shopping Experience";
        popupImg.src = "derbi1.jpg";
    }

    popup.style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function openFormPopup(serviceType) {
    const popup = document.getElementById("popup-form");
    document.getElementById("form-title").textContent = serviceType;
    popup.style.display = "block";
}

function closeFormPopup() {
    document.getElementById("popup-form").style.display = "none";
}

// Close popup when clicking outside
document.addEventListener("click", function(event) {
    const popup = document.getElementById("popup-form");
    if (popup.style.display === "block" && !popup.contains(event.target) && !event.target.closest('.service')) {
        closeFormPopup();
    }
});
