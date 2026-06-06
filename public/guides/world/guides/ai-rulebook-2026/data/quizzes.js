/* quizzes.js — International Cooperation on AI. 5 section quizzes + final.
   Discipline: per-question max/min length ratio ≤ 1.4×; distractors
   padded with credible context so correct ≠ systematically longest. */
window.QUIZZES = {

  "collective-action": {
    title: "Why AI Is a Collective-Action Problem",
    questions: [
      {
        prompt: "What does the prisoner’s dilemma applied to AI safety teach?",
        options: [
          "Two countries will always cooperate when given the chance to negotiate",
          "Each country has incentive to skip safety even when both would lose by it",
          "AI development tends to balance itself out through ordinary market forces",
          "Governments cannot meaningfully regulate AI at any stage of its development"
        ],
        correct: 1,
        explanation: "Armstrong, Bostrom, and Shulman’s “Racing to the Precipice” modelled exactly this: the equilibrium has every team using less safety than each would choose alone."
      },
      {
        prompt: "What does “cheap talk” mean in game theory?",
        options: [
          "An agreement reached by a very small number of negotiating parties",
          "A summit declaration that successfully prevents future international conflict",
          "A statement that costs nothing to make and costs nothing to break later",
          "A type of cryptographic signature used in modern international treaties"
        ],
        correct: 2,
        explanation: "Voluntary safety pledges with no third-party enforcement are textbook cheap talk. The antidote is a “costly signal” — one that would be expensive to abandon."
      },
      {
        prompt: "The “Brussels effect” describes…",
        options: [
          "The migration of AI researchers from Brussels to other European capitals",
          "A formal treaty between EU countries to share frontier AI models with each other",
          "U.S. AI labs choosing to relocate their headquarters offices to Brussels",
          "How the EU’s large market can force multinationals to apply EU rules globally"
        ],
        correct: 3,
        explanation: "Coined by Anu Bradford. The EU AI Act is doing now to AI what GDPR did to data privacy — globalizing rules through market access."
      },
      {
        prompt: "Why is cooperation structurally hard for AI specifically?",
        options: [
          "Short shadow of the future, dual-use technology, and private-firm actors",
          "All major AI companies are state-owned, blurring private and public categories",
          "Because AI is the only modern technology governed at the international level",
          "Because international treaties have been formally banned on technology since 2010"
        ],
        correct: 0,
        explanation: "Three combined obstacles: a fast race horizon, civilian/military overlap, and the fact that most building happens inside private firms international institutions cannot directly bind."
      }
    ]
  },

  "summits": {
    title: "The Summit Process",
    questions: [
      {
        prompt: "Which countries did NOT sign the Paris AI Action Summit (Feb 2025)?",
        options: [
          "The United States and the United Kingdom did not sign the communique",
          "China and India broke with the other signatories at the Paris summit",
          "France and Germany jointly declined to sign the final summit communique",
          "Japan and South Korea withdrew their formal support during negotiations"
        ],
        correct: 0,
        explanation: "50+ countries signed, including the EU and China. The U.S. and U.K. broke with the rest — the moment summit diplomacy visibly fragmented."
      },
      {
        prompt: "What durable institutional invention came out of the Bletchley summit?",
        options: [
          "The European AI Office, which now enforces the EU AI Act across the union",
          "The AI Safety Institute model — the U.K. and U.S. each launched one in days",
          "A formally binding international treaty signed by all 28 attending countries",
          "The Frontier Model Forum, founded by the four largest U.S. AI labs"
        ],
        correct: 1,
        explanation: "Bletchley produced a non-binding declaration and one institutional invention. The AISIs are the durable piece."
      },
      {
        prompt: "What was the New Delhi summit’s most notable shift?",
        options: [
          "The production of the first legally binding international treaty on AI",
          "The formal exclusion of the European Union from international AI governance",
          "A rebranding from “Safety Summit” to “Impact Summit” — toward inclusion",
          "The imposition of global compute caps on all frontier-AI training runs"
        ],
        correct: 2,
        explanation: "India hosted the fourth summit as the first Global South host and rebranded — signaling a turn from existential risk toward development and inclusion."
      },
      {
        prompt: "What does “regime complex” mean in IR theory?",
        options: [
          "A formal alliance with treaty-level commitments shared among all members",
          "The internal bureaucratic structure of any single international organization",
          "A coalition of authoritarian states resisting Western-style institutions",
          "Overlapping institutions covering the same issue area, with no single authority"
        ],
        correct: 3,
        explanation: "The AI regime complex includes the EU AI Act, the Council of Europe Convention, the OECD Principles, the UN body, the FMF, the AISI Network — no single piece governs everything."
      }
    ]
  },

  "hard-law": {
    title: "The Hard-Law Layer",
    questions: [
      {
        prompt: "What is distinctive about the Council of Europe Framework Convention on AI?",
        options: [
          "It is administered by the European Commission under the EU AI Act framework",
          "It bans most AI development inside Council of Europe member states completely",
          "It is the first legally binding international treaty specifically on AI",
          "Its provisions apply only to AI used in defense and military intelligence contexts"
        ],
        correct: 2,
        explanation: "Adopted May 17, 2024; opened for signature September 5, 2024. Ten day-one signatories including U.S., U.K., EU. Distinct from the EU."
      },
      {
        prompt: "What does the EU AI Act’s fine schedule actually look like?",
        options: [
          "A single $20M U.S.-dollar ceiling enforceable in U.S. courts globally",
          "Three tiers — €35M/7%, €15M/3%, €7.5M/1% by violation category",
          "A single uniform ceiling of €15M or 3% of global turnover for all violations",
          "A single uniform ceiling of €35M or 7% of global turnover for all violations"
        ],
        correct: 1,
        explanation: "The three tiers are why different press releases cite different numbers — they’re different violation classes."
      },
      {
        prompt: "Why have civil-society groups criticized the Council of Europe Convention?",
        options: [
          "Because it is too narrowly focused on national security and ignores private actors",
          "Because it cedes governance authority entirely to private AI firms by design",
          "Because Article 3 lets states opt out of applying the treaty to private actors",
          "Because it explicitly endorses U.S. military autonomous-weapons programs by name"
        ],
        correct: 2,
        explanation: "Only Norway has declared the principles will bind private actors. The Article 3.2 national-security exemption is also broader than ECHR doctrine."
      },
      {
        prompt: "Why do the OECD AI Principles matter despite being non-binding?",
        options: [
          "Connective tissue — cited by the EU AI Act, NIST RMF, and CoE Convention",
          "Because they impose direct financial penalties on every non-complying government",
          "Because they have been formally ratified by the World Trade Organization",
          "Because they were the legal basis for the U.S. chip export controls in 2022"
        ],
        correct: 0,
        explanation: "47 endorsing governments. Updated in May 2024 for generative AI. Their power is normative diffusion — shared vocabulary that lets harder rules coordinate."
      }
    ]
  },

  "soft-law": {
    title: "The Soft-Law Layer",
    questions: [
      {
        prompt: "What did the White House voluntary commitments (July 2023) ask of labs?",
        options: [
          "To pay an annual licensing fee to a new federal AI regulatory body",
          "To open-source their model weights to academic researchers worldwide",
          "Among other steps: to conduct red-teaming and watermark AI-generated content",
          "To train all future frontier models inside U.S. borders only"
        ],
        correct: 2,
        explanation: "Seven labs signed at the White House July 21, 2023; eight more joined in September. The commitments were never legally binding, and EO 14110 — the follow-up vehicle — was rescinded January 2025."
      },
      {
        prompt: "How does the NIST AI RMF function as international norm export?",
        options: [
          "It is enforced via a NIST tribunal that fines non-compliant U.S. firms directly",
          "It is a UN treaty that legally binds all 47 endorsing governments worldwide",
          "It is the binding standard for all AISI evaluations across the network globally",
          "Soft law whose vocabulary now shapes the EU AI Act and the CoE Convention"
        ],
        correct: 3,
        explanation: "Soft law that has acquired hard-law-like normative weight. Govern–Map–Measure–Manage is now the shared vocabulary across major AI rulebooks."
      },
      {
        prompt: "What is the AI Safety Institutes Network’s most-cited product?",
        options: [
          "A unified global model-evaluation database used by all 11 institutes daily",
          "The 2025 International AI Safety Report, co-authored by 33 country teams",
          "A formally binding international treaty signed at the San Francisco convening",
          "The Frontier Model Forum’s annual industry coordination and outcomes report"
        ],
        correct: 1,
        explanation: "Convened by the Network and authored across 33 governments plus the EU and UN. Soft-law output with technical weight no single government could produce alone."
      },
      {
        prompt: "What does the Frontier Model Forum actually do?",
        options: [
          "Operate a binding industry-wide safety standard for its four member labs",
          "Fund external safety research and coordinate intel-sharing among its members",
          "Set the technical standards that the EU AI Act enforces against companies",
          "Run the U.S. Center for AI Standards and Innovation (CAISI) under NIST"
        ],
        correct: 1,
        explanation: "Founded July 2023 by Anthropic, Google, Microsoft, OpenAI. By 2026 had disbursed more than $5M in grants and coordinated adversarial-distillation intelligence-sharing among members."
      }
    ]
  },

  "breaking": {
    title: "Where Cooperation Breaks",
    questions: [
      {
        prompt: "What did rescinding Executive Order 14110 actually cost?",
        options: [
          "The federal monitoring infrastructure for the AI voluntary commitments",
          "The legal force of the underlying voluntary commitments themselves",
          "The Council of Europe Framework Convention’s U.S. signature and ratification",
          "The European AI Office’s authority to enforce GPAI rules in Europe"
        ],
        correct: 0,
        explanation: "The commitments were voluntary to begin with; rescinding the EO eliminated the U.S. government’s ability to monitor and follow up."
      },
      {
        prompt: "Why did the U.S. AI Safety Institute get renamed CAISI in 2025?",
        options: [
          "Because the U.S. Congress passed a bill abolishing and replacing the original",
          "Because the U.K. asked the U.S. to harmonize the naming of their AI bodies",
          "Because the original AISI was merged into the U.S. Department of Defense",
          "The Trump administration renamed it the Center for AI Standards and Innovation"
        ],
        correct: 3,
        explanation: "It kept its NIST home and most of its staff. The word “safety” was deliberately removed for “standards and innovation.”"
      },
      {
        prompt: "When did the United States withdraw from the Freedom Online Coalition?",
        options: [
          "In January 2023, during the first month of the Biden administration’s second term",
          "In September 2024, just before the Paris AI Action Summit communique was signed",
          "On February 12, 2026, following a Trump directive targeting 66 organizations",
          "It has not yet withdrawn — the United States remains a member as of May 2026"
        ],
        correct: 2,
        explanation: "Cut the coalition’s membership by one and reduced its normative weight more than that."
      },
      {
        prompt: "What is the institutionalist response to U.S. withdrawals from the AI regime?",
        options: [
          "International regimes survive exits when they create value for remaining members",
          "Without the United States the international AI regime cannot meaningfully function",
          "Only China’s alternative framework (GAIGI) can fill the gap left by U.S. withdrawal",
          "U.S. withdrawals have been quietly reversed by State Department officials in practice"
        ],
        correct: 0,
        explanation: "Realists are skeptical; institutionalists point to the EU, CoE states, Japan, Korea, Singapore, Canada, Australia — all with continuing interest in cooperative AI governance."
      }
    ]
  },

  "final": {
    title: "Final Challenge",
    questions: [
      {
        prompt: "The prisoner’s dilemma applied to AI safety implies…",
        options: [
          "two countries always cooperate if they can negotiate openly and meet often",
          "AI development resolves itself through ordinary market forces over time",
          "each country has incentive to skip safety even when joint care helps",
          "international AI regulation is essentially logically impossible to achieve"
        ],
        correct: 2,
        explanation: "“Racing to the Precipice” (2016) modelled the Nash trap — every team uses less safety than each would choose alone."
      },
      {
        prompt: "The “Brussels effect” means…",
        options: [
          "Brussels has become the new global tech capital of all of Europe",
          "European AI researchers are migrating to Brussels in record numbers",
          "the largest U.S. AI labs have all relocated their headquarters to Brussels",
          "the EU’s market size can force multinationals to apply EU rules globally"
        ],
        correct: 3,
        explanation: "Bradford’s framework. GDPR globalized that way; the AI Act is doing the same now."
      },
      {
        prompt: "Which two countries did NOT sign the Paris AI Action Summit (Feb 2025)?",
        options: [
          "Japan and South Korea broke with the other signatories at Paris",
          "France and Germany jointly declined to sign the final summit communique",
          "China and India broke with the major signatories at the Paris summit",
          "The United States and the United Kingdom did not sign the communique"
        ],
        correct: 3,
        explanation: "50+ countries signed; the transatlantic posture visibly diverged at Paris."
      },
      {
        prompt: "What makes the Council of Europe Framework Convention distinctive?",
        options: [
          "It is the first legally binding international treaty on AI worldwide",
          "It bans most AI development in Council of Europe member states completely",
          "It is administered by the European Commission as part of the EU AI Act",
          "Its provisions apply only to AI used in defense and intelligence contexts"
        ],
        correct: 0,
        explanation: "Opened for signature September 5, 2024. Ten day-one signatories. Distinct from the EU; covers human rights, democracy, rule of law."
      },
      {
        prompt: "What does the EU AI Act’s fine schedule look like?",
        options: [
          "A single uniform ceiling of €15M or 3% of global turnover for all violations",
          "Three tiers — €35M/7%, €15M/3%, €7.5M/1% by violation category",
          "A single uniform ceiling of €35M or 7% of global turnover for all violations",
          "A single $20M U.S.-dollar ceiling enforceable in U.S. courts globally"
        ],
        correct: 1,
        explanation: "The three tiers explain why different press releases cite different numbers."
      },
      {
        prompt: "How does the NIST AI RMF function internationally?",
        options: [
          "It is a UN treaty that legally binds all 47 endorsing countries worldwide",
          "Soft law whose vocabulary now shapes the EU AI Act and the CoE Convention",
          "It is the binding standard for all AISI evaluations across the network globally",
          "It is enforced via a NIST tribunal that fines non-compliant U.S. firms directly"
        ],
        correct: 1,
        explanation: "Soft law that has acquired hard-law-like normative weight."
      },
      {
        prompt: "What did the rescission of EO 14110 actually cost?",
        options: [
          "The federal monitoring infrastructure for the AI voluntary commitments",
          "The legal force of the underlying voluntary commitments themselves",
          "The U.S. signature on the Council of Europe Framework Convention treaty",
          "The European AI Office’s authority over General-Purpose AI obligations"
        ],
        correct: 0,
        explanation: "The commitments were always voluntary; the EO had been the monitoring vehicle. Its rescission removed federal follow-up."
      },
      {
        prompt: "Why did the AISI become CAISI?",
        options: [
          "Because Congress passed a bill abolishing and replacing the original institute",
          "Because the U.S. AISI was merged into the U.S. Department of Defense",
          "The Trump administration renamed it the Center for AI Standards and Innovation",
          "Because the U.K. asked the U.S. to harmonize naming with its own AI institute"
        ],
        correct: 2,
        explanation: "Same NIST home and most of the same staff. Dropped “safety” for “standards and innovation.”"
      },
      {
        prompt: "What is the institutionalist response to U.S. withdrawals from the AI regime?",
        options: [
          "International regimes survive exits when they still create value for the rest",
          "Without the United States the international AI regime cannot meaningfully function",
          "Only China’s alternative framework can fill the gap left by U.S. withdrawal",
          "The withdrawals have been quietly reversed by State Department officials in practice"
        ],
        correct: 0,
        explanation: "The EU, CoE states, Japan, Korea, Singapore, Canada, Australia all have continuing interest."
      },
      {
        prompt: "What is the realist counter to that institutionalist case?",
        options: [
          "Realists argue that international cooperation among major powers is always impossible",
          "International regimes survive only when major powers continue to participate fully",
          "Realists believe binding treaties are consistently stronger than voluntary frameworks",
          "Realists support U.S. re-entry into all multilateral AI institutions and forums"
        ],
        correct: 1,
        explanation: "Without U.S. enforcement bandwidth, the regime cannot produce binding consequence for companies that ignore it."
      }
    ]
  }

};
