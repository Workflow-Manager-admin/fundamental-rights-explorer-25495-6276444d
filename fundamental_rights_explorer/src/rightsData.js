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
  },
  // --- Added rights below ---
  {
    id: "right-against-exploitation",
    name: "Right against Exploitation",
    explanation:
      "Prohibits all forms of forced labor, child labor, and human trafficking. Ensures that no person can be compelled to work against their wishes and protects children from being employed in hazardous occupations.",
    example:
      "In the case of People’s Union for Democratic Rights v. Union of India (1982), the Supreme Court held that non-payment of minimum wages amounts to forced labor, thereby enforcing the right against exploitation.",
    quiz: [
      {
        question: "Which articles comprise the Right against Exploitation?",
        options: [
          "Articles 19-22",
          "Articles 23-24",
          "Articles 14-18",
          "Articles 25-28"
        ],
        correctAnswer: 1,
        explanation: "Articles 23 and 24 constitute the Right against Exploitation."
      },
      {
        question: "The Right against Exploitation prohibits:",
        options: [
          "Child labor in hazardous jobs",
          "Human trafficking",
          "Begar (forced labor)",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All are explicitly prohibited by this right."
      },
      {
        question: "Employing children under the age of 14 in factories is:",
        options: [
          "Permitted under supervision",
          "Prohibited by the Constitution",
          "Restricted only in certain states",
          "Allowed if they are paid"
        ],
        correctAnswer: 1,
        explanation: "The Constitution (Article 24) prohibits employment of children under 14 in hazardous work."
      }
    ]
  },
  {
    id: "right-to-freedom-of-religion",
    name: "Right to Freedom of Religion",
    explanation:
      "Assures all persons the freedom of conscience and the right to freely profess, practice, and propagate religion. Subject to public order, morality, and health. Also protects religious denominations’ autonomy in managing their affairs.",
    example:
      "In the Shirur Mutt case (1954), the Supreme Court held that every religious denomination has the right to manage its own affairs in matters of religion.",
    quiz: [
      {
        question: "Right to Freedom of Religion is covered under which articles?",
        options: [
          "Articles 25-28",
          "Articles 14-18",
          "Articles 32-35",
          "Articles 19-22"
        ],
        correctAnswer: 0,
        explanation: "Articles 25 to 28 deal with matters of religious freedom."
      },
      {
        question: "Freedom to manage religious affairs by a group is protected for:",
        options: [
          "Any religious denomination",
          "Only government entities",
          "Only citizens above 18",
          "No one"
        ],
        correctAnswer: 0,
        explanation: "This right applies to every religious denomination."
      },
      {
        question: "Freedom to propagate religion means:",
        options: [
          "Forcing others to convert",
          "Spreading one’s beliefs peacefully",
          "Only practicing privately",
          "No interaction with other religions"
        ],
        correctAnswer: 1,
        explanation: "Propagation means peacefully spreading beliefs, not forced conversion."
      }
    ]
  },
  {
    id: "right-to-constitutional-remedies",
    name: "Right to Constitutional Remedies",
    explanation:
      "Empowers citizens to move the Supreme Court or High Courts to seek remedy for violation of fundamental rights. Dr. B.R. Ambedkar called this the 'heart and soul' of the Constitution because it ensures that rights are enforceable.",
    example:
      "In the Kesavananda Bharati v. State of Kerala (1973) case, the Supreme Court held that the basic structure of the Constitution, including the right to constitutional remedies, cannot be altered.",
    quiz: [
      {
        question: "Which Article is called the ‘heart and soul’ of the Indian Constitution by Dr. Ambedkar?",
        options: [
          "Article 21",
          "Article 32",
          "Article 19",
          "Article 14"
        ],
        correctAnswer: 1,
        explanation: "Article 32 allows citizens to directly move the Supreme Court for protection of Fundamental Rights."
      },
      {
        question: "Which of the following writs is NOT available under Article 32?",
        options: [
          "Habeas Corpus",
          "Prohibition",
          "Quo Warranto",
          "Certiorari",
          "Injunction"
        ],
        correctAnswer: 4,
        explanation: "‘Injunction’ is not a constitutional writ; the others are."
      },
      {
        question: "The Supreme Court can issue writs for enforcement of:",
        options: [
          "Only Fundamental Rights",
          "All Legal Rights",
          "Directive Principles",
          "None of the above"
        ],
        correctAnswer: 0,
        explanation: "Article 32 empowers the Court to enforce Fundamental Rights specifically."
      }
    ]
  }
];

export default rightsData;
