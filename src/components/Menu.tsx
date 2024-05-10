import React from 'react';
import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonMenuToggle,
    IonIcon,
    IonButtons,
    IonMenuButton
} from '@ionic/react';
import { documentOutline, fileTrayOutline, sendOutline, starOutline, trashBinOutline, warning } from 'ionicons/icons';
import './Menu.css';

const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar color={'danger'}>
                    <IonTitle>Menu</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList inset={true} lines='full' id="ion-list">
                    <IonMenuToggle auto-hide="false">
                        <IonItem routerLink="/" routerDirection="none">
                            <IonIcon slot="start" icon={fileTrayOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Inbox</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/starred" routerDirection="none">
                            <IonIcon slot="start" icon={starOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Starred</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/sent" routerDirection="none">
                            <IonIcon slot="start" icon={sendOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Sent</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/drafts" routerDirection="none">
                            <IonIcon slot="start" icon={documentOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Drafts</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/trash" routerDirection="none">
                            <IonIcon slot="start" icon={trashBinOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Trash</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
