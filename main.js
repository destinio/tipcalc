const form = document.querySelector('#clacBody');
const amountDue = document.querySelector('.amountDue span');
const tipAmount = document.querySelector('.tipAmount span');
const checkTotal = document.querySelector('.checkTotal span');
const percValue = document.querySelector('.percValue');
const main = document.querySelector('.main');
const face = document.querySelector('.face');

percValue.innerHTML = `${form.range.value}%`;
face.innerHTML = `💵`;

form.range.addEventListener('input', e => {
  percValue.innerHTML = `${form.range.value}%`;
  const total = Number(form.total.value);
  const tipTotal = Math.round(total * (form.range.value / 100));
  
  const cls = ["good", "ok", "bad"];

  if (form.range.value < 7) {
    main.classList.remove(...cls)
    main.classList.add('bad')
    face.innerHTML = `🤮`
  } else if (form.range.value >= 7 && form.range.value < 15) {
    main.classList.remove(...cls)
    main.classList.add('ok')
    face.innerHTML = `😒`
  } else if (form.range.value >= 15 && form.range.value <= 20 ) {
    main.classList.remove(...cls)
    main.classList.add('good')
    face.innerHTML = `😋`
  } else if (form.range.value > 20) {
    face.innerHTML = `🤑`
  }

  tipAmount.innerHTML = tipTotal.toFixed(2);
  checkTotal.innerHTML = (total + tipTotal).toFixed(2)
})

document.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
})

form.total.addEventListener('keyup', e => {
  
  const total = Number(form.total.value);
  const tipTotal = Math.round(total * (form.range.value / 100));

  tipAmount.innerHTML = tipTotal.toFixed(2);
  checkTotal.innerHTML = (total + tipTotal).toFixed(2)

})