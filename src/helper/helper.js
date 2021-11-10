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
