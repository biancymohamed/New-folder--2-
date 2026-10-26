let price=document.getElementById("price")
let taxis=document.getElementById("taxis")
let ads=document.getElementById("ads")
let discount=document.getElementById("discount")
let count=document.getElementById("count")
let category=document.getElementById("category")
let total=document.getElementById("span")
let text=document.getElementById("title")



let create=document.getElementById("button")


let data=[]

let temp
let y="create" 




function Getprice() {
    
if(price.value!=''){
   let result=(+price.value + +taxis.value  + +ads.value)- +discount.value  
   total.innerHTML=result  
   total.style.backgroundColor="green" 
} else{
   total.innerHTML=''
   total.style.backgroundColor="brown"
}


} 


// ////////////////////////////////////////////////////////////////////////////




create.addEventListener("click",function(){
    let obj={
        price:price.value,
        taxis:taxis.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value,
        title:text.value,
        total:(+price.value + +taxis.value  + +ads.value)-(+discount.value )
    }
   

    if (y=="create")
    { 
        data.push(obj) 
    }
    else{

        data[temp]=obj
        y="create"
create.innerHTML="create"
    }

    show() 
    clear()
})



// ///////////////////////////////////////////////////////////////////




function clear(){

    title.value = '';
    price.value = '';
    taxis.value = ''; 
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    total.innerHTML = ''; 



}



// ////////////////////////////////////////////////////////////////////////







function show(){

let t=''
for(let i=0;i<data.length;i++){
    t+=`<tr>
        <td>${data[i].title}</td>
        <td>${data[i].price}</td>
        <td>${data[i].taxis}</td>
        <td>${data[i].ads}</td>
        <td>${data[i].discount}</td>
        <td>${data[i].total}</td>
        <td>${data[i].count}</td>
        <td>${data[i].category}</td>
        <td><button id="update" onclick="update(${i})" >update</button></td>
        <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
    </tr>`

}
document.getElementById("body").innerHTML=t
} 




// //////////////////////////////////////////////////////////////////////













function getsearch(id) {
    let search = document.getElementById("search")
    let value = search.value
    let t = '';

    for (let i = 0; i < data.length; i++) {
        if (id == 'title') {
            if (data[i].title.includes(value)) {
                t += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].taxis}</td>
                    <td>${data[i].ads}</td>
                    <td>${data[i].discount}</td>
                    <td>${data[i].total}</td>
                    <td>${data[i].count}</td>
                    <td>${data[i].category}</td>
                    <td><button onclick="update(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>`;
            }
        } else {
            if (data[i].category.includes(value)) {
                t += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].taxis}</td>
                    <td>${data[i].ads}</td>
                    <td>${data[i].discount}</td>
                    <td>${data[i].total}</td>
                    <td>${data[i].count}</td>
                    <td>${data[i].category}</td>
                    <td><button id="update" onclick="update(${i})>update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>`;
            }
        }
    }

    document.getElementById('body').innerHTML = t;
}



// //////////////////////////////////////////////////////////////////////////


function deleteData(i) {
    data.splice(i, 1)
    show()
}


// ///////////////////////////////////////////////////////////////////////////





function update(i){

    text.value = data[i].title;
    price.value = data[i].price;
    taxis.value = data[i].taxis;
    ads.value = data[i].ads;
    discount.value = data[i].discount;
    count.value = data[i].count;
    category.value = data[i].category;
    
    create.innerHTML = "update";
    y = "update"; 
    temp = i;
    
  
}