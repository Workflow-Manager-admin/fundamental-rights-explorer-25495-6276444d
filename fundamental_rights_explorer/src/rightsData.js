//
// Data source for India’s Fundamental Rights
// Each right contains an id, name, explanation, real-life example or landmark case, and quiz questions with multiple-choice options.
//

// PUBLIC_INTERFACE
const rightsData = [
  {
    id: "right-to-equality",
    name: "Right to Equality",
    explanation:
      "Guarantees equality before the law and equal protection of the laws for all citizens. Prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. Abolishes untouchability and titles.",
    example:
      "In the landmark case of Indra Sawhney v. Union of India (1992), the Supreme Court ruled on the extent of reservations (affirmative action) while upholding the core principle of equality.",
    quiz: [
      {
        question: "Which Article of the Indian Constitution primarily deals with the Right to Equality?",
        options: [
          "Article 14-18",
          "Article 19-22",
          "Article 25-28",
          "Article 32"
        ],
        correctAnswer: 0,
        explanation: "Articles 14-18 cover various provisions of the Right to Equality."
      },
      {
        question: "Which practice was abolished by the Right to Equality?",
        options: ["Untouchability", "Child Marriage", "Censorship", "Forced Labor"],
        correctAnswer: 0,
        explanation: "The Constitution abolishes untouchability under Article 17."
      },
      {
        question: "The principle of 'equality before law' means:",
        options: [
          "Everyone is treated the same by the law",
          "Certain people have special privileges",
          "Laws can be applied differently based on religion",
          "None of the above"
        ],
        correctAnswer: 0,
        explanation: "Equality before law ensures the law treats every person equally."
      }
    ]
  },
  {
    id: "right-to-freedom",
    name: "Right to Freedom",
    explanation:
      "Covers a range of freedoms, including speech and expression, assembly, association, movement, residence, and the right to practice any profession or trade. Subject to reasonable restrictions in the interest of the sovereignty and integrity of India, security of the state, public order, and morality.",
    example:
      "In Romesh Thappar v. State of Madras (1950), the Supreme Court declared that freedom of speech and expression is essential to democracy but subject to reasonable restrictions.",
    quiz: [
      {
        question: "Which of the following is NOT covered under the Right to Freedom?",
        options: [
          "Freedom of Speech and Expression",
          "Freedom to assemble peacefully",
          "Freedom to own property",
          "Freedom to move freely throughout India"
        ],
        correctAnswer: 2,
        explanation: "The right to own property is not part of the Right to Freedom; it was repealed by the 44th Amendment."
      },
      {
        question: "The Right to Freedom is guaranteed under which Articles?",
        options: [
          "Articles 14-18",
          "Articles 19-22",
          "Articles 23-24",
          "Article 32"
        ],
        correctAnswer: 1,
        explanation: "Articles 19 to 22 detail various aspects of the Right to Freedom."
      },
      {
        question: "The right to form associations is subject to restrictions for:",
        options: [
          "Public order and morality",
          "National security",
          "Sovereignty and integrity of India",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All of the above are grounds for imposing reasonable restrictions."
      }
    ]
  }
];

export default rightsData;
