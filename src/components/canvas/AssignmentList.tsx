import {
    IonContent,
    IonIcon,
    IonItem,
    IonItemSliding,
    IonLabel
} from '@ionic/react';
import { Canvas } from '../../data/canvas';
import { chevronForwardOutline, personCircle } from 'ionicons/icons';
import './AssignmentList.css';


interface AssignmentListProps {
    assignment: Canvas;
}

const AssignmentList: React.FC<AssignmentListProps> = ({ assignment }) => {
    return (
        <IonItemSliding key={assignment.id}>
            <IonItem routerLink={`/assignment/${assignment.id}`} detail={false}>
                <IonIcon
                    slot="end"
                    icon={chevronForwardOutline}
                    size='small'
                    style={{ color: 'black' }}
                />
                <IonLabel className="ion-text-wrap" >
                    <h2>{assignment.course}</h2>
                    <h3>{assignment.title}</h3>
                </IonLabel>
            </IonItem>
        </IonItemSliding>

    );
};

export default AssignmentList;
