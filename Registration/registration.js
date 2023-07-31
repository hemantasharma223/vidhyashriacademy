window.addEventListener("scroll", function () {
const navbar = document.getElementById("navbar");
const content = document.getElementById("content");
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > content.offsetTop) {
    navbar.classList.add("fixed-nav");
} else {
    navbar.classList.remove("fixed-nav");
}
});



const form = document.getElementById("form")
const student = document.getElementById("textInput")
const sGrade = document.getElementById("grade")
const mnthlyFeeDisc = document.getElementById("monthelyFeeDiscount")
const transFeeDisc = document.getElementById("transFeeDiscount")
const lunchFeeDisc = document.getElementById("lunchFeeDiscount")

form.addEventListener('submit', function(e){
    

    const sName = student.value;
    localStorage.setItem('name',sName);

    const studentGrade = sGrade.value;
    localStorage.setItem('grade',studentGrade);

    const transportaionFeeDiscount = transFeeDisc.value;
    localStorage.setItem('transFeeDisc',transportaionFeeDiscount);

    const monthelyFeeDiscount = mnthlyFeeDisc.value;
    localStorage.setItem('monthelyFeeDisc',monthelyFeeDiscount);

    const lunchFeeDiscount = lunchFeeDisc.value;
    localStorage.setItem('lunchFeeDisc',lunchFeeDiscount);



})