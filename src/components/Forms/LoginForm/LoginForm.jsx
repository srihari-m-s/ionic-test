import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonInput,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";

export const LoginForm = ({ handleResetIntro }) => {
  const router = useIonRouter();

  const [present, dismiss] = useIonLoading();

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    await present("Logging in...");
    setTimeout(() => {
      dismiss();
      router.push("/home", "root");
    }, 2000);
  };

  return (
    <IonCard>
      <IonCardContent>
        <form onSubmit={handleLogin}>
          <IonInput
            label="Email"
            type="email"
            labelPlacement="floating"
            placeholder="example@xyz.com"
            fill="outline"
          ></IonInput>
          <IonInput
            label="Password"
            type="password"
            labelPlacement="floating"
            placeholder="Password"
            fill="outline"
            className="ion-margin-top"
          ></IonInput>
          <IonButton type="submit" expand="block" className="ion-margin-top">
            Login
            <IonIcon icon={logInOutline} className="" />
          </IonButton>
          <IonButton
            type="button"
            expand="block"
            className="ion-margin-top"
            color={"secondary"}
            routerLink="/register"
          >
            Sign up
            <IonIcon icon={personCircleOutline} />
          </IonButton>
          <IonButton
            type="button"
            expand="block"
            className="ion-margin-top"
            color={"tertiary"}
            onClick={handleResetIntro}
          >
            See Intro
          </IonButton>
        </form>
      </IonCardContent>
    </IonCard>
  );
};
