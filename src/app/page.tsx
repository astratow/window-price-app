import Image from "next/image";
import { Quiz } from "@/components/Quiz";
import quizData from "@/data/quizData";

export default function Home() {
  return (
    <div className="container mx-auto px-4">

      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

         <h1 className="text-3xl font-bold text-center my-8">
        Glass Product Customization Quiz
      </h1>

       <Quiz quizData={quizData} />

    </div>
       
  );
}
