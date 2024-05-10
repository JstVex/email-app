import {
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
} from '@ionic/react';
import { Email } from '../data/emails';
import { archive, personCircle, trash } from 'ionicons/icons';
import './EmailList.css';

interface EmailListProps {
    email: Email;
    handleDelete: (id: number) => void;
    handleArchive: (id: number) => void;
}

const MessageListItem: React.FC<EmailListProps> = ({ email, handleDelete, handleArchive }) => {
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
        </IonItemSliding>
    );
};

export default MessageListItem;
