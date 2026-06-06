/* quizzes.js — Contested Norms in AI. 5 section quizzes + final.
   Discipline: per-question max/min length ratio ≤ 1.4×; distractors
   padded with credible context so correct ≠ systematically longest. */
window.QUIZZES = {

  "disinfo-norm": {
    title: "Disinformation as a Cross-Border Norm Violation",
    questions: [
      {
        prompt: "What was the headline finding from 2024’s “AI election year”?",
        options: [
          "Platforms successfully removed essentially all AI content before voters saw it",
          "AI election interference operations were limited to a single hemisphere of activity",
          "AI sped up existing disinformation but did not measurably swing vote outcomes",
          "AI-generated deepfakes swung the results of most major democratic elections"
        ],
        correct: 2,
        explanation: "Harvard, MIT, the Munich Security Conference, and the Alan Turing Institute reached the same conclusion. The constructivist framing reframes the question — not “did votes swing?” but “what norm was violated?”"
      },
      {
        prompt: "Why was the Romania election case significant?",
        options: [
          "Russia publicly admitted full responsibility and offered to pay election reparations",
          "It was the first EU election annulled for coordinated digital interference operations",
          "Romanian regulators perfected AI-deepfake detection tools just before the vote",
          "It led directly to a binding international treaty on election security and integrity"
        ],
        correct: 1,
        explanation: "25,000 coordinated TikTok accounts + ~€1M in influencer payments + a Constitutional Court annulment. The first EU constitutional consequence of digital interference."
      },
      {
        prompt: "In constructivist theory, what makes a behavior a norm violation?",
        options: [
          "It violates a law in at least one major state’s formally codified legal system",
          "It is mathematically suboptimal for the actor performing it given the payoff matrix",
          "Other relevant international actors treat it as illegitimate and impose costs",
          "It receives front-page coverage in major newspapers across multiple countries"
        ],
        correct: 2,
        explanation: "Constructivists watch the response. Disruption reports, court rulings, sanctions, public attribution — these make the underlying expectation real."
      },
      {
        prompt: "What pattern do the OpenAI/Microsoft/Meta disruption reports show?",
        options: [
          "Foreign influence operations have completely stopped since the start of 2023",
          "Only states allied with the U.S. have run documented AI-enabled influence operations",
          "Actors are inventing entirely new categories of cross-border influence operations",
          "Actors are using AI to scale existing influence-operation playbooks faster"
        ],
        correct: 3,
        explanation: "OpenAI’s October 2025 report: “Threat actors bolt AI onto old playbooks to move faster, not gain novel offensive capability.”"
      }
    ]
  },

  "provenance": {
    title: "Provenance and Watermarking",
    questions: [
      {
        prompt: "What is C2PA?",
        options: [
          "A content-provenance standard — signed metadata travelling with each file",
          "A bipartisan U.S. bill to amend or fully repeal Section 230 of the law",
          "An EU regulation that bans all AI-generated content during election years",
          "An academic group that publicly ranks AI labs by their transparency record"
        ],
        correct: 0,
        explanation: "Linux Foundation standard. 3,700+ members including Adobe, Microsoft, OpenAI, all major camera makers. Fatal flaw: metadata can be stripped before upload."
      },
      {
        prompt: "What is the central limitation of Google’s SynthID?",
        options: [
          "It costs more than $1 million per image to deploy at any significant scale",
          "It has been formally banned by the EU AI Act and the UK Online Safety Act",
          "It only marks content produced by Google’s own AI models, not others",
          "It works only on AI text generated in English, not other major world languages"
        ],
        correct: 2,
        explanation: "Has marked 10B+ pieces of content — all from Google models. A Midjourney or Stable Diffusion image carries no SynthID mark."
      },
      {
        prompt: "What is the EU Digital Services Act?",
        options: [
          "A treaty signed by 50 countries to jointly regulate AI training data flows",
          "A bilateral U.S.–EU agreement on cross-border data flows and storage rules",
          "A U.K. statute that exempts platforms from any misinformation liability claims",
          "An EU regulation imposing labeling and risk-assessment obligations on platforms"
        ],
        correct: 3,
        explanation: "DSA entered full force February 2024. Used to open the TikTok investigation over Romania and to fine X in December 2025."
      },
      {
        prompt: "What is the emerging international norm on AI-generated content?",
        options: [
          "AI content should be banned outright in all democracies by the end of 2027",
          "AI content should be identifiable; platforms responsible for what they amplify",
          "AI content should be entirely unregulated as a global free-speech matter",
          "Only state-produced AI content should be allowed in political contexts globally"
        ],
        correct: 1,
        explanation: "No major jurisdiction has codified this fully. Many are building pieces — the constructivist account of norm emergence before treaty."
      }
    ]
  },

  "human-rights": {
    title: "The Human-Rights Frame",
    questions: [
      {
        prompt: "What is the UN OHCHR B-Tech project?",
        options: [
          "A UN tribunal that directly enforces human-rights judgments against tech firms globally",
          "A binding international treaty on AI signed by exactly 47 endorsing countries",
          "A working program applying the UN Guiding Principles on Business and Human Rights to AI",
          "A trade-policy office that regulates all cross-border data flows under UN auspices"
        ],
        correct: 2,
        explanation: "Launched 2019. Soft-law outputs that diffuse into other instruments — exactly how the human-rights frame moves the AI conversation."
      },
      {
        prompt: "Which European Court of Human Rights case was the first on facial recognition?",
        options: [
          "Bărbulescu v Romania (2017), on the topic of workplace digital monitoring",
          "Big Brother Watch v UK (2021), on the legality of bulk-interception programs",
          "Glukhin v Russia (2023), on protester identification by facial recognition",
          "There has been no ECHR judgment specifically on facial recognition yet"
        ],
        correct: 2,
        explanation: "July 4, 2023. Found Russia’s use of facial recognition to identify a protester from CCTV violated Articles 8 and 10."
      },
      {
        prompt: "Why have civil-society groups criticized the Council of Europe Convention?",
        options: [
          "It is too narrowly focused on commercial AI and ignores government surveillance use",
          "It gives the European Commission veto authority over national AI policy decisions",
          "It explicitly endorses U.S. military autonomous-weapons programs by name and date",
          "Article 3 lets states opt out of applying the treaty to private actors entirely"
        ],
        correct: 3,
        explanation: "Only Norway has declared the principles bind private actors. The treaty primarily constrains how governments use AI on their own citizens."
      },
      {
        prompt: "What is China’s Global AI Governance Initiative (GAIGI)?",
        options: [
          "A binding international treaty obligating signatories to share AI training data with China",
          "A normative framework emphasizing state sovereignty and development equity over civil rights",
          "A UN agency that enforces the Council of Europe Framework Convention on AI worldwide",
          "A trade agreement opening up AI markets between China and the European Union members"
        ],
        correct: 1,
        explanation: "Launched October 2023. The principal alternative international AI normative frame to the human-rights regime."
      }
    ]
  },

  "pope": {
    title: "The Pope and the Moral Frame",
    questions: [
      {
        prompt: "Why is the date of Pope Leo XIV’s first encyclical significant?",
        options: [
          "Because it was issued on Christmas Day 2026 for maximum global media visibility",
          "Because it was deliberately timed to coincide with the U.S. presidential election cycle",
          "It was signed 135 years to the day after Leo XIII’s Rerum Novarum encyclical",
          "Because it was issued on the anniversary of the founding of the Vatican City State"
        ],
        correct: 2,
        explanation: "Rerum Novarum (15 May 1891) was the founding document of Catholic social teaching on labor and the Industrial Revolution. The parallel is the central move."
      },
      {
        prompt: "In constructivist theory, what is a “norm entrepreneur”?",
        options: [
          "A state that has formally proposed a treaty in the United Nations General Assembly",
          "An actor who advances new normative claims and tries to convert them into binding rules",
          "An economist who studies the costs of regulatory compliance for multinational firms",
          "A lawyer who has won at least one significant international human-rights case in court"
        ],
        correct: 1,
        explanation: "The Pope is one of the most influential norm entrepreneurs on AI — reaching 1.4 billion people, independent of the industry, with historical weight via Catholic social teaching."
      },
      {
        prompt: "What does Magnifica Humanitas mean by “disarming” AI?",
        options: [
          "Removing all weapons-grade capabilities from AI models by binding international treaty",
          "Banning the use of AI in any military application worldwide by joint declaration",
          "Requiring all AI companies to surrender their training data to Vatican authorities",
          "Preventing AI from dominating humanity by freeing it from competition-driven logic"
        ],
        correct: 3,
        explanation: "“To disarm does not mean rejecting technology, but preventing it from dominating humanity.” A direct critique, by reference, of the great-power competition framing."
      },
      {
        prompt: "What was Antiqua et Nova (January 28, 2025)?",
        options: [
          "Pope Leo XIV’s first encyclical specifically about artificial intelligence and ethics",
          "A formally binding treaty between the Vatican and the major AI development labs",
          "A U.S. Senate bill that would mandate AI safety standards at NIST and Commerce",
          "A Vatican Note on AI issued under Pope Francis before Leo XIV’s May election"
        ],
        correct: 3,
        explanation: "Issued by the Dicastery for the Doctrine of the Faith plus the Dicastery for Culture and Education. The institutional groundwork Leo XIV inherited."
      }
    ]
  },

  "indigenous": {
    title: "Indigenous Data Sovereignty",
    questions: [
      {
        prompt: "What are the CARE Principles for Indigenous Data Governance?",
        options: [
          "A binding international treaty on data sharing between nation-states and indigenous groups",
          "An EU regulation requiring AI labs to formally consult with indigenous communities globally",
          "A U.S. federal mandate replacing the older FAIR Principles for open-science data sharing",
          "A framework of four principles: Collective Benefit, Authority, Responsibility, Ethics"
        ],
        correct: 3,
        explanation: "Published November 2020 by the Global Indigenous Data Alliance. A deliberate counterpoint to the FAIR Principles for open science."
      },
      {
        prompt: "What was distinctive about Te Hiku Media’s Māori-language AI project?",
        options: [
          "It was funded almost entirely by Duolingo, Microsoft, and a U.S. translation company",
          "It refused commercial actors on standard terms, using its own Kaitiakitanga License",
          "It used only synthetically generated data and contained no recorded human speech at all",
          "It open-sourced its entire dataset under a permissive Creative Commons license globally"
        ],
        correct: 1,
        explanation: "300+ hours of speech collected in 10 days; refused Duolingo and a U.S. translation company. Mahelona: “Data is the last frontier of colonization.”"
      },
      {
        prompt: "What does indigenous data sovereignty challenge in mainstream AI ethics?",
        options: [
          "The general assumption that civil and political rights apply directly to AI use cases",
          "The widespread use of cryptographic provenance metadata in content-authentication systems",
          "The basic premise that AI requires any kind of international regulation at all by states",
          "The assumption that universal frameworks adequately address community-specific harms"
        ],
        correct: 3,
        explanation: "The Council of Europe Convention, OECD Principles, UNESCO Recommendation, and the Pope’s encyclical all speak in universal terms. The indigenous frame argues those miss community-specific harms."
      },
      {
        prompt: "What does “sub-state sovereignty” mean in this context?",
        options: [
          "The legal authority of a federal state to overrule its constituent provinces or states",
          "Sovereignty claims by indigenous nations that don’t fit standard Westphalian models",
          "The legal authority of an international tribunal over a sovereign UN-member state",
          "The reserved powers of a U.S. state under the Tenth Amendment of the Constitution"
        ],
        correct: 1,
        explanation: "Indigenous nations hold land, govern citizens, and (in many cases) have treaty relationships with the states around them — but they don’t fit the standard state-system framework."
      }
    ]
  },

  "final": {
    title: "Final Challenge",
    questions: [
      {
        prompt: "What was the headline empirical finding from 2024’s “AI election year”?",
        options: [
          "AI-generated deepfakes swung the outcomes of most major democratic elections",
          "Platforms successfully removed essentially all AI content before voters saw it",
          "AI sped up existing disinformation but did not measurably swing vote outcomes",
          "AI election interference operations were entirely limited to a single hemisphere"
        ],
        correct: 2,
        explanation: "The four major academic studies (Harvard, MIT, Munich, Alan Turing Institute) reached the same conclusion."
      },
      {
        prompt: "In constructivist theory, what makes a behavior a norm violation?",
        options: [
          "It receives front-page coverage in major newspapers across multiple countries",
          "It violates a law in at least one major state’s formally codified legal code",
          "It is mathematically suboptimal for the actor performing it given the payoff",
          "Other relevant international actors treat it as illegitimate and impose costs"
        ],
        correct: 3,
        explanation: "Constructivists watch the response."
      },
      {
        prompt: "What is C2PA?",
        options: [
          "A bipartisan U.S. bill to amend or fully repeal Section 230 of the law",
          "An EU regulation that bans AI-generated content during election years",
          "A content-provenance standard — signed metadata travelling with each file",
          "An academic group that publicly ranks AI labs by their transparency record"
        ],
        correct: 2,
        explanation: "Linux Foundation standard. 3,700+ members. Fatal flaw: metadata can be stripped before upload."
      },
      {
        prompt: "What was distinctive about Glukhin v Russia (2023)?",
        options: [
          "It was the first European Court of Human Rights case on facial recognition",
          "It was the first U.S. Supreme Court ruling specifically on AI in policing",
          "It was a binding U.N. General Assembly resolution on AI surveillance abuse",
          "It was a Council of Europe Framework Convention compliance test case ruling"
        ],
        correct: 0,
        explanation: "July 4, 2023. Russia’s use of facial recognition to identify a protester from CCTV violated Articles 8 and 10 of the ECHR."
      },
      {
        prompt: "What is China’s Global AI Governance Initiative (GAIGI)?",
        options: [
          "A trade agreement opening up AI markets between China and the European Union",
          "A normative framework emphasizing state sovereignty and development over civil rights",
          "A binding international treaty obligating signatories to share AI training data globally",
          "A UN agency that enforces the Council of Europe Convention on AI worldwide"
        ],
        correct: 1,
        explanation: "Launched October 2023. The principal alternative international AI normative frame to the human-rights regime."
      },
      {
        prompt: "Why is the date of Pope Leo XIV’s first encyclical significant?",
        options: [
          "Because it was issued on Christmas Day 2026 for maximum global media visibility",
          "Because it was deliberately timed to coincide with the U.S. presidential election",
          "Because it was issued on the anniversary of the founding of the Vatican City State",
          "It was signed 135 years to the day after Leo XIII’s Rerum Novarum encyclical"
        ],
        correct: 3,
        explanation: "Rerum Novarum (15 May 1891) was the founding document of Catholic social teaching on labor."
      },
      {
        prompt: "What does Magnifica Humanitas mean by “disarming” AI?",
        options: [
          "Banning the use of AI in any military application worldwide by joint declaration",
          "Requiring all AI companies to surrender their training data to Vatican authorities",
          "Preventing AI from dominating humanity by freeing it from competition-driven logic",
          "Removing all weapons-grade capabilities from AI models by binding international treaty"
        ],
        correct: 2,
        explanation: "A direct critique, by reference, of the great-power competition framing."
      },
      {
        prompt: "What are the CARE Principles for Indigenous Data Governance?",
        options: [
          "A framework of four principles: Collective Benefit, Authority, Responsibility, Ethics",
          "A binding international treaty on data sharing between nation-states and indigenous nations",
          "An EU regulation requiring AI labs to formally consult with indigenous communities globally",
          "A U.S. federal mandate replacing the older FAIR Principles for open-science data sharing"
        ],
        correct: 0,
        explanation: "Published November 2020 by GIDA. Deliberate counterpoint to FAIR Principles for open science."
      },
      {
        prompt: "What was distinctive about Te Hiku Media’s Māori-language AI project?",
        options: [
          "It was funded almost entirely by Duolingo, Microsoft, and a U.S. translation company",
          "It refused commercial actors on standard terms, using its own Kaitiakitanga License",
          "It used only synthetically generated data and contained no recorded human speech",
          "It open-sourced its entire dataset under a permissive Creative Commons license"
        ],
        correct: 1,
        explanation: "300+ hours of speech in 10 days."
      },
      {
        prompt: "What does indigenous data sovereignty challenge in mainstream AI ethics?",
        options: [
          "The assumption that universal frameworks adequately address community-specific harms",
          "The general assumption that civil and political rights apply directly to AI use cases",
          "The widespread use of cryptographic provenance metadata in content authentication",
          "The basic premise that AI requires any kind of international regulation at all"
        ],
        correct: 0,
        explanation: "Universal frameworks — including the Pope’s encyclical and the human-rights regime — systematically miss community-specific harm."
      }
    ]
  }

};
