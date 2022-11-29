// Declared state of form
let state = {
  price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
  loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
  down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
  interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
  home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
  hoa: document.querySelectorAll('[name="hoa"]')[0].value,
};
// Declared variables
let totalLoan,
  totalMonths,
  monthlyInterest,
  monthlyPrincipalInterest,
  monthlyPropertyTaxes,
  monthlyHomeInsurance,
  monthlyHOA,
  labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"],
  backgroundColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
  borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ]
// Removes characters and returns only numbers
function getNumber(str) {
  return Number(str.replace(/[^0-9.-]+/g, ""));
}
// Initialize chart js instance
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: [
                monthlyPrincipalInterest,
                monthlyPrincipalInterest,
                monthlyHomeInsurance,
                monthlyHOA,
            ],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
        }]
    }
});
myChart.options.animation = false;

// Add event listeners to inputs
let i; 
let inputTexts = document.getElementsByClassName('form-group__textInput'); 
for (i = 0; i < inputTexts.length; i++) {
    inputTexts[i].addEventListener('input', () => console.log('input changed'))
}

function updateInputsState(event) {
    let name = event.target.name;
    let value = event.target.value;
    if(name == 'price') {
        value = getNumber(value);
    }
    state = {
        ...state,
        [name]: value
    }
    console.log(name + ':' + ' ' + value)
}
console.log(inputTexts);
