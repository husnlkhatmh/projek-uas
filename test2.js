class Matchmaking {
    constructor(birthdate1, birthdate2) {
        this.birthdate1 = new Date(birthdate1);
        this.birthdate2 = new Date(birthdate2);
        this._hasil = this.calculateCompatibilityScore();
        this._hasil2 = this.calculateAverageAge();
    }

    static matchmaking() {
        const birthdate1 = document.getElementById('birthdate1').value;
        const birthdate2 = document.getElementById('birthdate2').value;
        const resultElement = document.getElementById('result');

        if (birthdate1 && birthdate2) {
            const match = new Matchmaking(birthdate1, birthdate2);

            const result = match.matchResult();
            resultElement.innerHTML = result;
            userHistory.addEntry(name1, name2, result);
        } else {
            resultElement.innerHTML = 'Silakan masukkan kedua nama terlebih dahulu!';
        }
    }

    calculateAverageAge() {
        const today = new Date();
        const age1 = today.getFullYear() - this.birthdate1.getFullYear();
        const age2 = today.getFullYear() - this.birthdate2.getFullYear();
        return (age1 + age2) / 2;
    }

    calculateCompatibilityScore() {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        const adjustedScore = this.calculateAverageAge() + randomValue;
        const finalScore = adjustedScore > 100 ? 100 : adjustedScore;
    
        return finalScore;
    }

    get hasil() {
        return this._hasil;
    }

    set hasil(value) {
        this._hasil = value;
    }

    calculateRomanceScore() {
        const value = this._hasil;
        let romanceLevel;

        switch (true) {
            case value >= 80:
                romanceLevel = 5;
                break;
            case value >= 60:
                romanceLevel = 4;
                break;
            case value >= 40:
                romanceLevel = 3;
                break;
            case value >= 0:
                romanceLevel = 2;
                break;
            default:
                romanceLevel = 1;
        }

        return romanceLevel;
    }

    peluangKDRT() {
        const value = this._hasil;
        let kdrtLevel;

        switch (true) {
            case value >= 80:
                kdrtLevel = 1;
                break;
            case value >= 60:
                kdrtLevel = 2;
                break;
            case value >= 40:
                kdrtLevel = 3;
                break;
            case value >= 0:
                kdrtLevel = 4;
                break;
            default:
                kdrtLevel = 5;
        }

        return kdrtLevel;
    }

    pesan() {
        const value = this._hasil;
        let isipesan;

        switch (true) {
            case value >= 90:
                isipesan = "Semoga langgeng kalian berdua";
                break;
            case value >= 80:
                isipesan = "Pertahankan bruh";
                break
            case value >= 70:
                isipesan = "Pesan ini telah dihapus oleh Dedad Fajar TIF";
                break;
            case value >= 60:
                isipesan = "Uwaa, its Romeo & Juliett!";
                break;
            case value >= 50:
                isipesan = "Mending beli Jodoh Premium aja Masbro :-)";
                break;
            case value >= 40:
                isipesan = "Mas Riski Bilar?";
                break;
            case value >= 30:
                isipesan = "Mas Virgoun?";
            case value >= 20:
                isipesan = "GWS :(";
                break;
            case value >= 10:
                isipesan = "Nice Try Kawand";
                break;
            case value >= 0:
                isipesan = "Gini Amat Hidup";
                break;
        }

        return isipesan;
    }

    getRomanceStars(romanceLevel) {
        return '★'.repeat(romanceLevel);
    }

    getLoyaltyStars(loyaltyLevel) {
        return '☆'.repeat(loyaltyLevel);
    }

    matchResult() {
        const romanceLevel = this.calculateRomanceScore();
        const kdrtLevel = this.peluangKDRT();

        const romanceStars = this.getRomanceStars(romanceLevel);
        const kdrtStars = this.getLoyaltyStars(kdrtLevel);
        const pesancinta = this.pesan();

        const hasil1 = `Nilai perjodohannya adalah: ${this.hasil} <br>`;
        const hasil2 = `Keromantisannya adalah : ${romanceStars} <br>`;
        const hasil3 = `Peluang KDRTnya adalah : ${kdrtStars} <br>`;
        const hasil4 = `Pesan : ${this.pesan()} <br>`;

        return [hasil1, hasil2, hasil3, hasil4].join('');
    }
}

const userHistory = new UserHistory();
