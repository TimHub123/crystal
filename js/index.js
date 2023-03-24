let bodyNode = document.querySelector(`body`);
let fNode = document.querySelector(`.f`);

let placesCounter = 0;

particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function spirit() {
  bodyNode.innerHTML = `
  <main>
  <div class="r">
  <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
    <div class="container-fluid" style="justify-content: center;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Спирит Непокорный</a>
    </div>
  </nav>
    <div class="card text-bg-dark">
    <video src="assets/spirit.mp4" class="d-block w-100" alt="..." autoplay></video>
    </div>
  </div>
  <div class="f animate__animated animate__backInLeft">
    <div class="films">
      <div class="date">
        <button disabled style="background: #212529; min-width: 49px;" >
          <h6 style="margin: 7px; color: #77767D;">ПН</h6>
          <h6 style="color: #77767D;">31</h6>
        </button>
        <button disabled style="background: #d52b1e; min-width: 49px;">
          <h6 style="margin: 7px; color: white;">ВТ</h6>
          <h6 style="color: white;">1</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СР</h6>
          <h6 style="color: #77767D;">2</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ЧТ</h6>
          <h6 style="color: #77767D;">3</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
          <h6 style="color: #77767D;">4</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СБ</h6>
          <h6 style="color: #77767D;">5</h6>
        </button>
        <button style="background: #212529; min-width: 60px;">
          <h6 style="margin: 7px; color: #77767D;">ВС</h6>
          <h6 style="color: #77767D;">6</h6>
        </button>
      </div>
    </div>
  </div>
  <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
  <div class="f">
    <div class="time">
      <button class="time_check" style="margin-left: 0;">23:50</button>
    </div>
  </div>
  <div class="f">
    <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
  </div>
</div>
</main>
<footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
<div class="col-md-4 d-flex align-items-center">
  <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
    <img style="width: 38px;" src="assets/crystal.png" alt="">
  </a>
  <span class="mb-md-0">&copy; 2023 Crystal</span>
</div>
<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
  <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
  <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
</ul>
</footer>`;
}

function grinch() {
  bodyNode.innerHTML = `
  <main>
  <div class="r">
  <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
    <div class="container-fluid" style="justify-content: center;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Гринч</a>
    </div>
  </nav>
    <div class="card text-bg-dark">
    <video src="assets/grinch.mp4" class="d-block w-100" alt="..." autoplay></video>
    </div>
  </div>
  <div class="f animate__animated animate__backInLeft">
    <div class="films">
      <div class="date">
        <button disabled style="background: #212529; min-width: 49px;" >
          <h6 style="margin: 7px; color: #77767D;">ПН</h6>
          <h6 style="color: #77767D;">31</h6>
        </button>
        <button disabled style="background: #d52b1e; min-width: 49px;">
          <h6 style="margin: 7px; color: white;">ВТ</h6>
          <h6 style="color: white;">1</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СР</h6>
          <h6 style="color: #77767D;">2</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ЧТ</h6>
          <h6 style="color: #77767D;">3</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
          <h6 style="color: #77767D;">4</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СБ</h6>
          <h6 style="color: #77767D;">5</h6>
        </button>
        <button style="background: #212529; min-width: 60px;">
          <h6 style="margin: 7px; color: #77767D;">ВС</h6>
          <h6 style="color: #77767D;">6</h6>
        </button>
      </div>
    </div>
  </div>
  <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
  <div class="f">
    <div class="time">
      <button class="time_check" style="margin-left: 0;">17:45</button>
    </div>
  </div>
  <div class="f">
    <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
  </div>
</div>
</main>
<footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
<div class="col-md-4 d-flex align-items-center">
  <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
    <img style="width: 38px;" src="assets/crystal.png" alt="">
  </a>
  <span class="mb-md-0">&copy; 2023 Crystal</span>
</div>
<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
  <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
  <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
</ul>
</footer>`;
}

function cruella() {
  bodyNode.innerHTML = `
  <main>
  <div class="r">
  <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
    <div class="container-fluid" style="justify-content: center;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Круэлла</a>
    </div>
  </nav>
    <div class="card text-bg-dark">
    <video src="assets/cruella.mp4" class="d-block w-100" alt="..." autoplay></video>
    </div>
  </div>
  <div class="f animate__animated animate__backInLeft">
    <div class="films">
      <div class="date">
        <button disabled style="background: #212529; min-width: 49px;" >
          <h6 style="margin: 7px; color: #77767D;">ПН</h6>
          <h6 style="color: #77767D;">31</h6>
        </button>
        <button disabled style="background: #d52b1e; min-width: 49px;">
          <h6 style="margin: 7px; color: white;">ВТ</h6>
          <h6 style="color: white;">1</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СР</h6>
          <h6 style="color: #77767D;">2</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ЧТ</h6>
          <h6 style="color: #77767D;">3</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
          <h6 style="color: #77767D;">4</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СБ</h6>
          <h6 style="color: #77767D;">5</h6>
        </button>
        <button style="background: #212529; min-width: 60px;">
          <h6 style="margin: 7px; color: #77767D;">ВС</h6>
          <h6 style="color: #77767D;">6</h6>
        </button>
      </div>
    </div>
  </div>
  <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
  <div class="f">
    <div class="time">
      <button class="time_check" style="margin-left: 0;">19:35</button>
    </div>
  </div>
  <div class="f">
    <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
  </div>
</div>
</main>
<footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
<div class="col-md-4 d-flex align-items-center">
  <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
    <img style="width: 38px;" src="assets/crystal.png" alt="">
  </a>
  <span class="mb-md-0">&copy; 2023 Crystal</span>
</div>
<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
  <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
  <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
</ul>
</footer>`;
}

function mira() {
  bodyNode.innerHTML = `
  <main>
  <div class="r">
  <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
    <div class="container-fluid" style="justify-content: center;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Мира</a>
    </div>
  </nav>
    <div class="card text-bg-dark">
    <video src="assets/mira.mp4" class="d-block w-100" alt="..." autoplay></video>
    </div>
  </div>
  <div class="f animate__animated animate__backInLeft">
    <div class="films">
      <div class="date">
        <button disabled style="background: #212529; min-width: 49px;" >
          <h6 style="margin: 7px; color: #77767D;">ПН</h6>
          <h6 style="color: #77767D;">12</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ВТ</h6>
          <h6 style="color: #77767D;">13</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СР</h6>
          <h6 style="color: #77767D;">14</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ЧТ</h6>
          <h6 style="color: #77767D;">15</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
          <h6 style="color: #77767D;">16</h6>
        </button>
        <button disabled style="background: #d52b1e; min-width: 49px;">
          <h6 style="margin: 7px; color: white;">СБ</h6>
          <h6 style="color: white;">17</h6>
        </button>
        <button style="background: #212529; min-width: 60px;">
          <h6 style="margin: 7px; color: #77767D;">ВС</h6>
          <h6 style="color: #77767D;">18</h6>
        </button>
      </div>
    </div>
  </div>
  <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
  <div class="f">
    <div class="time">
      <button class="time_check" style="margin-left: 0;">19:35</button>
    </div>
  </div>
  <div class="f">
    <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
  </div>
</div>
</main>
<footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
<div class="col-md-4 d-flex align-items-center">
  <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
    <img style="width: 38px;" src="assets/crystal.png" alt="">
  </a>
  <span class="mb-md-0">&copy; 2023 Crystal</span>
</div>
<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
  <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
  <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
</ul>
</footer>`;
}

function cheburashka() {
  bodyNode.innerHTML = `
    <main>
      <div class="r">
      <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
        <div class="container-fluid" style="justify-content: center;">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Чебурашка</a>
        </div>
      </nav>
        <div class="card text-bg-dark">
        <video src="assets/cheburashka.mp4" class="d-block w-100" alt="..." autoplay></video>
        </div>
      </div>
      <div class="f animate__animated animate__backInLeft">
        <div class="films">
          <div class="date">
            <button disabled style="background: #212529; min-width: 49px;" >
              <h6 style="margin: 7px; color: #77767D;">ПН</h6>
              <h6 style="color: #77767D;">26</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">ВТ</h6>
              <h6 style="color: #77767D;">27</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">СР</h6>
              <h6 style="color: #77767D;">28</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">ЧТ</h6>
              <h6 style="color: #77767D;">29</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
              <h6 style="color: #77767D;">30</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">СБ</h6>
              <h6 style="color: #77767D;">31</h6>
            </button>
            <button style="background: #d52b1e; min-width: 60px;">
              <h6 style="margin: 7px; color: white;">ВС</h6>
              <h6 style="color: white;">1</h6>
            </button>
          </div>
        </div>
      </div>
      <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
      <div class="f">
        <div class="time">
          <button disabled class="time_check" style="color: #77767D; border: 1px solid #2c2b32;">10:10</button>
          <button disabled class="time_check" style="color: #77767D; border: 1px solid #2c2b32;">11:50</button>
          <button class="time_check">16:25</button>
        </div>
      </div>
      <div class="f">
        <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
      </div>
    </div>
    </main>
    <footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
        <img style="width: 38px;" src="assets/crystal.png" alt="">
      </a>
      <span class="mb-md-0">&copy; 2023 Crystal</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
      <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
      <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
    </ul>
  </footer>`;
}

function bad() {
  bodyNode.innerHTML = `
  <main>
  <div class="r">
  <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
    <div class="container-fluid" style="justify-content: center;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Непослушник 2</a>
    </div>
  </nav>
    <div class="card text-bg-dark">
    <video src="assets/bad.mp4" class="d-block w-100" alt="..." autoplay></video>
    </div>
  </div>
  <div class="f animate__animated animate__backInLeft">
    <div class="films">
      <div class="date">
        <button disabled style="background: #212529; min-width: 49px;" >
          <h6 style="margin: 7px; color: #77767D;">ПН</h6>
          <h6 style="color: #77767D;">9</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ВТ</h6>
          <h6 style="color: #77767D;">10</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СР</h6>
          <h6 style="color: #77767D;">11</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ЧТ</h6>
          <h6 style="color: #77767D;">12</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
          <h6 style="color: #77767D;">13</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СБ</h6>
          <h6 style="color: #77767D;">14</h6>
        </button>
        <button style="background: #d52b1e; min-width: 60px;">
          <h6 style="margin: 7px; color: white;">ВС</h6>
          <h6 style="color: white;">15</h6>
        </button>
      </div>
    </div>
  </div>
  <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
  <div class="f">
    <div class="time">
      <button class="time_check" style="margin-left: 0;">17:30</button>
      <button disabled class="time_check" style="color: #77767D; border: 1px solid #2c2b32;">21:30</button>
    </div>
  </div>
  <div class="f">
    <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
  </div>
</div>
</main>
<footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
<div class="col-md-4 d-flex align-items-center">
  <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
    <img style="width: 38px;" src="assets/crystal.png" alt="">
  </a>
  <span class="mb-md-0">&copy; 2023 Crystal</span>
</div>
<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
  <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
  <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
</ul>
</footer>`;
}

function old() {
  bodyNode.innerHTML = `
  <main>
      <div class="r">
      <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
        <div class="container-fluid" style="justify-content: center;">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Бывшие. Happy end</a>
        </div>
      </nav>
        <div class="card text-bg-dark">
        <video src="assets/old.mp4" class="d-block w-100" alt="..." autoplay></video>
        </div>
      </div>
      <div class="f animate__animated animate__backInLeft">
        <div class="films">
          <div class="date">
            <button disabled style="background: #212529; min-width: 49px;" >
              <h6 style="margin: 7px; color: #77767D;">ПН</h6>
              <h6 style="color: #77767D;">26</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">ВТ</h6>
              <h6 style="color: #77767D;">27</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">СР</h6>
              <h6 style="color: #77767D;">28</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">ЧТ</h6>
              <h6 style="color: #77767D;">29</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
              <h6 style="color: #77767D;">30</h6>
            </button>
            <button disabled style="background: #212529; min-width: 49px;">
              <h6 style="margin: 7px; color: #77767D;">СБ</h6>
              <h6 style="color: #77767D;">31</h6>
            </button>
            <button style="background: #d52b1e; min-width: 60px;">
              <h6 style="margin: 7px; color: white;">ВС</h6>
              <h6 style="color: white;">1</h6>
            </button>
          </div>
        </div>
      </div>
      <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
      <div class="f">
        <div class="time">
          <button class="time_check" style="margin-left: 0;">19:40</button>
        </div>
      </div>
      <div class="f">
        <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
      </div>
    </div>
    </main>
    <footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
        <img style="width: 38px;" src="assets/crystal.png" alt="">
      </a>
      <span class="mb-md-0">&copy; 2023 Crystal</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
      <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
      <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
    </ul>
  </footer>`;
}

function horror() {
  bodyNode.innerHTML = `
  <main>
  <div class="r">
  <nav class="navbar navbar-expand-lg navbar-dark" style="position: absolute; width: 100%;">
    <div class="container-fluid" style="justify-content: center;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации" style="display: block;">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Астрал: Потомство</a>
    </div>
  </nav>
    <div class="card text-bg-dark">
    <video src="assets/horror.mp4" class="d-block w-100" alt="..." autoplay></video>
    </div>
  </div>
  <div class="f animate__animated animate__backInLeft">
    <div class="films">
      <div class="date">
        <button disabled style="background: #212529; min-width: 49px;" >
          <h6 style="margin: 7px; color: #77767D;">ПН</h6>
          <h6 style="color: #77767D;">2</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ВТ</h6>
          <h6 style="color: #77767D;">3</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СР</h6>
          <h6 style="color: #77767D;">4</h6>
        </button>
        <button disabled style="background: #d52b1e; min-width: 49px;">
          <h6 style="margin: 7px; color: white;">ЧТ</h6>
          <h6 style="color: white;">5</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">ПТ</h6>
          <h6 style="color: #77767D;">6</h6>
        </button>
        <button disabled style="background: #212529; min-width: 49px;">
          <h6 style="margin: 7px; color: #77767D;">СБ</h6>
          <h6 style="color: #77767D;">7</h6>
        </button>
        <button style="background: #212529; min-width: 60px;">
          <h6 style="margin: 7px; color: #77767D;">ВС</h6>
          <h6 style="color: #77767D;">8</h6>
        </button>
      </div>
    </div>
  </div>
  <h6 style="color: white; margin: 10px; text-align: center;">от 300 руб.</h6>
  <div class="f">
    <div class="time">
      <button class="time_check" style="margin-left: 0;">23:40</button>
    </div>
  </div>
  <div class="f">
    <button type="button" class="btn btn-primary buy" style="width: 100%; max-width: 790px; margin: 20px 10px 0 10px;">Купить билет</button>
  </div>
</div>
</main>
<footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
<div class="col-md-4 d-flex align-items-center">
  <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
    <img style="width: 38px;" src="assets/crystal.png" alt="">
  </a>
  <span class="mb-md-0">&copy; 2023 Crystal</span>
</div>
<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;" src="assets/vk.png" alt=""></a></li>
  <li><a class="text-muted" href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru" target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
  <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
</ul>
</footer>`;
}

function buy(text) {
  bodyNode.innerHTML = `
  <div class="container">
  <h1 class="text-center mt-5" style="color: white;">Фильм "${text}"</h1>
  <div class="screen">Экран</div>
  <div class="places">
      <button class="btn btn-primary place number">1</button>
      <button class="btn btn-primary place number">2</button>
      <button class="btn btn-secondary place disabled">3</button>
      <button class="btn btn-primary place number">4</button>
      <button class="btn btn-secondary place disabled">5</button>
      <button class="btn btn-primary place number">1</button>
      <button class="btn btn-primary place number">2</button>
      <button class="btn btn-primary place number">3</button>
      <button class="btn btn-primary place number">4</button>
      <button class="btn btn-primary place number">5</button>
      <button class="btn btn-primary place number">1</button>
      <button class="btn btn-primary place number">2</button>
  </div>
  <div id="places-info" class="row d-none">
            <div class="col-8">
                <div class="row align-items-center">
                    <div class="col">
                        <p class="text-end" style="color: white;"><span id="places-count"></span></p>
                        <p class="text-end mb-0" style="color: white;"><span id="price"></span></p>
                    </div>
                    <div class="col-3">
                        <button class="btn-dange confirm" style="border-radius: 30px;">Оформить</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="form" class="mt-5 d-none">
            <h2 class="text-center mb-5">Данные банковской карты</h2>
            <form action="#">
                <div class="row">
                    <div class="col-9 p-0">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="cardnumber" placeholder="Номер карты">
                            <label for="cardnumber">Номер карты</label>
                        </div>
                    </div>
                    <div class="col-3 p-0">
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="cvv" placeholder="CVV">
                            <label for="cvv">CVV</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col p-0">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name"
                                placeholder="Имя и фамилия держателя карты">
                            <label for="name">Имя и фамилия держателя карты</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalSuccess">Купить</button>
                </div>
            </form>
        </div>
  </div>
  <div class="modal fade" id="modalSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Статус оплаты</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Оплата прошла успешно!</p>
                </div>
                <div class="modal-footer">
                    <p>Приятного просмотра!</p>
                </div>
            </div>
        </div>
    </div>`;
}

document.addEventListener(`click`, function (evt) {
  if (evt.target.classList.contains(`katalog`)) {
    let divNode = evt.target.closest(`.carousel-item`);
    let text = divNode.querySelector(`h4`).innerHTML;
    let headerNode = document.querySelector(`header`);
    headerNode.classList = `animate__animated animate__fadeOutUp`;
    fNode.classList = `animate__animated animate__backOutLeft`;
    if (text == `Чебурашка`) {
      setTimeout(cheburashka, 500);
    } else if (text == `Мира`) {
      setTimeout(mira, 500);
    } else if (text == `Непослушник 2`) {
      setTimeout(bad, 500);
    } else if (text == `Бывшие. Happy end`) {
      setTimeout(old, 500);
    } else {
      setTimeout(horror, 500);
    }
  } else if (evt.target.classList.contains(`navbar-toggler`) || evt.target.classList.contains(`navbar-toggler-icon`)) {
    location.reload();
  } else if (evt.target.classList.contains(`go`)) {
    let figure = evt.target.closest(`.figure`);
    let text = figure.querySelector(`h5`).innerHTML;
    fNode.classList = `animate__animated animate__backOutLeft`;
    if (text == `Круэлла`) {
      setTimeout(cruella, 500);
    } else if (text == `Гринч`) {
      setTimeout(grinch, 500);
    } else if (text == `Астерикс и тайное зелье`) {
      setTimeout(asterix, 500);
    } else {
      setTimeout(spirit, 500);
    }
  } else if (evt.target.classList.contains(`buy`)) {
    let text = document.querySelector(`.navbar-brand`).innerHTML;
    setTimeout(buy, 500, text);
  } else if (evt.target.classList.contains(`number`)) {
    let placesInfoNode = document.querySelector(`#places-info`);
    let placesCountNode = document.querySelector(`#places-count`);
    let priceNode = document.querySelector(`#price`);
    evt.target.classList = `btn-dange place`;

    placesCounter++;
    placesInfoNode.classList.remove(`d-none`);
    placesCountNode.innerHTML = `Выбрано мест: ` + placesCounter;
    priceNode.innerHTML = `Стоимость билетов: ` + placesCounter * 300 + `руб.`;
  } else if (evt.target.classList.contains(`confirm`)) {
    let formNode = document.querySelector(`#form`);
    formNode.classList.remove(`d-none`);
  } else if (evt.target.classList.contains(`cart`)) {
    bodyNode.innerHTML = `<header>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid" style="justify-content: center;">
        <img src="assets/crystal.png" alt="">
        <a class="navbar-brand" href="#">КРИСТАЛЛ</a>
      </div>
    </nav>
  </header>
  <h6 class="film_main" style="margin-bottom: 10px;">Карта</h6>
  <div class="r animate__animated animate__backInDown">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.79008955008!2d46.76220021597711!3d51.70028630440227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416b45193d4a2fb5%3A0xf81907d4f8b6b496!2z0JrQuNC90L7RgtC10LDRgtGAINCa0YDQuNGB0YLQsNC70Lsg0JzQsNGA0LrRgQ!5e0!3m2!1sru!2sru!4v1675267252568!5m2!1sru!2sru" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <h6 class="film_main" style="margin-bottom: 10px;">Фото</h6>
  <div style="margin-bottom: 10px;" class="r animate__animated animate__backInDown">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/kresla.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="assets/main.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="assets/main1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="assets/exit.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>
  </div>
  <footer class="py-3 d-flex flex-wrap justify-content-between align-items-center border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-md-0 text-muted text-decoration-none lh-1">
        <img style="width: 38px;" src="assets/crystal.png" alt="">
      </a>
      <span class="mb-md-0">&copy; 2023 Crystal</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li><a class="text-muted" href="https://vk.com/kinomarks" target="_blank"><img style="width: 32px;"
            src="assets/vk.png" alt=""></a></li>
      <li><a class="text-muted"
          href="https://invite.viber.com/?g2=AQAMcRktDu0z6k1f1WaftZ%2FDwvzCryDgA3e0oGgdbe%2B6m1pWSo09RTGW%2ByjecjtE&lang=ru"
          target="_blank"><img style="width: 32px;" src="assets/viber.png" alt=""></a></li>
      <li><a class="text-muted" href="https://www.instagram.com/kristallcinema/" target="_blank"><img
            style="width: 32px;" src="assets/instagram.png" alt=""></a></li>
    </ul>
  </footer>`;
  } 
});