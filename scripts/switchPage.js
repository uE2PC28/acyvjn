function getCookie(name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.addEventListener("DOMContentLoaded", () => {
  const pages = ["presell", "vsl"];
  const container = document.getElementById("page-container");
  let pageIndex = 0;
  var balance = 20;

  if (getCookie("opened") && getCookie("balance")) {
    pageIndex = 1;
    balance = getCookie("balance");
  }

  let page = pages[pageIndex];

  const brandQuizes = [
    ["nike", "adidas"],
    ["apple", "samsung"],
  ];

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Adicione esta função para obter os parâmetros UTM
  function getUtmParams() {
    const url = new URL(window.location.href);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
    const utmParams = new URLSearchParams();

    utmKeys.forEach((key) => {
      const value = url.searchParams.get(key);
      if (value) {
        utmParams.set(key, value);
      }
    });

    return utmParams.toString();
  }

  function cleanParams() {
    const urlObj = new URL(window.location.href);

    urlObj.search = "";
    history.replaceState(null, null, urlObj.toString());
  }

  const loadScripts = (page) => {
    if (page === "presell") {
      const selectedQuiz = brandQuizes[randomNumber(0, 2)];

      const brandQuizDom = `
      <button data-brand="${selectedQuiz[0]}" style="background-image: url(./img/${selectedQuiz[0]}.png)"></button>
      <span>x</span>
      <button data-brand="${selectedQuiz[1]}" style="background-image: url(./img/${selectedQuiz[1]}.png)"></button>`;

      document.getElementsByClassName("quiz-grid")[0].innerHTML = brandQuizDom;

      Array.from(document.querySelectorAll("button")).forEach((element) => {
        element.addEventListener("click", (evt) => {
          const brand = element.dataset.brand;

          getPageDOM(brand);
        });
      });

      return;
    }

    if (["nike", "adidas", "samsung", "apple"].includes(page)) {
      const values = {
        nike: 24.35,
        adidas: 28.84,
        samsung: 19.72,
        apple: 37.92,
      };

      function updateBalance(valueToAdd) {
        const balanceElm = document.getElementById("balance");
        const balanceClean =
          parseInt(balanceElm.innerHTML.replace(/\D+/g, "")) / 100;
        balance = balanceClean + valueToAdd;

        balanceElm.innerHTML = `${balance.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`;
      }

      Array.from(document.querySelectorAll("a")).forEach((element) => {
        element.addEventListener("click", (evt) => {
          evt.target.classList.add("clicked");
          evt.target.parentElement.classList.add("disabled");
        });
      });

      document
        .getElementById("submit-survey")
        .addEventListener("click", (evt) => {
          Swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            html: `
            <div class='checkmark-container'>
              <div class='checkmark'>
                <svg class='confetti' height='19' viewBox='0 0 19 19' width='19' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z' fill='#00C8E5'>
                </svg>
                <svg class='confetti' height='19' viewBox='0 0 19 19' width='19' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z' fill='#00C8E5'>
                </svg>
                <svg class='confetti' height='19' viewBox='0 0 19 19' width='19' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z' fill='#00C8E5'>
                </svg>
                <svg class='confetti' height='19' viewBox='0 0 19 19' width='19' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z' fill='#00C8E5'>
                </svg>
                <svg class='confetti' height='19' viewBox='0 0 19 19' width='19' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z' fill='#00C8E5'>
                </svg>
                <svg class='confetti' height='19' viewBox='0 0 19 19' width='19' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z' fill='#00C8E5'>
                </svg>
                <svg class='checkmark__check' height='36' viewBox='0 0 48 36' width='48' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M47.248 3.9L43.906.667a2.428 2.428 0 0 0-3.344 0l-23.63 23.09-9.554-9.338a2.432 2.432 0 0 0-3.345 0L.692 17.654a2.236 2.236 0 0 0 .002 3.233l14.567 14.175c.926.894 2.42.894 3.342.01L47.248 7.128c.922-.89.922-2.34 0-3.23'>
                </svg>
                <svg class='checkmark__back' height='115' viewBox='0 0 120 115' width='120' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z' fill='#00C8E5'>
                </svg>
              </div>
            </div>
    
            <div class="modal-text">
            <h1>Parabéns!</h1>
            <h2>
              Você acaba de ganhar ${values[page].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })} da <span style="text-transform: capitalize;">${page}</span> por ter
              respondido a pesquisa
            </h2>
            <h2>
              Para liberar o saldo assista o vídeo com as instruções clicando no
              botão abaixo
            </h2>
    
            <a id="go-to-pv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 194 194"
                style="enable-background: new 0 0 194 194"
                xml:space="preserve"
                width="25px"
                height="25px"
                fill="white"
              >
                <g>
                  <path
                    id="path2376_2_"
                    d="M147.04,144.34c-7.02,0-13.6-2.7-18.57-7.67L101.7,109.9c-1.84-1.84-5.18-1.84-7.02,0L67.8,136.78  c-4.97,4.97-11.55,7.67-18.57,7.67h-5.29l34.01,34.01c10.58,10.58,27.85,10.58,38.43,0l34.11-34.11L147.04,144.34L147.04,144.34z"
                  ></path>
                  <path
                    id="path2380_2_"
                    d="M49.12,49.55c7.02,0,13.6,2.7,18.57,7.67L94.57,84.1c1.94,1.94,5.07,1.94,7.02,0l26.88-26.77  c4.97-4.97,11.55-7.67,18.57-7.67h3.24l-34.11-34.11c-10.58-10.58-27.85-10.58-38.43,0L43.72,49.55H49.12L49.12,49.55z"
                  ></path>
                  <path
                    id="path2384_2_"
                    d="M178.45,77.84l-20.62-20.62c-0.43,0.22-0.97,0.32-1.51,0.32h-9.39c-4.86,0-9.61,1.94-12.95,5.4  L107.2,89.71c-2.48,2.48-5.83,3.78-9.07,3.78c-3.35,0-6.59-1.3-9.07-3.78L62.18,62.83c-3.45-3.45-8.2-5.4-12.95-5.4H37.68  c-0.54,0-0.97-0.11-1.4-0.32L15.55,77.84c-10.58,10.58-10.58,27.85,0,38.43l20.62,20.62c0.43-0.22,0.86-0.32,1.4-0.32h11.55  c4.86,0,9.61-1.94,12.95-5.4l26.88-26.88c4.86-4.86,13.39-4.86,18.24,0l26.77,26.77c3.45,3.45,8.2,5.4,12.95,5.4h9.39  c0.54,0,0.97,0.11,1.51,0.32l20.62-20.62C189.03,105.58,189.03,88.42,178.45,77.84"
                  ></path>
                </g>
              </svg>
    
              ASSISTIR VÍDEO
            </a>
          </div>
            `,
          });

          updateBalance(values[page]);
          document.cookie = `opened=true;`;
          document.cookie = `balance=${balance}`;

          document
            .getElementById("go-to-pv")
            .addEventListener("click", () => updatePage(1));
        });

      return;
    }

    if (page === "vsl") {
      document.getElementById("balance").innerHTML = `${parseFloat(balance).toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      )}`;

      var s = document.createElement("script");
      (s.src = LinkVturb), (s.async = !0), document.head.appendChild(s);

      var t = new URLSearchParams(utmParams);

      document.querySelectorAll("a").forEach(function (e) {
        const thisBtnParams = e.search.slice(1);

        e.search = "";

        if (thisBtnParams) {
          e.href = `${LinkCheckout}?${t.toString()}&${thisBtnParams}`;
        } else {
          e.href = `${LinkCheckout}?${t.toString()}`;
        }
      });

      localStorage.removeItem("utm_params");

      var SECONDS_TO_DISPLAY = 680;
      var CLASS_TO_DISPLAY = ".esconder";

      var attempts = 0;
      var elsHiddenList = [];
      var elsDisplayed = false;
      var elsHidden = document.querySelectorAll(CLASS_TO_DISPLAY);
      var alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
      var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

      setTimeout(function () {
        elsHiddenList = Array.prototype.slice.call(elsHidden);
      }, 0);

      function backquente() {
        var back_redirect_back_link = "https://avaliadorpremiado.online/back";
        history["pushState"]({}, "", location["href"]);
        history["pushState"]({}, "", location["href"]);
        window["onpopstate"] = function () {
          setTimeout(function () {
            location["href"] = back_redirect_back_link;
          }, 1);
        };
      }

      var showHiddenElements = function () {
        elsDisplayed = true;
        elsHiddenList.forEach((e) => (e.style.display = "block"));
        localStorage.setItem(alreadyDisplayedKey, true);
        backquente();
      };

      var startWatchVideoProgress = function () {
        if (
          typeof smartplayer === "undefined" ||
          !(smartplayer.instances && smartplayer.instances.length)
        ) {
          if (attempts >= 10) return;
          attempts += 1;
          return setTimeout(function () {
            startWatchVideoProgress();
          }, 1000);
        }

        smartplayer.instances[0].on("timeupdate", () => {
          if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
          if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY)
            return;
          showHiddenElements();
        });
      };

      if (alreadyElsDisplayed === "true") {
        setTimeout(function () {
          showHiddenElements();
        }, 100);
      } else {
        startWatchVideoProgress();
      }
    }
  };

  const getPageDOM = (page) => {
    fetch(`./${page}.html`).then(async (response) => {
      container.innerHTML = await response.text();

      loadScripts(page);
    });
  };

  const updatePage = (pageIndex) => {
    page = pages[pageIndex];
    getPageDOM(page);
  };

  getPageDOM(page);

  // Armazene os parâmetros UTM em uma variável
  const utmParams = getUtmParams();
  localStorage.setItem("utm_params", utmParams);

  setTimeout(() => {
    cleanParams();
  }, 2000);
});
