let globalStyle = document.createElement("style");
globalStyle.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #FFFFFF;
  }
`;
document.head.appendChild(globalStyle);
const divFirst = document.createElement("div");
divFirst.className.add = "twos - div";
divFirst.style.padding = "40px";
divFirst.style.backgroundColor = "#1F1F1F";
divFirst.style.borderRadius = "12px";
const img = document.createElement("img");
img.src = "./images/profile-pic.svg";
divFirst.className.add = "twos - img";
img.style.width = "88px";
img.style.height = "88px";
img.style.marginBottom = "24px";
divFirst.appendChild(img);
const body = document.body;
divFirst.className.add = "twos - body";
body.style.height = "100vh";
body.style.backgroundColor = "black";
body.style.fontFamily = "Arial, Helvetica, sans-serif";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.textAlign = "center";
body.style.color = "#ffffff";
const h2 = document.createElement("h2");
h2.innerHTML = "Jessica Randall";
divFirst.className.add = "twos - h2";
h2.style.fontSize = "24px";
h2.style.fontWeight = "600";
h2.style.lineHeight = "36px";
h2.style.color = "#FFFFFF";
h2.style.alignItems = "Center";
h2.style.marginBottom = "4px";
divFirst.appendChild(h2);

const h3 = document.createElement("h3");
h3.innerHTML = "London, United Kingdom";
divFirst.className.add = "twos - h3";
h3.style.fontWeight = "700";
h3.style.fontSize = "14px";
h3.style.color = "#C4F82A";
h3.style.marginBottom = "24px";
divFirst.appendChild(h3);
const p = document.createElement("p");
p.innerHTML = "Front-end developer and avid reader.";
divFirst.className.add = "twos - p";
p.style.fontWeight = "400";
p.style.fontSize = "14px";
p.style.lineHeight = "24px";
p.style.color = "#FFFFFF";
p.style.marginBottom = "24px";
divFirst.appendChild(p);

const twosDiv = document.createElement("div");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const a1 = document.createElement("a");
a1.innerHTML = "GitHub";
a1.href = "https://github.com/nazarovmk";
ul.appendChild(li1);
li1.appendChild(a1);
twosDiv.className.add = "twos - li1";
li1.style.padding = "12px 127px 12px 127px";
li1.style.backgroundColor = "#333333";
li1.style.borderRadius = "8px";
li1.style.listStyle = "none";
li1.style.marginBottom = "16px";

li1.addEventListener("mouseover", () => {
  li1.style.backgroundColor = "#C4F82A";
});
li1.addEventListener("mouseout", () => {
  li1.style.backgroundColor = "#333333";
});

const li2 = document.createElement("li");
const a2 = document.createElement("a");
a2.innerHTML = "Frontend Mentor";
a1.href = "#";
li2.appendChild(a2);
ul.appendChild(li2);
twosDiv.className.add = "twos - li2";
li2.style.padding = "12px 127px 12px 127px";
li2.style.backgroundColor = "#333333";
li2.style.borderRadius = "8px";
li2.style.listStyle = "none";
li2.style.marginBottom = "16px";

li2.addEventListener("mouseover", () => {
  li2.style.backgroundColor = "#C4F82A";
});

li2.addEventListener("mouseout", () => {
  li2.style.backgroundColor = "#333333";
});

const li3 = document.createElement("li");
const a3 = document.createElement("a");
a3.innerHTML = "LinkedIn";
a1.href = "#";
li3.appendChild(a3);
ul.appendChild(li3);
twosDiv.className.add = "twos - li3";
li3.style.padding = "12px 127px 12px 127px";
li3.style.backgroundColor = "#333333";
li3.style.borderRadius = "8px";
li3.style.listStyle = "none";
li3.style.marginBottom = "16px";

li3.addEventListener("mouseover", () => {
  li3.style.backgroundColor = "#C4F82A";
});

li3.addEventListener("mouseout", () => {
  li3.style.backgroundColor = "#333333";
});

const li4 = document.createElement("li");
const a4 = document.createElement("a");
a4.innerHTML = "Twitter";
a1.href = "#";
li4.appendChild(a4);
ul.appendChild(li4);
twosDiv.className.add = "twos - li4";
li4.style.padding = "12px 127px 12px 127px";
li4.style.backgroundColor = "#333333";
li4.style.borderRadius = "8px";
li4.style.listStyle = "none";
li4.style.marginBottom = "16px";

li4.addEventListener("mouseover", () => {
  li4.style.backgroundColor = "#C4F82A";
});

li4.addEventListener("mouseout", () => {
  li4.style.backgroundColor = "#333333";
});

const li5 = document.createElement("li");
const a5 = document.createElement("a");
a5.innerHTML = "Instagram";
a1.href = "#";
twosDiv.className.add = "twos - a";
a5.style.fontSize = "14px";
a5.style.lineHeight = "21px";
li5.appendChild(a5);
ul.appendChild(li5);
twosDiv.className.add = "twos - li5";
li5.style.padding = "12px 127px 12px 127px";
li5.style.backgroundColor = "#333333";
li5.style.borderRadius = "8px";
li5.style.listStyle = "none";

li5.addEventListener("mouseover", () => {
  li5.style.backgroundColor = "#C4F82A";
});

li5.addEventListener("mouseout", () => {
  li5.style.backgroundColor = "#333333";
});

twosDiv.appendChild(ul);
divFirst.appendChild(twosDiv);
body.appendChild(divFirst);
