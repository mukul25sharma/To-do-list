let fact = "https://catfact.ninja/fact" ;

fetch(fact)
.then((res) => {
    console.log(res);
})
.catch((err) =>{
    console.log("error : ", err);
});