var singleDigitNum = [ "০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯" ];

var bengaliNumbers = [
    "শুন্য", "এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়",
    "দশ", "এগারো", "বারো", "তেরো", "চৌদ্দ", "পনেরো", "ষোল", "সতেরো", "আঠারো", "ঊন্নিশ",
    "কুড়ি", "একুশ", "বাইশ", "তেইশ", "চব্বিশ", "পঁচিশ", "ছাব্বিশ", "সাতাশ", "আঠাশ", "ঊনত্রিশ",
    "ত্রিশ", "একত্রিশ", "বত্রিশ", "তেত্রিশ", "চৌত্রিশ", "পঁয়ত্রিশ", "ছত্রিশ", "সাইত্রিশ", "আটত্রিশ", "ঊনচল্লিশ",
    "চল্লিশ", "একচল্লিশ", "বিয়াল্লিশ", "তেতাল্লিশ", "চুয়াল্লিশ", "পঁয়তাল্লিশ", "ছিচল্লিশ", "সাতচল্লিশ", "আটচল্লিশ", "ঊনপঞ্চাশ",
    "পঞ্চাশ", "একান্ন", "বাহান্ন", "তিপ্পান্ন", "চুয়ান্ন", "পঞ্চান্ন", "ছাপ্পান্ন", "সাতান্ন", "আটান্ন", "ঊনষাট",
    "ষাট", "একষট্টি", "বাষট্টি", "তেষট্টি", "চৌষট্টি", "পঁয়ষট্টি", "ছিষট্টি", "সাতষট্টি", "আটষট্টি", "ঊনসত্তর",
    "সত্তর", "একাত্তর", "বাহাত্তর", "তিহাত্তর", "চুয়াত্তর", "পঁচাত্তর", "ছিয়াত্তর", "সাতাত্তর", "আটাত্তর", "ঊনআশি",
    "আশি", "একাশি", "বিরাশি", "তিরাশি", "চুরাশি", "পঁচাশি", "ছিয়াশি", "সাতাশি", "অষ্টআশি", "ঊননব্বই",
    "নব্বই", "একানব্বই", "বিরানব্বই", "তিরানব্বই", "চুরানব্বই", "পঁচানব্বই", "ছিয়ানব্বই", "সাতানব্বই", "আটানব্বই", "নিরানব্বই"
];

var englishSpelling = [
    "Shunno", "Ek", "Dui", "Teen", "Char", "Panch", "Chhoi", "Saat", "Aath", "Noi",
    "Dos", "Egaro", "Baro", "Tero", "Choddo", "Ponero", "Sholo", "Shotero", "Aathero", "Unnis",
    "Kuri", "Ekush", "Baish", "Teish", "Chobbish", "Pochis", "Chabbis", "Sathas", "Aathas", "Unotiris",
    "Tiris", "Ektiris", "Bottiris", "Tettiris", "Choutiris", "Poitiris", "Chhotiris", "Sathtiris", "Aattiris", "Unochollish",
    "Chollish", "Ekchollish", "Biyallish", "Tetallish", "Chuallish", "Poytallish", "Chhichollish", "Sathchollish", "Aatchollish",
    "Unoponchas", "Ponchas", "Ekanno", "Bahanno", "Tippanno", "Chuanno", "Ponchanno", "Chhappanno", "Sathanno", "Aatanno",
    "Unoshaat", "Shaat", "Ekshotti", "Bashotti", "Teshotti", "Choushotti", "Poishotti", "Chhishotti", "Sathshotti", "Aatshotti",
    "Unoshottor", "Shottor", "Ekattor", "Bahattor", "Tiyattor", "Chuattor", "Pochattor", "Chhiyattor", "Satattor", "Aatattor",
    "Unoashi", "Ashi", "Ekashi", "Birashi", "Tirashi", "Churashi", "Pochashi", "Chhiashi", "Sathashi", "Aatashi", "Unonobboi",
    "Nobboi", "Ekanobboi", "Biranobboi", "Tiranobboi", "Churanobboi", "Pochanobboi", "Chhiyanobboi", "Shatanobboi", "Atanobboi",
    "Niranobboi"
];

var bengaliNumberElement = document.getElementById("bengali-number");
var bengaliNumWordsElement = document.getElementById("bengali-words");
var englishPronunciationElement = document.getElementById("english-pronunciation");
var inputFormElement = document.getElementById("input-form");
var errorHeaderElement = document.getElementById("error-header");
var errorMessageElement = document.getElementById("error-message");
var englishNumberInput = document.getElementById("english-number");
var numberFormatter = new Intl.NumberFormat('en-IN');
var clearButton = document.getElementById("clear-button");

function isNumeric(number){
    return !isNaN(number);
}

function numberToWords(number){
    var result = {
      "englishNumber" : number,
      "bengaliNumber": "",
      "bengaliNumWords": "",
      "englishSpellWords": "",
      "isValid": false,
      "errorHeader": "",
      "errorMessage": ""
    };
    if(isNumeric(number)){
        var num = Number(number);
        number = Math.abs(num).toString();

        var bengaliNumber = "";
        for(var i = 0; i < number.length; i++){
            bengaliNumber += singleDigitNum[Number(number.charAt(i))];
        }
        var x = bengaliNumber;
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=([০১২৩৪৫৬৭৮৯]{2})+(?![০১২৩৪৫৬৭৮৯]))/g, ",")
                  + lastThree;

        bengaliNumber = res.charAt(0) !== ',' ? res : res.replace(",", "");

        var bengaliWords = "";
        var englishSpell = "";
        if(num < 0){
            bengaliNumber = "-" + bengaliNumber;
            bengaliWords = "মাইনাস ";
            englishSpell = "Minus ";
            num = Math.abs(num);
        }

        var multipleDigits = false;

        if(num <= 999999999){
            var croreNum = Math.floor(num / 10000000);
            if(croreNum !== 0){
                multipleDigits = true;
                bengaliWords += bengaliNumbers[croreNum] + " কটি ";
                englishSpell += englishSpelling[croreNum] + " Koti ";
                num = num % 10000000;
            }

            var tenLakhNum = Math.floor(num / 1000000);
            var lakhNum = Math.floor((num % 1000000) / 100000);
            var lakNum = tenLakhNum * 10 + lakhNum;
            if(lakNum !== 0){
                multipleDigits = true;
                bengaliWords += bengaliNumbers[lakNum] + " লক্ষ ";
                englishSpell += englishSpelling[lakNum] + " Lokkho ";
                num = num % 100000;
            }

            lakhNum = Math.floor(num / 100000);
            if(lakhNum !== 0){
                multipleDigits = true;
                bengaliWords += bengaliNumbers[lakhNum] + " লক্ষ ";
                englishSpell += englishSpelling[lakhNum] + " Lokkho ";
                num = num % 100000;
            }

            var tenThousandthNum = Math.floor(num / 10000);
            var thousandthNum = Math.floor((num % 10000) / 1000);
            var thouNum = tenThousandthNum * 10 + thousandthNum;
            if(thouNum !== 0){
                multipleDigits = true;
                bengaliWords += bengaliNumbers[thouNum] + " হাজার ";
                englishSpell += englishSpelling[thouNum] + " Hazar ";
                num = num % 1000;
            }

            thousandthNum = Math.floor(num / 1000);
            if(thousandthNum !== 0){
                multipleDigits = true;
                bengaliWords += bengaliNumbers[thousandthNum] + " হাজার ";
                englishSpell += englishSpelling[thousandthNum] + " Hazar ";
                num = num % 1000;
            }

            var hundredthNum = Math.floor(num / 100);
            if(hundredthNum !== 0){
                multipleDigits = true;
                bengaliWords += bengaliNumbers[hundredthNum] + "শো ";
                englishSpell += englishSpelling[hundredthNum] + "sho ";
                num = num % 100;
            }

            if(!multipleDigits || num !== 0){
                if(num <= 99){
                    bengaliWords += bengaliNumbers[num];
                    englishSpell += englishSpelling[num];
                }
            }

            result["bengaliNumber"] = bengaliNumber;
            result["bengaliNumWords"] = bengaliWords;
            result["englishSpellWords"] = englishSpell;
            result["isValid"] = true;
        } else {
            result["errorHeader"] = "Out of range"
            result["errorMessage"] = "Number is out of range. Enter a number between -100 crores and 100 crores";
            result["isValid"] = false;
        }
    } else {
       result["errorHeader"] = "Invalid number";
       result["errorMessage"] = "Please enter a valid number without decimal point";
       result["isValid"] = false;
    }

    return result;
}

function reset(preserveErrorMessage){
    bengaliNumberElement.value = "";
    bengaliNumWordsElement.value = "";
    englishPronunciationElement.value = "";
    if(!preserveErrorMessage){
        inputFormElement.classList.remove("error");
    }
}

function render(number) {
    number = number.replaceAll(',', '');
    if(number.length !== 0){
        // Skip rendering any further if - (minus) is typed
        if(number.length === 1 && number.charAt(0) === '-'){
            reset(false);
            return;
        }
        var result = numberToWords(number);
        if (result["isValid"]) {
            englishNumberInput.value = numberFormatter.format(number);
            inputFormElement.classList.remove("error");
            bengaliNumberElement.value = result["bengaliNumber"];
            bengaliNumWordsElement.value = result["bengaliNumWords"];
            englishPronunciationElement.value = result["englishSpellWords"];
        } else {
            errorHeaderElement.innerHTML = result["errorHeader"];
            if(result["errorHeader"] === "Out of range"){
                englishNumberInput.value = numberFormatter.format(number);
            }
            errorMessageElement.innerHTML = result["errorMessage"];
            inputFormElement.classList.add("error");
            reset(true);
        }
    } else {
        reset(false);
    }
}

englishNumberInput.addEventListener("input", function(){
    render(this.value);
});

clearButton.addEventListener("click", function(){
    englishNumberInput.value = "";
    reset(false);
});
