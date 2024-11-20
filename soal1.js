const prompt = require('prompt-sync')();


function akarPangkatDua() {
    let x = parseFloat(prompt("Masukkan angka: "));
    if (x < 0) {
        console.log("Error: Tidak bisa input bilangan negatif");
        return;
    }
    if (x % 2 !== 0) {
        console.log("Error: Tidak bisa input bilangan ganjil");
        return;
    }

    const hasil = Math.sqrt(x);
    console.log(`Akar pangkat 2 dari ${x} adalah ${hasil}`);
}

// Menjalankan fungsi
akarPangkatDua();
