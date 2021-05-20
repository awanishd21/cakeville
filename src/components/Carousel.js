let slides = [
  "cake1.jpg",
  "cake3.jpg",
  "cake2.jpg",
  "cake4.jpg",
  "cake5.jpg",
  "cake6.jpg",
];
function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {slides?.length > 0 &&
          slides.map((each, index) => {
            return (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            );
          })}
      </ol>
      <div className="carousel-inner">
        {slides?.length > 0 &&
          slides.map((each, index) => {
            return (
              <div
                className={
                  index === 0 ? "active carousel-item" : "carousel-item"
                }
              >
                <img
                  src={"./slides/" + each}
                  className="d-block w-100 c-slides"
                  alt={"slide-" + index}
                />
              </div>
            );
          })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
