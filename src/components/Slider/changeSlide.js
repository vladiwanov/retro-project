export default function changeSlide(state, img) {
  const slide2 = state.slide2;

  const images = img;
  const item = images.find(image => image === slide2);
  const indexItem = images.indexOf(item);

  if (indexItem + 1 === images.length) {
    return {
      slide1: slide2,
      slide2: images[0],
      status: false,
    };
  }
  return {
    slide1: slide2,
    slide2: images[indexItem + 1],
    status: false,
  };
}
