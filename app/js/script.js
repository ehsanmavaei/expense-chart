console.log("HELLO");
const raw = [
  {
    day: "mon",
    amount: 19.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const test = () => {
  console.log("this is a test");
};

const bars = document.getElementsByClassName("bars");
const days = document.getElementsByClassName("days");

var tag = document.createElement("div");
function randomRgbaString(alpha) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = alpha;
  return `rgba(${r},${g},${b},${a})`;
}
raw.map((item) => {
  var tag = document.createElement("div");
  tag.style.height = `${item.amount * 2}px`;
  tag.style.backgroundColor = `${randomRgbaString(0.9)}`;
  var p = document.createElement("p");
  var span = document.createElement("span");
  p.innerText = item.day;
  span.innerText = item.amount;
  tag.classList.add("vertical");

  tag.appendChild(p);
  tag.appendChild(span);

  bars[0].appendChild(tag);
});
