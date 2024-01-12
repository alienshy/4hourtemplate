let url = " http://localhost:3000/data/";


let card = document.querySelector(".cardscon")
let search = document.querySelector(".search")
let sort = document.querySelector("#sort")
filter = [];
copy = [];

async function carddata(){
    let res = await axios.get(url)
    let data = await res.data;
    copy = data;

card.innerHTML=""
filter=filter.length || search.value ? filter : data;


filter.forEach(el => {
    card.innerHTML+=`
    <div class="card">
    <i class="bi bi-person-raised-hand"></i>
    <h2>${el.nam}</h2>
    <p>${el.myinfo}</p>
    <div class="cardscrud">
        <a onclick="deletecards(${el.id})"><i class="bi bi-trash2-fill"></i></a>
        <i class="bi bi-arrow-down-circle-fill"></i>
        <a href="./det.html?id=${el.id}"><i class="bi bi-info-circle-fill"></i></a>
        <button>ADD TO BASKET<i class="bi bi-cart-fill"></i></button>
    </div>
</div>`
});
}
carddata()


//////search////


search.addEventListener("input",(e)=>{
    filter = copy;
    filter = filter.filter((y)=>{
        return y.nam.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    carddata();
})

////sort/////
sort.addEventListener("change",(e)=>{
    if(e.target.value == "az"){
        filter.sort((a,b)=>a.nam.localeCompare(b.nam))
    }
    else if(e.target.value == "za"){
        filter.sort((a,b)=>b.nam.localeCompare(a.nam))
    }
    else {
        filter = copy;
    }
carddata()
});


//////delete////
async function deletecards(id){
    let res = await axios.delete(url + id)
    window.location.reload();
    return res.data;
}

