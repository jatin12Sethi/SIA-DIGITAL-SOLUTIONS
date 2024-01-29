document.addEventListener("DOMContentLoaded", function() {
    // Create WhatsApp icon container
    var whatsappIcon = document.createElement("div");
    whatsappIcon.classList.add("whatsapp-icon");
    
    // Create anchor element with WhatsApp API link
    var whatsappLink = document.createElement("a");
    whatsappLink.href = "https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER_HERE";
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    
    // Create image element for the WhatsApp icon
    var whatsappImg = document.createElement("img");
    whatsappImg.src = "./assets/images/wttsp.svg"; // Replace with your icon image path
    whatsappImg.alt = "WhatsApp Icon";
    
    // Append image to anchor element, and anchor element to WhatsApp icon container
    whatsappLink.appendChild(whatsappImg);
    whatsappIcon.appendChild(whatsappLink);
    
    // Append WhatsApp icon container to the body
    document.body.appendChild(whatsappIcon);
    
    // Apply styles directly
    whatsappIcon.style.position = "fixed";
    whatsappIcon.style.bottom = "20px";
    whatsappIcon.style.left = "0px";
    whatsappIcon.style.zIndex = "999";
    whatsappIcon.style.transition = "transform 0.3s ease-in-out";
    whatsappIcon.style.cursor = "pointer"; // Add pointer cursor
    whatsappIcon.style.height = "200px";
    whatsappIcon.style.width = "200px";
    whatsappIcon.style.borderRadius = "50%";


    
    whatsappIcon.addEventListener("mouseover", function() {
        whatsappIcon.style.transform = "scale(1.1)";
    });
    
    whatsappIcon.addEventListener("mouseout", function() {
        whatsappIcon.style.transform = "scale(1)";
    });
});
