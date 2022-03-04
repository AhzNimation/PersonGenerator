const passElem = document.getElementById('pass');
const name1Elem = document.getElementById('name1');
const name2Elem = document.getElementById('name2');
const jobElem = document.getElementById('job');
const ageElem = document.getElementById('age');
const avatarElem = document.getElementById('avatar');
const genButton = document.getElementById('genButton');
const searchElem = document.getElementById('search');

let uppercaseConsonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
let consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

let vocals = ['a', 'e', 'i', 'o', 'u'];

let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '<', '>', '?', '/'];

let jobArr = ['Web Developer', 'App Developer', 'Game Developer', 'Lecturer', 'Teacher', 'Mayor', 'Student', 'Farmer', 'Actress'];

let password;
let name1,
    name2;
let job;
let src;
let age;

function generate() {
    password = uppercase[Math.floor(Math.random() * uppercase.length)] + lowercase[Math.floor(Math.random() * lowercase.length)] + number[Math.floor(Math.random() * number.length)] + symbol[Math.floor(Math.random() * symbol.length)] + uppercase[Math.floor(Math.random() * uppercase.length)] + lowercase[Math.floor(Math.random() * lowercase.length)];

    name1 = `${uppercaseConsonant[Math.floor(Math.random() * uppercaseConsonant.length)]}${vocals[Math.floor(Math.random() * vocals.length)]}${consonant[Math.floor(Math.random() * consonant.length)]}${vocals[Math.floor(Math.random() * vocals.length)]}`;

    name2 = `${uppercaseConsonant[Math.floor(Math.random() * uppercaseConsonant.length)]}${vocals[Math.floor(Math.random() * vocals.length)]}${consonant[Math.floor(Math.random() * consonant.length)]}${vocals[Math.floor(Math.random() * vocals.length)]}`;

    job = jobArr[Math.floor(Math.random() * jobArr.length)];

    if (job == 'Web Developer' || job == 'App Developer' || job == 'Game Developer') {
        src = genderByName('Img/Developer.png', 'Img/DeveloperGirl.png');
        age = 24 + Math.floor(Math.random() * 11)
    } else if (job == 'Lecturer' || job == 'Teacher') {
        ;
        age = 24 + Math.floor(Math.random() * 11)
        if (age <= 27) {
            src = genderByName('https://www.w3schools.com/howto/img_avatar.png', 'https://www.w3schools.com/howto/img_avatar2.png')
        } else {
            src = genderByName('Img/Developer.png', 'Img/DeveloperGirl.png');
        }
    } else if (job == 'Farmer') {
        src = genderByName('Img/Farmer.png', 'Img/FarmerGirl.png');
        age = 30 + Math.floor(Math.random() * 26);
    } else if (job == 'Student') {
        src = genderByName('Img/Student.png', 'Img/StudentGirl.png');
        age = 13 + Math.floor(Math.random() * 9);
    }
    else {
        src = genderByName('https://www.w3schools.com/howto/img_avatar.png', 'https://www.w3schools.com/howto/img_avatar2.png');
        age = 21 + Math.floor(Math.random() * 20);
    }
}
generate();

function genderByName(maleSrc, femaleSrc) {
    if (name1 == 'Wati' || name2 == 'Wati' || name1 == 'Siti' || name2 == 'Siti' || name1 == 'Rika' || name2 == 'Rika' || name1 == 'Tuti' || name2 == 'Tuti' || name1 == 'Leti' || name2 == 'Leti' || name1 == 'Mila' || name2 == 'Mila' || name1 == 'Nora' || name2 == 'Nora' || name1 == 'Luna' || name2 == 'Luna' || name1 == 'Maya' || name2 == 'Maya' || name1 == 'Nana' || name2 == 'Nana' || name1 == 'Cora' || name2 == 'Cora' || name1 == 'Nova' || name2 == 'Nova' || name1 == 'Jane' || name2 == 'Jane' || name1 == 'Lisa' || name2 == 'Lisa' || name1 == 'Lana' || name2 == 'Lana' || name1 == 'Leni' || name2 == 'Leni' || name1 == 'Lexi' || name2 == 'Lexi' || name1 == 'Sasa' || name2 == 'Sasa' || name1 == 'Mira' || name2 == 'Mira' || name1 == 'Mara' || name2 == 'Mara' || name1 == 'Noni' || name2 == 'Noni' || name1 == 'Rini' || name2 == 'Rini' || name1 == 'Miya' || name2 == 'Miya' || name1 == 'Nala' || name2 == 'Nala' || name1 == 'Zara' || name2 == 'Zara' || name1 == 'Vada' || name2 == 'Vada' || name1 == 'Yara' || name2 == 'Yara' || name1 == 'Yodo' || name2 == 'Yodo' || name1 == 'Dita' || name2 == 'Dita' || name1 == 'Mina' || name2 == 'Mina' || name1 == 'Tina' || name2 == 'Tina' || name1 == 'Sara' || name2 == 'Sara' || name1 == 'Hana' || name2 == 'Hana' || name1 == 'Gita' || name2 == 'Gita' || name1 == 'Lita' || name2 == 'Lita' || name1 == 'Liya' || name2 == 'Liya') {
        return femaleSrc;
    } else {
        return maleSrc;
    }
}

let search = false;

let count = 1;
function passElemSet() {
    passElem.innerHTML = password;

    name1Elem.innerHTML = name1;

    name2Elem.innerHTML = name2;

    jobElem.innerHTML = job;

    ageElem.innerHTML = age;


    avatarElem.innerHTML = `<img src='${src}' alt="Avatar" class="avatar">`;
    if (searchElem.value.substring(0, 1) == '@') {
        if (searchElem.value.substring(1, searchElem.value.length).toLowerCase() == job.toLowerCase()) {
        } else if (search == true && searchElem.value.length > 1) {
            genButton.click();
            count++;
        }
    } else if (searchElem.value.substring(0, 1) == '#' && typeof parseInt(searchElem.value.substring(1, searchElem.value.length)) == 'number') {
        if(searchElem.value.substring(1, searchElem.value.length) == age) {
        } else if (search == true && searchElem.value.length > 1 && parseInt(searchElem.value.substring(1, searchElem.value.length)) >= 13 && parseInt(searchElem.value.substring(1, searchElem.value.length)) <= 55) {
            genButton.click();
            count++;
        }
    } else if (searchElem.value.length == 9) {
        if (searchElem.value.substring(4, 5) == ' ' && searchElem.value == `${name1} ${name2}`) {
        }
        else if (search == true) {
            genButton.click();
            count++;
        }
    }
    else if (searchElem.value.length == 4) {
        if (searchElem.value == name1 || searchElem.value == name2) {
        }
        else if (search == true) {
            genButton.click();
            count++;
        }
    }
    setTimeout(passElemSet);
}
passElemSet();
