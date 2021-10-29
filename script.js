function multiplication()
{
    let num1,num2,rezult;
    num1 = document.getElementById('a').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('b').value;
    num2 = parseInt(num2);
    let reg = /[A-Za-zА-Яа-яЁё]/g;
    const reg1 =/^[1-9][0-9]*$/;
    if(reg.test(num1)||reg.test(num2))
    {
        alert('Вводить можно только положительные числа!');
    }
    if(num1===0||num2===0)
    {
        alert('Введите значения!');
    }
    rezult = num1*num2;
    if(!reg1.test(num1)||reg1.test(num2))
    {
        alert('Ошибка! Вводите только положительные числа , которые больше 0!');
        let str = "Ошибка!";
        document.getElementById('out').innerHTML = str;
    }
    else
    {
        document.getElementById('out').innerHTML = rezult;
    }
}
window.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("result-btn");
    b.addEventListener("click", multiplication);
});
