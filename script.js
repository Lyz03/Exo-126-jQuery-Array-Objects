
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

//Methode js native pour parcourir un tableau d'objets ( avec for...in )
for(let i in arrObj) {
    // i est l'index de mon tableau d'objet
    console.log("index = " + i);

    // j'accède à mon tableau d'objet comme n'importe quel tableau
    console.log("arrObj = " + arrObj[i]);

    // J'accéde à une propriété particuliére de mon objet ,ici l'age
    console.log("age = " + arrObj[i].age);
}

//Autre méthode : utilisation de forEach
arrObj.forEach(function(arr) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Resultat avec foreach = " + arr.age);
});

//Méthode utilisant jQuery
$.each(arrObj, function(index, value) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Affichage age utilisant jQuery = " + value.age);
});

// index
const div = document.createElement('div');
const previous = document.createElement('button');
const next = document.createElement('button');
let i = 0;

/**
 * create a pseudo carousel
 * @param i
 */
function print(i) {
    div.style.textAlign = "center";
    div.style.height = "500px";
    div.style.width = "500px"
    document.body.appendChild(div);

    previous.style.margin = "auto";
    previous.innerText = "<"
    document.body.appendChild(previous);

    next.style.margin = "auto";
    next.innerText = ">"
    document.body.appendChild(next);

    let img = document.createElement('img');
    img.src = arrObj[i].avatar
    div.appendChild(img);

    let p = document.createElement('p');
    p.innerText = arrObj[i].person + " ( " + arrObj[i].age + " )";
    div.appendChild(p);
}

next.addEventListener("click", () => {
    i++

    if (i === arrObj.length)
        i = 0

    div.innerHTML = "";
    print(i)

})

previous.addEventListener("click", () => {
    i--

    if (i === -1)
        i = 2

    div.innerHTML = "";
    print(i)
})

// index list
function printEveryPerson() {
    arrObj.forEach(value => {
        let div = document.createElement('div');
        div.style.textAlign = "center";
        document.body.appendChild(div);

        let img = document.createElement('img');
        img.src = value.avatar
        div.appendChild(img);

        let p = document.createElement('p');
        p.innerText = value.person + " ( " + value.age + " )";
        div.appendChild(p);
    });
}
