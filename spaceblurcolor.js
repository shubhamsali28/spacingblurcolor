var inputs = document.querySelectorAll('input');

function Update() {
// dataset will get the data property from input
var suffix = this.dataset.sizing || '';
// this.dataset.sizing will help to select spacing blur "px" and '' i.e nothing for basecolor |||| suffix will get "px"
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// this.name is spacing blur and basecolor and documentElement will select the complete html

}

inputs.forEach(input => input.addEventListener('change', Update));
inputs.forEach(input => input.addEventListener('mousemove', Update));
