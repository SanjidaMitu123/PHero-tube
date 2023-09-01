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
      
    // console.log(data.data);
    if (data.data.length == "")
    {
      const div = document.createElement('div');
        div.innerHTML=`<img src="./img/icon.png" class=" h-[300px] w-[300px] center pr-10 ml-30 " />
        <h1 class=" text-center text-5xl font-extrabold">Oops!! Sorry, There is no content here</h1>
        `;
      cards.appendChild(div);
    }
    else{
    data.data.forEach((videos)=>{
      
        // console.log(videos.others.views.slice(0,3));

       function hr(sec){
        const hours = Math.floor(sec / 3600);
        const minutes = Math.floor((sec % 3600) / 60);
        return `${hours}hrs ${minutes}min ago`
       }
       const time = hr(parseInt(videos.others.posted_date));
        
       
        const div = document.createElement('div');
        div.innerHTML=` <div class="card w-66 h-[400px] bg-base-100 m-6 shadow-xl">
        <figure class="h-[200px] "><img src=${videos.thumbnail} class="relative" /><span class="text-white bg-black absolute bottom-[220px] right-1">${time}</span></figure>
        <div class="card-body">
          <h2 class="card-title"> <img src=${videos?.authors?.[0].profile_picture} class="w-10 h-10 rounded-full" /> ${videos.title}</h2>
          

          <p>${videos?.authors?.[0].profile_name}   ${videos.authors?.[0]?.verifie  ? "fjk" : " " }</p>
          <p>${videos.others.views}</p>
          <div class="">
          </div>
        </div>
      </div>`;
      cards.appendChild(div);
      
 
    });
  }
  
};

// const cid = "1000";
// const videosortviwes = async (cid) => {
//   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${cid}`);
//   const data = await res.json();
 

//   const cards = document.getElementById("card-container");
//   cards.innerHTML = " ";
//   console.log(data.data);
//   data.data.sort( parseFloat(data.data.others.views.slice(0,3)))
//   data.data.forEach((videos)=>{
//       console.log(videos);
//       // let c =  videos.others.views.slice(0,3);
//       // console.log(c);
//       // c.sort((a,b) => a.c - b.c );
//       // for (item of videos)
//       // {
//       //   console.log(item);
//       // }
//     //   const div = document.createElement('div');
//     //   div.innerHTML=` <div class="card w-66 h-[400px] bg-base-100 m-6 shadow-xl">
//     //   <figure><img src=${videos.thumbnail} /></figure>
//     //   <div class="card-body">
//     //     <h2 class="card-title"> <img src=${videos?.authors?.[0].profile_picture} class="w-10 h-10 rounded-full" /> ${videos.title}</h2>
        

//     //     <p>${videos?.authors?.[0].profile_name}   ${videos?.authors?.[0].verifie }</p>
//     //     <p>${videos.others.views}</p>
//     //     <div class="">
//     //     </div>
//     //   </div>
//     // </div>`;
//     // cards.appendChild(div);

//   } );

// };


categorylist();
loadvideos("1000");

function blogpage()
{
  window.location.href ="blog.html";
}

function gohome()
{
  window.location.href ="index.html";
}
