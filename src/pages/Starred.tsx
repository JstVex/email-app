import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";
import { Email, getEmails } from "../data/emails";
import EmailList from "../components/EmailList";

const Starred: React.FC = () => {
    const [emails, setEmails] = useState<Email[]>([]);

    useIonViewWillEnter(() => {
        const mails = getEmails();
        setEmails(mails);
    });

    const handleDelete = (emailId: number) => {
        console.log('Deleting email with ID:', emailId);
    };

    const handleArchive = (emailId: number) => {
        console.log('Archiving email with ID:', emailId);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='danger'>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Starred</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList lines='full' className='ion-no-padding'>
                    {emails.map(email => <EmailList key={email.id} email={email} handleDelete={handleDelete} handleArchive={handleArchive} />)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Starred;