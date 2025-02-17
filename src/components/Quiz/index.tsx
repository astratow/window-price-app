'use client';
import React from 'react';
import { QuizData } from '@/types/quiz';
import { useQuizLogic } from './QuizLogic';
import { QuizLayout } from './QuizLayout';
import Loading from '@/app/loading';

export const Quiz: React.FC<{ quizData: QuizData }> = ({ quizData }) => {
    const { currentQuestion, handleAnswer, isComplete, answers } = useQuizLogic(quizData);

    if (isComplete) {
        return (
            <div className="max-w-md mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
                <pre>{JSON.stringify(answers, null, 2)}</pre>
                </div>
        );
    }

    if (!currentQuestion) {
        return <Loading />;
    }

    return <QuizLayout question={currentQuestion} onAnswer={handleAnswer} />;
}

export default Quiz;