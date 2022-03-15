const buttonEl = document.getElementById('button');
const cityEl = document.getElementById('city');
//const list1 = document.querySelector('.list-class')




// API CALL TO OUR ROUTE ON BACKEND  
buttonEl.addEventListener("click", async function () {
  fetch(`/api/yelp/business/${cityEl.value}`)
    .then(response => {
      response.json().then((data) => {
        listAppend(data);
      })
    })
  });
  

function listAppend(data) {
  const listEl = document.querySelector("#list");
  listEl.textContent = "";


    for (var i = 0; i < data.length; i++) {
              
      console.log(data[i].name)

      let businessName = data[i].name;
      let businessURL = data[i].url;
      const rating = data[i].rating;
      const price = data [i].price;

      const li = document.createElement("li");
      li.textContent = "";
      let ratingImg = document.createElement("img");
      ratingImg.src = `/img/yelp-stars/${rating}.png`;
      ratingImg.setAttribute("style", "width: 14%; float: right; ")

      let priceEl = document.createElement("P");
      priceEl.innerText = price;

      let aText = document.createElement("a");
      aText.innerText = businessName;
      li.setAttribute("style", "list-style: none; justify-content: space-between; padding: 5px; background-color: #FFFDD0; border-radius: 5px; color: #5b695b; font-size:20px; width:100%; cursor:pointer; margin-top:20px; margin-bottom:20px;");
      aText.href = businessURL;


      listEl.appendChild(li);
      li.appendChild(aText);
      // li.appendChild(priceEl);
      li.appendChild(ratingImg);
    }
  };


  // function reset(){
  //   list1.textContent = "";
  // }
