function numberOneTriangle() {
    let number = document.getElementById('t1').value;

    a = parseInt(number);

    let result = "";
    for (let i = 1; i <= number; i++) {
        if (i <= 10 && i >= 1) {
            result += "*";
            console.log(result);
        } else {
            alert("chi nhap so nguyen tu 1-10");
        }
    }
}