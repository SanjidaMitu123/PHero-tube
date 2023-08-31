const categorylist = async () => {
    const res = await fetch ("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();


    const catContainer = document.getElementById("catagory-container");
    data.data.forEach((cat) => {
       
        const div = document.createElement("div");
        div.innerHTML = `
        <a class="tab">${cat.category}</a> 
        `;

    catContainer.appendChild(div);
        
    });
    console.log(data.data);
};

categorylist();