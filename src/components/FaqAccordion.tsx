import { useState } from 'react';

type FaqAccordionProps = {
  number: string;
  question: string;
  answer: string;
  nodeId: string;
  defaultOpen?: boolean;
};

export function FaqAccordion({ number, question, answer, nodeId, defaultOpen = false }: FaqAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const questionId = `faq-question-${number}`;
  const answerId = `faq-answer-${number}`;

  return <article className="faq-accordion" data-node-id={nodeId} data-open={open}>
    <h3>
      <button className="faq-question" type="button" id={questionId}
        aria-expanded={open} aria-controls={answerId} onClick={() => setOpen(!open)}>
        <span className="faq-question-number" aria-hidden="true">{number}</span>
        <span className="faq-question-text">{question}</span>
        <span className="faq-toggle" aria-hidden="true">
          <img src={open ? '/assets/227-540-40b86.svg' : '/assets/227-540-15af5.svg'} width="44" height="44" alt="" />
        </span>
      </button>
    </h3>
    <div className="faq-answer" id={answerId} role="region" aria-labelledby={questionId} hidden={!open}>
      <p>{answer}</p>
    </div>
  </article>;
}
