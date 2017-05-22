// Kodilla task 12.6

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    
    var countryName = $('#country-name').val();

    if(!countryName.length) { countryName = 'San Escobar' };
    
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function show_flag(src) {
     
    var img = document.createElement("img");
    img.src = src;
    img.width = 200;
    img.height = 100;
                
    document.body.appendChild(img);
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text('[ ' + item.name + ' ] ... capital: ' + item.capital).appendTo(countriesList);
        
        show_flag(item.flag);
    });
}

    