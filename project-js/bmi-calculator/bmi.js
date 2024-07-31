const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit',function(event){
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value) * 0.3048 // meter conversion 
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const desc = document.querySelector('#desc')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML=" please give a valid height "
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML=" please give a valid weight "
    }else{
        // calculate BMI
        const bmi = weight / (height * height).toFixed(2)
        // show the result 

        // Healthy: 18.5-24.9. Overweight: 25-29.9. Obese I: 30.0-34.9. Obese II: 35-39.9.

        if(bmi >= 18.5  && bmi <= 24.9){
            desc.innerHTML=`<h3>Healthy</h3>`
        }
        if(bmi >= 25  && bmi <= 29.9){
            desc.innerHTML=`<h3>Overweight</h3>`
        }
        if(bmi >= 30.0  && bmi <= 34.9){
            desc.innerHTML=`<h3>Obese I</h3>`
        }
        if(bmi >= 35  && bmi <= 39.9){
            desc.innerHTML=`<h3>Obese II</h3>`
        }
        result.innerHTML=`<span>${bmi}<\span>`
    }
})