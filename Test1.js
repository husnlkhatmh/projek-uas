class Matchmaking {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.randomValue1 = this.generateRandomValue();
        this.randomValue2 = this.generateRandomValue();
        this._hasilbagi    = (this.randomValue1+this.randomValue2)/2;
    }

    static matchmaking(){
        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        const resultElement = document.getElementById('result');
        
        if (name1 && name2) {
            const match = new Matchmaking(name1, name2);
            
            const result = match.matchResult();
            resultElement.innerHTML = result;

            // Add the result to the user history
            userHistory.addEntry(name1, name2, result);
        } else {
            resultElement.innerHTML = 'Silakan masukkan kedua nama terlebih dahulu!';
        }
    }
    static matchmakingGacor() {
        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        const resultElement = document.getElementById('result');
    
        if (name1 && name2) {
            const match = new Gacor(name1, name2); // Membuat objek dari kelas Gacor
    
            const result = match.matchResult(); // Menjalankan metode matchResult dari kelas Gacor
            resultElement.innerHTML = result;
        } else {
            resultElement.innerHTML = 'Silakan masukkan kedua nama terlebih dahulu!';
        }
    }

    generateRandomValue() {
        return Math.floor(Math.random() * 100) + 1;
    }

    get hasilbagi() {
        return this._hasilbagi;
    }

    set hasilbagi(value) {
        // Di sini Anda dapat menambahkan validasi atau logika tambahan sebelum mengatur nilai
        this._hasilbagi = value;
    }


    calculateRomanceLevel() {
        const maxRandomValue = this._hasilbagi;
        let romanceLevel;

        switch (true) {
            case maxRandomValue >= 80:
                romanceLevel = 5;
                break;
            case maxRandomValue >= 60:
                romanceLevel = 4;
                break;
            case maxRandomValue >= 40:
                romanceLevel = 3;
                break;
            case maxRandomValue >= 0:
                romanceLevel = 2;
                break;
            default:
                romanceLevel = 1;
        }

        return romanceLevel;
    }

    peluangKDRT() {
        const maxRandomValue = this._hasilbagi;
        let romanceLevel;

        switch (true) {
            case maxRandomValue >= 80:
                romanceLevel = 1;
                break;
            case maxRandomValue >= 60:
                romanceLevel = 2;
                break;
            case maxRandomValue >= 40:
                romanceLevel = 3;
                break;
            case maxRandomValue >= 20:
                romanceLevel = 4;
                break;
            default:
                romanceLevel = 5;
        }

        return romanceLevel;
    }

    pesan() {
        const maxRandomValue = this._hasilbagi;
        let isipesan;

        switch (true) {
            case maxRandomValue >= 90:
                isipesan = "Semoga langgeng kalian berdua";
                break;
            case maxRandomValue >= 80:
                isipesan = "Pertahankan bruh";
                break
            case maxRandomValue >= 70:
                isipesan = "Pesan ini telah dihapus oleh Dedad Fajar TIF";
                break;
            case maxRandomValue >= 60:
                isipesan = "Uwaa, its Romeo & Juliett!";
                break;
            case maxRandomValue >= 50:
                isipesan = "Mending beli Jodoh Premium aja Masbro :-)";
                break;
            case maxRandomValue >= 40:
                isipesan = "Mas Riski Bilar?";
                break;
            case maxRandomValue >= 30:
                isipesan = "Mas Virgoun?";
            case maxRandomValue >= 20:
                isipesan = "GWS :(";
                break;
            case maxRandomValue >= 10:
                isipesan = "Nice Try Kawand";
                break;
            case maxRandomValue >= 0:
                isipesan = "Gini Amat Hidup";
                break;
        }

        return isipesan;
    }

    
    getRomanceStars(romanceLevel) {
        return '★'.repeat(romanceLevel); // Menggunakan karakter bintang untuk menggambarkan tingkat keromantisan
    }
    
    getLoyaltyStars(loyaltyLevel) {
        return '☆'.repeat(loyaltyLevel); // Menggunakan karakter bintang terbalik untuk menggambarkan tingkat kesetiaan
    }

    matchResult() {
        const romanceLevel = this.calculateRomanceLevel();
        const loyaltyLevel = this.peluangKDRT();
        
        const romanceStars = this.getRomanceStars(romanceLevel);
        const loyaltyStars = this.getLoyaltyStars(loyaltyLevel);
        
        const nilai1 = romanceLevel;

        const hasil1 = `Rata-rata dari ${this.name1} (${this.randomValue1}) dan ${this.name2} (${this.randomValue2}) adalah: ${(this.randomValue1+this.randomValue2)/2} <br>`;
        const hasil2 = `Keromantisan antara ${this.name1} dan ${this.name2} : ${romanceStars} <br>`; 
        const hasil3 = `Peluang KDRT antara ${this.name1} dan ${this.name2} : ${loyaltyStars} <br>`;
        const hasil4 = `Pesan : ${this.pesan()} <br>`;
        return [hasil1, hasil2, hasil3, hasil4].join('');
    }
}

class Gacor extends Matchmaking {
    constructor(name1, name2) {
        super(name1, name2);
    }

    generateRandomValue() {
        return Math.floor(Math.random() * 31) + 70; // Menghasilkan nilai antara 70 hingga 100
    }
}

