getFetch()

function getFetch(){
  const url = `https://api.unsplash.com/search/photos?query=cityscape&per_page=500&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let index = Math.floor(Math.random() * data.results.length)
        console.log(data.results[index].alt_description)

        document.querySelector('.background').style.backgroundImage = `url(${data.results[index].urls.raw})`


      fetch('https://api.kanye.rest')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h1').innerText = data.quote
        



      })
      .catch(err => {
          console.log(`error ${err}`)
      });
})

}