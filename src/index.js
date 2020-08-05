console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogImgDiv = document.querySelector('#dog-image-container');
const dogBreedsUl = document.querySelector('#dog-breeds');
const breedDropdown = document.querySelector('#breed-dropdown');

var dogsData;

breedDropdown.addEventListener('change', filterDogs);
function filterDogs(e) {
  const option = e.target.options[e.target.selectedIndex].value;
  const result = {}
  for (const breedKey in dogsData) {
    if (breedKey[0].toLowerCase() == option) {
      result[breedKey] = dogsData[breedKey]
    }
  }
  clearDogBreedsUl();
  addBreeds(result);
}
fetch(imgUrl)
  .then(res => res.json())
  .then(obj => addImagesToDiv(obj.message));

fetch(breedUrl)
  .then(res => res.json())
  .then(breedObj => {
    dogsData = breedObj.message;
    addBreeds(breedObj.message);
  })

function addBreeds(breedObj) {
  for (const breed in breedObj) {
    if (breedObj[breed].length == 0) {
      addBreedLi(breed);
    } else {
      addBreedLi(breed);
      addSubBreeds(breed, breedObj[breed]);
    } 
  }
}

function addBreedLi(breed) {
  const breedLi = document.createElement('li');
  breedLi.innerText = breed;
  breedLi.id = breed;
  breedLi.className="breed-list"
  breedLi.addEventListener('click', toggleBgColor);
  dogBreedsUl.append(breedLi);
  return breedLi;
}

function addSubBreeds(parentLiId, breedsArr) {
  const parentLi = document.querySelector(`#${parentLiId}`);
  const subUl = document.createElement('ul');
  breedsArr.forEach(breed => {
    const breedLi = document.createElement('li');
    breedLi.innerText = breed;
    subUl.append(breedLi);
  })
  parentLi.append(subUl);
}

function toggleBgColor(e) {
  const li = e.target;
  if (li.style.color.length == 0) {
    li.style.color = "blue";
  } else {
    li.style.color = '';
  }
}

function addImagesToDiv(dogLinks) {
  dogLinks.forEach(link => addImageFromURL(link));
}

function addImageFromURL(imgLink) {
  imgEl = document.createElement('img');
  imgEl.src = imgLink;
  imgEl.className="dogphoto"
  dogImgDiv.append(imgEl);
}

function clearDogBreedsUl() {
  document.querySelector('#dog-breeds').innerHTML = "";
}

var breeds = {
  "affenpinscher": [],
  "african": [],
  "airedale": [],
  "akita": [],
  "appenzeller": [],
  "australian": [
      "shepherd"
  ],
  "basenji": [],
  "beagle": [],
  "bluetick": [],
  "borzoi": [],
  "bouvier": [],
  "boxer": [],
  "brabancon": [],
  "briard": [],
  "buhund": [
      "norwegian"
  ],
  "bulldog": [
      "boston",
      "english",
      "french"
  ],
  "bullterrier": [
      "staffordshire"
  ],
  "cairn": [],
  "cattledog": [
      "australian"
  ],
  "chihuahua": [],
  "chow": [],
  "clumber": [],
  "cockapoo": [],
  "collie": [
      "border"
  ],
  "coonhound": [],
  "corgi": [
      "cardigan"
  ],
  "cotondetulear": [],
  "dachshund": [],
  "dalmatian": [],
  "dane": [
      "great"
  ],
  "deerhound": [
      "scottish"
  ],
  "dhole": [],
  "dingo": [],
  "doberman": [],
  "elkhound": [
      "norwegian"
  ],
  "entlebucher": [],
  "eskimo": [],
  "finnish": [
      "lapphund"
  ],
  "frise": [
      "bichon"
  ],
  "germanshepherd": [],
  "greyhound": [
      "italian"
  ],
  "groenendael": [],
  "havanese": [],
  "hound": [
      "afghan",
      "basset",
      "blood",
      "english",
      "ibizan",
      "plott",
      "walker"
  ],
  "husky": [],
  "keeshond": [],
  "kelpie": [],
  "komondor": [],
  "kuvasz": [],
  "labrador": [],
  "leonberg": [],
  "lhasa": [],
  "malamute": [],
  "malinois": [],
  "maltese": [],
  "mastiff": [
      "bull",
      "english",
      "tibetan"
  ],
  "mexicanhairless": [],
  "mix": [],
  "mountain": [
      "bernese",
      "swiss"
  ],
  "newfoundland": [],
  "otterhound": [],
  "ovcharka": [
      "caucasian"
  ],
  "papillon": [],
  "pekinese": [],
  "pembroke": [],
  "pinscher": [
      "miniature"
  ],
  "pitbull": [],
  "pointer": [
      "german",
      "germanlonghair"
  ],
  "pomeranian": [],
  "poodle": [
      "miniature",
      "standard",
      "toy"
  ],
  "pug": [],
  "puggle": [],
  "pyrenees": [],
  "redbone": [],
  "retriever": [
      "chesapeake",
      "curly",
      "flatcoated",
      "golden"
  ],
  "ridgeback": [
      "rhodesian"
  ],
  "rottweiler": [],
  "saluki": [],
  "samoyed": [],
  "schipperke": [],
  "schnauzer": [
      "giant",
      "miniature"
  ],
  "setter": [
      "english",
      "gordon",
      "irish"
  ],
  "sheepdog": [
      "english",
      "shetland"
  ],
  "shiba": [],
  "shihtzu": [],
  "spaniel": [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh"
  ],
  "springer": [
      "english"
  ],
  "stbernard": [],
  "terrier": [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire"
  ],
  "vizsla": [],
  "waterdog": [
      "spanish"
  ],
  "weimaraner": [],
  "whippet": [],
  "wolfhound": [
      "irish"
  ]
}
