let value = null;

do {
    value = parseInt(prompt("nhap gia tri tu 1 den 10"));
}while (value <1 || value >10){
    alert("Số bạn vừa nhập là " + value);
}