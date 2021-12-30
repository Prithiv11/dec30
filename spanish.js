const getcountries = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();

    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;
            const spa = countries.filter((country)=>{
              if(country.name.common!="Antarctica")
              return country.languages.spa=="Spanish"})
            .map((country)=>country.name.common)
            console.log(spa);

    };
};
getcountries();
