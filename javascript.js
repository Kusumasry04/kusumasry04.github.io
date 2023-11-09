const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropDown");
const toggleArrow = document.getElementById("arrow");

  dropdownBtn.addEventListener("click", function () {
    if ( dropdownMenu.classList.contains('h-0') ) {
        dropdownMenu.classList.remove("h-0");
        toggleArrow.classList.add("rotate-180");
    } else {
        dropdownMenu.classList.add("h-0");
        toggleArrow.classList.remove("rotate-180");
    }
  });

const office = document.getElementById("officeShow");
const ruangGuru = document.getElementById("ruangguruShow");
const rumahBelajar = document.getElementById("rumahbelajarShow");
const mejaBelajar = document.getElementById("mejabelajarShow");
const edmodo = document.getElementById("edmodoShow");
const moodle = document.getElementById("moodleShow");
const edlink = document.getElementById("edlinkShow");
const classroom = document.getElementById("classroomShow");
const kelaskita = document.getElementById("kelaskitaShow");

function showOffice(){
  office.classList.add("flex");
  office.classList.remove("hidden");
}

function showRuangguru(){
  ruangGuru.classList.add("flex");
  ruangGuru.classList.remove("hidden");
}

function showRumahbelajar(){
  rumahBelajar.classList.add("flex");
  rumahBelajar.classList.remove("hidden");
}

function showMejaBelajar(){
  mejaBelajar.classList.add("flex");
  mejaBelajar.classList.remove("hidden");
}

function showEdmodo(){
  edmodo.classList.add("flex");
  edmodo.classList.remove("hidden");
}

function showMoodle(){
  moodle.classList.add("flex");
  moodle.classList.remove("hidden");
}

function showEdlink(){
  edlink.classList.add("flex");
  edlink.classList.remove("hidden");
}

function showClassroom(){
  classroom.classList.add("flex");
  classroom.classList.remove("hidden");
}

function showKelaskita(){
  kelaskita.classList.add("flex");
  kelaskita.classList.remove("hidden");
}

function exit(){
  office.classList.add("hidden");
  office.classList.remove("flex");
  ruangGuru.classList.add("hidden");
  ruangGuru.classList.remove("flex");
  rumahBelajar.classList.add("hidden");
  rumahBelajar.classList.remove("flex");
  mejaBelajar.classList.add("hidden");
  mejaBelajar.classList.remove("flex");
  edmodo.classList.add("hidden");
  edmodo.classList.remove("flex");
  moodle.classList.add("hidden");
  moodle.classList.remove("flex");
  edlink.classList.add("hidden");
  edlink.classList.remove("flex");
  classroom.classList.add("hidden");
  classroom.classList.remove("flex");
  kelaskita.classList.add("hidden");
  kelaskita.classList.remove("flex");
}