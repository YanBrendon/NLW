import { CloseButton } from "../CloseButton";
import bugImageUlr from '../../assets/bug.svg'
import ideaImageUlr from '../../assets/idea.svg'
import thoughtImageUlr from '../../assets/thought.svg'
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";


export const feedBackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUlr,
            alt: 'Imagem de um inseto'
        }

    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUlr,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUlr,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    },
}


export type FeedBackType = keyof typeof feedBackTypes


export function WidgetForm() {

    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedBackType(null);
    }


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto ">
            {feedbackSent ? (
                <FeedBackSuccessStep   onFeedbackRestartRequested={handleRestartFeedback}            />
            ) : (
                <>
                    {
                        !feedBackType ? (
                            <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />
                        ) : (
                            <FeedBackContentStep
                                feedBackType={feedBackType}
                                onFeedbackRestartRequested={handleRestartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />)
                    }
                </>
            )
            }



            <footer className="text-xs text-neutral-500">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a>
            </footer>
        </div>
    );
}