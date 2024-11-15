//
// ANASAYFA BOLUMU -------------------------------------------------------------------------------------------------------
//


////SAAT BILGISI --------------------------------------------------------------------------------------------------

function saat() {
    //Yeni bir date nesnesi olusturdum
    const date = new Date();
    //Olusturdugum nesneden saat dakika ve saniye bilgilerini datetime degiskenine atadim
    const clock = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    //Datetime degiskenindeki degeri cekebilmek icin bir id belirledim.
    document.getkategoriById('clock').textContent = clock;
}
//1000 milisaniyede yani her saniyede bir saat bilgisini guncellemek istedim
setInterval(saat, 1000);
//Saat bilgisini sayfa yukenirken gostermek icin olusturdugum fonksiyonu cagirdim
saat();

////--------------------------------------------------------------------------------------------------------------



////ILETISIM FORMAT KONTROLU

// Bu fonksiyonda anasayfadaki iletisim kisminin dogru formatta doldurulup doldurulmadigini kontrol ediyorum.
// Burada yaptigim kontroller: isim ve mesaj kismi bos birakilamaz ve e posta belirtilen formatta olmalidir.
function iletisim_format_kontrolu() {

    const email = document.getElementById('email').value;
    const email_format = /\S+@\S+\.\S+/; // e-mail formati (yazi + @ + yazi + nokta + yazi)
    const mesaj = document.getElementById('mesaj').value;
    const isim = document.getElementById('isim').value;

    if (email_format.test(email)) { //e posta formati dogru ise mesaj kutusunun bos olup olmadigini kontrol ettiriyorum.
        if (mesaj.trim() != "") { //trim fonksiyonu ile mesajin bos olup olmadigini kontrol ediyorum.
            if (isim.trim() != "") { //isim kisminin bos olup olmadigini kontrol ediyorum.
                alert("Mesajınız Gönderildi.");
            } else {
                alert("Lütfen adınızı girin!!!");
            }
        } else {
            alert("Lütfen bir mesaj girin!!!");
        }
    } else {
        alert("E-posta formatı hatalı veya boş!!!");
    }
}


////--------------------------------------------------------------------------------------------------------------





//
// HAKKIMDA BÖLÜMÜ ---------------------------------------------------------------------------------------------------------
//


function daha_fazla_oku() {
    //icerigin devam kismini bir degiskene atadim.
    const icerik_devam = document.getElementById('icerik_devam_id');
    //fonksiyonel butonum
    const buton_fazla_az = document.getElementById('buton_fazla_az_id');

    //fonksiyonum bir buton ile calistirildiginda...

    //icerigin devami baslangicta gorunmuyor ise goster ve buton metnini 'daha az goster' olarak degistir.
    if (icerik_devam.style.display == 'none') {
        icerik_devam.style.display = 'inline';
        buton_fazla_az.textContent = 'Daha Az Göster';
        //icerigin devami gorunuyor ise gizle ve buton metnini 'daha fazla goster' olarak degistir.
    } else {
        icerik_devam.style.display = 'none';
        buton_fazla_az.textContent = 'Daha Fazla Göster';
    }
}

////--------------------------------------------------------------------------------------------------------------

//
// PROJELER BÖLÜMÜ ---------------------------------------------------------------------------------------------------------
//


function modalAc(gorseller) {
    //gorsel tanimlamasini modal degiskenine atadim
    const modal = document.getElementById("modal");
    //buyutulmus gorsel tanimlamasini modal_opened degiskenine atadim
    const modal_opened = document.getElementById("modal_opened");
    //gorselin alt attribute unu imgText degiskenine atadim
    const imgText = document.getElementById("imgtext");
    
    //gorselin kaynagini ve alt metnini aldim
    modal_opened.src = gorseller.src; // Resim kaynağını seçilen resmin kaynağıyla değiştir
    imgText.innerHTML = gorseller.alt; // Alt metni seçilen resmin alt metniyle değiştir
    
    //modal gosterme
    modal.style.display = "block"; // Modalın görünürlüğünü 'block' yap
}

function modalKapat() {
    //modal id'sini alan buyutulmuş gorseli sectim
    const modal = document.getElementById("modal");
    //modali kapattim
    modal.style.display = "none";
}



function kategoriyiGetir(kategori) {
    //Secilen kategori degerini value degiskenine atadim
    const value = kategori.value;
    //column sinifinda olusturdugum tum projeleri aldim
    const projeler = document.getElementsByClassName('column');

    //projeleri bir dongu ile dolasarak her birinin kategori degerini kontrol ettim
    for (let i = 0; i < projeler.length; i++) {
        const proje = projeler[i];
        //projelerin kategori bilgilerini aldim
        const projeAttribute = proje.getAttribute('kategori');

        //kategori degeri all ise tum projeleri gosterdim.
        if (value == 'all') {
            proje.style.display = 'block';
            continue;
        }

        //proje attribute degeri kategoriye esit degilse gizledim, esitse gosterdim.
        if (projeAttribute != value) {
            proje.style.display = 'none';
        } else {
            proje.style.display = 'block';
        }
    }
}


