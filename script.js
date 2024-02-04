let dubaitext = document.getElementById('sky')
let burjkhalifa = document.getElementById('sun1')
let stars = document.getElementById('mountain')
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    dubaitext.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 0.5 + 'px';
    stars.style.top = value * 1 + 'px';
});
fetch("https://dummyjson.com/recipes").then((response=>{
  response.json().then((response)=>{
    const allrecipes=response.recipes
   console.log(allrecipes);
   allrecipes.forEach(item=>{
    result.innerHTML+=`<div class="col-lg-3 mb-2">
   
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.cuisine}</p>
           
            </div>
          </div>
    </div></div>
   </div>
       `
   })
    }
  )  
})).catch((reason)=>{
    console.log(reason);
})