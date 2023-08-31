const categorylist = async () => {
    const res = await fetch ("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();


    const catContainer = document.getElementById("catagory-container");
    data.data.forEach((cat) => {
       
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="loadvideos('${cat.category_id}')" class="tab">${cat.category}</a> 
        `;

    catContainer.appendChild(div);
        
    });
    console.log(data.data);
};

const loadvideos = async (catId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catId}`);
    const data = await res.json();
    console.log(data.data);

    const cards = document.getElementById("card-container");

    data.data.forEach((videos)=>{
        console.log(videos);
        const div = document.createElement('div');
        div.innerHTML=` <div class="card w-66 h-[400px] bg-base-100 m-6 shadow-xl">
        <figure><img src=${videos.thumbnail} /></figure>
        <div class="card-body">
          <h2 class="card-title"> <img src=${videos?.authors?.[0].profile_picture} class="w-10 h-10 rounded-full" /> ${videos.title}</h2>
          <p>${videos?.authors?.[0].profile_name} 
          
          </p>
          <p>${videos.others.views}</p>
          <div class="">
          </div>
        </div>
      </div>`;
      cards.appendChild(div);

    });

};


categorylist();