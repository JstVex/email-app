import { useState } from 'react';
import { Email, getEmail } from '../data/emails';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMail.css';

function ViewMail() {
    const [email, setEmail] = useState<Email>();
    const params = useParams<{ id: string }>();

    useIonViewWillEnter(() => {
        const email = getEmail(parseInt(params.id, 10));
        setEmail(email);
    });

    return (
        <IonPage id="view-message-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {email ? (
                    <>
                        <IonItem>
                            <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
                            <IonLabel className="ion-text-wrap">
                                <h2>
                                    {email.from}
                                </h2>
                                <h3>
                                    To: <IonNote>Me</IonNote>
                                </h3>
                            </IonLabel>
                        </IonItem>

                        <div className="ion-padding">
                            <h1>{email.subject}</h1>
                            <p>
                                {email.message}
                            </p>
                        </div>
                    </>
                ) : (
                    <div>Email not found</div>
                )}
            </IonContent>
        </IonPage>
    );
}

export default ViewMail;
