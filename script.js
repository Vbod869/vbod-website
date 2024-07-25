var whatsappMessage = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var whatsappNumber = '+62895358165040'; // Ganti dengan nomor WhatsApp Anda
    var whatsappMessage = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;
    var whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    document.getElementById('notification').style.display = 'block';
    setTimeout(() => {
        document.getElementById('notification').style.display = 'none';
    }, 3000);
    
    document.getElementById('contact-form').reset();
});
var whatsappMessage = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var whatsappNumber = '+62895358165040'; // Ganti dengan nomor WhatsApp Anda
    var whatsappMessage = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;
    var whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    document.getElementById('notification').style.display = 'block';
    setTimeout(() => {
        document.getElementById('notification').style.display = 'none';
    }, 3000);
    
    document.getElementById('contact-form').reset();
});

