//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

function processNumbers(num1, num2, callBack) {
  return callBack(num1, num2);
}
function sum(a, b) {
  return a * b;
}
console.log(processNumbers(10, 20, sum));

//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

function isValidUser(name, password) {
  if (name === "" && password === "") {
    return "true";
  } else {
    return "fake";
  }
}

console.log(typeof isValidUser("", ""));

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

function fibonacci(n) {
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + n;
}

console.log(fibonacci(9));

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

let counter = 10;

function timer() {
  let interval = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter === 0) {
      clearInterval(interval);
      console.log("დრო ამოიწურა!");
    }
  }, 1000);
}

timer();

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

let displayAge = (age) => {
  console.log(age);
};

function currentAge(birthyear, birthmonth, birthdate, callBack) {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDate = new Date().getDate();
  if (
    currentMonth > birthmonth ||
    (currentMonth === birthmonth && currentDate < birthdate)
  ) {
    callBack(currentYear - birthyear);
  } else if (currentMonth === birthmonth && currentDate >= birthdate) {
    callBack(currentYear - birthyear - 1);
  } else {
    callBack(currentYear - birthyear - 1);
  }
}

currentAge(2002, 7, 15, displayAge);

//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

const Currentday = new Date().getDay();
console.log(Currentday);
switch (Currentday) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("enter valid day");
    break;
}
