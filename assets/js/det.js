let id = new URLSearchParams(window.location.search).get("id")
let url = " http://localhost:3000/data/";
let card = document.querySelector(".cardscon");
async function info(id){
    let res = await axios.get(url+id)
    let data = await res.data;
    card.innerHTML=`
    <div class="card">
    <i class="bi bi-person-raised-hand"></i>
    <h2>${data.nam}</h2>
    <p>${data.myinfo}</p>
</div>`
}
info(id);
