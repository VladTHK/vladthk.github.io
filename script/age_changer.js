const age_changer = document.getElementById("age_changer");

const [day, month, year] = "13.12.2008".split(".").map(Number);
const todayDate = new Date();

let age = todayDate.getFullYear() - year;

if (todayDate.getMonth() < month -1 || (todayDate.getMonth() === month - 1 && todayDate.getDate() < day)) {
  age--;
};

age_changer.innerText = age;