// https://calculator.swiftutors.com/exponential-growth-and-decay-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const valueatTimeRadio = document.getElementById('valueatTimeRadio');
const initialValueRadio = document.getElementById('initialValueRadio');
const decayRateRadio = document.getElementById('decayRateRadio');
const timeRadio = document.getElementById('timeRadio');

let valueatTime;
let initialValue = v1;
let decayRate = v2;
let time = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

valueatTimeRadio.addEventListener('click', function() {
  variable1.textContent = '(x0) Initial Value';
  variable2.textContent = '(r) Decay Rate (%)';
  variable3.textContent = '(t) Time';
  initialValue = v1;
  decayRate = v2;
  time = v3;
  result.textContent = '';
});

initialValueRadio.addEventListener('click', function() {
  variable1.textContent = '(xt) Value at Time';
  variable2.textContent = '(r) Decay Rate (%)';
  variable3.textContent = '(t) Time';
  valueatTime = v1;
  decayRate = v2;
  time = v3;
  result.textContent = '';
});

decayRateRadio.addEventListener('click', function() {
  variable1.textContent = '(xt) Value at Time';
  variable2.textContent = '(x0) Initial Value';
  variable3.textContent = '(t) Time';
  valueatTime = v1;
  initialValue = v2;
  time = v3;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = '(xt) Value at Time';
  variable2.textContent = '(x0) Initial Value';
  variable3.textContent = '(r) Decay Rate (%)';
  valueatTime = v1;
  initialValue = v2;
  decayRate = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(valueatTimeRadio.checked)
    result.textContent = `Value at Time = ${computeValueatTime().toFixed(2)}`;

  else if(initialValueRadio.checked)
    result.textContent = `Initial Value = ${computeInitialValue().toFixed(2)}`;

  else if(decayRateRadio.checked)
    result.textContent = `Decay Rate = ${computeDecayRate().toFixed(2)} %`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)}`;
})

// calculation

function computeValueatTime() {
  return Number(initialValue.value) * Math.pow(1 + (Number(decayRate.value) / 100), Number(time.value));
}

function computeInitialValue() {
  return Number(valueatTime.value) / Math.pow(1 + (Number(decayRate.value) / 100), Number(time.value));
}

function computeDecayRate() {
  return (Math.pow(Number(valueatTime.value) / Number(initialValue.value), 1 / Number(time.value))) * 100;
}

function computeTime() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}