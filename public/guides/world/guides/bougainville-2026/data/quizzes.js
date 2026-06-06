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

  "what-bougainville-is": {
    title: "What Bougainville Is",
    questions: [
      {
        prompt: "Geographically, Bougainville belongs to which island chain?",
        options: [
          "The New Guinea mainland, sharing the same volcanic spine that runs west into Indonesian Papua and the Bird's Head",
          "The Solomon Islands archipelago — its political tie to PNG comes from an 1899 colonial trade, not geography",
          "The Bismarck Archipelago, the same group as New Britain and New Ireland off the northeast coast of mainland PNG",
          "The Micronesian island arc, alongside the Federated States of Micronesia and Palau in the central west Pacific"
        ],
        correct: 1,
        explanation: "Bougainville and Buka sit at the northwest end of the Solomons chain. They were tied to German New Guinea — and through it to PNG — by the 1899 Tripartite Convention rather than by geography."
      },
      {
        prompt: "Which event in 1899 set the colonial border that placed Bougainville under PNG's administration?",
        options: [
          "The Berlin Conference of 1884–85, which set out the European rules for partitioning Africa and parts of the Pacific into colonial spheres",
          "The Tripartite Convention, in which Germany kept Bougainville and Buka in exchange for British recognition of German Samoa",
          "The Treaty of Paris ending the Spanish-American War, which transferred the Philippines and Guam from Spanish to United States sovereignty",
          "The Second Hague Conference, which codified early ground rules for the conduct of warfare and the limits of colonial military expansion"
        ],
        correct: 1,
        explanation: "Under the 1899 Tripartite Convention, Germany ceded most of the Solomons (Choiseul, Santa Isabel, the Shortlands) to British administration but kept Bougainville and Buka in German New Guinea — the line that PNG inherited."
      },
      {
        prompt: "The 1988–98 Bougainville conflict was triggered most directly by:",
        options: [
          "A Sandline International mercenary contract that was secretly signed in 1996 by Prime Minister Julius Chan",
          "The 1975 unilateral declaration of the Republic of the North Solomons under leader Leo Hannett",
          "Landowner anger over the Panguna copper mine — pollution, royalty inequities, and mainland migrant labour",
          "Australia's withdrawal of UH-1 helicopter support to PNG's defence force in the late 1980s"
        ],
        correct: 2,
        explanation: "Landowner grievances around Panguna — environmental damage, tiny royalties, and the 'redskin' migrant-labour tensions — were the trigger. Francis Ona's 1988 sabotage campaign opened the war."
      },
      {
        prompt: "In the 2019 referendum, the share voting for independence and the turnout were approximately:",
        options: [
          "78.5% for independence on 98% turnout, broadly mirroring East Timor's 1999 result",
          "65.0% for independence on 60% turnout, comparable to a Quebec-style competitive vote",
          "98.8% for independence on 80% turnout, broadly mirroring South Sudan's 2011 result",
          "97.7% for independence on 87.4% turnout — one of the largest such margins on record"
        ],
        correct: 3,
        explanation: "176,928 of 181,067 valid ballots chose independence — 97.7% — on 87.4% turnout. The result is one of the largest in the modern history of self-determination referendums."
      }
    ]
  },

  "self-determination": {
    title: "Self-Determination in International Law",
    questions: [
      {
        prompt: "Which Charter provision protects 'the territorial integrity or political independence of any state' from outside force?",
        options: [
          "Article 1(2), which lists the broad UN purposes including the equal rights and self-determination of peoples",
          "Article 2(4), which binds states not to threaten or use force against each other's territory or independence",
          "Article 51, which preserves the inherent right of individual or collective self-defence following an armed attack on any UN member",
          "Article 55, which connects the principle of self-determination to the economic, social, and humanitarian conditions of stable peace"
        ],
        correct: 1,
        explanation: "Article 2(4) is the territorial-integrity rule. Crucially, its text reaches relations between states — not the question of internal secession by sub-state actors."
      },
      {
        prompt: "Under the 'saltwater thesis' that operationalised Resolution 1514, a territory qualified for the right to self-determination only if it was:",
        options: [
          "Already represented in the UN General Assembly by a recognised liberation movement of its own",
          "Officially listed as a UN Trust Territory under one of the postwar trusteeship agreements",
          "Located in Africa or Asia, the two regions where the post-1960 decolonisation wave was concentrated",
          "Geographically separated from the administering power and ethnically or culturally distinct from it"
        ],
        correct: 3,
        explanation: "The blue-water (or saltwater) test required overseas separation and cultural distinctness. It was pushed by the US in part to exclude Native American claims, and confined Resolution 1514 to overseas European empires."
      },
      {
        prompt: "The 2010 ICJ advisory opinion on Kosovo's declaration of independence held that:",
        options: [
          "International law contains no prohibition on declarations of independence — but the Court did not endorse a general right to secede",
          "Sub-state peoples have a positive legal entitlement to declare independence whenever a referendum has clearly demonstrated their political will",
          "Unilateral declarations of independence are categorically unlawful under the principle of territorial integrity codified in Article 2(4) of the Charter",
          "Recognition by a simple majority of UN member states is automatically sufficient to transform a UDI into full statehood under international law"
        ],
        correct: 0,
        explanation: "The Court found UDIs are not prohibited and that territorial integrity binds states, not sub-state actors. It declined to rule on a general right to secede — leaving the result permissive but not enabling."
      },
      {
        prompt: "'Remedial secession' is the doctrine that:",
        options: [
          "International recognition by a majority of UN member states retrospectively cures any procedural defects in a UDI and confers legal sovereignty",
          "A parent state must offer an autonomy referendum to its sub-state regions before any secession claim can be considered legally legitimate under treaty law",
          "Secession may be justified where the parent state has committed gross human-rights violations and blocked internal self-determination",
          "Once a peace agreement provides for a referendum, the referendum result automatically binds the parent state's parliament under international customary norms"
        ],
        correct: 2,
        explanation: "Most clearly developed by James Crawford, remedial secession activates only when a parent state has both committed gross abuses and blocked any internal self-determination route. The ICJ in Kosovo declined to endorse it."
      }
    ]
  },

  "road-to-2027": {
    title: "The Road to 2027",
    questions: [
      {
        prompt: "Under Section 342 of the PNG Constitution, the 2019 referendum result must be ratified by:",
        options: [
          "A binding two-thirds vote of the Autonomous Bougainville Government's House of Representatives",
          "Joint approval by the Australian government and the United Nations Security Council together",
          "The PNG National Parliament, which holds 'final decision-making authority' over the outcome",
          "A second confirmatory vote of Bougainvilleans, scheduled to follow the first by at least five years"
        ],
        correct: 2,
        explanation: "Section 342, added by the 2002 BPA-implementing amendments, gives the National Parliament 'final decision-making authority.' It does not, however, fix the voting threshold — which is the live political dispute."
      },
      {
        prompt: "PM Marape has publicly floated alternative status models for Bougainville. Which is the LEAST sovereignty-like of the three he has named?",
        options: [
          "Cook Islands–style free association with New Zealand: own parliament, NZ citizenship, NZ-handled defence, no UN seat",
          "The Republic of Singapore inside the wider Malaysian Federation, an arrangement that ended at independence in 1965",
          "ASEAN observer status pending a future application, with full membership conditional on a unanimous consensus of current members",
          "An East Timor–style UN trusteeship with a transitional administration appointed by the Security Council"
        ],
        correct: 0,
        explanation: "Free association — Cook Islands or Niue with New Zealand — is the model Marape names that least resembles full sovereignty: own domestic governance, but no UN seat and no independent defence."
      },
      {
        prompt: "The Melanesian Agreement, signed at Burnham in June 2025, did which of the following?",
        options: [
          "Set 1 September 2027 as the binding legal date of Bougainville's independence under both PNG and international law",
          "Granted Bougainville full observer status at the Melanesian Spearhead Group, replacing PNG as its representative",
          "Required PNG to lower its parliamentary ratification threshold from two-thirds down to a simple majority vote",
          "Recognised Bougainville's desire for independence as 'legitimate' and set up a sessional-order route to parliament"
        ],
        correct: 3,
        explanation: "The agreement's recognition language and the sessional-order mechanism were its two operative pieces. It explicitly did not settle the two-thirds threshold dispute — it tried to bypass it procedurally."
      },
      {
        prompt: "Why is the two-thirds-majority question central to whether Bougainville will get a Yes vote on 30 August 2026?",
        options: [
          "Because international law and UN General Assembly procedure require a supermajority in the parent state before any new state can be admitted to the United Nations",
          "Because two-thirds means roughly 79 of 118 MPs, and PNG MPs from regions with their own secession risks are nervous about a low bar",
          "Because the Bougainville Peace Agreement of 2001 explicitly fixed the threshold at exactly two-thirds of the National Parliament for the ratification vote",
          "Because Australia has conditioned the Pukpuk Treaty's entry into force on PNG using a two-thirds threshold for any change of national territory"
        ],
        correct: 1,
        explanation: "PNG's coalitions are fluid, and many MPs come from provinces with latent secession dynamics. The Diplomat's July 2025 analysis judged a two-thirds Yes 'unlikely' — which is why the sessional-order workaround matters."
      }
    ]
  },

  "panguna": {
    title: "Panguna and Resource Sovereignty",
    questions: [
      {
        prompt: "The Panguna Mine Legacy Impact Assessment, released in December 2024, found:",
        options: [
          "That environmental damage at Panguna had been overstated by earlier critics and that no urgent remediation work was required at the site",
          "That groundwater contamination had stabilised since the 1989 closure and posed no further risk to downstream communities",
          "That commercial restart of the mine could proceed safely without any preceding remediation of the existing tailings",
          "Imminent, life-threatening risks from collapsing infrastructure and ongoing contamination of the Jaba and Kawerong rivers"
        ],
        correct: 3,
        explanation: "The PMLIA, conducted by Tetra Tech Coffey, documented collapsing pit walls, river contamination, downstream flooding, and toxic chemicals in storage. Rio Tinto formally accepted the findings."
      },
      {
        prompt: "The Bougainville Mining Act of 2015 is unusual by global standards because it:",
        options: [
          "Authorises the Autonomous Bougainville Government to seize foreign mining assets without compensation under emergency powers",
          "Vests ownership of minerals on customary land in the customary landowners themselves, giving them a veto over licences",
          "Bans all foreign mining investment in Bougainville and reserves extraction rights to PNG-incorporated entities alone",
          "Requires every mining contract to be ratified by a binding referendum of all registered Bougainvillean voters first"
        ],
        correct: 1,
        explanation: "The 2015 Act vests mineral ownership in customary landowners and gives them a veto on exploration and mining licences — a deliberate response to the Panguna grievance."
      },
      {
        prompt: "In January 2026, Toroama directed BCL to pursue which company as Panguna's preferred mining partner?",
        options: [
          "Lloyds Metals and Energy of India, ending discussions with China Molybdenum (CMOC) over environmental concerns",
          "BHP of Australia, the company most familiar to PNG regulators and with the strongest in-region copper supply chains",
          "Vedanta Resources of the United Kingdom, which holds prior Pacific Rim copper-mining experience and a parent listing",
          "Glencore of Switzerland, the world's largest commodity trader and a long-standing major copper marketer"
        ],
        correct: 0,
        explanation: "The choice of Lloyds (India) over CMOC (China) was both an environmental signal — landowners cited CMOC's record — and a strategic alignment away from Chinese state mining capital."
      },
      {
        prompt: "What is the most credible argument AGAINST the Lloyds-over-CMOC choice from a pure financing standpoint?",
        options: [
          "That the choice violates the Bougainville Mining Act 2015 by overriding the landowners' veto authority on partner selection",
          "That India is procedurally barred under PNG law from owning equity in any PNG-licensed extractive operation",
          "That Lloyds is a mid-cap Indian iron-and-steel firm whose track record outside copper and South Asia is limited",
          "That CMOC's environmental record at Tenke Fungurume in Congo is fully cleaned up and presented no real risk"
        ],
        correct: 2,
        explanation: "Lloyds is a mid-cap Indian firm without a copper-major track record outside South Asia. Whether it can finance and operate a multi-billion-dollar copper restart is the open question — and the strongest 'economic independence first' argument for Marape."
      }
    ]
  },

  "pacific-geopolitics": {
    title: "Pacific Geopolitics",
    questions: [
      {
        prompt: "The Pukpuk Treaty, signed on 6 October 2025, is most accurately described as:",
        options: [
          "A trade-and-investment framework agreement between Australia and PNG with no defence commitments at all",
          "Australia's first new mutual-defence alliance in over 70 years — and PNG's first defence treaty ever",
          "A US-led trilateral pact that adds PNG to the existing ANZUS framework with Australia and New Zealand",
          "A regional climate-security compact that includes PNG, Fiji, and the Solomon Islands as full signatories"
        ],
        correct: 1,
        explanation: "The Pukpuk Treaty is a bilateral mutual-defence treaty including a citizen-recruitment clause. It is Australia's first new defence alliance since ANZUS in 1951 and PNG's first ever."
      },
      {
        prompt: "Australia has committed roughly AU$500 million to upgrade which strategic site, located in PNG's Manus Province?",
        options: [
          "Port Moresby's Jacksons International Airport, the country's main civil aviation hub and the DCA's headline facility",
          "Goroka airbase in the Highlands, which played a central role in the 1988–98 PNGDF Bougainville operations",
          "Wewak's coastal patrol facilities, the closest serviceable PNG defence base to the Indonesian Papua border line",
          "The Lombrum naval base, which the United States is already redeveloping under the 2023 Defense Cooperation Agreement"
        ],
        correct: 3,
        explanation: "Lombrum on Manus Island is being upgraded in parallel by Australia (~AU$500M) and the US (DCA-related infrastructure). It sits roughly equidistant from Bougainville, Indonesia's Maluku, and the southern Philippines."
      },
      {
        prompt: "In May 2026, Solomon Islands voters elected Matthew Wale as Prime Minister. He is notable for:",
        options: [
          "Pledging to apply for Solomon Islands membership of the Melanesian Spearhead Group at the 2026 summit cycle",
          "Publicly supporting the 2022 China security pact and seeking to formally expand it through a new framework agreement",
          "Having criticised the 2022 China security pact while in opposition and now reviewing its full classified text",
          "Endorsing the Bougival Accord and proposing a parallel free-association arrangement for Solomon Islands"
        ],
        correct: 2,
        explanation: "Wale criticised the 2022 China pact in opposition and is now reviewing it, calling for its full text to be made public. A more cautious Honiara reduces the appeal of a 'Melanesian China bloc' framing."
      },
      {
        prompt: "Which most accurately describes the status of France's Bougival Accord for New Caledonia as of June 2026?",
        options: [
          "The FLNKS independence movement withdrew within a month; the implementing referendum has been delayed indefinitely",
          "The Accord was approved by referendum in February 2026 and entered into force with full FLNKS backing",
          "The Accord was renegotiated in January 2026 into a new agreement that successfully reset the timeline through 2027",
          "The Accord was annulled by the French Constitutional Council on procedural grounds following a loyalist complaint"
        ],
        correct: 0,
        explanation: "FLNKS pulled support within a month of the July 2025 signing. The February 2026 implementing referendum was indefinitely delayed, and a January 2026 follow-on Elysée-Oudinot Accord has also stalled."
      }
    ]
  },

  "comparators": {
    title: "Four Comparators",
    questions: [
      {
        prompt: "What made East Timor's transition to independence possible after the 1999 referendum?",
        options: [
          "Indonesia's post-Suharto political crisis, Australian-led INTERFET military deployment, and explicit UN administration under UNTAET",
          "A US-led naval blockade of Indonesia plus direct Security Council enforcement under a Chapter VII resolution against Jakarta",
          "Portugal's reassertion of formal colonial sovereignty and its sustained negotiation of decolonisation on East Timor's behalf at the UN",
          "A Melanesian Spearhead Group peacekeeping deployment that took over from withdrawing Indonesian forces in late 1999"
        ],
        correct: 0,
        explanation: "The East Timor settlement rested on three conditions: Indonesia's Suharto-era crisis, INTERFET's Australian-led deployment, and UNTAET's UN administration. None of those conditions is clearly present for Bougainville in 2026."
      },
      {
        prompt: "South Sudan's trajectory after its 2011 independence is mainly a warning about:",
        options: [
          "How quickly an overwhelming Yes vote can be reversed by the parent state through a follow-on second referendum",
          "Why oil-export revenues alone cannot sustain a new state's basic government services through the first decade after independence",
          "How an overwhelming referendum can be followed by internal civil war when the post-independence political settlement fails",
          "Why African Union peacekeeping is fundamentally incompatible with strong central institutions in a newly independent state"
        ],
        correct: 2,
        explanation: "98.83% Yes in 2011, civil war by 2013, R-ARCSS power-sharing collapsing in 2026: the warning is that an overwhelming vote does not solve internal contradictions. Bougainville's internal settlement matters as much as the PNG vote."
      },
      {
        prompt: "Which of New Caledonia's three Nouméa Accord referendums is the most contested politically, and why?",
        options: [
          "The 2018 referendum, because the 43.3% Yes result was unexpectedly high for a first vote and split the unionist loyalist movement",
          "The 2021 referendum, because the FLNKS boycotted it during COVID restrictions, producing a 96.5% No on depressed turnout",
          "The 2020 referendum, because the 46.7% Yes result was so close it directly triggered the 2024 unrest within four years",
          "The 2017 referendum, because it was held without the formal authorisation of the French Constitutional Council"
        ],
        correct: 1,
        explanation: "The third (2021) referendum produced 96.5% No on a sharply depressed turnout after the FLNKS boycotted it during COVID restrictions. France treats the result as conclusive; the FLNKS does not — the disagreement that fuels every later step."
      },
      {
        prompt: "The Catalonia 2017 UDI is the comparator that most directly warns Bougainville about:",
        options: [
          "Calling an independence referendum without prior parent-state authorisation and risking criminal prosecution of all the organisers and regional leaders",
          "Allowing a single-party government to dominate the lead-up to a referendum and depressing minority turnout in the resulting count",
          "Holding an independence vote on the same date as a parent-state general election and confusing the political signal it generates",
          "Declaring independence unilaterally without parent-state consent and without a major-power sponsor — and getting zero recognitions"
        ],
        correct: 3,
        explanation: "Catalonia's 2017 UDI received zero international recognitions and was met with Article 155 cooptation. A 2027 Bougainville UDI without PNG consent and without an Australian or US sponsor lands closer to Catalonia than to East Timor."
      }
    ]
  },

  "final": {
    title: "Final Challenge",
    questions: [
      {
        prompt: "The structural grievance behind Bougainville's claim to leave PNG is most accurately:",
        options: [
          "Disagreement over fishing rights in the Solomon Sea between Bougainvillean and mainland PNG provincial governments",
          "A long-running PNG constitutional dispute over the relative powers of provincial and national governments",
          "An 1899 colonial trade that placed an island in the Solomons chain under German New Guinea, then PNG",
          "PNG's failure to ratify the 1982 UN Convention on the Law of the Sea (UNCLOS) on Bougainville's behalf"
        ],
        correct: 2,
        explanation: "The 1899 Tripartite Convention separated Bougainville and Buka from the rest of the Solomons chain by keeping them in German New Guinea. PNG inherited the line at independence in 1975 — the structural grievance."
      },
      {
        prompt: "Why does a 97.7% referendum result for independence not, on its own, create a sovereign state?",
        options: [
          "Because international law requires PNG's parliamentary ratification or recognition by other states for statehood to follow",
          "Because the United Nations only accepts members whose self-determination referendums clear a 99% Yes threshold under GA rules",
          "Because Bougainville is treated as geographically and constitutionally part of mainland PNG and is ineligible for separate UN membership",
          "Because a referendum result automatically expires after five years if not implemented by the parent state's parliament under customary law"
        ],
        correct: 0,
        explanation: "Sovereignty follows from parent-state consent or from recognition by other states. The Kosovo opinion makes UDIs lawful but not enabling — the 97.7% is political evidence of will, not a legal entitlement to statehood."
      },
      {
        prompt: "Which Charter article protects 'the territorial integrity or political independence of any state'?",
        options: [
          "Article 1(2), which lists the broad purposes of the UN including self-determination of peoples",
          "Article 51, which preserves the inherent right of self-defence following an armed attack on a member",
          "Article 55, which connects self-determination to the economic and social conditions of peace",
          "Article 2(4), which prohibits the threat or use of force against territory or political independence"
        ],
        correct: 3,
        explanation: "Article 2(4) is the territorial-integrity rule. The Kosovo opinion read it to apply between states — not as a prohibition on internal UDIs."
      },
      {
        prompt: "PM Marape's central argument for an alternative-status off-ramp is that:",
        options: [
          "Bougainville is too small in population to function effectively as a sovereign state in the major international institutions",
          "Economic independence must precede political independence — about 95% of Bougainville's budget depends on outside transfers",
          "PNG's Supreme Court has already ruled in a binding 2025 reference that any territorial change requires unanimous parliamentary approval",
          "The Pukpuk Treaty with Australia explicitly grants PNG a veto over any future change to PNG's national territory or borders"
        ],
        correct: 1,
        explanation: "Marape's slogan — 'economic independence must precede political independence' — points to Bougainville's dependence on PNG and donor transfers for roughly 95% of its budget. It is the strongest case for a free-association off-ramp."
      },
      {
        prompt: "Toroama's January 2026 Panguna decision was to:",
        options: [
          "Permanently close the Panguna mine and pursue independence on an agriculture and fisheries economic base",
          "Re-nationalise the mine under direct ABG ownership and refuse all foreign partnerships at the site",
          "Reject China Molybdenum (CMOC) in favour of India's Lloyds Metals as the preferred Panguna partner",
          "Accept Rio Tinto's offer of a US$2 billion remediation settlement as a precondition for any restart"
        ],
        correct: 2,
        explanation: "Toroama directed BCL to drop CMOC and pursue Lloyds (India) under a contract-mining model. It forecloses the most obvious financing path (Chinese state capital) and signals strategic alignment with the Quad-adjacent bloc."
      },
      {
        prompt: "Australia's first new defence alliance in over 70 years, signed on 6 October 2025, is with:",
        options: [
          "Japan, under a Pacific-focused supplement to the existing 2007 Australia–Japan security declaration framework",
          "Papua New Guinea, under the Pukpuk Mutual Defence Treaty signed by Albanese and Marape in Canberra",
          "The Solomon Islands, under a bilateral agreement that supersedes the 2022 China–Solomons security pact text",
          "The United Kingdom, under a new bilateral framework parallel to AUKUS and focused on the Indian Ocean"
        ],
        correct: 1,
        explanation: "The Pukpuk Treaty is Australia's first new defence alliance since ANZUS (1951) and PNG's first ever. It includes a mutual-defence clause and a citizen-recruitment provision."
      },
      {
        prompt: "Among Bougainville's potential first recognisers if no PNG ratification arrives by 2027, the strongest candidate is generally considered to be:",
        options: [
          "The United States, given its active Pacific posture, DCA access at Lombrum, and broader regional engagement",
          "Australia, which is bound by the Pukpuk Treaty to defer to PNG on questions of PNG's territorial status",
          "China, which would like to complicate any Western-aligned recognition path through procedural blocks",
          "Vanuatu, given its track record of supporting Melanesian self-determination claims like West Papua's"
        ],
        correct: 3,
        explanation: "Vanuatu has the strongest record of supporting Melanesian self-determination causes, especially West Papua. It has not yet made formal commitments specific to Bougainville. Australia and the US are constrained by their PNG relationships."
      },
      {
        prompt: "Comparing Bougainville with East Timor's path to independence, the key conditions that East Timor enjoyed and Bougainville does NOT clearly enjoy include:",
        options: [
          "Indonesia's post-Suharto political crisis, Australian-led INTERFET deployment, and direct UN administration under UNTAET",
          "Portuguese support for a sustained transition from colonial rule under UN supervision and ongoing oversight by Lisbon at the UN",
          "A binding Security Council resolution authorising decolonisation directly under Chapter VII of the UN Charter",
          "Vatican mediation between Indonesian and East Timorese leaders during the autonomy referendum negotiations and the militia violence"
        ],
        correct: 0,
        explanation: "East Timor depended on three conditions absent for Bougainville: Indonesia's post-Suharto crisis, INTERFET's military deployment, and UNTAET's UN administration. PNG is not in crisis, Australia is treaty-bound to it, and no UN administration is planned."
      },
      {
        prompt: "The Catalonia 2017 case is most relevant to Bougainville because it shows that:",
        options: [
          "A unilateral declaration of independence without parent-state consent and without a major-power sponsor produces legal cooptation, not sovereignty",
          "Holding an independence referendum on the same day as a national parliamentary election leads to depressed turnout and complicates legal interpretation",
          "Constitutional courts are universally willing to authorise referendums on independence if the underlying questions are clearly drafted and procedurally sound",
          "European Union membership automatically follows any successful unilateral declaration of independence within a current EU member state's territory"
        ],
        correct: 0,
        explanation: "Catalonia's UDI received zero recognitions and was met with Article 155 cooptation. The implication for a 2027 Bougainville UDI without PNG consent and without an Australian or US sponsor is structural, not just rhetorical."
      },
      {
        prompt: "PM Marape's most plausible reason for floating off-ramp status models is that:",
        options: [
          "He has identified a robust new tax base in Bougainville that would replace PNG transfers within a single fiscal year",
          "He believes the 2019 referendum was procedurally invalid and intends to challenge it in the PNG Supreme Court before the August 2026 vote",
          "A full-sovereignty Yes vote at a two-thirds parliamentary threshold is unlikely, so a free-association compromise is the only path to a Yes",
          "Australia has formally conditioned the Pukpuk Treaty's entry into force on PNG retaining full constitutional sovereignty over Bougainville"
        ],
        correct: 2,
        explanation: "A two-thirds parliamentary majority for full sovereignty looks unavailable. A free-association compromise — Cook Islands–style — is the structure most likely to win both a parliamentary majority and ABG acceptance, even if Toroama publicly rejects it."
      }
    ]
  }

};
