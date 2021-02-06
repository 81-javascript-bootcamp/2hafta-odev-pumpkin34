/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: () => {
        console.log(car.registrationNumber + " " + car.brand);
    }
}

var myCarDetails =  car.displayDetails;
myCarDetails();


/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk //icerebilir//, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/ 

function isValidName(name) {
  return typeof name == 'string' && name !== "" && name.trim().length > 1 
}

console.log(isValidName("Ahmet") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false); /// burada kontrole gerek yok çünkü type String diye check ettik.
console.log(isValidName(undefined) === false); /// burada kontrole gerek yok çünkü type String diye check ettik.
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. 
It is a dystopian novel written in 1932." olacak sekilde cagirin.
**/
/**1. Yöntemimim apply ile array kullanmak 
const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley'
  
}
function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

summary.apply(book,["dystopian", "1932"]);
*/
/**2. Yöntemimim eksik parametreleri book içine ekleyip oradan çağırmak 

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'dystopian',
  year: 1932
}
function summary(book) {
  console.log(
    book.title + "was written by " + book.author + " It is a " + book.genre 
    +  " novel written in " + book.year)
}

summary(book);
*/


