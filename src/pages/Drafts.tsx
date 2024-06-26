import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";
import { Email, getEmails } from "../data/emails";
import EmailList from "../components/EmailList";

const Drafts: React.FC = () => {
    const [emails, setEmails] = useState<Email[]>([]);

    useIonViewWillEnter(() => {
        const mails = getEmails().filter(email => email.draft);
        setEmails(mails);
    }); // This hook will run when the component is mounted

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='danger'>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Drafts</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList lines='full' className='ion-no-padding'>
                    {emails.map(email => <EmailList key={email.id} email={email} />)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Drafts;