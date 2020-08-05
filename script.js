// mengakses method alert() pada window
window.alert("Selamat datang di Official Website Dapur UNI!, pastikan koneksi internet lancar untuk mengakses ini Terimakasih")

// Kita juga bisa mengaksesnya seperti ini
//alert("Hello Browser!")

const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa ? - English - French - Japanese - Indonesia");

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
    language: language
};

if (user.language === "English") {
    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}


const container = document.querySelector('.container-satu');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {

    // apakah yang di klik adalah thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function (thumb) {
            // if (thumb.classList.contains('active')){
            //  thumb.classList.remove('active');
            //}
            thumb.className = 'thumb';

        });

        e.target.classList.add('active');
    }
});

window.onload = function () {
    jam();
}

function jam() {
    var e = document.getElementById('jam'),
        d = new Date(),
        h, m, s;
    h = d.getHours();
    m = set(d.getMinutes());
    s = set(d.getSeconds());

    e.innerHTML = h + ':' + m + ':' + s;

    setTimeout('jam()', 1000);
}

function set(e) {
    e = e < 10 ? '0' + e : e;
    return e;
}