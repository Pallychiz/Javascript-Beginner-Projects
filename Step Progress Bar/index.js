const progressBar = document.querySelector('.progress-bar-front');
const progressSteps = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentChecked = 1;

updateStepProgress();

nextBtn.addEventListener('click', () => {
    currentChecked++
    if (currentChecked > progressSteps.length) {
        currentChecked = progressSteps.length;
    }
    updateStepProgress();
})

prevBtn.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
      currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < currentChecked) {
            progressStep.classList.add('checked');
            progressStep.innerHTML = `<i class="fa-solid fa-check"></i> <small>${
              idx === 0
                ? "Start"
                : idx === progressSteps.length - 1
                ? "Final"
                : "Step " + idx
            }</small>`;
        } else {
            progressStep.classList.remove('checked');
            progressStep.innerHTML = `<i class="fa-solid fa-xmark">`;
        }
    })

    const checkedNumber = document.querySelectorAll('.checked').length;
    progressBar.style.width = ((checkedNumber - 1) / (progressSteps.length - 1)) * 100 + "%";

    if (currentChecked === 1) {
        prevBtn.disabled = true;
    }else if (currentChecked === progressSteps.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}


