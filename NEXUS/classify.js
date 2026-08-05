// Waste Categories

const categories = {
    recyclable: {
        color: "blue",
        name: "Recyclable",
        description: "Clean paper, plastic, glass and metal items that can be recycled."
    },

    biodegradable: {
        color: "green",
        name: "Biodegradable",
        description: "Organic waste that naturally decomposes."
    },

    electronic: {
        color: "orange",
        name: "Electronic",
        description: "Electronic devices that require special recycling."
    },

    hazardous: {
        color: "red",
        name: "Hazardous",
        description: "Dangerous waste such as batteries, chemicals and medicines."
    }
};

// Waste Database

const wasteMap = {

    newspaper: "recyclable",
    paper: "recyclable",
    cardboard: "recyclable",
    bottle: "recyclable",
    glass: "recyclable",
    plastic: "recyclable",
    bag: "recyclable",
    can: "recyclable",
    aluminum: "recyclable",

    banana: "biodegradable",
    peel: "biodegradable",
    food: "biodegradable",
    tea: "biodegradable",
    coffee: "biodegradable",
    leaves: "biodegradable",
    garden: "biodegradable",

    laptop: "electronic",
    phone: "electronic",
    charger: "electronic",
    cable: "electronic",

    battery: "hazardous",
    paint: "hazardous",
    bulb: "hazardous",
    medicine: "hazardous",
    chemical: "hazardous"
};

// Classify Item

function classifyItem(itemName){
    let item=itemName.toLowerCase();
    let category=null;
    for(let key in wasteMap){
        if(item.includes(key)){
            category=wasteMap[key];
            break;
        }
    }
    displayCategory(itemName,category);

}

// Search Box

function classifyFromInput(){
    let item=document.getElementById("searchInput").value.trim();
    if(item===""){
        alert("Please enter a waste item.");
        return;
    }
    classifyItem(item);
}

// Display Result

function displayCategory(itemName,categoryKey){
    const result=document.getElementById("classificationResult");
    result.style.display="block";
    if(categoryKey==null){
        result.innerHTML=
        "<strong>Item:</strong> "+itemName+
        "<br><br>Unknown Item.";
        return;
    }

    const category=categories[categoryKey];
    result.innerHTML=
    "<strong>Item :</strong> "+itemName+
    "<br><br>"+
    "<span class='pill "+category.color+"'>"+
    category.name+
    "</span>"+
    "<p>"+category.description+"</p>";
}

// Reset

function resetResult(){
    document.getElementById("searchInput").value="";
    document.getElementById("classificationResult").style.display="none";
}

// Image Upload

const imageInput=document.getElementById("imageInput");
const pickFileBtn=document.getElementById("pickFileBtn");
const uploadPreview=document.getElementById("uploadPreview");
const classifyImageBtn=document.getElementById("classifyImageBtn");
const clearImageBtn=document.getElementById("clearImageBtn");
let selectedImage=null;

pickFileBtn.addEventListener("click",function(){
    imageInput.click();
});

imageInput.addEventListener("change",function(){
    if(this.files.length>0){
        selectedImage=this.files[0];
        previewImage(selectedImage);
    }
});

function previewImage(file){
    let reader=new FileReader();
    reader.onload=function(e){
        uploadPreview.innerHTML=
        "<img src='"+e.target.result+"' width='170'>";
    };
    reader.readAsDataURL(file);
}

// Image Classification

classifyImageBtn.addEventListener("click",function(){
    if(selectedImage==null){
        alert("Please upload an image.");
        return;
    }
    let fileName=selectedImage.name.toLowerCase();
    classifyItem(fileName);
});

// Clear Image

clearImageBtn.addEventListener("click",function(){
    selectedImage=null;
    uploadPreview.innerHTML="";
    imageInput.value="";
    resetResult();
});