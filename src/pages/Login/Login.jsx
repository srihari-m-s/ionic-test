import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import FCC from "../../assets/fcc_primary_small.svg";
import Intro from "../../components/Intro/Intro";
import { Preferences } from "@capacitor/preferences";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";

const INTO_KEY = "intro-seen";

const Login = () => {
  const [introSeen, setIntroSeen] = useState(true);

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTO_KEY });
      setIntroSeen(seen.value === "true");
    };

    checkStorage();
  }, []);

  // Handle closeIntro
  const closeIntro = () => {
    setIntroSeen(true);
    Preferences.set({ key: INTO_KEY, value: "true" });
  };

  // handle reset intro
  const handleResetIntro = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTO_KEY });
  };

  return !introSeen ? (
    <Intro closeIntro={closeIntro} />
  ) : (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"} className="ion-text-center">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="4">
                <IonTitle>Login</IonTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="6">
              <div className="ion-text-center ion-padding-bottom">
                <img src={FCC} alt="freeCodeCamp" width={"50%"} />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <LoginForm handleResetIntro={handleResetIntro} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
