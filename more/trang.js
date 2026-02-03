const name = "Nguyễn Mai Trang";
const age = "15";
const city = "Hà Nội";
const job = "Học Sinh - THPT Quốc Oai";
const about = `Mai Trang, sinh ngày 25/2/2010,`;
const skillsArr = ["Chơi freefire", "", "", " "];
const timelineArr = [
  {
    year: "2025-2028",
    title: "Tốt Nghiệp",
    desc: "THPT Quốc Oai",
  },
  { year: "2021-2025", title: "Tốt nghiệp", desc: "Cấp 2 yên sơn" },
  {
    year: "2015-2021",
    title: "Tốt Nghiệp",
    desc: "Trường cấp 1 yên sơn",
  },
  {
    year: "2010-2015",
    title: "Tốt Nghiệp",
    desc: "Trường mần non yên sơn",
  },
];
const contactObj = {
  email: "Đố biết đấy",
  phone: "0397006411",
  insta: "maitrang_02",
  facebook: "Maii Trangg",
};

document.getElementById("name").textContent = name;
document.getElementById("age").textContent = age;
document.getElementById("city").textContent = city;
document.getElementById("job").textContent = job;
document.getElementById("about").textContent = about;

const sNode = document.getElementById("skills");
skillsArr.forEach((s) => {
  let e = document.createElement("div");
  e.className = "skill";
  e.textContent = s;
  sNode.appendChild(e);
});

const tNode = document.getElementById("timeline");
timelineArr.forEach((t) => {
  let e = document.createElement("div");
  e.className = "item";
  e.innerHTML = `<h4>${t.title} <small style="color:var(--muted)">${t.year}</small></h4><p>${t.desc}</p>`;
  tNode.appendChild(e);
});

const cNode = document.getElementById("contact");
for (const k in contactObj) {
  let e = document.createElement("a");
  e.className = "chip";
  e.textContent = `${k}: ${contactObj[k]}`;
  if (k === "email") {
    e.href = `mailto:`;
  } else if (k === "phone") {
    e.href = `tel:0397006411`;
  } else if (k === "insta") {
    e.href = `https://www.instagram.com/maitrangg_02?fbclid=IwY2xjawPuoXJleHRuA2FlbQIxMABicmlkETFuaDUwbWQ2UTR4SklQU3Zqc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHkqHqX7XjGDDUVFcyFxyGzqXWuJX8Y8mgYbwWqkVD26quY7WKhcOV86uHCNx_aem_vyNMOrGTMfAp-8eHEKawQQ`;
  } else if (k === "facebook") {
    e.href = `https://www.facebook.com/maii.trangg.25th2`;
  }
  cNode.appendChild(e);
}
