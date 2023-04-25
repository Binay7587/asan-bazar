import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useCallback, useEffect } from "react";
import bannerService from "../../../services/banner.service";

import noImage from "../../../assets/images/no-image.jpg";
import { Image } from "react-bootstrap";

const HomePageBanner = () => {
    let [banner, setBanner] = useState([]);

    const loadBanners = useCallback(
        async () => {
            try {
                let response = await bannerService.getActiveBanners();
                if (response.status) {
                    setBanner(response.result);
                }
            } catch (error) {
                console.log(error);
            }
        }, []
    )

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    useEffect(() => {
        loadBanners()
    }, [loadBanners])

    return (
        <div className="banner-wrapper">
            <Slider {...settings}>
                {
                    banner && banner.map((item, index) => (
                        <div key={index}>
                            <Image src={item.bannerImage ? import.meta.env.VITE_BASE_URL + '/images' + item.bannerImage : noImage} className="img img-fluid" alt="banner" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default HomePageBanner