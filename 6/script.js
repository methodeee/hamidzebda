const panier=[];
const produits = [
  {
    nom: "Boba Thé",
    image: "boba.png",
    prix:"6",
    description: "Un délicieux thé sucré aux perles de tapioca."
  },
  {
    nom: "Matcha Latte",
    image: "boba.png",
    prix:"6",
    description: "Une boisson au matcha douce et crémeuse."
  },
  {
    nom: "Thé Noir Glacé",
    image: "boba.png",
    prix:"6",
    description: "Un classique désaltérant, parfait pour l'été."
  }
 
];
  let total=0;
  let totalprix=0;
    produits.forEach(produit=>{
        let div= document.createElement("div");
        div.className="carte";
        
        let titre=document.createElement("h3");
        titre.textContent=produit.nom;
        div.appendChild(titre);

        let img=document.createElement("img");
        img.src= produit.image;
        img.width=200;
        div.appendChild(img);

        let price=document.createElement("p");
        price.textContent="prix : "+produit.prix;
        div.appendChild(price);
        
        let para=document.createElement("p");
        para.textContent=produit.description;
        div.appendChild(para);

        let btn=document.createElement("button");
        btn.textContent="acheter";
        div.appendChild(btn);

        btn.addEventListener("click", function () {
    console.log("Tu as acheté : " + produit.nom);
    panier.push(produit.nom);
    console.log(panier);
    let item=document.createElement("li");
    item.textContent=produit.nom;
    document.querySelector("#panier").appendChild(item);
   
    total++;
    totalprix+=produit.prix;
    document.querySelector("#compte").textContent=total;
     document.querySelector("#compte").value=totalprix;
});

         document.querySelector("#catalogue").appendChild(div);
    });

