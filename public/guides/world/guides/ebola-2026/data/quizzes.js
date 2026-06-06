/* =====================================================================
   quizzes.js — all quiz content as one global object.
   Loaded via <script> (NOT fetched) so the site works from file://.
   Shape:
     QUIZZES[sectionId] = {
       title: "…",
       questions: [
         { prompt: "…", options: ["A","B","C","D"], correct: <index>, explanation: "…" }
       ]
     }
   Distractors are written to be plausible and similar in length to the
   correct answer, and correct answers are spread across A/B/C/D.
   ===================================================================== */
window.QUIZZES = {

  "ebola": {
    title: "What Ebola Is",
    questions: [
      {
        prompt: "Which best describes how Ebola spreads between people?",
        options: [
          "Mostly through respiratory droplets in the air, the way the flu or COVID-19 do",
          "Through bites from infected mosquitoes, the way malaria and yellow fever spread",
          "Through direct contact with the bodily fluids of a sick person, or a body after death",
          "Through contaminated drinking water and food, in the way cholera spreads"
        ],
        correct: 2,
        explanation: "Ebola is not airborne and is not carried by mosquitoes or water. It spreads by direct contact with infected bodily fluids — which is why close caregivers and unsafe burials, not casual contact, drive transmission."
      },
      {
        prompt: "Why don’t existing Ebola vaccines like ERVEBO protect against the 2026 outbreak?",
        options: [
          "They cover only the Zaire species, while the 2026 outbreak involves the distinct Bundibugyo virus",
          "The Bundibugyo virus mutated this year, escaping the immunity that ERVEBO normally provides",
          "ERVEBO was pulled from the market in 2024 after long-term safety concerns emerged",
          "Both Congo and Uganda have refused to accept any vaccines from Western pharmaceutical companies"
        ],
        correct: 0,
        explanation: "ERVEBO and the approved antibody drugs target Zaire ebolavirus. Bundibugyo is a different species (over 30% genetically distinct), so the existing tools don’t fit this lock."
      },
      {
        prompt: "When is a person infected with Ebola contagious?",
        options: [
          "From the moment of exposure, even before any symptoms appear, for the full course of infection",
          "Only during the first three days, before the immune system has begun to respond to the virus",
          "Only after recovery, while the virus persists in the bloodstream for several weeks afterward",
          "Only once symptoms appear — during the 2–21 day incubation period they are not contagious"
        ],
        correct: 3,
        explanation: "People are not infectious during the 2–21 day incubation window; they become contagious once symptoms begin. That’s why contacts are monitored for 21 days and isolated the moment they fall ill."
      },
      {
        prompt: "Why are safe burials such a priority in an Ebola response?",
        options: [
          "Because the virus can survive in dry soil for years and contaminate future generations of mourners",
          "Because a body carries a very high viral load — unsafe funerals drove over half of cases in 2014–16",
          "Because cremation is the only disposal method allowed under international health regulations",
          "Because decomposition releases the virus into the air, putting whole villages at risk of infection"
        ],
        correct: 1,
        explanation: "A corpse is at its most infectious — far more so than a living patient. Traditional funerals that involve washing and touching the body spread the virus widely, so safe, dignified burials are a core control measure."
      }
    ]
  },

  "where": {
    title: "Where the Outbreak Is Happening",
    questions: [
      {
        prompt: "The 2026 outbreak is centered in which country, and has crossed into which neighbor?",
        options: [
          "Nigeria, with cases crossing the border into neighboring Niger and Chad",
          "The Democratic Republic of the Congo, with cases reaching Uganda’s capital, Kampala",
          "Sierra Leone, with cases crossing the border into Guinea and Liberia",
          "South Sudan, with cases crossing into the Central African Republic"
        ],
        correct: 1,
        explanation: "It began in Congo’s Ituri Province and reached Uganda’s capital within weeks — the first sign it had become an international emergency."
      },
      {
        prompt: "Why was only about 21% of known contacts being followed up?",
        options: [
          "Most contacts refused to cooperate for religious or cultural reasons related to traditional medicine",
          "A national contact-tracing app failed in late May and could no longer record household visits",
          "Armed conflict — M23-controlled areas, roadblocks, and attacks on clinics — makes it physically impossible to reach them",
          "The WHO ran out of money to pay the local community health workers who carry out the visits"
        ],
        correct: 2,
        explanation: "Contact tracing means daily visits for 21 days. War, checkpoints, and attacks on treatment centers make that impossible across much of the affected area."
      },
      {
        prompt: "What did Dr. Tedros mean by a “catastrophic collision of disease and conflict”?",
        options: [
          "That two unrelated disease outbreaks are happening in the same region at the same time",
          "That soldiers moving between front lines have become the main mechanism spreading the virus",
          "That the virus was deliberately released as a biological weapon during the fighting",
          "That fighting an outbreak inside a war zone cripples the usual tools — tracing, isolation, and trust"
        ],
        correct: 3,
        explanation: "The Ebola playbook depends on reaching and isolating contacts and burying the dead safely. Active conflict breaks all of these, which is what makes this outbreak so dangerous."
      },
      {
        prompt: "The same region had an Ebola outbreak in 2018–19. What happened then?",
        options: [
          "Conflict helped drag it out for 22 months, killing about 2,299 people — the second-worst on record",
          "It was stopped within two weeks after the ERVEBO vaccine was first rushed into use in the field",
          "It stayed confined to a single rural village and was contained without international involvement",
          "African Union peacekeepers cleared the area around clinics, allowing rapid containment"
        ],
        correct: 0,
        explanation: "The same violence now hampering the response made the 2018–19 outbreak the second-largest in history — a warning of what 2026 could become."
      }
    ]
  },

  "why-ir": {
    title: "Why International Relations Matters",
    questions: [
      {
        prompt: "Why is infectious disease inherently an international-relations problem?",
        options: [
          "Because the World Health Organization legally requires every country to share its medicine equally",
          "Because most modern viruses are designed in government laboratories for political purposes",
          "Because pathogens travel with people and goods across borders, so no country can contain them alone",
          "Because diseases only spread between countries that have signed formal trade agreements with each other"
        ],
        correct: 2,
        explanation: "Disease travels with people and trade. The 2026 virus reached Kampala within three weeks, so containing it takes cooperation no single country can provide on its own."
      },
      {
        prompt: "What is the “perverse incentive” in outbreak reporting?",
        options: [
          "Drug companies make more money from outbreaks, so they quietly encourage countries to delay reporting",
          "Honest countries that report outbreaks often face travel bans and trade penalties — which tempts others to hide them",
          "International donors only fund response in countries that successfully conceal cases from their own public",
          "The WHO charges a fee for declaring a PHEIC, so poor countries hesitate to ask for one"
        ],
        correct: 1,
        explanation: "Reporting can trigger flight bans and trade restrictions. Because honesty is effectively punished while concealment escapes short-term cost, the rules try to separate reporting from sanctions."
      },
      {
        prompt: "“Soft power,” as used in this section, means…",
        options: [
          "Gaining influence through attraction and goodwill rather than force — for instance, by helping in a health crisis",
          "Using a country’s military in quiet, low-profile operations that don’t reach the international news",
          "Printing extra currency to fund overseas spending without raising taxes on domestic citizens",
          "Maintaining a government that cannot reliably enforce its own laws across its territory"
        ],
        correct: 0,
        explanation: "Joseph Nye coined “soft power” to mean influence through attraction. Helping fight disease — as PEPFAR did — builds trust and goodwill that hard power can’t buy."
      },
      {
        prompt: "A country cuts its disease-surveillance budget but still benefits when its neighbors invest in theirs. This is an example of…",
        options: [
          "Humanitarian intervention, since outside countries are stepping in to help a country in need",
          "Multilateralism, since several countries are coordinating their public-health investments together",
          "National sovereignty, since each country is free to set its own budget priorities",
          "The free-rider problem, since the country enjoys a shared benefit without paying its share of the cost"
        ],
        correct: 3,
        explanation: "Free riding means enjoying a shared benefit without paying for it. Skimping on surveillance while neighbors invest is the classic move — until an undetected outbreak grows."
      }
    ]
  },

  "structure": {
    title: "The Global Health System",
    questions: [
      {
        prompt: "What is a PHEIC (Public Health Emergency of International Concern)?",
        options: [
          "An annual meeting of national health ministers where global response priorities are set",
          "A multilateral fund that pays for emergency vaccine shipments to affected countries",
          "The WHO’s highest alert level, declared by the Director-General for an extraordinary cross-border event",
          "A treaty all 196 IHR signatories must sign before sending any medical aid across borders"
        ],
        correct: 2,
        explanation: "A PHEIC is the WHO’s top alert. Only the Director-General can declare one — this outbreak became just the 8th in history on 17 May 2026."
      },
      {
        prompt: "Most of the WHO’s budget comes from…",
        options: [
          "Equal mandatory dues paid by every member country, regardless of size or wealth",
          "Ticket sales, investments, and licensing fees from medical research it publishes",
          "A small global health tax collected on international airline tickets and pharmaceutical sales",
          "Voluntary contributions that donors mostly earmark for specific projects, which limits flexibility"
        ],
        correct: 3,
        explanation: "Only about 20% comes from predictable dues; roughly 80% is voluntary, and most of that is earmarked — leaving little flexible money for sudden emergencies."
      },
      {
        prompt: "A major weakness of the International Health Regulations (IHR) is that…",
        options: [
          "Only the wealthiest countries have actually signed and ratified the agreement",
          "The WHO has no power to enforce them — it relies on reputation and self-interest",
          "Their text is classified and most national health ministries have never read them",
          "They apply only during declared wars and are formally suspended during peacetime"
        ],
        correct: 1,
        explanation: "The IHR bind 196 countries but carry no penalties. Compliance rests on diplomatic pressure and each country’s stake in a world that actually reports disease."
      },
      {
        prompt: "Why doesn’t Gavi’s existing Ebola vaccine stockpile help in the 2026 outbreak?",
        options: [
          "The stockpiled vaccine protects only against the Zaire species, not the Bundibugyo virus spreading now",
          "Gavi exhausted its emergency stockpile during the 2018–19 Kivu outbreak and never replenished it",
          "The vaccine doses in the stockpile expired in 2025 and have not yet been replaced by manufacturers",
          "Congo’s government has refused to allow Gavi-supplied vaccines into the country since 2023"
        ],
        correct: 0,
        explanation: "ERVEBO and Gavi’s Ebola stockpile target Zaire ebolavirus. Bundibugyo is a different species with no approved vaccine — a key gap this outbreak exposes."
      },
      {
        prompt: "Africa CDC is best described as…",
        options: [
          "An African branch of the United States CDC, funded primarily by programs out of Atlanta",
          "An international charity founded by Doctors Without Borders to fill gaps the WHO leaves behind",
          "The African Union’s own disease agency, which since 2022 can declare its own continental emergencies",
          "A department within the WHO’s regional office for Africa, headquartered in Brazzaville"
        ],
        correct: 2,
        explanation: "Created in 2017 after the 2014 Ebola disaster and made autonomous in 2022, Africa CDC reflects a push for African “health sovereignty” — including its own emergency declarations."
      }
    ]
  },

  "changes": {
    title: "USAID, the WHO & the Trump Administration",
    questions: [
      {
        prompt: "What happened to USAID and the U.S. role in the WHO in 2025–26?",
        options: [
          "Both USAID and U.S. WHO membership were expanded by an act of Congress in early 2025",
          "USAID was renamed but kept its budget, while the U.S. quietly increased its WHO contributions",
          "Congress voted in March 2025 to merge USAID and the CDC into a single new global health agency",
          "USAID was shut down in July 2025 and folded into the State Department; the U.S. completed its WHO withdrawal in January 2026"
        ],
        correct: 3,
        explanation: "USAID was dismantled by 1 July 2025 with most programs cancelled, and the U.S. finished leaving the WHO on 22 January 2026, ending its funding."
      },
      {
        prompt: "Which is the STRONGEST version of the argument FOR the changes?",
        options: [
          "That other countries do not deserve U.S. help because their governments cannot be trusted with money",
          "That foreign aid’s development record is mixed, burden-sharing was unequal, and U.S. money should serve Americans first",
          "That infectious diseases are no longer a serious global threat thanks to modern vaccines and antibiotics",
          "That private American charities can replace the entire U.S. aid budget without losing any capacity"
        ],
        correct: 1,
        explanation: "The strongest pro-change case rests on aid’s uncertain development record, unequal burden-sharing among rich nations, doubts about WHO independence, and “America First” sovereignty."
      },
      {
        prompt: "Which is the STRONGEST version of the argument AGAINST the changes?",
        options: [
          "That prevention is far cheaper than a pandemic, the human cost is large, and stepping back hands influence to China",
          "That the United States should pay for all global health forever, regardless of how other countries behave",
          "That foreign aid is the only thing that matters in U.S. foreign policy and trumps every other concern",
          "That the WHO is already a perfect institution that needs no reform of any kind from member states"
        ],
        correct: 0,
        explanation: "The strongest anti-change case stresses the bargain of prevention, large (modeled) human costs, real PEPFAR results, and the strategic vacuum rivals can fill."
      },
      {
        prompt: "How should you treat the estimate that the cuts caused “~332,000 deaths by mid-2025”?",
        options: [
          "As an exact, confirmed body count compiled from coroners’ reports across affected countries",
          "As a modeled estimate from Boston University researchers — serious, but a projection, and officially contested",
          "As an official U.S. government statistic published by the State Department after careful review",
          "As a number invented for political purposes with no underlying method that can be checked"
        ],
        correct: 1,
        explanation: "It comes from a Boston University model with published methodology. Take it seriously, but label it: note who produced it, that it’s a projection, and that officials disputed it."
      },
      {
        prompt: "What is the core approach of the “America First Global Health Strategy”?",
        options: [
          "Doubling U.S. cash contributions to the WHO and other multilateral health institutions",
          "Creating a brand-new global vaccine fund jointly with the European Union and Japan",
          "Replacing multilateral engagement with bilateral, time-limited agreements (MOUs) negotiated country by country",
          "Merging the U.S. CDC into the WHO so American expertise can directly shape its operations"
        ],
        correct: 2,
        explanation: "Announced in September 2025, it shifts U.S. global-health work away from multilateral institutions toward direct five-year agreements with individual countries."
      }
    ]
  },

  "obama-ebola": {
    title: "Looking Back: the 2014 Ebola Crisis",
    questions: [
      {
        prompt: "How did the U.S. under President Obama respond to the 2014 West Africa Ebola outbreak?",
        options: [
          "It imposed a total travel ban from West Africa and sent no military or civilian personnel to the region",
          "It sent money only, channeled entirely through the United Nations without any direct American involvement",
          "It waited for the African Union to act, providing only diplomatic encouragement from Washington",
          "It launched Operation United Assistance (~3,000 troops building treatment units) alongside a USAID-led civilian response"
        ],
        correct: 3,
        explanation: "About 3,000 troops built Ebola Treatment Units under Operation United Assistance, while USAID’s DART led the civilian effort and shipped 130,000 PPE sets."
      },
      {
        prompt: "Why did public-health experts oppose a broad travel ban during the 2014 crisis?",
        options: [
          "Evidence shows broad bans delay but don’t prevent spread, block health workers from reaching the outbreak, and push travel onto hidden routes",
          "Travel bans are explicitly outlawed by the International Health Regulations and would have triggered WHO sanctions",
          "There were already no commercial flights between the United States and West Africa, so any ban would have been symbolic",
          "A ban would have helped Ebola spread faster by forcing infected travelers into cargo holds with worse ventilation"
        ],
        correct: 0,
        explanation: "Experience with Ebola, H1N1, and later COVID-19 shows broad travel bans mostly delay arrival while disrupting responders and encouraging covert travel."
      },
      {
        prompt: "The ERVEBO vaccine that emerged from the 2014–2020 Ebola era…",
        options: [
          "Protects against all four human-disease species of Ebola, including the Bundibugyo strain in this outbreak",
          "Protects only against the Zaire species, so it does not help against the 2026 Bundibugyo outbreak",
          "Was withdrawn from the FDA’s approved-drug list in 2024 after safety concerns from long-term studies",
          "Is being deployed in eastern Congo right now and is the main reason the response is going well"
        ],
        correct: 1,
        explanation: "ERVEBO was approved in 2019 for Zaire ebolavirus. The 2026 outbreak is the Bundibugyo species, which has no approved vaccine — connecting back to Section 1."
      },
      {
        prompt: "Comparing the U.S. posture in 2014 and 2026, which statement is accurate?",
        options: [
          "The U.S. responses were essentially identical, with the same agencies and dollar amounts in both years",
          "The 2026 U.S. response has been larger and faster than 2014’s, drawing on lessons learned from the earlier crisis",
          "In 2014 USAID was operational with a deployed DART and an “Ebola czar”; by 2026 USAID was dismantled, no team was deployed, and the U.S. had left the WHO",
          "The U.S. used the military heavily in 2026 but kept its 2014 response purely civilian under USAID leadership"
        ],
        correct: 2,
        explanation: "The contrast is sharp: a large, coordinated 2014 response versus a 2026 posture with USAID gone, no disaster team deployed, leadership vacancies, and the U.S. outside the WHO."
      }
    ]
  },

  "final": {
    title: "Final Challenge",
    questions: [
      {
        prompt: "A virus spreading in one country quickly becomes other countries’ concern mainly because…",
        options: [
          "Pathogens travel with people and goods across borders, so no country can contain them alone",
          "The United Nations legally compels every country to accept refugees from any outbreak zone",
          "Modern viruses are engineered for political purposes by governments seeking strategic advantage",
          "Only countries with active trade agreements with the affected nation are at any real risk"
        ],
        correct: 0,
        explanation: "Disease moves with people and goods. That border-crossing nature is what makes outbreaks an international-relations problem."
      },
      {
        prompt: "Why is the 2026 Bundibugyo outbreak especially hard to control?",
        options: [
          "Because the virus has become airborne and now spreads through coughing and casual contact",
          "Because the case-fatality rate has reached 100%, leaving no survivors to develop natural immunity",
          "Because there’s no approved vaccine or treatment for Bundibugyo, and it’s spreading inside an active war zone",
          "Because only health workers can catch the virus, so the front line has no reinforcements"
        ],
        correct: 2,
        explanation: "Bundibugyo has no licensed vaccine or treatment, and the conflict in eastern Congo cripples the contact tracing and isolation that normally stop Ebola."
      },
      {
        prompt: "A “PHEIC” is…",
        options: [
          "The WHO’s highest alert level, declared by its Director-General for an extraordinary cross-border event",
          "A specialized military force that the African Union deploys to escort medical convoys",
          "A specific class of experimental vaccine reserved for the world’s most dangerous pathogens",
          "A binding international trade agreement that regulates the export of medical supplies"
        ],
        correct: 0,
        explanation: "A Public Health Emergency of International Concern is the WHO’s top alarm. This outbreak became the 8th ever on 17 May 2026."
      },
      {
        prompt: "The biggest practical reason the 2026 response is struggling on the ground is…",
        options: [
          "A worldwide shortage of trained epidemiologists left over from the COVID-19 response",
          "Armed conflict that blocks contact tracing — only about 21% of known contacts could be reached",
          "The virus has mutated to become airborne, escaping the usual containment playbook",
          "There are no qualified physicians or nurses anywhere in the affected region of Africa"
        ],
        correct: 1,
        explanation: "M23-controlled areas, roadblocks, and attacks on clinics made it impossible to follow most contacts — the core of any Ebola response."
      },
      {
        prompt: "“Soft power” in global health means…",
        options: [
          "Using a country’s military in quiet, deniable operations far from public attention",
          "Forcing recipient countries to accept aid packages they would otherwise have refused",
          "Maintaining a weak national currency that makes exports artificially cheap on world markets",
          "Gaining influence and goodwill by helping others — as the U.S. did with PEPFAR"
        ],
        correct: 3,
        explanation: "Soft power is influence through attraction. Health programs like PEPFAR built trust and standing for the U.S. abroad."
      },
      {
        prompt: "Most of the WHO’s budget comes from…",
        options: [
          "Mandatory dues shared equally among all 194 member countries each year",
          "Voluntary contributions that donors mostly earmark, which limits the WHO’s flexibility",
          "Ticket sales, investments, and licensing fees from research it publishes openly",
          "An annual block grant from the African Union and the European Union combined"
        ],
        correct: 1,
        explanation: "Only ~20% is predictable dues; ~80% is voluntary and largely earmarked, leaving little flexible money for emergencies."
      },
      {
        prompt: "In 2025–26, the United States…",
        options: [
          "Doubled its funding to the WHO and added several new global-health programs",
          "Created a new global vaccine agency to coordinate with European and Japanese partners",
          "Shut down USAID and completed its withdrawal from the WHO",
          "Rejoined every UN health body it had previously left during prior administrations"
        ],
        correct: 2,
        explanation: "USAID was dismantled by mid-2025 and the U.S. completed its WHO exit in January 2026 — the changes debated in Section 5."
      },
      {
        prompt: "When you read that aid cuts “caused 332,000 deaths,” the responsible way to treat that number is to…",
        options: [
          "Treat it as a modeled estimate — noting who produced it, the method, and that it is contested",
          "Repeat it as a confirmed fact, taken directly from coroners and hospital records",
          "Assume it is an official U.S. government statistic and quote it freely in any debate",
          "Ignore it completely, since modeled numbers cannot tell us anything useful at all"
        ],
        correct: 0,
        explanation: "It’s a projection from a Boston University model, disputed by officials. Good thinkers weigh such numbers and label them honestly."
      },
      {
        prompt: "The strongest argument FOR the U.S. changes is best summarized as…",
        options: [
          "That infectious diseases are no longer a serious threat in the modern era",
          "That other countries deserve to suffer because their governments are corrupt",
          "That the WHO does not really exist as a functioning institution anymore",
          "That aid’s development record is mixed, burden-sharing was unequal, and money should serve citizens first"
        ],
        correct: 3,
        explanation: "Steelmanned, the pro-change case rests on aid’s uncertain record, unequal burden-sharing, and sovereignty — being able to state it fairly is part of the skill."
      },
      {
        prompt: "Compared with the large 2014 U.S. response (troops, a DART team, an “Ebola czar”), the 2026 U.S. posture is…",
        options: [
          "Essentially identical, with the same agencies and dollar amounts in both years",
          "Much smaller — USAID dismantled, no disaster team deployed, and outside the WHO",
          "Larger and faster than in 2014, drawing on lessons learned from the earlier crisis",
          "Run entirely by the military, with no civilian or diplomatic component at all"
        ],
        correct: 1,
        explanation: "The 2014-vs-2026 comparison shows a sharp scaling back of U.S. involvement — the change at the heart of this whole case study."
      }
    ]
  }

};
