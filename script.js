const scriptURL = 'https://script.google.com/macros/s/AKfycbz6NDQmPL6I9eIayuFrVqaJ-OMEnR32_TfVwvEI7FRr8kPYZ0Ydh36GvAq8jt3W-BAkkA/exec'
        const form = document.forms['pesanan-bakmi-jawa']
        const tandaTerkirim = document.querySelector('.tandaterkirim');
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');

      
        form.addEventListener('submit', e => {
          e.preventDefault()
        //   ketika tombol submit di klik
        // tampilkan tombol loading,hilangkan tombol kirim

        btnLoading.classList.toggle('hilang');
        btnKirim.classList.toggle('hilang');
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        //   tampilkan tombol kirim hilangkan tombol loading
            .then(response => {
                btnLoading.classList.toggle('hilang');
                btnKirim.classList.toggle('hilang');
                // tampilkan alert
                tandaTerkirim.classList.toggle('muncul');
                // reset formnya
                form.reset();
                console.log('Success!', response)
            })
            .catch(error => console.error('Error!', error.message))
        })

const menuToggle= document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})