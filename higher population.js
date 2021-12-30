const getcountries = ( ) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","https://restcountries.com/v3.1/all")
  xhr.send();

  xhr.responseType = "json";
  xhr.onload = ()=>{
      const countries = xhr.response;
      
          const pop = countries.filter((country)=>country.population>=10000000)
          .map((country)=>country.name.common)
          console.log(pop);

  };
};
getcountries();