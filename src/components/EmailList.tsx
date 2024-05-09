import {
    IonIcon,
    IonItem,
    IonLabel,
} from '@ionic/react';
import { Email } from '../data/emails';
import { personCircle } from 'ionicons/icons';
import './EmailList.css';

interface EmailListProps {
    email: Email;
}

const MessageListItem: React.FC<EmailListProps> = ({ email }) => {
    return (
        <IonItem routerLink={`/mail/${email.id}`} detail={false}>
            <IonIcon slot="start" icon={personCircle} />
            <IonLabel className="ion-text-wrap">
                <h2>
                    {email.from}
                </h2>
                <h3>{email.subject}</h3>
                <p>
                    {email.message}
                </p>
            </IonLabel>
        </IonItem>
    );
};

export default MessageListItem;
