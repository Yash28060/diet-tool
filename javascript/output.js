function bmi_result(bmi) {
    if (bmi > 0 && bmi < 18.5) {
        return 'underweight'
    }
    if (bmi > 18.5 && bmi < 25) {
        return 'normal weight'
    }
    if (bmi > 25 && bmi < 30) {
        return 'overweight'
    }
    if (bmi > 30 && bmi < 35) {
        return 'obesity class-I'
    }
    if (bmi > 35 && bmi < 40) {
        return 'obesity class-II'
    }
    if (bmi > 40) {
        return 'obesity class-II'
    }
}
elementstr = localStorage.getItem('temp')
element = JSON.parse(elementstr)
bmi = element.weight / (element.height * element.height)
console.log(typeof(bmi))
bmi_state = bmi_result(bmi)
let str = `
    <div class="container">
        <div class="userinfo">
            <div>
                <p>NAME :</p>
            </div>
            <div id="name">${element.naam}</div>
        </div>
        <div class="userinfo">
            <div>
                <p>Gender :</p>
            </div>
            <div id="name">${element.gender.toUpperCase()}</div>
        </div>
        <div class="userinfo">
            <div>
                <p>DAILY EXERCISE TIME :</p>
            </div>
            <div id="workout">${element.workout}Minutes</div>
        </div>
        <div class="userinfo">
            <div>
                <p>Age group :</p>
            </div>
            <div id="ageGroup">${element.ageGroup}</div>
        </div>
        <div class="userinfo">
            <div>
                <p>Weight :</p>
            </div>
            <div id="weight">${element.weight}Kgs</div>
        </div>
        <div class="userinfo">
            <div>
                <p>Height :</p>
            </div>
            <div id="height">${element.height}Meter</div>
        </div>
        <div class="userinfo">
            <div>
                <p>BMI :</p>
            </div>
            <div class="bmi">${bmi}</div>
        </div>
        <div class="userinfo">
            <div>
                <p>Status :</p>
            </div>
            <div class="status">${bmi_state.toUpperCase()}</div>
        </div>
    </div>`
tempinfo.innerHTML = str