const sectionMap = document.querySelector('#section-map');
const animElement = sectionMap;
const mapBlock = sectionMap.querySelector('.map__popup-block');
let mapLeaflet = sectionMap.querySelector('#map');
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
  `<div class="about__wrapper  animation">

  <div class="about__list-btn  section-nav__btns">
    <a class="section-nav__btn" href="https://www.sozdanie-sajtov.space#section-services">
      apoiment
    </a>
    <a class="section-nav__btn" href="tel:+380631666774">
      1
    </a>
    <a class="section-nav__btn" href="https://www.sozdanie-sajtov.space#section-services">
      261 W 21st St, New York
    </a>
    <buttom class="section-nav__btn">
      message
    </buttom>

  </div>
  <!-- about__list-btn -->

  <div class="map__button-slide"></div>
  <!-- map__button-slide -->

  <ul class="map__img-list">
    <li class="map__img-item">
      <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya.webp"
        alt="">
    </li>
    <li class="map__img-item">
      <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya-2.jpg"
        alt="">
    </li>
    <li class="map__img-item">
      <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya.webp"
        alt="">
    </li>
  </ul>

  <div class="about__content">
    <h3 class="about__title  visually-hidden">Барбершоа "..." на ул. Заводская</h3>
    <div class="visually-hidden">3. Делитесь знаниями и зарабатывайте, не выходя из дома. Зарегистрируйтесь, чтобы
      начать преподавать на Preply. Делитесь знаниями и зарабатывайте, не выходя из дома. Зарегистрируйтесь,
      чтобы
      начать преподавать на Preply.</div>

    <table class="about__time-table">
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
<!-- about__wrapper -->

`;

const location2 =
  `<div class="about__wrapper  animation">

  <div class="about__list-btn  section-nav__btns">
    <a class="section-nav__btn" href="https://www.sozdanie-sajtov.space#section-services">
      apoiment
    </a>
    <a class="section-nav__btn" href="tel:+380631666774">
      2
    </a>
    <a class="section-nav__btn" href="https://www.sozdanie-sajtov.space#section-services">
      261 W 21st St, New York
    </a>
    <buttom class="section-nav__btn">
      message
    </buttom>

  </div>
  <!-- about__list-btn -->

  <div class="map__button-slide"></div>
  <!-- map__button-slide -->

  <ul class="map__img-list">
    <li class="map__img-item">
      <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya-2.jpg"
        alt="">
    </li>
    <li class="map__img-item">
      <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya-2.jpg"
        alt="">
    </li>
    <li class="map__img-item">
      <img class="about__img" src="https://www.sozdanie-sajtov.space/wp-content/uploads/2022/01/Bez-nazvaniya.webp"
        alt="">
    </li>
  </ul>

  <div class="about__content">
    <h3 class="about__title  visually-hidden">Барбершоа "..." на ул. Заводская</h3>
    <div class="visually-hidden">3. Делитесь знаниями и зарабатывайте, не выходя из дома. Зарегистрируйтесь, чтобы
      начать преподавать на Preply. Делитесь знаниями и зарабатывайте, не выходя из дома. Зарегистрируйтесь,
      чтобы
      начать преподавать на Preply.</div>

    <table class="about__time-table">
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
<!-- about__wrapper -->

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
setTimeout(initMap, 100);
// MAP INITILIZATION
// -------------------------


const mapFunc = () => {
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


    if (leafletPopupContent) {
      popupContent = leafletPopupContent.cloneNode(true);
      changeActivePin()
      // -------------------------
      // PUT INFORMATION TO BLOCK FROM LEAFLET POPUP
      mapBlockContent = mapBlock.querySelector('.map__popup-block-content');
      mapBlockContent.innerHTML = '';
      mapBlockContent.appendChild(popupContent);
      map.setView([51.45, -0.09], 10, { animation: true });
      // PUT INFORMATION TO BLOCK FROM LEAFLET POPUP
      // -------------------------
    }


    // -------------------------
    // DEACTIVETE MAP
    mapWrapper = sectionMap.querySelector('.map__wrapper');
    removeMapCover = () => {
      mapLeaflet.style.position = 'relative';
      mapLeaflet.style.zIndex = 3;
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
      mapLeaflet.style.zIndex = 0;
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
      //SLIDER BTNS. SLIDER
      // -------------------------
    }

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
      mapLeaflet.style.zIndex = 0;
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


