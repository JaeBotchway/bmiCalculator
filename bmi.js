function calc() {
    let name = document.getElementById('name').value
    let weight = parseFloat(document.getElementById("wgt").value)
    let height = parseFloat(document.getElementById("hgt").value)
    let ans = weight / Math.pow(height, 2)
    ans = Math.round(ans)



    if (ans < 18.5) {
        document.getElementById('output').innerHTML= (`${name} your BMI is ${ans}kg/m2 so you are underweight`)
    } 
    else if (ans >= 18.5 && ans <= 24.9) {
        document.getElementById('output').innerHTML=(`${name} your BMI is ${ans}kg/m2 so you a normal weight`)
    }
    else if (ans > 24.9 && ans <= 29.9) {
        document.getElementById('output').innerHTML=(`${name} your BMI is ${ans}kg/m2 so you are overweight`)
    }
    else if (ans >= 30.0 && ans < 35) {
        document.getElementById('output').innerHTML=(`${name} your BMI is ${ans}kg/m2 so you are obese`)
    }
    else if(ans >= 35)
    {
        document.getElementById('output').innerHTML=(`${name} your BMI is ${ans}kg/m2 so you are extremely obese`)
    }
}