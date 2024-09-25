$(document).ready(function() {
    $('.img-custom').on('click', function() {
        var carouselInner = $('#carouselExampleIndicators .carousel-inner');
        carouselInner.empty(); // Kosongkan isi sebelumnya

        // Ambil gambar yang dipilih
        var selectedSrc = $(this).data('bs-img-src');

        // Tambahkan gambar ke carousel
        $('.img-custom').each(function(index) {
            var src = $(this).data('bs-img-src'); // Ambil src dari data attribute
            var activeClass = src === selectedSrc ? 'active' : ''; // Tandai gambar yang dipilih sebagai aktif
            carouselInner.append(`
                <div class="carousel-item ${activeClass}">
                    <img src="${src}" class="d-block w-100" alt="Gambar ${index + 1}">
                </div>
            `);
        });

        // Tampilkan modal
        $('#imageModal').modal('show');
    });
});


 // Menambahkan efek zoom saat ketuk pada perangkat mobile
 const images = document.querySelectorAll('.img-custom');

 images.forEach(image => {
     image.addEventListener('click', () => {
         // Hapus kelas aktif dari semua gambar
         images.forEach(img => img.classList.remove('active'));
         // Tambahkan kelas aktif ke gambar yang diklik
         image.classList.add('active');

         // Hapus kelas aktif setelah beberapa waktu
         setTimeout(() => {
             image.classList.remove('active');
         }, 300);
     });
 });