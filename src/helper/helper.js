export const animateBody = (element) => {
  window.onscroll = function () {
    if (this.scrollY > 100) {
      element.style.opacity = "1";
      callFunc();
    } else {
      element.style.opacity = "0";
    }
  };

  const callFunc = () => {
    element.onclick = function () {
      element.style.opacity = "0";
      window.scrollTo({
        top: 0,
      });
    };
  };
};

export const resize = () => {
  let footer_height = document.getElementsByTagName("footer")[0].clientHeight,
    header_height = document.getElementsByTagName("header")[0].clientHeight,
    plus_height = footer_height + header_height,
    window_height = window.innerHeight,
    new_height = window_height - plus_height;

  if (document.getElementsByTagName("main")[0].clientHeight < window_height) {
    document.getElementsByTagName("main")[0].style.minHeight =
      new_height + "px";
  }
};

export const changeMapLocations = (btnRef, spanRefEast, spanRefWest) => {
  // firstTimeRender
  btnRef.current[0].classList.add("active");

  console.log(btnRef.current)

  btnRef.current.forEach((element) => {
    element.onclick = () => {
      spanRefEast.current.forEach((element) => {
        element.classList.remove("activeSpan");
      });
      spanRefWest.current.forEach((element) => {
        element.classList.remove("activeSpan");
      });
      btnRef.current.forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    };
  });

  // east
  spanRefEast.current.forEach((element) => {
    element.onclick = () => {
      btnRef.current.forEach((element) => {
        element.classList.remove("active");
      });
      btnRef.current[1].classList.add("active");
      spanRefEast.current.forEach((element) => {
        element.classList.remove("activeSpan");
      });
      spanRefWest.current.forEach((element) => {
        element.classList.remove("activeSpan");
      });
      element.classList.add("activeSpan");
    };
  });

  // west
  spanRefWest.current.forEach((element) => {
    element.onclick = () => {
      btnRef.current.forEach((element) => {
        element.classList.remove("active");
      });
      spanRefWest.current.forEach((element) => {
        element.classList.remove("activeSpan");
      });
      spanRefEast.current.forEach((element) => {
        element.classList.remove("activeSpan");
      });
      element.classList.add("activeSpan");
      btnRef.current[2].classList.add("active");
    };
  });
};

export const searchSpan = (searchRef) => {
  searchRef.current.forEach((elem) => {
    elem.onkeyup = function (e) {
      let spanParent = e.target.parentElement.nextElementSibling;
      const targetValue = e.target.value.toUpperCase();
      const a = spanParent.querySelectorAll("a");

      a.forEach((elem) => {
        const spanValue = elem.textContent.toUpperCase();

        if (spanValue.indexOf(targetValue) > -1) {
          elem.style.display = "block";
        } else {
          elem.style.display = "none";
        }
      });
    };
  });
};
