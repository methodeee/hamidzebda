const panier = [];
const quantites = {};

const produits = [
  {
    nom: "Boba Thé ",
    image: "boba.png",
    prix: 6,
    description: "Un délicieux thé sucré aux perles de tapioca."
  },
  {
    nom: "Matcha Latte",
    image: "boba.png",
    prix: 6,
    description: "Une boisson au matcha douce et crémeuse."
  },
  {
    nom: "Thé Noir Glacé",
    image: "boba.png",
    prix: 6,
    description: "Un classique désaltérant, parfait pour l'été."
  }
];

let total = 0;
let totalprix = 0;

produits.forEach(produit => {
  let div = document.createElement("div");
  div.className = "carte";

  let titre = document.createElement("h3");
  titre.textContent = produit.nom;
  div.appendChild(titre);

  let img = document.createElement("img");
  img.src = produit.image;
  img.width = 200;
  div.appendChild(img);

  let price = document.createElement("p");
  price.textContent = produit.prix + " DH";
  div.appendChild(price);

  let para = document.createElement("p");
  para.textContent = produit.description;
  div.appendChild(para);

  let btn = document.createElement("button");
  btn.textContent = "acheter";
  div.appendChild(btn);

  let item = document.createElement("li");
  item.id = produit.nom;
  item.style.display = "none";
  document.querySelector("#panier").appendChild(item);

  let supp = document.createElement("button");
  supp.textContent = "supprimer";
  supp.style.display = "none";
  document.querySelector("#panier").appendChild(supp);

  supp.addEventListener("click", function () {
    if (quantites[produit.nom] > 0) {
      total -= quantites[produit.nom];
      totalprix -= quantites[produit.nom] * produit.prix;
      quantites[produit.nom] = 0;

      item.style.display = "none";
      supp.style.display = "none";

      document.querySelector("#compte").textContent = "Nombre de produit total : " + total;
      document.querySelector("#comptePrix").textContent = totalprix + " DH";
    }
  });

  btn.addEventListener("click", function () {
    if (quantites[produit.nom]) {
      quantites[produit.nom]++;
    } else {
      quantites[produit.nom] = 1;
    }

    item.style.display = "list-item";
    item.textContent = quantites[produit.nom] + " x " + produit.nom;
    supp.style.display = "inline-block";

    total++;
    totalprix += produit.prix;

    document.querySelector("#compte").textContent = "Nombre de produit total : " + total;
    document.querySelector("#comptePrix").textContent = totalprix + " DH";
  });

  document.querySelector("#catalogue").appendChild(div);
});


