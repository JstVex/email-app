import { useEffect, useState } from 'react';
import { Email, getEmails } from '../data/emails';
import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonList,
    IonMenuToggle,
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
    const [emails, setEmails] = useState<Email[]>([]); // State to hold our emails
    const [allEmails, setAllEmails] = useState<Email[]>([]); // State to hold all emails ( used for filtering in search )
    const [searchText, setSearchText] = useState(''); // State to hold the search text
    const [showSearch, setShowSearch] = useState(false); // State to toggle the search bar

    useIonViewWillEnter(() => {
        const mails = getEmails();
        setAllEmails(mails);
        setEmails(mails);
    }); // This hook will run when the component is mounted

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
    }, [searchText, allEmails]); // This hook will run when the searchText or allEmails state changes

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    }; // This function will run when the user pulls down to refresh the page

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
        if (showSearch) {
            setSearchText('');
        }
    }; // This function will toggle the search bar

    return (
        <IonPage id="main">
            <IonHeader>
                <IonToolbar color={'danger'}>
                    {/*if showSearch is true, show the search bar, else show title and icon to toggle search*/}
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
                            />
                        </>
                    ) : (
                        <>
                            <IonTitle>Inbox</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={handleSearchToggle}>
                                    <IonIcon icon={searchOutline} />
                                </IonButton>
                                <IonMenuToggle>
                                    <IonAvatar style={{ cursor: 'pointer', width: '35px', height: '35px', border: '1.5px solid white' }} className='ion-margin-end'>
                                        <IonImg src="./D_pfp.png" />
                                    </IonAvatar>
                                </IonMenuToggle>
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

                {/* Our list of emails ( each email is an EmailList component  */}
                <IonList lines='full' className='ion-no-padding'>
                    {emails.map(email => <EmailList key={email.id} email={email} />)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Inbox;
