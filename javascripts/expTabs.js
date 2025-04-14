// Function for Professional Experience Tabs
function openCity1(evt, cityName) {
const section = evt.currentTarget.closest('.experience');
const tabcontent = section.querySelectorAll('.tabcontent');
const tablinks = section.querySelectorAll('.tablinks1');

tabcontent.forEach((el) => (el.style.display = 'none'));
tablinks.forEach((el) => el.classList.remove('active'));

document.getElementById(cityName).style.display = 'block';
evt.currentTarget.classList.add('active');
}

// Function for Internship Tabs
function openCity2(evt, cityName) {
const section = evt.currentTarget.closest('.experience');
const tabcontent = section.querySelectorAll('.tabcontent');
const tablinks = section.querySelectorAll('.tablinks2');

tabcontent.forEach((el) => (el.style.display = 'none'));
tablinks.forEach((el) => el.classList.remove('active'));

document.getElementById(cityName).style.display = 'block';
evt.currentTarget.classList.add('active');
}

// Function for Volunteer Tabs
function openCity3(evt, cityName) {
    const section = evt.currentTarget.closest('.experience');
    const tabcontent = section.querySelectorAll('.tabcontent');
    const tablinks = section.querySelectorAll('.tablinks3');
    
    tabcontent.forEach((el) => (el.style.display = 'none'));
    tablinks.forEach((el) => el.classList.remove('active'));
    
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}