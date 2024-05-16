import { useState } from "react";
import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuToggle, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";
import { Canvas, getAssigments } from "../data/canvas";
import AssignmentList from "../components/canvas/AssignmentList";


const CanvasPage: React.FC = () => {
    const [assignments, setAssignments] = useState<Canvas[]>([]);

    useIonViewWillEnter(() => {
        const assignments_fetch = getAssigments();
        setAssignments(assignments_fetch);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='danger'>
                    <IonTitle>Canvas</IonTitle>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon icon={calendarOutline} />
                        </IonButton>
                        <IonMenuToggle>
                            <IonAvatar style={{ cursor: 'pointer', width: '35px', height: '35px', border: '1.5px solid white' }} className='ion-margin-end'>
                                <IonImg src="./D_pfp.png" />
                            </IonAvatar>
                        </IonMenuToggle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Canvas
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList lines='full' className='ion-no-padding'>
                    {assignments.map(assignment => <AssignmentList key={assignment.id} assignment={assignment} />)}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default CanvasPage;