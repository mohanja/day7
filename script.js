// (a) 
 var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all");
  request.send();
  request. onload =function(){
      var res=JSON.parse(request.response);
      console.log(res);
      var result=res.filter((ele)=>ele.region==="Asia");
      console.log(result);

  }

//(b) 
 var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all");
  request.send();
  request. onload =function(){
      var res=JSON.parse(request.response);
      console.log(res);
      var result=res.filter((ele)=>ele.population>200000);
      console.log(result);

  }

//(c)
 var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all");
  request.send();
  request. onload =function(){
      var res=JSON.parse(request.response);
      console.log(res);
    var result=res.forEach((ele)=>console.log(ele.name,ele.flag,ele.capital));
    console.log(result )
       

  }

//(d)
 var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all");
  request.send();
  request. onload =function(){
      var res=JSON.parse(request.response);
      console.log(res);
     

    var popu =res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(popu);
  }

//(e)
  var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all");
  request.send();
  request. onload =function(){
      var res=JSON.parse(request.response);
      console.log(res);
      var result=res.map((ele)=>ele.currencies);
      console.log(result);
       

  }