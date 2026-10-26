/**
 * PTE Central Question Bank & Dynamic Loader Engine (v8.0 Grand Finale)
 * 기본 내장 300문제 + 사용자 직접 추가(localStorage) 문제 자동 통합 엔진
 */

const PTE_BUILTIN_BANK = {


  // 8. Summarize Spoken Text (10문제)
  sst: [
    {
      id: "SST-01",
      title: "Ocean Acidification and Marine Life",
      lecture: "Today we will examine the chemical consequences of atmospheric carbon dioxide dissolving into marine waters. Over the past two centuries, oceans have absorbed roughly thirty percent of anthropogenic emissions, triggering a measurable decline in pH known as ocean acidification. This chemical shift reduces carbonate ion saturation, making it difficult for calcifying organisms such as corals and pteropods to synthesize their calcium carbonate skeletons. As these keystone species struggle, the entire marine food web faces structural destabilization.",
      keywords: ["carbon dioxide", "acidification", "ph", "carbonate", "corals", "marine", "skeletons", "ecosystem"],
      modelSummary: "The lecture explains that ocean acidification occurs as marine waters absorb substantial atmospheric carbon dioxide emissions. This chemical process significantly lowers ocean pH levels and diminishes carbonate ion availability, which impairs the skeletal development of corals and shellfish. Consequently, the destabilization of these keystone calcifiers poses an urgent threat to global marine ecosystems."
    },
    {
      id: "SST-02",
      title: "The Industrialization of Agriculture",
      lecture: "Throughout human history, agricultural productivity was constrained by manual labor and seasonal draft animals. The advent of internal combustion engines and synthetic nitrogen fertilizer in the twentieth century fundamentally industrialized farming practices. While these innovations drove unprecedented food production, they also precipitated severe environmental externalities, including soil degradation, aquatic eutrophication from fertilizer runoff, and a loss of genetic crop diversity.",
      keywords: ["agricultural", "productivity", "fertilizer", "industrialized", "nitrogen", "soil", "eutrophication", "crop"],
      modelSummary: "The speaker discusses how twentieth-century mechanization and synthetic nitrogen fertilizers transformed traditional agriculture into an industrialized system. Although these technological advancements dramatically expanded global crop yields, they simultaneously created severe environmental challenges such as soil depletion, water pollution from chemical runoff, and diminished agricultural biodiversity."
    },
    {
      id: "SST-03",
      title: "Cognitive Dissonance in Decision Making",
      lecture: "Leon Festinger introduced the concept of cognitive dissonance to describe the mental discomfort individuals experience when holding two psychologically incompatible cognitions. When our actions clash with our self-concept or core values, we feel compelled to restore internal harmony. Rather than acknowledging mistakes, humans routinely rationalize their behavior, reframe negative outcomes, or reject contradictory factual evidence.",
      keywords: ["cognitive", "dissonance", "discomfort", "values", "harmony", "rationalize", "evidence", "behavior"],
      modelSummary: "The lecture explores cognitive dissonance as the psychological tension arising when an individual's actions conflict with their underlying beliefs. To alleviate this uncomfortable inconsistency, people frequently employ subconscious defense mechanisms, such as rationalizing problematic decisions or disregarding opposing empirical evidence, rather than altering their original self-image."
    },
    {
      id: "SST-04",
      title: "Superconductivity and Power Grids",
      lecture: "Conventional electric power transmission suffers from substantial energy losses caused by the natural resistance of copper and aluminum wiring. Superconductivity represents a physical state where certain materials transmit electrical current with absolute zero resistance when chilled below critical temperatures. If scientists succeed in synthesizing materials that exhibit superconductivity at ambient temperatures, it would revolutionize power distribution and quantum computing.",
      keywords: ["superconductivity", "resistance", "electricity", "temperature", "power", "grids", "quantum", "energy"],
      modelSummary: "The presentation examines superconductivity, a unique physical state where materials conduct electricity without any resistive energy loss below specific critical temperatures. Achieving room-temperature superconductivity would overcome the transmission inefficiencies of traditional metal wiring, fundamentally transforming global electrical infrastructure and accelerating quantum computational architectures."
    },
    {
      id: "SST-05",
      title: "Antibiotic Misuse and Superbugs",
      lecture: "The discovery of antibiotics transformed once-fatal bacterial infections into manageable clinical conditions. However, decades of overprescribing in human medicine and widespread prophylactic use in industrial livestock operations have exerted immense selective pressure on bacterial populations. As resistant superbugs multiply, the global healthcare community faces the alarming prospect of a post-antibiotic era.",
      keywords: ["antibiotics", "bacterial", "resistant", "superbugs", "prescribing", "livestock", "healthcare", "infections"],
      modelSummary: "The speaker warns about the consequences of chronic antibiotic overuse in both clinical healthcare and agricultural livestock rearing. This persistent selective pressure has accelerated the emergence of multi-drug resistant superbugs, threatening to render routine surgical procedures life-threatening and plunging modern medicine into a vulnerable post-antibiotic era."
    },
    {
      id: "SST-06",
      title: "Circadian Rhythms and Modern Lighting",
      lecture: "Circadian rhythms are endogenous biological oscillations tuned to the twenty-four-hour solar cycle, governed by the suprachiasmatic nucleus in the brain. The pervasive presence of artificial blue light emitted by smartphones and LED fixtures suppresses nighttime melatonin secretion. Chronically disrupted circadian clocks contribute to sleep deficits, impaired metabolic regulation, and heightened risks of mood disorders.",
      keywords: ["circadian", "rhythms", "light", "melatonin", "sleep", "suprachiasmatic", "metabolic", "disorders"],
      modelSummary: "The lecture highlights the vulnerability of human circadian rhythms to artificial light exposure in modern environments. Widespread evening use of blue-light-emitting screens suppresses natural melatonin synthesis, disturbing sleep architecture and substantially increasing long-term susceptibility to chronic metabolic illnesses and psychological affective disorders."
    },
    {
      id: "SST-07",
      title: "The Silk Road and Cultural Exchange",
      lecture: "The Silk Road is frequently conceptualized purely as an ancient commercial highway for Chinese silk and central Asian spices. In reality, this transcontinental network served primarily as an intellectual corridor through which scientific knowledge, metallurgical techniques, and world religions traveled across Eurasia. Monks, envoys, and scholars facilitated a vibrant exchange of philosophical ideas that profoundly shaped civilizations.",
      keywords: ["silk road", "trade", "cultural", "religions", "eurasia", "knowledge", "scholars", "civilizations"],
      modelSummary: "The speaker argues that the historical Silk Road was far more than a conventional mercantile trade route for luxury goods. Instead, it functioned as an essential intercultural conduit across Eurasia, enabling the transcontinental diffusion of technological innovations, astronomical treatises, artistic styles, and major religious traditions among diverse civilizations."
    },
    {
      id: "SST-08",
      title: "Urban Heat Island Mitigation",
      lecture: "Dense urban environments absorb and trap thermal energy due to dark asphalt paving and heat-retaining concrete structures, creating urban heat islands. To alleviate dangerous heat stress among vulnerable populations, modern civil engineers are deploying high-albedo reflective pavements and expansive green roofs. Incorporating vegetative buffers into urban planning lowers surface temperatures and reduces commercial cooling energy demand.",
      keywords: ["urban", "heat", "island", "asphalt", "temperatures", "green roofs", "pavements", "energy"],
      modelSummary: "The presentation examines the urban heat island effect, wherein metropolitan centers experience elevated temperatures due to heat-absorbing construction materials and minimal vegetation. Urban planners are actively mitigating this thermal burden by retrofitting vegetative rooftop gardens and reflective pavement coatings, which together reduce cooling demands and safeguard public health."
    },
    {
      id: "SST-09",
      title: "Behavioral Economics and Default Options",
      lecture: "Classical economic models assume people make active, rational decisions across all financial domains. In contrast, behavioral economists have documented the immense power of defaults. When organizations shift retirement savings programs from voluntary opt-in to automatic opt-out enrollment, participation rates skyrocket from under forty percent to over eighty percent, demonstrating that status quo inertia heavily dictates human behavior.",
      keywords: ["behavioral", "economics", "default", "retirement", "opt-out", "inertia", "rational", "savings"],
      modelSummary: "The lecture demonstrates how behavioral default architecture exerts a profound influence on human financial decision-making. By altering corporate retirement enrollment mechanisms from voluntary opt-in to automatic enrollment, employers leverage natural status quo inertia to dramatically elevate institutional savings participation rates across broad demographic groups."
    },
    {
      id: "SST-10",
      title: "Renewable Energy Grid Integration",
      lecture: "Integrating high shares of wind and solar power into traditional electrical grids introduces severe transmission variability. Because sunlight peaks at midday while wind fluctuates unpredictably, grid operators must balance supply with consumer demand curves in real time. Solving this intermittency requires deploying advanced pumped hydro facilities, lithium battery banks, and AI-driven predictive demand forecasting.",
      keywords: ["renewable", "grid", "intermittency", "solar", "wind", "battery", "storage", "forecasting"],
      modelSummary: "The speaker analyzes the operational challenges of incorporating high penetrations of intermittent renewable generation into national power grids. Maintaining real-time electrical stability requires deploying complementary grid-scale storage technologies, such as battery facilities and pumped hydro storage, supported by predictive artificial intelligence forecasting algorithms."
    }
  ],

  // 9. Highlight Incorrect Words (10문제)
  hiw: [
    {
      id: "HIW-01",
      title: "Economic Globalization",
      spokenAudio: "Economic globalization has connected international financial markets and accelerated cross-border trade. However, it has also magnified systemic volatility during unexpected geopolitical crises.",
      writtenText: "Economic globalization has connected domestic financial markets and accelerated cross-border trade. However, it has also reduced systemic volatility during unexpected geopolitical crises.",
      incorrectWords: [
        { index: 3, written: "domestic", spoken: "international" },
        { index: 12, written: "reduced", spoken: "magnified" }
      ]
    },
    {
      id: "HIW-02",
      title: "Solar Photovoltaic Efficiency",
      spokenAudio: "Commercial solar panels convert solar radiation into clean electricity with rising efficiency. Recent manufacturing breakthroughs have significantly lowered production expenses across the industry.",
      writtenText: "Commercial solar panels absorb solar radiation into clean electricity with rising efficiency. Recent manufacturing breakthroughs have significantly raised production expenses across the industry.",
      incorrectWords: [
        { index: 3, written: "absorb", spoken: "convert" },
        { index: 12, written: "raised", spoken: "lowered" }
      ]
    },
    {
      id: "HIW-03",
      title: "Linguistic Endangered Languages",
      spokenAudio: "Thousands of native languages are currently endangered due to rapid modernization. When a community abandons its mother tongue, invaluable cultural wisdom is permanently lost.",
      writtenText: "Thousands of foreign languages are currently endangered due to rapid modernization. When a community defends its mother tongue, invaluable cultural wisdom is permanently lost.",
      incorrectWords: [
        { index: 2, written: "foreign", spoken: "native" },
        { index: 11, written: "defends", spoken: "abandons" }
      ]
    },
    {
      id: "HIW-04",
      title: "Neuroscience of Memory",
      spokenAudio: "Memory consolidation requires adequate rest following intensive cognitive learning. During slow-wave sleep, temporary neural connections are transferred to the cerebral cortex for permanent storage.",
      writtenText: "Memory consolidation requires adequate exercise following intensive cognitive learning. During slow-wave sleep, temporary neural connections are transferred to the spinal cortex for permanent storage.",
      incorrectWords: [
        { index: 3, written: "exercise", spoken: "rest" },
        { index: 14, written: "spinal", spoken: "cerebral" }
      ]
    },
    {
      id: "HIW-05",
      title: "Urban Mass Transit",
      spokenAudio: "Expanding underground subway corridors reduces vehicular congestion in crowded metropolitan districts. Reliable public transit encourages citizens to leave private automobiles at home.",
      writtenText: "Expanding underground highway corridors reduces vehicular congestion in crowded metropolitan districts. Reliable public transit discourages citizens to leave private automobiles at home.",
      incorrectWords: [
        { index: 2, written: "highway", spoken: "subway" },
        { index: 12, written: "discourages", spoken: "encourages" }
      ]
    },
    {
      id: "HIW-06",
      title: "Marine Coral Reef Protection",
      spokenAudio: "Warmer sea temperatures trigger severe coral bleaching across fragile tropical reefs. Protecting marine sanctuaries allows depleted fish populations to recover naturally without commercial interference.",
      writtenText: "Warmer sea currents trigger severe coral bleaching across fragile tropical reefs. Destroying marine sanctuaries allows depleted fish populations to recover naturally without commercial interference.",
      incorrectWords: [
        { index: 2, written: "currents", spoken: "temperatures" },
        { index: 9, written: "Destroying", spoken: "Protecting" }
      ]
    },
    {
      id: "HIW-07",
      title: "Agricultural Water Irrigation",
      spokenAudio: "Modern precision agriculture utilizes underground drip irrigation to minimize water evaporation in arid climates. This targeted approach improves harvest quality while conserving municipal reservoirs.",
      writtenText: "Modern precision agriculture utilizes underground overhead irrigation to minimize water pollution in arid climates. This targeted approach improves harvest quality while conserving municipal reservoirs.",
      incorrectWords: [
        { index: 5, written: "overhead", spoken: "drip" },
        { index: 9, written: "pollution", spoken: "evaporation" }
      ]
    },
    {
      id: "HIW-08",
      title: "Antibiotic Stewardship",
      spokenAudio: "Strict regulatory oversight of antimicrobial drugs prevents the rapid proliferation of resistant superbugs. Medical practitioners must avoid prescribing antibiotics for ordinary viral infections.",
      writtenText: "Strict regulatory oversight of antimicrobial drugs promotes the rapid proliferation of resistant superbugs. Medical practitioners must encourage prescribing antibiotics for ordinary viral infections.",
      incorrectWords: [
        { index: 5, written: "promotes", spoken: "prevents" },
        { index: 13, written: "encourage", spoken: "avoid" }
      ]
    },
    {
      id: "HIW-09",
      title: "Space Satellite Debris",
      spokenAudio: "Decommissioned satellites orbiting Earth pose severe collision hazards for active telecommunication networks. Engineers are designing robotic grappling systems to capture and deorbit large space debris.",
      writtenText: "Decommissioned satellites orbiting Earth pose minor collision hazards for active telecommunication networks. Engineers are designing robotic laser systems to capture and deorbit large space debris.",
      incorrectWords: [
        { index: 4, written: "minor", spoken: "severe" },
        { index: 12, written: "laser", spoken: "grappling" }
      ]
    },
    {
      id: "HIW-10",
      title: "Renewable Battery Storage",
      spokenAudio: "Large-scale battery facilities store excess electricity during sunny afternoons and discharge power during evening peak hours. This infrastructure balances intermittent renewable output across the national grid.",
      writtenText: "Large-scale battery facilities store excess electricity during windy afternoons and discharge power during morning peak hours. This infrastructure balances intermittent renewable output across the national grid.",
      incorrectWords: [
        { index: 5, written: "windy", spoken: "sunny" },
        { index: 11, written: "morning", spoken: "evening" }
      ]
    }
  ],

  // 10. Retell Lecture (10문제)
  rl: [
    {
      id: "RL-01",
      title: "The Industrialization of Modern Agriculture",
      lecture: "In this lecture, we examine how twentieth-century agriculture transformed from labor-intensive family farming into a globalized industrial sector. The introduction of synthetic Haber-Bosch fertilizers and mechanical tractors enabled unprecedented crop yields, allowing humanity to feed billions. However, this production miracle caused severe environmental externalities, including chemical runoff into aquatic ecosystems, severe topsoil erosion, and dangerous declines in genetic crop diversity.",
      keywords: ["agriculture", "fertilizers", "tractors", "yields", "environmental", "runoff", "erosion", "diversity"],
      template: "1. The speaker provided informative analysis about modern agricultural industrialization.\n2. He highlighted that synthetic fertilizers and mechanized equipment dramatically boosted crop yields.\n3. Furthermore, he emphasized significant environmental drawbacks such as chemical runoff and topsoil erosion.\n4. In conclusion, the lecture illustrates the dual nature of technological transformation in food production."
    },
    {
      id: "RL-02",
      title: "Ocean Acidification and Calcifying Organisms",
      lecture: "Our focus today is on ocean acidification, a direct consequence of rising atmospheric carbon dioxide. When marine waters absorb industrial emissions, chemical reactions lower seawater pH and deplete carbonate ions. These ions are the fundamental building blocks corals and shellfish require to form their protective calcium carbonate shells. Without adequate carbonate, reef ecosystems deteriorate, threatening coastal protection and global marine fisheries.",
      keywords: ["ocean", "acidification", "carbon dioxide", "ph", "corals", "carbonate", "shellfish", "ecosystems"],
      template: "1. The main topic of the lecture was ocean acidification driven by carbon emissions.\n2. The professor stated that declining seawater pH drastically reduces available carbonate ions.\n3. Consequently, calcifying organisms such as corals and shellfish struggle to build protective shells.\n4. Overall, the speaker concluded that this process undermines the foundation of global marine food chains."
    },
    {
      id: "RL-03",
      title: "Cognitive Dissonance and Self-Justification",
      lecture: "Psychologists define cognitive dissonance as the acute discomfort we feel when our behaviors contradict our core self-concept. When individuals make poor choices that clash with their self-image as rational beings, they experience intense psychological tension. Instead of acknowledging errors, people routinely invent rationalizations, minimize harmful consequences, or blame external circumstances to preserve their self-esteem.",
      keywords: ["cognitive dissonance", "psychological", "tension", "rationalize", "behaviors", "self-image", "errors", "discomfort"],
      template: "1. The lecture delivered insightful perspectives on the psychology of cognitive dissonance.\n2. The speaker explained that mental tension arises when actions contradict personal values.\n3. He also mentioned that individuals frequently rationalize mistakes rather than accepting accountability.\n4. In summary, the presentation proved how subconscious defense mechanisms protect human self-esteem."
    },
    {
      id: "RL-04",
      title: "Superconductivity and Zero Resistance",
      lecture: "Standard power distribution networks lose up to ten percent of generated electricity as heat due to metal resistance. Superconductors solve this by conducting current with zero electrical resistance below a critical temperature. Physicists are racing to synthesize room-temperature superconducting materials, which would revolutionize high-speed magnetic levitation trains, compact MRI scanners, and lossless national energy grids.",
      keywords: ["superconductivity", "resistance", "electricity", "temperature", "power grids", "trains", "energy", "lossless"],
      template: "1. The talk centered on superconductivity and its potential to revolutionize power distribution.\n2. The speaker pointed out that superconducting materials conduct electricity with zero resistance below critical temperatures.\n3. He discussed practical applications including high-speed maglev trains and energy-efficient electrical grids.\n4. To conclude, achieving room-temperature superconductivity will trigger profound technological breakthroughs."
    },
    {
      id: "RL-05",
      title: "Circadian Rhythms and Sleep Architecture",
      lecture: "Human circadian biology is governed by an internal pacemaker in the brain called the suprachiasmatic nucleus. This biological clock synchronizes hormone release, digestion, and body temperature to the twenty-four-hour day. Widespread exposure to evening artificial blue light from digital screens suppresses melatonin secretion, fracturing deep slow-wave sleep and increasing susceptibility to metabolic and cardiovascular disorders.",
      keywords: ["circadian rhythms", "sleep", "melatonin", "light", "suprachiasmatic", "hormones", "metabolic", "health"],
      template: "1. The professor discussed human circadian rhythms and the regulation of natural sleep cycles.\n2. She noted that the brain's internal clock orchestrates hormone release and metabolic function.\n3. In addition, she warned that artificial evening blue light suppresses melatonin and degrades deep sleep.\n4. In conclusion, preserving natural light-dark cycles is essential for long-term physiological health."
    },
    {
      id: "RL-06",
      title: "The Historical Significance of the Silk Road",
      lecture: "Historians have long reevaluated the ancient Silk Road beyond its mercantile trade in luxury silk and spices. This transcontinental conduit facilitated the exchange of metallurgical techniques, astronomical treatises, and medical manuscripts across Eurasia. More importantly, world religions and philosophical traditions traveled with merchant caravans, profoundly transforming the intellectual landscapes of East and West.",
      keywords: ["silk road", "trade", "cultural exchange", "religions", "eurasia", "manuscripts", "civilizations", "history"],
      template: "1. The speaker provided a comprehensive overview of the historical significance of the Silk Road.\n2. He highlighted that the transcontinental route served as an intellectual and technological corridor.\n3. Furthermore, he emphasized that major religions and scientific treatises crossed Eurasia via merchant networks.\n4. Overall, the lecture underscored how ancient intercultural connectivity shaped modern world history."
    },
    {
      id: "RL-07",
      title: "Urban Heat Island Mitigation Strategies",
      lecture: "Metropolitan centers suffer from the urban heat island effect because dark asphalt roadways and concrete towers trap solar radiation. Elevated temperatures increase residential energy demands for air conditioning and exacerbate heat-related illnesses. Civil engineers recommend urban cooling strategies, including high-albedo reflective roof coatings, extensive vegetative tree canopies, and permeable pavements that dissipate heat through evaporation.",
      keywords: ["urban heat island", "temperatures", "asphalt", "reflective", "green roofs", "pavements", "cooling", "mitigation"],
      template: "1. The lecture examined urban heat island phenomena and engineering mitigation techniques.\n2. The speaker noted that dark asphalt and concrete structures trap substantial solar radiation in cities.\n3. She recommended implementing vegetative green roofs and reflective pavements to lower ambient temperatures.\n4. In summary, sustainable municipal architecture is vital for reducing urban heat stress and energy use."
    },
    {
      id: "RL-08",
      title: "Behavioral Default Architecture in Public Policy",
      lecture: "Behavioral economics demonstrates that default settings heavily influence human choices due to cognitive inertia. In retirement savings programs, changing the default from an active opt-in requirement to automatic opt-out enrollment more than doubles worker participation rates. Governments are now leveraging subtle choice architecture and nudges to boost organ donation rates and promote energy-efficient consumer appliances.",
      keywords: ["behavioral economics", "default", "nudges", "retirement", "opt-out", "inertia", "public policy", "savings"],
      template: "1. The talk explored behavioral economics and the influential role of default choice architecture.\n2. The professor demonstrated that automatic opt-out defaults dramatically increase retirement savings participation.\n3. He also discussed how policymakers use subtle nudges to achieve positive social and environmental outcomes.\n4. To conclude, strategic default design is a powerful, low-cost tool for shaping public behavior."
    },
    {
      id: "RL-09",
      title: "Antibiotic Resistance and Evolutionary Adaptation",
      lecture: "Antibiotics represent one of humanity's greatest therapeutic triumphs, yet their overuse has created an escalating public health crisis. Exposing bacterial colonies to sub-lethal antibiotic concentrations selectively favors naturally resistant mutants, which proliferate and share resistance genes via horizontal gene transfer. Without stringent antimicrobial stewardship and fresh drug discovery pipelines, previously routine bacterial infections could become incurable.",
      keywords: ["antibiotic resistance", "bacteria", "evolution", "superbugs", "mutants", "stewardship", "healthcare", "incurable"],
      template: "1. The lecture focused on the evolutionary mechanisms driving global antibiotic resistance.\n2. The speaker explained that chronic drug overuse selectively accelerates the multiplication of resistant mutants.\n3. Furthermore, he stressed the alarming prospect of routine infections becoming untreatable in hospitals.\n4. In conclusion, rigorous clinical stewardship and novel antibiotic discovery are urgently required."
    },
    {
      id: "RL-10",
      title: "Renewable Energy Intermittency and Storage",
      lecture: "Transitioning away from fossil fuels requires managing the inherent intermittency of wind and solar power generation. Solar output ceases at nightfall, precisely when peak residential demand spikes, creating a supply-demand mismatch known as the duck curve. Stabilizing national grids requires combining utility-scale lithium-ion battery banks with pumped hydroelectric storage and AI-powered dynamic demand-response networks.",
      keywords: ["renewable energy", "intermittency", "solar", "wind", "battery storage", "grid stability", "hydro", "duck curve"],
      template: "1. The speaker provided technical insights into renewable energy intermittency and grid integration.\n2. He highlighted the mismatch between daytime solar generation and evening peak consumer demand.\n3. He also emphasized the necessity of deploying large-scale battery facilities and pumped hydro storage.\n4. Overall, the lecture proved that versatile storage infrastructure is essential for a zero-carbon energy grid."
    }
  ],

  // 7. Re-order Paragraphs (15문제 - 인접 쌍 공식 채점)
  rop: [
    {
      id: "ROP-01",
      title: "Sustainable Architecture Movement",
      paragraphs: [
        { label: "A", text: "However, traditional construction methods relied heavily on carbon-intensive concrete and non-recyclable insulation." },
        { label: "B", text: "Modern architects are increasingly embracing sustainable design principles to minimize the ecological footprint of buildings." },
        { label: "C", text: "To overcome this legacy, contemporary builders now prioritize timber engineering and solar-integrated facades." },
        { label: "D", text: "These green innovations not only reduce operational emissions but also create healthier indoor environments." }
      ],
      correctOrder: ["B", "A", "C", "D"],
      explanation: "첫 문장(B)은 화두를 제시하는 독립적 주제문입니다. (A)의 'However'가 전통 건축의 문제점을 지적하며 이어지고, (C)의 'To overcome this legacy'가 해결책을 제시하며, 마지막 (D)의 'These green innovations'가 결론적 혜택을 정리합니다."
    },
    {
      id: "ROP-02",
      title: "The Invention of Paper and Printing",
      paragraphs: [
        { label: "A", text: "Consequently, the distribution of religious and philosophical literature expanded across continental Europe." },
        { label: "B", text: "Before the fifteenth century, books were laboriously hand-copied by scribes in monastic scriptoriums." },
        { label: "C", text: "This tedious manual process made manuscripts extremely scarce and prohibitively expensive for common citizens." },
        { label: "D", text: "Johannes Gutenberg disrupted this paradigm by introducing movable metal type and oil-based printing ink." }
      ],
      correctOrder: ["B", "C", "D", "A"],
      explanation: "(B)가 15세기 이전 수필 복사의 역사적 배경을 제시합니다. (C)의 'This tedious manual process'가 (B)를 받아 비용 문제를 지적하고, (D)가 구텐베르크의 혁신적 해결책을 제시하며, (A)의 'Consequently'가 도서 보급 확산의 결과로 이어집니다."
    },
    {
      id: "ROP-03",
      title: "Renewable Energy and Grid Storage",
      paragraphs: [
        { label: "A", text: "Utility operators are therefore deploying grid-scale battery systems to store surplus power generated during sunny afternoons." },
        { label: "B", text: "Solar photovoltaic panels and wind turbines have seen unprecedented price reductions over the past decade." },
        { label: "C", text: "This stored electricity is subsequently fed back into the regional grid when residential demand surges after sunset." },
        { label: "D", text: "Despite this cost advantage, renewable generation remains inherently dependent on shifting weather conditions." }
      ],
      correctOrder: ["B", "D", "A", "C"],
      explanation: "(B)가 태양광·풍력 가격 하락을 소개하는 독립문입니다. (D)의 'Despite this cost advantage'가 날씨 의존성이라는 한계를 제시하고, (A)의 'therefore'가 배터리 저장 대책을 설명하며, (C)의 'This stored electricity'가 방전 활용으로 마무리됩니다."
    },
    {
      id: "ROP-04",
      title: "Antarctic Ice Core Analysis",
      paragraphs: [
        { label: "A", text: "Glaciologists drill deep into the polar ice sheet to extract cylindrical ice cores spanning hundreds of thousands of years." },
        { label: "B", text: "Trapped within these ancient ice layers are tiny atmospheric air bubbles preserved from prehistoric eras." },
        { label: "C", text: "By analyzing the isotopic composition of these gases, researchers can reconstruct past temperatures and greenhouse gas concentrations." },
        { label: "D", text: "Such historical climate records provide essential baseline data for calibrating predictive global warming models." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)에서 빙하 코어 시추 작업을 설명합니다. (B)의 'Trapped within these ancient ice layers'가 (A)의 얼음을 받아 기포 존재를 설명하고, (C)의 'these gases'가 화학 분석을 연결하며, (D)의 'Such historical climate records'가 기후 모델 검증의 결론을 짓습니다."
    },
    {
      id: "ROP-05",
      title: "Behavioral Loss Aversion",
      paragraphs: [
        { label: "A", text: "Standard neoclassical economics presumes that investors evaluate financial gains and losses symmetrically." },
        { label: "B", text: "Empirical studies in behavioral finance, however, reveal a pronounced psychological asymmetry." },
        { label: "C", text: "Specifically, individuals feel the emotional pain of losing one hundred dollars roughly twice as intensely as the joy of gaining the same amount." },
        { label: "D", text: "This cognitive bias, known as loss aversion, frequently leads traders to hold losing positions far too long." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 고전 경제학의 대칭적 평가 가정을 소개합니다. (B)의 'however'가 심리학적 비대칭성을 반박하고, (C)의 'Specifically'가 100달러 손실의 구체적 고통을 예시로 들며, (D)의 'This cognitive bias'가 손실 회피라는 명칭과 투자 행태로 귀결됩니다."
    },
    {
      id: "ROP-06",
      title: "Deep Sea Hydrothermal Vents",
      paragraphs: [
        { label: "A", text: "In 1977, oceanographers exploring the Galápagos Rift discovered superheated mineral geysers on the ocean floor." },
        { label: "B", text: "Surrounding these pitch-black hydrothermal vents were dense communities of giant tube worms and blind shrimp." },
        { label: "C", text: "Because sunlight cannot penetrate miles beneath the ocean surface, these creatures cannot rely on photosynthesis." },
        { label: "D", text: "Instead, specialized chemotrophic bacteria oxidize toxic hydrogen sulfide to form the base of this unique food chain." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 1977년 해저 열수구 발견을 소개하는 도입부입니다. (B)의 'these pitch-black hydrothermal vents'가 생물 군집을 묘사하고, (C)가 햇빛 부족으로 인한 광합성 불가 문제를 지적하며, (D)의 'Instead'가 화학합성 박테리아의 대안 메커니즘을 밝힙니다."
    },
    {
      id: "ROP-07",
      title: "Urbanization and Heat Dissipation",
      paragraphs: [
        { label: "A", text: "Metropolitan centers absorb and retain significantly more solar radiation than adjacent rural landscapes." },
        { label: "B", text: "This phenomenon, commonly known as the urban heat island effect, elevates nighttime temperatures." },
        { label: "C", text: "Dense concentrations of asphalt paving and concrete skyscrapers are the primary culprits behind this thermal retention." },
        { label: "D", text: "City governments are combating this issue by mandating green vegetative roofs and planting extensive tree canopies." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 도시 지역의 태양 복사열 흡수를 설명합니다. (B)의 'This phenomenon'이 '도시 열섬 효과'라는 용어를 도입하고, (C)가 아스팔트와 콘크리트라는 원인을 규명하며, (D)의 'combating this issue'가 녹색 지붕 등의 정책적 대응을 제시합니다."
    },
    {
      id: "ROP-08",
      title: "The Linguistic Evolution of English",
      paragraphs: [
        { label: "A", text: "Following the Norman Conquest of 1066, French became the language of the ruling aristocracy in England." },
        { label: "B", text: "Meanwhile, the common peasantry continued speaking Old English in their daily domestic lives." },
        { label: "C", text: "Over the subsequent three centuries, these two divergent tongues gradually fused together." },
        { label: "D", text: "This linguistic synthesis produced Middle English, creating the vast dual-vocabulary lexicon seen in modern English." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 1066년 노르만 정복과 프랑스어 귀족 계층을 제시합니다. (B)의 'Meanwhile'이 평민층의 고대 영어를 대조하고, (C)의 'these two divergent tongues'가 3세기에 걸친 융합을 설명하며, (D)의 'This linguistic synthesis'가 중세 영어 탄생이라는 결론에 도달합니다."
    },
    {
      id: "ROP-09",
      title: "Neuroplasticity and Skill Acquisition",
      paragraphs: [
        { label: "A", text: "For decades, medical textbooks asserted that the adult human brain was rigid and incapable of generating new circuitry." },
        { label: "B", text: "Modern neuroimaging, however, has thoroughly overturned this static dogma." },
        { label: "C", text: "Researchers now know that intensive physical or intellectual training physically reorganizes synaptic pathways." },
        { label: "D", text: "This dynamic capability, termed neuroplasticity, enables stroke survivors to relearn speech and motor functions." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 뇌가 고정되어 있다는 과거의 통념을 소개합니다. (B)의 'however'가 통념을 뒤집고, (C)가 훈련을 통한 시냅스 재구성을 설명하며, (D)의 'This dynamic capability'가 뇌가소성이라는 명칭과 뇌졸중 재활 적용을 소개합니다."
    },
    {
      id: "ROP-10",
      title: "Agricultural Mechanization in the 20th Century",
      paragraphs: [
        { label: "A", text: "Throughout the nineteenth century, agricultural harvesting required massive teams of seasonal laborers and draft animals." },
        { label: "B", text: "The introduction of gasoline-powered combine harvesters fundamentally altered this rural dynamic." },
        { label: "C", text: "A single machine could perform the work of dozens of farmhands in a fraction of the time." },
        { label: "D", text: "As farm labor requirements plummeted, millions of displaced rural workers migrated into burgeoning industrial cities." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 19세기 노동 집약적 농업을 설명합니다. (B)가 가솔린 콤바인의 도입을 제시하고, (C)의 'A single machine'이 수십 명 몫의 효율성을 상술하며, (D)의 'As farm labor requirements plummeted'가 도시 이주라는 거시적 사회 변화로 매듭짓습니다."
    },
    {
      id: "ROP-11",
      title: "Coral Reef Bleaching Mechanisms",
      paragraphs: [
        { label: "A", text: "Healthy reef-building corals maintain an obligate symbiotic relationship with microscopic algae called zooxanthellae." },
        { label: "B", text: "These photosynthetic algae provide the coral host with vital glucose while receiving inorganic nutrients in return." },
        { label: "C", text: "When ocean temperatures rise even two degrees above seasonal thresholds, the stressed coral expels its algae." },
        { label: "D", text: "Stripped of its colorful symbionts, the coral turns stark white and faces eventual starvation unless waters cool." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)에서 산호와 조류의 공생 관계를 설명합니다. (B)의 'These photosynthetic algae'가 포도당 공급 메커니즘을 상술하고, (C)가 수온 상승 시 조류 배출 스트레스를 제시하며, (D)의 'Stripped of its colorful symbionts'가 백화 현상과 아사 위기를 기술합니다."
    },
    {
      id: "ROP-12",
      title: "The Industrial Revolution and Steam Power",
      paragraphs: [
        { label: "A", text: "Early textile mills had to be constructed adjacent to fast-flowing rivers to turn mechanical water wheels." },
        { label: "B", text: "This geographic constraint severely restricted factory expansion to remote hilly river valleys." },
        { label: "C", text: "James Watt solved this limitation by developing an efficient condenser that transformed the steam engine into a universal power source." },
        { label: "D", text: "Freed from riverfront dependencies, manufacturers rapidly constructed massive urban industrial complexes near coalfields and ports." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 강가 수차에 의존하던 초기 방적 공장을 설명합니다. (B)의 'This geographic constraint'가 지리적 한계를 지적하고, (C)가 제임스 와트의 증기기관 개량을 통한 해결을 서술하며, (D)의 'Freed from riverfront dependencies'가 도시 공장 지대로의 대확장으로 이어집니다."
    },
    {
      id: "ROP-13",
      title: "Sleep Cycles and Memory Consolidation",
      paragraphs: [
        { label: "A", text: "Throughout the night, the human brain alternates rhythmically between rapid eye movement and slow-wave sleep stages." },
        { label: "B", text: "During the deepest periods of slow-wave sleep, high-frequency neural oscillations occur in the hippocampus." },
        { label: "C", text: "These sharp-wave ripples replay recent daytime experiences at twenty times their original speed." },
        { label: "D", text: "This rapid replay transfers newly acquired facts from temporary hippocampal circuits into the durable neocortex." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 밤 동안 렘수면과 서파수면의 교대 리듬을 설명합니다. (B)가 가장 깊은 서파수면의 해마 뇌파를 묘사하고, (C)의 'These sharp-wave ripples'가 20배속 기억 재생을 설명하며, (D)의 'This rapid replay'가 장기 기억 저장으로의 전이 과정을 완성합니다."
    },
    {
      id: "ROP-14",
      title: "The Economics of Congestion Pricing",
      paragraphs: [
        { label: "A", text: "Road space in dense metropolitan centers is an inherently finite resource subject to heavy overuse." },
        { label: "B", text: "When vehicular access is free, individual motorists flood highway corridors, creating gridlock that costs billions annually." },
        { label: "C", text: "To correct this market failure, cities such as London and Singapore introduced electronic congestion tolling." },
        { label: "D", text: "By charging drivers during peak hours, these programs reduce vehicle volumes by fifteen percent and fund public mass transit." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 도심 도로 공간의 유한성을 제시합니다. (B)가 무료 진입 시 발생하는 만성 정체와 경제적 손실을 기술하고, (C)의 'To correct this market failure'가 혼잡통행료 도입을 소개하며, (D)의 'By charging drivers during peak hours'가 통행량 감소 및 대중교통 투자 효과로 매듭짓습니다."
    },
    {
      id: "ROP-15",
      title: "Exoplanetary Spectroscopy and Biosignatures",
      paragraphs: [
        { label: "A", text: "Astronomers can now study planets orbiting distant stars without ever sending physical probes across interstellar space." },
        { label: "B", text: "When an exoplanet crosses in front of its host star, a fraction of starlight filters through the planetary atmosphere." },
        { label: "C", text: "Chemical elements in that atmosphere absorb specific wavelengths of light, leaving distinctive dark absorption lines." },
        { label: "D", text: "By decoding these spectroscopic fingerprints, space telescopes can detect gases such as methane and oxygen that may indicate alien biological activity." }
      ],
      correctOrder: ["A", "B", "C", "D"],
      explanation: "(A)가 탐사선 없이 외계 행성을 관측하는 현대 천문학을 소개합니다. (B)가 행성이 별 앞을 지날 때 대기를 통과하는 빛을 설명하고, (C)가 화학 원소에 따른 흡수 스펙트럼 생성을 기술하며, (D)의 'these spectroscopic fingerprints'가 생명체 징후 가스 탐지로 결론을 냅니다."
    }
  ],

  // 1. Read Aloud (25문제)
  ra: [
    { id: "RA-01", title: "Market Research", text: "Market research is a vital part of the planning process. It helps businesses understand what customers really want, identifies market opportunities, and reduces business risks by anticipating future customer demands." },
    { id: "RA-02", title: "Renewable Energy", text: "Renewable energy sources such as solar and wind power are becoming increasingly cost-effective. Governments worldwide are investing heavily in clean technologies to reduce greenhouse gas emissions and protect natural habitats." },
    { id: "RA-03", title: "Artificial Intelligence", text: "Artificial intelligence is transforming industries ranging from healthcare to finance. By automating routine operations and analyzing complex datasets, modern algorithms allow professionals to make faster and more accurate decisions." },
    { id: "RA-04", title: "Urban Architecture", text: "Sustainable architecture focuses on minimizing the negative environmental impact of buildings through energy efficiency and eco-friendly construction materials. Modern architects strive to balance aesthetic beauty with environmental responsibility." },
    { id: "RA-05", title: "Neuroplasticity", text: "Neuroplasticity refers to the brain's remarkable ability to reorganize itself by forming new neural connections throughout life. This adaptive mechanism enables individuals to learn new skills and recover from neurological injuries." },
    { id: "RA-06", title: "Global Supply Chains", text: "Modern manufacturing relies heavily on interconnected global supply chains. While international sourcing reduces production costs, it also exposes corporations to unexpected disruptions caused by geopolitical tensions and natural disasters." },
    { id: "RA-07", title: "Marine Biodiversity", text: "Coral reefs support an extraordinary proportion of marine biodiversity despite covering less than one percent of the ocean floor. Protecting these fragile ecosystems is essential for maintaining global fisheries and coastal protection." },
    { id: "RA-08", title: "Behavioral Economics", text: "Traditional economic theory assumes that consumers always make rational decisions. However, behavioral economics demonstrates that psychological biases, emotions, and social norms frequently influence financial choices in predictable ways." },
    { id: "RA-09", title: "The Printing Press", text: "The invention of the mechanical printing press in the fifteenth century revolutionized the distribution of knowledge. Books became affordable and widely accessible, laying the foundation for the scientific revolution and mass literacy." },
    { id: "RA-10", title: "Sleep Consolidation", text: "Adequate sleep plays a crucial role in memory consolidation and cognitive performance. During deep sleep stages, the brain processes information acquired throughout the day and transfers it into long-term storage." },
    { id: "RA-11", title: "Agricultural Innovation", text: "Precision agriculture utilizes satellite imagery and soil sensors to optimize crop yields while minimizing water and fertilizer usage. This data-driven approach helps farmers adapt to changing climatic conditions." },
    { id: "RA-12", title: "Linguistic Diversity", text: "Thousands of indigenous languages are currently endangered due to globalization and cultural assimilation. Linguists warn that when a language disappears, humanity loses unique ecological knowledge and cultural heritage." },
    { id: "RA-13", title: "Space Exploration", text: "Recent advancements in reusable rocket technology have significantly lowered the cost of launching satellites into orbit. Private aerospace companies are now collaborating with international agencies to explore lunar and planetary surfaces." },
    { id: "RA-14", title: "Public Health Policy", text: "Preventive healthcare programs focus on vaccination, nutritional education, and early disease screening. Investing in community wellness significantly reduces the long-term financial burden on national hospital systems." },
    { id: "RA-15", title: "Quantum Computing", text: "Unlike classical computers that process data in binary bits, quantum computers leverage quantum mechanics to perform complex calculations simultaneously. This breakthrough promises to accelerate drug discovery and cryptographic security." },
    { id: "RA-16", title: "Archaeological Dating", text: "Radiocarbon dating allows archaeologists to determine the age of ancient organic materials with remarkable accuracy. By measuring carbon isotope decay, researchers can reconstruct timelines of prehistoric human civilizations." },
    { id: "RA-17", title: "Remote Work Culture", text: "The widespread adoption of digital communication tools has enabled millions of employees to work remotely. Organizations are now redesigning office spaces to foster collaboration rather than individual desk work." },
    { id: "RA-18", title: "Botanical Adaptation", text: "Desert plants have evolved specialized physiological structures to survive extreme aridity. Succulent leaves, deep root systems, and nocturnal gas exchange allow these species to conserve precious moisture." },
    { id: "RA-19", title: "Financial Literacy", text: "Understanding basic financial concepts such as compound interest, inflation, and risk diversification is essential for personal economic stability. Many educators advocate integrating financial literacy into secondary school curricula." },
    { id: "RA-20", title: "Symphonic Acoustics", text: "Concert hall acoustics depend on precise architectural geometry and material selection. Engineers carefully calculate sound reflection angles to ensure that orchestral music reaches every listener with clarity and warmth." },
    { id: "RA-21", title: "Microplastics Pollution", text: "Microscopic plastic particles have been detected in marine organisms, drinking water, and even polar ice. Scientists are actively investigating the long-term ecological and physiological impacts of microplastic accumulation." },
    { id: "RA-22", title: "Industrial Automation", text: "Robotic assembly lines have dramatically increased manufacturing precision and workplace safety. Nevertheless, policymakers must address the socioeconomic challenges of retraining workers displaced by automation." },
    { id: "RA-23", title: "Renaissance Art", text: "Renaissance painters introduced linear perspective and anatomical realism to European art. Patronage from wealthy merchant families allowed artists to experiment with innovative techniques and secular themes." },
    { id: "RA-24", title: "Geothermal Power", text: "Geothermal energy harnesses heat stored beneath the Earth's crust to generate reliable electricity. Unlike solar or wind power, geothermal plants operate continuously regardless of weather fluctuations." },
    { id: "RA-25", title: "Cognitive Development", text: "Early childhood interaction plays a formative role in emotional and cognitive development. Responsive communication between caregivers and infants strengthens neural pathways associated with language acquisition." }    ,
    { id: "RA-26", title: "Oceanic Currents", text: "Deep ocean currents are driven by differences in water density, which is controlled by temperature and salinity. This global conveyor belt regulates Earth's climate by transporting thermal energy from the equator toward the poles." },
    { id: "RA-27", title: "Constitutional Law", text: "A constitution establishes the fundamental principles according to which a state is governed. By separating powers among executive, legislative, and judicial branches, democratic frameworks prevent the concentration of authority." },
    { id: "RA-28", title: "Antibiotic Resistance", text: "The widespread misuse of antibiotics in both human medicine and livestock farming has accelerated the evolution of resistant bacterial strains. Global health organizations urge stricter prescription guidelines and investment in novel therapeutics." },
    { id: "RA-29", title: "Urban Heat Islands", text: "Metropolitan areas often experience significantly warmer temperatures than surrounding rural regions due to heat-absorbing concrete and asphalt. Planting urban forests and installing reflective rooftops can mitigate this phenomenon." },
    { id: "RA-30", title: "Impressionist Painting", text: "Nineteenth-century Impressionist artists rejected rigid academic conventions in favor of capturing fleeting moments of natural light. Using visible brushstrokes and vibrant colors, they depicted everyday modern life outdoors." },
    { id: "RA-31", title: "Demographic Transition", text: "As societies industrialize and healthcare improves, population growth typically follows a predictable demographic transition. Mortality rates decline first, followed gradually by lower fertility rates and an aging population structure." },
    { id: "RA-32", title: "Plate Tectonics", text: "The Earth's lithosphere is divided into several rigid tectonic plates that float atop the semi-fluid asthenosphere. Collisions and separations along plate boundaries generate earthquakes, volcanic activity, and mountain ranges." },
    { id: "RA-33", title: "Cognitive Dissonance", text: "Social psychologists define cognitive dissonance as the mental discomfort experienced when a person holds two contradictory beliefs simultaneously. To resolve this tension, individuals often rationalize their behavior or filter out conflicting evidence." },
    { id: "RA-34", title: "Monetary Policy", text: "Central banks regulate national money supply and interest rates to maintain price stability and maximum employment. During periods of high inflation, raising benchmark interest rates helps cool excessive consumer spending." },
    { id: "RA-35", title: "Photosynthetic Efficiency", text: "Plants convert solar radiation into chemical energy through the complex biochemical pathway of photosynthesis. Agricultural scientists are researching ways to enhance photosynthetic efficiency to boost global food security." },
    { id: "RA-36", title: "Digital Privacy", text: "Every online interaction leaves a digital footprint that commercial algorithms analyze to predict consumer behavior. Data protection regulations aim to give citizens greater transparency and control over their personal information." },
    { id: "RA-37", title: "Glacial Retreat", text: "Mountain glaciers serve as vital freshwater reservoirs for ratusan of millions of people downstream. Accelerated glacial retreat threatens seasonal water supplies for agriculture, hydroelectric generation, and drinking water." },
    { id: "RA-38", title: "Epigenetic Inheritance", text: "Epigenetics examines how environmental factors such as diet, stress, and toxins can alter gene expression without changing the underlying DNA sequence. Remarkably, some of these modifications can be passed down to subsequent generations." },
    { id: "RA-39", title: "Classical Conditioning", text: "Ivan Pavlov demonstrated that behavioral reflexes could be conditioned through repeated association between a neutral stimulus and an automatic response. His pioneering experiments laid the empirical foundation for modern behavioral psychology." },
    { id: "RA-40", title: "Circular Economy", text: "Unlike the traditional linear model of make, use, and dispose, a circular economy designs out waste by keeping materials in continuous use. Repairing, refurbishing, and recycling products conserves finite natural resources." },
    { id: "RA-41", title: "Exoplanet Discovery", text: "Astronomers detect distant exoplanets primarily by observing the minute dimming of a star's light as a planet transits across its face. Spectroscopic analysis of starlight passing through planetary atmospheres can reveal chemical signatures of water." },
    { id: "RA-42", title: "Forensic Anthropology", text: "Forensic anthropologists apply osteological techniques to identify human remains in legal and archaeological contexts. Skeletal markers provide reliable indicators of age, biological sex, stature, and past physical trauma." },
    { id: "RA-43", title: "Microfinance Initiatives", text: "Microfinance institutions provide small loans and basic banking services to low-income entrepreneurs who lack access to traditional credit. Empowering local small businesses helps stimulate grassroots economic development." },
    { id: "RA-44", title: "Acoustic Ecology", text: "Acoustic ecology studies the relationship between living organisms and their sonic environment. Rising levels of anthropogenic noise pollution in oceans and cities disrupt animal communication, navigation, and mating patterns." },
    { id: "RA-45", title: "Nanotechnology in Medicine", text: "Engineered nanoparticles can be designed to deliver chemotherapy drugs directly to cancerous cells while sparing healthy tissue. This targeted delivery mechanism significantly reduces systemic side effects for patients." },
    { id: "RA-46", title: "Vertical Farming", text: "Vertical farming cultivates crops in vertically stacked layers inside controlled indoor environments using LED lighting and hydroponic systems. This approach allows year-round food production inside dense urban centers." },
    { id: "RA-47", title: "The Silk Road", text: "The ancient Silk Road was an expansive network of trade routes connecting East Asia with the Mediterranean world. Beyond silk and spices, merchants facilitated the exchange of philosophies, scientific knowledge, and artistic styles." },
    { id: "RA-48", title: "Cybersecurity Resilience", text: "As critical infrastructure becomes increasingly digitized, protecting power grids and financial networks from cyberattacks is a national priority. Multi-factor authentication and regular security audits are essential defensive measures." },
    { id: "RA-49", title: "Ornithological Migration", text: "Migratory birds navigate thousands of kilometers across continents using a combination of celestial cues, landmarks, and sensitivity to Earth's magnetic field. Preserving wetland stopover sites is critical for their survival." },
    { id: "RA-50", title: "Ethics of Autonomous Vehicles", text: "Self-driving vehicles rely on lidar sensors and computer vision to navigate complex traffic scenarios. Before autonomous transport achieves universal adoption, lawmakers must establish clear legal frameworks for accident liability." }
  ],

  // 2. Repeat Sentence (30문제)
  rs: [
    { id: "RS-01", title: "도서관 주말 정기 휴관", text: "The library will be closed for maintenance over the coming weekend." },
    { id: "RS-02", title: "과제 온라인 제출 마감", text: "All assignments must be submitted online before Friday midnight." },
    { id: "RS-03", title: "캠퍼스 셔틀 버스 배차", text: "The campus shuttle bus runs every fifteen minutes during peak hours." },
    { id: "RS-04", title: "국제 학생 교환 프로그램", text: "Students are strongly encouraged to participate in international exchange research programs." },
    { id: "RS-05", title: "실험실 안전 수칙 준수", text: "Protective goggles must be worn at all times inside the chemistry laboratory." },
    { id: "RS-06", title: "장학금 신청 서류 마감", text: "Scholarship applications should be accompanied by two academic reference letters." },
    { id: "RS-07", title: "신입생 오리엔테이션 일정", text: "The orientation session for new undergraduate students begins at nine tomorrow morning." },
    { id: "RS-08", title: "경제학 특강 강의실 변경", text: "Today's economics lecture has been moved to the main auditorium." },
    { id: "RS-09", title: "도서 대출 연장 규정", text: "Borrowed books can be renewed online unless another reader has reserved them." },
    { id: "RS-10", title: "졸업 논문 주제 승인", text: "You must have your dissertation topic approved by your faculty supervisor." },
    { id: "RS-11", title: "주차 허가증 발급 안내", text: "Student parking permits can be purchased at the campus security office." },
    { id: "RS-12", title: "통계 데이터 분석 필수", text: "Accurate statistical analysis is essential for validating scientific research findings." },
    { id: "RS-13", title: "기숙사 보증금 환불", text: "The accommodation deposit will be refunded after the final room inspection." },
    { id: "RS-14", title: "교내 체육관 무료 이용", text: "Full-time students are entitled to free membership at the university sports center." },
    { id: "RS-15", title: "발표 자료 사전 업로드", text: "Please upload your presentation slides to the student portal before the seminar." },
    { id: "RS-16", title: "학술지 동료 평가 과정", text: "All submitted manuscripts undergo a rigorous peer review process before publication." },
    { id: "RS-17", title: "과제 표절 엄격 금지", text: "Plagiarism is a serious academic offense and will result in severe penalties." },
    { id: "RS-18", title: "진로 상담 센터 예약", text: "The career advisory service offers individual consultations for graduating students." },
    { id: "RS-19", title: "재생 에너지 투자 확대", text: "Global investment in renewable energy has increased significantly over the past decade." },
    { id: "RS-20", title: "필수 교재 구매 안내", text: "Copies of the core textbook are available in the university bookshop." },
    { id: "RS-21", title: "중간고사 성적 공지", text: "Midterm examination results will be posted on the department noticeboard next Monday." },
    { id: "RS-22", title: "컴퓨터실 야간 개방", text: "The computer laboratories remain open twenty-four hours during the examination period." },
    { id: "RS-23", title: "그룹 프로젝트 역할 분담", text: "Effective teamwork requires clear communication and fair distribution of responsibilities." },
    { id: "RS-24", title: "현장 실습 참가 동의서", text: "Participants in the geology field trip must sign a medical consent form." },
    { id: "RS-25", title: "학비 분할 납부 제도", text: "Tuition fees may be paid in three installments throughout the academic year." },
    { id: "RS-26", title: "외국어 강좌 수강 신청", text: "Online registration for beginner language courses closes at the end of this week." },
    { id: "RS-27", title: "연구 윤리 위원회 승인", text: "Research involving human participants requires prior approval from the ethics committee." },
    { id: "RS-28", title: "교내 카페테리아 메뉴 개편", text: "The student cafeteria now offers a wider selection of vegetarian meals." },
    { id: "RS-29", title: "학술 컨퍼런스 자원봉사", text: "Volunteers are needed to assist international guests at the upcoming conference." },
    { id: "RS-30", title: "도서관 정숙 유지 요청", text: "Please switch your mobile phones to silent mode before entering the reading room." }    ,
    { id: "RS-31", title: "학술 에세이 참고문헌 표기", text: "All quotations in your essay must be properly cited according to the style guide." },
    { id: "RS-32", title: "생물학 실습 보고서 제출", text: "The biology lab report is due at the beginning of next Tuesday's class." },
    { id: "RS-33", title: "도서관 희귀 도서 열람", text: "Rare manuscripts cannot be taken out of the special collections reading room." },
    { id: "RS-34", title: "학생회 선거 온라인 투표", text: "Voting for the student union representatives will take place online this Thursday." },
    { id: "RS-35", title: "계절학기 등록금 납부", text: "Registration for summer school modules requires advance payment of tuition fees." },
    { id: "RS-36", title: "심리학 실험 참가자 모집", text: "The psychology department is looking for volunteers to participate in a memory study." },
    { id: "RS-37", title: "교내 무선 인터넷 점검", text: "The campus wireless network will be temporarily unavailable between midnight and six." },
    { id: "RS-38", title: "졸업 가운 대여 신청", text: "Graduating students must order their academic gowns at least three weeks in advance." },
    { id: "RS-39", title: "건축학 설계 도면 심사", text: "Final architectural models will be exhibited in the main gallery next week." },
    { id: "RS-40", title: "기후 변화 심포지엄 개최", text: "Leading environmental scientists will discuss global climate policy at tomorrow's symposium." },
    { id: "RS-41", title: "성적 이의 신청 절차", text: "Students wishing to appeal their final grade must submit a formal written request." },
    { id: "RS-42", title: "교내 보건소 무료 예방접종", text: "Free flu vaccinations are available for all registered students at the health clinic." },
    { id: "RS-43", title: "현대 문학 강의 추천 도서", text: "The reading list for modern literature has been updated on the course website." },
    { id: "RS-44", title: "박물관 학생 할인 혜택", text: "Admission to the national art gallery is free for students with valid identification." },
    { id: "RS-45", title: "데이터 백업의 중요성", text: "Always back up your research data on an external drive to prevent accidental loss." },
    { id: "RS-46", title: "오케스트라 정기 연주회", text: "The university symphony orchestra will perform Beethoven's fifth symphony this Friday evening." },
    { id: "RS-47", title: "통계 소프트웨어 실습 워크숍", text: "A practical workshop on statistical software will be held in computer room three." },
    { id: "RS-48", title: "해외 인턴십 지원 자격", text: "Applicants for the international internship program must demonstrate fluency in two languages." },
    { id: "RS-49", title: "교내 자전거 보관소 이용", text: "Bicycles must be locked in designated racks and not left near building entrances." },
    { id: "RS-50", title: "신소재 공학 연구비 지원", text: "The engineering faculty has received a major grant to develop biodegradable plastics." },
    { id: "RS-51", title: "학술 발표 시간 엄수", text: "Each speaker will be given ten minutes for presentation followed by five minutes for questions." },
    { id: "RS-52", title: "기숙사 화재 대피 훈련", text: "A mandatory fire drill will be conducted in all student residences tomorrow morning." },
    { id: "RS-53", title: "경제 성장과 물가 안정", text: "Central banks face the difficult task of balancing economic growth with inflation control." },
    { id: "RS-54", title: "천체 관측소 야간 개방", text: "The campus observatory is open to the public on clear Wednesday evenings." },
    { id: "RS-55", title: "논문 초록 단어 수 제한", text: "Your conference abstract should not exceed two hundred and fifty words in length." },
    { id: "RS-56", title: "교내 서점 중고책 매입", text: "The campus bookstore buys back used textbooks at the end of every semester." },
    { id: "RS-57", title: "영양학과 식습관 조사", text: "Recent studies highlight the importance of a balanced diet for academic performance." },
    { id: "RS-58", title: "온라인 퀴즈 응시 기한", text: "The weekly online quiz must be completed before Sunday at eleven fifty-nine." },
    { id: "RS-59", title: "고전 역사 사료 분석", text: "Historians rely on primary sources to reconstruct accurate accounts of past events." },
    { id: "RS-60", title: "교내 상담 센터 비밀 보장", text: "All appointments with the student counseling service are strictly confidential." },
    { id: "RS-61", title: "그룹 스터디룸 사전 예약", text: "Group study rooms in the library can be booked for up to two hours." },
    { id: "RS-62", title: "신재생 에너지 보조금 정책", text: "Government subsidies have encouraged homeowners to install solar panels on their roofs." },
    { id: "RS-63", title: "화학 폐기물 분리 배출", text: "Hazardous chemical waste must be disposed of in clearly labeled containers." },
    { id: "RS-64", title: "취업 박람회 이력서 지참", text: "Bring several printed copies of your resume to next week's career fair." },
    { id: "RS-65", title: "인공지능 윤리 가이드라인", text: "The rapid development of artificial intelligence raises important ethical and legal questions." },
    { id: "RS-66", title: "학위 논문 제본 제출", text: "Two bound copies of your thesis must be deposited in the university library." },
    { id: "RS-67", title: "대중교통 학생 할인 카드", text: "Full-time students can apply for a thirty percent discount on public transport fares." },
    { id: "RS-68", title: "해양 생태계 보호 구역", text: "Establishing marine protected areas helps depleted fish populations recover naturally." },
    { id: "RS-69", title: "수강 철회 마감일 안내", text: "Next Friday is the final day to withdraw from a course without academic penalty." },
    { id: "RS-70", title: "교수님 면담 시간 예약", text: "Please send an email to schedule an appointment during my regular office hours." }
  ],

  // 3. Describe Image (15문제)
  di: [
    {
      id: "DI-01",
      title: "Quarterly Energy Consumption (in Megawatts)",
      bars: [
        { label: "Q1", val: "45MW", h: "70px", color: "#6b21a8" },
        { label: "Q2", val: "80MW", h: "125px", color: "#6b21a8" },
        { label: "Q3 (Max)", val: "110MW", h: "165px", color: "#ef4444" },
        { label: "Q4", val: "60MW", h: "95px", color: "#6b21a8" }
      ],
      keywords: ["energy", "consumption", "megawatts", "quarter", "q3", "highest", "lowest", "q1"],
      template: "The given bar chart illustrates quarterly energy consumption in megawatts. The highest figure is observed in Q3 at 110 megawatts, whereas Q1 is the lowest at 45 megawatts. In conclusion, energy demand peaked during the third quarter."
    },
    {
      id: "DI-02",
      title: "Global Smartphone Market Share (%)",
      bars: [
        { label: "Brand A", val: "32%", h: "160px", color: "#ef4444" },
        { label: "Brand B", val: "28%", h: "140px", color: "#6b21a8" },
        { label: "Brand C", val: "18%", h: "90px", color: "#6b21a8" },
        { label: "Others", val: "22%", h: "110px", color: "#64748b" }
      ],
      keywords: ["smartphone", "market", "share", "brand", "highest", "percent", "global", "lowest"],
      template: "The given chart depicts global smartphone market share. Brand A dominates the market with 32 percent, closely followed by Brand B at 28 percent. In summary, two major brands lead more than half of the worldwide market."
    },
    {
      id: "DI-03",
      title: "Renewable Energy Generation by Source (TWh)",
      bars: [
        { label: "Solar", val: "120", h: "140px", color: "#6b21a8" },
        { label: "Wind", val: "150", h: "170px", color: "#ef4444" },
        { label: "Hydro", val: "90", h: "105px", color: "#6b21a8" },
        { label: "Bio", val: "40", h: "50px", color: "#64748b" }
      ],
      keywords: ["renewable", "energy", "solar", "wind", "highest", "terawatt", "hydro", "source"],
      template: "The graph demonstrates renewable energy generation across various sources. Wind energy records the maximum contribution at 150 terawatt hours, while biomass is the lowest. Overall, wind and solar constitute the primary drivers of clean power."
    },
    {
      id: "DI-04",
      title: "University Enrollment by Faculty (Students)",
      bars: [
        { label: "Engineering", val: "4,200", h: "165px", color: "#ef4444" },
        { label: "Business", val: "3,800", h: "145px", color: "#6b21a8" },
        { label: "Medicine", val: "2,500", h: "100px", color: "#6b21a8" },
        { label: "Arts", val: "1,900", h: "75px", color: "#64748b" }
      ],
      keywords: ["university", "enrollment", "engineering", "business", "medicine", "arts", "highest", "students"],
      template: "The bar chart presents university student enrollment across four faculties. Engineering has the largest student body at 4,200, whereas Arts has the smallest at 1,900. Overall, STEM and business courses attract the majority of students."
    },
    {
      id: "DI-05",
      title: "Household Monthly Expenditure Breakdown (%)",
      bars: [
        { label: "Housing", val: "35%", h: "165px", color: "#ef4444" },
        { label: "Food", val: "25%", h: "120px", color: "#6b21a8" },
        { label: "Transport", val: "15%", h: "75px", color: "#6b21a8" },
        { label: "Savings", val: "10%", h: "50px", color: "#64748b" }
      ],
      keywords: ["household", "expenditure", "housing", "food", "transport", "savings", "highest", "percent"],
      template: "The chart illustrates average monthly household expenditure by category. Housing accounts for the highest proportion at 35 percent, while savings represent the lowest at 10 percent. In conclusion, essential living costs consume over half of household income."
    },
    {
      id: "DI-06",
      title: "Annual Rainfall in Four Cities (mm)",
      bars: [
        { label: "Sydney", val: "1,200", h: "160px", color: "#ef4444" },
        { label: "Auckland", val: "1,100", h: "145px", color: "#6b21a8" },
        { label: "London", val: "600", h: "80px", color: "#6b21a8" },
        { label: "Cairo", val: "50", h: "25px", color: "#64748b" }
      ],
      keywords: ["annual", "rainfall", "sydney", "auckland", "london", "cairo", "highest", "lowest"],
      template: "The bar graph compares annual precipitation in millimeters across four major cities. Sydney experiences the highest rainfall at 1,200 millimeters, whereas Cairo is extremely dry at 50 millimeters. Overall, precipitation varies dramatically by geographic region."
    },
    {
      id: "DI-07",
      title: "Commuter Transport Modes in Metro Area (%)",
      bars: [
        { label: "Subway", val: "42%", h: "168px", color: "#ef4444" },
        { label: "Car", val: "30%", h: "120px", color: "#6b21a8" },
        { label: "Bus", val: "20%", h: "80px", color: "#6b21a8" },
        { label: "Bicycle", val: "8%", h: "35px", color: "#64748b" }
      ],
      keywords: ["commuter", "transport", "subway", "car", "bus", "bicycle", "highest", "lowest"],
      template: "The chart shows the distribution of commuter transport modes in a metropolitan area. Subway transit is the most popular choice at 42 percent, while cycling is the least common at 8 percent. In summary, public transit accounts for over sixty percent of daily commutes."
    },
    {
      id: "DI-08",
      title: "Global Coffee Production by Country (Million Bags)",
      bars: [
        { label: "Brazil", val: "65M", h: "170px", color: "#ef4444" },
        { label: "Vietnam", val: "30M", h: "90px", color: "#6b21a8" },
        { label: "Colombia", val: "14M", h: "55px", color: "#6b21a8" },
        { label: "Indonesia", val: "11M", h: "45px", color: "#64748b" }
      ],
      keywords: ["coffee", "production", "brazil", "vietnam", "colombia", "indonesia", "highest", "million"],
      template: "The given graph compares global coffee production among leading nations. Brazil is the dominant producer with 65 million bags, more than double Vietnam's output of 30 million. In conclusion, South American and Asian nations lead global coffee supply."
    },
    {
      id: "DI-09",
      title: "Average Daily Screen Time by Age Group (Hours)",
      bars: [
        { label: "18-24", val: "7.5h", h: "165px", color: "#ef4444" },
        { label: "25-34", val: "6.2h", h: "135px", color: "#6b21a8" },
        { label: "35-50", val: "4.8h", h: "105px", color: "#6b21a8" },
        { label: "50+", val: "3.1h", h: "70px", color: "#64748b" }
      ],
      keywords: ["screen", "time", "hours", "age", "group", "highest", "lowest", "young"],
      template: "The bar chart illustrates average daily screen time across different age brackets. Young adults aged 18 to 24 record the highest usage at 7.5 hours per day, whereas individuals over 50 spend the least time at 3.1 hours. Overall, digital consumption decreases steadily with age."
    },
    {
      id: "DI-10",
      title: "Corporate R&D Investment by Sector ($ Billion)",
      bars: [
        { label: "IT & AI", val: "$95B", h: "170px", color: "#ef4444" },
        { label: "Pharma", val: "$80B", h: "145px", color: "#6b21a8" },
        { label: "Auto", val: "$50B", h: "95px", color: "#6b21a8" },
        { label: "Energy", val: "$25B", h: "50px", color: "#64748b" }
      ],
      keywords: ["investment", "research", "sector", "pharma", "technology", "highest", "lowest", "billion"],
      template: "The chart displays corporate research and development expenditure across four key industries. Information technology leads with 95 billion dollars, followed closely by pharmaceuticals at 80 billion. In conclusion, technology and healthcare drive global innovation spending."
    },
    {
      id: "DI-11",
      title: "Plastic Waste Recycling Rates by Region (%)",
      bars: [
        { label: "Europe", val: "41%", h: "160px", color: "#ef4444" },
        { label: "Asia", val: "28%", h: "115px", color: "#6b21a8" },
        { label: "Americas", val: "18%", h: "75px", color: "#6b21a8" },
        { label: "Africa", val: "12%", h: "50px", color: "#64748b" }
      ],
      keywords: ["plastic", "recycling", "europe", "asia", "americas", "africa", "highest", "percent"],
      template: "The graph illustrates regional plastic waste recycling rates. Europe achieves the highest recycling rate at 41 percent, while Africa records the lowest at 12 percent. Overall, global recycling infrastructure shows significant regional disparities."
    },
    {
      id: "DI-12",
      title: "Electric Vehicle Sales Growth (Thousand Units)",
      bars: [
        { label: "2021", val: "120k", h: "55px", color: "#64748b" },
        { label: "2022", val: "210k", h: "95px", color: "#6b21a8" },
        { label: "2023", val: "340k", h: "135px", color: "#6b21a8" },
        { label: "2024", val: "480k", h: "170px", color: "#ef4444" }
      ],
      keywords: ["electric", "vehicle", "sales", "growth", "thousand", "highest", "lowest", "increase"],
      template: "The bar chart tracks annual electric vehicle sales from 2021 to 2024. Sales rose sharply from 120 thousand units in 2021 to a peak of 480 thousand units in 2024. In conclusion, adoption of electric mobility has quadrupled over the four-year period."
    },
    {
      id: "DI-13",
      title: "Library Book Loans by Genre (%)",
      bars: [
        { label: "Science", val: "36%", h: "165px", color: "#ef4444" },
        { label: "History", val: "26%", h: "120px", color: "#6b21a8" },
        { label: "Fiction", val: "22%", h: "100px", color: "#6b21a8" },
        { label: "Poetry", val: "16%", h: "70px", color: "#64748b" }
      ],
      keywords: ["library", "book", "loans", "genre", "science", "history", "fiction", "poetry"],
      template: "The chart shows the distribution of university library book loans by genre. Science texts account for the largest share at 36 percent, whereas poetry represents the smallest at 16 percent. Overall, academic nonfiction dominates student borrowing habits."
    },
    {
      id: "DI-14",
      title: "Hospital Patient Satisfaction Survey (%)",
      bars: [
        { label: "Excellent", val: "48%", h: "170px", color: "#ef4444" },
        { label: "Good", val: "34%", h: "125px", color: "#6b21a8" },
        { label: "Fair", val: "12%", h: "55px", color: "#6b21a8" },
        { label: "Poor", val: "6%", h: "30px", color: "#64748b" }
      ],
      keywords: ["hospital", "patient", "satisfaction", "excellent", "good", "poor", "highest", "percent"],
      template: "The bar graph summarizes findings from a hospital patient satisfaction survey. Nearly half of respondents rated their care as excellent at 48 percent, while only 6 percent reported poor service. In conclusion, over eighty percent of patients expressed positive satisfaction."
    },
    {
      id: "DI-15",
      title: "Global Freshwater Usage by Sector (%)",
      bars: [
        { label: "Farming", val: "70%", h: "170px", color: "#ef4444" },
        { label: "Industry", val: "20%", h: "75px", color: "#6b21a8" },
        { label: "Domestic", val: "10%", h: "45px", color: "#64748b" }
      ],
      keywords: ["freshwater", "usage", "sector", "farming", "agriculture", "industry", "domestic", "highest"],
      template: "The chart illustrates global freshwater consumption across three main sectors. Agriculture consumes the vast majority at 70 percent, followed by industry at 20 percent and domestic use at 10 percent. Overall, irrigation remains the primary driver of global water demand."
    }    ,
    {
      id: "DI-16",
      title: "Global Airline Passenger Traffic (Billions)",
      bars: [
        { label: "2020", val: "1.8B", h: "50px", color: "#64748b" },
        { label: "2021", val: "2.3B", h: "70px", color: "#6b21a8" },
        { label: "2022", val: "3.5B", h: "120px", color: "#6b21a8" },
        { label: "2023", val: "4.4B", h: "165px", color: "#ef4444" }
      ],
      keywords: ["airline", "passenger", "traffic", "billion", "recovery", "highest", "lowest", "growth"],
      template: "The bar chart illustrates global airline passenger traffic in billions from 2020 to 2023. Passenger numbers recovered strongly from a low of 1.8 billion in 2020 to a peak of 4.4 billion in 2023. Overall, global aviation has experienced a rapid post-pandemic rebound."
    },
    {
      id: "DI-17",
      title: "Average Life Expectancy by Continent (Years)",
      bars: [
        { label: "Europe", val: "81y", h: "165px", color: "#ef4444" },
        { label: "Americas", val: "77y", h: "145px", color: "#6b21a8" },
        { label: "Asia", val: "74y", h: "130px", color: "#6b21a8" },
        { label: "Africa", val: "64y", h: "90px", color: "#64748b" }
      ],
      keywords: ["life", "expectancy", "continent", "europe", "americas", "asia", "africa", "years"],
      template: "The graph compares average life expectancy across four continents. Europe records the highest longevity at 81 years, whereas Africa records the lowest at 64 years. In conclusion, healthcare access and living standards significantly influence regional life expectancy."
    },
    {
      id: "DI-18",
      title: "E-Commerce Payment Methods Share (%)",
      bars: [
        { label: "Digital Wallet", val: "49%", h: "170px", color: "#ef4444" },
        { label: "Credit Card", val: "31%", h: "115px", color: "#6b21a8" },
        { label: "Bank Transfer", val: "14%", h: "60px", color: "#6b21a8" },
        { label: "Cash", val: "6%", h: "30px", color: "#64748b" }
      ],
      keywords: ["payment", "digital", "wallet", "credit", "card", "cash", "highest", "percent"],
      template: "The chart displays the breakdown of e-commerce payment methods. Digital wallets account for nearly half of all transactions at 49 percent, while cash represents only 6 percent. Overall, mobile and electronic payments dominate online retail."
    },
    {
      id: "DI-19",
      title: "Carbon Emissions by Transport Mode (g/km)",
      bars: [
        { label: "Domestic Flight", val: "255g", h: "170px", color: "#ef4444" },
        { label: "Petrol Car", val: "170g", h: "115px", color: "#6b21a8" },
        { label: "Bus", val: "105g", h: "75px", color: "#6b21a8" },
        { label: "High-Speed Rail", val: "14g", h: "25px", color: "#10b981" }
      ],
      keywords: ["carbon", "emissions", "flight", "car", "bus", "rail", "highest", "lowest"],
      template: "The bar graph compares carbon dioxide emissions per passenger kilometer across four transport modes. Domestic flights emit the highest carbon at 255 grams, whereas high-speed rail emits only 14 grams. In summary, rail travel is by far the most environmentally friendly option."
    },
    {
      id: "DI-20",
      title: "Graduate Employment Rate by Degree (%)",
      bars: [
        { label: "Medicine", val: "96%", h: "170px", color: "#ef4444" },
        { label: "Computer Sci", val: "91%", h: "155px", color: "#6b21a8" },
        { label: "Law", val: "84%", h: "135px", color: "#6b21a8" },
        { label: "History", val: "72%", h: "105px", color: "#64748b" }
      ],
      keywords: ["graduate", "employment", "medicine", "computer", "law", "history", "highest", "percent"],
      template: "The chart shows graduate employment rates within six months of graduation. Medicine achieves the highest placement rate at 96 percent, followed by Computer Science at 91 percent. Overall, vocational and technical degrees demonstrate strong job market demand."
    },
    {
      id: "DI-21",
      title: "Daily Water Consumption per Capita (Liters)",
      bars: [
        { label: "USA", val: "310L", h: "170px", color: "#ef4444" },
        { label: "Australia", val: "230L", h: "130px", color: "#6b21a8" },
        { label: "UK", val: "145L", h: "85px", color: "#6b21a8" },
        { label: "India", val: "90L", h: "55px", color: "#64748b" }
      ],
      keywords: ["water", "consumption", "liters", "usa", "australia", "uk", "india", "highest"],
      template: "The graph compares daily domestic water usage per person in four countries. The United States records the highest consumption at 310 liters per day, whereas India uses 90 liters. In conclusion, per capita water usage varies widely across nations."
    },
    {
      id: "DI-22",
      title: "Causes of Deforestation in Tropical Regions (%)",
      bars: [
        { label: "Cattle Ranching", val: "45%", h: "165px", color: "#ef4444" },
        { label: "Crop Farming", val: "28%", h: "110px", color: "#6b21a8" },
        { label: "Logging", val: "17%", h: "70px", color: "#6b21a8" },
        { label: "Infrastructure", val: "10%", h: "45px", color: "#64748b" }
      ],
      keywords: ["deforestation", "tropical", "cattle", "farming", "logging", "infrastructure", "highest", "percent"],
      template: "The chart illustrates the primary drivers of tropical deforestation. Cattle ranching is the leading cause at 45 percent, followed by commercial crop farming at 28 percent. Overall, agricultural expansion accounts for nearly three-quarters of forest loss."
    },
    {
      id: "DI-23",
      title: "Global Semiconductor Manufacturing Share (%)",
      bars: [
        { label: "Taiwan", val: "46%", h: "170px", color: "#ef4444" },
        { label: "South Korea", val: "22%", h: "95px", color: "#6b21a8" },
        { label: "Japan", val: "15%", h: "65px", color: "#6b21a8" },
        { label: "USA", val: "12%", h: "55px", color: "#64748b" }
      ],
      keywords: ["semiconductor", "manufacturing", "taiwan", "korea", "japan", "usa", "highest", "percent"],
      template: "The bar chart depicts global semiconductor manufacturing capacity by country. Taiwan holds the largest share at 46 percent, followed by South Korea at 22 percent. In summary, East Asia accounts for the vast majority of global chip fabrication."
    },
    {
      id: "DI-24",
      title: "Preferred News Sources by Platform (%)",
      bars: [
        { label: "Social Media", val: "44%", h: "165px", color: "#ef4444" },
        { label: "News Websites", val: "30%", h: "115px", color: "#6b21a8" },
        { label: "Television", val: "19%", h: "75px", color: "#6b21a8" },
        { label: "Print Paper", val: "7%", h: "30px", color: "#64748b" }
      ],
      keywords: ["news", "sources", "social", "media", "television", "print", "highest", "lowest"],
      template: "The graph illustrates preferred platforms for consuming daily news. Social media leads at 44 percent, whereas traditional print newspapers account for just 7 percent. In conclusion, digital channels have largely replaced print journalism."
    },
    {
      id: "DI-25",
      title: "Urban Green Space per Resident (Square Meters)",
      bars: [
        { label: "Oslo", val: "68m²", h: "170px", color: "#ef4444" },
        { label: "Singapore", val: "47m²", h: "125px", color: "#6b21a8" },
        { label: "London", val: "27m²", h: "75px", color: "#6b21a8" },
        { label: "Tokyo", val: "7m²", h: "30px", color: "#64748b" }
      ],
      keywords: ["urban", "green", "space", "oslo", "singapore", "london", "tokyo", "highest"],
      template: "The bar chart compares urban green space per capita across four cities. Oslo offers the most parkland at 68 square meters per resident, while Tokyo has only 7 square meters. Overall, population density strongly affects green space availability."
    },
    {
      id: "DI-26",
      title: "Food Waste Across Supply Chain Stages (%)",
      bars: [
        { label: "Households", val: "43%", h: "165px", color: "#ef4444" },
        { label: "Farming", val: "24%", h: "95px", color: "#6b21a8" },
        { label: "Processing", val: "18%", h: "75px", color: "#6b21a8" },
        { label: "Retail", val: "15%", h: "60px", color: "#64748b" }
      ],
      keywords: ["food", "waste", "households", "farming", "processing", "retail", "highest", "percent"],
      template: "The chart shows the percentage of food waste generated at each stage of the supply chain. Households are responsible for the largest share at 43 percent, whereas retail stores account for the lowest at 15 percent. In conclusion, consumer behavior is critical to reducing food waste."
    },
    {
      id: "DI-27",
      title: "Foreign Language Enrollment in High Schools (%)",
      bars: [
        { label: "Spanish", val: "46%", h: "170px", color: "#ef4444" },
        { label: "French", val: "24%", h: "95px", color: "#6b21a8" },
        { label: "Mandarin", val: "18%", h: "75px", color: "#6b21a8" },
        { label: "German", val: "12%", h: "50px", color: "#64748b" }
      ],
      keywords: ["foreign", "language", "spanish", "french", "mandarin", "german", "highest", "students"],
      template: "The graph presents foreign language enrollment distribution in secondary schools. Spanish is the most widely studied language at 46 percent, while German is the lowest at 12 percent. Overall, Spanish and French remain the top choices among students."
    },
    {
      id: "DI-28",
      title: "Average Hotel Occupancy Rate by Season (%)",
      bars: [
        { label: "Spring", val: "68%", h: "115px", color: "#6b21a8" },
        { label: "Summer", val: "89%", h: "170px", color: "#ef4444" },
        { label: "Autumn", val: "72%", h: "125px", color: "#6b21a8" },
        { label: "Winter", val: "51%", h: "80px", color: "#64748b" }
      ],
      keywords: ["hotel", "occupancy", "season", "summer", "winter", "spring", "highest", "percent"],
      template: "The bar chart illustrates seasonal hotel occupancy rates throughout the year. Occupancy peaks during the summer holiday season at 89 percent and drops to its lowest point in winter at 51 percent. In conclusion, tourism demand exhibits strong seasonal fluctuations."
    },
    {
      id: "DI-29",
      title: "Battery Energy Density by Chemistry (Wh/kg)",
      bars: [
        { label: "Lead-Acid", val: "45", h: "35px", color: "#64748b" },
        { label: "LFP Li-ion", val: "160", h: "95px", color: "#6b21a8" },
        { label: "NMC Li-ion", val: "260", h: "135px", color: "#6b21a8" },
        { label: "Solid-State", val: "400", h: "170px", color: "#ef4444" }
      ],
      keywords: ["battery", "energy", "density", "lithium", "solid", "state", "highest", "lowest"],
      template: "The chart compares gravimetric energy density across four battery technologies. Next-generation solid-state batteries achieve the highest density at 400 watt-hours per kilogram, compared to just 45 for traditional lead-acid. Overall, battery innovation is dramatically increasing energy storage capacity."
    },
    {
      id: "DI-30",
      title: "Public Library Funding Sources (%)",
      bars: [
        { label: "Local Tax", val: "62%", h: "170px", color: "#ef4444" },
        { label: "State Grant", val: "23%", h: "80px", color: "#6b21a8" },
        { label: "Donations", val: "10%", h: "45px", color: "#6b21a8" },
        { label: "Fees", val: "5%", h: "25px", color: "#64748b" }
      ],
      keywords: ["library", "funding", "local", "tax", "grant", "donations", "highest", "percent"],
      template: "The graph illustrates the revenue sources supporting public libraries. Local municipal taxes provide the majority of funding at 62 percent, whereas service fees contribute only 5 percent. In summary, public libraries rely primarily on local taxpayer support."
    }
  ],

  // 4. Write Essay (20문제)
  we: [
    { id: "WE-01", title: "인공지능과 일자리 변화", prompt: "Some people believe that artificial intelligence will create more job opportunities, while others argue it will cause widespread unemployment. Discuss both views and give your opinion. Write 200–300 words." },
    { id: "WE-02", title: "대중교통 전면 무료화 정책", prompt: "Many cities are considering making public transportation completely free to reduce traffic congestion and carbon emissions. Do you agree or disagree with this policy? Support your point of view with reasons." },
    { id: "WE-03", title: "기후변화와 개인·정부의 책임", prompt: "Climate change is one of the most critical challenges of our time. Should governments take sole responsibility, or do individuals also have an obligation to reduce their carbon footprint? Discuss with relevant examples." },
    { id: "WE-04", title: "대학 교육의 무상 제공 여부", prompt: "Higher education should be funded entirely by the government so that all students can attend university free of charge. To what extent do you agree or disagree with this statement?" },
    { id: "WE-05", title: "재택근무 확산의 장단점", prompt: "Remote work has become increasingly common in modern society. Discuss the advantages and disadvantages of working from home for both employees and employers." },
    { id: "WE-06", title: "우주 탐사 예산 vs 지구 빈곤 해결", prompt: "Governments spend billions of dollars on space exploration while many people on Earth lack basic healthcare and education. Do you think space exploration is a waste of public money?" },
    { id: "WE-07", title: "소셜 미디어와 대인 관계", prompt: "Some argue that social media platforms have brought people closer together, while others claim they have increased social isolation. Discuss both perspectives and state your own position." },
    { id: "WE-08", title: "일회용 플라스틱 법적 금지", prompt: "Many environmental scientists advocate a complete ban on single-use plastics. How realistic is this proposal, and what alternative measures could effectively reduce plastic pollution?" },
    { id: "WE-09", title: "조기 외국어 교육의 효과", prompt: "Learning a foreign language at primary school is more effective than starting in secondary school. Do the benefits of early language instruction outweigh the drawbacks?" },
    { id: "WE-10", title: "주 4일 근무제 도입 논쟁", prompt: "Several companies have trialed a four-day workweek without reducing employee salaries. Do you think this model should be adopted across all industries?" },
    { id: "WE-11", title: "온라인 강의 vs 전통 대면 수업", prompt: "Digital learning platforms are rapidly replacing traditional classroom instruction. Will online education eventually make physical universities obsolete? Provide reasons for your answer." },
    { id: "WE-12", title: "고령화 사회의 정년 연장", prompt: "As life expectancy increases, many countries are raising the mandatory retirement age. Discuss the social and economic implications of an aging workforce." },
    { id: "WE-13", title: "패스트푸드 세금 부과(설탕세)", prompt: "To combat rising obesity rates, some governments have introduced higher taxes on sugary drinks and fast food. Is taxation the most effective way to improve public health?" },
    { id: "WE-14", title: "역사적 건축물 보존 vs 현대식 재개발", prompt: "Rapidly growing cities often face a dilemma between preserving historical buildings and constructing modern high-rise apartments. How should urban planners balance heritage and housing demand?" },
    { id: "WE-15", title: "동물원 및 수족관의 윤리성", prompt: "Some people believe that zoos play a vital role in wildlife conservation, while others view keeping animals in captivity as cruel and unnecessary. Discuss both views." },
    { id: "WE-16", title: "현금 없는 사회(Cashless Society)", prompt: "Digital payment methods have nearly eliminated the use of physical cash in many countries. Does a cashless society benefit everyone, or does it marginalize vulnerable groups?" },
    { id: "WE-17", title: "유전자 변형 작물(GMO)의 안전성", prompt: "Genetically modified crops can increase agricultural yields and resist drought, yet many consumers remain skeptical of their safety. Should governments promote or restrict genetic engineering in agriculture?" },
    { id: "WE-18", title: "청소년 범죄 처벌 강화 vs 교화", prompt: "Some argue that juvenile offenders should receive the same legal punishments as adults for serious crimes. Others believe education and rehabilitation are more appropriate. Discuss your view." },
    { id: "WE-19", title: "국제 관광 산업의 문화적 영향", prompt: "Mass tourism generates significant economic revenue for developing nations, but it often damages local traditions and natural environments. How can sustainable tourism be achieved?" },
    { id: "WE-20", title: "기업의 사회적 책임(CSR)", prompt: "In addition to generating profit for shareholders, large corporations should be legally required to contribute to environmental protection and community welfare. Do you agree or disagree?" }    ,
    { id: "WE-21", title: "자율주행차 도입과 교통사고 책임", prompt: "Self-driving cars are expected to become commonplace on public roads in the near future. When an autonomous vehicle is involved in an accident, should legal liability fall on the manufacturer, the software developer, or the passenger? Discuss." },
    { id: "WE-22", title: "의무 투표제(Compulsory Voting) 찬반", prompt: "In some democratic countries, voting in national elections is compulsory by law. Do you believe mandatory voting strengthens democracy, or does it infringe upon individual freedom?" },
    { id: "WE-23", title: "학교 내 스마트폰 전면 금지", prompt: "Many secondary schools have banned students from using smartphones during school hours to improve concentration and reduce cyberbullying. Do the advantages of this ban outweigh the disadvantages?" },
    { id: "WE-24", title: "보편적 기본소득(UBI) 도입", prompt: "Some economists propose introducing a Universal Basic Income, where every citizen receives a regular unconditional sum of money from the government. Discuss the potential economic and social impacts of this policy." },
    { id: "WE-25", title: "전통 종이책 vs 전자책(E-book)", prompt: "With the rise of tablets and e-readers, printed books are losing popularity among younger generations. Does the decline of physical books negatively affect reading comprehension and cultural preservation?" },
    { id: "WE-26", title: "동물 실험의 과학적 필요성과 윤리", prompt: "Medical researchers argue that animal testing is essential for developing life-saving drugs, while animal rights activists demand its immediate abolition. Discuss both views and give your opinion." },
    { id: "WE-27", title: "다국적 기업의 개발도상국 진출", prompt: "When multinational corporations establish factories in developing countries, do they primarily exploit local labor, or do they provide vital economic opportunities? Support your argument with examples." },
    { id: "WE-28", title: "예술 및 음악 교육 예산 축소 논란", prompt: "Some educational authorities prioritize science, technology, and mathematics over arts and music in school budgets. Should creative subjects receive equal funding and curriculum time?" },
    { id: "WE-29", title: "성형수술과 외모 지상주의", prompt: "Cosmetic surgery has become increasingly affordable and socially acceptable. What are the psychological and social reasons behind this trend, and is it a positive or negative development?" },
    { id: "WE-30", title: "원자력 발전의 기후변화 대응 역할", prompt: "Some energy experts view nuclear power as an indispensable clean energy source to combat climate change, while others oppose it due to radioactive waste and safety risks. Discuss both sides." },
    { id: "WE-31", title: "어린이 대상 상업 광고 규제", prompt: "Television and online advertisements aimed at young children often promote unhealthy snacks and expensive toys. Should governments prohibit all commercial advertising directed at children under twelve?" },
    { id: "WE-32", title: "대도시 인구 집중과 지방 소멸", prompt: "Young professionals are increasingly migrating to megacities, leaving rural towns with aging populations and declining economies. What policies can governments implement to revitalize regional areas?" },
    { id: "WE-33", title: "프로 스포츠 선수의 고액 연봉", prompt: "Top professional athletes earn tens of millions of dollars annually, far more than nurses, teachers, and emergency workers. Is such extreme income disparity justified in modern society?" },
    { id: "WE-34", title: "유기농 식품과 글로벌 식량 안보", prompt: "Organic farming avoids synthetic pesticides and fertilizers, but it typically produces lower crop yields per hectare than conventional agriculture. Can organic farming realistically feed a growing global population?" },
    { id: "WE-35", title: "가짜 뉴스(Fake News)와 플랫폼 검열", prompt: "The rapid spread of misinformation online threatens public health and democratic elections. Should technology companies be legally responsible for censoring false content, or does this threaten free speech?" },
    { id: "WE-36", title: "고등학생의 아르바이트 경험", prompt: "Many teenagers take part-time jobs while still attending high school. Does working part-time teach valuable life skills, or does it distract students from their academic studies?" },
    { id: "WE-37", title: "패스트 패션(Fast Fashion)의 환경 파괴", prompt: "The fast fashion industry allows consumers to buy trendy clothing at very low prices, but it generates massive textile waste and water pollution. How can consumers and governments make the fashion industry more sustainable?" },
    { id: "WE-38", title: "국제 원조(Foreign Aid)의 실효성", prompt: "Wealthy nations provide billions of dollars in financial aid to developing countries each year, yet poverty remains widespread. Should rich countries give technology and trade access instead of direct cash aid?" },
    { id: "WE-39", title: "인공지능 창작물(AI Art)의 저작권", prompt: "Generative artificial intelligence can now compose music, paint pictures, and write novels within seconds. Can AI-generated works be considered true art, and how should copyright laws protect human creators?" },
    { id: "WE-40", title: "사형 제도의 범죄 예방 효과", prompt: "Some people believe that capital punishment is the only effective deterrent against violent crime, while others argue that it violates human rights and risks executing innocent individuals. Discuss both views." }
  ],

  // 5. Fill in the Blanks (15문제)
  fib: [
    {
      id: "FIB-01",
      title: "기후변화와 생태계 위기",
      template: [
        "Global warming represents a significant challenge to global ecosystems. Rising temperatures have ",
        { id: 0, options: ["caused", "caused to", "affected to", "prevented"], answer: "caused", explain: "have + p.p 형태로 목적어 뒤 to부정사를 취하는 타동사 'caused'가 적절합니다." },
        " extreme weather events to become more frequent and intense. In addition, polar ice caps are melting at an ",
        { id: 1, options: ["unprecedented", "unlikely", "insignificant", "ordinary"], answer: "unprecedented", explain: "'unprecedented rate(전례 없는 속도)'는 학술 영어의 핵심 연어(Collocation)입니다." },
        " rate, threatening coastal communities. Scientists emphasize that international cooperation is ",
        { id: 2, options: ["vital", "futile", "optional", "irrelevant"], answer: "vital", explain: "문맥상 국제 협력이 '필수적(vital)'이라는 당위 표현이 필요합니다." },
        " to reduce greenhouse gas emissions."
      ]
    },
    {
      id: "FIB-02",
      title: "인공지능과 빅데이터 분석",
      template: [
        "Modern corporations generate vast amounts of data every day. In order to extract meaningful insights, organizations increasingly ",
        { id: 0, options: ["rely", "insist", "depend on", "focus"], answer: "rely", explain: "뒤따르는 전치사 'on'과 결합하는 자동사 'rely'가 문법적으로 정확합니다." },
        " on automated machine learning algorithms. These advanced models are capable of recognizing complex ",
        { id: 1, options: ["patterns", "distortions", "failures", "rumors"], answer: "patterns", explain: "머신러닝 알고리즘의 핵심 기능은 '복잡한 패턴(patterns)'을 식별하는 것입니다." },
        " that would be impossible for humans to detect manually, thereby significantly improving decision-making ",
        { id: 2, options: ["efficiency", "hesitation", "neglect", "rejection"], answer: "efficiency", explain: "의사결정 속도와 정확도를 높인다는 맥락이므로 '효율성(efficiency)'이 정답입니다." },
        "."
      ]
    },
    {
      id: "FIB-03",
      title: "도시화와 대중교통 인프라",
      template: [
        "Rapid urbanization has placed immense pressure on municipal infrastructure. Traffic congestion not only wastes productive time but also ",
        { id: 0, options: ["contributes", "attributes", "distributes", "prohibits"], answer: "contributes", explain: "'contribute to(~에 기여하다/원인이 되다)' 구문으로 대기 오염 악화를 설명합니다." },
        " to severe air pollution. Consequently, urban planners are prioritizing the ",
        { id: 1, options: ["expansion", "extinction", "reduction", "abandonment"], answer: "expansion", explain: "지하철 및 친환경 버스 노선의 '확장(expansion)'을 우선시한다는 문맥입니다." },
        " of underground rail networks and dedicated bus lanes to encourage sustainable ",
        { id: 2, options: ["commuting", "hesitating", "migrating", "stagnating"], answer: "commuting", explain: "지속 가능한 '통근(commuting)'을 장려한다는 의미가 가장 자연스럽습니다." },
        "."
      ]
    },
    {
      id: "FIB-04",
      title: "수면 부족과 인지 능력",
      template: [
        "Neuroscientific research consistently shows that chronic sleep deprivation ",
        { id: 0, options: ["impairs", "enhances", "restores", "validates"], answer: "impairs", explain: "만성 수면 부족이 주의력과 기억력을 '손상시킨다(impairs)'는 부정적 타동사가 필요합니다." },
        " human attention, working memory, and emotional regulation. Individuals who regularly sleep fewer than six hours per night exhibit a higher ",
        { id: 1, options: ["susceptibility", "immunity", "resistance", "indifference"], answer: "susceptibility", explain: "'susceptibility to(~에 대한 취약성/민감성)' 연어 구조입니다." },
        " to cardiovascular disease and metabolic disorders. Establishing a consistent bedtime routine is therefore ",
        { id: 2, options: ["beneficial", "detrimental", "hazardous", "redundant"], answer: "beneficial", explain: "장기적인 건강에 '유익하다(beneficial)'는 결론입니다." },
        " for long-term physical and mental well-being."
      ]
    },
    {
      id: "FIB-05",
      title: "생물 다양성과 열대우림 보존",
      template: [
        "Tropical rainforests harbor more than half of the world's terrestrial plant and animal species. However, widespread deforestation driven by commercial logging and agriculture poses an ",
        { id: 0, options: ["imminent", "ancient", "obscure", "optional"], answer: "imminent", explain: "'imminent threat(임박한 위협)'은 환경 학술 지문의 대표 빈출 연어입니다." },
        " threat to these delicate habitats. When keystone species vanish, the entire ecological food web can ",
        { id: 1, options: ["collapse", "flourish", "prosper", "stabilize"], answer: "collapse", explain: "핵심종이 사라지면 먹이사슬 전체가 '붕괴할(collapse)' 수 있다는 문맥입니다." },
        ", leading to irreversible biodiversity ",
        { id: 2, options: ["loss", "gain", "surplus", "abundance"], answer: "loss", explain: "'biodiversity loss(생물 다양성 손실)'는 고정된 학술 복합명사입니다." },
        "."
      ]
    },
    {
      id: "FIB-06",
      title: "행동경제학과 소비자 심리",
      template: [
        "Classical economic models assume that individuals evaluate all available information objectively before making a purchase. In reality, consumers are heavily ",
        { id: 0, options: ["influenced", "isolated", "prevented", "exempted"], answer: "influenced", explain: "수동태 'be influenced by(~에 의해 영향을 받다)' 구조입니다." },
        " by cognitive biases and framing effects. For instance, people tend to place a disproportionately high value on avoiding losses compared to acquiring ",
        { id: 1, options: ["equivalent", "inferior", "negligible", "unrelated"], answer: "equivalent", explain: "'동등한(equivalent) 이익'과 손실 회피 성향을 비교하는 문맥입니다." },
        " gains, a phenomenon known as loss ",
        { id: 2, options: ["aversion", "affection", "ambition", "adoption"], answer: "aversion", explain: "행동경제학의 핵심 개념인 'loss aversion(손실 회피)' 용어입니다." },
        "."
      ]
    },
    {
      id: "FIB-07",
      title: "항생제 내성과 현대 의학",
      template: [
        "The discovery of penicillin in the twentieth century revolutionized modern medicine by transforming fatal bacterial infections into treatable conditions. Unfortunately, the overuse and misuse of antibiotics have ",
        { id: 0, options: ["accelerated", "eliminated", "postponed", "prohibited"], answer: "accelerated", explain: "항생제 남용이 내성균의 출현을 '가속화했다(accelerated)'는 의미입니다." },
        " the emergence of resistant bacterial strains. Global health authorities warn that unless new antimicrobial therapies are ",
        { id: 1, options: ["developed", "abandoned", "concealed", "forfeited"], answer: "developed", explain: "새로운 치료제가 '개발되지(developed)' 않는다면 위험하다는 조건절입니다." },
        ", routine surgical procedures could once again become life-threatening ",
        { id: 2, options: ["endeavors", "triumphs", "miracles", "privileges"], answer: "endeavors", explain: "생명을 위협하는 위험한 '시도/일(endeavors)'이 될 수 있다는 맥락입니다." },
        "."
      ]
    },
    {
      id: "FIB-08",
      title: "원격 근무와 조직 문화",
      template: [
        "The shift toward hybrid work arrangements has forced corporations to rethink traditional management practices. Rather than evaluating staff based on physical presence in the office, managers are increasingly ",
        { id: 0, options: ["assessing", "ignoring", "dismissing", "Obstructing"], answer: "assessing", explain: "직원을 결과물 기준으로 '평가하고(assessing)' 있다는 진행형 동사입니다." },
        " employees according to measurable output and project milestones. Nevertheless, maintaining team ",
        { id: 1, options: ["cohesion", "division", "friction", "isolation"], answer: "cohesion", explain: "'team cohesion(팀 결속력)'은 조직 심리학 지문의 단골 연어입니다." },
        " and spontaneous creativity across geographically dispersed teams remains a persistent ",
        { id: 2, options: ["challenge", "guarantee", "luxury", "remedy"], answer: "challenge", explain: "여전히 지속적인 '과제(challenge)'로 남아 있다는 문맥입니다." },
        "."
      ]
    },
    {
      id: "FIB-09",
      title: "고고학과 고대 문명 복원",
      template: [
        "Modern archaeology has moved far beyond simple excavation of ancient monuments. By employing satellite remote sensing and ground-penetrating radar, researchers can ",
        { id: 0, options: ["detect", "destroy", "fabricate", "overlook"], answer: "detect", explain: "지하에 묻힌 유구와 정착지를 비파괴 방식으로 '탐지하다(detect)'가 적절합니다." },
        " buried settlements without disturbing the soil. Furthermore, DNA analysis of ancient skeletal remains provides ",
        { id: 1, options: ["invaluable", "worthless", "superficial", "ambiguous"], answer: "invaluable", explain: "'invaluable insights(매우 귀중한 통찰)' 연어 표현입니다." },
        " insights into prehistoric migration routes, dietary habits, and genetic ",
        { id: 2, options: ["ancestry", "futurity", "machinery", "scenery"], answer: "ancestry", explain: "유전적 '혈통/조상(ancestry)'을 밝혀낸다는 문맥입니다." },
        "."
      ]
    },
    {
      id: "FIB-10",
      title: "태양광 발전과 에너지 저장 기술",
      template: [
        "While solar photovoltaic panels have plummeted in cost over the past decade, the intermittent nature of sunlight poses a challenge for grid stability. Electricity generation peaks at midday but drops to zero after sunset, precisely when residential demand ",
        { id: 0, options: ["surges", "vanishes", "collapses", "shrinks"], answer: "surges", explain: "일몰 직후 가정용 전력 수요가 '급증한다(surges)'는 대조 문맥입니다." },
        ". To bridge this gap, utility companies are investing heavily in large-scale lithium-ion battery ",
        { id: 1, options: ["storage", "shortage", "leakage", "spoilage"], answer: "storage", explain: "'energy/battery storage(에너지/배터리 저장)' 복합명사입니다." },
        " systems capable of releasing clean power during peak evening ",
        { id: 2, options: ["hours", "centuries", "decades", "eras"], answer: "hours", explain: "'peak evening hours(저녁 피크 시간대)' 연어입니다." },
        "."
      ]
    },
    {
      id: "FIB-11",
      title: "해양 산성화와 산호초 백화 현상",
      template: [
        "The world's oceans act as a massive carbon sink, absorbing approximately one-third of human-generated carbon dioxide emissions. However, this absorption triggers chemical reactions that lower seawater pH, a process known as ocean ",
        { id: 0, options: ["acidification", "purification", "desalination", "evaporation"], answer: "acidification", explain: "해수 pH가 낮아지는 '해양 산성화(ocean acidification)' 전문 용어입니다." },
        ". More acidic waters hinder the ability of marine calcifiers, such as corals and shellfish, to build protective ",
        { id: 1, options: ["skeletons", "predators", "currents", "glaciers"], answer: "skeletons", explain: "산호와 패류가 보호용 '골격/껍질(skeletons)'을 형성하는 것을 방해한다는 의미입니다." },
        ", ultimately jeopardizing the entire marine ",
        { id: 2, options: ["ecosystem", "atmosphere", "continent", "peninsula"], answer: "ecosystem", explain: "해양 '생태계(ecosystem)' 전체를 위태롭게 한다는 결론입니다." },
        "."
      ]
    },
    {
      id: "FIB-12",
      title: "이중 언어 사용과 뇌 인지 예비능",
      template: [
        "Cognitive psychologists have long debated how speaking multiple languages shapes executive brain function. Recent neuroimaging studies indicate that bilingual individuals constantly ",
        { id: 0, options: ["manage", "abandon", "forget", "suppress to"], answer: "manage", explain: "두 개의 활성화된 언어 체계를 동시에 '관리/조절한다(manage)'는 타동사입니다." },
        " two active linguistic systems, which strengthens the prefrontal cortex. This lifelong mental exercise appears to build cognitive ",
        { id: 1, options: ["reserve", "decline", "exhaustion", "apathy"], answer: "reserve", explain: "뇌과학 용어인 'cognitive reserve(인지 예비능)'를 완성하는 단어입니다." },
        ", potentially delaying the onset of age-related dementia symptoms by several ",
        { id: 2, options: ["years", "seconds", "millimeters", "grams"], answer: "years", explain: "치매 증상 발현을 수 '년(years)' 늦춰준다는 문맥입니다." },
        "."
      ]
    },
    {
      id: "FIB-13",
      title: "공급망 다변화와 리스크 관리",
      template: [
        "For decades, global manufacturers pursued lean inventory strategies to minimize warehousing costs. However, recent global disruptions revealed the ",
        { id: 0, options: ["vulnerability", "invincibility", "permanence", "simplicity"], answer: "vulnerability", explain: "단일 공급처 의존의 '취약성(vulnerability)'을 드러냈다는 문맥입니다." },
        " of relying on a single geographic region for critical components. In response, chief executives are adopting diversification strategies to enhance supply chain ",
        { id: 1, options: ["resilience", "fragility", "rigidity", "obscurity"], answer: "resilience", explain: "'supply chain resilience(공급망 회복탄력성)'는 경제·경영 지문 최빈출 연어입니다." },
        " against unforeseen external ",
        { id: 2, options: ["shocks", "rewards", "miracles", "harmonies"], answer: "shocks", explain: "'external shocks(외부 충격)' 연어 표현입니다." },
        "."
      ]
    },
    {
      id: "FIB-14",
      title: "정밀 의학과 유전체학의 발전",
      template: [
        "Traditional medical treatments are typically designed for the average patient, adopting a one-size-fits-all approach. In contrast, precision medicine takes into ",
        { id: 0, options: ["account", "action", "effect", "place"], answer: "account", explain: "'take into account(~을 고려하다)' 필수 숙어입니다." },
        " individual variability in genes, environment, and lifestyle. By sequencing a patient's tumor genome, oncologists can prescribe targeted therapies that maximize treatment ",
        { id: 1, options: ["efficacy", "toxicity", "redundancy", "ambiguity"], answer: "efficacy", explain: "'treatment efficacy(치료 효능/효과)' 의학 학술 연어입니다." },
        " while minimizing harmful side ",
        { id: 2, options: ["effects", "causes", "origins", "motives"], answer: "effects", explain: "'side effects(부작용)' 고정 표현입니다." },
        "."
      ]
    },
    {
      id: "FIB-15",
      title: "대중매체와 확증 편향",
      template: [
        "Algorithimic recommendation engines on digital platforms are engineered to maximize user engagement. By analyzing past browsing behavior, these systems continuously feed users content that ",
        { id: 0, options: ["aligns", "conflicts", "diverges", "separates"], answer: "aligns", explain: "'align with(~와 일치하다/부합하다)' 구문으로 기존 신념에 부합하는 콘텐츠를 뜻합니다." },
        " with their preexisting beliefs. Sociologists warn that such personalized filter bubbles reinforce confirmation ",
        { id: 1, options: ["bias", "neutrality", "objectivity", "fairness"], answer: "bias", explain: "'confirmation bias(확증 편향)' 심리·사회학 필수 용어입니다." },
        " and deepen political ",
        { id: 2, options: ["polarization", "unification", "consensus", "harmony"], answer: "polarization", explain: "'political polarization(정치적 양극화)'을 심화시킨다는 결론입니다." },
        " within democratic societies."
      ]
    }    ,
    {
      id: "FIB-16",
      title: "르네상스 인문주의와 교육 개혁",
      template: [
        "During the European Renaissance, scholars revived interest in classical Greek and Roman texts. This intellectual movement, known as humanism, ",
        { id: 0, options: ["shifted", "froze", "ignored", "abolished"], answer: "shifted", explain: "'shift A from B to C(A를 B에서 C로 전환하다)' 구문입니다." },
        " educational priorities away from purely scholastic theology toward rhetoric, history, and moral philosophy. Humanist educators believed that studying the liberal arts would cultivate civic ",
        { id: 1, options: ["virtue", "apathy", "corruption", "hostility"], answer: "virtue", explain: "'civic virtue(시민적 덕성)'은 역사·철학 지문의 핵심 연어입니다." },
        " and prepare citizens to participate actively in public ",
        { id: 2, options: ["affairs", "illusions", "solitudes", "trivialities"], answer: "affairs", explain: "'public affairs(공공 업무/국정)' 고정 연어 표현입니다." },
        "."
      ]
    },
    {
      id: "FIB-17",
      title: "백신 면역학과 집단 면역",
      template: [
        "Vaccination works by introducing a harmless component of a pathogen into the body to stimulate an immune response. When a critical proportion of a population becomes immune to an infectious disease, the transmission chain is ",
        { id: 0, options: ["disrupted", "amplified", "encouraged", "prolonged"], answer: "disrupted", explain: "감염 전파 사슬이 '차단/중단된다(disrupted)'는 수동태 동사가 적절합니다." },
        ". This phenomenon, termed herd immunity, provides indirect ",
        { id: 1, options: ["protection", "exposure", "vulnerability", "infection"], answer: "protection", explain: "'indirect protection(간접적 보호)'을 제공한다는 문맥입니다." },
        " to immunocompromised individuals who cannot safely receive vaccines ",
        { id: 2, options: ["themselves", "itself", "ourselves", "herself"], answer: "themselves", explain: "복수 명사 'individuals'를 강조하는 재귀대명사 'themselves'가 정답입니다." },
        "."
      ]
    },
    {
      id: "FIB-18",
      title: "중앙은행 디지털 화폐(CBDC)",
      template: [
        "As physical cash usage declines globally, numerous central banks are exploring the issuance of digital currencies. Proponents argue that a central bank digital currency could lower cross-border transaction ",
        { id: 0, options: ["costs", "benefits", "profits", "bonuses"], answer: "costs", explain: "'transaction costs(거래 비용)'를 낮춘다는 경제학 핵심 연어입니다." },
        " and expand financial inclusion for unbanked populations. However, critics raise legitimate ",
        { id: 1, options: ["concerns", "praises", "celebrations", "indifferences"], answer: "concerns", explain: "'raise concerns(우려를 제기하다)' 대표 연어입니다." },
        " regarding citizen surveillance, cybersecurity vulnerabilities, and potential commercial bank ",
        { id: 2, options: ["instability", "prosperity", "eternity", "serenity"], answer: "instability", explain: "시중 은행의 '불안정성(instability)'을 초래할 수 있다는 문맥입니다." },
        "."
      ]
    },
    {
      id: "FIB-19",
      title: "토양 미생물과 탄소 격리",
      template: [
        "Healthy agricultural soils teem with billions of microscopic bacteria and fungi that form symbiotic relationships with plant roots. These subterranean networks not only facilitate nutrient ",
        { id: 0, options: ["uptake", "outbreak", "downfall", "upheaval"], answer: "uptake", explain: "식물 뿌리의 '영양분 흡수(nutrient uptake)'를 뜻하는 생명과학 전문 연어입니다." },
        " but also trap atmospheric carbon underground. Regenerative farming practices, such as no-till cultivation and cover cropping, help ",
        { id: 1, options: ["preserve", "destroy", "deplete", "contaminate"], answer: "preserve", explain: "토양 구조를 '보존하다(preserve)'가 문맥에 부합합니다." },
        " soil structure and mitigate global climate ",
        { id: 2, options: ["change", "stagnation", "constancy", "immobility"], answer: "change", explain: "'mitigate climate change(기후 변화를 완화하다)' 연어입니다." },
        "."
      ]
    },
    {
      id: "FIB-20",
      title: "우주 쓰레기와 케슬러 신드롬",
      template: [
        "Decades of satellite launches have left Earth's low orbit cluttered with millions of pieces of metallic debris. Traveling at velocities exceeding twenty-five thousand kilometers per hour, even a tiny paint fleck can ",
        { id: 0, options: ["inflict", "heal", "prevent", "forgive"], answer: "inflict", explain: "'inflict catastrophic damage(치명적인 손상을 입히다)' 고급 연어입니다." },
        " catastrophic damage on operational spacecraft. Astrophysicists warn that a single collision could trigger a cascading chain ",
        { id: 1, options: ["reaction", "inaction", "affection", "devotion"], answer: "reaction", explain: "'chain reaction(연쇄 반응)' 고정 복합명사입니다." },
        ", rendering orbital space unusable for future ",
        { id: 2, options: ["generations", "ancestors", "fossils", "antiquities"], answer: "generations", explain: "'future generations(미래 세대)' 연어입니다." },
        "."
      ]
    },
    {
      id: "FIB-21",
      title: "지적 재산권과 특허 제도의 딜레마",
      template: [
        "Patent laws grant inventors a temporary monopoly over their creations to incentivize research and development. Without legal protection, competitors could immediately ",
        { id: 0, options: ["replicate", "originate", "conceal", "surrender"], answer: "replicate", explain: "경쟁사들이 신기술을 즉시 '복제할(replicate)' 수 있다는 문맥입니다." },
        " new technologies without bearing the initial financial risk. Nevertheless, excessively broad patents can stifle follow-on ",
        { id: 1, options: ["innovation", "stagnation", "regression", "imitation"], answer: "innovation", explain: "'stifle innovation(혁신을 저해하다/가로막다)' 빈출 연어입니다." },
        " and keep life-saving pharmaceuticals unaffordable in developing ",
        { id: 2, options: ["nations", "villages", "households", "neighborhoods"], answer: "nations", explain: "'developing nations(개발도상국)' 고정 표현입니다." },
        "."
      ]
    },
    {
      id: "FIB-22",
      title: "고래의 초저주파 수중 통신",
      template: [
        "Baleen whales produce low-frequency vocalizations that can travel hundreds of kilometers through deep ocean channels. These complex acoustic signals play an essential role in long-distance navigation and mate ",
        { id: 0, options: ["selection", "rejection", "extinction", "digestion"], answer: "selection", explain: "'mate selection(짝 선택)' 동물행동학 핵심 용어입니다." },
        ". Sadly, the proliferation of commercial shipping vessels has dramatically elevated ambient underwater ",
        { id: 1, options: ["noise", "silence", "tranquility", "clarity"], answer: "noise", explain: "'underwater noise(수중 소음)'을 높였다는 문맥입니다." },
        ", effectively shrinking the communication range of these marine ",
        { id: 2, options: ["mammals", "reptiles", "amphibians", "insects"], answer: "mammals", explain: "고래는 대표적인 '해양 포유류(marine mammals)'입니다." },
        "."
      ]
    },
    {
      id: "FIB-23",
      title: "플라시보 효과의 신경생물학적 메커니즘",
      template: [
        "The placebo effect occurs when a patient experiences genuine symptom relief after receiving an inert treatment. Far from being purely imaginary, brain imaging reveals that positive expectations ",
        { id: 0, options: ["trigger", "abolish", "prohibit", "withhold"], answer: "trigger", explain: "긍정적 기대감이 내인성 진통 물질의 분비를 '유발한다(trigger)'는 동사입니다." },
        " the release of endogenous opioids and dopamine. Consequently, clinical trials must compare experimental drugs against a placebo control group to ",
        { id: 1, options: ["isolate", "confuse", "obscure", "exaggerate"], answer: "isolate", explain: "약물의 순수한 약리적 효과를 '분리해내다/규명하다(isolate)'가 적절합니다." },
        " the true pharmacological efficacy of the ",
        { id: 2, options: ["intervention", "prohibition", "abstention", "neglect"], answer: "intervention", explain: "의학적 '처치/개입(intervention)'의 효과를 검증한다는 문맥입니다." },
        "."
      ]
    },
    {
      id: "FIB-24",
      title: "빙하기 인류 이주와 베링 육교",
      template: [
        "During the Last Glacial Maximum, vast quantities of ocean water were locked up in continental ice sheets, causing global sea levels to drop by over one hundred meters. This dramatic regression ",
        { id: 0, options: ["exposed", "submerged", "inundated", "dissolved"], answer: "exposed", explain: "해수면 하강으로 해저 대륙붕이 수면 위로 '드러났다(exposed)'는 의미입니다." },
        " a wide land bridge connecting Siberia and Alaska. Prehistoric hunter-gatherers gradually migrated across this treeless tundra, eventually ",
        { id: 1, options: ["populating", "evacuating", "abandoning", "demolishing"], answer: "populating", explain: "아메리카 대륙 전역에 '거주하게/정착하게 되었다(populating)'는 분사구문입니다." },
        " the entirety of North and South ",
        { id: 2, options: ["America", "Antarctica", "Australia", "Europe"], answer: "America", explain: "'North and South America(남북 아메리카)' 지리적 맥락입니다." },
        "."
      ]
    },
    {
      id: "FIB-25",
      title: "감성 지능(EQ)과 리더십 성과",
      template: [
        "While technical expertise and analytical intelligence are important prerequisites for career entry, emotional intelligence often determines leadership success. Leaders who possess high self-awareness and empathy can ",
        { id: 0, options: ["navigate", "aggravate", "provoke", "escalate"], answer: "navigate", explain: "'navigate interpersonal conflicts(대인 갈등을 잘 헤쳐나가다/조율하다)' 연어입니다." },
        " interpersonal conflicts constructively. By fostering psychological safety, empathetic managers empower team members to voice innovative ideas without ",
        { id: 1, options: ["fear", "joy", "hope", "pride"], answer: "fear", explain: "'without fear of retaliation(보복이나 비난에 대한 두려움 없이)' 구문입니다." },
        " of ridicule or ",
        { id: 2, options: ["retaliation", "promotion", "reward", "applause"], answer: "retaliation", explain: "'ridicule or retaliation(조롱이나 보복)' 병렬 구조입니다." },
        "."
      ]
    },
    {
      id: "FIB-26",
      title: "초전도체 기술과 전력 송전 혁신",
      template: [
        "Conventional copper power lines lose a significant percentage of electricity as heat due to electrical resistance. Superconductors, by contrast, can conduct electric current with zero ",
        { id: 0, options: ["resistance", "efficiency", "conductivity", "velocity"], answer: "resistance", explain: "초전도체의 핵심 정의인 '저항 제로(zero resistance)'입니다." },
        " when cooled below a critical temperature. Discovering a material that exhibits superconductivity at ambient room temperature would ",
        { id: 1, options: ["revolutionize", "paralyze", "deteriorate", "obsolete"], answer: "revolutionize", explain: "전력망과 자기부상열차 기술을 '혁신할(revolutionize)' 것이라는 동사입니다." },
        " global energy grids and magnetic levitation ",
        { id: 2, options: ["transportation", "hibernation", "evaporation", "fermentation"], answer: "transportation", explain: "'magnetic levitation transportation(자기부상 교통수단)' 문맥입니다." },
        "."
      ]
    },
    {
      id: "FIB-27",
      title: "문해력 발달과 초기 독서 환경",
      template: [
        "Longitudinal educational studies demonstrate that children who are exposed to rich oral vocabulary before entering school acquire reading skills more rapidly. Shared book reading between parents and toddlers stimulates Phonological ",
        { id: 0, options: ["awareness", "ignorance", "blindness", "amnesia"], answer: "awareness", explain: "'phonological awareness(음운 인식 능력)'는 아동 교육학 필수 용어입니다." },
        " and narrative comprehension. Public libraries and community book-gifting programs play a pivotal role in narrowing the literacy ",
        { id: 1, options: ["gap", "bridge", "harmony", "alliance"], answer: "gap", explain: "'narrow the gap(격차를 줄이다)' 대표 연어입니다." },
        " across different socioeconomic ",
        { id: 2, options: ["backgrounds", "horizons", "ceilings", "altitudes"], answer: "backgrounds", explain: "'socioeconomic backgrounds(사회경제적 배경)' 고정 연어입니다." },
        "."
      ]
    },
    {
      id: "FIB-28",
      title: "담수화 플랜트의 환경적 과2제",
      template: [
        "Arid coastal nations increasingly rely on seawater desalination to secure municipal drinking water. Reverse osmosis membranes effectively filter out salt, but the process requires substantial electrical ",
        { id: 0, options: ["energy", "vacuum", "scarcity", "silence"], answer: "energy", explain: "역삼투압 공정에 막대한 '전력 에너지(electrical energy)'가 소비된다는 문맥입니다." },
        " and discharges concentrated brine back into the sea. If not properly diluted, this hypersaline effluent can deplete dissolved oxygen and ",
        { id: 1, options: ["devastate", "nourish", "cultivate", "rejuvenate"], answer: "devastate", explain: "해저 생물 군집을 '파괴하다(devastate)'라는 부정적 동사가 필요합니다." },
        " benthic marine organisms near the discharge ",
        { id: 2, options: ["outfall", "summit", "canopy", "glacier"], answer: "outfall", explain: "배출구('discharge outfall') 인근 해양 생물을 뜻합니다." },
        "."
      ]
    },
    {
      id: "FIB-29",
      title: "박물관 유물 반환 논쟁",
      template: [
        "Major Western museums house thousands of artifacts acquired during the colonial era. In recent years, source nations have intensified diplomatic efforts to secure the ",
        { id: 0, options: ["repatriation", "confiscation", "destruction", "concealment"], answer: "repatriation", explain: "문화재의 본국 '반환/송환(repatriation)'을 뜻하는 핵심 학술 어휘입니다." },
        " of their cultural heritage. Proponents of restitution argue that historical injustices must be rectified, whereas some curators contend that encyclopedic museums foster universal ",
        { id: 1, options: ["appreciation", "contempt", "hatred", "oblivion"], answer: "appreciation", explain: "인류 문명에 대한 보편적 '이해와 감상(appreciation)'을 촉진한다는 주장입니다." },
        " of human artistic ",
        { id: 2, options: ["achievement", "failure", "negligence", "mediocrity"], answer: "achievement", explain: "'artistic achievement(예술적 성취)' 연어입니다." },
        "."
      ]
    },
    {
      id: "FIB-30",
      title: "화산 폭발과 지구 성층권 냉각 효과",
      template: [
        "Massive volcanic eruptions can influence global climate patterns for several years. When a volcano ejects millions of tons of sulfur dioxide into the stratosphere, the gas reacts with water vapor to form sulfate ",
        { id: 0, options: ["aerosols", "fossils", "glaciers", "minerals"], answer: "aerosols", explain: "'sulfate aerosols(황산염 에어로졸/미세입자)' 지구과학 전문 연어입니다." },
        ". These microscopic droplets reflect incoming solar radiation back into space, resulting in a temporary ",
        { id: 1, options: ["cooling", "boiling", "melting", "warming"], answer: "cooling", explain: "태양 복사를 반사해 일시적인 지구 '냉각(cooling)' 효과를 낳는다는 인과관계입니다." },
        " of average surface temperatures across the ",
        { id: 2, options: ["planet", "crater", "chamber", "tunnel"], answer: "planet", explain: "지구('planet') 전체 평균 기온을 낮춘다는 문맥입니다." },
        "."
      ]
    }
  ],

  // 6. Write from Dictation (30문제)
  wfd: [
    { id: "WFD-01", text: "The library will be closed for maintenance over the coming weekend." },
    { id: "WFD-02", text: "All assignments must be submitted online before Friday midnight." },
    { id: "WFD-03", text: "The campus facilities will remain open throughout the examination period." },
    { id: "WFD-04", text: "Students are required to attend at least eighty percent of the seminars." },
    { id: "WFD-05", text: "Climate change is having a profound impact on global agricultural production." },
    { id: "WFD-06", text: "Please make sure you include all relevant sources in your bibliography." },
    { id: "WFD-07", text: "The university offers financial assistance to students from low-income families." },
    { id: "WFD-08", text: "Technological innovation has transformed the way modern businesses operate." },
    { id: "WFD-09", text: "Participants in the study were interviewed by a team of psychologists." },
    { id: "WFD-10", text: "Renewable energy sources are essential for achieving sustainable economic growth." },
    { id: "WFD-11", text: "The chemistry lecture has been canceled due to unforeseen circumstances." },
    { id: "WFD-12", text: "Undergraduate students must complete a research project in their final year." },
    { id: "WFD-13", text: "Effective communication skills are highly valued by contemporary employers." },
    { id: "WFD-14", text: "You can download the course syllabus directly from the department website." },
    { id: "WFD-15", text: "A preliminary draft of the report should be submitted by next Wednesday." },
    { id: "WFD-16", text: "The new medical center is located adjacent to the main train station." },
    { id: "WFD-17", text: "Statistical evidence suggests a strong correlation between diet and health." },
    { id: "WFD-18", text: "International students must register with the accommodation office upon arrival." },
    { id: "WFD-19", text: "The government plans to increase funding for scientific research institutions." },
    { id: "WFD-20", text: "Please remember to bring your student identification card to the examination hall." },
    { id: "WFD-21", text: "Urbanization has created significant challenges for public transport infrastructure." },
    { id: "WFD-22", text: "Many species are migrating to higher altitudes due to rising temperatures." },
    { id: "WFD-23", text: "The professor will hold additional office hours before the final assessment." },
    { id: "WFD-24", text: "Digital technology has revolutionized access to historical archives and manuscripts." },
    { id: "WFD-25", text: "All laboratory equipment must be cleaned and returned after the experiment." },
    { id: "WFD-26", text: "Economic stability depends on a well-regulated financial and banking sector." },
    { id: "WFD-27", text: "Students who require an extension should contact their academic advisor immediately." },
    { id: "WFD-28", text: "The symposium will feature keynote speakers from leading international universities." },
    { id: "WFD-29", text: "Regular physical exercise is proven to reduce stress and improve concentration." },
    { id: "WFD-30", text: "Tickets for the annual graduation ceremony can be reserved online from Monday." }    ,
    { id: "WFD-31", text: "The introductory lecture on macroeconomics will be held in the main hall."},
    { id: "WFD-32", text: "Students must wear protective clothing when conducting experiments in the laboratory."},
    { id: "WFD-33", text: "Please submit your dissertation proposal to the faculty office by Friday."},
    { id: "WFD-34", text: "A comprehensive bibliography is required at the end of every research paper."},
    { id: "WFD-35", text: "The university library subscribes to thousands of international academic journals."},
    { id: "WFD-36", text: "Rising sea levels pose a serious threat to low-lying coastal communities."},
    { id: "WFD-37", text: "Applicants for the scholarship must demonstrate outstanding academic achievement."},
    { id: "WFD-38", text: "The archaeology department will conduct a field excavation during the summer break."},
    { id: "WFD-39", text: "Modern architecture increasingly incorporates sustainable and energy-efficient materials."},
    { id: "WFD-40", text: "You can access the recorded lectures through the online learning platform."},
    { id: "WFD-41", text: "Public transport subsidies help reduce traffic congestion in metropolitan areas."},
    { id: "WFD-42", text: "All mobile phones must be switched off before entering the examination room."},
    { id: "WFD-43", text: "The guest speaker will discuss the ethical implications of genetic engineering."},
    { id: "WFD-44", text: "Accurate data collection is the foundation of reliable scientific research."},
    { id: "WFD-45", text: "Students are advised to book an appointment with their career advisor early."},
    { id: "WFD-46", text: "Global supply chains have become increasingly vulnerable to geopolitical disruptions."},
    { id: "WFD-47", text: "The art gallery displays masterpieces from the nineteenth and twentieth centuries."},
    { id: "WFD-48", text: "Financial aid is available for postgraduate students undertaking doctoral research."},
    { id: "WFD-49", text: "Regular feedback from tutors helps students improve their academic writing skills."},
    { id: "WFD-50", text: "The government has announced ambitious targets for reducing carbon emissions."},
    { id: "WFD-51", text: "Please check the noticeboard for any changes to the examination timetable."},
    { id: "WFD-52", text: "Biodiversity loss threatens the stability of global food production systems."},
    { id: "WFD-53", text: "The psychology seminar has been rescheduled to Thursday afternoon at two."},
    { id: "WFD-54", text: "Collaborative projects encourage students to share diverse perspectives and ideas."},
    { id: "WFD-55", text: "Artificial intelligence is rapidly transforming medical diagnosis and patient care."},
    { id: "WFD-56", text: "Borrowed library equipment must be returned before the end of the semester."},
    { id: "WFD-57", text: "Consumer confidence plays a major role in driving national economic growth."},
    { id: "WFD-58", text: "The orientation tour will familiarize new students with the campus facilities."},
    { id: "WFD-59", text: "Strict copyright laws protect authors and artists from unauthorized reproduction."},
    { id: "WFD-60", text: "Investments in public health infrastructure yield significant long-term economic benefits."},
    { id: "WFD-61", text: "The astronomy club meets every Tuesday evening at the rooftop observatory."},
    { id: "WFD-62", text: "Please ensure that your name and student number are written on the cover sheet."},
    { id: "WFD-63", text: "Deforestation in tropical regions contributes significantly to global warming."},
    { id: "WFD-64", text: "The engineering workshop requires all participants to complete a safety induction."},
    { id: "WFD-65", text: "Critical thinking is an essential skill for evaluating academic literature."},
    { id: "WFD-66", text: "The student union organizes cultural events and social activities throughout the year."},
    { id: "WFD-67", text: "Advances in battery technology have accelerated the adoption of electric vehicles."},
    { id: "WFD-68", text: "Late submissions will not be accepted without a valid medical certificate."},
    { id: "WFD-69", text: "The linguistics lecture explores how children acquire their native language."},
    { id: "WFD-70", text: "Clean drinking water remains inaccessible to millions of people in developing nations."},
    { id: "WFD-71", text: "You must obtain permission from the copyright holder before publishing images."},
    { id: "WFD-72", text: "The university press publishes scholarly books and peer-reviewed journals."},
    { id: "WFD-73", text: "Dietary habits and physical activity strongly influence cardiovascular health."},
    { id: "WFD-74", text: "The history department offers specialized courses in medieval European civilization."},
    { id: "WFD-75", text: "Parking spaces on campus are limited and allocated on a first-come basis."},
    { id: "WFD-76", text: "Quantum computers can solve complex mathematical problems at unprecedented speeds."},
    { id: "WFD-77", text: "The accommodation office assists international students in finding suitable housing."},
    { id: "WFD-78", text: "Peer review ensures the quality and integrity of published scientific papers."},
    { id: "WFD-79", text: "Sustainable agriculture seeks to balance crop productivity with environmental conservation."},
    { id: "WFD-80", text: "The graduation ceremony will be broadcast live on the university website."}
  ]
};

const PTE_QUESTION_BANK = {
  // 사용자가 추가한 커스텀 문제 가져오기
  getCustomBank() {
    try {
      return JSON.parse(localStorage.getItem('pte_custom_questions') || '{"ra":[],"rs":[],"di":[],"we":[],"fib":[],"wfd":[]}');
    } catch (e) {
      return { ra: [], rs: [], di: [], we: [], fib: [], wfd: [] };
    }
  },

  // 특정 유형의 전체 문제 (기본 내장 + 사용자 추가) 반환
  getAll(type) {
    const builtin = PTE_BUILTIN_BANK[type] || [];
    const custom = (this.getCustomBank()[type] || []);
    return [...builtin, ...custom];
  },

  // 하위 호환용 프로퍼티 접근자
  get ra() { return this.getAll('ra'); },
  get rs() { return this.getAll('rs'); },
  get di() { return this.getAll('di'); },
  get we() { return this.getAll('we'); },
  get fib() { return this.getAll('fib'); },
  get wfd() { return this.getAll('wfd'); },

  // 랜덤 출제 함수
  getRandom(type) {
    const list = this.getAll(type);
    if (!list || list.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  },

  // 풀이 완료 여부 관리
  getSolvedIds() {
    try {
      return JSON.parse(localStorage.getItem('pte_solved_ids') || '[]');
    } catch (e) {
      return [];
    }
  },

  markSolved(questionId) {
    if (!questionId) return;
    const solved = this.getSolvedIds();
    if (!solved.includes(questionId)) {
      solved.push(questionId);
      localStorage.setItem('pte_solved_ids', JSON.stringify(solved));
    }
  },

  isSolved(questionId) {
    return this.getSolvedIds().includes(questionId);
  },

  // 북마크(⭐) 관리
  getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem('pte_bookmarks') || '[]');
    } catch(e) {
      return [];
    }
  },

  toggleBookmark(id) {
    if (!id) return false;
    const bms = this.getBookmarks();
    const idx = bms.indexOf(id);
    let bookmarked = false;
    if (idx !== -1) {
      bms.splice(idx, 1);
    } else {
      bms.push(id);
      bookmarked = true;
    }
    localStorage.setItem('pte_bookmarks', JSON.stringify(bms));
    return bookmarked;
  },

  isBookmarked(id) {
    return this.getBookmarks().includes(id);
  },

};

/**
 * 모든 연습 화면에서 드롭다운과 [◀ 이전] [🔀 랜덤] [다음 ▶] 버튼을 자동 생성·연동하는 공통 컨트롤러
 */
function initDynamicQuestionBar(type, selectElement, onSelectCallback) {
  const list = PTE_QUESTION_BANK.getAll(type);
  let currentIndex = 0;

  // 네비게이션 컨트롤 바가 없으면 셀렉터 옆에 자동 생성
  let navWrapper = document.getElementById('dynamic-q-nav');
  let currentFilter = 'ALL'; // 'ALL', 'UNSOLVED', 'BOOKMARKED'

  if (!navWrapper && selectElement && selectElement.parentNode) {
    navWrapper = document.createElement('div');
    navWrapper.id = 'dynamic-q-nav';
    navWrapper.style.cssText = 'display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: flex-end; margin-bottom: 8px;';

    // 필터 선택기
    const filterSelect = document.createElement('select');
    filterSelect.style.cssText = 'padding: 4px 8px; font-size: 11px; font-weight: 700; border: 1px solid #cbd5e1; border-radius: 6px; background: #f8fafc; color: #475569; cursor: pointer;';
    filterSelect.innerHTML = '<option value="ALL">전체 보기</option><option value="UNSOLVED">미완료만</option><option value="BOOKMARKED">⭐북마크만</option>';

    // 북마크 토글 버튼
    const btnBookmark = document.createElement('button');
    btnBookmark.type = 'button';
    btnBookmark.id = 'btn-q-bookmark';
    btnBookmark.innerText = '☆ 북마크';
    btnBookmark.style.cssText = 'padding: 4px 8px; font-size: 11px; font-weight: 700; border: 1px solid #fde047; border-radius: 6px; background: #fefce8; color: #a16207; cursor: pointer;';

    const solvedBadge = document.createElement('span');
    solvedBadge.id = 'solved-progress-badge';
    solvedBadge.style.cssText = 'font-size: 11px; font-weight: 700; color: #059669; background: #ecfdf5; padding: 4px 8px; border-radius: 6px; border: 1px solid #a7f3d0;';

    const btnPrev = document.createElement('button');
    btnPrev.type = 'button';
    btnPrev.innerText = '◀ 이전';
    btnPrev.style.cssText = 'padding: 5px 9px; font-size: 12px; font-weight: 700; border: 1px solid #cbd5e1; border-radius: 6px; background: #ffffff; color: #334155; cursor: pointer;';

    const btnRand = document.createElement('button');
    btnRand.type = 'button';
    btnRand.innerText = '🔀 랜덤';
    btnRand.style.cssText = 'padding: 5px 9px; font-size: 12px; font-weight: 700; border: 1px solid #bfdbfe; border-radius: 6px; background: #eff6ff; color: #1d4ed8; cursor: pointer;';

    const btnNext = document.createElement('button');
    btnNext.type = 'button';
    btnNext.innerText = '다음 ▶';
    btnNext.style.cssText = 'padding: 5px 9px; font-size: 12px; font-weight: 700; border: 1px solid #cbd5e1; border-radius: 6px; background: #ffffff; color: #334155; cursor: pointer;';

    selectElement.parentNode.insertBefore(navWrapper, selectElement);
    navWrapper.appendChild(solvedBadge);
    navWrapper.appendChild(filterSelect);
    navWrapper.appendChild(btnBookmark);
    navWrapper.appendChild(btnPrev);
    navWrapper.appendChild(selectElement);
    navWrapper.appendChild(btnNext);
    navWrapper.appendChild(btnRand);

    btnBookmark.onclick = () => {
      const curItem = list[currentIndex];
      if (curItem) {
        const isBm = PTE_QUESTION_BANK.toggleBookmark(curItem.id);
        btnBookmark.innerText = isBm ? '⭐ 북마크됨' : '☆ 북마크';
        btnBookmark.style.background = isBm ? '#fef08a' : '#fefce8';
        refreshOptions();
      }
    };

    filterSelect.onchange = (e) => {
      currentFilter = e.target.value;
      refreshOptions();
      const firstOpt = selectElement.querySelector('option');
      if (firstOpt) {
        currentIndex = parseInt(firstOpt.value) || 0;
        selectElement.value = currentIndex;
        onSelectCallback(currentIndex, list[currentIndex]);
      }
    };

    function getVisibleIndices() {
      const opts = Array.from(selectElement.options).map(o => parseInt(o.value)).filter(v => v >= 0);
      return opts.length > 0 ? opts : list.map((_, i) => i);
    }

    btnPrev.onclick = () => {
      const vis = getVisibleIndices();
      const pos = vis.indexOf(currentIndex);
      currentIndex = pos > 0 ? vis[pos - 1] : vis[vis.length - 1];
      refreshOptions();
      onSelectCallback(currentIndex, list[currentIndex]);
    };

    btnNext.onclick = () => {
      const vis = getVisibleIndices();
      const pos = vis.indexOf(currentIndex);
      currentIndex = (pos !== -1 && pos < vis.length - 1) ? vis[pos + 1] : vis[0];
      refreshOptions();
      onSelectCallback(currentIndex, list[currentIndex]);
    };

    btnRand.onclick = () => {
      const vis = getVisibleIndices();
      if (vis.length <= 1) return;
      let nextIdx = currentIndex;
      while (nextIdx === currentIndex) {
        nextIdx = vis[Math.floor(Math.random() * vis.length)];
      }
      currentIndex = nextIdx;
      refreshOptions();
      onSelectCallback(currentIndex, list[currentIndex]);
    };
  }

  function refreshOptions() {
    const solvedIds = PTE_QUESTION_BANK.getSolvedIds();
    const bookmarks = PTE_QUESTION_BANK.getBookmarks();
    let solvedCount = 0;

    let optionsHtml = '';
    list.forEach((item, idx) => {
      const done = solvedIds.includes(item.id);
      const isBm = bookmarks.includes(item.id);
      if (done) solvedCount++;

      // 필터 판정
      if (currentFilter === 'UNSOLVED' && done) return;
      if (currentFilter === 'BOOKMARKED' && !isBm) return;

      const label = item.title || (item.text ? item.text.substring(0, 26) + '...' : (item.prompt ? item.prompt.substring(0, 26) + '...' : item.id));
      const prefix = (isBm ? '⭐ ' : '') + (done ? '✔ [완료] ' : '');
      optionsHtml += `<option value="${idx}">${prefix}문제 ${idx + 1} (${label})</option>`;
    });

    selectElement.innerHTML = optionsHtml || '<option value="-1">조건에 맞는 문제 없음</option>';
    selectElement.value = currentIndex;

    const badgeEl = document.getElementById('solved-progress-badge');
    if (badgeEl) {
      badgeEl.innerText = `완료 ${solvedCount} / ${list.length}`;
    }

    const curItem = list[currentIndex];
    const btnBm = document.getElementById('btn-q-bookmark');
    if (btnBm && curItem) {
      const isBm = bookmarks.includes(curItem.id);
      btnBm.innerText = isBm ? '⭐ 북마크됨' : '☆ 북마크';
      btnBm.style.background = isBm ? '#fef08a' : '#fefce8';
    }
  }

  selectElement.onchange = (e) => {
    currentIndex = parseInt(e.target.value) || 0;
    refreshOptions();
    onSelectCallback(currentIndex, list[currentIndex]);
  };

  refreshOptions();

  return {
    refreshOptions,
    getCurrentItem: () => list[currentIndex],
    getCurrentIndex: () => currentIndex
  };
}

function savePteResult(record) {
  try {
    if (record.questionId) {
      PTE_QUESTION_BANK.markSolved(record.questionId);
    }
    const records = JSON.parse(localStorage.getItem('pte_practice_history') || '[]');
    records.unshift({
      id: Date.now(),
      date: new Date().toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      ...record
    });
    if (records.length > 100) records.pop();
    localStorage.setItem('pte_practice_history', JSON.stringify(records));
  } catch (err) {
    console.error("점수 저장 실패:", err);
  }
}

function saveMistake(word, type, context = "") {
  try {
    const list = JSON.parse(localStorage.getItem('pte_mistakes') || '[]');
    const clean = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
    if (!clean) return;
    if (!list.some(item => item.word.toLowerCase() === clean.toLowerCase())) {
      list.unshift({
        id: Date.now() + Math.floor(Math.random() * 1000),
        word: clean,
        type: type,
        context: context
      });
      if (list.length > 150) list.pop();
      localStorage.setItem('pte_mistakes', JSON.stringify(list));
    }
  } catch (err) {
    console.error("오답 저장 실패:", err);
  }
}
