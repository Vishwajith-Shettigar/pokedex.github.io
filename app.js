

let backaudio = new Audio('back.mp3');
backaudio.play();

let onbutton=document.getElementById('onbutton');

let catchaudio=new Audio('catch.mp3')


let backbutton=document.getElementById('backbutton');

backbutton.addEventListener('click',()=>
{
    backaudio.pause();

})

onbutton.addEventListener('click',()=>
{
    backaudio.play();
})


let search= document.getElementById('search');
let input_field= document.getElementById('inputfieled');

let parent_container=document.getElementById('parentcontainer');

let searchinput;


parent_container.innerHTML=` <div id="image">
<img id="pimage" src="bulb.png">
</div>

<div class="container px-4 " id="nameandnum">
<div class="row gx-5">
    <div class="col">
        <div class="p-3 border bg-light">
            <h3 id="pokename">Bulbasaur</h3>
        </div>
    </div>
    <div class="col">
        <div class="p-3 border bg-light">
            <h3 id="pokeorder">#001</h3>
        </div>
    </div>
</div>
</div>

<div class="baap">


<div class="parentdetails">
    <div class="details">
        <div class="det" id="height">
            <button type="button" class="btn btn-primary">
                <h3 >Height</h3>
            </button>
            <h3 class="lol" id="pokeheight">###</h3>
        </div>
        <div class="det" id="weight">

            <button type="button" class="btn btn-success">
                <h3 >Weight</h3>
            </button>
            <h3 class="lol" id="pokeweight">###</h3>
        </div>


    </div>
    <div class="details">
        <div class="det" id="rarity">
            <button type="button" class="btn btn-danger">
                <h3>Rarity</h3>
            </button>
            <h3 id="pokerarity" class="lol">###</h3>
        </div>
        <div class="det" id="type">
            <button type="button" class="btn btn-secondary">
                <h3 >Ability</h3>
            </button>
            <h3 id="pokeability" class="lol">###</h3>



        </div>
    </div>





</div>

<div class="parenttype">
    <h2>Type</h2>
    <button  class="newone" type="button" class="btn newone btn-success">
        <h3 id="type1">###</h3>
    </button>
    <button class="newone"  type="button" class="btn btn-danger">
        <h3 id="type2">###</h3>
    </button>
    <button class="newone"  type="button" class="btn btn-warning">
        <h3 id="type3">###</h3>
    </button>
</div>

</div>`;




search.addEventListener('click',()=>
{


    catchaudio.play();
    searchinput="";

    searchinput=document.getElementById('inputfieled').value;



 let xhr= new XMLHttpRequest();

 xhr.open('GET',`https://pokeapi.co/api/v2/pokemon/${searchinput}`);

 xhr.onload=function()
 {

   let result= JSON.parse(xhr.responseText);

   console.log(result);

// pokemon name
   console.log(result.forms[0].name);
   let name=result.forms[0].name;
   let pokename=document.getElementById('pokename');
   pokename.innerHTML=name;

   // order
   let pokeorder=document.getElementById('pokeorder');
    let order= result.id;
    console.log(order);
 let number1="#0";
 let number2="#00";
    if(order<10)
    {
        order=number2+order;
    }
    else if(order<100)
    {
        order=number1+order;
    }
else{
  order="#"+order;
}


pokeorder.innerHTML=order;
console.log(order);



// pokemon image




let pokeimage= document.getElementById('pimage');

let imagep=result.sprites.front_default;
console.log(imagep);

pokeimage.src= imagep;


// height

let pokeheight= document.getElementById('pokeheight');
let heightp=result.height;
pokeheight.innerHTML=heightp;

//weight

let pokeweight= document.getElementById('pokeweight');
let weightp=result.weight;
pokeweight.innerHTML=weightp;


// ability
let pokeability= document.getElementById('pokeability');
let abilityp=result.abilities[0].ability.name;
pokeability.innerHTML=abilityp;





//type

let type1=document.getElementById('type1');
let type2=document.getElementById('type2');
let type3=document.getElementById('type3');


let type1p=result.types[0].type.name;
type1.innerHTML=type1p;
let type2p="undefined";
try{
    type2p=result.types[1].type.name;
    type2.innerHTML=type2p;

}
catch(e)
{
    type2.innerHTML="###"
}
//    console.log(type2p);
  


// let type3p=result.types[2].type.name;
// type3.innerHTML=type3p;




// rarity
let pokerarity=document.getElementById('pokerarity');
let rarityp=result.held_items[0].version_details[0].rarity;

pokerarity.innerHTML=rarityp;
console.log(rarityp);





}







xhr.send();

})