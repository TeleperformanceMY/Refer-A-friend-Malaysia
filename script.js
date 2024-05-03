document.addEventListener("DOMContentLoaded", function() {
    const idForm = document.getElementById("id-form");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const generatedLink = document.getElementById("generated-link");
    const qrImg = document.getElementById('qrImg');
    const qrBox = document.getElementById('qrBox');
    const idInput = document.getElementById("id");
    const shareButtonWhatsApp = document.getElementById("share-button-whatsapp");
    const shareButtonLine = document.getElementById("share-button-line");

    idForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const id = idInput.value;
        
        // Check if the ID field is empty
        if (!id.trim()) {
            alert("Please enter the BMS Ident first.");
            return;
        }
        
        // Generate the link using the entered ID number
        const link = `https://careerseng-teleperformance.icims.com/jobs/45525/customer-success-specialist---japanese-support-%28penang%29/job?mode=job&iis=${id}`;
        // Update the generated link display as a clickable link
        generatedLink.innerHTML = `<a href="${link}" target="_blank" class="generated-link">${link}</a>`;
        
        // Generate QR code for the link
        generateQrCode(link);
        
        // Show step 2 and hide step 1
        step1.style.display = "none";
        step2.style.display = "block";
    });

    const button2 = document.createElement("button");
    button2.textContent = "Mandarin";
    button2.setAttribute("id", "button2");
    button2.addEventListener("click", function(event) {
        event.preventDefault();
        
        const id = idInput.value;
        
        // Check if the ID field is empty
        if (!id.trim()) {
            alert("Please enter the BMS Ident first.");
            return;
        }
        
        // Generate the link using the entered ID number
        const link = `https://careerseng-teleperformance.icims.com/jobs/37277/customer-success-specialist---mandarin/job?mode=job&iis=${id}`;
        
        // Update the generated link display as a clickable link
        generatedLink.innerHTML = `<a href="${link}" target="_blank" class="generated-link">${link}</a>`;
        
        // Generate QR code for the link
        generateQrCode(link);
        
        // Show step 2 and hide step 1
        step1.style.display = "none";
        step2.style.display = "block";
    });

    idForm.appendChild(button2);

    shareButtonWhatsApp.addEventListener("click", function() {
        const link = generatedLink.textContent;
        const message = `Check out this link: ${link}`;

        // Create a shareable link for WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

        // Open WhatsApp share link in a new window
        window.open(whatsappLink, "_blank");
    });

    shareButtonLine.addEventListener("click", function() {
        const link = generatedLink.textContent;
        const message = `Check out this link: ${link}`;
    
        // Create a shareable link for LINE
        const lineLink = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
    
        // Open LINE share link in a new window
        window.open(lineLink, "_blank");
    });

    function generateQrCode(link) {
        // Construct the URL for the qrserver.com API
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;

        // Generating image 
        qrImg.src = apiUrl;
        qrBox.setAttribute("id", "qrBoxGenerated");
    }
});
