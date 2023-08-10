let a = {
    one: [
        ['breakfast', 'bread sandwich ', '2 egg', '1 glass milk', '4 almonds ', ' 2 walnuts', 'oaths'],
        ['lunch', '1 cup arhar dal', '1 cup potato curry ', '3 chapatti ', '1/2 cup rice ', '1/2 cup low fat curd + salad', ' salad'],
        ['dinner', '1 cup beans potato vegetable', '3 chapatti ', 'pickels', 'no water', 'desert', 'salad'],
        ['excercise', 'Pushups', 'Pullups', 'Squats', 'Lunges', 'bench press', 'Overhead press']
    ],
    second: [
        ['breakfast', 'bread sandwich ', '2 egg', '1 glass milk', '4 almonds ', ' 2 walnuts', 'oaths'],
        ['lunch', '1 cup arhar dal', '1 cup potato curry ', '3 chapatti ', 'soy products  ', '1/2 cup low fat curd + salad', ' salad'],
        ['dinner', '1 cup beans potato vegetable', '3 chapatti ', 'pickels', 'no water', 'seafood', 'salad'],
        ['excercise', 'Pushups', 'Running', 'pull-ups', 'chin-ups', 'benchpress', 'dumbell-curls']
    ],
    third: [
        ['breakfast', 'bread', 'sugar-less milk', 'walnuts', 'oaths', 'almonds', 'biscutis'],
        ['lunch', 'Emphasizes fruits', ' whole grains', '1 cup Minestrone soup', ' Tbsp low fat mayo', 'Sliced tomato and lettuce', 'wheat '],
        ['dinner', 'Grilled vegetable ', 'kabobs with shrimp', 'toasted quinoa salad', 'pine nuts', 'cauliflower', 'rice'],
        ['excercise', 'morning walk', 'brisk walking', 'cycling', 'recreational swimming', 'dancing', 'yoga']
    ],
    fourth: [
        ['breakfast', 'bread', 'sugar-less milk', 'walnuts', 'oaths', 'almonds', '-'],
        ['lunch', 'Emphasizes fruits', ' whole grains', '1 cup Minestrone soup', ' Tbsp low fat mayo', 'Sliced tomato and lettuce', 'wheat '],
        ['dinner', 'Grilled vegetable ', 'kabobs with shrimp', 'toasted quinoa salad', 'pine nuts', 'cauliflower', 'rice'],
        ['excercise', 'morning walk', 'brisk walking', 'cycling', 'recreational swimming', 'dancing', 'yoga']
    ],
    fifth: [
        ['breakfast', 'bread', 'sugar-less milk', 'walnuts', 'oaths', 'almonds', '-'],
        ['lunch', 'Emphasizes fruits', ' whole grains', '1 cup Minestrone soup', ' Tbsp low fat mayo', 'wheat ', '-'],
        ['dinner', 'Grilled vegetable ', 'kabobs with shrimp', 'toasted quinoa salad', 'pine nuts', 'cauliflower', '-'],
        ['excercise', 'morning walk', 'brisk walking', 'cycling', 'recreational swimming', 'dancing', 'yoga']
    ],
    sixth: [
        ['breakfast', 'bread', 'sugar-less milk', 'walnuts', 'oaths', 'almonds', '-'],
        ['lunch', 'Emphasizes fruits', ' whole grains', '1 cup Minestrone soup', ' Tbsp low fat mayo', 'wheat ', '-'],
        ['dinner', 'Grilled vegetable ', 'kabobs with shrimp', 'toasted quinoa salad', 'pine nuts', 'cauliflower', '-'],
        ['excercise', 'morning walk', 'brisk walking', 'cycling', 'recreational swimming', 'dancing', 'yoga']
    ],
}

function show_diet(bmi) {
    all = ''
    element = a[bmi]
    element.forEach(time => {
        let dietstr = `
        <div class="${time[0]}">
            <h2>${time[0].toUpperCase()}</h2>
                <ul>
                    <li>${time[1]}</li>
                    <li>${time[2]}</li>
                    <li>${time[3]}</li>
                    <li>${time[4]}</li>
                    <li>${time[5]}</li>
                    <li>${time[6]}</li>
                </ul>
            </div>`

        all = all + dietstr
    });
    diet.innerHTML = all
}

function bmi_result(bmi) {
    if (bmi > 0 && bmi < 18.5) {
        return 'one'
    }
    if (bmi > 18.5 && bmi < 25) {
        return 'second'
    }
    if (bmi > 25 && bmi < 30) {
        return 'third'
    }
    if (bmi > 30 && bmi < 35) {
        return 'fourth'
    }
    if (bmi > 35 && bmi < 40) {
        return 'fifth'
    }
    if (bmi > 40) {
        return 'sixth'
    }
}
elementstr = localStorage.getItem('temp')
element = JSON.parse(elementstr)
bmi = element.weight / (element.height * element.height)
bmi_return = bmi_result(bmi)
console.log(bmi_return)
show_diet(bmi_return)