// import { detectSwipe } from './create-card.js';

const sectionMap = document.querySelector('#section-map');
const animElement = sectionMap;
const mapBlock = sectionMap.querySelector('.map__popup-block');
let mapLeaflet = sectionMap.querySelector('#map');
// -------------------------


// -------------------------
// detectSwipe()
// -------------------------


// -------------------------
// MAKE GLOBAL VARS
let L;
let map;
let mainPinIcon;
let defaultPinIcon;
let myMarker1;
let myMarker2;
let openPopup;
let openPopupFunc;
let mapWrapper;
let removeMapCover;
let mapInitStatus = false;
// MAKE GLOBAL VARS
// -------------------------


// -------------------------
// MAP INITILIZATION
const location =
  `  <div class="about__wrapper  animation">

    <span class="visually-hidden" itemprop="name">
      <h3>BARBERSHOP NAME</h3>
    </span>

    <div class="about__list-btn  section-nav__btns">
      <a class="section-nav__btn" href="https://fb.com/book/111490454748625/" target="_blank">
        <span class="section-nav__btn-content">apoiment</span>
      </a>

      <div class="section-nav__btn" itemprop="telephone">
        <a class="section-nav__btn-content" href="tel:+380631666774" target="_blank">+380 (1)</a>
      </div>

      <address class="section-nav__btn" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <a class="section-nav__btn-content"
          href="https://www.google.com/maps/dir//425+Plandome+Rd,+Manhasset,+NY+11030/@40.798348,-73.7701702,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c288fe089d2c99:0x19592f955ba17039!2m2!1d-73.7001769!2d40.7983681"
          target="_blank">
          <span itemprop="streetAddress">123 Main Street,&nbsp;</span>
          <span class="visually-hidden" itemprop="addressLocality">Cambridge</span>
          <span itemprop="addressRegion">MA</span>
          <span class="visually-hidden" itemprop="postalCode">02142</span>
        </a>
      </address>

      <div class="section-nav__btn">
        <a class="section-nav__btn-content" href="https://m.me/111490454748625" target="_blank">message</a>
      </div>

    </div>
    <!-- about__list-btn -->

    <div class="map__button-slide"></div>
    <!-- map__button-slide -->

    <ul class="map__img-list" style="height: 327px; max-height: 327px;">
      <li class="map__img-item">
        <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya.webp"
          alt="" loading="lazy" itemprop="image">
      </li>
      <li class="map__img-item">
        <img class="about__img"
          src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/02/7621bb6087ee02d1c51a38663c88e6b0.jpg" alt=""
          loading="lazy" itemprop="image">
      </li>
    </ul>

    <div class="about__content">
      <p class="visually-hidden" itemprop="description">3. Делитесь знаниями и зарабатывайте, не выходя из дома.
        Зарегистрируйтесь, чтобы
        начать преподавать на Preply. Делитесь знаниями и зарабатывайте, не выходя из дома. Зарегистрируйтесь,
        чтобы
        начать преподавать на Preply.
      </p>

      <table class="about__time-table">
        <!-- microdata -->
        <meta itemprop="openingHours" content="Mo-Fr 10:00-19:00" />
        <meta itemprop="openingHours" content="Sa 10:00-22:00" />
        <meta itemprop="openingHours" content="Su 10:00-21:00" />
        <!-- microdata -->
        <tbody>
          <tr class="about__time-tr">
            <td class="about__time-td about__time-td--day">
              <span>monday - friday</span>
            </td>
            <td class="about__time-td about__time-td--hours">
              <span>11:00–21:00</span>
            </td>
          </tr>
          <tr class="about__time-tr">
            <td class="about__time-td about__time-td--day">
              <span>sunday</span>
            </td>
            <td class="about__time-td about__time-td--hours">
              <span>11:00–19:00</span>
            </td>
          </tr>
          <tr class="about__time-tr">
            <td class="about__time-td about__time-td--day">
              <span>saturday</span>
            </td>
            <td class="about__time-td about__time-td--hours">
              <span>closed</span>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    <!-- about__content -->
    <div class="map__popup-id  visually-hidden">1</div>
  </div>
`;

const location2 =
  `  <div class="about__wrapper  animation">

    <span class="visually-hidden" itemprop="name">
      <h3>BARBERSHOP NAME</h3>
    </span>

    <div class="about__list-btn  section-nav__btns">
      <a class="section-nav__btn" href="https://fb.com/book/111490454748625/" target="_blank">
        <span class="section-nav__btn-content">apoiment</span>
      </a>

      <div class="section-nav__btn" itemprop="telephone">
        <a class="section-nav__btn-content" href="tel:+380631666774" target="_blank">+380 (2)</a>
      </div>

      <address class="section-nav__btn" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <a class="section-nav__btn-content"
          href="https://www.google.com/maps/dir//425+Plandome+Rd,+Manhasset,+NY+11030/@40.798348,-73.7701702,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c288fe089d2c99:0x19592f955ba17039!2m2!1d-73.7001769!2d40.7983681"
          target="_blank">
          <span itemprop="streetAddress">123 Main Street,&nbsp;</span>
          <span class="visually-hidden" itemprop="addressLocality">Cambridge</span>
          <span itemprop="addressRegion">MA</span>
          <span class="visually-hidden" itemprop="postalCode">02142</span>
        </a>
      </address>

      <div class="section-nav__btn">
        <a class="section-nav__btn-content" href="https://m.me/111490454748625" target="_blank">message</a>
      </div>

    </div>
    <!-- about__list-btn -->

    <div class="map__button-slide"></div>
    <!-- map__button-slide -->

    <ul class="map__img-list" style="height: 327px; max-height: 327px;">
      <li class="map__img-item">
        <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya.webp"
          alt="" loading="lazy" itemprop="image">
      </li>
      <li class="map__img-item">
        <img class="about__img"
          src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/02/7621bb6087ee02d1c51a38663c88e6b0.jpg" alt=""
          loading="lazy" itemprop="image">
      </li>
    </ul>

    <div class="about__content">
      <p class="visually-hidden" itemprop="description">3. Делитесь знаниями и зарабатывайте, не выходя из дома.
        Зарегистрируйтесь, чтобы
        начать преподавать на Preply. Делитесь знаниями и зарабатывайте, не выходя из дома. Зарегистрируйтесь,
        чтобы
        начать преподавать на Preply.
      </p>

      <table class="about__time-table">
        <!-- microdata -->
        <meta itemprop="openingHours" content="Mo-Fr 10:00-19:00" />
        <meta itemprop="openingHours" content="Sa 10:00-22:00" />
        <meta itemprop="openingHours" content="Su 10:00-21:00" />
        <!-- microdata -->
        <tbody>
          <tr class="about__time-tr">
            <td class="about__time-td about__time-td--day">
              <span>monday - friday</span>
            </td>
            <td class="about__time-td about__time-td--hours">
              <span>11:00–21:00</span>
            </td>
          </tr>
          <tr class="about__time-tr">
            <td class="about__time-td about__time-td--day">
              <span>sunday</span>
            </td>
            <td class="about__time-td about__time-td--hours">
              <span>11:00–19:00</span>
            </td>
          </tr>
          <tr class="about__time-tr">
            <td class="about__time-td about__time-td--day">
              <span>saturday</span>
            </td>
            <td class="about__time-td about__time-td--hours">
              <span>closed</span>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    <!-- about__content -->
    <div class="map__popup-id  visually-hidden">2</div>
  </div>
`;

const initMap = () => {
  if (mapInitStatus === false) {
    L = window.L;
    map = L.map('map').setView([51.45, -0.09], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    myMarker2 = L.marker([51.44, -0.091]).addTo(map)
      .bindPopup(location2)
      .openPopup();
    myMarker1 = L.marker([51.5, -0.09]).addTo(map)
      .bindPopup(location);
    mainPinIcon = L.icon({
      iconUrl: 'https://www.sozdanie-sajtov.space/wp-content/themes/bono-child/img/icons/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
    defaultPinIcon = L.icon({
      iconUrl: 'https://www.sozdanie-sajtov.space/wp-content/themes/bono-child/img/icons/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [26, 52],
    });
    mapInitStatus = true;
  }
}
// setTimeout(initMap, 100);
// MAP INITILIZATION
// -------------------------


const mapFunc = () => {
  initMap()

  // -------------------------
  let mapBlockContent;
  let leafletPopupContent;
  let popupContent;
  // -------------------------


  const copyData = () => {
    mapLeaflet = sectionMap.querySelector('#map');
    leafletPopupContent = mapLeaflet.querySelector('.leaflet-popup-content');


    // -------------------------
    // CHANGE ACTIVE OF PIN
    const changeActivePin = () => {
      let popupId = 0;
      popupId = Number(leafletPopupContent.querySelector('.map__popup-id').textContent);

      if (popupId === 1) {
        map.removeLayer(myMarker1)
        map.removeLayer(myMarker2)

        myMarker1 = L.marker([51.5, -0.09],
          {
            icon: mainPinIcon,
          }).addTo(map)
          .bindPopup(location)

        myMarker2 = L.marker([51.44, -0.091],
          {
            icon: defaultPinIcon,
          }).addTo(map)
          .bindPopup(location2)
      } else if (popupId === 2) {
        map.removeLayer(myMarker1)
        map.removeLayer(myMarker2)

        myMarker2 = L.marker([51.44, -0.091],
          {
            icon: mainPinIcon,
          }).addTo(map)
          .bindPopup(location2)

        myMarker1 = L.marker([51.5, -0.09],
          {
            icon: defaultPinIcon,
          }).addTo(map)
          .bindPopup(location)
      }
    }
    // CHANGE ACTIVE OF PIN
    // -------------------------


    // -------------------------
    // PUT INFORMATION TO BLOCK FROM LEAFLET POPUP
    if (leafletPopupContent) {
      popupContent = leafletPopupContent.cloneNode(true);
      changeActivePin()
      mapBlockContent = mapBlock.querySelector('.map__popup-block-content');
      mapBlockContent.innerHTML = '';
      mapBlockContent.appendChild(popupContent);
      map.setView([51.45, -0.09], 10, { animation: true });
    }
    // PUT INFORMATION TO BLOCK FROM LEAFLET POPUP
    // -------------------------


    // -------------------------
    // DEACTIVETE MAP
    mapWrapper = sectionMap.querySelector('.map__wrapper');
    removeMapCover = () => {
      mapLeaflet.style.position = 'relative';
      // mapLeaflet.style.zIndex = 3;
      mapLeaflet.classList.add('map__content--active')
    }
    mapWrapper.addEventListener('click', removeMapCover, { once: true })
    // DEACTIVETE MAP
    // -------------------------


    // -------------------------
    // SLIDE TO TOP
    openPopup = sectionMap.querySelector('.map__button-slide');
    openPopupFunc = () => {
      mapBlock.classList.toggle('map__popup-block--opened');
      sectionMap.classList.toggle('map--opened');
      // mapLeaflet.style.zIndex = 0;
      mapLeaflet.classList.remove('map__content--active')
      mapWrapper.addEventListener('click', removeMapCover)
    }
    openPopup.addEventListener('click', openPopupFunc)
    // SLIDE TO TOP
    // -------------------------


    // -------------------------
    // SLIDER BTNS. SLIDER
    if (window.innerWidth >= 900) {
      const scrollWidth = sectionMap.querySelector('.map__img-item').offsetWidth;
      const scrollBtn = sectionMap.querySelector('.map__scroll-btn--next');
      const scrollBtnBack = sectionMap.querySelector('.map__scroll-btn--back');
      const scrollEl = sectionMap.querySelector('.map__img-list');
      const scrollFunc = () => {
        scrollEl.scrollBy(scrollWidth, 0)
      }
      scrollBtn.addEventListener('click', scrollFunc);

      const scrollFunc2 = () => {
        scrollEl.scrollBy(-scrollWidth, 0)
      }
      scrollBtnBack.addEventListener('click', scrollFunc2);
    }
    //SLIDER BTNS. SLIDER
    // -------------------------


    //NORMALIZE. CHANGE IMG HEIGHT
    // -------------------------
    const aboutWrapper = sectionMap.querySelector('.about__wrapper');
    const aboutBtns = aboutWrapper.querySelector('.about__list-btn');
    const aboutSchedule = aboutWrapper.querySelector('.about__content');
    const imgList = aboutWrapper.querySelector('.map__img-list');
    const imgHeight = aboutWrapper.offsetHeight - aboutBtns.offsetHeight - aboutSchedule.offsetHeight;
    imgList.style.height = `${imgHeight}px`;
    imgList.style.maxHeight = `${imgHeight}px`;
    //NORMALIZE. CHANGE IMG HEIGHT
    // -------------------------
  }
  setTimeout(copyData, 100);
  // copyData()


  const showTargetClick = (evt) => {
    if (evt.target.classList.contains('leaflet-marker-icon')) {
      copyData()
    }
  }
  mapLeaflet.addEventListener('click', showTargetClick);
}


// -------------------------
// IF VIEW PORT`S ON THE MAP
const onEntry = (entry) => {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      mapFunc()
    } else {
      // mapLeaflet.style.zIndex = 0;
      mapLeaflet.classList.remove('map__content--active')
      mapBlock.classList.remove('map__popup-block--opened');
      sectionMap.classList.remove('map--opened');

      try {
        openPopup.removeEventListener('click', openPopupFunc);
        mapWrapper.removeEventListener('click', removeMapCover);
      } catch (err) {
        return err
      }

    }
  });
}
// IF VIEW PORT`S ON THE MAP
// -------------------------


const animOptions = {
  threshold: [0.1]
};
const animObserver = new IntersectionObserver(onEntry, animOptions);
animObserver.observe(animElement);


// // -------------------------
// // DETECT SWIPE
// function detectSwipe() {
//   const offset = 100; // at least 100 px are a swipe
//   let xDown, yDown

//   sectionMap.addEventListener('touchstart', (e) => {
//     const firstTouch = getTouch(e);

//     xDown = firstTouch.clientX;
//     yDown = firstTouch.clientY;
//   });

//   sectionMap.addEventListener('touchend', (e) => {
//     if (!xDown || !yDown) {
//       return;
//     }

//     const {
//       clientX: xUp,
//       clientY: yUp
//     } = getTouch(e);
//     const xDiff = xDown - xUp;
//     const yDiff = yDown - yUp;
//     const xDiffAbs = Math.abs(xDown - xUp);
//     const yDiffAbs = Math.abs(yDown - yUp);

//     // at least <offset> are a swipe
//     if (Math.max(xDiffAbs, yDiffAbs) < offset) {
//       return;
//     }

//     if (xDiffAbs > yDiffAbs) {
//       if (xDiff > 0) {
//         console.log('left');
//       } else {
//         console.log('right');
//       }
//     } else {
//       if (yDiff > 0) {
//         console.log('up');
//       } else {
//         console.log('down');
//       }
//     }
//   });

//   function getTouch(e) {
//     return e.changedTouches[0]
//   }
// }
// detectSwipe()
// // DETECT SWIPE
// // -------------------------


// -------------------------
// DETECT SWIPE
function detectSwipe() {
  const offset = 100; // at least 100 px are a swipe
  let xDown, yDown

  sectionMap.addEventListener('touchstart', (e) => {
    const firstTouch = getTouch(e);

    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  });

  sectionMap.addEventListener('touchend', (e) => {
    if (!xDown || !yDown) {
      return;
    }

    const {
      clientX: xUp,
      clientY: yUp
    } = getTouch(e);
    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;
    const xDiffAbs = Math.abs(xDown - xUp);
    const yDiffAbs = Math.abs(yDown - yUp);

    // at least <offset> are a swipe
    if (Math.max(xDiffAbs, yDiffAbs) < offset) {
      return;
    }

    if (!mapLeaflet.classList.contains('map__content--active')) {
      if (xDiffAbs > yDiffAbs) {
        if (xDiff > 0) {
          // console.log('left');
        } else {
          // console.log('right');
        }
      } else {
        if (yDiff > 0) {
          // console.log('up');
          if (!mapBlock.classList.contains('map__popup-block--opened')) {
            openPopupFunc()
          }
        } else {
          // console.log('down');
          if (mapBlock.classList.contains('map__popup-block--opened')) {
            mapBlock.classList.remove('map__popup-block--opened');
            sectionMap.classList.remove('map--opened');
          }
        }
      }
    }

  });

  function getTouch(e) {
    return e.changedTouches[0]
  }
}
detectSwipe()
// DETECT SWIPE
// -------------------------
