const categorylist = async () => {
    const res = await fetch ("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();


    const catContainer = document.getElementById("catagory-container");
    data.data.forEach((cat) => {
   
       
        const div = document.createElement("div");
        div.innerHTML = `
        <button  onclick="loadvideos('${cat.category_id}')" class="btn btn-ghost bg-[#25252533] mr-1 hover:bg-[#FF1F3D] active:bg-[#FF1F3D]">${cat.category}</button>
    
        `;
     
    catContainer.appendChild(div);
    

    });
    
};

const loadvideos = async (catId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catId}`);
    const data = await res.json();
    

    const cards = document.getElementById("card-container");
    cards.innerHTML = " ";
    console.log(data.data);
    if (data.data.length == "")
    {
      const div = document.createElement('div');
        div.innerHTML=`<img src="./img/icon.png" class=" h-[300px] w-[300px] center ml-30" />
        <h1 class=" text-center text-5xl font-extrabold">Oops!! Sorry, There is no content here</h1>
        `;
      cards.appendChild(div);
    }
    else{
    data.data.forEach((videos)=>{
        console.log(videos);
     
        const div = document.createElement('div');
        div.innerHTML=` <div class="card w-66 h-[400px] bg-base-100 m-6 shadow-xl">
        <figure><img src=${videos.thumbnail} /></figure>
        <div class="card-body">
          <h2 class="card-title"> <img src=${videos?.authors?.[0].profile_picture} class="w-10 h-10 rounded-full" /> ${videos.title}</h2>
          

          <p>${videos?.authors?.[0].profile_name}   ${videos?.authors?.[0].verifie }</p>
          <p>${videos.others.views}</p>
          <div class="">
          </div>
        </div>
      </div>`;
      cards.appendChild(div);

    });
  }
};


categorylist();
loadvideos("1000");
