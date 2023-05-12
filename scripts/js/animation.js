const inItem = []

function importElementPoistion(el, max_content)
{
  if (max_content == true)
  {
    return el.offsetTop+el.offsetHeight;
  }else if (max_content == false){
    return el.offsetTop;
  }
}

const items = document.querySelectorAll("[animation]");


function isItemInScreenZone(){
  // chek html element position is between start of offset height and end of offset height
}


function processAnimation()
{
  var scrollTop = window.pageYOffset
  for (let i =0; i<items.length; i++){
    element_top = importElementPoistion(items[i], false);
    if (scrollTop+window.innerHeight > element_top){
        console.log(`more than ${i}`);
    }
  }
}

window.addEventListener("scroll", processAnimation)

// processAnimation()



async function fetchAnimation(){
    const fetch = await fetch("../json/anim-property.json");
    const json = await fetch.json();

    return json;
}