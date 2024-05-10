import {
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
} from '@ionic/react';
import { Email } from '../data/emails';
import { archive, personCircle, star, starOutline, trash } from 'ionicons/icons';
import './EmailList.css';

interface EmailListProps {
    email: Email;
    handleDelete: (id: number) => void;
    handleArchive: (id: number) => void;
    handleToggleStar: (id: number) => void;
}

const EmailList: React.FC<EmailListProps> = ({ email, handleDelete, handleArchive, handleToggleStar }) => {

    // Function to display the email's sender or recipient
    const getEmailDisplay = (email: Email) => {
        if (email.draft) {
            return <h2 style={{ color: 'red' }}>Draft</h2>;
        } else if (email.sent) {
            return <h2>To: {email.to}</h2>;
        } else {
            return <h2>{email.from}</h2>;
        }
    };

    return (
        <IonItemSliding key={email.id}>
            <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={() => handleDelete(email.id)}>
                    <IonIcon icon={trash} slot="icon-only" />
                </IonItemOption>
            </IonItemOptions>

            <IonItemOptions side="start">
                <IonItemOption color="success" onClick={() => handleArchive(email.id)}>
                    <IonIcon icon={archive} slot="icon-only" />
                </IonItemOption>
            </IonItemOptions>
            <IonItem routerLink={`/mail/${email.id}`} detail={false}>
                <IonIcon slot="start" icon={personCircle} className='ion-padding-start' />
                <IonIcon
                    slot="end"
                    icon={email.starred ? star : starOutline}
                    size='small'
                    style={{ color: email.starred ? 'gold' : 'gray' }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleToggleStar(email.id);
                    }}
                />
                <IonLabel className="ion-text-wrap email-text" >
                    {getEmailDisplay(email)}
                    <h3>{email.subject}</h3>
                    <p >
                        {email.message}
                    </p>
                </IonLabel>
            </IonItem>
        </IonItemSliding>
    );
};

export default EmailList;
