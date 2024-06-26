import { useState } from "react";
import { IonAvatar, IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuToggle, IonModal, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { calendarOutline, chevronDownOutline, toggle } from "ionicons/icons";
import { Canvas, getAssigments } from "../data/canvas";
import AssignmentList from "../components/canvas/AssignmentList";
import './Canvas.css';


const CanvasPage: React.FC = () => {
    const [assignments, setAssignments] = useState<Canvas[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<string>('All Courses');
    const [showFilter, setShowFilter] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | string[]>('');

    useIonViewWillEnter(() => {
        const assignments_fetch = getAssigments();
        setAssignments(assignments_fetch);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const courses = ['All Courses', ...new Set(assignments.map(a => a.course))];
    const filteredAssignments = selectedCourse === 'All Courses' ? assignments : assignments.filter(a => a.course === selectedCourse);

    const toggleCourses = () => {
        setShowFilter(!showFilter);
    }

    const selectCourse = (course: string) => {
        setSelectedCourse(course);
        setShowFilter(false);
    };

    type CourseKey = 'MATH' | 'CS' | 'ENGL';
    type CourseColor = 'orange' | 'green' | 'purple' | 'black';

    const courseColors: Record<CourseKey, CourseColor> = {
        MATH: 'orange',
        CS: 'green',
        ENGL: 'purple'
    };

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    }

    const handleDateChange = (value: string | string[]) => {
        setSelectedDate(value);
    };


    function getColorForCourse(courseName: string): CourseColor {
        const keys = Object.keys(courseColors) as CourseKey[];
        for (const key of keys) {
            if (courseName.includes(key)) {
                return courseColors[key];
            }
        }
        return 'black';
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='danger'>
                    <IonTitle>Canvas</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={toggleCalendar}>
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

                {showCalendar ? (
                    <div className="center-calendar">
                        <IonDatetime
                            presentation="date"
                            value={selectedDate}
                            onIonChange={e => handleDateChange(e.detail.value!)}
                        />
                    </div>
                ) : (
                    <>
                        <IonModal isOpen={showFilter} onDidDismiss={() => setShowFilter(false)} className="modal-style">
                            <IonList className="modal-content">
                                {courses.map((course, index) => (
                                    <IonItem key={index} button onClick={() => selectCourse(course)}>
                                        <IonLabel style={{ color: getColorForCourse(course), fontWeight: 500 }}>{course}</IonLabel>
                                    </IonItem>
                                ))}
                            </IonList>
                        </IonModal>

                        <IonButton color='light' expand="block" onClick={toggleCourses} style={{ fontWeight: '600' }}>
                            {selectedCourse} <IonIcon icon={chevronDownOutline} className="ion-padding-start" />
                        </IonButton>

                        <IonList lines='full' className='ion-no-padding'>
                            {filteredAssignments.map(assignment => <AssignmentList key={assignment.id} assignment={assignment} getColorForCourse={getColorForCourse} />)}
                        </IonList></>
                )}



            </IonContent>
        </IonPage >
    );
};

export default CanvasPage;