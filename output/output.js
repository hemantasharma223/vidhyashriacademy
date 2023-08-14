window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const content = document.getElementById("content");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > content.offsetTop) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});



let nameOfStudent = localStorage.getItem("name")
let monthelyFeeDiscount = localStorage.getItem("monthelyFeeDisc")
let transFeeDiscount = localStorage.getItem("transFeeDisc")
let lunchFeeDiscount = localStorage.getItem("lunchFeeDisc")
let grade = localStorage.getItem("grade")

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



// Get the canvas element from the DOM
const canvas = document.getElementById('myCanvas');

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Create an image element
const img = new Image();

// Specify the source of the image
img.src = 'sample.png'; // Actual path of image

// When the image is loaded, draw it on the canvas
img.onload = function() {
    var monthelyFee;
    var transFee;
    var lunchFee;
    var totalAmnt;
    if(grade == 'Nursery'){
        var monthelyFee = 1950 - (1950 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1200 - (1200 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }

    if(grade == 'L.K.G'){
        var monthelyFee = 2150 - (2150 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1200 - (1200 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 'U.K.G'){
        var monthelyFee = 2150 - (2150 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1200 - (1200 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 1){
        var monthelyFee = 2450 - (2450 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1400 - (1400 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 2){
        var monthelyFee = 2550 - (2550 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1400 - (1400 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 3){
        var monthelyFee = 2650 - (2650 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1400 - (1400 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 4){
        var monthelyFee = 2850 - (2850 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1400 - (1400 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 5){
        var monthelyFee = 2950 - (2950 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1500 - (1500 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 6){
        var monthelyFee = 3150 - (3150 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1500 - (1500 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 7){
        var monthelyFee = 3350 - (3350 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1500 - (1500 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }
    if(grade == 8){
        var monthelyFee = 3800 - (3800 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1500 - (1500 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }

    if(grade == 9){
        var monthelyFee = 4200 - (4200 * monthelyFeeDiscount / 100);
        var transFee = 300 - (300 * transFeeDiscount / 100);
        var lunchFee = 1500 - (1500 * lunchFeeDiscount / 100);
        var totalAmnt = monthelyFee + transFee + lunchFee ;

    }



    ctx.drawImage(img, 0, 0); // Draw the image at (0, 0) coordinates on the canvas
    
    // Add text to the canvas
    ctx.font = '24px Arial'; // Set the font size and style
    ctx.fillStyle = 'black'; // Set the text color
    ctx.fillText(nameOfStudent, 75, 260); // Replace 'Your Text Here' with your actual text and position (x, y)
    
    ctx.fillText(grade, 75, 312);

    ctx.fillText('Monthely Fee', 80, 415); //monthely fee placement in particulars
    ctx.fillText(monthelyFee, 525, 415); // amount placement in amount sectors

    ctx.fillText('Lunch Fee', 80, 450);//lunch fee placement in particulars
    ctx.fillText(lunchFee, 525, 450); // amount placement in amount sectors
    ctx.fillText('Transportation Fee', 80, 485);//transportation fee placement in particulars
    ctx.fillText(transFee, 525, 485); // amount placement in amount sectors

    ctx.fillText(totalAmnt + ' /-', 525, 685); // total amount placement in amount sectors


    ctx.fillText(`${monthNames[month]}`, 310, 312); // month placement
    ctx.fillText(`${year}`, 525, 312); //year placement

    ctx.font = '18px Arial';
    ctx.fillText(`${date}/${monthNames[month]}/${year}`, 480, 740); // printed date placement
};




function back(){
    window.location.href = "../searchPage/search.html"
}

function download(){
 const imgData = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = nameOfStudent + ' pre-bill.png';
    link.href = imgData;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
