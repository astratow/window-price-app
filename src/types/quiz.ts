export type QuizOption = {
    id: string;
    text: string;
}

export type QuizQuestion = {
    id: string;
    text: string;
    options: QuizOption[];
}

export type QuizData = {
    questions: QuizQuestion[];
}