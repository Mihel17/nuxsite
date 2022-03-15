const promoSection = document.querySelector('.promo');
const promoElHeight = promoSection.offsetHeight;
// let promoScrollPosition = promoSection.scrollTop;

const onPromoScroll = () => {
  // console.log(promoScrollPosition)

  if (promoSection.scrollTop > promoElHeight / 2) {
    console.log('work')
    promoSection.scrollTop = promoSection.scrollTop + promoElHeight;
    // promoScrollPosition = promoSection.scrollTop;
  }
}
promoSection.addEventListener('touchend', onPromoScroll);


// const fbSection = document.querySelector('.fb-feed');
// const fbHightSection = fbSection.clientHeight;
// const fbPluginContainer = fbSection.querySelector('.fb-feed__container');
// const fbContainerWidth = fbPluginContainer.offsetWidth;
// const fbTemplate = fbPluginContainer.querySelector('#fb-template')
//   .content
//   .querySelector('.fb-feed__content').cloneNode(true);


// const fbHtml = fbTemplate.querySelector('.fb-page')
// fbHtml.setAttribute('data-height', fbHightSection + 50);


// if (window.innerWidth >= 500 && window.innerWidth <= 899) {
//   const toTop = 500 / 57;

//   fbPluginContainer.innerHTML = '';
//   fbPluginContainer.appendChild(fbTemplate);
//   fbPluginContainer.style.top = `-${(toTop * 500 / 100)}px`;
//   fbPluginContainer.style.marginBottom = `-${(toTop * 500 / 100)}px`;

//   const fbPlugin = fbPluginContainer.querySelector('.fb-feed__content');
//   fbPlugin.style.height = fbHightSection;
//   fbPlugin.style.minHeight = fbHightSection;
//   fbPlugin.style.maxHeight = fbHightSection;
//   fbPlugin.style.width = '500px';
//   fbPlugin.style.transform = `scale(${fbContainerWidth / 500})`;
// } else {
//   fbPluginContainer.innerHTML = '';
//   fbPluginContainer.appendChild(fbTemplate);
// }
