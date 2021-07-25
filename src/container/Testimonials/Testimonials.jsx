// import React, { Component } from 'react';
import TestimonialsComponent from '../../components/TestimonialsComponent/TestimonialsComponent';
import Title from '../../components/Title/Title';
import React, { useRef, useState, Component } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonials1 from '../../img/Testimonials1.svg';
import Testimonials2 from '../../img/Testimonials2.svg';
import Testimonials3 from '../../img/Testimonials3.svg';
import Testimonials4 from '../../img/Testimonials4.svg';
import Testimonials5 from '../../img/Testimonials5.svg';
import Testimonials6 from '../../img/Testimonials6.svg';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './Testimonials.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

const data = [
  {
    comment:
      'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
    img1: Testimonials1,
    img2: Testimonials2,
    img3: Testimonials3,
    img4: Testimonials4,
    img5: Testimonials5,
    img6: Testimonials6,
    job: 'CEO of MZP',
    name: 'Michal John',
  },
  {
    comment:
      'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
    img1: Testimonials1,
    img2: Testimonials2,
    img3: Testimonials3,
    img4: Testimonials4,
    img5: Testimonials5,
    img6: Testimonials6,
    job: 'CEO of MZP',
    name: 'Michal John',
  },
  {
    comment:
      'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
    img1: Testimonials1,
    img2: Testimonials2,
    img3: Testimonials3,
    img4: Testimonials4,
    img5: Testimonials5,
    img6: Testimonials6,
    job: 'CEO of MZP',
    name: 'Michal John',
  },
  {
    comment:
      'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
    img1: Testimonials1,
    img2: Testimonials2,
    img3: Testimonials3,
    img4: Testimonials4,
    img5: Testimonials5,
    img6: Testimonials6,
    job: 'CEO of MZP',
    name: 'Michal John',
  },
  {
    comment:
      'Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.',
    img1: Testimonials1,
    img2: Testimonials2,
    img3: Testimonials3,
    img4: Testimonials4,
    img5: Testimonials5,
    img6: Testimonials6,
    job: 'CEO of MZP',
    name: 'Michal John',
  },
];
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
export class Testimonials extends Component {
  render() {
    return (
      <div className="container py-5">
        <Title title="What PeopleSays" subTitle="Testimonials" />

        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            // className="mySwiper"
          >
            {data.map((v, i) => {
              return (
                <SwiperSlide>
                  <TestimonialsComponent data={v} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Testimonials;
