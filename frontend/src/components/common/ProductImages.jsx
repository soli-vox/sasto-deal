import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";

const ProductImages = ({ thumbsSwiper, setThumbsSwiper, images }) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    direction="vertical"
                    spaceBetween={10}
                    slidesPerView={6}
                    freeMode
                    watchSlidesProgress
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-2"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="content">
                                <img src={image} alt="" height={100} className="w-100" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="col-md-9">
                <Swiper
                    loop
                    spaceBetween={0}
                    navigation
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="content">
                                <img src={image} alt="" className="w-100" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductImages;