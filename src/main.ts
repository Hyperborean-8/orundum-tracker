const pullsCountLabel = document.getElementById("pullsCountLabel") as HTMLElement;

let pullsNum: number = 0;

const pullsPercentLabel = document.getElementById("pullsPercentLabel") as HTMLElement;
const pullsBar = document.getElementById("pullsBar") as HTMLElement;
const pullsBarProgress = document.getElementById("pullsBarProgress") as HTMLElement;

let pullsPercent = 0;

const orundumInput = document.getElementById("orundumInput") as HTMLInputElement;
const permitInput = document.getElementById("permitInput") as HTMLInputElement;
const originiumInput = document.getElementById("originiumInput") as HTMLInputElement;

let orundumNum: number = 0;
let permitNum: number = 0;
let originiumNum: number = 0;

// These function are temporary
function stepUpOrundum() {
  if (orundumInput) {
    orundumNum += 600;
    orundumInput.value = orundumNum.toString();
    handleInputChange();
  }
}

function stepDownOrundum() {
  if (orundumInput) {
    orundumNum -= 600;
    if (orundumNum < 0) {
      orundumNum = 0;
    }
    orundumInput.value = orundumNum.toString();
    handleInputChange();
  }
}

function stepUpPermit() {
  if (permitInput) {
    permitNum += 1;
    permitInput.value = permitNum.toString();
    handleInputChange();
  }
}

function stepDownPermit() {
  if (permitInput) {
    permitNum -= 1;
    if (permitNum < 0) {
      permitNum = 0;
    }
    permitInput.value = permitNum.toString();
    handleInputChange();
  }
}

function stepUpOriginium() {
  if (originiumInput) {
    originiumNum += 1;
    originiumInput.value = originiumNum.toString();
    handleInputChange();
  }
}

function stepDownOriginium() {
  if (originiumInput) {
    originiumNum -= 1;
    if (originiumNum < 0) {
      originiumNum = 0;
    }
    originiumInput.value = originiumNum.toString();
    handleInputChange();
  }
}

function handleInputChange() {
  orundumNum = parseInt(orundumInput.value) || 0;
  permitNum = parseInt(permitInput.value) || 0;
  originiumNum = parseInt(originiumInput.value) || 0;

  console.log("something happened");

  // Pulls count
  pullsNum = Math.floor((orundumNum + originiumNum * 180) / 600) + permitNum;
  pullsCountLabel.textContent = `You have ${pullsNum} pulls`;

  // Percents
  pullsPercent = Math.floor(pullsNum / 300 * 100) || 0;
  pullsPercentLabel.textContent = `That's ${pullsPercent}% of the required 300 pulls to get a guaranteed limited operator.`
  pullsBar.setAttribute('aria-valuenow', pullsPercent.toString())
  pullsBarProgress.style.width = `${pullsPercent}%`;
}
