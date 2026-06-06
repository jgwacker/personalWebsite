/* quizzes.js — Great-Power Competition in AI. 5 section quizzes + final.
   Discipline: per-question max/min length ratio ≤ 1.4×; distractors
   padded with credible context so correct ≠ systematically longest. */
window.QUIZZES = {

  "frontier-ai": {
    title: "Frontier AI in One Read",
    questions: [
      {
        prompt: "What does “frontier AI” mean in the EU AI Act?",
        options: [
          "A training-compute threshold of about 10²⁵ floating-point operations",
          "A user-count threshold of at least 10 million monthly active users",
          "A 90%-or-higher pass rate on standardized professional exams",
          "A model developed inside an EU member state on EU compute"
        ],
        correct: 0,
        explanation: "The EU treats models trained at or above ~10²⁵ FLOPs as carrying systemic risk. About a dozen models cross that line as of April 2026."
      },
      {
        prompt: "Why does the guide call compute the “chokepoint” of AI?",
        options: [
          "Compute costs grow faster every year than software-development costs",
          "Chips and the machines that make them come from very few firms",
          "AI researchers are concentrated in only two or three world cities",
          "Each frontier model requires its own dedicated nuclear power station"
        ],
        correct: 1,
        explanation: "Data and algorithms travel at the speed of a download. Chips and lithography machines do not. That single fact is what makes export controls possible."
      },
      {
        prompt: "What did DeepSeek’s R1 (January 2025) demonstrate?",
        options: [
          "That a UN-coordinated lab can outperform private labs on reasoning",
          "That training a frontier model now requires only a single advanced GPU",
          "That the assumption only U.S. labs could build a frontier model was weak",
          "That export controls on chips had completely failed to slow Chinese AI"
        ],
        correct: 2,
        explanation: "R1 was derived from a V3 base whose final pretraining run reportedly cost ~$5.6M. DeepSeek’s total infrastructure was roughly $1.6B — not cheap, but no longer the supposed billions-only club."
      },
      {
        prompt: "Why does the guide treat AI as a great-power-competition problem?",
        options: [
          "Because AI is now economically more important than oil ever was",
          "Because every government formally treats it as a national-security issue",
          "Because the United Nations formally classified AI as strategic in 2025",
          "Strategic technology + concentrated input + a new low-cost entrant fits the model"
        ],
        correct: 3,
        explanation: "Strategic technology + concentrated input + a new low-cost entrant is the textbook setup for great-power competition. That framing drives every later section."
      }
    ]
  },

  "geography": {
    title: "The Geography of Dependence",
    questions: [
      {
        prompt: "What does ASML in the Netherlands control?",
        options: [
          "The world’s largest semiconductor design library and IP portfolio",
          "The world’s only EUV lithography machines for advanced chip nodes",
          "Most of the world’s data-center cooling-systems patents and IP",
          "The world’s leading high-bandwidth memory production facilities"
        ],
        correct: 1,
        explanation: "ASML has a 100% monopoly on EUV. Each machine costs ~€150–200M, takes more than a year to build, and has no credible substitute supplier."
      },
      {
        prompt: "In realist IR theory, what does “strategic dependence” mean?",
        options: [
          "A state has signed a defensive treaty with a more powerful state",
          "A state imports the bulk of its food from one or two foreign suppliers",
          "A state cannot substitute away from another state’s inputs in time",
          "A state has tied its currency to a foreign exchange standard or anchor"
        ],
        correct: 2,
        explanation: "The supplier gains coercive leverage — the implicit ability to disrupt the dependent state by withholding inputs. The chip-supply-chain map is a study in mutual strategic dependence."
      },
      {
        prompt: "What was the binding constraint on AI chip production through 2025?",
        options: [
          "Raw silicon wafers, in short supply after a major Taiwan earthquake",
          "Cooling infrastructure at advanced semiconductor manufacturing fabs",
          "Worker shortages across global semiconductor packaging facilities",
          "Advanced packaging (CoWoS) at TSMC, oversubscribed by Nvidia"
        ],
        correct: 3,
        explanation: "The shortage moved from chips themselves to the “glue” mounting GPU dies and HBM stacks together. CoWoS capacity remained fully booked into 2027."
      },
      {
        prompt: "How should the chokepoint map be read in realist terms?",
        options: [
          "As a set of mutual hostages — each dependence runs both ways",
          "As a single hegemonic structure controlled by the United States alone",
          "As primarily a market phenomenon driven by economies of scale",
          "As a temporary glitch the WTO will resolve within the next decade"
        ],
        correct: 0,
        explanation: "U.S.–Taiwan, U.S.–Netherlands, U.S.–China dependencies all run in both directions. Both sides hold leverage; both pay costs when they exercise it."
      }
    ]
  },

  "chip-war": {
    title: "The Chip War",
    questions: [
      {
        prompt: "What happened on October 7, 2022?",
        options: [
          "The U.S. signed a chip-cooperation treaty with both China and Taiwan",
          "TSMC announced it was completely withdrawing from the United States",
          "U.S. BIS published sweeping export controls on advanced chips to China",
          "The European Union banned U.S. chip exports from European markets"
        ],
        correct: 2,
        explanation: "The original BIS rule launched the chip war. Updated in October 2023 to close loopholes and extend to 44 countries; updated repeatedly since."
      },
      {
        prompt: "How did China adapt to the chip export controls?",
        options: [
          "By filing a successful WTO case that fully overturned the U.S. rules",
          "By immediately developing a domestic EUV machine to match ASML’s",
          "By cutting all U.S. technology imports and pivoting to European suppliers",
          "Through smuggling, efficiency gains (DeepSeek), and Huawei–SMIC builds"
        ],
        correct: 3,
        explanation: "Realist theory predicts strategic adaptation: protest, substitution, indigenous alternatives. China did all three — concurrently rather than sequentially."
      },
      {
        prompt: "What does realist theory predict about coercive action against a peer?",
        options: [
          "Coercion produces adaptation, not capitulation — speed of adaptation matters",
          "Sustained coercion eventually produces capitulation by the target state",
          "Coercive action is consistently more effective than diplomatic negotiation",
          "Peer competitors usually accept binding limits on themselves within five years"
        ],
        correct: 0,
        explanation: "The chip war is the cleanest case study of this proposition. China didn’t capitulate; it adapted. The strategic question is whether adaptation is faster than the controller’s lead."
      },
      {
        prompt: "Did the chip war “work”?",
        options: [
          "Yes — it has completely stopped China’s frontier-AI progress everywhere",
          "Contested — it slowed China at a cost to U.S. firms; adaptation is growing",
          "No — it had no measurable effect on the strategic balance whatsoever",
          "Yes — China formally accepted the U.S. chip restrictions in mid-2025"
        ],
        correct: 1,
        explanation: "CSIS analysts have published papers on both sides. The honest answer: the controls bought time at a price. Whether the price was worth it is a judgment, not a calculation."
      }
    ]
  },

  "buildout": {
    title: "The Compute Buildout Race",
    questions: [
      {
        prompt: "What is Stargate?",
        options: [
          "A $500B U.S. AI-data-center venture by OpenAI, Oracle, and SoftBank",
          "A new U.S.-led export-control regime aimed specifically at China",
          "A classified DARPA program developing autonomous-weapon software",
          "A treaty between European countries on AI infrastructure registration"
        ],
        correct: 0,
        explanation: "Announced January 21, 2025 — day one of the new U.S. administration. First site operational in Abilene, TX (September 2025); five more sites announced; ~7 GW planned capacity."
      },
      {
        prompt: "Why is the Gulf states’ AI entry strategically significant?",
        options: [
          "Because they have suddenly become the world’s largest chip designers",
          "It creates a third pole of AI infrastructure outside the U.S. and China",
          "Because they have replaced the U.S. as Nvidia’s single largest customer",
          "Because Gulf AI labs have already overtaken OpenAI on every benchmark"
        ],
        correct: 1,
        explanation: "Saudi Arabia and the UAE have committed $130B+, hedging oil decline while buying a seat at the AI table. Realists call this multipolarity arriving early."
      },
      {
        prompt: "What is China’s response to chip controls at the infrastructure level?",
        options: [
          "Buying chips through European intermediaries with no effective restrictions",
          "Importing U.S. chips through a recently signed Russia–China cooperation deal",
          "Building a closed-loop Huawei–SMIC stack as an indigenous alternative",
          "Conceding the chip race entirely and focusing on AI software development"
        ],
        correct: 2,
        explanation: "SMIC makes 7nm without EUV (at 20–40% yields); Huawei designs Ascend accelerators; Big Fund III added $47B in 2024. Lower efficiency, higher sovereignty."
      },
      {
        prompt: "Why has energy become a binding constraint on the AI buildout?",
        options: [
          "Hyperscalers have pledged to stop using fossil fuels for AI by 2027",
          "Data centers now require entirely renewable energy under EU law",
          "The chip-supply chain has fully shifted to all-electric processing",
          "IEA projects AI data centers reach ~3% of world electricity by 2030"
        ],
        correct: 3,
        explanation: "415 TWh in 2024 → ~950 TWh by 2030. Microsoft is restarting Three Mile Island; Google is funding geothermal; the Gulf is building Barakah. Energy is the new front."
      }
    ]
  },

  "weapons": {
    title: "Autonomous Weapons — the Can of Worms Open",
    questions: [
      {
        prompt: "What does the UN GGE’s March 2026 definition of LAWS cover?",
        options: [
          "Weapons that select and engage targets without human intervention",
          "All drones operated remotely by a human pilot during active combat",
          "Any weapon whose targeting software uses machine learning techniques",
          "All cyber weapons used against foreign civilian critical infrastructure"
        ],
        correct: 0,
        explanation: "The definition deliberately excludes remotely operated drones (a human is still in the loop) and includes loitering munitions and autonomous turrets when they make engagement decisions on their own."
      },
      {
        prompt: "What was the November 2025 UNGA vote on autonomous weapons?",
        options: [
          "Adopted by consensus, with no states voting against the resolution",
          "Adopted 164–6, with the United States among the six votes against",
          "Rejected after the United States and Russia jointly opposed the text",
          "Postponed indefinitely after the United States threatened a veto block"
        ],
        correct: 1,
        explanation: "164 in favor; 6 against (Belarus, Burundi, DPRK, Israel, Russia, U.S.); 7 abstentions including China and Iran. Strongest political signal yet — but non-binding."
      },
      {
        prompt: "Why has no binding LAWS treaty emerged after twelve years?",
        options: [
          "Because civil-society groups have refused to participate in the talks",
          "Because no government has ever proposed a draft treaty text at the UN",
          "The CCW consensus rule lets a few key states block all negotiations",
          "Because the underlying technology remains classified in every major military"
        ],
        correct: 2,
        explanation: "Over 70 states want to negotiate; the consensus rule blocks them. The Austrian-led coalition is exploring a UNGA-based process modeled on the Ottawa Process on landmines."
      },
      {
        prompt: "What did the Anthropic–Pentagon episode (Feb–May 2026) illustrate?",
        options: [
          "That all AI labs accept military contracts whenever they are offered",
          "That the U.S. Pentagon has essentially no leverage over private AI firms",
          "That every major AI lab has voluntarily dropped military safety constraints",
          "That civilian-AI safety practice and military procurement can collide"
        ],
        correct: 3,
        explanation: "Anthropic refused to drop safety constraints for autonomous-weapons applications; the Trump administration blacklisted it; a federal judge intervened; the Pentagon signed deals with eight other companies."
      }
    ]
  },

  "final": {
    title: "Final Challenge",
    questions: [
      {
        prompt: "Frontier AI is now defined by regulators using…",
        options: [
          "a training-compute threshold of about 10²⁵ floating-point operations",
          "a user-count threshold of at least 10 million monthly active users",
          "a 90%-or-higher pass rate on standardized professional exams",
          "the developer’s country of incorporation under national law"
        ],
        correct: 0,
        explanation: "The EU AI Act treats ~10²⁵ FLOPs as the systemic-risk threshold. About a dozen models cross it."
      },
      {
        prompt: "The chokepoint of AI in 2026 is…",
        options: [
          "model weights, which are increasingly closed by every major lab",
          "compute — chips and the machines that make them — concentrated",
          "AI engineers, who are clustered in roughly five world cities",
          "data centers, which are uniformly distributed around the world"
        ],
        correct: 1,
        explanation: "Data and algorithms travel at the speed of a download. Chips and ASML lithography machines don’t."
      },
      {
        prompt: "What does ASML in the Netherlands control?",
        options: [
          "Roughly 60% of the world’s high-bandwidth-memory production lines",
          "The world’s largest semiconductor design library and IP portfolio",
          "All EUV lithography machines required for sub-7nm advanced chips",
          "Most of the global market for data-center cooling systems"
        ],
        correct: 2,
        explanation: "100% EUV monopoly. No credible alternative supplier."
      },
      {
        prompt: "How did China adapt to U.S. chip export controls?",
        options: [
          "By winning a successful WTO case that overturned the entire regime",
          "By immediately building a domestic EUV machine to match ASML",
          "By cutting all U.S. technology imports and pivoting to Europe",
          "Through smuggling, efficiency gains, and the Huawei–SMIC stack"
        ],
        correct: 3,
        explanation: "Classic realist adaptation: protest, substitute, develop indigenous alternatives — concurrently rather than sequentially."
      },
      {
        prompt: "What is Stargate?",
        options: [
          "A $500B U.S. AI-data-center venture by OpenAI, Oracle, SoftBank",
          "A new U.S. export-control regime aimed specifically at China",
          "A classified DARPA autonomous-weapons development program",
          "A treaty among European states on AI infrastructure registration"
        ],
        correct: 0,
        explanation: "Announced January 21, 2025. First site online in Abilene, TX (September 2025); ~7 GW planned U.S. capacity plus a 5 GW UAE extension."
      },
      {
        prompt: "Why is the Gulf states’ AI entry strategically significant?",
        options: [
          "They have replaced the U.S. as Nvidia’s single largest customer",
          "They have suddenly become the world’s largest chip designers",
          "Their AI labs have already overtaken OpenAI on every benchmark",
          "It creates a third pole outside Silicon Valley and Chinese hubs"
        ],
        correct: 3,
        explanation: "$130B+ committed. Multipolarity arriving early — exactly what realist IR theory would predict."
      },
      {
        prompt: "What did the November 2025 UNGA vote on autonomous weapons show?",
        options: [
          "Consensus support — no member states voted against the resolution",
          "164 in favor, 6 against (including the U.S.), and 7 abstentions",
          "The U.S. and Russia jointly led the “yes” coalition at the UNGA",
          "The resolution was postponed under a credible U.S. veto threat"
        ],
        correct: 1,
        explanation: "Strongest political signal yet — but non-binding. The CCW consensus rule still blocks binding negotiation."
      },
      {
        prompt: "Why has no binding LAWS treaty emerged?",
        options: [
          "No member state has ever proposed a draft treaty text at the UN",
          "Civil-society groups have refused to participate in the talks",
          "The CCW consensus rule lets a few major powers block negotiations",
          "The underlying technology is classified by every major military"
        ],
        correct: 2,
        explanation: "Over 70 states want to negotiate; consensus blocks them. The Austrian-led coalition is exploring an Ottawa Process model."
      },
      {
        prompt: "How should the chokepoint map be read in realist terms?",
        options: [
          "As a single hegemonic structure controlled by the United States",
          "As primarily a market phenomenon driven by economies of scale",
          "As a temporary glitch the WTO will resolve within the next decade",
          "As a set of mutual hostages, with leverage running in both directions"
        ],
        correct: 3,
        explanation: "U.S.–Taiwan, U.S.–Netherlands, U.S.–China dependencies are mutual. Both sides hold leverage; both pay costs when they use it."
      },
      {
        prompt: "What does realist theory predict about coercive action against a peer?",
        options: [
          "Coercion produces adaptation, not capitulation by the target state",
          "Sustained coercion eventually produces full capitulation by the target",
          "Coercion is consistently more effective than direct diplomatic negotiation",
          "Peer competitors agree to binding limits on themselves within five years"
        ],
        correct: 0,
        explanation: "The chip war is the textbook case. The question becomes how fast adaptation runs against the controller’s lead."
      }
    ]
  }

};
