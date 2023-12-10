import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";

const Register = () => {
  const router = useIonRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Account Created");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleRegister}>
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
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
