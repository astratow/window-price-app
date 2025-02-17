import React from 'react';
import { QuizQuestion } from '@/types/quiz';
import Loading from '@/app/loading';

type QuizLayoutProps = {
    question: QuizQuestion;
    onAnswer: (option: string) => void;
}

export const QuizLayout: React.FC<QuizLayoutProps> = ({ question, onAnswer }) => {

    if (!question) return <p className="text-center"><Loading /> question...</p>;
    return (
        <div className="max-w-md mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-4">{ question?.text || <Loading /> }</h2>
            <ul>
                {question.options.map((option ) => (
                    <li key={option.id} className='mb-2'>
                        <button
                            onClick={() => onAnswer(option.id)}
                            className='w-full text-left p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                            >
                                { option.text }
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}