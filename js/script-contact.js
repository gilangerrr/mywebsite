(function () {
    emailjs.init("VfbBUIPSyQUkZ9_-G"); // Ganti dengan Public Key Anda
})();

function sendEmail(event) {
    event.preventDefault(); // Mencegah pengiriman formulir standar

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Log untuk memeriksa nilai
    console.log("Nama:", name);
    console.log("Email:", email);
    console.log("Pesan:", message);

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Silakan masukkan alamat email yang valid.");
        return; // Menghentikan proses pengiriman
    }

    emailjs.send("service_adsmpwq", "template_5g4qxuq", {
        subject: `Pesan Baru dari ${name}`,
        content: `Pesan Baru dari ${name} Email:${email} Pesan:${message}`,
        to_email: "gm3588679@gmail.com", // Alamat email tujuan
        from_name: name, // Nama pengirim
        reply_to: email, // Alamat untuk balasan
        bcc: "", // Biarkan kosong jika tidak perlu
        cc: "" // Biarkan kosong jika tidak perlu
    }).then((response) => {
        alert('Pesan terkirim!');
        document.getElementById('contact-form').reset(); // Mengatur ulang formulir
    }, (error) => {
        console.error('Gagal mengirim pesan:', error);
        alert('Gagal mengirim pesan. Silakan coba lagi.');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.getElementById('contact');
    contactSection.style.display = 'block'; // Tampilkan elemen
    setTimeout(() => {
        contactSection.classList.add('show'); // Tambahkan kelas 'show' untuk efek fade
    }, 100); // Delay singkat untuk efek
});