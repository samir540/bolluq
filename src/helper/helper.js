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
  var footer_height = document.getElementsByTagName("footer")[0].clientHeight,
    header_height = document.getElementsByTagName("header")[0].clientHeight,
    plus_height = footer_height + header_height,
    window_height = window.innerHeight,
    new_height = window_height - plus_height;

  if (document.getElementsByTagName("main")[0].clientHeight < window_height) {
    document.getElementsByTagName("main")[0].style.minHeight =
      new_height + "px";
  }
};
