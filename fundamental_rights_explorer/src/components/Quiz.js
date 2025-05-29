import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Quiz component – renders multiple-choice questions and instant feedback.
 * Props:
 *   - questions: Array of { question, options, correctAnswer, explanation }
 */
function Quiz({ questions }) {
  // Use an array of answer indices: null = unanswered, 0/1/2/... = selected
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [showFeedback, setShowFeedback] = useState(Array(questions.length).fill(false));

  const handleOptionClick = (qIdx, optIdx) => {
    if (userAnswers[qIdx] !== null) return; // Prevent changing after selection
    const newUserAnswers = [...userAnswers];
    const newShowFeedback = [...showFeedback];
    newUserAnswers[qIdx] = optIdx;
    newShowFeedback[qIdx] = true;
    setUserAnswers(newUserAnswers);
    setShowFeedback(newShowFeedback);
  };

  return (
    <div>
      {questions.map((q, qIdx) => (
        <div
          key={qIdx}
          style={{
            marginBottom: 28,
            padding: "18px 16px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid var(--border-color)",
            borderRadius: 6,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative"
          }}
          aria-labelledby={`quiz-q${qIdx}`}
        >
          <div
            id={`quiz-q${qIdx}`}
            style={{ fontWeight: "bold", marginBottom: 8, color: "var(--kavia-orange)" }}
          >
            Q{qIdx + 1}. {q.question}
          </div>
          <div>
            {q.options.map((option, optIdx) => {
              const isSelected = userAnswers[qIdx] === optIdx;
              const isAnswered = userAnswers[qIdx] !== null;
              const isCorrect = optIdx === q.correctAnswer;
              // Color logic
              let bg = "rgba(0,0,0,0.10)";
              let border = "1px solid var(--border-color)";
              if (isAnswered) {
                if (isSelected) {
                  bg = isCorrect ? "rgba(63, 185, 80, 0.10)" : "rgba(232, 122, 65, 0.12)";
                  border = isCorrect
                    ? "2px solid #36b96e"
                    : "2px solid var(--kavia-orange)";
                } else if (isCorrect) {
                  // Highlight correct answer if incorrect choice selected
                  bg = !isCorrect && isSelected ? "rgba(232,122,65,0.10)" : "rgba(37, 150, 190, 0.07)";
                }
              }
              return (
                <button
                  key={optIdx}
                  className="btn btn-large"
                  style={{
                    display: "block",
                    marginBottom: 10,
                    background: bg,
                    border: border,
                    color: "inherit",
                    width: "100%",
                    textAlign: "left",
                    cursor: isAnswered ? "default" : "pointer",
                    opacity: isAnswered && !isSelected ? 0.7 : 1,
                    transition: "background 0.2s"
                  }}
                  onClick={() => handleOptionClick(qIdx, optIdx)}
                  aria-disabled={isAnswered}
                  aria-pressed={isSelected}
                  tabIndex={0}
                >
                  {option}
                  {
                    // Screen reader cue
                    isAnswered && isCorrect
                      ? <span style={{ marginLeft: 6, color: "#36b96e" }} aria-label="Correct">✓</span>
                      : null
                  }
                </button>
              );
            })}
          </div>
          {showFeedback[qIdx] && (
            <div
              aria-live="assertive"
              style={{
                marginTop: 14,
                padding: "10px 14px",
                borderRadius: 4,
                fontSize: "1rem",
                background:
                  userAnswers[qIdx] === q.correctAnswer
                    ? "rgba(63, 185, 80, 0.18)"
                    : "rgba(232, 122, 65, 0.18)",
                color:
                  userAnswers[qIdx] === q.correctAnswer
                    ? "#36b96e"
                    : "var(--kavia-orange)",
                border:
                  userAnswers[qIdx] === q.correctAnswer
                    ? "1.5px solid #36b96e"
                    : "1.5px solid var(--kavia-orange)",
                fontWeight: 500,
                minHeight: 32
              }}
            >
              {userAnswers[qIdx] === q.correctAnswer ? "Correct!" : "Incorrect!"}
              <span style={{ marginLeft: 8, color: "var(--text-secondary)", fontWeight: 400 }}>
                {q.explanation ? q.explanation : null}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Quiz;
