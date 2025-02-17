'use client';
import { useState, useEffect } from "react";
import { QuizData, QuizQuestion } from "@/types/quiz";

export const useQuizLogic = (quizData: QuizData) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | null>(null);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Initialize the quiz with the first question
        if (currentQuestionIndex === null && quizData.questions.length > 0) {
            setCurrentQuestionIndex(0);
        }
    }, [quizData, currentQuestionIndex]);

    const getNextQuestionIndex = (currentAnswer: string) => {
        const nextQuestion = quizData.questions.findIndex(q => q.id === currentAnswer);
        return nextQuestion !== -1 ? nextQuestion : - 1;
    };

  const currentQuestion: QuizQuestion | null = 
    currentQuestionIndex !== null ? quizData.questions[currentQuestionIndex] : null;

    const handleAnswer = (optionId: string) => {
        if (!currentQuestion) return;
        
        const newAnswers = { ...answers, [currentQuestion.id]: optionId };
        setAnswers(newAnswers);
    
        const nextIndex = getNextQuestionIndex(optionId);
    
        if (nextIndex !== -1) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setIsComplete(true);
        }
    };

    return {
        currentQuestion,
        handleAnswer,
        isComplete,
        answers
    };
};