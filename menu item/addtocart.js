let count = document.querySelectorAll(".count_number")
let cartNumber = document.querySelector('#count')
let cartParent = document.querySelector(".cart-parent")
let but = document.querySelector(".bottbtn")

count.forEach((items)=>{
    items.addEventListener('click',()=>{
        cartNumber.innerHTML++   
        
        let parent = items.parentElement.parentElement;
        
        let cardImg = parent.querySelector(".card-img-top").src;
        let cardName = parent.querySelector(".card-title").innerHTML;
        let cardPrice = parent.querySelector(".card-price").innerHTML;
        updateCart(cardImg, cardName, cardPrice)
        alert(`${cardName} Added in your Cart`)
        
        let empty=document.querySelector('.empty').remove();
    })
})

let updateCart = (cardImg, cardName, cardPrice)=>{
    let template = ` <img src=${cardImg} width="150px" height="150px" class="rounded" alt="...">
                    <div class="cart-item">
                      <h5 class="card-title">${cardName}</h5>
                      <p class="item-price">Rs:<span>${cardPrice}</span></p>
                      <input type="number" class="sidebar-qtyitem" value="1">
                      <i class='bx close_button bx-message-rounded-x' onclick="removeCart(event)"></i>
                    </div>`

    let div = document.createElement("div")
    div.classList.add("cart-sidebar")
    
    div.innerHTML = template

    // console.log(div);

    cartParent.append(div)
}

let removeCart = (event)=>{

    let removeParent = event.target.parentElement.parentElement;
    removeParent.remove()
    
    
    
}

but.addEventListener("click",()=>{
    alert('Your ordered Sucessfully !!! ')   
})

