fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(datas =>
    
    datas.forEach(data => {
        console.log(data.name.common);
    }))

    
