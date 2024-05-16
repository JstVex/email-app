import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuToggle, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { menu } from "ionicons/icons";

const Canvas: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={menu} />
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>
                    <IonTitle>Canvas</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Canvas</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Canvas;