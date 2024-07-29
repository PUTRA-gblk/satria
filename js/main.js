document.querySelectorAll('.navcenter a')
    .forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('section')
            .forEach(section => {
            section.style.display = 'none';
        });
        const target = this.getAttribute('href')
            .substr(1);
        document.getElementById(target)
            .style.display = 'block';
    });
});

const hamburger = document.querySelector(".hamburger");
const navcenter = document.querySelector(".navcenter");
const navbrand = document.querySelector(".navbrand");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navcenter.classList.toggle("active");
    navbrand.classList.toggle("active");
    navbar.classList.toggle("active");
})

function Unclick() {
    hamburger.classList.remove("active");
    navcenter.classList.remove("active");
    navbrand.classList.remove("active");
    navbar.classList.remove("active");
}

// Function to toggle FAQ answer visibility
function toggleFAQAnswer(event) {
    const answer = event.target.nextElementSibling;
    answer.classList.toggle("show");
    event.target.classList.toggle("opened");
}

// Add event listeners to FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(function(question) {
    question.addEventListener("click", toggleFAQAnswer);
});

window.onload = function() {
    // Tampilkan pop-up notifikasi saat halaman selesai dimuat
    var popup = document.getElementById("popup");
    popup.style.display = "block"; // Tampilkan pop-up

    // Fungsi untuk menyembunyikan pop-up saat tombol ditutup
    document.getElementById("closeBtn")
        .onclick = function() {
        popup.style.display = "none"; // Sembunyikan pop-up
    };
};


document.addEventListener('DOMContentLoaded', function() {
    const toggleFAQ = document.getElementById('toggleFAQ');
    const faqContainer = document.getElementById('faqContainer');

    toggleFAQ.addEventListener('click', function() {
        faqContainer.classList.toggle('show');
    });
});

let count = 1;
let price = 8000; // Initial price

function changeCount(value) {
    count += value;
    if (count < 1) {
        count = 1; // Ensure count doesn't go below 1
    }
    document.getElementById("productCount").innerText = count;
    updatePrice();
}

function updatePrice() {
    let totalPrice = count * price;
    document.getElementById("productPrice").innerText = totalPrice.toFixed(2);
}

function showPopup(productName) {
    let totalPrice = count * price;
    let message = "Product: " + productName + "\nCount: " + count + "\nTotal Price: $" + totalPrice.toFixed(2);
    alert(message);
    orderWhatsApp(productName, count, totalPrice.toFixed(2));
}

function orderWhatsApp(name, count, totalPrice) {
    let message = "Halo, saya ingin memesan \n" + name + " sebanyak " + count + " seharga Rp " + totalPrice + ". \nSaya Tunggu Pesanannya, Terimakasih!";
    let whatsappLink = "https://api.whatsapp.com/send?phone=+6289655321800&text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
}


    // Function to handle form submission
    function submitForm() {
        // Get form data
        var name = document.getElementById('name').value;
        var feedback = document.getElementById('feedback').value;
        var message = document.getElementById('message').value;

        // Construct WhatsApp message
        var whatsappMessage = "Name: " + name + "%0A" +
                              "Feedback / Criticism: " + feedback + "%0A" +
                              "Message: " + message;

        // Redirect to WhatsApp with the constructed message
        window.location.href = "https://wa.me/+6281572024769?text=" + whatsappMessage;
    }

    // Add event listener to the form submission button
    document.getElementById('submit-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        submitForm(); // Call the function to handle form submission
    });
