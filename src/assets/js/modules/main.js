

const windowWidth = window.innerWidth
//only on Desktop
if (windowWidth >= 921) {
  //only on Desktop

  // PAUSE
  //------
  const animation = () => {
    // PAUSE
    //------

    const animElements = document.querySelectorAll('.animation');
    for (const item of animElements) {
      item.classList.add('animation__style');
    }

    const onEntry = (entry) => {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          change.target.classList.add('animation__active');
        }
        //     else {
        //       change.target.classList.remove('animation__active');
        //     }
      });
    }

    const animOptions = {
      threshold: [0.1]
    };
    const animObserver = new IntersectionObserver(onEntry, animOptions);

    for (const elm of animElements) {
      animObserver.observe(elm);
    }


    //------
    // PAUSE
  }
  setTimeout(animation, 1000);
  // PAUSE
  //------

  //only on Desktop
}


