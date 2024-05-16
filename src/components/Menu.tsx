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
    IonAvatar,
    IonImg,
    IonFooter,
    IonButton
} from '@ionic/react';
import { easelOutline, logOutOutline, mailOutline, notificationsOutline, settingsOutline } from 'ionicons/icons';
import './Menu.css';

const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar color={'danger'}>
                    <IonTitle>
                        Menu
                    </IonTitle>
                    <IonButtons slot="end">
                        <IonMenuToggle>
                            <IonAvatar style={{ cursor: 'pointer', width: '35px', height: '35px', border: '1.5px solid white' }} className='ion-margin-end'>
                                <IonImg src="./D_pfp.png" />
                            </IonAvatar>
                        </IonMenuToggle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList inset={true} lines='full' id="ion-list">
                    <IonMenuToggle auto-hide="false">
                        <IonItem routerLink="/" routerDirection="none">
                            <IonIcon slot="start" icon={mailOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Inbox</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/starred" routerDirection="none">
                            <IonIcon slot="start" icon={easelOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Canvas</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/sent" routerDirection="none">
                            <IonIcon slot="start" icon={notificationsOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Notification</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/drafts" routerDirection="none">
                            <IonIcon slot="start" icon={settingsOutline} size='small' className='ion-padding-start' />
                            <IonLabel>Settings</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar color='danger'>
                    <IonButton expand="block" color="light" className='ion-margin-horizontal'>
                        <IonIcon slot="start" icon={logOutOutline} />
                        Logout
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </IonMenu>
    );
};

export default Menu;
