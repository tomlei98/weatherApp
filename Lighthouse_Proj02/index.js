var fakeData = {
  base: "stations",
    clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
      lon: -79.38
  },
  dt: 1507510380,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
    sys: {
    type: 1,
      id: 2117,
        message: 0.0041,
          country: 'CA',
            sunrise: 1507548290,
              sunset: 1507589027,
                type: 1
  },
  visibility: 16093,
    weather: [
      {
        description: 'clear sky',
        icon: '01n',
        id: 800,
        main: "Clear"
      }
    ],
      wind: {
    deg: 170,
      speed: 1.5
  }
}

$(document).ready(function() {
  // console.log('Connected!') // test its working
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = $('input').val();
    console.log(userInput)
    $('.blue-background').hide(1000);
    $('.results').show(1500)
    //$('.results').append('<p>You are searching for the city of Toronto</p>')
    $('.results-text').replaceWith('<p>You are searching for the city of ' + userInput + '</p>')
    $('.results').append('<p>The temperature is currently:' + fakeData.main.temp + '</p>')
  })

  $('.special-button').click(function() {
      //$('.buttons').prepend('<button type="button">New Button</button>')
      //$(this).before('<button type="button">New Button</button>')
      //$('nav').remove()
      $('.results').fadeOut(1000, clearResults)
      $('.blue-background').delay(1000).fadeIn(1000)
      $('.input-city').val('');
      //$('header').text("I am the only text")
 })
  // select elements to act on
  //$('p')
  //$('main section')
  //$('.blue-background')
  //$('#main-title')
  //$('#search-field')

  // animating elements that already exist in the DOM
  // $('header').hide(1000).show(1000)

  // event listeners

  // $('a').on('mouseenter', function() {
  //   $(this).css('background', 'red')
  // })

  //$('nav').append('<a target="_blank" href="http://www.google.ca">Google</a>')



  //$('header').remove()

  //$('a').before('<a target="_blank" href="http://www.google.ca">Facebook</a>')

  // var text = $('.results-text').html();
  // console.log(text)

  // var greenBackgroundText = $('.green-background').text()
  // console.log(greenBackgroundText)

  function clearResults() {
    $('.results').html('');
  }
})
