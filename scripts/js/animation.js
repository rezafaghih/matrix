function importElementPoistion(el, max_content)
{
  if (max_content == true)
  {
    return el.offsetTop+el.offsetHeight;
  }else if (max_content == false){
    return el.offsetTop;
  }
}


function processAnimation()
{
  elementPosition = importElementPoistion(element, true);
}


