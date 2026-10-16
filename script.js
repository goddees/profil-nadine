const deskripsi = document.querySelector("#deskripsi");
const tombolTeks = document.querySelector("#tombolTeks");
const tombolTema = document.querySelector("#tombolTema");

const daftarTeks = [
  "Hi! I'm Nadine, a first-semester Informatics Engineering student, and I'm learning how to make websites. I love trying new things, especially anything tech, because technology changes so fast every day.",
  "Hey there! I'm Nadine, a first-semester Informatics Engineering student, and I'm just getting started with building websites. I'm always excited to try new stuff, especially tech, because it keeps changing every single day.",
  "Hi, I'm Nadine! I'm in my first semester of Informatics Engineering, and right now I'm learning how to build websites. Trying new things is kind of my thing, especially in tech, because it never stops moving forward."
];

let nomor = 0;

tombolTeks.addEventListener("click", function () {
  nomor = nomor + 1;

  if (nomor === daftarTeks.length) {
    nomor = 0;
  }

  deskripsi.textContent = daftarTeks[nomor];
});

tombolTema.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("gelap");
});