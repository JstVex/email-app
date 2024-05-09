import { useEffect, useState } from 'react';
import { Email, getEmails } from '../data/emails';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import EmailList from '../components/EmailList';
import './Inbox.css';
import { arrowBack, searchOutline } from 'ionicons/icons';

const Inbox: React.FC = () => {
    const [emails, setEmails] = useState<Email[]>([]);
    const [allEmails, setAllEmails] = useState<Email[]>([]);
    const [searchText, setSearchText] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    useIonViewWillEnter(() => {
        const mails = getEmails();
        setAllEmails(mails);
        setEmails(mails);
    });

    useEffect(() => {
        if (searchText.trim() === '') {
            setEmails(allEmails);
        } else {
            const filteredEmails = allEmails.filter(email => {
                return email.subject.toLowerCase().includes(searchText.toLowerCase()) ||
                    email.from.toLowerCase().includes(searchText.toLowerCase()) ||
                    email.message.toLowerCase().includes(searchText.toLowerCase());
            });
            setEmails(filteredEmails);
        }
    }, [searchText, allEmails]);

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
        if (showSearch) {
            setSearchText('');
        }
    };

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    {showSearch ? (
                        <>
                            <IonButtons slot="start">
                                <IonButton onClick={handleSearchToggle}>
                                    <IonIcon icon={arrowBack} />
                                </IonButton>
                            </IonButtons>
                            <IonSearchbar
                                value={searchText}
                                onIonChange={(e) => setSearchText(e.detail.value!)}
                                placeholder="Search emails"
                                showCancelButton="focus"
                            />
                        </>
                    ) : (
                        <>
                            <IonTitle>Inbox</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={handleSearchToggle}>
                                    <IonIcon icon={searchOutline} />
                                </IonButton>
                            </IonButtons>
                        </>
                    )}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Inbox
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList>
                    {emails.map(email => <EmailList key={email.id} email={email} />)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Inbox;
