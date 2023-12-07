const form = document.querySelector('form')
const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const direction = document.querySelectorAll('input[name="direction"]')
const answer = document.querySelector('.code')

const bgGenerator = () =>{
    let selectedValue;

    for(const item of direction){
        if(item.checked){
            selectedValue = item.value
        }
    }
    let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`
    document.body.style.backgroundImage = gradient

    console.log(gradient);
}


form.addEventListener('change',bgGenerator)