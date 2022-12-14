/* requestFunction(headers, link, raw, method)
headers = [isi 1, isi 2]
// requestWithoutBody(link, method) */

(async function getFilm(){
    let response = await integration.requestWithoutBody(baseURLTixID + "/film", 'GET')
    anotherFunction(JSON.stringify(response));
})();

function anotherFunction(response){
    const containerFilm = document.querySelector('#film-contain')

    let data = JSON.parse(response);
    console.log(data.film.length);

    let markup = ` <div class="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" > `

    for (let i = 0; i < data.film.length; i++){
        var namaFilm = data.film[i].judul_film
        var namaFile = namaFilm.replace(/\s+/g, '-').toLowerCase();
        namaFile += '.html'

        markup += `

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <a href="film.html" class="details-link" title="More Details"><i class="bx bx-link"></i>
                    <div class="portfolio-img"><img src="assets/img/movie/cargo.jpg" class="img-fluid" alt=""> </div> 
                </a>
                <div class="portfolio-info">
                    <h4>${namaFilm}</h4>
                    <a href="assets/img/movie/cargo.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                    
                </div>
            </div>
        `
        // createPage(namaFile, data.film[i]);
    }

    markup += `</div>`
   
    containerFilm.innerHTML += markup
};

