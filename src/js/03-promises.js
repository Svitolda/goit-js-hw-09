import Notiflix from 'notiflix';




const form = document.querySelector('.form');

form.addEventListener('submit', onBtnSubmitClick);

function onBtnSubmitClick(evt) {
  evt.preventDefault();

  let delay = Number(evt.target.elements.delay.value);
  const step = Number(evt.target.elements.step.value);
  const amount = Number(evt.target.elements.amount.value);


  if (isNaN(amount)) {
    Notiflix.Notify.warning('Please fill in all fields');
    return;
  }

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay).then(({ position, delay }) =>{
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch (({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  };

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay })
        } else {
          reject({ position, delay })
        }
      }, delay);
    });
  }
}
