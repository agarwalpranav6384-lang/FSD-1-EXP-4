let text = `node booking-system.js
Booking system running o port 3000
POST //api/book 200
{
  "success": true,
  "bookingId": 1718369248709,
  "remaining": 99
}`;

let output = document.getElementById("output");
let i = 0;

function typeEffect() {
    if (i < text.length) {
        output.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 20);
    }
}

typeEffect();