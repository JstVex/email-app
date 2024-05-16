export interface Canvas {
    id: number;
    title: string;
    course: string;
    dueDate: string;
}

const canvas: Canvas[] = [
    {
        id: 1,
        title: 'Unit 3 Assignment 1',
        course: 'Spr24 MATH 005B #36418 SINGLE VARIABLE CALCULUS II',
        dueDate: '2024-05-16T10:00:00',
    },
    {
        id: 2,
        title: 'Inheritance',
        course: 'Spr24 CS 003A #36335 INTRO OBJECT ORIENTD PROGR C++',
        dueDate: '2024-05-21T10:00:00',
    },
    {
        id: 3,
        title: 'Analysis of a Poem',
        course: 'Spr24 ENGL001B 38799',
        dueDate: '2024-05-17T10:00:00',
    },
    {
        id: 4,
        title: 'Unit 3 Assignment 2',
        course: 'Spr24 MATH 005B #36418 SINGLE VARIABLE CALCULUS II',
        dueDate: '2024-05-22T10:00:00',
    },
    {
        id: 5,
        title: 'Predator and Prey',
        course: 'Spr24 CS 003A #36335 INTRO OBJECT ORIENTD PROGR C++',
        dueDate: '2024-05-29T10:00:00',
    },
];

export const getAssigments = () => canvas;

export const getAssigment = (id: number) => canvas.find(m => m.id === id);
