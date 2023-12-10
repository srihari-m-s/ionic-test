import { IonButton, IonText } from "@ionic/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import { Intro1, Intro2, Intro3 } from "../../assets/intro";
import "./Intro.css";
import { useRef } from "react";

const Intro = ({ closeIntro }) => {
  const swiperRef = useRef();

  // Handle Next
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Handle Finish
  const handleFinish = () => {
    closeIntro();
  };

  return (
    <Swiper ref={swiperRef}>
      <SwiperSlide>
        <img src={Intro1} alt="Intro" />
        <IonText className="ion-text-center">
          <h3>Intro Page 1</h3>
        </IonText>
        <IonButton className="" onClick={handleNext} key={"one"}>
          Next
        </IonButton>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro2} alt="Intro" />
        <IonText>
          <h3>Intro Page 2</h3>
        </IonText>
        <IonButton className="" onClick={handleNext} key={"one"}>
          Next
        </IonButton>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro3} alt="Intro" />
        <IonText>
          <h3>Intro Page 3</h3>
        </IonText>
        <IonButton className="" onClick={handleFinish} key={"one"}>
          Finish
        </IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
