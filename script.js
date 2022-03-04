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
    if (
        check('wati') == 1 || check('siti') == 1 || check('rika') == 1 || check('siti') == 1 || check('lati') == 1 || check('mila') == 1 || check('nora') == 1 || check('luna') == 1 || check('maya') == 1 || check('nana') == 1 || check('cora') == 1 || check('nova') == 1 || check('jane') == 1 || check('lisa') == 1 || check('lana') == 1 || check('leni') == 1 || check('lexi') == 1 || check('sasa') == 1 || check('mira') == 1 || check('mara') == 1 || check('noni') == 1 || check('rini') == 1 || check('miya') == 1 || check('nala') == 1 || check('zara') == 1 || check('vada') == 1 || check('yara') == 1 || check('yodo') == 1 || check('dita') == 1 || check('mina') == 1 || check('tina') == 1 || check('sara') == 1 || check('hana') == 1 || check('gita') == 1 || check('lita') == 1 || check('liya') == 1
    ) {
        return femaleSrc;
    } else {
        return maleSrc;
    }
}
function check(name) {
    if (name1.toLowerCase() == name || name2.toLowerCase() == name) {
        return 1;
    } return 0;
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
        if (searchElem.value.substring(1, searchElem.value.length) == age) {
        } else if (search == true && searchElem.value.length > 1 && parseInt(searchElem.value.substring(1, searchElem.value.length)) >= 13 && parseInt(searchElem.value.substring(1, searchElem.value.length)) <= 55) {
            genButton.click();
            count++;
        }
    } else if (searchElem.value.length == 9) {
        if (searchElem.value.substring(4, 5) == ' ' && searchElem.value.toLowerCase() == `${name1.toLowerCase()} ${name2.toLowerCase()}`) {
        }
        else if (search == true) {
            genButton.click();
            count++;
        }
    }
    else if (searchElem.value.length == 4) {
        if (searchElem.value.toLowerCase() == name1.toLowerCase() || searchElem.value.toLowerCase() == name2.toLowerCase()) {
        }
        else if (search == true) {
            genButton.click();
            count++;
        }
    }
    setTimeout(passElemSet);
}
passElemSet();
