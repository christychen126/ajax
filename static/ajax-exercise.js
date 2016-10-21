"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

function getFortune(evt) {
    $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function getWeather(result){
    $('#weather-info').html(result.forecast);
}

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, getWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function showOrderResults(result) {
    console.log(result);
    $('#order-status').html(result.msg);
}

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        "qty": $("#qty-field").val(),
        "melon_type": $("#melon-type-field").val()
    };

    $.post("/order-melons.json", formInputs, showOrderResults);
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


