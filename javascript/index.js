function tempinfo() {
    let male = document.getElementById('male')
    if (male) {
        final = 'male'
    } else {
        final = 'female'
    }
    let workout_val = document.getElementById('workout').value
    let weight_val = document.getElementById('weight').value
    let height_val = document.getElementById('height').value
    if (workout_val == null || workout_val == 0 || workout_val == "0") {
        workout_val = 0
    }
    if (document.getElementById('weight-unit').value == 'lb') {
        weight_val = weight_val * 0.453592
    }
    if (document.getElementById('height-unit').value == 'cm') {
        height_val = height_val / 100
    }
    let user = {
        naam: document.getElementById("naam").value.toUpperCase(),
        gender: final,
        workout: workout_val,
        ageGroup: document.getElementById("ageGroup").value,
        weight: weight_val,
        height: height_val
    }
    localStorage.setItem('temp', JSON.stringify(user))
}

// function // notPresent(element) {
//     let my_eroor = { naam: "naam_label", gender: "gender_label", height: "height_label", ageGroup: "ageGroup_label", weight: "weight_label" }
//     let a = my_eroor[element]
//     document.getElementById(a).style.color = "red";
//     if (localStorage.getItem('error_element') == null) {
//         let error_element = [a]
//         localStorage.setItem('error_element', JSON.stringify(error_element))
//     } else {
//         errorStr = localStorage.getItem('error_element')
//         error_element = JSON.parse(errorStr)
//         error_element.push(a)
//         localStorage.setItem('error_element', JSON.stringify(error_element))
//     }
// }

// function update() {
//     let a = localStorage.getItem('error_element')
//     let cse = JSON.parse(a)
//     if (cse == null) {
//         return
//     } else {
//         cse.forEach(element => {
//             document.getElementById(element).style.color = "rgb(20, 208, 255)"
//         });
//     }
// }

function specific(element) {
    let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/", "`", "~"]
    if (element == "naam") {
        a = document.getElementById(element).value
        for (let index = 0; index < a.length; index++) {
            if (a[index] == null || a[index] == "") {
                return false
            }
            if (a[index] != " " && !isNaN(a[index])) {
                alert("You can't enter number in name")
                    // // notPresent(element)
                return false;
            } else {
                for (const x of symbols) {
                    if (a[index] == x) {
                        alert("You can't enter symbols in name")
                            // // notPresent(element)
                        return false;
                    }
                }
            }
        }
        return true
    }
    if (element == 'weight') {
        weight_value = document.getElementById(element).value
        weight_unit = document.getElementById('weight-unit').value
        if (weight_unit == 'lb') {
            weight_value = weight_value * 0.453592
        }
        if (weight_value < 10) {
            alert('The weight is too low')
            return false
        } else {
            if (weight_value > 300) {
                alert('The weight is too high')
                return false
            }
        }
        return true
    }
    if (element == 'height') {
        height_value = document.getElementById(element).value
        height_unit = document.getElementById('height-unit').value
        if (height_unit == 'cm') {
            height_value = height_value / 100
        }
        if (height_value < .86) {
            alert('The height is too low')
            return false
        } else {
            if (height_value > 3) {
                alert('The height is too high')
                return false
            }
        }
        return true
    }
}

function check() {
    Array = ['naam', 'gender', 'workout', 'ageGroup', 'weight', 'height']
        // update()
    for (let element of Array) {
        if (element == 'gender') {
            male = document.getElementById('male').checked
            female = document.getElementById('female').checked
            if (!male && !female) {
                // notPresent(element)
                alert('please choose the gender')
                return false
            }
        } else {
            let a = document.getElementById(element).value
            if ((a == "" || a == null) && (element != 'workout')) {
                // notPresent(element)
                alert("Please fill all the entry")
                return false
            } else {
                pta = specific(element)
                if (pta == false) {
                    return false
                }
            }
        }
    }
    return true
}

function forward() {
    button = document.getElementById('submit')
    button.click()
}

a = document.getElementById('add');
a.addEventListener("click", () => {
    fill = check()
    console.log(fill)
    if (fill == true) {
        tempinfo()
        forward()
        localStorage.removeItem('error_element')
    }
})