const cookie = document.querySelector("#cookie");
const pointCounter = document.querySelector("#point-counter");
const ppsDisplay = document.querySelector("#pps-dispay");
const buyAuto = document.querySelector("#buy-auto");
const buyClick = document.querySelector("#buy-click");
let points = 0
let pps = 0
let perClick = 1
let autoClickInterval

cookie.onmousedown = (e) => {
  cookie.style.scale = "90%";
};

cookie.onmouseup = (e) => {
  cookie.style.scale = "100%";
};

const updateCounter = () => {
  pointCounter.innerText = points
}

const autoClick = () => {
  points += pps
}

cookie.onclick = (e) => {
  points += perClick
  updateCounter()
}

buyAuto.onclick = (e) => {
  const costElem = buyAuto.querySelector(".cost")
  const cost = Number.parseInt(costElem.innerText)
  if (points < cost) return
  points -= cost
  pps++

  costElem.innerText = Math.floor(cost * 1.3)
  ppsDisplay.innerText = pps
  updateCounter()
}

buyClick.onclick = (e) => {
  const costElem = buyClick.querySelector(".cost")
  const cost = Number.parseInt(costElem.innerText)
  if (points < cost) return
  points -= cost
  perClick += 1

  costElem.innerText = Math.floor(cost * 1.3)
  updateCounter()
}

window.onload = () => {
  autoClickInterval = setInterval(() => {
    autoClick()
    updateCounter()
  }, 1000)
}
