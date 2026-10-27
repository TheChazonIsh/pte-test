/**
 * PTE Academic 全 영역 대량 실전 문제 은행 (v11.5 - 700 Questions Mega Expansion Edition)
 * 총 700개 기본 실전 학술 문제 + 사용자 무제한 직접 추가(Custom CMS) + 문제 풀이 완료/북마크/필터 엔진
 * Speaking (295): RA 80 + RS 140 + DI 45 + RL 35 (300)
 * Writing (95): WE 60 + SST 35
 * Reading (105): FIB 60 + ROP 45
 * Listening (200): WFD 165 + HIW 35
 */

const PTE_BUILTIN_BANK = {
    "ra": [
        {
            "id": "RA-01",
            "title": "Market Research",
            "text": "Market research is a vital part of the planning process. It helps businesses understand what customers really want, identifies market opportunities, and reduces business risks by anticipating future customer demands."
        },
        {
            "id": "RA-02",
            "title": "Renewable Energy",
            "text": "Renewable energy sources such as solar and wind power are becoming increasingly cost-effective. Governments worldwide are investing heavily in clean technologies to reduce greenhouse gas emissions and protect natural habitats."
        },
        {
            "id": "RA-03",
            "title": "Artificial Intelligence",
            "text": "Artificial intelligence is transforming industries ranging from healthcare to finance. By automating routine operations and analyzing complex datasets, modern algorithms allow professionals to make faster and more accurate decisions."
        },
        {
            "id": "RA-04",
            "title": "Urban Architecture",
            "text": "Sustainable architecture focuses on minimizing the negative environmental impact of buildings through energy efficiency and eco-friendly construction materials. Modern architects strive to balance aesthetic beauty with environmental responsibility."
        },
        {
            "id": "RA-05",
            "title": "Neuroplasticity",
            "text": "Neuroplasticity refers to the brain's remarkable ability to reorganize itself by forming new neural connections throughout life. This adaptive mechanism enables individuals to learn new skills and recover from neurological injuries."
        },
        {
            "id": "RA-06",
            "title": "Global Supply Chains",
            "text": "Modern manufacturing relies heavily on interconnected global supply chains. While international sourcing reduces production costs, it also exposes corporations to unexpected disruptions caused by geopolitical tensions and natural disasters."
        },
        {
            "id": "RA-07",
            "title": "Marine Biodiversity",
            "text": "Coral reefs support an extraordinary proportion of marine biodiversity despite covering less than one percent of the ocean floor. Protecting these fragile ecosystems is essential for maintaining global fisheries and coastal protection."
        },
        {
            "id": "RA-08",
            "title": "Behavioral Economics",
            "text": "Traditional economic theory assumes that consumers always make rational decisions. However, behavioral economics demonstrates that psychological biases, emotions, and social norms frequently influence financial choices in predictable ways."
        },
        {
            "id": "RA-09",
            "title": "The Printing Press",
            "text": "The invention of the mechanical printing press in the fifteenth century revolutionized the distribution of knowledge. Books became affordable and widely accessible, laying the foundation for the scientific revolution and mass literacy."
        },
        {
            "id": "RA-10",
            "title": "Sleep Consolidation",
            "text": "Adequate sleep plays a crucial role in memory consolidation and cognitive performance. During deep sleep stages, the brain processes information acquired throughout the day and transfers it into long-term storage."
        },
        {
            "id": "RA-11",
            "title": "Agricultural Innovation",
            "text": "Precision agriculture utilizes satellite imagery and soil sensors to optimize crop yields while minimizing water and fertilizer usage. This data-driven approach helps farmers adapt to changing climatic conditions."
        },
        {
            "id": "RA-12",
            "title": "Linguistic Diversity",
            "text": "Thousands of indigenous languages are currently endangered due to globalization and cultural assimilation. Linguists warn that when a language disappears, humanity loses unique ecological knowledge and cultural heritage."
        },
        {
            "id": "RA-13",
            "title": "Space Exploration",
            "text": "Recent advancements in reusable rocket technology have significantly lowered the cost of launching satellites into orbit. Private aerospace companies are now collaborating with international agencies to explore lunar and planetary surfaces."
        },
        {
            "id": "RA-14",
            "title": "Public Health Policy",
            "text": "Preventive healthcare programs focus on vaccination, nutritional education, and early disease screening. Investing in community wellness significantly reduces the long-term financial burden on national hospital systems."
        },
        {
            "id": "RA-15",
            "title": "Quantum Computing",
            "text": "Unlike classical computers that process data in binary bits, quantum computers leverage quantum mechanics to perform complex calculations simultaneously. This breakthrough promises to accelerate drug discovery and cryptographic security."
        },
        {
            "id": "RA-16",
            "title": "Archaeological Dating",
            "text": "Radiocarbon dating allows archaeologists to determine the age of ancient organic materials with remarkable accuracy. By measuring carbon isotope decay, researchers can reconstruct timelines of prehistoric human civilizations."
        },
        {
            "id": "RA-17",
            "title": "Remote Work Culture",
            "text": "The widespread adoption of digital communication tools has enabled millions of employees to work remotely. Organizations are now redesigning office spaces to foster collaboration rather than individual desk work."
        },
        {
            "id": "RA-18",
            "title": "Botanical Adaptation",
            "text": "Desert plants have evolved specialized physiological structures to survive extreme aridity. Succulent leaves, deep root systems, and nocturnal gas exchange allow these species to conserve precious moisture."
        },
        {
            "id": "RA-19",
            "title": "Financial Literacy",
            "text": "Understanding basic financial concepts such as compound interest, inflation, and risk diversification is essential for personal economic stability. Many educators advocate integrating financial literacy into secondary school curricula."
        },
        {
            "id": "RA-20",
            "title": "Symphonic Acoustics",
            "text": "Concert hall acoustics depend on precise architectural geometry and material selection. Engineers carefully calculate sound reflection angles to ensure that orchestral music reaches every listener with clarity and warmth."
        },
        {
            "id": "RA-21",
            "title": "Microplastics Pollution",
            "text": "Microscopic plastic particles have been detected in marine organisms, drinking water, and even polar ice. Scientists are actively investigating the long-term ecological and physiological impacts of microplastic accumulation."
        },
        {
            "id": "RA-22",
            "title": "Industrial Automation",
            "text": "Robotic assembly lines have dramatically increased manufacturing precision and workplace safety. Nevertheless, policymakers must address the socioeconomic challenges of retraining workers displaced by automation."
        },
        {
            "id": "RA-23",
            "title": "Renaissance Art",
            "text": "Renaissance painters introduced linear perspective and anatomical realism to European art. Patronage from wealthy merchant families allowed artists to experiment with innovative techniques and secular themes."
        },
        {
            "id": "RA-24",
            "title": "Geothermal Power",
            "text": "Geothermal energy harnesses heat stored beneath the Earth's crust to generate reliable electricity. Unlike solar or wind power, geothermal plants operate continuously regardless of weather fluctuations."
        },
        {
            "id": "RA-25",
            "title": "Cognitive Development",
            "text": "Early childhood interaction plays a formative role in emotional and cognitive development. Responsive communication between caregivers and infants strengthens neural pathways associated with language acquisition."
        },
        {
            "id": "RA-26",
            "title": "Oceanic Currents",
            "text": "Deep ocean currents are driven by differences in water density, which is controlled by temperature and salinity. This global conveyor belt regulates Earth's climate by transporting thermal energy from the equator toward the poles."
        },
        {
            "id": "RA-27",
            "title": "Constitutional Law",
            "text": "A constitution establishes the fundamental principles according to which a state is governed. By separating powers among executive, legislative, and judicial branches, democratic frameworks prevent the concentration of authority."
        },
        {
            "id": "RA-28",
            "title": "Antibiotic Resistance",
            "text": "The widespread misuse of antibiotics in both human medicine and livestock farming has accelerated the evolution of resistant bacterial strains. Global health organizations urge stricter prescription guidelines and investment in novel therapeutics."
        },
        {
            "id": "RA-29",
            "title": "Urban Heat Islands",
            "text": "Metropolitan areas often experience significantly warmer temperatures than surrounding rural regions due to heat-absorbing concrete and asphalt. Planting urban forests and installing reflective rooftops can mitigate this phenomenon."
        },
        {
            "id": "RA-30",
            "title": "Impressionist Painting",
            "text": "Nineteenth-century Impressionist artists rejected rigid academic conventions in favor of capturing fleeting moments of natural light. Using visible brushstrokes and vibrant colors, they depicted everyday modern life outdoors."
        },
        {
            "id": "RA-31",
            "title": "Demographic Transition",
            "text": "As societies industrialize and healthcare improves, population growth typically follows a predictable demographic transition. Mortality rates decline first, followed gradually by lower fertility rates and an aging population structure."
        },
        {
            "id": "RA-32",
            "title": "Plate Tectonics",
            "text": "The Earth's lithosphere is divided into several rigid tectonic plates that float atop the semi-fluid asthenosphere. Collisions and separations along plate boundaries generate earthquakes, volcanic activity, and mountain ranges."
        },
        {
            "id": "RA-33",
            "title": "Cognitive Dissonance",
            "text": "Social psychologists define cognitive dissonance as the mental discomfort experienced when a person holds two contradictory beliefs simultaneously. To resolve this tension, individuals often rationalize their behavior or filter out conflicting evidence."
        },
        {
            "id": "RA-34",
            "title": "Monetary Policy",
            "text": "Central banks regulate national money supply and interest rates to maintain price stability and maximum employment. During periods of high inflation, raising benchmark interest rates helps cool excessive consumer spending."
        },
        {
            "id": "RA-35",
            "title": "Photosynthetic Efficiency",
            "text": "Plants convert solar radiation into chemical energy through the complex biochemical pathway of photosynthesis. Agricultural scientists are researching ways to enhance photosynthetic efficiency to boost global food security."
        },
        {
            "id": "RA-36",
            "title": "Digital Privacy",
            "text": "Every online interaction leaves a digital footprint that commercial algorithms analyze to predict consumer behavior. Data protection regulations aim to give citizens greater transparency and control over their personal information."
        },
        {
            "id": "RA-37",
            "title": "Glacial Retreat",
            "text": "Mountain glaciers serve as vital freshwater reservoirs for ratusan of millions of people downstream. Accelerated glacial retreat threatens seasonal water supplies for agriculture, hydroelectric generation, and drinking water."
        },
        {
            "id": "RA-38",
            "title": "Epigenetic Inheritance",
            "text": "Epigenetics examines how environmental factors such as diet, stress, and toxins can alter gene expression without changing the underlying DNA sequence. Remarkably, some of these modifications can be passed down to subsequent generations."
        },
        {
            "id": "RA-39",
            "title": "Classical Conditioning",
            "text": "Ivan Pavlov demonstrated that behavioral reflexes could be conditioned through repeated association between a neutral stimulus and an automatic response. His pioneering experiments laid the empirical foundation for modern behavioral psychology."
        },
        {
            "id": "RA-40",
            "title": "Circular Economy",
            "text": "Unlike the traditional linear model of make, use, and dispose, a circular economy designs out waste by keeping materials in continuous use. Repairing, refurbishing, and recycling products conserves finite natural resources."
        },
        {
            "id": "RA-41",
            "title": "Exoplanet Discovery",
            "text": "Astronomers detect distant exoplanets primarily by observing the minute dimming of a star's light as a planet transits across its face. Spectroscopic analysis of starlight passing through planetary atmospheres can reveal chemical signatures of water."
        },
        {
            "id": "RA-42",
            "title": "Forensic Anthropology",
            "text": "Forensic anthropologists apply osteological techniques to identify human remains in legal and archaeological contexts. Skeletal markers provide reliable indicators of age, biological sex, stature, and past physical trauma."
        },
        {
            "id": "RA-43",
            "title": "Microfinance Initiatives",
            "text": "Microfinance institutions provide small loans and basic banking services to low-income entrepreneurs who lack access to traditional credit. Empowering local small businesses helps stimulate grassroots economic development."
        },
        {
            "id": "RA-44",
            "title": "Acoustic Ecology",
            "text": "Acoustic ecology studies the relationship between living organisms and their sonic environment. Rising levels of anthropogenic noise pollution in oceans and cities disrupt animal communication, navigation, and mating patterns."
        },
        {
            "id": "RA-45",
            "title": "Nanotechnology in Medicine",
            "text": "Engineered nanoparticles can be designed to deliver chemotherapy drugs directly to cancerous cells while sparing healthy tissue. This targeted delivery mechanism significantly reduces systemic side effects for patients."
        },
        {
            "id": "RA-46",
            "title": "Vertical Farming",
            "text": "Vertical farming cultivates crops in vertically stacked layers inside controlled indoor environments using LED lighting and hydroponic systems. This approach allows year-round food production inside dense urban centers."
        },
        {
            "id": "RA-47",
            "title": "The Silk Road",
            "text": "The ancient Silk Road was an expansive network of trade routes connecting East Asia with the Mediterranean world. Beyond silk and spices, merchants facilitated the exchange of philosophies, scientific knowledge, and artistic styles."
        },
        {
            "id": "RA-48",
            "title": "Cybersecurity Resilience",
            "text": "As critical infrastructure becomes increasingly digitized, protecting power grids and financial networks from cyberattacks is a national priority. Multi-factor authentication and regular security audits are essential defensive measures."
        },
        {
            "id": "RA-49",
            "title": "Ornithological Migration",
            "text": "Migratory birds navigate thousands of kilometers across continents using a combination of celestial cues, landmarks, and sensitivity to Earth's magnetic field. Preserving wetland stopover sites is critical for their survival."
        },
        {
            "id": "RA-50",
            "title": "Ethics of Autonomous Vehicles",
            "text": "Self-driving vehicles rely on lidar sensors and computer vision to navigate complex traffic scenarios. Before autonomous transport achieves universal adoption, lawmakers must establish clear legal frameworks for accident liability."
        },
        {
            "id": "RA-51",
            "title": "Circadian Rhythms and Melatonin",
            "text": "Circadian rhythms are endogenous biological oscillations that regulate the human sleep-wake cycle over a twenty-four-hour period. Exposure to artificial blue light from smartphones during late evening hours suppresses pineal melatonin secretion, delaying sleep onset and impairing cognitive restoration."
        },
        {
            "id": "RA-52",
            "title": "Keynesian Fiscal Multiplier",
            "text": "During severe economic recessions, private sector spending often contracts sharply as households prioritize debt reduction. Keynesian macroeconomics advocates countercyclical fiscal stimulus, asserting that government infrastructure investment generates a multiplier effect that revitalizes aggregate demand."
        },
        {
            "id": "RA-53",
            "title": "CRISPR Gene Editing Precision",
            "text": "CRISPR-Cas9 technology allows molecular biologists to modify targeted DNA sequences within living organisms with unprecedented precision. While this genomic tool holds immense promise for eradicating hereditary blood disorders, bioethicists caution against premature clinical applications in human embryos."
        },
        {
            "id": "RA-54",
            "title": "Plate Tectonics and Subduction Zones",
            "text": "Oceanic lithosphere is continuously generated at mid-ocean ridges and recycled back into the mantle along convergent subduction zones. The immense frictional stress accumulated between colliding tectonic plates frequently triggers megathrust earthquakes and devastating transoceanic tsunamis."
        },
        {
            "id": "RA-55",
            "title": "Mycorrhizal Fungal Networks",
            "text": "Beneath forest floors, symbiotic mycorrhizal fungi form vast microscopic networks that connect the root systems of neighboring trees. Through these underground conduits, mature canopy trees transfer surplus carbon, nitrogen, and defensive chemical signals to shaded seedlings."
        },
        {
            "id": "RA-56",
            "title": "Behavioral Nudges in Public Policy",
            "text": "Libertarian paternalism suggests that policymakers can guide citizens toward healthier financial and dietary choices without restricting individual freedom. Simple architectural adjustments, such as making pension enrollment automatic by default, dramatically increase long-term household savings rates."
        },
        {
            "id": "RA-57",
            "title": "The Hubble Tension in Cosmology",
            "text": "Modern observational cosmology faces a persistent discrepancy known as the Hubble tension. Measurements of the cosmic expansion rate derived from distant supernovae consistently exceed predictions calculated from the cosmic microwave background radiation of the early universe."
        },
        {
            "id": "RA-58",
            "title": "Antibiotic Resistance Mechanisms",
            "text": "The widespread overuse of broad-spectrum antibiotics in intensive livestock farming has accelerated the evolution of multidrug-resistant pathogens. Bacteria acquire resistance genes through horizontal plasmid transfer, threatening the efficacy of routine surgical procedures and chemotherapy."
        },
        {
            "id": "RA-59",
            "title": "Renaissance Linear Perspective",
            "text": "Fifteenth-century Florentine architects revolutionized Western visual art by formulating the mathematical principles of linear perspective. By converging parallel orthogonal lines toward a single vanishing point on the horizon, painters created a convincing illusion of three-dimensional depth."
        },
        {
            "id": "RA-60",
            "title": "Desalination and Brine Disposal",
            "text": "Reverse osmosis desalination plants provide vital freshwater supplies to arid coastal metropolises in the Middle East and Australia. However, discharging hyper-saline brine byproducts back into shallow marine ecosystems can deplete dissolved oxygen and harm benthic organisms."
        },
        {
            "id": "RA-61",
            "title": "Epigenetic Inheritance Patterns",
            "text": "Epigenetics investigates heritable alterations in gene expression that occur without modifying the underlying DNA nucleotide sequence. Environmental stressors, including severe famine and chronic toxin exposure, can leave chemical methyl tags on histones that persist across generations."
        },
        {
            "id": "RA-62",
            "title": "Central Bank Independence",
            "text": "Modern monetary theory emphasizes that central banks must operate independently from short-term partisan political pressures. When politicians manipulate interest rates to boost election prospects, economies frequently suffer from runaway inflation and currency depreciation."
        },
        {
            "id": "RA-63",
            "title": "Permafrost Thaw Feedback Loops",
            "text": "Arctic permafrost contains billions of tons of ancient organic carbon frozen since the Pleistocene epoch. As global temperatures climb, thawing tundra microbes decompose this organic matter and release methane, creating a self-reinforcing warming feedback loop."
        },
        {
            "id": "RA-64",
            "title": "Neurotransmitters and Synaptic Plasticity",
            "text": "Long-term potentiation strengthens synaptic connections between neurons that fire simultaneously during intensive learning tasks. Glutamate receptors on the postsynaptic membrane play a pivotal role in consolidating declarative memories within the mammalian cerebral cortex."
        },
        {
            "id": "RA-65",
            "title": "Comparative Advantage in International Trade",
            "text": "David Ricardo demonstrated that nations benefit from free international trade even when one country is more productive in manufacturing every commodity. By specializing in goods with the lowest opportunity cost, trading partners maximize global production efficiency."
        },
        {
            "id": "RA-66",
            "title": "Bioluminescence in Abyssal Ecosystems",
            "text": "In the perpetual darkness of the abyssal ocean zone, over seventy percent of marine species produce bioluminescent light through chemical oxidation. Deep-sea predators utilize glowing lures to attract prey, while smaller organisms emit flashes to startle attackers."
        },
        {
            "id": "RA-67",
            "title": "Urban Transit-Oriented Development",
            "text": "Transit-oriented development concentrates high-density residential housing and commercial retail within walking distance of rapid rail stations. This urban planning paradigm curbs suburban sprawl, reduces per-capita carbon emissions, and fosters vibrant pedestrian communities."
        },
        {
            "id": "RA-68",
            "title": "Quantum Cryptography and Security",
            "text": "Quantum key distribution exploits the fundamental principles of quantum mechanics to guarantee eavesdrop-proof communication channels. Because measuring a quantum photon irreversibly alters its spin state, any interception attempt immediately alerts the communicating parties."
        },
        {
            "id": "RA-69",
            "title": "The Placebo Effect in Clinical Trials",
            "text": "Double-blind randomized controlled trials are essential for isolating the true pharmacological efficacy of experimental medications. Patients receiving inert sugar pills frequently report measurable symptom relief due to neurochemical expectation pathways involving endogenous endorphins."
        },
        {
            "id": "RA-70",
            "title": "Ocean Acidification and Calcification",
            "text": "Approximately one-third of anthropogenic carbon dioxide emissions dissolve directly into the global oceans, forming carbonic acid. This gradual reduction in seawater pH depletes carbonate ions, hindering oysters, pteropods, and reef corals from constructing calcium carbonate shells."
        },
        {
            "id": "RA-71",
            "title": "Algorithmic Bias in Hiring Systems",
            "text": "Automated resume screening algorithms trained on historical corporate datasets can inadvertently perpetuate systemic gender and racial biases. Auditing machine learning models for fairness requires transparent training metrics and rigorous human oversight."
        },
        {
            "id": "RA-72",
            "title": "Precision Agriculture and Soil Sensors",
            "text": "Satellite remote sensing and wireless soil moisture probes enable modern agronomists to optimize fertilizer and irrigation delivery across heterogeneous farmlands. Targeted nutrient application minimizes agricultural runoff into freshwater watersheds while maximizing crop yields."
        },
        {
            "id": "RA-73",
            "title": "Linguistic Relativity Hypothesis",
            "text": "The Sapir-Whorf hypothesis proposes that the grammatical structure and lexicon of a native language influence how its speakers perceive and categorize reality. Empirical experiments reveal that languages with distinct terms for color shades accelerate visual discrimination."
        },
        {
            "id": "RA-74",
            "title": "Solid-State Battery Architecture",
            "text": "Next-generation solid-state batteries replace flammable liquid organic electrolytes with solid ceramic or polymer conductors. This structural innovation eliminates thermal runaway fire hazards while substantially increasing volumetric energy density for electric aviation."
        },
        {
            "id": "RA-75",
            "title": "Microplastics in Trophic Webs",
            "text": "Synthetic microfiber pollutants shed from synthetic textiles pass through municipal wastewater treatment filters and accumulate in marine food webs. Filter-feeding plankton ingest these microscopic polymers, transferring endocrine-disrupting additives up to apex predators."
        },
        {
            "id": "RA-76",
            "title": "Monetary Stagflation Dilemmas",
            "text": "Stagflation presents a severe policy dilemma in which stagnant economic growth coincides with persistent price inflation and high unemployment. Raising interest rates to curb inflation risks deepening the recession, whereas monetary easing exacerbates price instability."
        },
        {
            "id": "RA-77",
            "title": "Paleoclimatology and Tree Rings",
            "text": "Dendrochronologists reconstruct historical precipitation and temperature fluctuations by measuring the annual growth rings of ancient bristlecone pines. Wide rings indicate favorable rainy growing seasons, whereas narrow rings record severe multi-year megadroughts."
        },
        {
            "id": "RA-78",
            "title": "Vestibular System and Spatial Balance",
            "text": "The human vestibular system, located within the inner ear labyrinth, detects rotational head movements and gravitational acceleration. Fluid shifts inside three semicircular canals transmit neural signals to the cerebellum to maintain posture and visual stability."
        },
        {
            "id": "RA-79",
            "title": "Intellectual Property and Open Science",
            "text": "Patent monopolies incentivize pharmaceutical firms to invest billions in high-risk drug discovery. Nevertheless, open-science advocates contend that excessive patent thickets delay collaborative innovation and restrict affordable medicine access in developing nations."
        },
        {
            "id": "RA-80",
            "title": "Thermohaline Ocean Circulation",
            "text": "Global thermohaline circulation, often termed the oceanic conveyor belt, transports warm tropical surface waters northward toward the North Atlantic. As seawater cools and becomes denser through sea-ice formation, it sinks into the deep ocean basin, moderating European winters."
        }
    ],
    "rs": [
        {
            "id": "RS-01",
            "title": "도서관 주말 정기 휴관",
            "text": "The library will be closed for maintenance over the coming weekend."
        },
        {
            "id": "RS-02",
            "title": "과제 온라인 제출 마감",
            "text": "All assignments must be submitted online before Friday midnight."
        },
        {
            "id": "RS-03",
            "title": "캠퍼스 셔틀 버스 배차",
            "text": "The campus shuttle bus runs every fifteen minutes during peak hours."
        },
        {
            "id": "RS-04",
            "title": "국제 학생 교환 프로그램",
            "text": "Students are strongly encouraged to participate in international exchange research programs."
        },
        {
            "id": "RS-05",
            "title": "실험실 안전 수칙 준수",
            "text": "Protective goggles must be worn at all times inside the chemistry laboratory."
        },
        {
            "id": "RS-06",
            "title": "장학금 신청 서류 마감",
            "text": "Scholarship applications should be accompanied by two academic reference letters."
        },
        {
            "id": "RS-07",
            "title": "신입생 오리엔테이션 일정",
            "text": "The orientation session for new undergraduate students begins at nine tomorrow morning."
        },
        {
            "id": "RS-08",
            "title": "경제학 특강 강의실 변경",
            "text": "Today's economics lecture has been moved to the main auditorium."
        },
        {
            "id": "RS-09",
            "title": "도서 대출 연장 규정",
            "text": "Borrowed books can be renewed online unless another reader has reserved them."
        },
        {
            "id": "RS-10",
            "title": "졸업 논문 주제 승인",
            "text": "You must have your dissertation topic approved by your faculty supervisor."
        },
        {
            "id": "RS-11",
            "title": "주차 허가증 발급 안내",
            "text": "Student parking permits can be purchased at the campus security office."
        },
        {
            "id": "RS-12",
            "title": "통계 데이터 분석 필수",
            "text": "Accurate statistical analysis is essential for validating scientific research findings."
        },
        {
            "id": "RS-13",
            "title": "기숙사 보증금 환불",
            "text": "The accommodation deposit will be refunded after the final room inspection."
        },
        {
            "id": "RS-14",
            "title": "교내 체육관 무료 이용",
            "text": "Full-time students are entitled to free membership at the university sports center."
        },
        {
            "id": "RS-15",
            "title": "발표 자료 사전 업로드",
            "text": "Please upload your presentation slides to the student portal before the seminar."
        },
        {
            "id": "RS-16",
            "title": "학술지 동료 평가 과정",
            "text": "All submitted manuscripts undergo a rigorous peer review process before publication."
        },
        {
            "id": "RS-17",
            "title": "과제 표절 엄격 금지",
            "text": "Plagiarism is a serious academic offense and will result in severe penalties."
        },
        {
            "id": "RS-18",
            "title": "진로 상담 센터 예약",
            "text": "The career advisory service offers individual consultations for graduating students."
        },
        {
            "id": "RS-19",
            "title": "재생 에너지 투자 확대",
            "text": "Global investment in renewable energy has increased significantly over the past decade."
        },
        {
            "id": "RS-20",
            "title": "필수 교재 구매 안내",
            "text": "Copies of the core textbook are available in the university bookshop."
        },
        {
            "id": "RS-21",
            "title": "중간고사 성적 공지",
            "text": "Midterm examination results will be posted on the department noticeboard next Monday."
        },
        {
            "id": "RS-22",
            "title": "컴퓨터실 야간 개방",
            "text": "The computer laboratories remain open twenty-four hours during the examination period."
        },
        {
            "id": "RS-23",
            "title": "그룹 프로젝트 역할 분담",
            "text": "Effective teamwork requires clear communication and fair distribution of responsibilities."
        },
        {
            "id": "RS-24",
            "title": "현장 실습 참가 동의서",
            "text": "Participants in the geology field trip must sign a medical consent form."
        },
        {
            "id": "RS-25",
            "title": "학비 분할 납부 제도",
            "text": "Tuition fees may be paid in three installments throughout the academic year."
        },
        {
            "id": "RS-26",
            "title": "외국어 강좌 수강 신청",
            "text": "Online registration for beginner language courses closes at the end of this week."
        },
        {
            "id": "RS-27",
            "title": "연구 윤리 위원회 승인",
            "text": "Research involving human participants requires prior approval from the ethics committee."
        },
        {
            "id": "RS-28",
            "title": "교내 카페테리아 메뉴 개편",
            "text": "The student cafeteria now offers a wider selection of vegetarian meals."
        },
        {
            "id": "RS-29",
            "title": "학술 컨퍼런스 자원봉사",
            "text": "Volunteers are needed to assist international guests at the upcoming conference."
        },
        {
            "id": "RS-30",
            "title": "도서관 정숙 유지 요청",
            "text": "Please switch your mobile phones to silent mode before entering the reading room."
        },
        {
            "id": "RS-31",
            "title": "학술 에세이 참고문헌 표기",
            "text": "All quotations in your essay must be properly cited according to the style guide."
        },
        {
            "id": "RS-32",
            "title": "생물학 실습 보고서 제출",
            "text": "The biology lab report is due at the beginning of next Tuesday's class."
        },
        {
            "id": "RS-33",
            "title": "도서관 희귀 도서 열람",
            "text": "Rare manuscripts cannot be taken out of the special collections reading room."
        },
        {
            "id": "RS-34",
            "title": "학생회 선거 온라인 투표",
            "text": "Voting for the student union representatives will take place online this Thursday."
        },
        {
            "id": "RS-35",
            "title": "계절학기 등록금 납부",
            "text": "Registration for summer school modules requires advance payment of tuition fees."
        },
        {
            "id": "RS-36",
            "title": "심리학 실험 참가자 모집",
            "text": "The psychology department is looking for volunteers to participate in a memory study."
        },
        {
            "id": "RS-37",
            "title": "교내 무선 인터넷 점검",
            "text": "The campus wireless network will be temporarily unavailable between midnight and six."
        },
        {
            "id": "RS-38",
            "title": "졸업 가운 대여 신청",
            "text": "Graduating students must order their academic gowns at least three weeks in advance."
        },
        {
            "id": "RS-39",
            "title": "건축학 설계 도면 심사",
            "text": "Final architectural models will be exhibited in the main gallery next week."
        },
        {
            "id": "RS-40",
            "title": "기후 변화 심포지엄 개최",
            "text": "Leading environmental scientists will discuss global climate policy at tomorrow's symposium."
        },
        {
            "id": "RS-41",
            "title": "성적 이의 신청 절차",
            "text": "Students wishing to appeal their final grade must submit a formal written request."
        },
        {
            "id": "RS-42",
            "title": "교내 보건소 무료 예방접종",
            "text": "Free flu vaccinations are available for all registered students at the health clinic."
        },
        {
            "id": "RS-43",
            "title": "현대 문학 강의 추천 도서",
            "text": "The reading list for modern literature has been updated on the course website."
        },
        {
            "id": "RS-44",
            "title": "박물관 학생 할인 혜택",
            "text": "Admission to the national art gallery is free for students with valid identification."
        },
        {
            "id": "RS-45",
            "title": "데이터 백업의 중요성",
            "text": "Always back up your research data on an external drive to prevent accidental loss."
        },
        {
            "id": "RS-46",
            "title": "오케스트라 정기 연주회",
            "text": "The university symphony orchestra will perform Beethoven's fifth symphony this Friday evening."
        },
        {
            "id": "RS-47",
            "title": "통계 소프트웨어 실습 워크숍",
            "text": "A practical workshop on statistical software will be held in computer room three."
        },
        {
            "id": "RS-48",
            "title": "해외 인턴십 지원 자격",
            "text": "Applicants for the international internship program must demonstrate fluency in two languages."
        },
        {
            "id": "RS-49",
            "title": "교내 자전거 보관소 이용",
            "text": "Bicycles must be locked in designated racks and not left near building entrances."
        },
        {
            "id": "RS-50",
            "title": "신소재 공학 연구비 지원",
            "text": "The engineering faculty has received a major grant to develop biodegradable plastics."
        },
        {
            "id": "RS-51",
            "title": "학술 발표 시간 엄수",
            "text": "Each speaker will be given ten minutes for presentation followed by five minutes for questions."
        },
        {
            "id": "RS-52",
            "title": "기숙사 화재 대피 훈련",
            "text": "A mandatory fire drill will be conducted in all student residences tomorrow morning."
        },
        {
            "id": "RS-53",
            "title": "경제 성장과 물가 안정",
            "text": "Central banks face the difficult task of balancing economic growth with inflation control."
        },
        {
            "id": "RS-54",
            "title": "천체 관측소 야간 개방",
            "text": "The campus observatory is open to the public on clear Wednesday evenings."
        },
        {
            "id": "RS-55",
            "title": "논문 초록 단어 수 제한",
            "text": "Your conference abstract should not exceed two hundred and fifty words in length."
        },
        {
            "id": "RS-56",
            "title": "교내 서점 중고책 매입",
            "text": "The campus bookstore buys back used textbooks at the end of every semester."
        },
        {
            "id": "RS-57",
            "title": "영양학과 식습관 조사",
            "text": "Recent studies highlight the importance of a balanced diet for academic performance."
        },
        {
            "id": "RS-58",
            "title": "온라인 퀴즈 응시 기한",
            "text": "The weekly online quiz must be completed before Sunday at eleven fifty-nine."
        },
        {
            "id": "RS-59",
            "title": "고전 역사 사료 분석",
            "text": "Historians rely on primary sources to reconstruct accurate accounts of past events."
        },
        {
            "id": "RS-60",
            "title": "교내 상담 센터 비밀 보장",
            "text": "All appointments with the student counseling service are strictly confidential."
        },
        {
            "id": "RS-61",
            "title": "그룹 스터디룸 사전 예약",
            "text": "Group study rooms in the library can be booked for up to two hours."
        },
        {
            "id": "RS-62",
            "title": "신재생 에너지 보조금 정책",
            "text": "Government subsidies have encouraged homeowners to install solar panels on their roofs."
        },
        {
            "id": "RS-63",
            "title": "화학 폐기물 분리 배출",
            "text": "Hazardous chemical waste must be disposed of in clearly labeled containers."
        },
        {
            "id": "RS-64",
            "title": "취업 박람회 이력서 지참",
            "text": "Bring several printed copies of your resume to next week's career fair."
        },
        {
            "id": "RS-65",
            "title": "인공지능 윤리 가이드라인",
            "text": "The rapid development of artificial intelligence raises important ethical and legal questions."
        },
        {
            "id": "RS-66",
            "title": "학위 논문 제본 제출",
            "text": "Two bound copies of your thesis must be deposited in the university library."
        },
        {
            "id": "RS-67",
            "title": "대중교통 학생 할인 카드",
            "text": "Full-time students can apply for a thirty percent discount on public transport fares."
        },
        {
            "id": "RS-68",
            "title": "해양 생태계 보호 구역",
            "text": "Establishing marine protected areas helps depleted fish populations recover naturally."
        },
        {
            "id": "RS-69",
            "title": "수강 철회 마감일 안내",
            "text": "Next Friday is the final day to withdraw from a course without academic penalty."
        },
        {
            "id": "RS-70",
            "title": "교수님 면담 시간 예약",
            "text": "Please send an email to schedule an appointment during my regular office hours."
        },
        {
            "id": "RS-71",
            "title": "도서관 대출 도서 반납 기한",
            "text": "All borrowed library materials must be returned before the end of the examination week."
        },
        {
            "id": "RS-72",
            "title": "실험실 안전 수칙 준수",
            "text": "Students must wear protective safety goggles and lab coats during all chemistry experiments."
        },
        {
            "id": "RS-73",
            "title": "장학금 신청 서류 제출",
            "text": "Scholarship applications must be accompanied by two academic letters of recommendation."
        },
        {
            "id": "RS-74",
            "title": "온라인 강의 녹화본 업로드",
            "text": "The recorded video of today's biology lecture will be uploaded to the student portal tonight."
        },
        {
            "id": "RS-75",
            "title": "기말 에세이 표절 검사",
            "text": "Every final research essay will be screened through automated plagiarism detection software."
        },
        {
            "id": "RS-76",
            "title": "캠퍼스 주차권 갱신 안내",
            "text": "Campus parking permits expire at the end of this month and must be renewed online."
        },
        {
            "id": "RS-77",
            "title": "통계학 워크숍 사전 등록",
            "text": "Undergraduate students wishing to attend the statistics workshop should register in advance."
        },
        {
            "id": "RS-78",
            "title": "기숙사 야간 정숙 시간",
            "text": "Quiet hours in all university residence halls begin strictly at ten o'clock on weeknights."
        },
        {
            "id": "RS-79",
            "title": "그룹 프로젝트 역할 분담",
            "text": "Each member of the group project is expected to contribute equally to the final presentation."
        },
        {
            "id": "RS-80",
            "title": "국제 학생 비자 연장 상담",
            "text": "International students requiring visa extensions should contact the student advisory office immediately."
        },
        {
            "id": "RS-81",
            "title": "학술 저널 데이터베이스 접속",
            "text": "You can access peer-reviewed academic journals remotely using your university login credentials."
        },
        {
            "id": "RS-82",
            "title": "경제학 세미나 장소 변경",
            "text": "Tomorrow's macroeconomics seminar has been relocated to the main auditorium on the second floor."
        },
        {
            "id": "RS-83",
            "title": "연구 윤리 위원회 승인",
            "text": "Any research involving human participants requires prior approval from the university ethics committee."
        },
        {
            "id": "RS-84",
            "title": "교재 구판 사용 가능 여부",
            "text": "The previous edition of the textbook is still acceptable for this introductory psychology course."
        },
        {
            "id": "RS-85",
            "title": "졸업 학점 이수 요건 확인",
            "text": "Please verify your remaining credit requirements with your academic advisor before registering for classes."
        },
        {
            "id": "RS-86",
            "title": "컴퓨터 실습실 야간 폐쇄",
            "text": "The engineering computer laboratory will be closed for routine software maintenance this weekend."
        },
        {
            "id": "RS-87",
            "title": "제출 마감일 엄수 안내",
            "text": "Late assignments will not be accepted without a certified medical certificate from a physician."
        },
        {
            "id": "RS-88",
            "title": "캠퍼스 셔틀버스 운행 시간",
            "text": "The free campus shuttle bus runs every fifteen minutes between the dormitories and the library."
        },
        {
            "id": "RS-89",
            "title": "데이터 분석 결과 그래프 첨부",
            "text": "Please include clear visual charts and tables to support your empirical research findings."
        },
        {
            "id": "RS-90",
            "title": "중간고사 성적 이의 신청",
            "text": "Students who wish to appeal their midterm exam grades must submit a written request within seven days."
        },
        {
            "id": "RS-91",
            "title": "환경 과학 현장 실습 일정",
            "text": "The environmental science field trip has been postponed until next Friday due to heavy rainfall."
        },
        {
            "id": "RS-92",
            "title": "도서관 그룹 스터디룸 예약",
            "text": "Group study rooms on the third floor can be reserved for up to two hours per day."
        },
        {
            "id": "RS-93",
            "title": "참고문헌 알파벳순 정렬",
            "text": "Your bibliography must list all cited academic sources in strict alphabetical order by author surname."
        },
        {
            "id": "RS-94",
            "title": "신입생 오리엔테이션 필수 참석",
            "text": "Attendance at the orientation session is mandatory for all incoming first-year science students."
        },
        {
            "id": "RS-95",
            "title": "박물관 학생 할인 혜택",
            "text": "The national history museum offers free admission to university students with a valid identification card."
        },
        {
            "id": "RS-96",
            "title": "온라인 퀴즈 응시 제한 시간",
            "text": "Once you open the online quiz, you will have exactly thirty minutes to complete all questions."
        },
        {
            "id": "RS-97",
            "title": "졸업 논문 초록 제출 마감",
            "text": "Master's degree candidates must submit their thesis abstracts by the first Friday of November."
        },
        {
            "id": "RS-98",
            "title": "강의 계획서 필수 독서 목록",
            "text": "The course syllabus contains a comprehensive list of mandatory and supplementary weekly readings."
        },
        {
            "id": "RS-99",
            "title": "체육관 사물함 대여 신청",
            "text": "Student lockers in the athletic center are available for rent on a first-come, first-served basis."
        },
        {
            "id": "RS-100",
            "title": "외국어 어학 실습실 이용",
            "text": "The language learning center provides interactive audio software for practicing pronunciation and listening skills."
        },
        {
            "id": "RS-101",
            "title": "초청 강연 질의응답 시간",
            "text": "There will be a fifteen-minute question and answer session immediately following the guest lecture."
        },
        {
            "id": "RS-102",
            "title": "학업 성취도 평가 기준",
            "text": "Your final course grade is determined by a combination of coursework essays and written examinations."
        },
        {
            "id": "RS-103",
            "title": "캠퍼스 내 무선 인터넷 연결",
            "text": "High-speed wireless internet access is available throughout all academic buildings and student lounges."
        },
        {
            "id": "RS-104",
            "title": "연구 보조원 채용 공고",
            "text": "The sociology department is currently recruiting two undergraduate research assistants for the summer semester."
        },
        {
            "id": "RS-105",
            "title": "실험 데이터 백업 권장",
            "text": "Researchers are strongly advised to back up their raw experimental data on encrypted cloud servers."
        },
        {
            "id": "RS-106",
            "title": "수강 신청 정정 기간 안내",
            "text": "You may add or drop elective courses without penalty during the first two weeks of the semester."
        },
        {
            "id": "RS-107",
            "title": "건축학 모형 전시회 개최",
            "text": "The annual exhibition of student architectural models will be held in the design gallery next week."
        },
        {
            "id": "RS-108",
            "title": "학술 글쓰기 튜터링 센터",
            "text": "The university writing center offers free one-on-one consultations to help students structure their essays."
        },
        {
            "id": "RS-109",
            "title": "기후 변화 심포지엄 발표",
            "text": "Leading climatologists from around the world will present their latest findings at the annual symposium."
        },
        {
            "id": "RS-110",
            "title": "도서관 연체료 부과 규정",
            "text": "Overdue reserve books incur a fine of two dollars per hour until they are returned to the desk."
        },
        {
            "id": "RS-111",
            "title": "인터뷰 녹취록 익명 처리",
            "text": "All participant names in the interview transcripts must be anonymized to protect personal privacy."
        },
        {
            "id": "RS-112",
            "title": "신재생 에너지 정책 보고서",
            "text": "The government report highlights the economic benefits of investing in offshore wind energy projects."
        },
        {
            "id": "RS-113",
            "title": "생물학 현미경 사용 후 정리",
            "text": "Please ensure that all microscope lenses are cleaned properly before leaving the biology laboratory."
        },
        {
            "id": "RS-114",
            "title": "취업 박람회 이력서 지참",
            "text": "Final-year students attending the career fair should bring multiple printed copies of their resumes."
        },
        {
            "id": "RS-115",
            "title": "심리학 실험 참가자 모집",
            "text": "Volunteers are needed to participate in a cognitive memory experiment conducted by the psychology department."
        },
        {
            "id": "RS-116",
            "title": "수업 중 전자기기 사용 제한",
            "text": "Mobile phones and laptop computers must be switched to silent mode during all formal lectures."
        },
        {
            "id": "RS-117",
            "title": "학자금 대출 상환 유예 신청",
            "text": "Graduates experiencing financial hardship can apply for a temporary deferment of their student loan payments."
        },
        {
            "id": "RS-118",
            "title": "고전 문학 세미나 토론 준비",
            "text": "Please read the first three chapters of the novel before attending Wednesday's tutorial discussion."
        },
        {
            "id": "RS-119",
            "title": "캠퍼스 보건소 무료 독감 예방접종",
            "text": "The university health clinic is offering free seasonal flu vaccinations to all registered students."
        },
        {
            "id": "RS-120",
            "title": "유럽 교환학생 프로그램 설명회",
            "text": "An information session regarding the European exchange program will take place this Thursday afternoon."
        },
        {
            "id": "RS-121",
            "title": "논문 서론 연구 가설 명시",
            "text": "Your introductory paragraph should clearly state the central research hypothesis and methodology."
        },
        {
            "id": "RS-122",
            "title": "화학 폐기물 분리 배출 수칙",
            "text": "Hazardous chemical waste must be disposed of in designated containers rather than down the laboratory sink."
        },
        {
            "id": "RS-123",
            "title": "음악대학 정기 연주회 티켓",
            "text": "Complimentary tickets for the university orchestra concert can be collected from the student union desk."
        },
        {
            "id": "RS-124",
            "title": "정량적 연구와 정성적 분석 결합",
            "text": "Combining quantitative statistical surveys with qualitative interviews yields a more comprehensive analysis."
        },
        {
            "id": "RS-125",
            "title": "도서관 희귀본 열람실 이용 제한",
            "text": "Rare manuscripts in the special collections room may only be examined under staff supervision."
        },
        {
            "id": "RS-126",
            "title": "기말 발표 슬라이드 사전 제출",
            "text": "All groups must upload their presentation slides to the shared folder at least twenty-four hours in advance."
        },
        {
            "id": "RS-127",
            "title": "도시 인구 밀도와 대중교통 수요",
            "text": "Rapid population growth in metropolitan areas requires substantial investment in public transit infrastructure."
        },
        {
            "id": "RS-128",
            "title": "학부생 학술지 논문 투고 안내",
            "text": "Exceptional undergraduate research papers may be selected for publication in the annual departmental journal."
        },
        {
            "id": "RS-129",
            "title": "인공지능 윤리 가이드라인 제정",
            "text": "International regulatory bodies are working together to establish ethical guidelines for artificial intelligence."
        },
        {
            "id": "RS-130",
            "title": "캠퍼스 카페테리아 친환경 다회용기",
            "text": "The student cafeteria now offers a twenty-cent discount to customers who bring reusable coffee cups."
        },
        {
            "id": "RS-131",
            "title": "중세 역사 사료 번역 과제",
            "text": "Translating primary historical documents requires a thorough understanding of medieval Latin terminology."
        },
        {
            "id": "RS-132",
            "title": "해양 생태계 산호초 보호 구역",
            "text": "Establishing marine protected areas is essential for preserving biodiversity in vulnerable coral reef ecosystems."
        },
        {
            "id": "RS-133",
            "title": "기숙사 화재 대피 훈련 안내",
            "text": "A mandatory fire drill will be conducted in all residential buildings tomorrow morning at nine o'clock."
        },
        {
            "id": "RS-134",
            "title": "경제 성장률 전망치 하향 조정",
            "text": "Central bank economists have revised their annual economic growth forecasts downward due to global inflation."
        },
        {
            "id": "RS-135",
            "title": "신경과학 뇌파 측정 실험",
            "text": "Electroencephalography allows neuroscientists to record electrical activity across the human scalp non-invasively."
        },
        {
            "id": "RS-136",
            "title": "온라인 수강 신청 서버 점검",
            "text": "The online course enrollment system will be temporarily unavailable between midnight and six in the morning."
        },
        {
            "id": "RS-137",
            "title": "영문학 비평 에세이 인용 규격",
            "text": "All direct quotations exceeding forty words must be formatted as indented block quotes without quotation marks."
        },
        {
            "id": "RS-138",
            "title": "재생 플라스틱 포장재 의무화",
            "text": "Several European countries have introduced strict legislation mandating recycled content in plastic packaging."
        },
        {
            "id": "RS-139",
            "title": "천체 관측소 야간 공개 행사",
            "text": "The university astronomical observatory opens its telescope dome to the general public every Friday evening."
        },
        {
            "id": "RS-140",
            "title": "학기 말 강의 평가 설문 참여",
            "text": "Student feedback collected through end-of-semester course evaluations helps faculty improve teaching quality."
        }
    ],
    "di": [
        {
            "id": "DI-01",
            "title": "Quarterly Energy Consumption (in Megawatts)",
            "bars": [
                {
                    "label": "Q1",
                    "val": "45MW",
                    "h": "70px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Q2",
                    "val": "80MW",
                    "h": "125px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Q3 (Max)",
                    "val": "110MW",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Q4",
                    "val": "60MW",
                    "h": "95px",
                    "color": "#6b21a8"
                }
            ],
            "keywords": [
                "energy",
                "consumption",
                "megawatts",
                "quarter",
                "q3",
                "highest",
                "lowest",
                "q1"
            ],
            "template": "The given bar chart illustrates quarterly energy consumption in megawatts. The highest figure is observed in Q3 at 110 megawatts, whereas Q1 is the lowest at 45 megawatts. In conclusion, energy demand peaked during the third quarter."
        },
        {
            "id": "DI-02",
            "title": "Global Smartphone Market Share (%)",
            "bars": [
                {
                    "label": "Brand A",
                    "val": "32%",
                    "h": "160px",
                    "color": "#ef4444"
                },
                {
                    "label": "Brand B",
                    "val": "28%",
                    "h": "140px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Brand C",
                    "val": "18%",
                    "h": "90px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Others",
                    "val": "22%",
                    "h": "110px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "smartphone",
                "market",
                "share",
                "brand",
                "highest",
                "percent",
                "global",
                "lowest"
            ],
            "template": "The given chart depicts global smartphone market share. Brand A dominates the market with 32 percent, closely followed by Brand B at 28 percent. In summary, two major brands lead more than half of the worldwide market."
        },
        {
            "id": "DI-03",
            "title": "Renewable Energy Generation by Source (TWh)",
            "bars": [
                {
                    "label": "Solar",
                    "val": "120",
                    "h": "140px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Wind",
                    "val": "150",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Hydro",
                    "val": "90",
                    "h": "105px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Bio",
                    "val": "40",
                    "h": "50px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "renewable",
                "energy",
                "solar",
                "wind",
                "highest",
                "terawatt",
                "hydro",
                "source"
            ],
            "template": "The graph demonstrates renewable energy generation across various sources. Wind energy records the maximum contribution at 150 terawatt hours, while biomass is the lowest. Overall, wind and solar constitute the primary drivers of clean power."
        },
        {
            "id": "DI-04",
            "title": "University Enrollment by Faculty (Students)",
            "bars": [
                {
                    "label": "Engineering",
                    "val": "4,200",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Business",
                    "val": "3,800",
                    "h": "145px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Medicine",
                    "val": "2,500",
                    "h": "100px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Arts",
                    "val": "1,900",
                    "h": "75px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "university",
                "enrollment",
                "engineering",
                "business",
                "medicine",
                "arts",
                "highest",
                "students"
            ],
            "template": "The bar chart presents university student enrollment across four faculties. Engineering has the largest student body at 4,200, whereas Arts has the smallest at 1,900. Overall, STEM and business courses attract the majority of students."
        },
        {
            "id": "DI-05",
            "title": "Household Monthly Expenditure Breakdown (%)",
            "bars": [
                {
                    "label": "Housing",
                    "val": "35%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Food",
                    "val": "25%",
                    "h": "120px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Transport",
                    "val": "15%",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Savings",
                    "val": "10%",
                    "h": "50px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "household",
                "expenditure",
                "housing",
                "food",
                "transport",
                "savings",
                "highest",
                "percent"
            ],
            "template": "The chart illustrates average monthly household expenditure by category. Housing accounts for the highest proportion at 35 percent, while savings represent the lowest at 10 percent. In conclusion, essential living costs consume over half of household income."
        },
        {
            "id": "DI-06",
            "title": "Annual Rainfall in Four Cities (mm)",
            "bars": [
                {
                    "label": "Sydney",
                    "val": "1,200",
                    "h": "160px",
                    "color": "#ef4444"
                },
                {
                    "label": "Auckland",
                    "val": "1,100",
                    "h": "145px",
                    "color": "#6b21a8"
                },
                {
                    "label": "London",
                    "val": "600",
                    "h": "80px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Cairo",
                    "val": "50",
                    "h": "25px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "annual",
                "rainfall",
                "sydney",
                "auckland",
                "london",
                "cairo",
                "highest",
                "lowest"
            ],
            "template": "The bar graph compares annual precipitation in millimeters across four major cities. Sydney experiences the highest rainfall at 1,200 millimeters, whereas Cairo is extremely dry at 50 millimeters. Overall, precipitation varies dramatically by geographic region."
        },
        {
            "id": "DI-07",
            "title": "Commuter Transport Modes in Metro Area (%)",
            "bars": [
                {
                    "label": "Subway",
                    "val": "42%",
                    "h": "168px",
                    "color": "#ef4444"
                },
                {
                    "label": "Car",
                    "val": "30%",
                    "h": "120px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Bus",
                    "val": "20%",
                    "h": "80px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Bicycle",
                    "val": "8%",
                    "h": "35px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "commuter",
                "transport",
                "subway",
                "car",
                "bus",
                "bicycle",
                "highest",
                "lowest"
            ],
            "template": "The chart shows the distribution of commuter transport modes in a metropolitan area. Subway transit is the most popular choice at 42 percent, while cycling is the least common at 8 percent. In summary, public transit accounts for over sixty percent of daily commutes."
        },
        {
            "id": "DI-08",
            "title": "Global Coffee Production by Country (Million Bags)",
            "bars": [
                {
                    "label": "Brazil",
                    "val": "65M",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Vietnam",
                    "val": "30M",
                    "h": "90px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Colombia",
                    "val": "14M",
                    "h": "55px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Indonesia",
                    "val": "11M",
                    "h": "45px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "coffee",
                "production",
                "brazil",
                "vietnam",
                "colombia",
                "indonesia",
                "highest",
                "million"
            ],
            "template": "The given graph compares global coffee production among leading nations. Brazil is the dominant producer with 65 million bags, more than double Vietnam's output of 30 million. In conclusion, South American and Asian nations lead global coffee supply."
        },
        {
            "id": "DI-09",
            "title": "Average Daily Screen Time by Age Group (Hours)",
            "bars": [
                {
                    "label": "18-24",
                    "val": "7.5h",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "25-34",
                    "val": "6.2h",
                    "h": "135px",
                    "color": "#6b21a8"
                },
                {
                    "label": "35-50",
                    "val": "4.8h",
                    "h": "105px",
                    "color": "#6b21a8"
                },
                {
                    "label": "50+",
                    "val": "3.1h",
                    "h": "70px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "screen",
                "time",
                "hours",
                "age",
                "group",
                "highest",
                "lowest",
                "young"
            ],
            "template": "The bar chart illustrates average daily screen time across different age brackets. Young adults aged 18 to 24 record the highest usage at 7.5 hours per day, whereas individuals over 50 spend the least time at 3.1 hours. Overall, digital consumption decreases steadily with age."
        },
        {
            "id": "DI-10",
            "title": "Corporate R&D Investment by Sector ($ Billion)",
            "bars": [
                {
                    "label": "IT & AI",
                    "val": "$95B",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Pharma",
                    "val": "$80B",
                    "h": "145px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Auto",
                    "val": "$50B",
                    "h": "95px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Energy",
                    "val": "$25B",
                    "h": "50px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "investment",
                "research",
                "sector",
                "pharma",
                "technology",
                "highest",
                "lowest",
                "billion"
            ],
            "template": "The chart displays corporate research and development expenditure across four key industries. Information technology leads with 95 billion dollars, followed closely by pharmaceuticals at 80 billion. In conclusion, technology and healthcare drive global innovation spending."
        },
        {
            "id": "DI-11",
            "title": "Plastic Waste Recycling Rates by Region (%)",
            "bars": [
                {
                    "label": "Europe",
                    "val": "41%",
                    "h": "160px",
                    "color": "#ef4444"
                },
                {
                    "label": "Asia",
                    "val": "28%",
                    "h": "115px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Americas",
                    "val": "18%",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Africa",
                    "val": "12%",
                    "h": "50px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "plastic",
                "recycling",
                "europe",
                "asia",
                "americas",
                "africa",
                "highest",
                "percent"
            ],
            "template": "The graph illustrates regional plastic waste recycling rates. Europe achieves the highest recycling rate at 41 percent, while Africa records the lowest at 12 percent. Overall, global recycling infrastructure shows significant regional disparities."
        },
        {
            "id": "DI-12",
            "title": "Electric Vehicle Sales Growth (Thousand Units)",
            "bars": [
                {
                    "label": "2021",
                    "val": "120k",
                    "h": "55px",
                    "color": "#64748b"
                },
                {
                    "label": "2022",
                    "val": "210k",
                    "h": "95px",
                    "color": "#6b21a8"
                },
                {
                    "label": "2023",
                    "val": "340k",
                    "h": "135px",
                    "color": "#6b21a8"
                },
                {
                    "label": "2024",
                    "val": "480k",
                    "h": "170px",
                    "color": "#ef4444"
                }
            ],
            "keywords": [
                "electric",
                "vehicle",
                "sales",
                "growth",
                "thousand",
                "highest",
                "lowest",
                "increase"
            ],
            "template": "The bar chart tracks annual electric vehicle sales from 2021 to 2024. Sales rose sharply from 120 thousand units in 2021 to a peak of 480 thousand units in 2024. In conclusion, adoption of electric mobility has quadrupled over the four-year period."
        },
        {
            "id": "DI-13",
            "title": "Library Book Loans by Genre (%)",
            "bars": [
                {
                    "label": "Science",
                    "val": "36%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "History",
                    "val": "26%",
                    "h": "120px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Fiction",
                    "val": "22%",
                    "h": "100px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Poetry",
                    "val": "16%",
                    "h": "70px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "library",
                "book",
                "loans",
                "genre",
                "science",
                "history",
                "fiction",
                "poetry"
            ],
            "template": "The chart shows the distribution of university library book loans by genre. Science texts account for the largest share at 36 percent, whereas poetry represents the smallest at 16 percent. Overall, academic nonfiction dominates student borrowing habits."
        },
        {
            "id": "DI-14",
            "title": "Hospital Patient Satisfaction Survey (%)",
            "bars": [
                {
                    "label": "Excellent",
                    "val": "48%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Good",
                    "val": "34%",
                    "h": "125px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Fair",
                    "val": "12%",
                    "h": "55px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Poor",
                    "val": "6%",
                    "h": "30px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "hospital",
                "patient",
                "satisfaction",
                "excellent",
                "good",
                "poor",
                "highest",
                "percent"
            ],
            "template": "The bar graph summarizes findings from a hospital patient satisfaction survey. Nearly half of respondents rated their care as excellent at 48 percent, while only 6 percent reported poor service. In conclusion, over eighty percent of patients expressed positive satisfaction."
        },
        {
            "id": "DI-15",
            "title": "Global Freshwater Usage by Sector (%)",
            "bars": [
                {
                    "label": "Farming",
                    "val": "70%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Industry",
                    "val": "20%",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Domestic",
                    "val": "10%",
                    "h": "45px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "freshwater",
                "usage",
                "sector",
                "farming",
                "agriculture",
                "industry",
                "domestic",
                "highest"
            ],
            "template": "The chart illustrates global freshwater consumption across three main sectors. Agriculture consumes the vast majority at 70 percent, followed by industry at 20 percent and domestic use at 10 percent. Overall, irrigation remains the primary driver of global water demand."
        },
        {
            "id": "DI-16",
            "title": "Global Airline Passenger Traffic (Billions)",
            "bars": [
                {
                    "label": "2020",
                    "val": "1.8B",
                    "h": "50px",
                    "color": "#64748b"
                },
                {
                    "label": "2021",
                    "val": "2.3B",
                    "h": "70px",
                    "color": "#6b21a8"
                },
                {
                    "label": "2022",
                    "val": "3.5B",
                    "h": "120px",
                    "color": "#6b21a8"
                },
                {
                    "label": "2023",
                    "val": "4.4B",
                    "h": "165px",
                    "color": "#ef4444"
                }
            ],
            "keywords": [
                "airline",
                "passenger",
                "traffic",
                "billion",
                "recovery",
                "highest",
                "lowest",
                "growth"
            ],
            "template": "The bar chart illustrates global airline passenger traffic in billions from 2020 to 2023. Passenger numbers recovered strongly from a low of 1.8 billion in 2020 to a peak of 4.4 billion in 2023. Overall, global aviation has experienced a rapid post-pandemic rebound."
        },
        {
            "id": "DI-17",
            "title": "Average Life Expectancy by Continent (Years)",
            "bars": [
                {
                    "label": "Europe",
                    "val": "81y",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Americas",
                    "val": "77y",
                    "h": "145px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Asia",
                    "val": "74y",
                    "h": "130px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Africa",
                    "val": "64y",
                    "h": "90px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "life",
                "expectancy",
                "continent",
                "europe",
                "americas",
                "asia",
                "africa",
                "years"
            ],
            "template": "The graph compares average life expectancy across four continents. Europe records the highest longevity at 81 years, whereas Africa records the lowest at 64 years. In conclusion, healthcare access and living standards significantly influence regional life expectancy."
        },
        {
            "id": "DI-18",
            "title": "E-Commerce Payment Methods Share (%)",
            "bars": [
                {
                    "label": "Digital Wallet",
                    "val": "49%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Credit Card",
                    "val": "31%",
                    "h": "115px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Bank Transfer",
                    "val": "14%",
                    "h": "60px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Cash",
                    "val": "6%",
                    "h": "30px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "payment",
                "digital",
                "wallet",
                "credit",
                "card",
                "cash",
                "highest",
                "percent"
            ],
            "template": "The chart displays the breakdown of e-commerce payment methods. Digital wallets account for nearly half of all transactions at 49 percent, while cash represents only 6 percent. Overall, mobile and electronic payments dominate online retail."
        },
        {
            "id": "DI-19",
            "title": "Carbon Emissions by Transport Mode (g/km)",
            "bars": [
                {
                    "label": "Domestic Flight",
                    "val": "255g",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Petrol Car",
                    "val": "170g",
                    "h": "115px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Bus",
                    "val": "105g",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "High-Speed Rail",
                    "val": "14g",
                    "h": "25px",
                    "color": "#10b981"
                }
            ],
            "keywords": [
                "carbon",
                "emissions",
                "flight",
                "car",
                "bus",
                "rail",
                "highest",
                "lowest"
            ],
            "template": "The bar graph compares carbon dioxide emissions per passenger kilometer across four transport modes. Domestic flights emit the highest carbon at 255 grams, whereas high-speed rail emits only 14 grams. In summary, rail travel is by far the most environmentally friendly option."
        },
        {
            "id": "DI-20",
            "title": "Graduate Employment Rate by Degree (%)",
            "bars": [
                {
                    "label": "Medicine",
                    "val": "96%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Computer Sci",
                    "val": "91%",
                    "h": "155px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Law",
                    "val": "84%",
                    "h": "135px",
                    "color": "#6b21a8"
                },
                {
                    "label": "History",
                    "val": "72%",
                    "h": "105px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "graduate",
                "employment",
                "medicine",
                "computer",
                "law",
                "history",
                "highest",
                "percent"
            ],
            "template": "The chart shows graduate employment rates within six months of graduation. Medicine achieves the highest placement rate at 96 percent, followed by Computer Science at 91 percent. Overall, vocational and technical degrees demonstrate strong job market demand."
        },
        {
            "id": "DI-21",
            "title": "Daily Water Consumption per Capita (Liters)",
            "bars": [
                {
                    "label": "USA",
                    "val": "310L",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Australia",
                    "val": "230L",
                    "h": "130px",
                    "color": "#6b21a8"
                },
                {
                    "label": "UK",
                    "val": "145L",
                    "h": "85px",
                    "color": "#6b21a8"
                },
                {
                    "label": "India",
                    "val": "90L",
                    "h": "55px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "water",
                "consumption",
                "liters",
                "usa",
                "australia",
                "uk",
                "india",
                "highest"
            ],
            "template": "The graph compares daily domestic water usage per person in four countries. The United States records the highest consumption at 310 liters per day, whereas India uses 90 liters. In conclusion, per capita water usage varies widely across nations."
        },
        {
            "id": "DI-22",
            "title": "Causes of Deforestation in Tropical Regions (%)",
            "bars": [
                {
                    "label": "Cattle Ranching",
                    "val": "45%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Crop Farming",
                    "val": "28%",
                    "h": "110px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Logging",
                    "val": "17%",
                    "h": "70px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Infrastructure",
                    "val": "10%",
                    "h": "45px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "deforestation",
                "tropical",
                "cattle",
                "farming",
                "logging",
                "infrastructure",
                "highest",
                "percent"
            ],
            "template": "The chart illustrates the primary drivers of tropical deforestation. Cattle ranching is the leading cause at 45 percent, followed by commercial crop farming at 28 percent. Overall, agricultural expansion accounts for nearly three-quarters of forest loss."
        },
        {
            "id": "DI-23",
            "title": "Global Semiconductor Manufacturing Share (%)",
            "bars": [
                {
                    "label": "Taiwan",
                    "val": "46%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "South Korea",
                    "val": "22%",
                    "h": "95px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Japan",
                    "val": "15%",
                    "h": "65px",
                    "color": "#6b21a8"
                },
                {
                    "label": "USA",
                    "val": "12%",
                    "h": "55px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "semiconductor",
                "manufacturing",
                "taiwan",
                "korea",
                "japan",
                "usa",
                "highest",
                "percent"
            ],
            "template": "The bar chart depicts global semiconductor manufacturing capacity by country. Taiwan holds the largest share at 46 percent, followed by South Korea at 22 percent. In summary, East Asia accounts for the vast majority of global chip fabrication."
        },
        {
            "id": "DI-24",
            "title": "Preferred News Sources by Platform (%)",
            "bars": [
                {
                    "label": "Social Media",
                    "val": "44%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "News Websites",
                    "val": "30%",
                    "h": "115px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Television",
                    "val": "19%",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Print Paper",
                    "val": "7%",
                    "h": "30px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "news",
                "sources",
                "social",
                "media",
                "television",
                "print",
                "highest",
                "lowest"
            ],
            "template": "The graph illustrates preferred platforms for consuming daily news. Social media leads at 44 percent, whereas traditional print newspapers account for just 7 percent. In conclusion, digital channels have largely replaced print journalism."
        },
        {
            "id": "DI-25",
            "title": "Urban Green Space per Resident (Square Meters)",
            "bars": [
                {
                    "label": "Oslo",
                    "val": "68m²",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Singapore",
                    "val": "47m²",
                    "h": "125px",
                    "color": "#6b21a8"
                },
                {
                    "label": "London",
                    "val": "27m²",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Tokyo",
                    "val": "7m²",
                    "h": "30px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "urban",
                "green",
                "space",
                "oslo",
                "singapore",
                "london",
                "tokyo",
                "highest"
            ],
            "template": "The bar chart compares urban green space per capita across four cities. Oslo offers the most parkland at 68 square meters per resident, while Tokyo has only 7 square meters. Overall, population density strongly affects green space availability."
        },
        {
            "id": "DI-26",
            "title": "Food Waste Across Supply Chain Stages (%)",
            "bars": [
                {
                    "label": "Households",
                    "val": "43%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Farming",
                    "val": "24%",
                    "h": "95px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Processing",
                    "val": "18%",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Retail",
                    "val": "15%",
                    "h": "60px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "food",
                "waste",
                "households",
                "farming",
                "processing",
                "retail",
                "highest",
                "percent"
            ],
            "template": "The chart shows the percentage of food waste generated at each stage of the supply chain. Households are responsible for the largest share at 43 percent, whereas retail stores account for the lowest at 15 percent. In conclusion, consumer behavior is critical to reducing food waste."
        },
        {
            "id": "DI-27",
            "title": "Foreign Language Enrollment in High Schools (%)",
            "bars": [
                {
                    "label": "Spanish",
                    "val": "46%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "French",
                    "val": "24%",
                    "h": "95px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Mandarin",
                    "val": "18%",
                    "h": "75px",
                    "color": "#6b21a8"
                },
                {
                    "label": "German",
                    "val": "12%",
                    "h": "50px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "foreign",
                "language",
                "spanish",
                "french",
                "mandarin",
                "german",
                "highest",
                "students"
            ],
            "template": "The graph presents foreign language enrollment distribution in secondary schools. Spanish is the most widely studied language at 46 percent, while German is the lowest at 12 percent. Overall, Spanish and French remain the top choices among students."
        },
        {
            "id": "DI-28",
            "title": "Average Hotel Occupancy Rate by Season (%)",
            "bars": [
                {
                    "label": "Spring",
                    "val": "68%",
                    "h": "115px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Summer",
                    "val": "89%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Autumn",
                    "val": "72%",
                    "h": "125px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Winter",
                    "val": "51%",
                    "h": "80px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "hotel",
                "occupancy",
                "season",
                "summer",
                "winter",
                "spring",
                "highest",
                "percent"
            ],
            "template": "The bar chart illustrates seasonal hotel occupancy rates throughout the year. Occupancy peaks during the summer holiday season at 89 percent and drops to its lowest point in winter at 51 percent. In conclusion, tourism demand exhibits strong seasonal fluctuations."
        },
        {
            "id": "DI-29",
            "title": "Battery Energy Density by Chemistry (Wh/kg)",
            "bars": [
                {
                    "label": "Lead-Acid",
                    "val": "45",
                    "h": "35px",
                    "color": "#64748b"
                },
                {
                    "label": "LFP Li-ion",
                    "val": "160",
                    "h": "95px",
                    "color": "#6b21a8"
                },
                {
                    "label": "NMC Li-ion",
                    "val": "260",
                    "h": "135px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Solid-State",
                    "val": "400",
                    "h": "170px",
                    "color": "#ef4444"
                }
            ],
            "keywords": [
                "battery",
                "energy",
                "density",
                "lithium",
                "solid",
                "state",
                "highest",
                "lowest"
            ],
            "template": "The chart compares gravimetric energy density across four battery technologies. Next-generation solid-state batteries achieve the highest density at 400 watt-hours per kilogram, compared to just 45 for traditional lead-acid. Overall, battery innovation is dramatically increasing energy storage capacity."
        },
        {
            "id": "DI-30",
            "title": "Public Library Funding Sources (%)",
            "bars": [
                {
                    "label": "Local Tax",
                    "val": "62%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "State Grant",
                    "val": "23%",
                    "h": "80px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Donations",
                    "val": "10%",
                    "h": "45px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Fees",
                    "val": "5%",
                    "h": "25px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "library",
                "funding",
                "local",
                "tax",
                "grant",
                "donations",
                "highest",
                "percent"
            ],
            "template": "The graph illustrates the revenue sources supporting public libraries. Local municipal taxes provide the majority of funding at 62 percent, whereas service fees contribute only 5 percent. In summary, public libraries rely primarily on local taxpayer support."
        },
        {
            "id": "DI-31",
            "title": "Global EV Battery Market Share by Chemistry (%)",
            "bars": [
                {
                    "label": "LFP",
                    "val": "52%",
                    "h": "165px",
                    "color": "#10b981"
                },
                {
                    "label": "NMC",
                    "val": "38%",
                    "h": "125px",
                    "color": "#2563eb"
                },
                {
                    "label": "NCA",
                    "val": "7%",
                    "h": "40px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Solid-State",
                    "val": "3%",
                    "h": "22px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "battery",
                "market",
                "share",
                "chemistry",
                "LFP",
                "NMC",
                "highest",
                "percent"
            ],
            "template": "The bar chart illustrates the global electric vehicle battery market share categorized by chemical composition. Lithium iron phosphate, or LFP, dominates the market at 52 percent, followed by NMC batteries at 38 percent, while solid-state batteries account for only 3 percent. Overall, cost-effective LFP chemistry represents the leading technology in electric mobility."
        },
        {
            "id": "DI-32",
            "title": "Average Weekly Study Hours by Academic Major",
            "bars": [
                {
                    "label": "Medicine",
                    "val": "34h",
                    "h": "175px",
                    "color": "#ef4444"
                },
                {
                    "label": "Engineering",
                    "val": "28h",
                    "h": "140px",
                    "color": "#2563eb"
                },
                {
                    "label": "Law",
                    "val": "25h",
                    "h": "125px",
                    "color": "#0284c7"
                },
                {
                    "label": "Business",
                    "val": "16h",
                    "h": "80px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "study",
                "hours",
                "major",
                "medicine",
                "engineering",
                "law",
                "business",
                "highest"
            ],
            "template": "The graph compares the average weekly self-study hours across four university majors. Medical students record the highest study workload at 34 hours per week, followed by engineering at 28 hours, whereas business students spend the least time at 16 hours. In conclusion, clinical and technical disciplines demand substantially greater independent study time."
        },
        {
            "id": "DI-33",
            "title": "Household Freshwater Consumption by End Use (%)",
            "bars": [
                {
                    "label": "Showers/Bath",
                    "val": "39%",
                    "h": "155px",
                    "color": "#0284c7"
                },
                {
                    "label": "Laundry",
                    "val": "25%",
                    "h": "105px",
                    "color": "#2563eb"
                },
                {
                    "label": "Garden",
                    "val": "22%",
                    "h": "95px",
                    "color": "#10b981"
                },
                {
                    "label": "Cooking",
                    "val": "14%",
                    "h": "60px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "freshwater",
                "consumption",
                "household",
                "showers",
                "laundry",
                "garden",
                "cooking",
                "percent"
            ],
            "template": "The chart presents residential freshwater consumption broken down by domestic activity. Showers and bathing account for the largest proportion at 39 percent, followed closely by laundry at 25 percent and garden irrigation at 22 percent, while cooking represents only 14 percent. Overall, personal hygiene and washing consume nearly two-thirds of household water."
        },
        {
            "id": "DI-34",
            "title": "Global Semiconductor Fab Capacity by Region (%)",
            "bars": [
                {
                    "label": "Taiwan",
                    "val": "46%",
                    "h": "170px",
                    "color": "#2563eb"
                },
                {
                    "label": "South Korea",
                    "val": "24%",
                    "h": "105px",
                    "color": "#0284c7"
                },
                {
                    "label": "USA",
                    "val": "12%",
                    "h": "60px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Europe",
                    "val": "8%",
                    "h": "40px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "semiconductor",
                "capacity",
                "Taiwan",
                "Korea",
                "USA",
                "Europe",
                "highest",
                "percent"
            ],
            "template": "The bar graph depicts global semiconductor fabrication capacity distributed across major regions. Taiwan holds the largest share at 46 percent, followed by South Korea at 24 percent, whereas Europe accounts for just 8 percent. In summary, advanced microchip manufacturing remains heavily concentrated in East Asia."
        },
        {
            "id": "DI-35",
            "title": "Urban Commuter Mode Share in Amsterdam (%)",
            "bars": [
                {
                    "label": "Bicycle",
                    "val": "48%",
                    "h": "170px",
                    "color": "#10b981"
                },
                {
                    "label": "Public Transit",
                    "val": "27%",
                    "h": "110px",
                    "color": "#2563eb"
                },
                {
                    "label": "Private Car",
                    "val": "15%",
                    "h": "65px",
                    "color": "#ef4444"
                },
                {
                    "label": "Walking",
                    "val": "10%",
                    "h": "45px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "commuter",
                "Amsterdam",
                "bicycle",
                "public",
                "transit",
                "car",
                "walking",
                "percent"
            ],
            "template": "The chart illustrates daily commuter transportation modes in Amsterdam. Cycling is the predominant choice at 48 percent, followed by public transit at 27 percent, while private automobiles and walking represent 15 percent and 10 percent respectively. Overall, sustainable non-motorized and collective transport accounts for 85 percent of urban trips."
        },
        {
            "id": "DI-36",
            "title": "Corporate Cybersecurity Breach Causes (%)",
            "bars": [
                {
                    "label": "Phishing",
                    "val": "44%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Stolen Password",
                    "val": "29%",
                    "h": "115px",
                    "color": "#f59e0b"
                },
                {
                    "label": "Software Bug",
                    "val": "18%",
                    "h": "75px",
                    "color": "#2563eb"
                },
                {
                    "label": "Insider Leak",
                    "val": "9%",
                    "h": "40px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "cybersecurity",
                "breach",
                "phishing",
                "password",
                "software",
                "insider",
                "highest",
                "percent"
            ],
            "template": "The graph displays the primary root causes of corporate cybersecurity breaches. Social engineering phishing attacks represent the leading vector at 44 percent, followed by compromised passwords at 29 percent, whereas insider leaks account for only 9 percent. In conclusion, human credential vulnerabilities cause over 70 percent of security incidents."
        },
        {
            "id": "DI-37",
            "title": "Global Coffee Production by Leading Country (Million Bags)",
            "bars": [
                {
                    "label": "Brazil",
                    "val": "66M",
                    "h": "175px",
                    "color": "#10b981"
                },
                {
                    "label": "Vietnam",
                    "val": "30M",
                    "h": "95px",
                    "color": "#0284c7"
                },
                {
                    "label": "Colombia",
                    "val": "14M",
                    "h": "55px",
                    "color": "#2563eb"
                },
                {
                    "label": "Ethiopia",
                    "val": "8M",
                    "h": "35px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "coffee",
                "production",
                "Brazil",
                "Vietnam",
                "Colombia",
                "Ethiopia",
                "million",
                "highest"
            ],
            "template": "The chart compares annual coffee bean production among the top four exporting nations. Brazil leads global output by a wide margin at 66 million bags, followed by Vietnam at 30 million bags, while Ethiopia produces 8 million bags. Overall, Brazil alone supplies more coffee than the next three producers combined."
        },
        {
            "id": "DI-38",
            "title": "Hospital Readmission Rates by Chronic Condition (%)",
            "bars": [
                {
                    "label": "Heart Failure",
                    "val": "24%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Pneumonia",
                    "val": "18%",
                    "h": "125px",
                    "color": "#f59e0b"
                },
                {
                    "label": "Diabetes",
                    "val": "14%",
                    "h": "95px",
                    "color": "#2563eb"
                },
                {
                    "label": "Asthma",
                    "val": "7%",
                    "h": "50px",
                    "color": "#10b981"
                }
            ],
            "keywords": [
                "hospital",
                "readmission",
                "heart",
                "pneumonia",
                "diabetes",
                "asthma",
                "rate",
                "percent"
            ],
            "template": "The bar chart shows 30-day hospital readmission rates across four chronic medical conditions. Congestive heart failure records the highest readmission rate at 24 percent, followed by pneumonia at 18 percent, whereas asthma exhibits the lowest rate at 7 percent. Overall, cardiovascular patients require the most intensive post-discharge monitoring."
        },
        {
            "id": "DI-39",
            "title": "Ocean Plastic Debris by Source Category (%)",
            "bars": [
                {
                    "label": "Fishing Gear",
                    "val": "46%",
                    "h": "170px",
                    "color": "#0284c7"
                },
                {
                    "label": "Packaging",
                    "val": "31%",
                    "h": "120px",
                    "color": "#ef4444"
                },
                {
                    "label": "Textiles",
                    "val": "13%",
                    "h": "55px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Microbeads",
                    "val": "10%",
                    "h": "42px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "ocean",
                "plastic",
                "fishing",
                "packaging",
                "textiles",
                "microbeads",
                "debris",
                "percent"
            ],
            "template": "The graph illustrates the composition of floating marine plastic debris by origin. Discarded commercial fishing gear accounts for the largest fraction at 46 percent, followed by single-use packaging at 31 percent, while personal care microbeads contribute 10 percent. In summary, regulating maritime fishing nets and consumer packaging is vital to curbing ocean pollution."
        },
        {
            "id": "DI-40",
            "title": "University Research Grant Allocation by Faculty (%)",
            "bars": [
                {
                    "label": "Biomedical",
                    "val": "48%",
                    "h": "170px",
                    "color": "#2563eb"
                },
                {
                    "label": "AI & Computing",
                    "val": "29%",
                    "h": "115px",
                    "color": "#10b981"
                },
                {
                    "label": "Social Science",
                    "val": "15%",
                    "h": "65px",
                    "color": "#f59e0b"
                },
                {
                    "label": "Humanities",
                    "val": "8%",
                    "h": "35px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "university",
                "research",
                "grant",
                "biomedical",
                "computing",
                "humanities",
                "allocation",
                "percent"
            ],
            "template": "The chart depicts how annual research grant funding is distributed among four academic faculties. Biomedical sciences receive nearly half of all funding at 48 percent, followed by artificial intelligence and computing at 29 percent, whereas humanities receive only 8 percent. Overall, STEM and clinical fields capture over three-quarters of institutional grants."
        },
        {
            "id": "DI-41",
            "title": "Global Carbon Emissions by Economic Sector (%)",
            "bars": [
                {
                    "label": "Power & Heat",
                    "val": "38%",
                    "h": "165px",
                    "color": "#ef4444"
                },
                {
                    "label": "Transport",
                    "val": "26%",
                    "h": "115px",
                    "color": "#f59e0b"
                },
                {
                    "label": "Manufacturing",
                    "val": "22%",
                    "h": "98px",
                    "color": "#2563eb"
                },
                {
                    "label": "Agriculture",
                    "val": "14%",
                    "h": "65px",
                    "color": "#10b981"
                }
            ],
            "keywords": [
                "carbon",
                "emissions",
                "sector",
                "power",
                "transport",
                "manufacturing",
                "agriculture",
                "percent"
            ],
            "template": "The bar graph breaks down global greenhouse gas emissions by major economic sector. Electricity and heat generation represents the largest emitter at 38 percent, followed by transportation at 26 percent and manufacturing at 22 percent, while agriculture accounts for 14 percent. In conclusion, decarbonizing the power grid and electrifying transport are the highest climate priorities."
        },
        {
            "id": "DI-42",
            "title": "Smartphone Daily Screen Time by App Category (%)",
            "bars": [
                {
                    "label": "Social Media",
                    "val": "42%",
                    "h": "165px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Video Stream",
                    "val": "31%",
                    "h": "125px",
                    "color": "#ef4444"
                },
                {
                    "label": "Gaming",
                    "val": "17%",
                    "h": "72px",
                    "color": "#2563eb"
                },
                {
                    "label": "News/Reading",
                    "val": "10%",
                    "h": "45px",
                    "color": "#10b981"
                }
            ],
            "keywords": [
                "smartphone",
                "screen",
                "time",
                "social",
                "media",
                "video",
                "gaming",
                "reading"
            ],
            "template": "The chart illustrates the distribution of daily smartphone screen time across application categories. Social networking platforms capture the highest share at 42 percent, followed by video streaming services at 31 percent, whereas news and reading apps account for only 10 percent. Overall, entertainment and social media consume nearly three-quarters of mobile usage."
        },
        {
            "id": "DI-43",
            "title": "Honeybee Colony Losses by Environmental Cause (%)",
            "bars": [
                {
                    "label": "Varroa Mites",
                    "val": "45%",
                    "h": "170px",
                    "color": "#ef4444"
                },
                {
                    "label": "Pesticides",
                    "val": "28%",
                    "h": "110px",
                    "color": "#f59e0b"
                },
                {
                    "label": "Habitat Loss",
                    "val": "18%",
                    "h": "75px",
                    "color": "#10b981"
                },
                {
                    "label": "Winter Freeze",
                    "val": "9%",
                    "h": "40px",
                    "color": "#0284c7"
                }
            ],
            "keywords": [
                "honeybee",
                "colony",
                "losses",
                "mites",
                "pesticides",
                "habitat",
                "winter",
                "percent"
            ],
            "template": "The bar chart shows the primary drivers of commercial honeybee colony mortality. Parasitic Varroa mites are the leading cause of loss at 45 percent, followed by agricultural pesticide exposure at 28 percent, while extreme winter weather accounts for 9 percent. Overall, biological parasites and chemical pesticides pose the gravest threats to pollinators."
        },
        {
            "id": "DI-44",
            "title": "Remote Work Adoption Rate by Industry (%)",
            "bars": [
                {
                    "label": "IT & Software",
                    "val": "76%",
                    "h": "175px",
                    "color": "#2563eb"
                },
                {
                    "label": "Finance",
                    "val": "54%",
                    "h": "125px",
                    "color": "#0284c7"
                },
                {
                    "label": "Education",
                    "val": "28%",
                    "h": "70px",
                    "color": "#6b21a8"
                },
                {
                    "label": "Hospitality",
                    "val": "8%",
                    "h": "25px",
                    "color": "#64748b"
                }
            ],
            "keywords": [
                "remote",
                "work",
                "industry",
                "software",
                "finance",
                "education",
                "hospitality",
                "percent"
            ],
            "template": "The graph compares the percentage of employees working remotely across four sectors. Information technology and software lead at 76 percent, followed by financial services at 54 percent, whereas hospitality records only 8 percent due to on-site service requirements. In summary, digital knowledge industries exhibit far higher telecommuting flexibility."
        },
        {
            "id": "DI-45",
            "title": "Municipal Solid Waste Recycling Rate by Material (%)",
            "bars": [
                {
                    "label": "Cardboard",
                    "val": "81%",
                    "h": "175px",
                    "color": "#10b981"
                },
                {
                    "label": "Aluminum Cans",
                    "val": "64%",
                    "h": "140px",
                    "color": "#0284c7"
                },
                {
                    "label": "Glass Bottles",
                    "val": "42%",
                    "h": "95px",
                    "color": "#2563eb"
                },
                {
                    "label": "Plastic Film",
                    "val": "9%",
                    "h": "28px",
                    "color": "#ef4444"
                }
            ],
            "keywords": [
                "recycling",
                "waste",
                "cardboard",
                "aluminum",
                "glass",
                "plastic",
                "rate",
                "percent"
            ],
            "template": "The chart illustrates municipal recycling recovery rates across four packaging materials. Corrugated cardboard achieves the highest recycling rate at 81 percent, followed by aluminum cans at 64 percent, while flexible plastic film lags behind at just 9 percent. Overall, paperboard and metal packaging are recycled far more effectively than plastics."
        }
    ],
    "rl": [
        {
            "id": "RL-01",
            "title": "The Industrialization of Modern Agriculture",
            "lecture": "In this lecture, we examine how twentieth-century agriculture transformed from labor-intensive family farming into a globalized industrial sector. The introduction of synthetic Haber-Bosch fertilizers and mechanical tractors enabled unprecedented crop yields, allowing humanity to feed billions. However, this production miracle caused severe environmental externalities, including chemical runoff into aquatic ecosystems, severe topsoil erosion, and dangerous declines in genetic crop diversity.",
            "keywords": [
                "agriculture",
                "fertilizers",
                "tractors",
                "yields",
                "environmental",
                "runoff",
                "erosion",
                "diversity"
            ],
            "template": "1. The speaker provided informative analysis about modern agricultural industrialization.\n2. He highlighted that synthetic fertilizers and mechanized equipment dramatically boosted crop yields.\n3. Furthermore, he emphasized significant environmental drawbacks such as chemical runoff and topsoil erosion.\n4. In conclusion, the lecture illustrates the dual nature of technological transformation in food production."
        },
        {
            "id": "RL-02",
            "title": "Ocean Acidification and Calcifying Organisms",
            "lecture": "Our focus today is on ocean acidification, a direct consequence of rising atmospheric carbon dioxide. When marine waters absorb industrial emissions, chemical reactions lower seawater pH and deplete carbonate ions. These ions are the fundamental building blocks corals and shellfish require to form their protective calcium carbonate shells. Without adequate carbonate, reef ecosystems deteriorate, threatening coastal protection and global marine fisheries.",
            "keywords": [
                "ocean",
                "acidification",
                "carbon dioxide",
                "ph",
                "corals",
                "carbonate",
                "shellfish",
                "ecosystems"
            ],
            "template": "1. The main topic of the lecture was ocean acidification driven by carbon emissions.\n2. The professor stated that declining seawater pH drastically reduces available carbonate ions.\n3. Consequently, calcifying organisms such as corals and shellfish struggle to build protective shells.\n4. Overall, the speaker concluded that this process undermines the foundation of global marine food chains."
        },
        {
            "id": "RL-03",
            "title": "Cognitive Dissonance and Self-Justification",
            "lecture": "Psychologists define cognitive dissonance as the acute discomfort we feel when our behaviors contradict our core self-concept. When individuals make poor choices that clash with their self-image as rational beings, they experience intense psychological tension. Instead of acknowledging errors, people routinely invent rationalizations, minimize harmful consequences, or blame external circumstances to preserve their self-esteem.",
            "keywords": [
                "cognitive dissonance",
                "psychological",
                "tension",
                "rationalize",
                "behaviors",
                "self-image",
                "errors",
                "discomfort"
            ],
            "template": "1. The lecture delivered insightful perspectives on the psychology of cognitive dissonance.\n2. The speaker explained that mental tension arises when actions contradict personal values.\n3. He also mentioned that individuals frequently rationalize mistakes rather than accepting accountability.\n4. In summary, the presentation proved how subconscious defense mechanisms protect human self-esteem."
        },
        {
            "id": "RL-04",
            "title": "Superconductivity and Zero Resistance",
            "lecture": "Standard power distribution networks lose up to ten percent of generated electricity as heat due to metal resistance. Superconductors solve this by conducting current with zero electrical resistance below a critical temperature. Physicists are racing to synthesize room-temperature superconducting materials, which would revolutionize high-speed magnetic levitation trains, compact MRI scanners, and lossless national energy grids.",
            "keywords": [
                "superconductivity",
                "resistance",
                "electricity",
                "temperature",
                "power grids",
                "trains",
                "energy",
                "lossless"
            ],
            "template": "1. The talk centered on superconductivity and its potential to revolutionize power distribution.\n2. The speaker pointed out that superconducting materials conduct electricity with zero resistance below critical temperatures.\n3. He discussed practical applications including high-speed maglev trains and energy-efficient electrical grids.\n4. To conclude, achieving room-temperature superconductivity will trigger profound technological breakthroughs."
        },
        {
            "id": "RL-05",
            "title": "Circadian Rhythms and Sleep Architecture",
            "lecture": "Human circadian biology is governed by an internal pacemaker in the brain called the suprachiasmatic nucleus. This biological clock synchronizes hormone release, digestion, and body temperature to the twenty-four-hour day. Widespread exposure to evening artificial blue light from digital screens suppresses melatonin secretion, fracturing deep slow-wave sleep and increasing susceptibility to metabolic and cardiovascular disorders.",
            "keywords": [
                "circadian rhythms",
                "sleep",
                "melatonin",
                "light",
                "suprachiasmatic",
                "hormones",
                "metabolic",
                "health"
            ],
            "template": "1. The professor discussed human circadian rhythms and the regulation of natural sleep cycles.\n2. She noted that the brain's internal clock orchestrates hormone release and metabolic function.\n3. In addition, she warned that artificial evening blue light suppresses melatonin and degrades deep sleep.\n4. In conclusion, preserving natural light-dark cycles is essential for long-term physiological health."
        },
        {
            "id": "RL-06",
            "title": "The Historical Significance of the Silk Road",
            "lecture": "Historians have long reevaluated the ancient Silk Road beyond its mercantile trade in luxury silk and spices. This transcontinental conduit facilitated the exchange of metallurgical techniques, astronomical treatises, and medical manuscripts across Eurasia. More importantly, world religions and philosophical traditions traveled with merchant caravans, profoundly transforming the intellectual landscapes of East and West.",
            "keywords": [
                "silk road",
                "trade",
                "cultural exchange",
                "religions",
                "eurasia",
                "manuscripts",
                "civilizations",
                "history"
            ],
            "template": "1. The speaker provided a comprehensive overview of the historical significance of the Silk Road.\n2. He highlighted that the transcontinental route served as an intellectual and technological corridor.\n3. Furthermore, he emphasized that major religions and scientific treatises crossed Eurasia via merchant networks.\n4. Overall, the lecture underscored how ancient intercultural connectivity shaped modern world history."
        },
        {
            "id": "RL-07",
            "title": "Urban Heat Island Mitigation Strategies",
            "lecture": "Metropolitan centers suffer from the urban heat island effect because dark asphalt roadways and concrete towers trap solar radiation. Elevated temperatures increase residential energy demands for air conditioning and exacerbate heat-related illnesses. Civil engineers recommend urban cooling strategies, including high-albedo reflective roof coatings, extensive vegetative tree canopies, and permeable pavements that dissipate heat through evaporation.",
            "keywords": [
                "urban heat island",
                "temperatures",
                "asphalt",
                "reflective",
                "green roofs",
                "pavements",
                "cooling",
                "mitigation"
            ],
            "template": "1. The lecture examined urban heat island phenomena and engineering mitigation techniques.\n2. The speaker noted that dark asphalt and concrete structures trap substantial solar radiation in cities.\n3. She recommended implementing vegetative green roofs and reflective pavements to lower ambient temperatures.\n4. In summary, sustainable municipal architecture is vital for reducing urban heat stress and energy use."
        },
        {
            "id": "RL-08",
            "title": "Behavioral Default Architecture in Public Policy",
            "lecture": "Behavioral economics demonstrates that default settings heavily influence human choices due to cognitive inertia. In retirement savings programs, changing the default from an active opt-in requirement to automatic opt-out enrollment more than doubles worker participation rates. Governments are now leveraging subtle choice architecture and nudges to boost organ donation rates and promote energy-efficient consumer appliances.",
            "keywords": [
                "behavioral economics",
                "default",
                "nudges",
                "retirement",
                "opt-out",
                "inertia",
                "public policy",
                "savings"
            ],
            "template": "1. The talk explored behavioral economics and the influential role of default choice architecture.\n2. The professor demonstrated that automatic opt-out defaults dramatically increase retirement savings participation.\n3. He also discussed how policymakers use subtle nudges to achieve positive social and environmental outcomes.\n4. To conclude, strategic default design is a powerful, low-cost tool for shaping public behavior."
        },
        {
            "id": "RL-09",
            "title": "Antibiotic Resistance and Evolutionary Adaptation",
            "lecture": "Antibiotics represent one of humanity's greatest therapeutic triumphs, yet their overuse has created an escalating public health crisis. Exposing bacterial colonies to sub-lethal antibiotic concentrations selectively favors naturally resistant mutants, which proliferate and share resistance genes via horizontal gene transfer. Without stringent antimicrobial stewardship and fresh drug discovery pipelines, previously routine bacterial infections could become incurable.",
            "keywords": [
                "antibiotic resistance",
                "bacteria",
                "evolution",
                "superbugs",
                "mutants",
                "stewardship",
                "healthcare",
                "incurable"
            ],
            "template": "1. The lecture focused on the evolutionary mechanisms driving global antibiotic resistance.\n2. The speaker explained that chronic drug overuse selectively accelerates the multiplication of resistant mutants.\n3. Furthermore, he stressed the alarming prospect of routine infections becoming untreatable in hospitals.\n4. In conclusion, rigorous clinical stewardship and novel antibiotic discovery are urgently required."
        },
        {
            "id": "RL-10",
            "title": "Renewable Energy Intermittency and Storage",
            "lecture": "Transitioning away from fossil fuels requires managing the inherent intermittency of wind and solar power generation. Solar output ceases at nightfall, precisely when peak residential demand spikes, creating a supply-demand mismatch known as the duck curve. Stabilizing national grids requires combining utility-scale lithium-ion battery banks with pumped hydroelectric storage and AI-powered dynamic demand-response networks.",
            "keywords": [
                "renewable energy",
                "intermittency",
                "solar",
                "wind",
                "battery storage",
                "grid stability",
                "hydro",
                "duck curve"
            ],
            "template": "1. The speaker provided technical insights into renewable energy intermittency and grid integration.\n2. He highlighted the mismatch between daytime solar generation and evening peak consumer demand.\n3. He also emphasized the necessity of deploying large-scale battery facilities and pumped hydro storage.\n4. Overall, the lecture proved that versatile storage infrastructure is essential for a zero-carbon energy grid."
        },
        {
            "id": "RL-11",
            "title": "The Microbiome-Gut-Brain Axis",
            "lecture": "Recent breakthroughs in neurogastroenterology demonstrate that trillions of intestinal bacteria communicate directly with the central nervous system via the vagus nerve. Beneficial gut microbes synthesize essential neurotransmitters, including serotonin and gamma-aminobutyric acid, which modulate emotional resilience and anxiety levels. Conversely, gut dysbiosis triggered by ultra-processed diets and chronic antibiotic exposure induces systemic inflammation linked to clinical depression.",
            "keywords": [
                "microbiome",
                "gut-brain axis",
                "vagus nerve",
                "neurotransmitters",
                "serotonin",
                "dysbiosis",
                "inflammation",
                "depression"
            ],
            "template": "1. The speaker provided scientific insights into the bidirectional communication along the microbiome-gut-brain axis.\n2. She explained that intestinal bacteria synthesize vital neurotransmitters like serotonin that regulate mood via the vagus nerve.\n3. She also noted that microbial imbalance caused by processed diets triggers inflammation and depressive symptoms.\n4. Overall, the lecture demonstrated that maintaining gut diversity is crucial for psychological well-being."
        },
        {
            "id": "RL-12",
            "title": "Behavioral Economics of Sunk Cost Fallacy",
            "lecture": "Classical economic theory assumes that rational decision-makers evaluate future choices solely on prospective costs and benefits. In practice, however, individuals and corporations routinely fall victim to the sunk cost fallacy, continuing to fund failing projects simply because substantial time or capital has already been invested. Psychological aversion to admitting past mistakes traps executives into escalating commitment rather than reallocating resources efficiently.",
            "keywords": [
                "sunk cost fallacy",
                "rational choice",
                "behavioral economics",
                "investment",
                "loss aversion",
                "commitment",
                "resources",
                "decision"
            ],
            "template": "1. The lecturer examined the psychological mechanisms behind the sunk cost fallacy in economic decision-making.\n2. He contrasted rational economic theory with the human tendency to continue funding failing ventures due to past investments.\n3. He emphasized that emotional aversion to admitting failure leads managers to escalate unproductive commitments.\n4. In conclusion, successful organizations must ignore irrecoverable past costs when allocating future capital."
        },
        {
            "id": "RL-13",
            "title": "Roman Concrete Durability and Self-Healing",
            "lecture": "Ancient Roman marine structures, such as aqueducts and harbor piers, have withstood two millennia of relentless saltwater erosion, whereas modern Portland cement deteriorates within decades. Chemical microscopy reveals that Roman engineers mixed volcanic ash with quicklime at extreme temperatures, leaving microscopic lime clasts embedded in the mortar. When seawater infiltrates tiny cracks, these lime clasts dissolve and recrystallize as calcium carbonate, automatically sealing structural fractures.",
            "keywords": [
                "Roman concrete",
                "durability",
                "volcanic ash",
                "quicklime",
                "lime clasts",
                "self-healing",
                "calcium carbonate",
                "cracks"
            ],
            "template": "1. The speaker analyzed the chemical secrets behind the extraordinary longevity of ancient Roman marine concrete.\n2. He explained that mixing volcanic ash with hot quicklime created reactive lime clasts within the structure.\n3. When water penetrates microscopic cracks, these clasts recrystallize to seal fractures automatically.\n4. Overall, replicating Roman self-healing mortar could dramatically reduce modern construction carbon emissions."
        },
        {
            "id": "RL-14",
            "title": "The Kessler Syndrome and Orbital Debris",
            "lecture": "Low Earth orbit is becoming increasingly congested with defunct satellites, spent rocket stages, and thousands of hypervelocity metal fragments. Astrophysicist Donald Kessler warned that once orbital debris density exceeds a critical threshold, a single collision can trigger a runaway cascade of secondary shrapnel impacts. Without active debris removal technologies like robotic harpoons and laser de-orbiting, humanity risks losing access to vital weather, GPS, and communications satellites.",
            "keywords": [
                "Kessler syndrome",
                "orbital debris",
                "satellites",
                "collision cascade",
                "low Earth orbit",
                "space junk",
                "navigation",
                "removal"
            ],
            "template": "1. The lecture addressed the escalating threat of the Kessler syndrome in low Earth orbit.\n2. The speaker warned that high concentrations of space debris could trigger an unstoppable chain reaction of satellite collisions.\n3. Such a cascade would destroy critical infrastructure supporting global navigation and weather forecasting.\n4. Ultimately, international space agencies must deploy active debris capture systems to preserve orbital safety."
        },
        {
            "id": "RL-15",
            "title": "Epigenetics of the Dutch Hunger Winter",
            "lecture": "Epidemiological studies of children conceived during the 1944 Dutch Hunger Winter provided the first conclusive human evidence of transgenerational epigenetic inheritance. Fetuses exposed to severe maternal starvation in utero exhibited permanent hypomethylation on the IGF2 gene regulating metabolism. Decades later, these individuals experienced significantly elevated rates of obesity, cardiovascular disease, and type-two diabetes compared to their unexposed siblings.",
            "keywords": [
                "epigenetics",
                "famine",
                "methylation",
                "metabolism",
                "maternal nutrition",
                "gene expression",
                "obesity",
                "diabetes"
            ],
            "template": "1. The speaker discussed transgenerational epigenetic findings from the 1944 Dutch famine cohort.\n2. Prenatal exposure to extreme maternal malnutrition permanently altered DNA methylation on metabolic genes.\n3. Consequently, affected offspring suffered higher rates of adult obesity and cardiovascular illness.\n4. Overall, the study proves that early environmental conditions leave lasting molecular imprints across generations."
        },
        {
            "id": "RL-16",
            "title": "Central Bank Digital Currencies (CBDCs)",
            "lecture": "Over one hundred national central banks are actively piloting Central Bank Digital Currencies to modernize payment infrastructure as physical cash usage declines. Unlike decentralized volatile cryptocurrencies, a CBDC is a sovereign legal tender backed directly by the central bank's balance sheet. While digital currencies enable instantaneous cross-border settlements and direct stimulus transfers, economists warn that they could destabilize commercial bank deposits during financial panics.",
            "keywords": [
                "digital currency",
                "central bank",
                "cryptocurrency",
                "payment system",
                "financial stability",
                "commercial banks",
                "privacy",
                "deposits"
            ],
            "template": "1. The lecturer evaluated the macroeconomic implications of introducing Central Bank Digital Currencies.\n2. He distinguished sovereign-backed digital money from volatile private cryptocurrencies.\n3. While CBDCs accelerate payment efficiency, they risk draining commercial bank deposits during crises.\n4. Therefore, central banks must design strict holding caps to safeguard banking sector liquidity."
        },
        {
            "id": "RL-17",
            "title": "Coral Assisted Evolution and Thermal Tolerance",
            "lecture": "Rising sea surface temperatures have triggered recurrent mass coral bleaching events across the Great Barrier Reef. Marine biologists are pioneering assisted evolution techniques by selectively cross-breeding heat-resistant coral colonies and inoculating polyps with thermally tolerant symbiotic algae. Laboratory trials confirm that these bio-engineered coral strains can survive ocean heatwaves two degrees higher than wild populations.",
            "keywords": [
                "coral bleaching",
                "assisted evolution",
                "thermal tolerance",
                "symbiotic algae",
                "selective breeding",
                "reef restoration",
                "ocean warming",
                "biodiversity"
            ],
            "template": "1. The speaker presented innovative assisted evolution strategies to rescue endangered coral reefs.\n2. Researchers selectively breed heat-tolerant corals and introduce resilient symbiotic algae strains.\n3. Experimental trials show that enhanced corals withstand significantly higher marine temperatures.\n4. In conclusion, biological intervention offers a vital lifeline while global carbon emissions are reduced."
        },
        {
            "id": "RL-18",
            "title": "The Architecture of Gothic Cathedrals",
            "lecture": "Twelfth-century medieval master builders transformed European ecclesiastical architecture by replacing heavy Romanesque barrel vaults with pointed ribbed arches and external flying buttresses. By transferring the immense outward lateral thrust of stone ceilings onto exterior masonry supports, architects eliminated the need for thick load-bearing walls. This structural breakthrough enabled cathedrals to reach soaring vertical heights and incorporate expansive stained-glass rose windows.",
            "keywords": [
                "Gothic architecture",
                "flying buttresses",
                "pointed arches",
                "ribbed vaults",
                "structural load",
                "stained glass",
                "cathedrals",
                "engineering"
            ],
            "template": "1. The lecture traced the structural engineering innovations that defined medieval Gothic cathedrals.\n2. Pointed arches and external flying buttresses redirected heavy ceiling loads away from interior walls.\n3. This allowed builders to construct taller vaults filled with luminous stained-glass windows.\n4. Overall, Gothic architecture fused mathematical engineering with spiritual visual symbolism."
        },
        {
            "id": "RL-19",
            "title": "Antibiotic Phage Therapy Revival",
            "lecture": "As multidrug-resistant superbugs render conventional chemical antibiotics obsolete, infectious disease specialists are reviving bacteriophage therapy. Bacteriophages are naturally occurring viruses that infect and lyse specific pathogenic bacteria without harming beneficial human flora. Because phages co-evolve alongside their bacterial targets, combining personalized phage cocktails with traditional antibiotics can overcome stubborn biofilm infections.",
            "keywords": [
                "bacteriophage",
                "antibiotic resistance",
                "superbugs",
                "viruses",
                "pathogenic bacteria",
                "microbiome",
                "biofilm",
                "clinical therapy"
            ],
            "template": "1. The speaker explored the clinical resurgence of bacteriophage therapy against antibiotic-resistant superbugs.\n2. Unlike broad-spectrum antibiotics, phage viruses target specific harmful bacteria while sparing healthy flora.\n3. Phage cocktails can penetrate protective bacterial biofilms and evolve to counter resistance.\n4. Overall, phage therapy represents a promising precision medicine tool for refractory infections."
        },
        {
            "id": "RL-20",
            "title": "Universal Basic Income Field Experiments",
            "lecture": "Longitudinal randomized trials of Universal Basic Income in Finland and Kenya have challenged conventional assumptions regarding welfare and labor supply. Critics historically argued that unconditional cash transfers would discourage employment and foster dependency. Empirical data, however, revealed that recipients maintained stable working hours while reporting marked improvements in mental health, entrepreneurial risk-taking, and educational attainment.",
            "keywords": [
                "universal basic income",
                "cash transfers",
                "labor market",
                "employment",
                "mental health",
                "entrepreneurship",
                "welfare policy",
                "empirical data"
            ],
            "template": "1. The lecturer reviewed empirical findings from real-world Universal Basic Income experiments.\n2. Contrary to economic critiques, unconditional cash payments did not reduce overall employment participation.\n3. Instead, recipients experienced lower psychological stress and greater entrepreneurial mobility.\n4. In summary, basic income programs can enhance social welfare without undermining labor productivity."
        },
        {
            "id": "RL-21",
            "title": "Myelin Plasticity and Adult Motor Learning",
            "lecture": "Neuroscientists historically viewed myelin solely as passive electrical insulation wrapped around neuronal axons to speed up action potentials. Recent optical imaging reveals that oligodendrocyte cells actively remodel myelin sheath thickness in response to complex motor skill training, such as learning to play the piano. This adaptive myelination synchronizes neural impulse arrival times across distant brain regions, proving that white matter plasticity is essential for adult learning.",
            "keywords": [
                "myelin plasticity",
                "axons",
                "oligodendrocytes",
                "white matter",
                "motor learning",
                "neural impulses",
                "brain regions",
                "synchronization"
            ],
            "template": "1. The speaker explained the newly discovered role of myelin plasticity in adult skill acquisition.\n2. Rather than acting as static insulation, myelin sheaths dynamically thicken during intensive motor training.\n3. This white matter remodeling synchronizes signal transmission across neural networks.\n4. Overall, adaptive myelination is a fundamental biological mechanism underlying human learning."
        },
        {
            "id": "RL-22",
            "title": "Vertical Farming Economics and Energy Bottlenecks",
            "lecture": "Indoor vertical farms utilizing hydroponic nutrient mist and stacked LED lighting can produce leafy greens using ninety-five percent less water and land than conventional agriculture. Furthermore, climate-controlled warehouses eliminate agricultural pesticide runoff and shorten urban supply chains. Nevertheless, the high electricity cost of artificial photosynthetic lighting currently restricts profitable vertical cultivation to rapid-growing herbs and lettuce rather than staple cereal grains.",
            "keywords": [
                "vertical farming",
                "hydroponics",
                "LED lighting",
                "water conservation",
                "urban agriculture",
                "energy costs",
                "staple crops",
                "supply chain"
            ],
            "template": "1. The lecture assessed both the environmental advantages and economic bottlenecks of indoor vertical farming.\n2. Hydroponic vertical systems drastically reduce water consumption and eliminate chemical pesticides.\n3. However, heavy electricity demand for LED lighting makes growing staple grains economically unviable.\n4. Consequently, vertical farming must pair with cheap renewable power to expand beyond specialty greens."
        },
        {
            "id": "RL-23",
            "title": "The Linguistic Extinction Crisis",
            "lecture": "Linguists estimate that of the seven thousand spoken human languages existing today, nearly half will fall silent by the end of the twenty-first century. Globalization, urbanization, and compulsory national schooling pressure indigenous youth to abandon ancestral tongues in favor of dominant metropolitan languages. When an undocumented oral language disappears, humanity loses irreplaceable ecological taxonomies, oral histories, and unique cognitive frameworks.",
            "keywords": [
                "language extinction",
                "indigenous languages",
                "globalization",
                "cultural heritage",
                "biodiversity",
                "oral tradition",
                "documentation",
                "linguistics"
            ],
            "template": "1. The speaker highlighted the rapid global extinction of endangered indigenous languages.\n2. Economic globalization and urban migration compel younger generations to adopt dominant national tongues.\n3. Language loss erases unique ecological knowledge systems and cognitive diversity.\n4. Therefore, digital audio archiving and bilingual schooling are urgent priorities for linguistic preservation."
        },
        {
            "id": "RL-24",
            "title": "Tidal Barrage vs. In-Stream Tidal Turbines",
            "lecture": "Unlike intermittent wind and solar power, oceanic tidal currents follow highly predictable astronomical cycles governed by lunar gravity. Early tidal barrage dams generated substantial electricity but disrupted estuarine sediment flow and migratory fish habitats. Modern marine engineers increasingly favor submerged in-stream tidal turbines, which harvest kinetic water energy on the seabed with minimal ecological footprint.",
            "keywords": [
                "tidal energy",
                "lunar gravity",
                "predictability",
                "tidal barrage",
                "estuarine ecosystem",
                "submerged turbines",
                "renewable power",
                "marine engineering"
            ],
            "template": "1. The lecturer compared traditional tidal barrages with modern submerged tidal stream turbines.\n2. While tidal power is astronomically predictable, estuarine dams severely alter coastal ecosystems.\n3. In-stream seabed turbines capture kinetic current energy without blocking marine wildlife migration.\n4. Overall, modular underwater turbines offer a sustainable pathway for coastal renewable generation."
        },
        {
            "id": "RL-25",
            "title": "Sleep Spindles and Emotional Memory Filtering",
            "lecture": "Polysomnography recordings demonstrate that non-REM stage-two sleep is characterized by bursts of oscillatory brain activity known as sleep spindles. These thalamocortical spindles act as a neurobiological gatekeeper, selectively transferring salient procedural and academic memories from the hippocampus to the neocortex while stripping away painful emotional charge. Sleep deprivation disrupts this nocturnal filtering, heightening amygdala reactivity and emotional volatility.",
            "keywords": [
                "sleep spindles",
                "memory consolidation",
                "hippocampus",
                "neocortex",
                "amygdala",
                "emotional regulation",
                "sleep deprivation",
                "neuroscience"
            ],
            "template": "1. The speaker examined how non-REM sleep spindles regulate memory consolidation and emotional stability.\n2. Sleep spindles transfer important factual memories to long-term storage while dampening emotional trauma.\n3. Insufficient sleep impairs this neural filtering and amplifies amygdala stress responses.\n4. Ultimately, adequate stage-two sleep is indispensable for both cognitive retention and emotional health."
        },
        {
            "id": "RL-26",
            "title": "Carbon Border Adjustment Mechanisms",
            "lecture": "When a single jurisdiction imposes stringent domestic carbon taxes, energy-intensive manufacturers such as steel and cement producers may relocate factories to countries with lax environmental rules. This phenomenon, termed carbon leakage, undermines global emission reductions while penalizing domestic employment. To level the competitive playing field, the European Union introduced a Carbon Border Adjustment Mechanism that levies equivalent tariffs on carbon-intensive imports.",
            "keywords": [
                "carbon leakage",
                "border tariff",
                "climate policy",
                "international trade",
                "manufacturing",
                "emissions",
                "competitiveness",
                "decarbonization"
            ],
            "template": "1. The lecture analyzed the economic rationale behind Carbon Border Adjustment Mechanisms.\n2. Unilateral domestic carbon pricing can trigger carbon leakage as heavy industries relocate abroad.\n3. Levying carbon tariffs on imports prevents unfair competition and encourages global decarbonization.\n4. Overall, border adjustments align international trade rules with ambitious climate targets."
        },
        {
            "id": "RL-27",
            "title": "Predictive Policing and Feedback Loops",
            "lecture": "Municipal police departments increasingly deploy predictive software algorithms to forecast crime hotspots and allocate patrol cars. Because these algorithms are trained on historical arrest records rather than actual unreported crime rates, they disproportionately direct officers back to low-income neighborhoods. Increased police presence inevitably generates more minor arrests in those exact districts, creating a self-confirming statistical feedback loop.",
            "keywords": [
                "predictive policing",
                "algorithms",
                "historical bias",
                "feedback loop",
                "criminal justice",
                "surveillance",
                "data ethics",
                "accountability"
            ],
            "template": "1. The speaker critiqued the statistical biases embedded in predictive policing algorithms.\n2. Training models on historical arrest data rather than true crime incidence skews patrol deployment.\n3. Heavy patrolling in targeted neighborhoods produces more arrests, reinforcing the original algorithmic bias.\n4. Consequently, public agencies must subject automated justice tools to independent algorithmic audits."
        },
        {
            "id": "RL-28",
            "title": "Hydrothermal Mineralization and Rare Earth Elements",
            "lecture": "Transitioning to electric vehicles and wind turbines requires vast quantities of rare earth elements such as neodymium and dysprosium. Geochemists studying deep-sea hydrothermal vents have discovered vast polymetallic sulfide deposits and rare-earth-rich muds on the Pacific abyssal plain. However, commercial deep-sea mining machines risk kicking up toxic sediment plumes that could smother slow-growing benthic organisms over thousands of square kilometers.",
            "keywords": [
                "rare earth elements",
                "deep-sea mining",
                "hydrothermal vents",
                "green transition",
                "sediment plumes",
                "benthic ecology",
                "biodiversity",
                "regulation"
            ],
            "template": "1. The lecturer weighed the resource potential of deep-sea mining against its marine ecological risks.\n2. Abyssal seafloor deposits contain critical rare earth minerals needed for electric vehicle batteries.\n3. However, seabed harvesting disturbs toxic sediment plumes that threaten fragile deep-ocean ecosystems.\n4. Therefore, scientists advocate strict international moratoriums until environmental impacts are fully quantified."
        },
        {
            "id": "RL-29",
            "title": "The Evolution of Human Bipedalism",
            "lecture": "Paleoanthropological fossil evidence from East Africa indicates that early hominins evolved habitual upright bipedal locomotion at least four million years ago, long before dramatic brain enlargement occurred. As Miocene climate cooling transformed dense tropical rainforests into patchy savanna woodlands, walking on two legs reduced solar heat absorption and improved energetic efficiency over long foraging distances. Freeing the forelimbs also enabled tool transport and food provisioning.",
            "keywords": [
                "bipedalism",
                "hominin evolution",
                "savanna hypothesis",
                "thermoregulation",
                "locomotion efficiency",
                "fossil record",
                "tool use",
                "anthropology"
            ],
            "template": "1. The speaker discussed evolutionary hypotheses explaining the emergence of human bipedalism.\n2. Fossil records show upright walking preceded brain expansion as African forests shifted to open savannas.\n3. Bipedal posture minimized direct sun exposure and conserved metabolic energy during foraging.\n4. Additionally, freeing the hands facilitated infant carrying and early stone tool manipulation."
        },
        {
            "id": "RL-30",
            "title": "mRNA Vaccine Platform Versatility",
            "lecture": "Unlike conventional vaccines that require growing weakened viruses inside chicken eggs or bioreactors over many months, messenger RNA vaccines deliver synthetic genetic instructions encapsulated in lipid nanoparticles. Once inside human host cells, ribosomes transiently translate the mRNA sequence into a harmless viral spike protein to train adaptive immunity. Because the platform relies on digital sequence design, researchers can rapidly adapt mRNA candidates to target emerging viral variants and personalized cancer neoantigens.",
            "keywords": [
                "mRNA vaccines",
                "lipid nanoparticles",
                "immune response",
                "spike protein",
                "synthetic biology",
                "rapid manufacturing",
                "cancer immunotherapy",
                "biotechnology"
            ],
            "template": "1. The lecture explained the biochemical mechanism and versatility of messenger RNA vaccine technology.\n2. Lipid nanoparticles deliver synthetic genetic code that instructs host cells to produce target antigens safely.\n3. This digital design bypasses slow viral cell culture and allows rapid adaptation to new variants.\n4. Moreover, mRNA platforms are now advancing personalized cancer immunotherapy trials."
        },
        {
            "id": "RL-31",
            "title": "Acoustic Ecology and Marine Noise Pollution",
            "lecture": "Sound travels four times faster in water than in air, making acoustic signaling the primary sensory modality for cetaceans such as blue whales and dolphins. Over the past half-century, commercial container shipping, seismic oil exploration, and naval sonar have elevated ambient low-frequency ocean noise tenfold. This chronic acoustic smog masks long-range whale mating calls, disrupts echolocation foraging, and induces fatal mass strandings.",
            "keywords": [
                "acoustic ecology",
                "noise pollution",
                "cetaceans",
                "echolocation",
                "commercial shipping",
                "seismic surveys",
                "marine conservation",
                "propeller design"
            ],
            "template": "1. The speaker examined the detrimental impact of anthropogenic underwater noise on marine mammals.\n2. Whales and dolphins depend on long-range acoustic signals for navigation, foraging, and reproduction.\n3. Shipping propellers and seismic blasts create chronic noise pollution that masks vital whale communication.\n4. Redesigning quiet ship hulls and enforcing slower shipping lanes can substantially reduce marine acoustic stress."
        },
        {
            "id": "RL-32",
            "title": "The Paradox of Choice in Consumer Psychology",
            "lecture": "Psychologist Barry Schwartz demonstrated that while modest choice enhances human autonomy, an overabundance of retail options frequently induces decision paralysis and post-purchase regret. In a famous field experiment, shoppers presented with twenty-four varieties of gourmet jam were ten times less likely to make a purchase than those shown only six flavors. Excessive options elevate cognitive comparison costs and make consumers agonize over the opportunity cost of unchosen alternatives.",
            "keywords": [
                "paradox of choice",
                "decision paralysis",
                "consumer psychology",
                "cognitive load",
                "opportunity cost",
                "satisfaction",
                "retail marketing",
                "autonomy"
            ],
            "template": "1. The lecturer explored the paradox of choice in modern consumer psychology.\n2. Empirical studies show that offering too many product variations triggers decision paralysis and lowers sales.\n3. Consumers facing excessive options experience higher anxiety and lower satisfaction due to perceived opportunity costs.\n4. Consequently, curating concise product selections improves both shopper confidence and retail conversion."
        },
        {
            "id": "RL-33",
            "title": "Perovskite-Silicon Tandem Solar Cells",
            "lecture": "Traditional crystalline silicon solar panels are approaching their theoretical single-junction Shockley-Queisser efficiency ceiling of roughlytwenty-nine percent. Materials scientists have overcome this barrier by layering a thin synthetic perovskite crystal film directly atop a conventional silicon wafer. Because perovskite absorbs high-energy blue photons while silicon captures lower-energy red infrared light, tandem solar cells achieve laboratory conversion efficiencies exceeding thirty-three percent.",
            "keywords": [
                "perovskite",
                "silicon solar cells",
                "tandem architecture",
                "photon absorption",
                "conversion efficiency",
                "renewable energy",
                "materials science",
                "photovoltaics"
            ],
            "template": "1. The speaker introduced perovskite-silicon tandem solar cells as a breakthrough in photovoltaic efficiency.\n2. Standard silicon panels are limited to capturing a narrow segment of the solar spectrum.\n3. Stacking perovskite over silicon allows the tandem cell to harvest both blue and red wavelengths simultaneously.\n4. Once moisture durability improves, tandem cells will significantly boost renewable power output per square meter."
        },
        {
            "id": "RL-34",
            "title": "Soil Carbon Sequestration and Regenerative Grazing",
            "lecture": "Conventional industrial tilling pulverizes soil aggregates, exposing subterranean organic matter to oxygen and releasing vast plumes of carbon dioxide into the atmosphere. Regenerative agriculture reverses this degradation by combining no-till direct seeding, multi-species cover cropping, and rotational livestock grazing. Deep-rooted perennial grasses pump liquid carbon exudates into the rhizosphere, rebuilding humic topsoil and enhancing drought resilience.",
            "keywords": [
                "regenerative agriculture",
                "soil carbon",
                "no-till farming",
                "cover crops",
                "rhizosphere",
                "drought resilience",
                "climate mitigation",
                "topsoil"
            ],
            "template": "1. The lecture highlighted regenerative agriculture as a natural climate mitigation strategy.\n2. Mechanical plowing destroys soil structure and oxidizes stored subterranean carbon.\n3. Conversely, no-till farming and cover crops transfer atmospheric carbon deep into root ecosystems.\n4. Rebuilding organic topsoil simultaneously sequesters greenhouse gases and improves farm water retention."
        },
        {
            "id": "RL-35",
            "title": "The Economics of High-Speed Rail Networks",
            "lecture": "High-speed electric rail networks operating above three hundred kilometers per hour offer a competitive zero-emission alternative to short-haul domestic aviation on corridors between three hundred and eight hundred kilometers. City-center-to-city-center rail terminals eliminate airport security bottlenecks and integrate seamlessly with metropolitan subway systems. Although initial tunnel and viaduct capital costs are immense, high-speed rail generates long-term regional economic agglomeration.",
            "keywords": [
                "high-speed rail",
                "short-haul aviation",
                "decarbonization",
                "infrastructure",
                "capital cost",
                "urban connectivity",
                "economic agglomeration",
                "transport policy"
            ],
            "template": "1. The speaker analyzed the transport economics and environmental benefits of high-speed rail corridors.\n2. High-speed trains outperform short-haul flights on medium-distance routes by connecting downtown stations directly.\n3. Despite high upfront construction expenses, electric rail drastically cuts aviation carbon emissions.\n4. Ultimately, high-speed rail integrates regional labor markets and stimulates sustainable economic growth."
        }
    ],
    "we": [
        {
            "id": "WE-01",
            "title": "인공지능과 일자리 변화",
            "prompt": "Some people believe that artificial intelligence will create more job opportunities, while others argue it will cause widespread unemployment. Discuss both views and give your opinion. Write 200–300 words."
        },
        {
            "id": "WE-02",
            "title": "대중교통 전면 무료화 정책",
            "prompt": "Many cities are considering making public transportation completely free to reduce traffic congestion and carbon emissions. Do you agree or disagree with this policy? Support your point of view with reasons."
        },
        {
            "id": "WE-03",
            "title": "기후변화와 개인·정부의 책임",
            "prompt": "Climate change is one of the most critical challenges of our time. Should governments take sole responsibility, or do individuals also have an obligation to reduce their carbon footprint? Discuss with relevant examples."
        },
        {
            "id": "WE-04",
            "title": "대학 교육의 무상 제공 여부",
            "prompt": "Higher education should be funded entirely by the government so that all students can attend university free of charge. To what extent do you agree or disagree with this statement?"
        },
        {
            "id": "WE-05",
            "title": "재택근무 확산의 장단점",
            "prompt": "Remote work has become increasingly common in modern society. Discuss the advantages and disadvantages of working from home for both employees and employers."
        },
        {
            "id": "WE-06",
            "title": "우주 탐사 예산 vs 지구 빈곤 해결",
            "prompt": "Governments spend billions of dollars on space exploration while many people on Earth lack basic healthcare and education. Do you think space exploration is a waste of public money?"
        },
        {
            "id": "WE-07",
            "title": "소셜 미디어와 대인 관계",
            "prompt": "Some argue that social media platforms have brought people closer together, while others claim they have increased social isolation. Discuss both perspectives and state your own position."
        },
        {
            "id": "WE-08",
            "title": "일회용 플라스틱 법적 금지",
            "prompt": "Many environmental scientists advocate a complete ban on single-use plastics. How realistic is this proposal, and what alternative measures could effectively reduce plastic pollution?"
        },
        {
            "id": "WE-09",
            "title": "조기 외국어 교육의 효과",
            "prompt": "Learning a foreign language at primary school is more effective than starting in secondary school. Do the benefits of early language instruction outweigh the drawbacks?"
        },
        {
            "id": "WE-10",
            "title": "주 4일 근무제 도입 논쟁",
            "prompt": "Several companies have trialed a four-day workweek without reducing employee salaries. Do you think this model should be adopted across all industries?"
        },
        {
            "id": "WE-11",
            "title": "온라인 강의 vs 전통 대면 수업",
            "prompt": "Digital learning platforms are rapidly replacing traditional classroom instruction. Will online education eventually make physical universities obsolete? Provide reasons for your answer."
        },
        {
            "id": "WE-12",
            "title": "고령화 사회의 정년 연장",
            "prompt": "As life expectancy increases, many countries are raising the mandatory retirement age. Discuss the social and economic implications of an aging workforce."
        },
        {
            "id": "WE-13",
            "title": "패스트푸드 세금 부과(설탕세)",
            "prompt": "To combat rising obesity rates, some governments have introduced higher taxes on sugary drinks and fast food. Is taxation the most effective way to improve public health?"
        },
        {
            "id": "WE-14",
            "title": "역사적 건축물 보존 vs 현대식 재개발",
            "prompt": "Rapidly growing cities often face a dilemma between preserving historical buildings and constructing modern high-rise apartments. How should urban planners balance heritage and housing demand?"
        },
        {
            "id": "WE-15",
            "title": "동물원 및 수족관의 윤리성",
            "prompt": "Some people believe that zoos play a vital role in wildlife conservation, while others view keeping animals in captivity as cruel and unnecessary. Discuss both views."
        },
        {
            "id": "WE-16",
            "title": "현금 없는 사회(Cashless Society)",
            "prompt": "Digital payment methods have nearly eliminated the use of physical cash in many countries. Does a cashless society benefit everyone, or does it marginalize vulnerable groups?"
        },
        {
            "id": "WE-17",
            "title": "유전자 변형 작물(GMO)의 안전성",
            "prompt": "Genetically modified crops can increase agricultural yields and resist drought, yet many consumers remain skeptical of their safety. Should governments promote or restrict genetic engineering in agriculture?"
        },
        {
            "id": "WE-18",
            "title": "청소년 범죄 처벌 강화 vs 교화",
            "prompt": "Some argue that juvenile offenders should receive the same legal punishments as adults for serious crimes. Others believe education and rehabilitation are more appropriate. Discuss your view."
        },
        {
            "id": "WE-19",
            "title": "국제 관광 산업의 문화적 영향",
            "prompt": "Mass tourism generates significant economic revenue for developing nations, but it often damages local traditions and natural environments. How can sustainable tourism be achieved?"
        },
        {
            "id": "WE-20",
            "title": "기업의 사회적 책임(CSR)",
            "prompt": "In addition to generating profit for shareholders, large corporations should be legally required to contribute to environmental protection and community welfare. Do you agree or disagree?"
        },
        {
            "id": "WE-21",
            "title": "자율주행차 도입과 교통사고 책임",
            "prompt": "Self-driving cars are expected to become commonplace on public roads in the near future. When an autonomous vehicle is involved in an accident, should legal liability fall on the manufacturer, the software developer, or the passenger? Discuss."
        },
        {
            "id": "WE-22",
            "title": "의무 투표제(Compulsory Voting) 찬반",
            "prompt": "In some democratic countries, voting in national elections is compulsory by law. Do you believe mandatory voting strengthens democracy, or does it infringe upon individual freedom?"
        },
        {
            "id": "WE-23",
            "title": "학교 내 스마트폰 전면 금지",
            "prompt": "Many secondary schools have banned students from using smartphones during school hours to improve concentration and reduce cyberbullying. Do the advantages of this ban outweigh the disadvantages?"
        },
        {
            "id": "WE-24",
            "title": "보편적 기본소득(UBI) 도입",
            "prompt": "Some economists propose introducing a Universal Basic Income, where every citizen receives a regular unconditional sum of money from the government. Discuss the potential economic and social impacts of this policy."
        },
        {
            "id": "WE-25",
            "title": "전통 종이책 vs 전자책(E-book)",
            "prompt": "With the rise of tablets and e-readers, printed books are losing popularity among younger generations. Does the decline of physical books negatively affect reading comprehension and cultural preservation?"
        },
        {
            "id": "WE-26",
            "title": "동물 실험의 과학적 필요성과 윤리",
            "prompt": "Medical researchers argue that animal testing is essential for developing life-saving drugs, while animal rights activists demand its immediate abolition. Discuss both views and give your opinion."
        },
        {
            "id": "WE-27",
            "title": "다국적 기업의 개발도상국 진출",
            "prompt": "When multinational corporations establish factories in developing countries, do they primarily exploit local labor, or do they provide vital economic opportunities? Support your argument with examples."
        },
        {
            "id": "WE-28",
            "title": "예술 및 음악 교육 예산 축소 논란",
            "prompt": "Some educational authorities prioritize science, technology, and mathematics over arts and music in school budgets. Should creative subjects receive equal funding and curriculum time?"
        },
        {
            "id": "WE-29",
            "title": "성형수술과 외모 지상주의",
            "prompt": "Cosmetic surgery has become increasingly affordable and socially acceptable. What are the psychological and social reasons behind this trend, and is it a positive or negative development?"
        },
        {
            "id": "WE-30",
            "title": "원자력 발전의 기후변화 대응 역할",
            "prompt": "Some energy experts view nuclear power as an indispensable clean energy source to combat climate change, while others oppose it due to radioactive waste and safety risks. Discuss both sides."
        },
        {
            "id": "WE-31",
            "title": "어린이 대상 상업 광고 규제",
            "prompt": "Television and online advertisements aimed at young children often promote unhealthy snacks and expensive toys. Should governments prohibit all commercial advertising directed at children under twelve?"
        },
        {
            "id": "WE-32",
            "title": "대도시 인구 집중과 지방 소멸",
            "prompt": "Young professionals are increasingly migrating to megacities, leaving rural towns with aging populations and declining economies. What policies can governments implement to revitalize regional areas?"
        },
        {
            "id": "WE-33",
            "title": "프로 스포츠 선수의 고액 연봉",
            "prompt": "Top professional athletes earn tens of millions of dollars annually, far more than nurses, teachers, and emergency workers. Is such extreme income disparity justified in modern society?"
        },
        {
            "id": "WE-34",
            "title": "유기농 식품과 글로벌 식량 안보",
            "prompt": "Organic farming avoids synthetic pesticides and fertilizers, but it typically produces lower crop yields per hectare than conventional agriculture. Can organic farming realistically feed a growing global population?"
        },
        {
            "id": "WE-35",
            "title": "가짜 뉴스(Fake News)와 플랫폼 검열",
            "prompt": "The rapid spread of misinformation online threatens public health and democratic elections. Should technology companies be legally responsible for censoring false content, or does this threaten free speech?"
        },
        {
            "id": "WE-36",
            "title": "고등학생의 아르바이트 경험",
            "prompt": "Many teenagers take part-time jobs while still attending high school. Does working part-time teach valuable life skills, or does it distract students from their academic studies?"
        },
        {
            "id": "WE-37",
            "title": "패스트 패션(Fast Fashion)의 환경 파괴",
            "prompt": "The fast fashion industry allows consumers to buy trendy clothing at very low prices, but it generates massive textile waste and water pollution. How can consumers and governments make the fashion industry more sustainable?"
        },
        {
            "id": "WE-38",
            "title": "국제 원조(Foreign Aid)의 실효성",
            "prompt": "Wealthy nations provide billions of dollars in financial aid to developing countries each year, yet poverty remains widespread. Should rich countries give technology and trade access instead of direct cash aid?"
        },
        {
            "id": "WE-39",
            "title": "인공지능 창작물(AI Art)의 저작권",
            "prompt": "Generative artificial intelligence can now compose music, paint pictures, and write novels within seconds. Can AI-generated works be considered true art, and how should copyright laws protect human creators?"
        },
        {
            "id": "WE-40",
            "title": "사형 제도의 범죄 예방 효과",
            "prompt": "Some people believe that capital punishment is the only effective deterrent against violent crime, while others argue that it violates human rights and risks executing innocent individuals. Discuss both views."
        },
        {
            "id": "WE-41",
            "title": "인공지능 생성 예술의 저작권 인정 여부",
            "prompt": "With the rapid rise of generative artificial intelligence, machines can now compose music, paint illustrations, and write novels in seconds. Should AI-generated works be granted legal copyright protection on par with human artists? Discuss both perspectives and give your opinion."
        },
        {
            "id": "WE-42",
            "title": "주 4일 근무제 전면 도입의 생산성 효과",
            "prompt": "Many multinational corporations and governments are piloting a four-day workweek without reducing employee salaries. To what extent do the benefits of improved work-life balance outweigh the potential risks to economic competitiveness?"
        },
        {
            "id": "WE-43",
            "title": "우주 탐사 예산과 지구 환경 문제 해결의 우선순위",
            "prompt": "Billions of dollars are spent annually by governments and private billionaires on lunar bases and Mars exploration. Some argue this money would be better spent solving urgent environmental and poverty crises on Earth. Discuss both views."
        },
        {
            "id": "WE-44",
            "title": "초등학생 스마트폰 및 소셜미디어 법적 연령 제한",
            "prompt": "Several countries have proposed banning social media platforms for children under the age of sixteen to protect adolescent mental health. Do you think legal age bans are effective, or should digital literacy be the primary responsibility of parents?"
        },
        {
            "id": "WE-45",
            "title": "대학 학위의 가치 하락과 실무 기술 자격증의 부상",
            "prompt": "In the modern technology-driven economy, major employers increasingly prioritize practical vocational skills and industry micro-credentials over traditional four-year university degrees. Will traditional university education become obsolete in the near future?"
        },
        {
            "id": "WE-46",
            "title": "초가공식품(설탕·고지방)에 대한 징벌적 건강세 부과",
            "prompt": "To combat rising rates of obesity and diabetes, public health experts advocate imposing heavy excise taxes on ultra-processed foods and sugary beverages. Is taxing unhealthy food a fair and effective public health strategy?"
        },
        {
            "id": "WE-47",
            "title": "고령화 사회의 정년 연장 및 의무 퇴직 폐지",
            "prompt": "As life expectancy increases and birth rates decline in developed nations, governments are raising the statutory retirement age. Discuss the socioeconomic advantages and disadvantages of requiring older citizens to remain in the workforce longer."
        },
        {
            "id": "WE-48",
            "title": "도심 내 내연기관 자동차 진입 전면 금지 정책",
            "prompt": "Major metropolitan cities are introducing zero-emission zones that ban petrol and diesel cars from city centers. While environmentalists praise cleaner air, small business owners and commuters complain of economic hardship. Discuss both sides."
        },
        {
            "id": "WE-49",
            "title": "유전자 편집 기술을 활용한 태아 맞춤형 질병 예방",
            "prompt": "Advances in CRISPR gene editing may soon allow parents to eliminate hereditary diseases and enhance physical or cognitive traits in embryos before birth. Where should society draw the ethical line between medical therapy and genetic enhancement?"
        },
        {
            "id": "WE-50",
            "title": "현금 없는 사회(Cashless Society)로의 완전 전환",
            "prompt": "Digital mobile payments and credit cards have nearly replaced physical banknotes in many economies. Does transitioning to a completely cashless society promote financial efficiency, or does it marginalize vulnerable populations and threaten privacy?"
        },
        {
            "id": "WE-51",
            "title": "글로벌 패스트패션 산업에 대한 환경 부담금 규제",
            "prompt": "The fast-fashion textile industry generates massive water pollution and landfill waste by encouraging disposable clothing consumption. Should governments impose strict production quotas and eco-tariffs on clothing manufacturers, or rely on consumer awareness?"
        },
        {
            "id": "WE-52",
            "title": "원격 의료(Telemedicine)의 대면 진료 대체 가능성",
            "prompt": "Virtual doctor consultations via video conferencing have expanded rapidly since the pandemic. To what extent can telemedicine improve healthcare accessibility in rural areas without compromising diagnostic accuracy and patient safety?"
        },
        {
            "id": "WE-53",
            "title": "다국적 IT 대기업에 대한 글로벌 디지털세 부과",
            "prompt": "Global technology giants often generate billions in revenue in countries where they pay minimal corporate tax due to digital jurisdiction loopholes. Should international organizations enforce a uniform minimum global corporate tax rate?"
        },
        {
            "id": "WE-54",
            "title": "역사적 문화재 및 박물관 약탈 유물의 본국 반환",
            "prompt": "Major Western museums hold thousands of ancient artifacts acquired during the colonial era. Should national museums be legally required to repatriate cultural treasures to their countries of origin, or preserve them in global encyclopedic institutions?"
        },
        {
            "id": "WE-55",
            "title": "자율주행차 상용화 시 사고 법적 책임 소재",
            "prompt": "As fully autonomous self-driving vehicles enter public highways, traffic accidents involving software decisions are inevitable. Should legal liability for autonomous vehicle collisions rest with the vehicle owner, the software manufacturer, or government regulators?"
        },
        {
            "id": "WE-56",
            "title": "기후 난민(Climate Refugees)의 국제법적 수용 의무",
            "prompt": "Rising sea levels and extreme desertification are forcing millions of people in vulnerable regions to abandon their homelands. Should industrialized nations with high historical carbon emissions be legally obligated to accept climate refugees?"
        },
        {
            "id": "WE-57",
            "title": "기업 임원 연봉 상한제(Pay Ratio Cap) 도입 논쟁",
            "prompt": "The income gap between chief executive officers and average frontline workers has reached historic highs. Some economists propose capping CEO compensation at a fixed multiple of the lowest-paid employee's wage. Discuss the merits and drawbacks of this policy."
        },
        {
            "id": "WE-58",
            "title": "대학 입시에서 표준화 시험(SAT/수능) 폐지와 종합 평가",
            "prompt": "Many universities have made standardized entrance examinations optional, favoring holistic admissions based on essays and extracurricular activities. Does abolishing standardized tests promote social equity, or does it remove an objective benchmark of academic readiness?"
        },
        {
            "id": "WE-59",
            "title": "원자력 발전(SMR 포함)의 친환경 그린 에너지 분류",
            "prompt": "While nuclear power produces zero carbon emissions during operation, concerns over radioactive waste disposal and reactor safety persist. Should next-generation nuclear energy be classified and subsidized as a core green technology alongside wind and solar?"
        },
        {
            "id": "WE-60",
            "title": "공공장소 안면 인식 AI CCTV 감시망 확대와 프라이버시",
            "prompt": "Police departments increasingly deploy artificial intelligence facial recognition cameras in public streets to deter crime and locate suspects. Do the public safety benefits of automated biometric surveillance justify the erosion of civil privacy?"
        }
    ],
    "sst": [
        {
            "id": "SST-01",
            "title": "Ocean Acidification and Marine Life",
            "lecture": "Today we will examine the chemical consequences of atmospheric carbon dioxide dissolving into marine waters. Over the past two centuries, oceans have absorbed roughly thirty percent of anthropogenic emissions, triggering a measurable decline in pH known as ocean acidification. This chemical shift reduces carbonate ion saturation, making it difficult for calcifying organisms such as corals and pteropods to synthesize their calcium carbonate skeletons. As these keystone species struggle, the entire marine food web faces structural destabilization.",
            "keywords": [
                "carbon dioxide",
                "acidification",
                "ph",
                "carbonate",
                "corals",
                "marine",
                "skeletons",
                "ecosystem"
            ],
            "modelSummary": "The lecture explains that ocean acidification occurs as marine waters absorb substantial atmospheric carbon dioxide emissions. This chemical process significantly lowers ocean pH levels and diminishes carbonate ion availability, which impairs the skeletal development of corals and shellfish. Consequently, the destabilization of these keystone calcifiers poses an urgent threat to global marine ecosystems."
        },
        {
            "id": "SST-02",
            "title": "The Industrialization of Agriculture",
            "lecture": "Throughout human history, agricultural productivity was constrained by manual labor and seasonal draft animals. The advent of internal combustion engines and synthetic nitrogen fertilizer in the twentieth century fundamentally industrialized farming practices. While these innovations drove unprecedented food production, they also precipitated severe environmental externalities, including soil degradation, aquatic eutrophication from fertilizer runoff, and a loss of genetic crop diversity.",
            "keywords": [
                "agricultural",
                "productivity",
                "fertilizer",
                "industrialized",
                "nitrogen",
                "soil",
                "eutrophication",
                "crop"
            ],
            "modelSummary": "The speaker discusses how twentieth-century mechanization and synthetic nitrogen fertilizers transformed traditional agriculture into an industrialized system. Although these technological advancements dramatically expanded global crop yields, they simultaneously created severe environmental challenges such as soil depletion, water pollution from chemical runoff, and diminished agricultural biodiversity."
        },
        {
            "id": "SST-03",
            "title": "Cognitive Dissonance in Decision Making",
            "lecture": "Leon Festinger introduced the concept of cognitive dissonance to describe the mental discomfort individuals experience when holding two psychologically incompatible cognitions. When our actions clash with our self-concept or core values, we feel compelled to restore internal harmony. Rather than acknowledging mistakes, humans routinely rationalize their behavior, reframe negative outcomes, or reject contradictory factual evidence.",
            "keywords": [
                "cognitive",
                "dissonance",
                "discomfort",
                "values",
                "harmony",
                "rationalize",
                "evidence",
                "behavior"
            ],
            "modelSummary": "The lecture explores cognitive dissonance as the psychological tension arising when an individual's actions conflict with their underlying beliefs. To alleviate this uncomfortable inconsistency, people frequently employ subconscious defense mechanisms, such as rationalizing problematic decisions or disregarding opposing empirical evidence, rather than altering their original self-image."
        },
        {
            "id": "SST-04",
            "title": "Superconductivity and Power Grids",
            "lecture": "Conventional electric power transmission suffers from substantial energy losses caused by the natural resistance of copper and aluminum wiring. Superconductivity represents a physical state where certain materials transmit electrical current with absolute zero resistance when chilled below critical temperatures. If scientists succeed in synthesizing materials that exhibit superconductivity at ambient temperatures, it would revolutionize power distribution and quantum computing.",
            "keywords": [
                "superconductivity",
                "resistance",
                "electricity",
                "temperature",
                "power",
                "grids",
                "quantum",
                "energy"
            ],
            "modelSummary": "The presentation examines superconductivity, a unique physical state where materials conduct electricity without any resistive energy loss below specific critical temperatures. Achieving room-temperature superconductivity would overcome the transmission inefficiencies of traditional metal wiring, fundamentally transforming global electrical infrastructure and accelerating quantum computational architectures."
        },
        {
            "id": "SST-05",
            "title": "Antibiotic Misuse and Superbugs",
            "lecture": "The discovery of antibiotics transformed once-fatal bacterial infections into manageable clinical conditions. However, decades of overprescribing in human medicine and widespread prophylactic use in industrial livestock operations have exerted immense selective pressure on bacterial populations. As resistant superbugs multiply, the global healthcare community faces the alarming prospect of a post-antibiotic era.",
            "keywords": [
                "antibiotics",
                "bacterial",
                "resistant",
                "superbugs",
                "prescribing",
                "livestock",
                "healthcare",
                "infections"
            ],
            "modelSummary": "The speaker warns about the consequences of chronic antibiotic overuse in both clinical healthcare and agricultural livestock rearing. This persistent selective pressure has accelerated the emergence of multi-drug resistant superbugs, threatening to render routine surgical procedures life-threatening and plunging modern medicine into a vulnerable post-antibiotic era."
        },
        {
            "id": "SST-06",
            "title": "Circadian Rhythms and Modern Lighting",
            "lecture": "Circadian rhythms are endogenous biological oscillations tuned to the twenty-four-hour solar cycle, governed by the suprachiasmatic nucleus in the brain. The pervasive presence of artificial blue light emitted by smartphones and LED fixtures suppresses nighttime melatonin secretion. Chronically disrupted circadian clocks contribute to sleep deficits, impaired metabolic regulation, and heightened risks of mood disorders.",
            "keywords": [
                "circadian",
                "rhythms",
                "light",
                "melatonin",
                "sleep",
                "suprachiasmatic",
                "metabolic",
                "disorders"
            ],
            "modelSummary": "The lecture highlights the vulnerability of human circadian rhythms to artificial light exposure in modern environments. Widespread evening use of blue-light-emitting screens suppresses natural melatonin synthesis, disturbing sleep architecture and substantially increasing long-term susceptibility to chronic metabolic illnesses and psychological affective disorders."
        },
        {
            "id": "SST-07",
            "title": "The Silk Road and Cultural Exchange",
            "lecture": "The Silk Road is frequently conceptualized purely as an ancient commercial highway for Chinese silk and central Asian spices. In reality, this transcontinental network served primarily as an intellectual corridor through which scientific knowledge, metallurgical techniques, and world religions traveled across Eurasia. Monks, envoys, and scholars facilitated a vibrant exchange of philosophical ideas that profoundly shaped civilizations.",
            "keywords": [
                "silk road",
                "trade",
                "cultural",
                "religions",
                "eurasia",
                "knowledge",
                "scholars",
                "civilizations"
            ],
            "modelSummary": "The speaker argues that the historical Silk Road was far more than a conventional mercantile trade route for luxury goods. Instead, it functioned as an essential intercultural conduit across Eurasia, enabling the transcontinental diffusion of technological innovations, astronomical treatises, artistic styles, and major religious traditions among diverse civilizations."
        },
        {
            "id": "SST-08",
            "title": "Urban Heat Island Mitigation",
            "lecture": "Dense urban environments absorb and trap thermal energy due to dark asphalt paving and heat-retaining concrete structures, creating urban heat islands. To alleviate dangerous heat stress among vulnerable populations, modern civil engineers are deploying high-albedo reflective pavements and expansive green roofs. Incorporating vegetative buffers into urban planning lowers surface temperatures and reduces commercial cooling energy demand.",
            "keywords": [
                "urban",
                "heat",
                "island",
                "asphalt",
                "temperatures",
                "green roofs",
                "pavements",
                "energy"
            ],
            "modelSummary": "The presentation examines the urban heat island effect, wherein metropolitan centers experience elevated temperatures due to heat-absorbing construction materials and minimal vegetation. Urban planners are actively mitigating this thermal burden by retrofitting vegetative rooftop gardens and reflective pavement coatings, which together reduce cooling demands and safeguard public health."
        },
        {
            "id": "SST-09",
            "title": "Behavioral Economics and Default Options",
            "lecture": "Classical economic models assume people make active, rational decisions across all financial domains. In contrast, behavioral economists have documented the immense power of defaults. When organizations shift retirement savings programs from voluntary opt-in to automatic opt-out enrollment, participation rates skyrocket from under forty percent to over eighty percent, demonstrating that status quo inertia heavily dictates human behavior.",
            "keywords": [
                "behavioral",
                "economics",
                "default",
                "retirement",
                "opt-out",
                "inertia",
                "rational",
                "savings"
            ],
            "modelSummary": "The lecture demonstrates how behavioral default architecture exerts a profound influence on human financial decision-making. By altering corporate retirement enrollment mechanisms from voluntary opt-in to automatic enrollment, employers leverage natural status quo inertia to dramatically elevate institutional savings participation rates across broad demographic groups."
        },
        {
            "id": "SST-10",
            "title": "Renewable Energy Grid Integration",
            "lecture": "Integrating high shares of wind and solar power into traditional electrical grids introduces severe transmission variability. Because sunlight peaks at midday while wind fluctuates unpredictably, grid operators must balance supply with consumer demand curves in real time. Solving this intermittency requires deploying advanced pumped hydro facilities, lithium battery banks, and AI-driven predictive demand forecasting.",
            "keywords": [
                "renewable",
                "grid",
                "intermittency",
                "solar",
                "wind",
                "battery",
                "storage",
                "forecasting"
            ],
            "modelSummary": "The speaker analyzes the operational challenges of incorporating high penetrations of intermittent renewable generation into national power grids. Maintaining real-time electrical stability requires deploying complementary grid-scale storage technologies, such as battery facilities and pumped hydro storage, supported by predictive artificial intelligence forecasting algorithms."
        },
        {
            "id": "SST-11",
            "title": "Neurogastroenterology and the Gut-Brain Axis",
            "lecture": "Recent breakthroughs in neurogastroenterology demonstrate that trillions of intestinal bacteria communicate directly with the central nervous system via the vagus nerve. Beneficial gut microbes synthesize essential neurotransmitters, including serotonin and gamma-aminobutyric acid, which modulate emotional resilience and anxiety levels. Conversely, gut dysbiosis triggered by ultra-processed diets and chronic antibiotic exposure induces systemic inflammation linked to clinical depression.",
            "keywords": [
                "microbiome",
                "gut-brain",
                "vagus",
                "neurotransmitters",
                "serotonin",
                "dysbiosis",
                "inflammation",
                "depression"
            ],
            "modelSummary": "The lecture explains how intestinal bacteria communicate bidirectionally with the human central nervous system through the vagus nerve. Beneficial gut microbes synthesize essential mood-regulating neurotransmitters such as serotonin, whereas diet-induced microbial dysbiosis triggers systemic inflammation and depressive disorders, demonstrating that maintaining gut microbiome diversity is vital for psychological and neurological health."
        },
        {
            "id": "SST-12",
            "title": "Psychological Drivers of the Sunk Cost Fallacy",
            "lecture": "Classical economic theory assumes that rational decision-makers evaluate future choices solely on prospective costs and benefits. In practice, however, individuals and corporations routinely fall victim to the sunk cost fallacy, continuing to fund failing projects simply because substantial time or capital has already been invested. Psychological aversion to admitting past mistakes traps executives into escalating commitment rather than reallocating resources efficiently.",
            "keywords": [
                "sunk cost",
                "rational",
                "behavioral",
                "investment",
                "aversion",
                "commitment",
                "resources",
                "decision"
            ],
            "modelSummary": "The speaker examines the sunk cost fallacy, a behavioral bias wherein individuals and organizations continue funding unprofitable ventures solely due to prior resource investments. Driven by a psychological aversion to admitting past errors, managers escalate failing commitments rather than evaluating prospective returns rationally, which ultimately distorts efficient capital allocation."
        },
        {
            "id": "SST-13",
            "title": "Self-Healing Chemistry of Ancient Roman Concrete",
            "lecture": "Ancient Roman marine structures, such as aqueducts and harbor piers, have withstood two millennia of relentless saltwater erosion, whereas modern Portland cement deteriorates within decades. Chemical microscopy reveals that Roman engineers mixed volcanic ash with quicklime at extreme temperatures, leaving microscopic lime clasts embedded in the mortar. When seawater infiltrates tiny cracks, these lime clasts dissolve and recrystallize as calcium carbonate, automatically sealing structural fractures.",
            "keywords": [
                "Roman",
                "concrete",
                "volcanic",
                "quicklime",
                "clasts",
                "self-healing",
                "carbonate",
                "durability"
            ],
            "modelSummary": "Ancient Roman marine concrete exhibits superior multi-millennial durability compared to modern Portland cement due to hot-mixing volcanic ash with quicklime. This process embeds reactive lime clasts within the mortar that dissolve and recrystallize as calcium carbonate whenever seawater penetrates microcracks, enabling the structure to heal fractures autonomously and inspiring sustainable modern construction."
        },
        {
            "id": "SST-14",
            "title": "Orbital Debris and the Kessler Syndrome Threat",
            "lecture": "Low Earth orbit is becoming increasingly congested with defunct satellites, spent rocket stages, and thousands of hypervelocity metal fragments. Astrophysicist Donald Kessler warned that once orbital debris density exceeds a critical threshold, a single collision can trigger a runaway cascade of secondary shrapnel impacts. Without active debris removal technologies like robotic harpoons and laser de-orbiting, humanity risks losing access to vital weather, GPS, and communications satellites.",
            "keywords": [
                "Kessler",
                "orbital",
                "debris",
                "satellites",
                "collision",
                "cascade",
                "space",
                "removal"
            ],
            "modelSummary": "The lecture highlights the growing danger of the Kessler syndrome in low Earth orbit, where dense accumulations of defunct satellites and shrapnel risk triggering a self-sustaining cascade of hypervelocity collisions. Without international deployment of active debris removal technologies, runaway orbital fragmentation could cripple essential global communications, weather monitoring, and navigation satellites."
        },
        {
            "id": "SST-15",
            "title": "Transgenerational Epigenetics of Maternal Famine",
            "lecture": "Epidemiological studies of children conceived during the 1944 Dutch Hunger Winter provided the first conclusive human evidence of transgenerational epigenetic inheritance. Fetuses exposed to severe maternal starvation in utero exhibited permanent hypomethylation on the IGF2 gene regulating metabolism. Decades later, these individuals experienced significantly elevated rates of obesity, cardiovascular disease, and type-two diabetes compared to their unexposed siblings.",
            "keywords": [
                "epigenetics",
                "famine",
                "methylation",
                "metabolism",
                "prenatal",
                "inheritance",
                "obesity",
                "diabetes"
            ],
            "modelSummary": "Epidemiological research on individuals conceived during the 1944 Dutch Hunger Winter provides compelling evidence of transgenerational epigenetic inheritance in humans. Severe prenatal maternal starvation induced permanent DNA methylation changes on metabolic genes, resulting in substantially higher adult rates of obesity, diabetes, and cardiovascular disease without altering the underlying genetic code."
        },
        {
            "id": "SST-16",
            "title": "Macroeconomic Trade-offs of Central Bank Digital Currencies",
            "lecture": "Over one hundred national central banks are actively piloting Central Bank Digital Currencies to modernize payment infrastructure as physical cash usage declines. Unlike decentralized volatile cryptocurrencies, a CBDC is a sovereign legal tender backed directly by the central bank's balance sheet. While digital currencies enable instantaneous cross-border settlements and direct stimulus transfers, economists warn that they could destabilize commercial bank deposits during financial panics.",
            "keywords": [
                "digital",
                "currency",
                "central",
                "bank",
                "payments",
                "stability",
                "deposits",
                "liquidity"
            ],
            "modelSummary": "The speaker evaluates the global transition toward Central Bank Digital Currencies as sovereign, risk-free digital legal tender. While CBDCs streamline cross-border settlements and fiscal transfers compared to volatile cryptocurrencies, they also pose systemic risks by potentially draining commercial bank deposits during financial panics unless strict regulatory holding caps are enforced."
        },
        {
            "id": "SST-17",
            "title": "Assisted Evolution for Thermally Tolerant Coral Reefs",
            "lecture": "Rising sea surface temperatures have triggered recurrent mass coral bleaching events across the Great Barrier Reef. Marine biologists are pioneering assisted evolution techniques by selectively cross-breeding heat-resistant coral colonies and inoculating polyps with thermally tolerant symbiotic algae. Laboratory trials confirm that these bio-engineered coral strains can survive ocean heatwaves two degrees higher than wild populations.",
            "keywords": [
                "coral",
                "bleaching",
                "evolution",
                "thermal",
                "algae",
                "breeding",
                "restoration",
                "warming"
            ],
            "modelSummary": "To combat widespread coral bleaching caused by rising ocean temperatures, marine biologists are developing assisted evolution interventions. By selectively cross-breeding heat-resilient coral colonies and inoculating polyps with thermally tolerant symbiotic algae, researchers have engineered coral strains capable of surviving severe marine heatwaves while global decarbonization efforts progress."
        },
        {
            "id": "SST-18",
            "title": "Structural Engineering of Medieval Gothic Cathedrals",
            "lecture": "Twelfth-century medieval master builders transformed European ecclesiastical architecture by replacing heavy Romanesque barrel vaults with pointed ribbed arches and external flying buttresses. By transferring the immense outward lateral thrust of stone ceilings onto exterior masonry supports, architects eliminated the need for thick load-bearing walls. This structural breakthrough enabled cathedrals to reach soaring vertical heights and incorporate expansive stained-glass rose windows.",
            "keywords": [
                "Gothic",
                "architecture",
                "buttresses",
                "arches",
                "vaults",
                "structural",
                "stained",
                "cathedrals"
            ],
            "modelSummary": "The lecture traces how twelfth-century Gothic architects revolutionized medieval construction by combining pointed ribbed arches with external flying buttresses. By redirecting the heavy outward thrust of stone ceilings onto exterior masonry supports, builders eliminated thick load-bearing walls and achieved soaring vertical interiors illuminated by expansive stained-glass windows."
        },
        {
            "id": "SST-19",
            "title": "Bacteriophage Therapy Against Antibiotic Resistance",
            "lecture": "As multidrug-resistant superbugs render conventional chemical antibiotics obsolete, infectious disease specialists are reviving bacteriophage therapy. Bacteriophages are naturally occurring viruses that infect and lyse specific pathogenic bacteria without harming beneficial human flora. Because phages co-evolve alongside their bacterial targets, combining personalized phage cocktails with traditional antibiotics can overcome stubborn biofilm infections.",
            "keywords": [
                "bacteriophage",
                "antibiotic",
                "resistance",
                "superbugs",
                "viruses",
                "bacteria",
                "biofilm",
                "therapy"
            ],
            "modelSummary": "As multidrug-resistant superbugs diminish the effectiveness of conventional antibiotics, medical researchers are reviving targeted bacteriophage therapy. Because phage viruses selectively infect and destroy specific pathogenic bacteria while sparing beneficial human flora and penetrating protective biofilms, personalized phage cocktails offer a powerful precision treatment for refractory bacterial infections."
        },
        {
            "id": "SST-20",
            "title": "Empirical Findings from Universal Basic Income Trials",
            "lecture": "Longitudinal randomized trials of Universal Basic Income in Finland and Kenya have challenged conventional assumptions regarding welfare and labor supply. Critics historically argued that unconditional cash transfers would discourage employment and foster dependency. Empirical data, however, revealed that recipients maintained stable working hours while reporting marked improvements in mental health, entrepreneurial risk-taking, and educational attainment.",
            "keywords": [
                "universal",
                "income",
                "transfers",
                "employment",
                "welfare",
                "mental",
                "entrepreneurship",
                "empirical"
            ],
            "modelSummary": "Longitudinal field experiments of Universal Basic Income in Finland and Kenya refute traditional claims that unconditional cash transfers discourage work. Empirical evaluations reveal that recipients maintained consistent employment participation while achieving notable gains in psychological well-being, educational persistence, and entrepreneurial risk-taking, supporting the viability of unconditional social safety nets."
        },
        {
            "id": "SST-21",
            "title": "Adaptive Myelin Plasticity in Adult Skill Learning",
            "lecture": "Neuroscientists historically viewed myelin solely as passive electrical insulation wrapped around neuronal axons to speed up action potentials. Recent optical imaging reveals that oligodendrocyte cells actively remodel myelin sheath thickness in response to complex motor skill training, such as learning to play the piano. This adaptive myelination synchronizes neural impulse arrival times across distant brain regions, proving that white matter plasticity is essential for adult learning.",
            "keywords": [
                "myelin",
                "plasticity",
                "axons",
                "white",
                "matter",
                "learning",
                "impulses",
                "synchronization"
            ],
            "modelSummary": "Modern neuroimaging demonstrates that myelin sheaths are not merely passive axonal insulation but dynamically remodel their thickness during intensive adult motor learning. Regulated by oligodendrocytes, adaptive myelination fine-tunes conduction velocity to synchronize neural impulse arrival across distant brain regions, proving that white matter plasticity is indispensable for acquiring complex skills."
        },
        {
            "id": "SST-22",
            "title": "Resource Efficiency and Energy Limits of Vertical Farming",
            "lecture": "Indoor vertical farms utilizing hydroponic nutrient mist and stacked LED lighting can produce leafy greens using ninety-five percent less water and land than conventional agriculture. Furthermore, climate-controlled warehouses eliminate agricultural pesticide runoff and shorten urban supply chains. Nevertheless, the high electricity cost of artificial photosynthetic lighting currently restricts profitable vertical cultivation to rapid-growing herbs and lettuce rather than staple cereal grains.",
            "keywords": [
                "vertical",
                "farming",
                "hydroponics",
                "lighting",
                "water",
                "urban",
                "energy",
                "crops"
            ],
            "modelSummary": "The speaker assesses indoor vertical farming, noting that hydroponic cultivation under stacked LED arrays cuts water and land usage by ninety-five percent while eliminating agricultural pesticides. However, the substantial electricity cost of artificial photosynthetic lighting currently restricts profitable production to leafy greens rather than energy-dense staple cereal grains."
        },
        {
            "id": "SST-23",
            "title": "Globalization and the Indigenous Language Extinction Crisis",
            "lecture": "Linguists estimate that of the seven thousand spoken human languages existing today, nearly half will fall silent by the end of the twenty-first century. Globalization, urbanization, and compulsory national schooling pressure indigenous youth to abandon ancestral tongues in favor of dominant metropolitan languages. When an undocumented oral language disappears, humanity loses irreplaceable ecological taxonomies, oral histories, and unique cognitive frameworks.",
            "keywords": [
                "language",
                "extinction",
                "indigenous",
                "globalization",
                "heritage",
                "ecological",
                "oral",
                "preservation"
            ],
            "modelSummary": "Linguists warn that nearly half of the world's seven thousand spoken languages face extinction this century as globalization and urbanization pressure youth toward dominant national tongues. Because unwritten indigenous languages encode irreplaceable ecological knowledge and cognitive frameworks, urgent digital documentation and bilingual education programs are required to preserve human linguistic heritage."
        },
        {
            "id": "SST-24",
            "title": "Environmental Shift from Tidal Barrages to Seabed Turbines",
            "lecture": "Unlike intermittent wind and solar power, oceanic tidal currents follow highly predictable astronomical cycles governed by lunar gravity. Early tidal barrage dams generated substantial electricity but disrupted estuarine sediment flow and migratory fish habitats. Modern marine engineers increasingly favor submerged in-stream tidal turbines, which harvest kinetic water energy on the seabed with minimal ecological footprint.",
            "keywords": [
                "tidal",
                "energy",
                "lunar",
                "barrage",
                "estuarine",
                "turbines",
                "renewable",
                "marine"
            ],
            "modelSummary": "The lecture compares marine technologies for harvesting predictable lunar tidal energy. Although early estuarine barrage dams generated substantial electricity, they severely disrupted sediment transport and fish migration, prompting modern engineers to adopt submerged in-stream seabed turbines that capture kinetic tidal currents with minimal ecological disturbance."
        },
        {
            "id": "SST-25",
            "title": "Stage-Two Sleep Spindles and Emotional Regulation",
            "lecture": "Polysomnography recordings demonstrate that non-REM stage-two sleep is characterized by bursts of oscillatory brain activity known as sleep spindles. These thalamocortical spindles act as a neurobiological gatekeeper, selectively transferring salient procedural and academic memories from the hippocampus to the neocortex while stripping away painful emotional charge. Sleep deprivation disrupts this nocturnal filtering, heightening amygdala reactivity and emotional volatility.",
            "keywords": [
                "sleep",
                "spindles",
                "memory",
                "hippocampus",
                "neocortex",
                "amygdala",
                "emotional",
                "deprivation"
            ],
            "modelSummary": "Polysomnography research reveals that oscillatory sleep spindles during non-REM stage-two sleep transfer declarative memories from the hippocampus to the neocortex while attenuating painful emotional charges. Consequently, sleep deprivation disrupts this nocturnal neurobiological filtering and heightens amygdala reactivity, impairing both academic memory retention and daytime emotional stability."
        },
        {
            "id": "SST-26",
            "title": "Carbon Border Tariffs and Industrial Leakage Prevention",
            "lecture": "When a single jurisdiction imposes stringent domestic carbon taxes, energy-intensive manufacturers such as steel and cement producers may relocate factories to countries with lax environmental rules. This phenomenon, termed carbon leakage, undermines global emission reductions while penalizing domestic employment. To level the competitive playing field, the European Union introduced a Carbon Border Adjustment Mechanism that levies equivalent tariffs on carbon-intensive imports.",
            "keywords": [
                "carbon",
                "leakage",
                "tariff",
                "climate",
                "trade",
                "manufacturing",
                "emissions",
                "competitiveness"
            ],
            "modelSummary": "The speaker analyzes Carbon Border Adjustment Mechanisms designed to prevent carbon leakage when nations enforce strict domestic emissions pricing. By levying equivalent carbon tariffs on energy-intensive imports such as steel and cement, border adjustments protect domestic manufacturers from unfair competition and incentivize trading partners to accelerate industrial decarbonization."
        },
        {
            "id": "SST-27",
            "title": "Algorithmic Bias and Feedback Loops in Predictive Policing",
            "lecture": "Municipal police departments increasingly deploy predictive software algorithms to forecast crime hotspots and allocate patrol cars. Because these algorithms are trained on historical arrest records rather than actual unreported crime rates, they disproportionately direct officers back to low-income neighborhoods. Increased police presence inevitably generates more minor arrests in those exact districts, creating a self-confirming statistical feedback loop.",
            "keywords": [
                "predictive",
                "policing",
                "algorithms",
                "bias",
                "feedback",
                "arrest",
                "surveillance",
                "audits"
            ],
            "modelSummary": "The lecture critiques predictive policing algorithms that allocate police patrols using historical arrest records rather than true crime incidence. Because heightened patrolling in low-income neighborhoods inevitably generates additional minor arrests, these systems create a self-reinforcing statistical feedback loop that perpetuates systemic bias unless independent algorithmic audits are mandated."
        },
        {
            "id": "SST-28",
            "title": "Ecological Risks of Deep-Sea Rare Earth Mining",
            "lecture": "Transitioning to electric vehicles and wind turbines requires vast quantities of rare earth elements such as neodymium and dysprosium. Geochemists studying deep-sea hydrothermal vents have discovered vast polymetallic sulfide deposits and rare-earth-rich muds on the Pacific abyssal plain. However, commercial deep-sea mining machines risk kicking up toxic sediment plumes that could smother slow-growing benthic organisms over thousands of square kilometers.",
            "keywords": [
                "rare",
                "earth",
                "mining",
                "hydrothermal",
                "sediment",
                "plumes",
                "benthic",
                "biodiversity"
            ],
            "modelSummary": "While deep-sea hydrothermal vents and abyssal plains contain abundant rare earth minerals essential for electric vehicle batteries and wind turbines, commercial seabed mining poses severe ecological hazards. Harvesting machinery generates toxic sediment plumes that smother slow-growing benthic organisms, leading marine scientists to demand strict regulatory moratoriums."
        },
        {
            "id": "SST-29",
            "title": "Savanna Climate Shifts and Hominin Bipedal Evolution",
            "lecture": "Paleoanthropological fossil evidence from East Africa indicates that early hominins evolved habitual upright bipedal locomotion at least four million years ago, long before dramatic brain enlargement occurred. As Miocene climate cooling transformed dense tropical rainforests into patchy savanna woodlands, walking on two legs reduced solar heat absorption and improved energetic efficiency over long foraging distances. Freeing the forelimbs also enabled tool transport and food provisioning.",
            "keywords": [
                "bipedalism",
                "hominin",
                "evolution",
                "savanna",
                "thermoregulation",
                "locomotion",
                "fossil",
                "tools"
            ],
            "modelSummary": "Paleoanthropological evidence indicates that habitual upright bipedalism evolved in East African hominins four million years ago as forests transitioned into open savannas, preceding major brain expansion. Walking on two legs minimized solar heat absorption, improved long-distance foraging energy efficiency, and freed the hands for tool transport and food provisioning."
        },
        {
            "id": "SST-30",
            "title": "Synthetic Biology and mRNA Vaccine Adaptability",
            "lecture": "Unlike conventional vaccines that require growing weakened viruses inside chicken eggs or bioreactors over many months, messenger RNA vaccines deliver synthetic genetic instructions encapsulated in lipid nanoparticles. Once inside human host cells, ribosomes transiently translate the mRNA sequence into a harmless viral spike protein to train adaptive immunity. Because the platform relies on digital sequence design, researchers can rapidly adapt mRNA candidates to target emerging viral variants and personalized cancer neoantigens.",
            "keywords": [
                "mRNA",
                "vaccines",
                "nanoparticles",
                "immune",
                "synthetic",
                "manufacturing",
                "cancer",
                "variants"
            ],
            "modelSummary": "The speaker explains how messenger RNA vaccines use lipid nanoparticles to deliver synthetic genetic instructions that train host immunity without culturing live viruses. Because mRNA platforms rely on rapid digital sequence design, researchers can swiftly update formulations against emerging viral variants and engineer personalized cancer immunotherapies."
        },
        {
            "id": "SST-31",
            "title": "Anthropogenic Ocean Noise and Cetacean Stranding",
            "lecture": "Sound travels four times faster in water than in air, making acoustic signaling the primary sensory modality for cetaceans such as blue whales and dolphins. Over the past half-century, commercial container shipping, seismic oil exploration, and naval sonar have elevated ambient low-frequency ocean noise tenfold. This chronic acoustic smog masks long-range whale mating calls, disrupts echolocation foraging, and induces fatal mass strandings.",
            "keywords": [
                "acoustic",
                "noise",
                "pollution",
                "cetaceans",
                "echolocation",
                "shipping",
                "seismic",
                "conservation"
            ],
            "modelSummary": "Chronic underwater noise pollution from commercial shipping propellers, seismic oil surveys, and naval sonar has increased ambient ocean noise tenfold over fifty years. Because whales and dolphins rely on acoustic signaling for navigation, foraging, and mating, mitigating marine acoustic smog through quieter ship hulls and reduced vessel speeds is urgent."
        },
        {
            "id": "SST-32",
            "title": "Consumer Decision Paralysis and the Paradox of Choice",
            "lecture": "Psychologist Barry Schwartz demonstrated that while modest choice enhances human autonomy, an overabundance of retail options frequently induces decision paralysis and post-purchase regret. In a famous field experiment, shoppers presented with twenty-four varieties of gourmet jam were ten times less likely to make a purchase than those shown only six flavors. Excessive options elevate cognitive comparison costs and make consumers agonize over the opportunity cost of unchosen alternatives.",
            "keywords": [
                "paradox",
                "choice",
                "paralysis",
                "consumer",
                "psychology",
                "cognitive",
                "opportunity",
                "satisfaction"
            ],
            "modelSummary": "Psychologist Barry Schwartz's research on the paradox of choice demonstrates that presenting consumers with excessive retail options triggers cognitive overload, decision paralysis, and post-purchase regret. Because shoppers agonize over the opportunity cost of rejected alternatives, curating concise product assortments significantly increases purchasing rates and customer satisfaction."
        },
        {
            "id": "SST-33",
            "title": "Photovoltaic Efficiency of Perovskite-Silicon Tandem Cells",
            "lecture": "Traditional crystalline silicon solar panels are approaching their theoretical single-junction Shockley-Queisser efficiency ceiling of roughlytwenty-nine percent. Materials scientists have overcome this barrier by layering a thin synthetic perovskite crystal film directly atop a conventional silicon wafer. Because perovskite absorbs high-energy blue photons while silicon captures lower-energy red infrared light, tandem solar cells achieve laboratory conversion efficiencies exceeding thirty-three percent.",
            "keywords": [
                "perovskite",
                "silicon",
                "tandem",
                "solar",
                "efficiency",
                "photons",
                "spectrum",
                "photovoltaics"
            ],
            "modelSummary": "Materials scientists have surpassed the theoretical efficiency ceiling of conventional silicon solar panels by layering synthetic perovskite films atop silicon wafers. Because perovskite captures high-energy blue light while silicon absorbs red infrared wavelengths, tandem photovoltaic cells achieve conversion efficiencies above thirty-three percent, promising cheaper solar electricity."
        },
        {
            "id": "SST-34",
            "title": "Soil Carbon Sequestration via Regenerative Agriculture",
            "lecture": "Conventional industrial tilling pulverizes soil aggregates, exposing subterranean organic matter to oxygen and releasing vast plumes of carbon dioxide into the atmosphere. Regenerative agriculture reverses this degradation by combining no-till direct seeding, multi-species cover cropping, and rotational livestock grazing. Deep-rooted perennial grasses pump liquid carbon exudates into the rhizosphere, rebuilding humic topsoil and enhancing drought resilience.",
            "keywords": [
                "regenerative",
                "agriculture",
                "carbon",
                "no-till",
                "cover",
                "crops",
                "topsoil",
                "drought"
            ],
            "modelSummary": "The lecture contrasts industrial mechanical tilling, which oxidizes soil organic matter and releases carbon dioxide, with regenerative agricultural practices. Combining no-till seeding, multi-species cover crops, and rotational grazing transfers atmospheric carbon into deep root ecosystems, rebuilding fertile topsoil and enhancing farm resilience against severe droughts."
        },
        {
            "id": "SST-35",
            "title": "Transport Economics of High-Speed Electric Rail",
            "lecture": "High-speed electric rail networks operating above three hundred kilometers per hour offer a competitive zero-emission alternative to short-haul domestic aviation on corridors between three hundred and eight hundred kilometers. City-center-to-city-center rail terminals eliminate airport security bottlenecks and integrate seamlessly with metropolitan subway systems. Although initial tunnel and viaduct capital costs are immense, high-speed rail generates long-term regional economic agglomeration.",
            "keywords": [
                "high-speed",
                "rail",
                "aviation",
                "decarbonization",
                "infrastructure",
                "connectivity",
                "agglomeration",
                "transport"
            ],
            "modelSummary": "High-speed electric rail networks operating above three hundred kilometers per hour provide a competitive zero-carbon alternative to short-haul flights on medium-distance corridors. By linking downtown terminals directly and avoiding airport bottlenecks, high-speed rail reduces transport emissions and fosters long-term regional economic integration despite high upfront capital costs."
        }
    ],
    "fib": [
        {
            "id": "FIB-01",
            "title": "기후변화와 생태계 위기",
            "template": [
                "Global warming represents a significant challenge to global ecosystems. Rising temperatures have ",
                {
                    "id": 0,
                    "options": [
                        "caused",
                        "caused to",
                        "affected to",
                        "prevented"
                    ],
                    "answer": "caused",
                    "explain": "have + p.p 형태로 목적어 뒤 to부정사를 취하는 타동사 'caused'가 적절합니다."
                },
                " extreme weather events to become more frequent and intense. In addition, polar ice caps are melting at an ",
                {
                    "id": 1,
                    "options": [
                        "unprecedented",
                        "unlikely",
                        "insignificant",
                        "ordinary"
                    ],
                    "answer": "unprecedented",
                    "explain": "'unprecedented rate(전례 없는 속도)'는 학술 영어의 핵심 연어(Collocation)입니다."
                },
                " rate, threatening coastal communities. Scientists emphasize that international cooperation is ",
                {
                    "id": 2,
                    "options": [
                        "vital",
                        "futile",
                        "optional",
                        "irrelevant"
                    ],
                    "answer": "vital",
                    "explain": "문맥상 국제 협력이 '필수적(vital)'이라는 당위 표현이 필요합니다."
                },
                " to reduce greenhouse gas emissions."
            ]
        },
        {
            "id": "FIB-02",
            "title": "인공지능과 빅데이터 분석",
            "template": [
                "Modern corporations generate vast amounts of data every day. In order to extract meaningful insights, organizations increasingly ",
                {
                    "id": 0,
                    "options": [
                        "rely",
                        "insist",
                        "depend on",
                        "focus"
                    ],
                    "answer": "rely",
                    "explain": "뒤따르는 전치사 'on'과 결합하는 자동사 'rely'가 문법적으로 정확합니다."
                },
                " on automated machine learning algorithms. These advanced models are capable of recognizing complex ",
                {
                    "id": 1,
                    "options": [
                        "patterns",
                        "distortions",
                        "failures",
                        "rumors"
                    ],
                    "answer": "patterns",
                    "explain": "머신러닝 알고리즘의 핵심 기능은 '복잡한 패턴(patterns)'을 식별하는 것입니다."
                },
                " that would be impossible for humans to detect manually, thereby significantly improving decision-making ",
                {
                    "id": 2,
                    "options": [
                        "efficiency",
                        "hesitation",
                        "neglect",
                        "rejection"
                    ],
                    "answer": "efficiency",
                    "explain": "의사결정 속도와 정확도를 높인다는 맥락이므로 '효율성(efficiency)'이 정답입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-03",
            "title": "도시화와 대중교통 인프라",
            "template": [
                "Rapid urbanization has placed immense pressure on municipal infrastructure. Traffic congestion not only wastes productive time but also ",
                {
                    "id": 0,
                    "options": [
                        "contributes",
                        "attributes",
                        "distributes",
                        "prohibits"
                    ],
                    "answer": "contributes",
                    "explain": "'contribute to(~에 기여하다/원인이 되다)' 구문으로 대기 오염 악화를 설명합니다."
                },
                " to severe air pollution. Consequently, urban planners are prioritizing the ",
                {
                    "id": 1,
                    "options": [
                        "expansion",
                        "extinction",
                        "reduction",
                        "abandonment"
                    ],
                    "answer": "expansion",
                    "explain": "지하철 및 친환경 버스 노선의 '확장(expansion)'을 우선시한다는 문맥입니다."
                },
                " of underground rail networks and dedicated bus lanes to encourage sustainable ",
                {
                    "id": 2,
                    "options": [
                        "commuting",
                        "hesitating",
                        "migrating",
                        "stagnating"
                    ],
                    "answer": "commuting",
                    "explain": "지속 가능한 '통근(commuting)'을 장려한다는 의미가 가장 자연스럽습니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-04",
            "title": "수면 부족과 인지 능력",
            "template": [
                "Neuroscientific research consistently shows that chronic sleep deprivation ",
                {
                    "id": 0,
                    "options": [
                        "impairs",
                        "enhances",
                        "restores",
                        "validates"
                    ],
                    "answer": "impairs",
                    "explain": "만성 수면 부족이 주의력과 기억력을 '손상시킨다(impairs)'는 부정적 타동사가 필요합니다."
                },
                " human attention, working memory, and emotional regulation. Individuals who regularly sleep fewer than six hours per night exhibit a higher ",
                {
                    "id": 1,
                    "options": [
                        "susceptibility",
                        "immunity",
                        "resistance",
                        "indifference"
                    ],
                    "answer": "susceptibility",
                    "explain": "'susceptibility to(~에 대한 취약성/민감성)' 연어 구조입니다."
                },
                " to cardiovascular disease and metabolic disorders. Establishing a consistent bedtime routine is therefore ",
                {
                    "id": 2,
                    "options": [
                        "beneficial",
                        "detrimental",
                        "hazardous",
                        "redundant"
                    ],
                    "answer": "beneficial",
                    "explain": "장기적인 건강에 '유익하다(beneficial)'는 결론입니다."
                },
                " for long-term physical and mental well-being."
            ]
        },
        {
            "id": "FIB-05",
            "title": "생물 다양성과 열대우림 보존",
            "template": [
                "Tropical rainforests harbor more than half of the world's terrestrial plant and animal species. However, widespread deforestation driven by commercial logging and agriculture poses an ",
                {
                    "id": 0,
                    "options": [
                        "imminent",
                        "ancient",
                        "obscure",
                        "optional"
                    ],
                    "answer": "imminent",
                    "explain": "'imminent threat(임박한 위협)'은 환경 학술 지문의 대표 빈출 연어입니다."
                },
                " threat to these delicate habitats. When keystone species vanish, the entire ecological food web can ",
                {
                    "id": 1,
                    "options": [
                        "collapse",
                        "flourish",
                        "prosper",
                        "stabilize"
                    ],
                    "answer": "collapse",
                    "explain": "핵심종이 사라지면 먹이사슬 전체가 '붕괴할(collapse)' 수 있다는 문맥입니다."
                },
                ", leading to irreversible biodiversity ",
                {
                    "id": 2,
                    "options": [
                        "loss",
                        "gain",
                        "surplus",
                        "abundance"
                    ],
                    "answer": "loss",
                    "explain": "'biodiversity loss(생물 다양성 손실)'는 고정된 학술 복합명사입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-06",
            "title": "행동경제학과 소비자 심리",
            "template": [
                "Classical economic models assume that individuals evaluate all available information objectively before making a purchase. In reality, consumers are heavily ",
                {
                    "id": 0,
                    "options": [
                        "influenced",
                        "isolated",
                        "prevented",
                        "exempted"
                    ],
                    "answer": "influenced",
                    "explain": "수동태 'be influenced by(~에 의해 영향을 받다)' 구조입니다."
                },
                " by cognitive biases and framing effects. For instance, people tend to place a disproportionately high value on avoiding losses compared to acquiring ",
                {
                    "id": 1,
                    "options": [
                        "equivalent",
                        "inferior",
                        "negligible",
                        "unrelated"
                    ],
                    "answer": "equivalent",
                    "explain": "'동등한(equivalent) 이익'과 손실 회피 성향을 비교하는 문맥입니다."
                },
                " gains, a phenomenon known as loss ",
                {
                    "id": 2,
                    "options": [
                        "aversion",
                        "affection",
                        "ambition",
                        "adoption"
                    ],
                    "answer": "aversion",
                    "explain": "행동경제학의 핵심 개념인 'loss aversion(손실 회피)' 용어입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-07",
            "title": "항생제 내성과 현대 의학",
            "template": [
                "The discovery of penicillin in the twentieth century revolutionized modern medicine by transforming fatal bacterial infections into treatable conditions. Unfortunately, the overuse and misuse of antibiotics have ",
                {
                    "id": 0,
                    "options": [
                        "accelerated",
                        "eliminated",
                        "postponed",
                        "prohibited"
                    ],
                    "answer": "accelerated",
                    "explain": "항생제 남용이 내성균의 출현을 '가속화했다(accelerated)'는 의미입니다."
                },
                " the emergence of resistant bacterial strains. Global health authorities warn that unless new antimicrobial therapies are ",
                {
                    "id": 1,
                    "options": [
                        "developed",
                        "abandoned",
                        "concealed",
                        "forfeited"
                    ],
                    "answer": "developed",
                    "explain": "새로운 치료제가 '개발되지(developed)' 않는다면 위험하다는 조건절입니다."
                },
                ", routine surgical procedures could once again become life-threatening ",
                {
                    "id": 2,
                    "options": [
                        "endeavors",
                        "triumphs",
                        "miracles",
                        "privileges"
                    ],
                    "answer": "endeavors",
                    "explain": "생명을 위협하는 위험한 '시도/일(endeavors)'이 될 수 있다는 맥락입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-08",
            "title": "원격 근무와 조직 문화",
            "template": [
                "The shift toward hybrid work arrangements has forced corporations to rethink traditional management practices. Rather than evaluating staff based on physical presence in the office, managers are increasingly ",
                {
                    "id": 0,
                    "options": [
                        "assessing",
                        "ignoring",
                        "dismissing",
                        "Obstructing"
                    ],
                    "answer": "assessing",
                    "explain": "직원을 결과물 기준으로 '평가하고(assessing)' 있다는 진행형 동사입니다."
                },
                " employees according to measurable output and project milestones. Nevertheless, maintaining team ",
                {
                    "id": 1,
                    "options": [
                        "cohesion",
                        "division",
                        "friction",
                        "isolation"
                    ],
                    "answer": "cohesion",
                    "explain": "'team cohesion(팀 결속력)'은 조직 심리학 지문의 단골 연어입니다."
                },
                " and spontaneous creativity across geographically dispersed teams remains a persistent ",
                {
                    "id": 2,
                    "options": [
                        "challenge",
                        "guarantee",
                        "luxury",
                        "remedy"
                    ],
                    "answer": "challenge",
                    "explain": "여전히 지속적인 '과제(challenge)'로 남아 있다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-09",
            "title": "고고학과 고대 문명 복원",
            "template": [
                "Modern archaeology has moved far beyond simple excavation of ancient monuments. By employing satellite remote sensing and ground-penetrating radar, researchers can ",
                {
                    "id": 0,
                    "options": [
                        "detect",
                        "destroy",
                        "fabricate",
                        "overlook"
                    ],
                    "answer": "detect",
                    "explain": "지하에 묻힌 유구와 정착지를 비파괴 방식으로 '탐지하다(detect)'가 적절합니다."
                },
                " buried settlements without disturbing the soil. Furthermore, DNA analysis of ancient skeletal remains provides ",
                {
                    "id": 1,
                    "options": [
                        "invaluable",
                        "worthless",
                        "superficial",
                        "ambiguous"
                    ],
                    "answer": "invaluable",
                    "explain": "'invaluable insights(매우 귀중한 통찰)' 연어 표현입니다."
                },
                " insights into prehistoric migration routes, dietary habits, and genetic ",
                {
                    "id": 2,
                    "options": [
                        "ancestry",
                        "futurity",
                        "machinery",
                        "scenery"
                    ],
                    "answer": "ancestry",
                    "explain": "유전적 '혈통/조상(ancestry)'을 밝혀낸다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-10",
            "title": "태양광 발전과 에너지 저장 기술",
            "template": [
                "While solar photovoltaic panels have plummeted in cost over the past decade, the intermittent nature of sunlight poses a challenge for grid stability. Electricity generation peaks at midday but drops to zero after sunset, precisely when residential demand ",
                {
                    "id": 0,
                    "options": [
                        "surges",
                        "vanishes",
                        "collapses",
                        "shrinks"
                    ],
                    "answer": "surges",
                    "explain": "일몰 직후 가정용 전력 수요가 '급증한다(surges)'는 대조 문맥입니다."
                },
                ". To bridge this gap, utility companies are investing heavily in large-scale lithium-ion battery ",
                {
                    "id": 1,
                    "options": [
                        "storage",
                        "shortage",
                        "leakage",
                        "spoilage"
                    ],
                    "answer": "storage",
                    "explain": "'energy/battery storage(에너지/배터리 저장)' 복합명사입니다."
                },
                " systems capable of releasing clean power during peak evening ",
                {
                    "id": 2,
                    "options": [
                        "hours",
                        "centuries",
                        "decades",
                        "eras"
                    ],
                    "answer": "hours",
                    "explain": "'peak evening hours(저녁 피크 시간대)' 연어입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-11",
            "title": "해양 산성화와 산호초 백화 현상",
            "template": [
                "The world's oceans act as a massive carbon sink, absorbing approximately one-third of human-generated carbon dioxide emissions. However, this absorption triggers chemical reactions that lower seawater pH, a process known as ocean ",
                {
                    "id": 0,
                    "options": [
                        "acidification",
                        "purification",
                        "desalination",
                        "evaporation"
                    ],
                    "answer": "acidification",
                    "explain": "해수 pH가 낮아지는 '해양 산성화(ocean acidification)' 전문 용어입니다."
                },
                ". More acidic waters hinder the ability of marine calcifiers, such as corals and shellfish, to build protective ",
                {
                    "id": 1,
                    "options": [
                        "skeletons",
                        "predators",
                        "currents",
                        "glaciers"
                    ],
                    "answer": "skeletons",
                    "explain": "산호와 패류가 보호용 '골격/껍질(skeletons)'을 형성하는 것을 방해한다는 의미입니다."
                },
                ", ultimately jeopardizing the entire marine ",
                {
                    "id": 2,
                    "options": [
                        "ecosystem",
                        "atmosphere",
                        "continent",
                        "peninsula"
                    ],
                    "answer": "ecosystem",
                    "explain": "해양 '생태계(ecosystem)' 전체를 위태롭게 한다는 결론입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-12",
            "title": "이중 언어 사용과 뇌 인지 예비능",
            "template": [
                "Cognitive psychologists have long debated how speaking multiple languages shapes executive brain function. Recent neuroimaging studies indicate that bilingual individuals constantly ",
                {
                    "id": 0,
                    "options": [
                        "manage",
                        "abandon",
                        "forget",
                        "suppress to"
                    ],
                    "answer": "manage",
                    "explain": "두 개의 활성화된 언어 체계를 동시에 '관리/조절한다(manage)'는 타동사입니다."
                },
                " two active linguistic systems, which strengthens the prefrontal cortex. This lifelong mental exercise appears to build cognitive ",
                {
                    "id": 1,
                    "options": [
                        "reserve",
                        "decline",
                        "exhaustion",
                        "apathy"
                    ],
                    "answer": "reserve",
                    "explain": "뇌과학 용어인 'cognitive reserve(인지 예비능)'를 완성하는 단어입니다."
                },
                ", potentially delaying the onset of age-related dementia symptoms by several ",
                {
                    "id": 2,
                    "options": [
                        "years",
                        "seconds",
                        "millimeters",
                        "grams"
                    ],
                    "answer": "years",
                    "explain": "치매 증상 발현을 수 '년(years)' 늦춰준다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-13",
            "title": "공급망 다변화와 리스크 관리",
            "template": [
                "For decades, global manufacturers pursued lean inventory strategies to minimize warehousing costs. However, recent global disruptions revealed the ",
                {
                    "id": 0,
                    "options": [
                        "vulnerability",
                        "invincibility",
                        "permanence",
                        "simplicity"
                    ],
                    "answer": "vulnerability",
                    "explain": "단일 공급처 의존의 '취약성(vulnerability)'을 드러냈다는 문맥입니다."
                },
                " of relying on a single geographic region for critical components. In response, chief executives are adopting diversification strategies to enhance supply chain ",
                {
                    "id": 1,
                    "options": [
                        "resilience",
                        "fragility",
                        "rigidity",
                        "obscurity"
                    ],
                    "answer": "resilience",
                    "explain": "'supply chain resilience(공급망 회복탄력성)'는 경제·경영 지문 최빈출 연어입니다."
                },
                " against unforeseen external ",
                {
                    "id": 2,
                    "options": [
                        "shocks",
                        "rewards",
                        "miracles",
                        "harmonies"
                    ],
                    "answer": "shocks",
                    "explain": "'external shocks(외부 충격)' 연어 표현입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-14",
            "title": "정밀 의학과 유전체학의 발전",
            "template": [
                "Traditional medical treatments are typically designed for the average patient, adopting a one-size-fits-all approach. In contrast, precision medicine takes into ",
                {
                    "id": 0,
                    "options": [
                        "account",
                        "action",
                        "effect",
                        "place"
                    ],
                    "answer": "account",
                    "explain": "'take into account(~을 고려하다)' 필수 숙어입니다."
                },
                " individual variability in genes, environment, and lifestyle. By sequencing a patient's tumor genome, oncologists can prescribe targeted therapies that maximize treatment ",
                {
                    "id": 1,
                    "options": [
                        "efficacy",
                        "toxicity",
                        "redundancy",
                        "ambiguity"
                    ],
                    "answer": "efficacy",
                    "explain": "'treatment efficacy(치료 효능/효과)' 의학 학술 연어입니다."
                },
                " while minimizing harmful side ",
                {
                    "id": 2,
                    "options": [
                        "effects",
                        "causes",
                        "origins",
                        "motives"
                    ],
                    "answer": "effects",
                    "explain": "'side effects(부작용)' 고정 표현입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-15",
            "title": "대중매체와 확증 편향",
            "template": [
                "Algorithimic recommendation engines on digital platforms are engineered to maximize user engagement. By analyzing past browsing behavior, these systems continuously feed users content that ",
                {
                    "id": 0,
                    "options": [
                        "aligns",
                        "conflicts",
                        "diverges",
                        "separates"
                    ],
                    "answer": "aligns",
                    "explain": "'align with(~와 일치하다/부합하다)' 구문으로 기존 신념에 부합하는 콘텐츠를 뜻합니다."
                },
                " with their preexisting beliefs. Sociologists warn that such personalized filter bubbles reinforce confirmation ",
                {
                    "id": 1,
                    "options": [
                        "bias",
                        "neutrality",
                        "objectivity",
                        "fairness"
                    ],
                    "answer": "bias",
                    "explain": "'confirmation bias(확증 편향)' 심리·사회학 필수 용어입니다."
                },
                " and deepen political ",
                {
                    "id": 2,
                    "options": [
                        "polarization",
                        "unification",
                        "consensus",
                        "harmony"
                    ],
                    "answer": "polarization",
                    "explain": "'political polarization(정치적 양극화)'을 심화시킨다는 결론입니다."
                },
                " within democratic societies."
            ]
        },
        {
            "id": "FIB-16",
            "title": "르네상스 인문주의와 교육 개혁",
            "template": [
                "During the European Renaissance, scholars revived interest in classical Greek and Roman texts. This intellectual movement, known as humanism, ",
                {
                    "id": 0,
                    "options": [
                        "shifted",
                        "froze",
                        "ignored",
                        "abolished"
                    ],
                    "answer": "shifted",
                    "explain": "'shift A from B to C(A를 B에서 C로 전환하다)' 구문입니다."
                },
                " educational priorities away from purely scholastic theology toward rhetoric, history, and moral philosophy. Humanist educators believed that studying the liberal arts would cultivate civic ",
                {
                    "id": 1,
                    "options": [
                        "virtue",
                        "apathy",
                        "corruption",
                        "hostility"
                    ],
                    "answer": "virtue",
                    "explain": "'civic virtue(시민적 덕성)'은 역사·철학 지문의 핵심 연어입니다."
                },
                " and prepare citizens to participate actively in public ",
                {
                    "id": 2,
                    "options": [
                        "affairs",
                        "illusions",
                        "solitudes",
                        "trivialities"
                    ],
                    "answer": "affairs",
                    "explain": "'public affairs(공공 업무/국정)' 고정 연어 표현입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-17",
            "title": "백신 면역학과 집단 면역",
            "template": [
                "Vaccination works by introducing a harmless component of a pathogen into the body to stimulate an immune response. When a critical proportion of a population becomes immune to an infectious disease, the transmission chain is ",
                {
                    "id": 0,
                    "options": [
                        "disrupted",
                        "amplified",
                        "encouraged",
                        "prolonged"
                    ],
                    "answer": "disrupted",
                    "explain": "감염 전파 사슬이 '차단/중단된다(disrupted)'는 수동태 동사가 적절합니다."
                },
                ". This phenomenon, termed herd immunity, provides indirect ",
                {
                    "id": 1,
                    "options": [
                        "protection",
                        "exposure",
                        "vulnerability",
                        "infection"
                    ],
                    "answer": "protection",
                    "explain": "'indirect protection(간접적 보호)'을 제공한다는 문맥입니다."
                },
                " to immunocompromised individuals who cannot safely receive vaccines ",
                {
                    "id": 2,
                    "options": [
                        "themselves",
                        "itself",
                        "ourselves",
                        "herself"
                    ],
                    "answer": "themselves",
                    "explain": "복수 명사 'individuals'를 강조하는 재귀대명사 'themselves'가 정답입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-18",
            "title": "중앙은행 디지털 화폐(CBDC)",
            "template": [
                "As physical cash usage declines globally, numerous central banks are exploring the issuance of digital currencies. Proponents argue that a central bank digital currency could lower cross-border transaction ",
                {
                    "id": 0,
                    "options": [
                        "costs",
                        "benefits",
                        "profits",
                        "bonuses"
                    ],
                    "answer": "costs",
                    "explain": "'transaction costs(거래 비용)'를 낮춘다는 경제학 핵심 연어입니다."
                },
                " and expand financial inclusion for unbanked populations. However, critics raise legitimate ",
                {
                    "id": 1,
                    "options": [
                        "concerns",
                        "praises",
                        "celebrations",
                        "indifferences"
                    ],
                    "answer": "concerns",
                    "explain": "'raise concerns(우려를 제기하다)' 대표 연어입니다."
                },
                " regarding citizen surveillance, cybersecurity vulnerabilities, and potential commercial bank ",
                {
                    "id": 2,
                    "options": [
                        "instability",
                        "prosperity",
                        "eternity",
                        "serenity"
                    ],
                    "answer": "instability",
                    "explain": "시중 은행의 '불안정성(instability)'을 초래할 수 있다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-19",
            "title": "토양 미생물과 탄소 격리",
            "template": [
                "Healthy agricultural soils teem with billions of microscopic bacteria and fungi that form symbiotic relationships with plant roots. These subterranean networks not only facilitate nutrient ",
                {
                    "id": 0,
                    "options": [
                        "uptake",
                        "outbreak",
                        "downfall",
                        "upheaval"
                    ],
                    "answer": "uptake",
                    "explain": "식물 뿌리의 '영양분 흡수(nutrient uptake)'를 뜻하는 생명과학 전문 연어입니다."
                },
                " but also trap atmospheric carbon underground. Regenerative farming practices, such as no-till cultivation and cover cropping, help ",
                {
                    "id": 1,
                    "options": [
                        "preserve",
                        "destroy",
                        "deplete",
                        "contaminate"
                    ],
                    "answer": "preserve",
                    "explain": "토양 구조를 '보존하다(preserve)'가 문맥에 부합합니다."
                },
                " soil structure and mitigate global climate ",
                {
                    "id": 2,
                    "options": [
                        "change",
                        "stagnation",
                        "constancy",
                        "immobility"
                    ],
                    "answer": "change",
                    "explain": "'mitigate climate change(기후 변화를 완화하다)' 연어입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-20",
            "title": "우주 쓰레기와 케슬러 신드롬",
            "template": [
                "Decades of satellite launches have left Earth's low orbit cluttered with millions of pieces of metallic debris. Traveling at velocities exceeding twenty-five thousand kilometers per hour, even a tiny paint fleck can ",
                {
                    "id": 0,
                    "options": [
                        "inflict",
                        "heal",
                        "prevent",
                        "forgive"
                    ],
                    "answer": "inflict",
                    "explain": "'inflict catastrophic damage(치명적인 손상을 입히다)' 고급 연어입니다."
                },
                " catastrophic damage on operational spacecraft. Astrophysicists warn that a single collision could trigger a cascading chain ",
                {
                    "id": 1,
                    "options": [
                        "reaction",
                        "inaction",
                        "affection",
                        "devotion"
                    ],
                    "answer": "reaction",
                    "explain": "'chain reaction(연쇄 반응)' 고정 복합명사입니다."
                },
                ", rendering orbital space unusable for future ",
                {
                    "id": 2,
                    "options": [
                        "generations",
                        "ancestors",
                        "fossils",
                        "antiquities"
                    ],
                    "answer": "generations",
                    "explain": "'future generations(미래 세대)' 연어입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-21",
            "title": "지적 재산권과 특허 제도의 딜레마",
            "template": [
                "Patent laws grant inventors a temporary monopoly over their creations to incentivize research and development. Without legal protection, competitors could immediately ",
                {
                    "id": 0,
                    "options": [
                        "replicate",
                        "originate",
                        "conceal",
                        "surrender"
                    ],
                    "answer": "replicate",
                    "explain": "경쟁사들이 신기술을 즉시 '복제할(replicate)' 수 있다는 문맥입니다."
                },
                " new technologies without bearing the initial financial risk. Nevertheless, excessively broad patents can stifle follow-on ",
                {
                    "id": 1,
                    "options": [
                        "innovation",
                        "stagnation",
                        "regression",
                        "imitation"
                    ],
                    "answer": "innovation",
                    "explain": "'stifle innovation(혁신을 저해하다/가로막다)' 빈출 연어입니다."
                },
                " and keep life-saving pharmaceuticals unaffordable in developing ",
                {
                    "id": 2,
                    "options": [
                        "nations",
                        "villages",
                        "households",
                        "neighborhoods"
                    ],
                    "answer": "nations",
                    "explain": "'developing nations(개발도상국)' 고정 표현입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-22",
            "title": "고래의 초저주파 수중 통신",
            "template": [
                "Baleen whales produce low-frequency vocalizations that can travel hundreds of kilometers through deep ocean channels. These complex acoustic signals play an essential role in long-distance navigation and mate ",
                {
                    "id": 0,
                    "options": [
                        "selection",
                        "rejection",
                        "extinction",
                        "digestion"
                    ],
                    "answer": "selection",
                    "explain": "'mate selection(짝 선택)' 동물행동학 핵심 용어입니다."
                },
                ". Sadly, the proliferation of commercial shipping vessels has dramatically elevated ambient underwater ",
                {
                    "id": 1,
                    "options": [
                        "noise",
                        "silence",
                        "tranquility",
                        "clarity"
                    ],
                    "answer": "noise",
                    "explain": "'underwater noise(수중 소음)'을 높였다는 문맥입니다."
                },
                ", effectively shrinking the communication range of these marine ",
                {
                    "id": 2,
                    "options": [
                        "mammals",
                        "reptiles",
                        "amphibians",
                        "insects"
                    ],
                    "answer": "mammals",
                    "explain": "고래는 대표적인 '해양 포유류(marine mammals)'입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-23",
            "title": "플라시보 효과의 신경생물학적 메커니즘",
            "template": [
                "The placebo effect occurs when a patient experiences genuine symptom relief after receiving an inert treatment. Far from being purely imaginary, brain imaging reveals that positive expectations ",
                {
                    "id": 0,
                    "options": [
                        "trigger",
                        "abolish",
                        "prohibit",
                        "withhold"
                    ],
                    "answer": "trigger",
                    "explain": "긍정적 기대감이 내인성 진통 물질의 분비를 '유발한다(trigger)'는 동사입니다."
                },
                " the release of endogenous opioids and dopamine. Consequently, clinical trials must compare experimental drugs against a placebo control group to ",
                {
                    "id": 1,
                    "options": [
                        "isolate",
                        "confuse",
                        "obscure",
                        "exaggerate"
                    ],
                    "answer": "isolate",
                    "explain": "약물의 순수한 약리적 효과를 '분리해내다/규명하다(isolate)'가 적절합니다."
                },
                " the true pharmacological efficacy of the ",
                {
                    "id": 2,
                    "options": [
                        "intervention",
                        "prohibition",
                        "abstention",
                        "neglect"
                    ],
                    "answer": "intervention",
                    "explain": "의학적 '처치/개입(intervention)'의 효과를 검증한다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-24",
            "title": "빙하기 인류 이주와 베링 육교",
            "template": [
                "During the Last Glacial Maximum, vast quantities of ocean water were locked up in continental ice sheets, causing global sea levels to drop by over one hundred meters. This dramatic regression ",
                {
                    "id": 0,
                    "options": [
                        "exposed",
                        "submerged",
                        "inundated",
                        "dissolved"
                    ],
                    "answer": "exposed",
                    "explain": "해수면 하강으로 해저 대륙붕이 수면 위로 '드러났다(exposed)'는 의미입니다."
                },
                " a wide land bridge connecting Siberia and Alaska. Prehistoric hunter-gatherers gradually migrated across this treeless tundra, eventually ",
                {
                    "id": 1,
                    "options": [
                        "populating",
                        "evacuating",
                        "abandoning",
                        "demolishing"
                    ],
                    "answer": "populating",
                    "explain": "아메리카 대륙 전역에 '거주하게/정착하게 되었다(populating)'는 분사구문입니다."
                },
                " the entirety of North and South ",
                {
                    "id": 2,
                    "options": [
                        "America",
                        "Antarctica",
                        "Australia",
                        "Europe"
                    ],
                    "answer": "America",
                    "explain": "'North and South America(남북 아메리카)' 지리적 맥락입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-25",
            "title": "감성 지능(EQ)과 리더십 성과",
            "template": [
                "While technical expertise and analytical intelligence are important prerequisites for career entry, emotional intelligence often determines leadership success. Leaders who possess high self-awareness and empathy can ",
                {
                    "id": 0,
                    "options": [
                        "navigate",
                        "aggravate",
                        "provoke",
                        "escalate"
                    ],
                    "answer": "navigate",
                    "explain": "'navigate interpersonal conflicts(대인 갈등을 잘 헤쳐나가다/조율하다)' 연어입니다."
                },
                " interpersonal conflicts constructively. By fostering psychological safety, empathetic managers empower team members to voice innovative ideas without ",
                {
                    "id": 1,
                    "options": [
                        "fear",
                        "joy",
                        "hope",
                        "pride"
                    ],
                    "answer": "fear",
                    "explain": "'without fear of retaliation(보복이나 비난에 대한 두려움 없이)' 구문입니다."
                },
                " of ridicule or ",
                {
                    "id": 2,
                    "options": [
                        "retaliation",
                        "promotion",
                        "reward",
                        "applause"
                    ],
                    "answer": "retaliation",
                    "explain": "'ridicule or retaliation(조롱이나 보복)' 병렬 구조입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-26",
            "title": "초전도체 기술과 전력 송전 혁신",
            "template": [
                "Conventional copper power lines lose a significant percentage of electricity as heat due to electrical resistance. Superconductors, by contrast, can conduct electric current with zero ",
                {
                    "id": 0,
                    "options": [
                        "resistance",
                        "efficiency",
                        "conductivity",
                        "velocity"
                    ],
                    "answer": "resistance",
                    "explain": "초전도체의 핵심 정의인 '저항 제로(zero resistance)'입니다."
                },
                " when cooled below a critical temperature. Discovering a material that exhibits superconductivity at ambient room temperature would ",
                {
                    "id": 1,
                    "options": [
                        "revolutionize",
                        "paralyze",
                        "deteriorate",
                        "obsolete"
                    ],
                    "answer": "revolutionize",
                    "explain": "전력망과 자기부상열차 기술을 '혁신할(revolutionize)' 것이라는 동사입니다."
                },
                " global energy grids and magnetic levitation ",
                {
                    "id": 2,
                    "options": [
                        "transportation",
                        "hibernation",
                        "evaporation",
                        "fermentation"
                    ],
                    "answer": "transportation",
                    "explain": "'magnetic levitation transportation(자기부상 교통수단)' 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-27",
            "title": "문해력 발달과 초기 독서 환경",
            "template": [
                "Longitudinal educational studies demonstrate that children who are exposed to rich oral vocabulary before entering school acquire reading skills more rapidly. Shared book reading between parents and toddlers stimulates Phonological ",
                {
                    "id": 0,
                    "options": [
                        "awareness",
                        "ignorance",
                        "blindness",
                        "amnesia"
                    ],
                    "answer": "awareness",
                    "explain": "'phonological awareness(음운 인식 능력)'는 아동 교육학 필수 용어입니다."
                },
                " and narrative comprehension. Public libraries and community book-gifting programs play a pivotal role in narrowing the literacy ",
                {
                    "id": 1,
                    "options": [
                        "gap",
                        "bridge",
                        "harmony",
                        "alliance"
                    ],
                    "answer": "gap",
                    "explain": "'narrow the gap(격차를 줄이다)' 대표 연어입니다."
                },
                " across different socioeconomic ",
                {
                    "id": 2,
                    "options": [
                        "backgrounds",
                        "horizons",
                        "ceilings",
                        "altitudes"
                    ],
                    "answer": "backgrounds",
                    "explain": "'socioeconomic backgrounds(사회경제적 배경)' 고정 연어입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-28",
            "title": "담수화 플랜트의 환경적 과2제",
            "template": [
                "Arid coastal nations increasingly rely on seawater desalination to secure municipal drinking water. Reverse osmosis membranes effectively filter out salt, but the process requires substantial electrical ",
                {
                    "id": 0,
                    "options": [
                        "energy",
                        "vacuum",
                        "scarcity",
                        "silence"
                    ],
                    "answer": "energy",
                    "explain": "역삼투압 공정에 막대한 '전력 에너지(electrical energy)'가 소비된다는 문맥입니다."
                },
                " and discharges concentrated brine back into the sea. If not properly diluted, this hypersaline effluent can deplete dissolved oxygen and ",
                {
                    "id": 1,
                    "options": [
                        "devastate",
                        "nourish",
                        "cultivate",
                        "rejuvenate"
                    ],
                    "answer": "devastate",
                    "explain": "해저 생물 군집을 '파괴하다(devastate)'라는 부정적 동사가 필요합니다."
                },
                " benthic marine organisms near the discharge ",
                {
                    "id": 2,
                    "options": [
                        "outfall",
                        "summit",
                        "canopy",
                        "glacier"
                    ],
                    "answer": "outfall",
                    "explain": "배출구('discharge outfall') 인근 해양 생물을 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-29",
            "title": "박물관 유물 반환 논쟁",
            "template": [
                "Major Western museums house thousands of artifacts acquired during the colonial era. In recent years, source nations have intensified diplomatic efforts to secure the ",
                {
                    "id": 0,
                    "options": [
                        "repatriation",
                        "confiscation",
                        "destruction",
                        "concealment"
                    ],
                    "answer": "repatriation",
                    "explain": "문화재의 본국 '반환/송환(repatriation)'을 뜻하는 핵심 학술 어휘입니다."
                },
                " of their cultural heritage. Proponents of restitution argue that historical injustices must be rectified, whereas some curators contend that encyclopedic museums foster universal ",
                {
                    "id": 1,
                    "options": [
                        "appreciation",
                        "contempt",
                        "hatred",
                        "oblivion"
                    ],
                    "answer": "appreciation",
                    "explain": "인류 문명에 대한 보편적 '이해와 감상(appreciation)'을 촉진한다는 주장입니다."
                },
                " of human artistic ",
                {
                    "id": 2,
                    "options": [
                        "achievement",
                        "failure",
                        "negligence",
                        "mediocrity"
                    ],
                    "answer": "achievement",
                    "explain": "'artistic achievement(예술적 성취)' 연어입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-30",
            "title": "화산 폭발과 지구 성층권 냉각 효과",
            "template": [
                "Massive volcanic eruptions can influence global climate patterns for several years. When a volcano ejects millions of tons of sulfur dioxide into the stratosphere, the gas reacts with water vapor to form sulfate ",
                {
                    "id": 0,
                    "options": [
                        "aerosols",
                        "fossils",
                        "glaciers",
                        "minerals"
                    ],
                    "answer": "aerosols",
                    "explain": "'sulfate aerosols(황산염 에어로졸/미세입자)' 지구과학 전문 연어입니다."
                },
                ". These microscopic droplets reflect incoming solar radiation back into space, resulting in a temporary ",
                {
                    "id": 1,
                    "options": [
                        "cooling",
                        "boiling",
                        "melting",
                        "warming"
                    ],
                    "answer": "cooling",
                    "explain": "태양 복사를 반사해 일시적인 지구 '냉각(cooling)' 효과를 낳는다는 인과관계입니다."
                },
                " of average surface temperatures across the ",
                {
                    "id": 2,
                    "options": [
                        "planet",
                        "crater",
                        "chamber",
                        "tunnel"
                    ],
                    "answer": "planet",
                    "explain": "지구('planet') 전체 평균 기온을 낮춘다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-31",
            "title": "중앙은행의 통화 정책과 인플레이션 억제",
            "template": [
                "When consumer price inflation exceeds official targets, central banks typically raise benchmark interest rates to cool down ",
                {
                    "id": 0,
                    "options": [
                        "borrowing",
                        "harvesting",
                        "scattering",
                        "wandering"
                    ],
                    "answer": "borrowing",
                    "explain": "금리를 인상하여 대출 및 차입('borrowing') 수요를 진정시킨다는 거시경제 문맥입니다."
                },
                " and investment. Higher interest rates increase the cost of mortgages and corporate loans, which gradually ",
                {
                    "id": 1,
                    "options": [
                        "curbs",
                        "inflates",
                        "provokes",
                        "multiplies"
                    ],
                    "answer": "curbs",
                    "explain": "'curb aggregate demand(총수요를 억제하다)'는 핵심 학술 연어입니다."
                },
                " aggregate demand and stabilizes purchasing ",
                {
                    "id": 2,
                    "options": [
                        "power",
                        "posture",
                        "pulse",
                        "passion"
                    ],
                    "answer": "power",
                    "explain": "'purchasing power(구매력)'는 경제학 필수 복합명사입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-32",
            "title": "고고학 방사성 탄소 연대 측정법",
            "template": [
                "Radiocarbon dating revolutionized archaeology by providing an objective method for estimating the age of organic ",
                {
                    "id": 0,
                    "options": [
                        "artifacts",
                        "algorithms",
                        "acoustics",
                        "allergies"
                    ],
                    "answer": "artifacts",
                    "explain": "고고학에서 발굴된 유기물 유물('artifacts')의 연대를 측정한다는 문맥입니다."
                },
                ". Living organisms constantly absorb carbon-14 from the atmosphere, but this radioactive isotope begins to ",
                {
                    "id": 1,
                    "options": [
                        "decay",
                        "bloom",
                        "inflate",
                        "prosper"
                    ],
                    "answer": "decay",
                    "explain": "방사성 동위원소가 일정한 속도로 붕괴·감소('decay')한다는 과학 용어입니다."
                },
                " at a predictable rate immediately after ",
                {
                    "id": 2,
                    "options": [
                        "death",
                        "birth",
                        "flight",
                        "speech"
                    ],
                    "answer": "death",
                    "explain": "생명체가 죽은('death') 직후부터 탄소-14 흡수가 멈추고 반감기가 시작됩니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-33",
            "title": "심해 열수구 생태계의 화학합성",
            "template": [
                "Before the discovery of deep-sea hydrothermal vents, biologists assumed that all complex life on Earth depended ultimately on solar ",
                {
                    "id": 0,
                    "options": [
                        "radiation",
                        "legislation",
                        "hesitation",
                        "migration"
                    ],
                    "answer": "radiation",
                    "explain": "태양 복사열/빛('solar radiation')에 모든 생명체가 의존한다고 믿었다는 문맥입니다."
                },
                ". However, thriving communities of giant tube worms survive in total darkness by relying on bacteria that ",
                {
                    "id": 1,
                    "options": [
                        "oxidize",
                        "memorize",
                        "privatize",
                        "apologize"
                    ],
                    "answer": "oxidize",
                    "explain": "황화수소를 산화('oxidize')시켜 화학 에너지를 얻는다는 생화학 동사입니다."
                },
                " hydrogen sulfide emerging from the ocean ",
                {
                    "id": 2,
                    "options": [
                        "floor",
                        "ceiling",
                        "attic",
                        "balcony"
                    ],
                    "answer": "floor",
                    "explain": "'ocean floor(해저/바다 밑바닥)'는 해양학 기본 연어입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-34",
            "title": "도시 녹지 공간과 정신 건강 회복",
            "template": [
                "Epidemiological studies consistently demonstrate that residents living near urban parks experience lower levels of chronic ",
                {
                    "id": 0,
                    "options": [
                        "cortisol",
                        "cholesterol",
                        "charcoal",
                        "methanol"
                    ],
                    "answer": "cortisol",
                    "explain": "만성 스트레스 호르몬인 코르티솔('cortisol') 수치가 낮아진다는 의학 문맥입니다."
                },
                " and psychological distress. Exposure to natural greenery restores directed attention and encourages physical ",
                {
                    "id": 1,
                    "options": [
                        "recreation",
                        "taxation",
                        "inflation",
                        "detention"
                    ],
                    "answer": "recreation",
                    "explain": "'physical recreation(신체적 여가·운동 활동)'을 장려한다는 문맥입니다."
                },
                " among densely populated metropolitan ",
                {
                    "id": 2,
                    "options": [
                        "neighborhoods",
                        "laboratories",
                        "warehouses",
                        "submarines"
                    ],
                    "answer": "neighborhoods",
                    "explain": "인구가 밀집된 대도시 주거 지역('neighborhoods')을 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-35",
            "title": "특허법과 제약 연구개발 인센티브",
            "template": [
                "Developing a novel pharmaceutical compound requires over a decade of clinical trials and billions of dollars in capital ",
                {
                    "id": 0,
                    "options": [
                        "expenditure",
                        "extinction",
                        "excursion",
                        "exhibition"
                    ],
                    "answer": "expenditure",
                    "explain": "'capital expenditure(자본 지출/투자 비용)'는 경영·경제 핵심 연어입니다."
                },
                ". Without temporary patent protection, generic competitors could immediately replicate the chemical ",
                {
                    "id": 1,
                    "options": [
                        "formula",
                        "agenda",
                        "stamina",
                        "dilemma"
                    ],
                    "answer": "formula",
                    "explain": "'chemical formula(화학식/조성법)'를 복제한다는 문맥입니다."
                },
                ", eliminating the financial incentive to fund high-risk medical ",
                {
                    "id": 2,
                    "options": [
                        "innovation",
                        "irrigation",
                        "imitation",
                        "isolation"
                    ],
                    "answer": "innovation",
                    "explain": "고위험 의료 혁신('medical innovation')에 투자할 유인을 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-36",
            "title": "산호초 백화 현상과 공생 조류",
            "template": [
                "Reef-building corals derive their vibrant colors and up to ninety percent of their metabolic energy from microscopic ",
                {
                    "id": 0,
                    "options": [
                        "algae",
                        "fungi",
                        "mammals",
                        "reptiles"
                    ],
                    "answer": "algae",
                    "explain": "산호와 공생하는 미세 조류('microscopic algae')를 뜻합니다."
                },
                " living within their tissues. When marine heatwaves elevate water temperatures, stressed corals ",
                {
                    "id": 1,
                    "options": [
                        "expel",
                        "absorb",
                        "worship",
                        "employ"
                    ],
                    "answer": "expel",
                    "explain": "열 스트레스를 받은 산호가 공생 조류를 체외로 방출('expel')한다는 핵심 동사입니다."
                },
                " these symbionts, leaving the calcified skeleton stark white and vulnerable to ",
                {
                    "id": 2,
                    "options": [
                        "starvation",
                        "celebration",
                        "promotion",
                        "navigation"
                    ],
                    "answer": "starvation",
                    "explain": "영양 공급원을 잃어 굶주림/아사('starvation')에 취약해진다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-37",
            "title": "행동경제학의 기본값 효과(Default Effect)",
            "template": [
                "When confronted with complex retirement savings plans, many employees procrastinate and fail to make an active ",
                {
                    "id": 0,
                    "options": [
                        "enrollment",
                        "enforcement",
                        "entertainment",
                        "embankment"
                    ],
                    "answer": "enrollment",
                    "explain": "연금 가입('enrollment') 결정을 미룬다는 문맥입니다."
                },
                " decision. Behavioral economists have shown that switching pension participation from opt-in to automatic ",
                {
                    "id": 1,
                    "options": [
                        "default",
                        "assault",
                        "vault",
                        "halt"
                    ],
                    "answer": "default",
                    "explain": "'automatic default(자동 기본값 설정)'는 행동경제학 핵심 용어입니다."
                },
                " dramatically boosts long-term household ",
                {
                    "id": 2,
                    "options": [
                        "wealth",
                        "stealth",
                        "wrath",
                        "myth"
                    ],
                    "answer": "wealth",
                    "explain": "장기적인 가계 자산('household wealth') 축적을 높여줍니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-38",
            "title": "인쇄술 보급과 과학 혁명의 촉진",
            "template": [
                "The invention of the movable-type printing press in the fifteenth century lowered the cost of books and accelerated scientific ",
                {
                    "id": 0,
                    "options": [
                        "discourse",
                        "divorce",
                        "drought",
                        "disguise"
                    ],
                    "answer": "discourse",
                    "explain": "'scientific discourse(과학적 담론/학술 교류)'를 가속화했다는 문맥입니다."
                },
                ". Astronomers and anatomists could publish precise diagrams and empirical tables that scholars across Europe could independently ",
                {
                    "id": 1,
                    "options": [
                        "verify",
                        "terrify",
                        "pacify",
                        "liquefy"
                    ],
                    "answer": "verify",
                    "explain": "유럽 전역의 학자들이 실험 결과를 독립적으로 검증('verify')할 수 있었다는 뜻입니다."
                },
                " and refine in subsequent ",
                {
                    "id": 2,
                    "options": [
                        "editions",
                        "emissions",
                        "elections",
                        "eruptions"
                    ],
                    "answer": "editions",
                    "explain": "후속 개정판('subsequent editions')에서 오류를 수정·보완했다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-39",
            "title": "수면 부족과 전두엽 실행 기능 저하",
            "template": [
                "Chronic sleep restriction severely impairs the prefrontal cortex, the brain region responsible for executive ",
                {
                    "id": 0,
                    "options": [
                        "reasoning",
                        "seasoning",
                        "gardening",
                        "bargaining"
                    ],
                    "answer": "reasoning",
                    "explain": "'executive reasoning(고차원적 추론 및 실행 기능)'을 담당하는 뇌 영역입니다."
                },
                " and impulse control. Individuals deprived of adequate rest exhibit slower reaction times and heightened emotional ",
                {
                    "id": 1,
                    "options": [
                        "volatility",
                        "hospitality",
                        "fertility",
                        "mobility"
                    ],
                    "answer": "volatility",
                    "explain": "'emotional volatility(감정 기복/불안정성)'가 높아진다는 심리학 연어입니다."
                },
                " when facing workplace ",
                {
                    "id": 2,
                    "options": [
                        "deadlines",
                        "headlines",
                        "coastlines",
                        "pipelines"
                    ],
                    "answer": "deadlines",
                    "explain": "직장 내 업무 마감 시한('workplace deadlines') 압박을 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-40",
            "title": "국제 무역과 비교우위 이론",
            "template": [
                "According to the theory of comparative advantage, countries prosper when they specialize in producing goods with the lowest ",
                {
                    "id": 0,
                    "options": [
                        "opportunity",
                        "immunity",
                        "ambiguity",
                        "antiquity"
                    ],
                    "answer": "opportunity",
                    "explain": "'opportunity cost(기회비용)'는 경제학에서 가장 자주 출제되는 빈칸 연어입니다."
                },
                " cost. Rather than attempting to achieve complete self-sufficiency through protective ",
                {
                    "id": 1,
                    "options": [
                        "tariffs",
                        "sheriffs",
                        "cliffs",
                        "plaintiffs"
                    ],
                    "answer": "tariffs",
                    "explain": "'protective tariffs(보호 관세)'는 무역 정책 핵심 어휘입니다."
                },
                ", open economies benefit from mutual exchange and global supply ",
                {
                    "id": 2,
                    "options": [
                        "integration",
                        "indignation",
                        "incineration",
                        "intoxication"
                    ],
                    "answer": "integration",
                    "explain": "글로벌 공급망 통합('supply integration')을 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-41",
            "title": "빙하 코어 시추와 고기후학 복원",
            "template": [
                "Paleoclimatologists drill deep into Antarctic ice sheets to extract cylindrical cores that preserve a continuous ",
                {
                    "id": 0,
                    "options": [
                        "chronicle",
                        "spectacle",
                        "obstacle",
                        "vehicle"
                    ],
                    "answer": "chronicle",
                    "explain": "수십만 년의 기후 변화를 담은 연속적인 기록/연대기('chronicle')입니다."
                },
                " of Earth's ancient atmosphere. Microscopic air bubbles trapped within successive snow layers reveal historical fluctuations in greenhouse gas ",
                {
                    "id": 1,
                    "options": [
                        "concentrations",
                        "congratulations",
                        "congregations",
                        "constellations"
                    ],
                    "answer": "concentrations",
                    "explain": "'greenhouse gas concentrations(온실가스 농도)'는 환경과학 필수 연어입니다."
                },
                " over eight hundred millennia of glacial ",
                {
                    "id": 2,
                    "options": [
                        "cycles",
                        "cymbals",
                        "cylinders",
                        "cynics"
                    ],
                    "answer": "cycles",
                    "explain": "빙하기와 간빙기가 반복되는 빙하 주기('glacial cycles')입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-42",
            "title": "인공지능 의료 영상 진단의 보조적 역할",
            "template": [
                "Deep learning convolutional neural networks can detect subtle malignant tumors on radiological scans with remarkable ",
                {
                    "id": 0,
                    "options": [
                        "accuracy",
                        "aristocracy",
                        "bankruptcy",
                        "diplomacy"
                    ],
                    "answer": "accuracy",
                    "explain": "높은 진단 정확도('remarkable accuracy')를 뜻합니다."
                },
                ". Nevertheless, medical ethicists emphasize that automated algorithms should augment rather than ",
                {
                    "id": 1,
                    "options": [
                        "supplant",
                        "implant",
                        "enchant",
                        "transplant"
                    ],
                    "answer": "supplant",
                    "explain": "'augment rather than supplant(대체하기보다 보조·보완하다)'는 고급 학술 대조 표현입니다."
                },
                " the holistic clinical judgment of experienced ",
                {
                    "id": 2,
                    "options": [
                        "physicians",
                        "musicians",
                        "politicians",
                        "magicians"
                    ],
                    "answer": "physicians",
                    "explain": "숙련된 의사/임상의('experienced physicians')의 판단을 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-43",
            "title": "생물다양성 손실과 인수공통감염병 확산",
            "template": [
                "Deforestation and wildlife habitat fragmentation force wild mammal species into closer contact with human agricultural ",
                {
                    "id": 0,
                    "options": [
                        "settlements",
                        "sacraments",
                        "sediments",
                        "supplements"
                    ],
                    "answer": "settlements",
                    "explain": "인간의 농업 거주지/정착지('agricultural settlements')와 접촉하게 만든다는 문맥입니다."
                },
                ". Ecologists warn that diminishing biodiversity removes natural buffer species and accelerates the spillover of zoonotic ",
                {
                    "id": 1,
                    "options": [
                        "pathogens",
                        "passengers",
                        "patriots",
                        "pendulums"
                    ],
                    "answer": "pathogens",
                    "explain": "'zoonotic pathogens(인수공통 병원체)'는 보건·생태학 핵심 어휘입니다."
                },
                " into domestic livestock and urban ",
                {
                    "id": 2,
                    "options": [
                        "populations",
                        "plantations",
                        "proportions",
                        "publications"
                    ],
                    "answer": "populations",
                    "explain": "도시 인구 집단('urban populations')으로의 전파를 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-44",
            "title": "고전 조건화와 파블로프의 행동주의",
            "template": [
                "Ivan Pavlov's famous experiments with canine salivation laid the empirical foundation for behavioral ",
                {
                    "id": 0,
                    "options": [
                        "conditioning",
                        "commissioning",
                        "cushioning",
                        "partitioning"
                    ],
                    "answer": "conditioning",
                    "explain": "'behavioral/classical conditioning(조건화)' 심리학 전문 용어입니다."
                },
                ". By repeatedly pairing the sound of a metronome with food presentation, a previously ",
                {
                    "id": 1,
                    "options": [
                        "neutral",
                        "hostile",
                        "feudal",
                        "mortal"
                    ],
                    "answer": "neutral",
                    "explain": "'neutral stimulus(중립 자극)'는 심리학 교과서 필수 연어입니다."
                },
                " stimulus eventually elicited an automatic physiological ",
                {
                    "id": 2,
                    "options": [
                        "reflex",
                        "complex",
                        "inflex",
                        "duplex"
                    ],
                    "answer": "reflex",
                    "explain": "자동적인 생리적 반사 반응('physiological reflex')을 유발했다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-45",
            "title": "초전도체 기술과 전력 송전 손실 제거",
            "template": [
                "Conventional copper power lines lose up to eight percent of generated electricity as waste heat due to electrical ",
                {
                    "id": 0,
                    "options": [
                        "resistance",
                        "reluctance",
                        "renaissance",
                        "resemblance"
                    ],
                    "answer": "resistance",
                    "explain": "'electrical resistance(전기 저항)' 물리학 기본 연어입니다."
                },
                ". Discovering a material capable of superconductivity at ambient room temperature would enable lossless power ",
                {
                    "id": 1,
                    "options": [
                        "transmission",
                        "transgression",
                        "transcription",
                        "transfusion"
                    ],
                    "answer": "transmission",
                    "explain": "'power transmission(전력 송전)' 공학 핵심 복합명사입니다."
                },
                " across continental renewable energy ",
                {
                    "id": 2,
                    "options": [
                        "grids",
                        "guilds",
                        "grips",
                        "grinds"
                    ],
                    "answer": "grids",
                    "explain": "'energy grids(전력망)'를 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-46",
            "title": "언어 습득의 결정적 시기 가설",
            "template": [
                "Linguist Eric Lenneberg proposed that human capacity for effortless native language acquisition is bound by a biological ",
                {
                    "id": 0,
                    "options": [
                        "critical",
                        "cynical",
                        "clerical",
                        "comical"
                    ],
                    "answer": "critical",
                    "explain": "'critical period hypothesis(결정적 시기 가설)' 언어학 대표 용어입니다."
                },
                " period. Children immersed in a second language before puberty typically attain native phonological ",
                {
                    "id": 1,
                    "options": [
                        "fluency",
                        "frequency",
                        "fragility",
                        "fragrancy"
                    ],
                    "answer": "fluency",
                    "explain": "원어민 수준의 음운적 유창성('phonological fluency')을 성취한다는 문맥입니다."
                },
                ", whereas adult learners rarely eliminate their native ",
                {
                    "id": 2,
                    "options": [
                        "accent",
                        "ascent",
                        "assent",
                        "advent"
                    ],
                    "answer": "accent",
                    "explain": "'native accent(모국어 억양)'를 완전히 없애기 어렵다는 뜻입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-47",
            "title": "해양 산성화와 패류 양식업 피해",
            "template": [
                "As global oceans absorb excess atmospheric carbon dioxide, the resulting decline in carbonate ion availability threatens shellfish ",
                {
                    "id": 0,
                    "options": [
                        "aquaculture",
                        "architecture",
                        "acupuncture",
                        "arboriculture"
                    ],
                    "answer": "aquaculture",
                    "explain": "패류 수산 양식업('shellfish aquaculture')을 위협한다는 문맥입니다."
                },
                ". Juvenile oyster larvae struggle to calcify their protective shells in acidic coastal waters, causing high ",
                {
                    "id": 1,
                    "options": [
                        "mortality",
                        "morality",
                        "modality",
                        "mobility"
                    ],
                    "answer": "mortality",
                    "explain": "어린 굴 유생의 높은 폐사율('high mortality')을 초래합니다."
                },
                " in commercial Pacific Northwest ",
                {
                    "id": 2,
                    "options": [
                        "hatcheries",
                        "haberdasheries",
                        "hierarchies",
                        "hypocrisies"
                    ],
                    "answer": "hatcheries",
                    "explain": "상업용 수산 종묘장/부화장('hatcheries')을 뜻합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-48",
            "title": "기업 지배구조와 이사회 독립성",
            "template": [
                "Sound corporate governance requires a board of directors composed predominantly of independent non-executive ",
                {
                    "id": 0,
                    "options": [
                        "members",
                        "monarchs",
                        "merchants",
                        "migrants"
                    ],
                    "answer": "members",
                    "explain": "사외 이사('non-executive members/directors')로 구성된 이사회를 뜻합니다."
                },
                ". When chief executives simultaneously chair the board, conflicts of interest can weaken financial ",
                {
                    "id": 1,
                    "options": [
                        "oversight",
                        "overnight",
                        "overweight",
                        "oversight"
                    ],
                    "answer": "oversight",
                    "explain": "'financial oversight(재무 감독/감시)'는 경영학 필수 어휘입니다."
                },
                " and expose shareholders to accounting ",
                {
                    "id": 2,
                    "options": [
                        "fraud",
                        "feud",
                        "fable",
                        "fleet"
                    ],
                    "answer": "fraud",
                    "explain": "'accounting fraud(회계 부정)'로부터 주주를 보호해야 한다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-49",
            "title": "고대 메소포타미아 관개 농업과 염류화",
            "template": [
                "Sumerian civilization flourished between the Tigris and Euphrates rivers by constructing an intricate network of irrigation ",
                {
                    "id": 0,
                    "options": [
                        "canals",
                        "canoes",
                        "canopies",
                        "cannons"
                    ],
                    "answer": "canals",
                    "explain": "'irrigation canals(관개 수로)' 역사·농업 핵심 연어입니다."
                },
                ". Over centuries, however, intensive evaporation left dissolved mineral salts accumulating in the upper ",
                {
                    "id": 1,
                    "options": [
                        "topsoil",
                        "turmoil",
                        "tinfoil",
                        "trefoil"
                    ],
                    "answer": "topsoil",
                    "explain": "상부 표토층('topsoil')에 염분이 축적되었다는 문맥입니다."
                },
                ", progressively reducing wheat yields and hastening geopolitical ",
                {
                    "id": 2,
                    "options": [
                        "decline",
                        "delight",
                        "decree",
                        "default"
                    ],
                    "answer": "decline",
                    "explain": "문명의 지정학적 쇠퇴('geopolitical decline')를 앞당겼다는 인과관계입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-50",
            "title": "인지 부조화 이론과 태도 변화",
            "template": [
                "Leon Festinger's theory of cognitive dissonance explains the psychological discomfort people experience when holding two ",
                {
                    "id": 0,
                    "options": [
                        "contradictory",
                        "complimentary",
                        "compulsory",
                        "conciliatory"
                    ],
                    "answer": "contradictory",
                    "explain": "서로 모순되는('contradictory') 신념이나 행동을 동시에 가질 때를 뜻합니다."
                },
                " beliefs or behaviors. To resolve this internal tension, individuals frequently ",
                {
                    "id": 1,
                    "options": [
                        "rationalize",
                        "pulverize",
                        "vaporize",
                        "crystallize"
                    ],
                    "answer": "rationalize",
                    "explain": "자신의 행동을 합리화('rationalize')하여 내적 긴장을 해소한다는 심리학 동사입니다."
                },
                " their choices or selectively ignore disconfirming ",
                {
                    "id": 2,
                    "options": [
                        "evidence",
                        "eloquence",
                        "eminence",
                        "indulgence"
                    ],
                    "answer": "evidence",
                    "explain": "반대되는 증거('disconfirming evidence')를 외면한다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-51",
            "title": "공급망 회복탄력성과 적시생산(JIT)의 한계",
            "template": [
                "For decades, global automakers minimized warehouse inventory costs by adopting just-in-time manufacturing ",
                {
                    "id": 0,
                    "options": [
                        "schedules",
                        "sculptures",
                        "scriptures",
                        "seizures"
                    ],
                    "answer": "schedules",
                    "explain": "적시생산 일정/시스템('manufacturing schedules')을 뜻합니다."
                },
                ". However, pandemic port closures and semiconductor shortages exposed the extreme ",
                {
                    "id": 1,
                    "options": [
                        "fragility",
                        "fertility",
                        "futility",
                        "facility"
                    ],
                    "answer": "fragility",
                    "explain": "초효율 글로벌 공급망의 극심한 취약성('fragility')을 드러냈다는 문맥입니다."
                },
                " of lean supply chains, prompting firms to stockpile critical ",
                {
                    "id": 2,
                    "options": [
                        "components",
                        "compliments",
                        "combatants",
                        "consonants"
                    ],
                    "answer": "components",
                    "explain": "핵심 부품('critical components')을 비축하게 만들었다는 뜻입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-52",
            "title": "습지 생태계의 자연 홍수 조절 기능",
            "template": [
                "Coastal marshes and inland peatlands act as giant natural sponges that absorb torrential monsoon ",
                {
                    "id": 0,
                    "options": [
                        "runoff",
                        "takeoff",
                        "playoff",
                        "standoff"
                    ],
                    "answer": "runoff",
                    "explain": "집중호우 유출수('monsoon runoff')를 흡수한다는 수문학 용어입니다."
                },
                " and filter agricultural pollutants. Draining wetlands for commercial real estate development removes this protective ",
                {
                    "id": 1,
                    "options": [
                        "buffer",
                        "butler",
                        "buzzer",
                        "bunker"
                    ],
                    "answer": "buffer",
                    "explain": "자연적인 완충 지대('protective buffer')를 제거한다는 문맥입니다."
                },
                " and intensifies downstream urban ",
                {
                    "id": 2,
                    "options": [
                        "flooding",
                        "flowering",
                        "flattering",
                        "fluttering"
                    ],
                    "answer": "flooding",
                    "explain": "하류 도시의 침수/홍수('urban flooding') 피해를 키운다는 뜻입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-53",
            "title": "과학 철학의 반증 가능성(Falsifiability) 원칙",
            "template": [
                "Philosopher Karl Popper argued that a hypothesis cannot be considered genuinely scientific unless it is empirically ",
                {
                    "id": 0,
                    "options": [
                        "falsifiable",
                        "fashionable",
                        "formidable",
                        "flammable"
                    ],
                    "answer": "falsifiable",
                    "explain": "경험적으로 반증 가능한('empirically falsifiable') 상태여야 과학적 가설이라는 뜻입니다."
                },
                ". No number of confirming observations can ever prove a universal theory with absolute ",
                {
                    "id": 1,
                    "options": [
                        "certainty",
                        "charity",
                        "celerity",
                        "captivity"
                    ],
                    "answer": "certainty",
                    "explain": "'absolute certainty(절대적 확실성)'로 증명할 수는 없다는 문맥입니다."
                },
                ", whereas a single reproducible counterexample is sufficient to ",
                {
                    "id": 2,
                    "options": [
                        "refute",
                        "recruit",
                        "repute",
                        "salute"
                    ],
                    "answer": "refute",
                    "explain": "단 하나의 반례만으로도 이론을 논박/반박('refute')할 수 있다는 학술 동사입니다."
                },
                " it."
            ]
        },
        {
            "id": "FIB-54",
            "title": "바이오미미크리(생체모방 공학)와 고속열차 설계",
            "template": [
                "Biomimicry draws inspiration from evolutionary adaptations in nature to solve complex human engineering ",
                {
                    "id": 0,
                    "options": [
                        "challenges",
                        "ceremonies",
                        "chronicles",
                        "catastrophes"
                    ],
                    "answer": "challenges",
                    "explain": "'engineering challenges(공학적 난제)'를 해결한다는 연어입니다."
                },
                ". Japanese engineers eliminated the booming sonic pressure waves of bullet trains emerging from tunnels by modeling the nose cone after the streamlined ",
                {
                    "id": 1,
                    "options": [
                        "beak",
                        "bark",
                        "brick",
                        "brook"
                    ],
                    "answer": "beak",
                    "explain": "물총새의 유선형 부리('streamlined beak')를 모방했다는 유명 사례입니다."
                },
                " of a diving kingfisher, simultaneously reducing electricity ",
                {
                    "id": 2,
                    "options": [
                        "consumption",
                        "assumption",
                        "presumption",
                        "resumption"
                    ],
                    "answer": "consumption",
                    "explain": "전력 소비량('electricity consumption')을 줄였다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-55",
            "title": "백신 집단 면역(Herd Immunity)의 역학적 원리",
            "template": [
                "Vaccination campaigns protect not only immunized individuals but also vulnerable community members who cannot receive vaccines due to medical ",
                {
                    "id": 0,
                    "options": [
                        "exemptions",
                        "excavations",
                        "exhibitions",
                        "exertions"
                    ],
                    "answer": "exemptions",
                    "explain": "면역 결핍 등 의학적 예외 사유('medical exemptions')를 뜻합니다."
                },
                ". When the proportion of immune citizens surpasses a pathogen-specific ",
                {
                    "id": 1,
                    "options": [
                        "threshold",
                        "household",
                        "scaffold",
                        "manifold"
                    ],
                    "answer": "threshold",
                    "explain": "특정 임계치('threshold')를 넘어설 때 집단 면역이 형성된다는 역학 용어입니다."
                },
                ", chains of infectious transmission collapse and outbreaks ",
                {
                    "id": 2,
                    "options": [
                        "subside",
                        "subsidize",
                        "preside",
                        "collide"
                    ],
                    "answer": "subside",
                    "explain": "감염병 유행이 수그러들다/진정되다('subside')라는 자동사입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-56",
            "title": "도심 젠트리피케이션과 원주민 이주 현상",
            "template": [
                "Urban revitalization projects that convert derelict industrial warehouses into luxury loft apartments often trigger rapid ",
                {
                    "id": 0,
                    "options": [
                        "gentrification",
                        "germination",
                        "glaciation",
                        "gratification"
                    ],
                    "answer": "gentrification",
                    "explain": "도심 고급화로 인한 젠트리피케이션('gentrification') 사회학 용어입니다."
                },
                ". While neighborhood property values and municipal tax revenues surge, soaring commercial and residential ",
                {
                    "id": 1,
                    "options": [
                        "rents",
                        "vents",
                        "tents",
                        "cents"
                    ],
                    "answer": "rents",
                    "explain": "급등하는 임대료('soaring rents')를 뜻합니다."
                },
                " frequently displace long-standing working-class families and independent ",
                {
                    "id": 2,
                    "options": [
                        "artisans",
                        "partisans",
                        "pelicans",
                        "orphans"
                    ],
                    "answer": "artisans",
                    "explain": "지역의 영세 장인·소상공인('independent artisans')을 밀어낸다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-57",
            "title": "양자 얽힘과 초고속 연산 패러다임",
            "template": [
                "Whereas classical computer bits must exist in a state of either zero or one, quantum bits can exist in a coherent ",
                {
                    "id": 0,
                    "options": [
                        "superposition",
                        "superstition",
                        "supposition",
                        "subdivision"
                    ],
                    "answer": "superposition",
                    "explain": "'quantum superposition(양자 중첩 상태)' 물리학 핵심 용어입니다."
                },
                " of both states simultaneously. This property enables quantum processors to evaluate vast combinatorial ",
                {
                    "id": 1,
                    "options": [
                        "permutations",
                        "plantations",
                        "proclamations",
                        "prosecutions"
                    ],
                    "answer": "permutations",
                    "explain": "방대한 조합의 순열/경우의 수('combinatorial permutations')를 계산한다는 뜻입니다."
                },
                " in molecular chemistry that would take classical supercomputers millennia to ",
                {
                    "id": 2,
                    "options": [
                        "calculate",
                        "circulate",
                        "capitulate",
                        "congratulate"
                    ],
                    "answer": "calculate",
                    "explain": "계산/연산하다('calculate')가 문맥상 적절합니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-58",
            "title": "인상주의 회화와 튜브 물감의 발명",
            "template": [
                "Nineteenth-century French Impressionist painters abandoned dark studio interiors to capture fleeting outdoor sunlight and atmospheric ",
                {
                    "id": 0,
                    "options": [
                        "reflections",
                        "restrictions",
                        "resolutions",
                        "rebellions"
                    ],
                    "answer": "reflections",
                    "explain": "야외 햇빛과 대기의 반사광('atmospheric reflections')을 포착했다는 미술사 문맥입니다."
                },
                ". This artistic transition was directly enabled by the industrial invention of collapsible tin paint ",
                {
                    "id": 1,
                    "options": [
                        "tubes",
                        "cubes",
                        "robes",
                        "globes"
                    ],
                    "answer": "tubes",
                    "explain": "휴대용 주석 물감 튜브('paint tubes')의 발명을 뜻합니다."
                },
                ", which allowed Monet and Renoir to transport premixed oil pigments into the ",
                {
                    "id": 2,
                    "options": [
                        "countryside",
                        "courtroom",
                        "cathedral",
                        "laboratory"
                    ],
                    "answer": "countryside",
                    "explain": "야외 시골 풍경 속('into the countryside')으로 물감을 들고 나갔다는 뜻입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-59",
            "title": "수자원 분쟁과 국제 하천 유역 조약",
            "template": [
                "Transboundary rivers such as the Nile, Mekong, and Colorado supply essential freshwater to multiple sovereign nations along their ",
                {
                    "id": 0,
                    "options": [
                        "watersheds",
                        "waterfalls",
                        "watermarks",
                        "waterworks"
                    ],
                    "answer": "watersheds",
                    "explain": "하천 유역('watersheds')을 공유하는 여러 주권 국가를 뜻합니다."
                },
                ". When upstream countries construct massive hydroelectric dams, downstream agricultural communities often suffer reduced water ",
                {
                    "id": 1,
                    "options": [
                        "allocation",
                        "alliteration",
                        "allegation",
                        "alienation"
                    ],
                    "answer": "allocation",
                    "explain": "하류 지역의 수자원 배분량('water allocation') 감소를 뜻합니다."
                },
                " unless binding multilateral treaties govern seasonal reservoir ",
                {
                    "id": 2,
                    "options": [
                        "releases",
                        "relapses",
                        "reliances",
                        "remorses"
                    ],
                    "answer": "releases",
                    "explain": "계절별 댐 방류량('reservoir releases')을 규율해야 한다는 문맥입니다."
                },
                "."
            ]
        },
        {
            "id": "FIB-60",
            "title": "학술 출판의 동료 심사(Peer Review) 한계와 개혁",
            "template": [
                "Anonymous peer review serves as the primary quality control filter for validating empirical methodology in academic ",
                {
                    "id": 0,
                    "options": [
                        "publishing",
                        "polishing",
                        "punishing",
                        "purchasing"
                    ],
                    "answer": "publishing",
                    "explain": "'academic publishing(학술 출판)' 분야의 핵심 검증 절차입니다."
                },
                ". Critics note, however, that journals disproportionately favor novel positive findings while rejecting ",
                {
                    "id": 1,
                    "options": [
                        "replication",
                        "recreation",
                        "reputation",
                        "resignation"
                    ],
                    "answer": "replication",
                    "explain": "기존 연구의 재현 검증 연구('replication studies')를 기각하는 출판 편향을 뜻합니다."
                },
                " studies, a publication bias that distorts the cumulative scientific ",
                {
                    "id": 2,
                    "options": [
                        "literature",
                        "legislature",
                        "ligature",
                        "miniature"
                    ],
                    "answer": "literature",
                    "explain": "'scientific literature(과학 문헌/학계 축적 연구)'를 왜곡한다는 연어입니다."
                },
                "."
            ]
        }
    ],
    "rop": [
        {
            "id": "ROP-01",
            "title": "Sustainable Architecture Movement",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "However, traditional construction methods relied heavily on carbon-intensive concrete and non-recyclable insulation."
                },
                {
                    "label": "B",
                    "text": "Modern architects are increasingly embracing sustainable design principles to minimize the ecological footprint of buildings."
                },
                {
                    "label": "C",
                    "text": "To overcome this legacy, contemporary builders now prioritize timber engineering and solar-integrated facades."
                },
                {
                    "label": "D",
                    "text": "These green innovations not only reduce operational emissions but also create healthier indoor environments."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "C",
                "D"
            ],
            "explanation": "첫 문장(B)은 화두를 제시하는 독립적 주제문입니다. (A)의 'However'가 전통 건축의 문제점을 지적하며 이어지고, (C)의 'To overcome this legacy'가 해결책을 제시하며, 마지막 (D)의 'These green innovations'가 결론적 혜택을 정리합니다."
        },
        {
            "id": "ROP-02",
            "title": "The Invention of Paper and Printing",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Consequently, the distribution of religious and philosophical literature expanded across continental Europe."
                },
                {
                    "label": "B",
                    "text": "Before the fifteenth century, books were laboriously hand-copied by scribes in monastic scriptoriums."
                },
                {
                    "label": "C",
                    "text": "This tedious manual process made manuscripts extremely scarce and prohibitively expensive for common citizens."
                },
                {
                    "label": "D",
                    "text": "Johannes Gutenberg disrupted this paradigm by introducing movable metal type and oil-based printing ink."
                }
            ],
            "correctOrder": [
                "B",
                "C",
                "D",
                "A"
            ],
            "explanation": "(B)가 15세기 이전 수필 복사의 역사적 배경을 제시합니다. (C)의 'This tedious manual process'가 (B)를 받아 비용 문제를 지적하고, (D)가 구텐베르크의 혁신적 해결책을 제시하며, (A)의 'Consequently'가 도서 보급 확산의 결과로 이어집니다."
        },
        {
            "id": "ROP-03",
            "title": "Renewable Energy and Grid Storage",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Utility operators are therefore deploying grid-scale battery systems to store surplus power generated during sunny afternoons."
                },
                {
                    "label": "B",
                    "text": "Solar photovoltaic panels and wind turbines have seen unprecedented price reductions over the past decade."
                },
                {
                    "label": "C",
                    "text": "This stored electricity is subsequently fed back into the regional grid when residential demand surges after sunset."
                },
                {
                    "label": "D",
                    "text": "Despite this cost advantage, renewable generation remains inherently dependent on shifting weather conditions."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "(B)가 태양광·풍력 가격 하락을 소개하는 독립문입니다. (D)의 'Despite this cost advantage'가 날씨 의존성이라는 한계를 제시하고, (A)의 'therefore'가 배터리 저장 대책을 설명하며, (C)의 'This stored electricity'가 방전 활용으로 마무리됩니다."
        },
        {
            "id": "ROP-04",
            "title": "Antarctic Ice Core Analysis",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Trapped within these ancient ice layers are tiny atmospheric air bubbles preserved from prehistoric eras."
                },
                {
                    "label": "B",
                    "text": "Glaciologists drill deep into the polar ice sheet to extract cylindrical ice cores spanning hundreds of thousands of years."
                },
                {
                    "label": "C",
                    "text": "Such historical climate records provide essential baseline data for calibrating predictive global warming models."
                },
                {
                    "label": "D",
                    "text": "By analyzing the isotopic composition of these gases, researchers can reconstruct past temperatures and greenhouse gas concentrations."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "D",
                "C"
            ],
            "explanation": "정답 순서는 [B -> A -> D -> C] 입니다. (B)가 전체 주제를 여는 독립 도입문 역할을 하며, (A)가 앞 문장의 핵심 개념을 구체화하고, (D)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (C)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-05",
            "title": "Behavioral Loss Aversion",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Specifically, individuals feel the emotional pain of losing one hundred dollars roughly twice as intensely as the joy of gaining the same amount."
                },
                {
                    "label": "B",
                    "text": "This cognitive bias, known as loss aversion, frequently leads traders to hold losing positions far too long."
                },
                {
                    "label": "C",
                    "text": "Standard neoclassical economics presumes that investors evaluate financial gains and losses symmetrically."
                },
                {
                    "label": "D",
                    "text": "Empirical studies in behavioral finance, however, reveal a pronounced psychological asymmetry."
                }
            ],
            "correctOrder": [
                "C",
                "D",
                "A",
                "B"
            ],
            "explanation": "정답 순서는 [C -> D -> A -> B] 입니다. (C)가 전체 주제를 여는 독립 도입문 역할을 하며, (D)가 앞 문장의 핵심 개념을 구체화하고, (A)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (B)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-06",
            "title": "Deep Sea Hydrothermal Vents",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Surrounding these pitch-black hydrothermal vents were dense communities of giant tube worms and blind shrimp."
                },
                {
                    "label": "B",
                    "text": "Because sunlight cannot penetrate miles beneath the ocean surface, these creatures cannot rely on photosynthesis."
                },
                {
                    "label": "C",
                    "text": "Instead, specialized chemotrophic bacteria oxidize toxic hydrogen sulfide to form the base of this unique food chain."
                },
                {
                    "label": "D",
                    "text": "In 1977, oceanographers exploring the Galápagos Rift discovered superheated mineral geysers on the ocean floor."
                }
            ],
            "correctOrder": [
                "D",
                "A",
                "B",
                "C"
            ],
            "explanation": "정답 순서는 [D -> A -> B -> C] 입니다. (D)가 전체 주제를 여는 독립 도입문 역할을 하며, (A)가 앞 문장의 핵심 개념을 구체화하고, (B)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (C)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-07",
            "title": "Urbanization and Heat Dissipation",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "This phenomenon, commonly known as the urban heat island effect, elevates nighttime temperatures."
                },
                {
                    "label": "B",
                    "text": "City governments are combating this issue by mandating green vegetative roofs and planting extensive tree canopies."
                },
                {
                    "label": "C",
                    "text": "Metropolitan centers absorb and retain significantly more solar radiation than adjacent rural landscapes."
                },
                {
                    "label": "D",
                    "text": "Dense concentrations of asphalt paving and concrete skyscrapers are the primary culprits behind this thermal retention."
                }
            ],
            "correctOrder": [
                "C",
                "A",
                "D",
                "B"
            ],
            "explanation": "정답 순서는 [C -> A -> D -> B] 입니다. (C)가 전체 주제를 여는 독립 도입문 역할을 하며, (A)가 앞 문장의 핵심 개념을 구체화하고, (D)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (B)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-08",
            "title": "The Linguistic Evolution of English",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Over the subsequent three centuries, these two divergent tongues gradually fused together."
                },
                {
                    "label": "B",
                    "text": "Following the Norman Conquest of 1066, French became the language of the ruling aristocracy in England."
                },
                {
                    "label": "C",
                    "text": "This linguistic synthesis produced Middle English, creating the vast dual-vocabulary lexicon seen in modern English."
                },
                {
                    "label": "D",
                    "text": "Meanwhile, the common peasantry continued speaking Old English in their daily domestic lives."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "정답 순서는 [B -> D -> A -> C] 입니다. (B)가 전체 주제를 여는 독립 도입문 역할을 하며, (D)가 앞 문장의 핵심 개념을 구체화하고, (A)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (C)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-09",
            "title": "Neuroplasticity and Skill Acquisition",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "This dynamic capability, termed neuroplasticity, enables stroke survivors to relearn speech and motor functions."
                },
                {
                    "label": "B",
                    "text": "Modern neuroimaging, however, has thoroughly overturned this static dogma."
                },
                {
                    "label": "C",
                    "text": "Researchers now know that intensive physical or intellectual training physically reorganizes synaptic pathways."
                },
                {
                    "label": "D",
                    "text": "For decades, medical textbooks asserted that the adult human brain was rigid and incapable of generating new circuitry."
                }
            ],
            "correctOrder": [
                "D",
                "B",
                "C",
                "A"
            ],
            "explanation": "정답 순서는 [D -> B -> C -> A] 입니다. (D)가 전체 주제를 여는 독립 도입문 역할을 하며, (B)가 앞 문장의 핵심 개념을 구체화하고, (C)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (A)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-10",
            "title": "Agricultural Mechanization in the 20th Century",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "The introduction of gasoline-powered combine harvesters fundamentally altered this rural dynamic."
                },
                {
                    "label": "B",
                    "text": "Throughout the nineteenth century, agricultural harvesting required massive teams of seasonal laborers and draft animals."
                },
                {
                    "label": "C",
                    "text": "As farm labor requirements plummeted, millions of displaced rural workers migrated into burgeoning industrial cities."
                },
                {
                    "label": "D",
                    "text": "A single machine could perform the work of dozens of farmhands in a fraction of the time."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "D",
                "C"
            ],
            "explanation": "정답 순서는 [B -> A -> D -> C] 입니다. (B)가 전체 주제를 여는 독립 도입문 역할을 하며, (A)가 앞 문장의 핵심 개념을 구체화하고, (D)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (C)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-11",
            "title": "Coral Reef Bleaching Mechanisms",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "When ocean temperatures rise even two degrees above seasonal thresholds, the stressed coral expels its algae."
                },
                {
                    "label": "B",
                    "text": "Stripped of its colorful symbionts, the coral turns stark white and faces eventual starvation unless waters cool."
                },
                {
                    "label": "C",
                    "text": "Healthy reef-building corals maintain an obligate symbiotic relationship with microscopic algae called zooxanthellae."
                },
                {
                    "label": "D",
                    "text": "These photosynthetic algae provide the coral host with vital glucose while receiving inorganic nutrients in return."
                }
            ],
            "correctOrder": [
                "C",
                "D",
                "A",
                "B"
            ],
            "explanation": "정답 순서는 [C -> D -> A -> B] 입니다. (C)가 전체 주제를 여는 독립 도입문 역할을 하며, (D)가 앞 문장의 핵심 개념을 구체화하고, (A)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (B)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-12",
            "title": "The Industrial Revolution and Steam Power",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "This geographic constraint severely restricted factory expansion to remote hilly river valleys."
                },
                {
                    "label": "B",
                    "text": "James Watt solved this limitation by developing an efficient condenser that transformed the steam engine into a universal power source."
                },
                {
                    "label": "C",
                    "text": "Freed from riverfront dependencies, manufacturers rapidly constructed massive urban industrial complexes near coalfields and ports."
                },
                {
                    "label": "D",
                    "text": "Early textile mills had to be constructed adjacent to fast-flowing rivers to turn mechanical water wheels."
                }
            ],
            "correctOrder": [
                "D",
                "A",
                "B",
                "C"
            ],
            "explanation": "정답 순서는 [D -> A -> B -> C] 입니다. (D)가 전체 주제를 여는 독립 도입문 역할을 하며, (A)가 앞 문장의 핵심 개념을 구체화하고, (B)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (C)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-13",
            "title": "Sleep Cycles and Memory Consolidation",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "During the deepest periods of slow-wave sleep, high-frequency neural oscillations occur in the hippocampus."
                },
                {
                    "label": "B",
                    "text": "This rapid replay transfers newly acquired facts from temporary hippocampal circuits into the durable neocortex."
                },
                {
                    "label": "C",
                    "text": "Throughout the night, the human brain alternates rhythmically between rapid eye movement and slow-wave sleep stages."
                },
                {
                    "label": "D",
                    "text": "These sharp-wave ripples replay recent daytime experiences at twenty times their original speed."
                }
            ],
            "correctOrder": [
                "C",
                "A",
                "D",
                "B"
            ],
            "explanation": "정답 순서는 [C -> A -> D -> B] 입니다. (C)가 전체 주제를 여는 독립 도입문 역할을 하며, (A)가 앞 문장의 핵심 개념을 구체화하고, (D)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (B)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-14",
            "title": "The Economics of Congestion Pricing",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "To correct this market failure, cities such as London and Singapore introduced electronic congestion tolling."
                },
                {
                    "label": "B",
                    "text": "Road space in dense metropolitan centers is an inherently finite resource subject to heavy overuse."
                },
                {
                    "label": "C",
                    "text": "By charging drivers during peak hours, these programs reduce vehicle volumes by fifteen percent and fund public mass transit."
                },
                {
                    "label": "D",
                    "text": "When vehicular access is free, individual motorists flood highway corridors, creating gridlock that costs billions annually."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "정답 순서는 [B -> D -> A -> C] 입니다. (B)가 전체 주제를 여는 독립 도입문 역할을 하며, (D)가 앞 문장의 핵심 개념을 구체화하고, (A)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (C)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-15",
            "title": "Exoplanetary Spectroscopy and Biosignatures",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "By decoding these spectroscopic fingerprints, space telescopes can detect gases such as methane and oxygen that may indicate alien biological activity."
                },
                {
                    "label": "B",
                    "text": "When an exoplanet crosses in front of its host star, a fraction of starlight filters through the planetary atmosphere."
                },
                {
                    "label": "C",
                    "text": "Chemical elements in that atmosphere absorb specific wavelengths of light, leaving distinctive dark absorption lines."
                },
                {
                    "label": "D",
                    "text": "Astronomers can now study planets orbiting distant stars without ever sending physical probes across interstellar space."
                }
            ],
            "correctOrder": [
                "D",
                "B",
                "C",
                "A"
            ],
            "explanation": "정답 순서는 [D -> B -> C -> A] 입니다. (D)가 전체 주제를 여는 독립 도입문 역할을 하며, (B)가 앞 문장의 핵심 개념을 구체화하고, (C)가 지시어·연결어를 통해 인과관계를 심화한 뒤, (A)가 최종 결과 및 학술적 의의로 문단을 마무리합니다."
        },
        {
            "id": "ROP-16",
            "title": "The Discovery of Penicillin by Alexander Fleming",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Upon examining one contaminated culture plate, he noticed that a blue-green mold had accidentally grown on the agar gel."
                },
                {
                    "label": "B",
                    "text": "Fleming isolated the active antibacterial secretion from this mold and named it penicillin, ushering in the modern era of antibiotics."
                },
                {
                    "label": "C",
                    "text": "In 1928, Scottish bacteriologist Alexander Fleming returned from vacation to find a messy stack of Petri dishes in his London laboratory."
                },
                {
                    "label": "D",
                    "text": "Remarkably, the Staphylococcus bacteria immediately surrounding this fungal colony had been completely dissolved and destroyed."
                }
            ],
            "correctOrder": [
                "C",
                "A",
                "D",
                "B"
            ],
            "explanation": "정답 순서는 [C -> A -> D -> B] 입니다. (C) -> (A) -> (D) -> (B) 흐름: 도입부에서 1928년 플레밍이 휴가에서 돌아와 배양 접시를 발견한 배경을 제시하고, 이어서 'one contaminated culture plate'로 곰팡이 오염을 묘사한 뒤, 'this fungal colony' 주변 박테리아가 녹아내린 현상을 거쳐 페니실린 명명으로 이어집니다."
        },
        {
            "id": "ROP-17",
            "title": "How Sovereign Wealth Funds Stabilize Resource Economies",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "To insulate their economies from this volatility, countries such as Norway and Chile channel windfall resource taxes into offshore Sovereign Wealth Funds."
                },
                {
                    "label": "B",
                    "text": "Nations that rely heavily on exporting crude oil or copper often experience violent fiscal booms and busts as global commodity prices fluctuate."
                },
                {
                    "label": "C",
                    "text": "These long-term investment portfolios preserve national wealth for future generations after finite mineral reserves are eventually depleted."
                },
                {
                    "label": "D",
                    "text": "When resource revenues surge, domestic currencies appreciate sharply, making local manufacturing exports uncompetitive—a syndrome termed the Dutch Disease."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "정답 순서는 [B -> D -> A -> C] 입니다. (B) -> (D) -> (A) -> (C) 흐름: 원자재 수출국의 재정 변동성 문제를 먼저 제시한 뒤, 자원 가격 급등이 초래하는 '네덜란드 병'을 설명하고, 이를 막기 위한('To insulate their economies from this volatility') 국부펀드 설립과 미래 세대 자산 보전으로 귀결됩니다."
        },
        {
            "id": "ROP-18",
            "title": "The Mechanism of mRNA Lipid Nanoparticles",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "These fatty droplets shield the genetic payload during transit and fuse smoothly with host cells to trigger protective immune responses."
                },
                {
                    "label": "B",
                    "text": "Furthermore, the negatively charged genetic strand cannot easily penetrate the protective lipid bilayer of human cell membranes."
                },
                {
                    "label": "C",
                    "text": "Biomedical engineers overcame both obstacles by encapsulating the fragile mRNA strand inside microscopic lipid nanoparticles."
                },
                {
                    "label": "D",
                    "text": "Naked messenger RNA molecules injected directly into the human bloodstream are rapidly degraded by extracellular enzymes before reaching target cells."
                }
            ],
            "correctOrder": [
                "D",
                "B",
                "C",
                "A"
            ],
            "explanation": "정답 순서는 [D -> B -> C -> A] 입니다. (D) -> (B) -> (C) -> (A) 흐름: 순수 mRNA 분자가 혈액 내 효소에 의해 파괴되는 첫 번째 한계를 제시하고, 'Furthermore'로 세포막 통과 불가라는 두 번째 한계를 덧붙인 뒤, 'overcame both obstacles'로 지질 나노입자 해결책과 최종 면역 유도 과정을 설명합니다."
        },
        {
            "id": "ROP-19",
            "title": "Continental Drift and Alfred Wegener's Skeptics",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "He supported this bold hypothesis by pointing to matching fossil reptiles and identical rock strata across the Atlantic coastlines of South America and Africa."
                },
                {
                    "label": "B",
                    "text": "In 1912, German meteorologist Alfred Wegener proposed that Earth's continents were once joined together in a single supercontinent called Pangaea."
                },
                {
                    "label": "C",
                    "text": "Critics rightly pointed out that Wegener could not identify a plausible physical force strong enough to plow massive continental plates through solid ocean floors."
                },
                {
                    "label": "D",
                    "text": "Despite these compelling geological correlations, the orthodox geophysical establishment overwhelmingly rejected Wegener's theory for five decades."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "D",
                "C"
            ],
            "explanation": "정답 순서는 [B -> A -> D -> C] 입니다. (B) -> (A) -> (D) -> (C) 흐름: 1912년 베게너의 판게아 가설 제기를 시작으로, 'He supported this bold hypothesis'에서 화석·지층 증거를 제시하고, 'Despite these compelling geological correlations'로 학계의 거부와 그 구체적 이유(이동 동력 설명 부재)로 이어집니다."
        },
        {
            "id": "ROP-20",
            "title": "Urban Congestion Pricing in Stockholm",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Within weeks of implementation, however, traffic volumes dropped by twenty percent and bus commute times improved dramatically."
                },
                {
                    "label": "B",
                    "text": "Having experienced cleaner air and faster commutes firsthand, Stockholm citizens voted in a subsequent referendum to make the congestion tax permanent."
                },
                {
                    "label": "C",
                    "text": "In 2006, municipal authorities in Stockholm launched a seven-month trial of electronic congestion tolling across bridges leading into the inner city."
                },
                {
                    "label": "D",
                    "text": "Initial public opinion polls showed that over seventy percent of suburban motorists fiercely opposed the new road charges."
                }
            ],
            "correctOrder": [
                "C",
                "D",
                "A",
                "B"
            ],
            "explanation": "정답 순서는 [C -> D -> A -> B] 입니다. (C) -> (D) -> (A) -> (B) 흐름: 2006년 스톡홀름 혼잡통행료 시범 도입을 소개한 뒤, 초기 여론의 거센 반대를 제시하고, 'however'를 통해 시행 몇 주 만에 나타난 교통량 감소 효과를 거쳐 주민투표 영구 찬성으로 마무리됩니다."
        },
        {
            "id": "ROP-21",
            "title": "The Ecological Role of Sea Otters in Kelp Forests",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "These underwater forests face constant grazing pressure from spiny sea urchins that devour the holdfast roots anchoring kelp to the seafloor."
                },
                {
                    "label": "B",
                    "text": "Sea otters act as a keystone predator in this ecosystem by consuming vast quantities of sea urchins every day."
                },
                {
                    "label": "C",
                    "text": "When fur traders hunted sea otters to near extinction in the nineteenth century, unchecked urchin populations multiplied and turned lush kelp forests into barren rock."
                },
                {
                    "label": "D",
                    "text": "Along the Pacific coast of North America, giant kelp forests provide critical nursery habitats for hundreds of commercial fish species."
                }
            ],
            "correctOrder": [
                "D",
                "A",
                "B",
                "C"
            ],
            "explanation": "정답 순서는 [D -> A -> B -> C] 입니다. (D) -> (A) -> (B) -> (C) 흐름: 태평양 연안 켈프 숲의 생태적 가치를 먼저 소개하고, 'These underwater forests'를 위협하는 성게를 설명한 뒤, 성게를 잡아먹는 해달의 핵심종 역할과 해달 남획 시 발생한 생태계 붕괴 결과를 서술합니다."
        },
        {
            "id": "ROP-22",
            "title": "Why Printing Money Causes Hyperinflation",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Injecting vast quantities of newly printed banknotes into circulation increases the nominal money supply without increasing real goods and services."
                },
                {
                    "label": "B",
                    "text": "Once citizens realize their cash is losing value daily, they spend banknotes franticly, accelerating velocity and tipping the economy into hyperinflation."
                },
                {
                    "label": "C",
                    "text": "When a government faces massive budget deficits and can no longer borrow from international bond markets, it is often tempted to print money."
                },
                {
                    "label": "D",
                    "text": "As too much currency chases too few products, merchants rapidly raise retail prices every few hours to protect their profit margins."
                }
            ],
            "correctOrder": [
                "C",
                "A",
                "D",
                "B"
            ],
            "explanation": "정답 순서는 [C -> A -> D -> B] 입니다. (C) -> (A) -> (D) -> (B) 흐름: 정부의 재정 적자와 화폐 발행 유혹을 도입으로 제시하고, 실물 생산 증가 없는 통화량 팽창을 설명한 뒤, 상인들의 가격 인상과 화폐 가치 폭락에 따른 초인플레이션 악순환으로 이어집니다."
        },
        {
            "id": "ROP-23",
            "title": "How Bats Navigate Using Doppler Echolocation",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "When these sound waves strike a moving insect, echoes bounce back with slight shifts in pitch and arrival time."
                },
                {
                    "label": "B",
                    "text": "Nocturnal insectivorous bats hunt flying moths in total darkness where visual eyesight is virtually useless."
                },
                {
                    "label": "C",
                    "text": "The bat's specialized auditory cortex instantly calculates these Doppler frequency shifts to pinpoint the prey's exact distance, speed, and trajectory."
                },
                {
                    "label": "D",
                    "text": "To perceive their surroundings, these mammals emit high-frequency ultrasonic chirps through their larynx at rates of up to two hundred pulses per second."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "정답 순서는 [B -> D -> A -> C] 입니다. (B) -> (D) -> (A) -> (C) 흐름: 야행성 박쥐의 어둠 속 사냥 환경을 도입으로 제시하고, 'To perceive their surroundings'에서 초음파 발산을 설명한 뒤, 'these sound waves'가 곤충에 부딪혀 돌아오는 메아리와 뇌의 도플러 계산으로 완성됩니다."
        },
        {
            "id": "ROP-24",
            "title": "The Rise and Fall of the Roman Denarius",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "As silver purity plummeted below five percent, public trust in imperial currency collapsed and soldiers demanded payment in grain and land instead."
                },
                {
                    "label": "B",
                    "text": "Under Emperor Augustus, each coin was minted from nearly ninety-eight percent pure refined silver bullion."
                },
                {
                    "label": "C",
                    "text": "Over the third century, however, successive emperors facing costly frontier wars secretly debased the coinage by mixing cheap copper into the minting alloy."
                },
                {
                    "label": "D",
                    "text": "During the early Roman Principate, the silver denarius coin served as the trusted backbone of Mediterranean commerce and military payrolls."
                }
            ],
            "correctOrder": [
                "D",
                "B",
                "C",
                "A"
            ],
            "explanation": "정답 순서는 [D -> B -> C -> A] 입니다. (D) -> (B) -> (C) -> (A) 흐름: 초기 로마 은화(데나리우스)의 신뢰성을 소개한 뒤, 아우구스투스 시대의 98% 순도를 설명하고, 'however'로 3세기 황제들의 구리 혼입(화폐 가치 절하)과 최종적인 화폐 불신·현물 지급 요구로 이어집니다."
        },
        {
            "id": "ROP-25",
            "title": "Circadian Misalignment in Shift Workers",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Night-shift nurses, airline pilots, and factory workers must routinely stay awake and consume meals when their internal clock expects sleep."
                },
                {
                    "label": "B",
                    "text": "The human suprachiasmatic nucleus acts as a master circadian pacemaker that aligns metabolic organs with natural daylight and nocturnal darkness."
                },
                {
                    "label": "C",
                    "text": "Epidemiological tracking confirms that long-term rotational shift workers face significantly higher lifetime risks of metabolic syndrome and cardiovascular disease."
                },
                {
                    "label": "D",
                    "text": "This chronic circadian misalignment suppresses nocturnal insulin sensitivity and elevates blood pressure."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "D",
                "C"
            ],
            "explanation": "정답 순서는 [B -> A -> D -> C] 입니다. (B) -> (A) -> (D) -> (C) 흐름: 인체 생체시계 중추의 정상 기능을 먼저 제시하고, 야간 교대 근무자들의 수면·식사 역전을 설명한 뒤, 'This chronic circadian misalignment'가 인슐린 저항성을 높여 대사증후군 위험을 키운다는 역학 결론으로 이어집니다."
        },
        {
            "id": "ROP-26",
            "title": "The Invention of Containerization in Global Shipping",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "In 1956, American trucking entrepreneur Malcom McLean revolutionized maritime logistics by introducing standardized steel intermodal shipping containers."
                },
                {
                    "label": "B",
                    "text": "Automated dockside cranes could now transfer thousands of tons of sealed containers between ships, trains, and trucks in hours, slashing global trade costs by ninety percent."
                },
                {
                    "label": "C",
                    "text": "For centuries, loading ocean cargo ships required gangs of dockworkers to manually hoist individual wooden barrels, burlap sacks, and crates onto the hull."
                },
                {
                    "label": "D",
                    "text": "Because this break-bulk process was excruciatingly slow, merchant vessels often spent more weeks sitting idle in port than sailing across oceans."
                }
            ],
            "correctOrder": [
                "C",
                "D",
                "A",
                "B"
            ],
            "explanation": "정답 순서는 [C -> D -> A -> B] 입니다. (C) -> (D) -> (A) -> (B) 흐름: 수백 년간 부두 노동자들이 수작업으로 화물을 싣던 방식에서 시작해, 'this break-bulk process'의 느린 속도를 지적하고, 1956년 말콤 맥린의 표준 철제 컨테이너 도입과 크레인 자동화로 인한 무역 비용 절감으로 완성됩니다."
        },
        {
            "id": "ROP-27",
            "title": "Why Alpine Treelines Advance Slowly Under Global Warming",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Field surveys across global mountain ranges, however, reveal that many treelines are advancing far more slowly than thermal models project."
                },
                {
                    "label": "B",
                    "text": "Harsh high-altitude wind exposure, thin nutrient-poor soils, and intense ultraviolet radiation severely limit seedling survival above existing forest edges."
                },
                {
                    "label": "C",
                    "text": "Consequently, tree migration depends not only on warmer air temperatures but also on the gradual accumulation of protective organic soil and shelter."
                },
                {
                    "label": "D",
                    "text": "Climate models generally predict that as mountain temperatures warm, subalpine forest treelines should migrate rapidly upslope into rocky tundra zones."
                }
            ],
            "correctOrder": [
                "D",
                "A",
                "B",
                "C"
            ],
            "explanation": "정답 순서는 [D -> A -> B -> C] 입니다. (D) -> (A) -> (B) -> (C) 흐름: 온난화로 고산 수목한계선이 빠르게 올라갈 것이라는 기후 모델 예측을 제시한 뒤, 'however'로 실제 현장 조사에서는 이동이 훨씬 느리다는 반전을 주고, 고산 강풍·척박한 토양 원인과 최종 결론('Consequently')으로 마무리됩니다."
        },
        {
            "id": "ROP-28",
            "title": "The Bystander Effect in Social Psychology",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Social psychologists Bibb Latané and John Darley discovered the exact opposite pattern in controlled laboratory emergencies."
                },
                {
                    "label": "B",
                    "text": "In a crowded plaza, however, responsibility diffuses across dozens of observers, as each person assumes someone else has already called for help."
                },
                {
                    "label": "C",
                    "text": "Common intuition suggests that a person experiencing a sudden medical emergency in public is safer when surrounded by a large crowd of witnesses."
                },
                {
                    "label": "D",
                    "text": "When a solitary bystander witnesses an accident, that individual feels sole moral responsibility to intervene immediately."
                }
            ],
            "correctOrder": [
                "C",
                "A",
                "D",
                "B"
            ],
            "explanation": "정답 순서는 [C -> A -> D -> B] 입니다. (C) -> (A) -> (D) -> (B) 흐름: 목격자가 많을수록 안전할 것이라는 일반적 통념을 먼저 제시하고, 라타네와 달리의 실험이 정반대 결과를 밝혔음을 설명한 뒤, 단독 목격자의 책임감과 군중 속 책임감 분산('In a crowded plaza, however')을 대조합니다."
        },
        {
            "id": "ROP-29",
            "title": "How Geothermal Heat Pumps Regulate Building Temperatures",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "During winter, the fluid absorbs natural warmth from the earth and compresses it to heat indoor residential rooms."
                },
                {
                    "label": "B",
                    "text": "Although surface air temperatures fluctuate wildly between scorching summers and freezing winters, soil temperatures three meters underground remain nearly constant year-round."
                },
                {
                    "label": "C",
                    "text": "In summer, the system reverses direction, extracting excess heat from the house and depositing it back into the cool underground soil."
                },
                {
                    "label": "D",
                    "text": "Geothermal heat pump systems exploit this subterranean thermal stability by circulating water through buried polyethylene pipe loops."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "정답 순서는 [B -> D -> A -> C] 입니다. (B) -> (D) -> (A) -> (C) 흐름: 지표면 기온과 달리 지하 3미터 토양 온도는 연중 일정하다는 과학적 사실로 시작해, 지열 히트펌프가 'this subterranean thermal stability'를 활용하는 원리와 겨울철 난방('During winter'), 여름철 냉방('In summer') 순으로 전개됩니다."
        },
        {
            "id": "ROP-30",
            "title": "The Tragedy of the Commons in Overfishing",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Because individual self-interest rewards maximum harvesting, rival fleets strip the ocean bare unless binding international catch quotas are enforced."
                },
                {
                    "label": "B",
                    "text": "In international ocean waters, every commercial fishing captain captures the full financial profit of catching an extra ton of bluefin tuna."
                },
                {
                    "label": "C",
                    "text": "Meanwhile, the ecological cost of stock depletion is shared thinly across all fishing fleets operating on the high seas."
                },
                {
                    "label": "D",
                    "text": "Ecologist Garrett Hardin formulated the tragedy of the commons to explain why shared, unregulated natural resources inevitably suffer depletion."
                }
            ],
            "correctOrder": [
                "D",
                "B",
                "C",
                "A"
            ],
            "explanation": "정답 순서는 [D -> B -> C -> A] 입니다. (D) -> (B) -> (C) -> (A) 흐름: 개릿 하딘의 공유지의 비극 개념을 도입한 뒤, 공해상 어선 선장이 추가 어획 이익은 독점하는 반면('Meanwhile') 어족 고갈 비용은 전체에 분산되는 구조를 설명하고, 국제 어획 쿼터의 필요성으로 결론짓습니다."
        },
        {
            "id": "ROP-31",
            "title": "How Coffee Was Discovered and Spread from Ethiopia",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "By the fifteenth century, Sufi mystics in Yemen were roasting and brewing these imported berries to maintain alertness during nocturnal prayers."
                },
                {
                    "label": "B",
                    "text": "Botanical genetic analysis confirms that wild Coffea arabica trees originated in the misty highland forests of southwestern Ethiopia."
                },
                {
                    "label": "C",
                    "text": "European merchants visiting Constantinople eventually carried the beverage back to Venice and London, transforming coffee into a global commodity."
                },
                {
                    "label": "D",
                    "text": "From Mocha and Cairo, vibrant coffeehouses spread rapidly across the Ottoman Empire as centers of political debate and literary exchange."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "D",
                "C"
            ],
            "explanation": "정답 순서는 [B -> A -> D -> C] 입니다. (B) -> (A) -> (D) -> (C) 흐름: 에티오피아 고원 지대 커피나무 기원에서 시작해, 15세기 예멘 수피교도들의 음용, 오스만 제국 커피하우스 확산('From Mocha and Cairo'), 유럽 상인들을 통한 전 세계 전파로 시간순 전개됩니다."
        },
        {
            "id": "ROP-32",
            "title": "The Physics of Regenerative Braking in Electric Cars",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Operating as an electrical generator, the spinning motor resists wheel rotation and converts forward momentum back into electric current."
                },
                {
                    "label": "B",
                    "text": "This recovered electricity flows directly into the lithium-ion battery pack, extending urban driving range by up to twenty-five percent."
                },
                {
                    "label": "C",
                    "text": "When a conventional gasoline automobile slows down, friction brake pads clamp onto metal rotors and waste kinetic energy as dissipated heat."
                },
                {
                    "label": "D",
                    "text": "Electric vehicles avoid this energy loss by utilizing their electric traction motor in reverse whenever the driver lifts off the accelerator pedal."
                }
            ],
            "correctOrder": [
                "C",
                "D",
                "A",
                "B"
            ],
            "explanation": "정답 순서는 [C -> D -> A -> B] 입니다. (C) -> (D) -> (A) -> (B) 흐름: 기존 내연기관차의 마찰 브레이크 열 손실을 먼저 제시하고, 전기차는('avoid this energy loss') 모터를 역방향으로 활용함을 설명한 뒤, 발전기로 작동해 전류를 생성하고('Operating as an electrical generator') 배터리를 재충전하는 과정으로 이어집니다."
        },
        {
            "id": "ROP-33",
            "title": "Why Ancient Manuscripts Were Written on Parchment Palimpsests",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Monastic scribes desperate for writing surfaces frequently recycled older parchment codices by scraping and washing off the original ink text."
                },
                {
                    "label": "B",
                    "text": "Over these erased pages, monks inscribed medieval theological treatises, creating layered manuscripts known to historians as palimpsests."
                },
                {
                    "label": "C",
                    "text": "Today, multispectral ultraviolet imaging enables scholars to peer beneath the surface writing and recover lost classical works by Archimedes and Cicero."
                },
                {
                    "label": "D",
                    "text": "During the early Middle Ages, imported Egyptian papyrus became scarce in Europe and calfskin parchment was extraordinarily expensive to manufacture."
                }
            ],
            "correctOrder": [
                "D",
                "A",
                "B",
                "C"
            ],
            "explanation": "정답 순서는 [D -> A -> B -> C] 입니다. (D) -> (A) -> (B) -> (C) 흐름: 중세 초기 양피지의 높은 가격 배경을 제시한 뒤, 수도원 필경사들이 기존 양피지 글씨를 긁어내고 재활용한 과정과 '팔림프세스트' 탄생을 설명하고, 오늘날('Today') 자외선 촬영을 통한 고전 복원으로 마무리됩니다."
        },
        {
            "id": "ROP-34",
            "title": "How Nitrogen-Fixing Legumes Enrich Agricultural Soil",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Plants require nitrogen to be chemically converted into soluble ammonia or nitrates within the soil before their roots can assimilate it."
                },
                {
                    "label": "B",
                    "text": "By rotating legumes with grain crops, farmers naturally replenish soil nitrogen fertility without relying exclusively on synthetic chemical fertilizers."
                },
                {
                    "label": "C",
                    "text": "Although nitrogen gas makes up seventy-eight percent of Earth's atmosphere, cereal crops like wheat and corn cannot absorb it in gaseous form."
                },
                {
                    "label": "D",
                    "text": "Legume crops such as soybeans, clover, and alfalfa accomplish this conversion by hosting symbiotic Rhizobium bacteria inside root nodules."
                }
            ],
            "correctOrder": [
                "C",
                "A",
                "D",
                "B"
            ],
            "explanation": "정답 순서는 [C -> A -> D -> B] 입니다. (C) -> (A) -> (D) -> (B) 흐름: 대기 중 질소가 풍부함에도 곡물이 직접 흡수하지 못하는 한계를 제시하고, 암모니아·질산염 전환 필요성을 설명한 뒤, 콩과 식물의 뿌리혹박테리아 공생 작용과 윤작을 통한 자연 비옥도 회복으로 이어집니다."
        },
        {
            "id": "ROP-35",
            "title": "The Role of Astrocytes in the Tripartite Synapse",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Researchers discovered that astrocytes wrap closely around neuronal synapses and actively monitor neurotransmitter release."
                },
                {
                    "label": "B",
                    "text": "Throughout the twentieth century, neurobiologists regarded star-shaped glial cells called astrocytes as mere structural glue holding neurons in place."
                },
                {
                    "label": "C",
                    "text": "By clearing excess glutamate and releasing signaling molecules of their own, astrocytes directly modulate synaptic strength and memory formation."
                },
                {
                    "label": "D",
                    "text": "Advanced calcium imaging techniques have fundamentally overturned this passive view of glial cell function."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "정답 순서는 [B -> D -> A -> C] 입니다. (B) -> (D) -> (A) -> (C) 흐름: 20세기 동안 성상교세포를 단순한 신경 접착제로 여겼던 과거 통념에서 시작해, 칼슘 이미징 기술이 'this passive view'를 뒤집었음을 밝히고, 시냅스 감시 및 글루탐산 조절을 통한 기억 형성 관여로 전개됩니다."
        },
        {
            "id": "ROP-36",
            "title": "How Sovereign Patent Pools Accelerate Pandemic Medicines",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Once patent holders join the pool,dozens of generic manufacturers across Asia and Africa can legally mass-produce affordable treatments simultaneously."
                },
                {
                    "label": "B",
                    "text": "As a result, low-income countries face severe supply bottlenecks and unaffordable medication prices while factories in developing regions sit idle."
                },
                {
                    "label": "C",
                    "text": "To overcome this barrier, international health agencies established the Medicines Patent Pool to negotiate voluntary royalty-free sublicenses."
                },
                {
                    "label": "D",
                    "text": "When a novel infectious pandemic emerges, pharmaceutical companies holding exclusive patents on antiviral drugs often restrict global manufacturing licenses."
                }
            ],
            "correctOrder": [
                "D",
                "B",
                "C",
                "A"
            ],
            "explanation": "정답 순서는 [D -> B -> C -> A] 입니다. (D) -> (B) -> (C) -> (A) 흐름: 팬데믹 발생 시 제약사의 독점 특허가 생산을 제한하는 문제를 제시하고, 'As a result'로 저개발국 공급 부족을 설명한 뒤, 'To overcome this barrier'에서 의약품 특허풀 설립과 복제약 대량 생산 효과를 연결합니다."
        },
        {
            "id": "ROP-37",
            "title": "The Evolution of Dark Peppered Moths in Industrial England",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "During the nineteenth century, coal-burning factories blanketed Manchester and Birmingham in black soot, killing tree lichens and darkening tree trunks."
                },
                {
                    "label": "B",
                    "text": "Prior to the Industrial Revolution, the vast majority of peppered moths in England had pale, speckled wings that blended seamlessly against lichen-covered birch bark."
                },
                {
                    "label": "C",
                    "text": "Once clean air legislation reduced industrial smoke in the late twentieth century, tree bark lightened and pale moths regained their evolutionary dominance."
                },
                {
                    "label": "D",
                    "text": "Against these soot-blackened trees, pale moths became easy targets for predatory birds, whereas rare dark-winged mutant moths survived to reproduce."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "D",
                "C"
            ],
            "explanation": "정답 순서는 [B -> A -> D -> C] 입니다. (B) -> (A) -> (D) -> (C) 흐름: 산업혁명 이전 밝은색 후추나방의 위장 적응을 먼저 설명하고, 19세기 석탄 매연이 나무줄기를 검게 만든 변화와 검은 나방의 자연선택 생존을 거쳐, 20세기 후반 대기 정화법 이후 밝은 나방의 재우세로 시간순 전개됩니다."
        },
        {
            "id": "ROP-38",
            "title": "Why Central Banks Hold Gold Reserves",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Unlike sovereign government bonds, physical gold bullion carries zero counterparty default risk and cannot be devalued by foreign monetary printing."
                },
                {
                    "label": "B",
                    "text": "Holding substantial gold reserves therefore provides central banks with an ultimate crisis buffer against geopolitical sanctions and currency collapses."
                },
                {
                    "label": "C",
                    "text": "Following the collapse of the Bretton Woods system in 1971, major world currencies transitioned from gold backing to pure fiat money."
                },
                {
                    "label": "D",
                    "text": "Despite this formal demonetization, national central banks continue to store over thirty-five thousand metric tons of physical gold bars in underground vaults."
                }
            ],
            "correctOrder": [
                "C",
                "D",
                "A",
                "B"
            ],
            "explanation": "정답 순서는 [C -> D -> A -> B] 입니다. (C) -> (D) -> (A) -> (B) 흐름: 1971년 브레튼우즈 체제 붕괴와 명목화폐 전환을 도입으로 제시하고, 'Despite this formal demonetization'으로 중앙은행들의 거대 금 보유 현상을 짚은 뒤, 부도 위험이 없는 금의 특성과 위기 방어 목적('therefore')으로 마무리됩니다."
        },
        {
            "id": "ROP-39",
            "title": "How Icebreakers Clear Polar Shipping Channels",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Specialized polar icebreakers are engineered with thickened steel hulls and a sloped, spoon-shaped bow profile."
                },
                {
                    "label": "B",
                    "text": "Rather than ramming straight through thick pack ice, the icebreaker uses immense engine thrust to ride its sloped bow up onto the frozen surface."
                },
                {
                    "label": "C",
                    "text": "The sheer downward weight of the vessel then crushes the brittle ice sheet beneath it, carving an open water channel for following vessels."
                },
                {
                    "label": "D",
                    "text": "Conventional steel-hulled cargo ships cannot navigate polar seas because sharp sea ice easily punctures standard vertical bow plates."
                }
            ],
            "correctOrder": [
                "D",
                "A",
                "B",
                "C"
            ],
            "explanation": "정답 순서는 [D -> A -> B -> C] 입니다. (D) -> (A) -> (B) -> (C) 흐름: 일반 화물선이 북극해를 항해할 수 없는 이유를 먼저 제시하고, 쇄빙선의 두꺼운 선체와 숟가락 모양 선수 설계를 설명한 뒤, 얼음 위로 올라타는 방식('Rather than ramming')과 선체 하중으로 얼음을 깨는 원리로 이어집니다."
        },
        {
            "id": "ROP-40",
            "title": "The Discovery of Cosmic Microwave Background Radiation",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Regardless of which direction they pointed the receiver in the sky, they detected a persistent, uniform microwave hiss that refused to disappear."
                },
                {
                    "label": "B",
                    "text": "After cleaning the receiver and consulting Princeton physicists, they realized they had discovered the cosmic microwave background radiation left over from the Big Bang."
                },
                {
                    "label": "C",
                    "text": "In 1964, radio astronomers Arno Penzias and Robert Wilson were calibrating a sensitive horn antenna at Bell Labs in New Jersey."
                },
                {
                    "label": "D",
                    "text": "They initially suspected that the interference was caused by equipment defects or pigeons nesting inside the antenna horn."
                }
            ],
            "correctOrder": [
                "C",
                "A",
                "D",
                "B"
            ],
            "explanation": "정답 순서는 [C -> A -> D -> B] 입니다. (C) -> (A) -> (D) -> (B) 흐름: 1964년 펜지어스와 윌슨의 안테나 보정 작업에서 시작해, 하늘 모든 방향에서 감지된 정체불명의 마이크로파 잡음을 설명하고, 초기 장비 결함·비둘기 배설물 의심을 거쳐 빅뱅 우주배경복사 발견으로 완성됩니다."
        },
        {
            "id": "ROP-41",
            "title": "How Mangrove Forests Protect Tropical Coastlines",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "When typhoon storm surges and tsunami waves strike the coast, this root network dissipates up to seventy percent of incoming wave energy."
                },
                {
                    "label": "B",
                    "text": "Mangrove trees are uniquely adapted to thrive in muddy, oxygen-poor coastal intertidal zones where most terrestrial plants would drown or die from salt."
                },
                {
                    "label": "C",
                    "text": "Furthermore, the slowed water drops suspended silt around the roots, allowing mangrove coastlines to naturally build up land against rising sea levels."
                },
                {
                    "label": "D",
                    "text": "Their dense, tangled prop roots rise above the water line, creating an underwater obstacle course along tropical shorelines."
                }
            ],
            "correctOrder": [
                "B",
                "D",
                "A",
                "C"
            ],
            "explanation": "정답 순서는 [B -> D -> A -> C] 입니다. (B) -> (D) -> (A) -> (C) 흐름: 맹그로브 나무의 염분·조간대 적응 특성을 도입으로 제시하고, 'Their dense, tangled prop roots' 구조를 설명한 뒤, 태풍 해일 에너지를 감쇄하는 방파제 역할과 퇴적물 축적을 통한 해안선 보호('Furthermore')로 이어집니다."
        },
        {
            "id": "ROP-42",
            "title": "Why Silent Reading Was Rare in Classical Antiquity",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Only after medieval Irish and Anglo-Saxon scribes introduced blank spaces between words in the eighth century did rapid silent reading become widespread."
                },
                {
                    "label": "B",
                    "text": "Decoding where one word ended and the next began required the reader's eyes and voice to work together to sound out phonetic syllables."
                },
                {
                    "label": "C",
                    "text": "Consequently, almost all reading in the ancient Mediterranean world was performed aloud, even when a scholar was sitting completely alone."
                },
                {
                    "label": "D",
                    "text": "In ancient Greece and Rome, literary manuscripts were written in scriptio continua—continuous lines of capital letters with zero spaces or punctuation between words."
                }
            ],
            "correctOrder": [
                "D",
                "B",
                "C",
                "A"
            ],
            "explanation": "정답 순서는 [D -> B -> C -> A] 입니다. (D) -> (B) -> (C) -> (A) 흐름: 고대 그리스·로마 필사본에 띄어쓰기와 문장부호가 없었다는 역사적 사실로 시작해, 단어 경계를 파악하려면 소리 내어 읽어야 했던 이유와 고대 낭독 문화를 설명하고, 8세기 단어 간 띄어쓰기 도입 이후 묵독 확산으로 마무리됩니다."
        },
        {
            "id": "ROP-43",
            "title": "The Mechanism of Cloud Seeding for Precipitation",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "Meteorologists attempt to stimulate artificial precipitation through cloud seeding by dispersing silver iodide crystals from aircraft or ground generators."
                },
                {
                    "label": "B",
                    "text": "Even when atmospheric clouds contain abundant supercooled water vapor, raindrops may fail to fall if microscopic condensation nuclei are absent."
                },
                {
                    "label": "C",
                    "text": "Once the growing ice crystals become heavy enough to overcome updrafts, they fall toward the ground as snow or melt into beneficial rain."
                },
                {
                    "label": "D",
                    "text": "Because silver iodide possesses a hexagonal crystal structure nearly identical to natural ice, supercooled water droplets rapidly freeze around these particles."
                }
            ],
            "correctOrder": [
                "B",
                "A",
                "D",
                "C"
            ],
            "explanation": "정답 순서는 [B -> A -> D -> C] 입니다. (B) -> (A) -> (D) -> (C) 흐름: 구름 속에 과냉각 수증기가 많아도 응결핵이 없으면 비가 내리지 않는 원리를 먼저 제시하고, 요오드화은 살포(인공강우)와 육각 결정 구조에 따른 얼음 결정 성장, 그리고 낙하하여 비·눈이 되는 과정으로 전개됩니다."
        },
        {
            "id": "ROP-44",
            "title": "How the Rosetta Stone Unlocked Egyptian Hieroglyphs",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "The stone slab inscribed a single royal decree issued in 196 BC across three parallel scripts: Egyptian hieroglyphs, Demotic script, and ancient Greek."
                },
                {
                    "label": "B",
                    "text": "Because European classicists could read the ancient Greek section fluently, French philologist Jean-François Champollion successfully deduced the phonetic code of the hieroglyphs."
                },
                {
                    "label": "C",
                    "text": "For over fourteen centuries following the fall of the Roman Empire, the pictorial hieroglyphs carved on Egyptian temple walls remained completely undeciphered."
                },
                {
                    "label": "D",
                    "text": "That mystery began to unravel in 1799 when French soldiers excavating a fort near the town of Rashid uncovered a dark granodiorite stele known as the Rosetta Stone."
                }
            ],
            "correctOrder": [
                "C",
                "D",
                "A",
                "B"
            ],
            "explanation": "정답 순서는 [C -> D -> A -> B] 입니다. (C) -> (D) -> (A) -> (B) 흐름: 14세기 동안 해독되지 못했던 이집트 상형문자의 배경에서 시작해, 1799년 로제타석 발견('That mystery began to unravel')과 3개 문자 병기 구조를 설명하고, 고대 그리스어를 단서로 한 샹폴리옹의 해독 성공으로 이어집니다."
        },
        {
            "id": "ROP-45",
            "title": "Why High-Altitude Training Boosts Endurance Athletes",
            "paragraphs": [
                {
                    "label": "A",
                    "text": "In response to this mild tissue hypoxia, the human kidneys secrete elevated levels of the hormone erythropoietin, commonly known as EPO."
                },
                {
                    "label": "B",
                    "text": "Higher circulating EPO stimulates bone marrow to manufacture millions of additional oxygen-carrying red blood cells and hemoglobin molecules."
                },
                {
                    "label": "C",
                    "text": "When endurance runners return to sea-level competitions weeks later, this expanded red blood cell volume significantly enhances their aerobic stamina."
                },
                {
                    "label": "D",
                    "text": "At elevations above two thousand meters, reduced barometric pressure means each breath of mountain air delivers fewer oxygen molecules to the lungs."
                }
            ],
            "correctOrder": [
                "D",
                "A",
                "B",
                "C"
            ],
            "explanation": "정답 순서는 [D -> A -> B -> C] 입니다. (D) -> (A) -> (B) -> (C) 흐름: 해발 2,000미터 이상 고지대의 낮은 산소 분압 환경을 먼저 제시하고, 'In response to this mild tissue hypoxia'에서 신장의 EPO 호르몬 분비와 골수의 적혈구 증산을 거쳐, 평지 복귀 후 지구력 향상 효과로 마무리됩니다."
        }
    ],
    "wfd": [
        {
            "id": "WFD-01",
            "text": "The library will be closed for maintenance over the coming weekend."
        },
        {
            "id": "WFD-02",
            "text": "All assignments must be submitted online before Friday midnight."
        },
        {
            "id": "WFD-03",
            "text": "The campus facilities will remain open throughout the examination period."
        },
        {
            "id": "WFD-04",
            "text": "Students are required to attend at least eighty percent of the seminars."
        },
        {
            "id": "WFD-05",
            "text": "Climate change is having a profound impact on global agricultural production."
        },
        {
            "id": "WFD-06",
            "text": "Please make sure you include all relevant sources in your bibliography."
        },
        {
            "id": "WFD-07",
            "text": "The university offers financial assistance to students from low-income families."
        },
        {
            "id": "WFD-08",
            "text": "Technological innovation has transformed the way modern businesses operate."
        },
        {
            "id": "WFD-09",
            "text": "Participants in the study were interviewed by a team of psychologists."
        },
        {
            "id": "WFD-10",
            "text": "Renewable energy sources are essential for achieving sustainable economic growth."
        },
        {
            "id": "WFD-11",
            "text": "The chemistry lecture has been canceled due to unforeseen circumstances."
        },
        {
            "id": "WFD-12",
            "text": "Undergraduate students must complete a research project in their final year."
        },
        {
            "id": "WFD-13",
            "text": "Effective communication skills are highly valued by contemporary employers."
        },
        {
            "id": "WFD-14",
            "text": "You can download the course syllabus directly from the department website."
        },
        {
            "id": "WFD-15",
            "text": "A preliminary draft of the report should be submitted by next Wednesday."
        },
        {
            "id": "WFD-16",
            "text": "The new medical center is located adjacent to the main train station."
        },
        {
            "id": "WFD-17",
            "text": "Statistical evidence suggests a strong correlation between diet and health."
        },
        {
            "id": "WFD-18",
            "text": "International students must register with the accommodation office upon arrival."
        },
        {
            "id": "WFD-19",
            "text": "The government plans to increase funding for scientific research institutions."
        },
        {
            "id": "WFD-20",
            "text": "Please remember to bring your student identification card to the examination hall."
        },
        {
            "id": "WFD-21",
            "text": "Urbanization has created significant challenges for public transport infrastructure."
        },
        {
            "id": "WFD-22",
            "text": "Many species are migrating to higher altitudes due to rising temperatures."
        },
        {
            "id": "WFD-23",
            "text": "The professor will hold additional office hours before the final assessment."
        },
        {
            "id": "WFD-24",
            "text": "Digital technology has revolutionized access to historical archives and manuscripts."
        },
        {
            "id": "WFD-25",
            "text": "All laboratory equipment must be cleaned and returned after the experiment."
        },
        {
            "id": "WFD-26",
            "text": "Economic stability depends on a well-regulated financial and banking sector."
        },
        {
            "id": "WFD-27",
            "text": "Students who require an extension should contact their academic advisor immediately."
        },
        {
            "id": "WFD-28",
            "text": "The symposium will feature keynote speakers from leading international universities."
        },
        {
            "id": "WFD-29",
            "text": "Regular physical exercise is proven to reduce stress and improve concentration."
        },
        {
            "id": "WFD-30",
            "text": "Tickets for the annual graduation ceremony can be reserved online from Monday."
        },
        {
            "id": "WFD-31",
            "text": "The introductory lecture on macroeconomics will be held in the main hall."
        },
        {
            "id": "WFD-32",
            "text": "Students must wear protective clothing when conducting experiments in the laboratory."
        },
        {
            "id": "WFD-33",
            "text": "Please submit your dissertation proposal to the faculty office by Friday."
        },
        {
            "id": "WFD-34",
            "text": "A comprehensive bibliography is required at the end of every research paper."
        },
        {
            "id": "WFD-35",
            "text": "The university library subscribes to thousands of international academic journals."
        },
        {
            "id": "WFD-36",
            "text": "Rising sea levels pose a serious threat to low-lying coastal communities."
        },
        {
            "id": "WFD-37",
            "text": "Applicants for the scholarship must demonstrate outstanding academic achievement."
        },
        {
            "id": "WFD-38",
            "text": "The archaeology department will conduct a field excavation during the summer break."
        },
        {
            "id": "WFD-39",
            "text": "Modern architecture increasingly incorporates sustainable and energy-efficient materials."
        },
        {
            "id": "WFD-40",
            "text": "You can access the recorded lectures through the online learning platform."
        },
        {
            "id": "WFD-41",
            "text": "Public transport subsidies help reduce traffic congestion in metropolitan areas."
        },
        {
            "id": "WFD-42",
            "text": "All mobile phones must be switched off before entering the examination room."
        },
        {
            "id": "WFD-43",
            "text": "The guest speaker will discuss the ethical implications of genetic engineering."
        },
        {
            "id": "WFD-44",
            "text": "Accurate data collection is the foundation of reliable scientific research."
        },
        {
            "id": "WFD-45",
            "text": "Students are advised to book an appointment with their career advisor early."
        },
        {
            "id": "WFD-46",
            "text": "Global supply chains have become increasingly vulnerable to geopolitical disruptions."
        },
        {
            "id": "WFD-47",
            "text": "The art gallery displays masterpieces from the nineteenth and twentieth centuries."
        },
        {
            "id": "WFD-48",
            "text": "Financial aid is available for postgraduate students undertaking doctoral research."
        },
        {
            "id": "WFD-49",
            "text": "Regular feedback from tutors helps students improve their academic writing skills."
        },
        {
            "id": "WFD-50",
            "text": "The government has announced ambitious targets for reducing carbon emissions."
        },
        {
            "id": "WFD-51",
            "text": "Please check the noticeboard for any changes to the examination timetable."
        },
        {
            "id": "WFD-52",
            "text": "Biodiversity loss threatens the stability of global food production systems."
        },
        {
            "id": "WFD-53",
            "text": "The psychology seminar has been rescheduled to Thursday afternoon at two."
        },
        {
            "id": "WFD-54",
            "text": "Collaborative projects encourage students to share diverse perspectives and ideas."
        },
        {
            "id": "WFD-55",
            "text": "Artificial intelligence is rapidly transforming medical diagnosis and patient care."
        },
        {
            "id": "WFD-56",
            "text": "Borrowed library equipment must be returned before the end of the semester."
        },
        {
            "id": "WFD-57",
            "text": "Consumer confidence plays a major role in driving national economic growth."
        },
        {
            "id": "WFD-58",
            "text": "The orientation tour will familiarize new students with the campus facilities."
        },
        {
            "id": "WFD-59",
            "text": "Strict copyright laws protect authors and artists from unauthorized reproduction."
        },
        {
            "id": "WFD-60",
            "text": "Investments in public health infrastructure yield significant long-term economic benefits."
        },
        {
            "id": "WFD-61",
            "text": "The astronomy club meets every Tuesday evening at the rooftop observatory."
        },
        {
            "id": "WFD-62",
            "text": "Please ensure that your name and student number are written on the cover sheet."
        },
        {
            "id": "WFD-63",
            "text": "Deforestation in tropical regions contributes significantly to global warming."
        },
        {
            "id": "WFD-64",
            "text": "The engineering workshop requires all participants to complete a safety induction."
        },
        {
            "id": "WFD-65",
            "text": "Critical thinking is an essential skill for evaluating academic literature."
        },
        {
            "id": "WFD-66",
            "text": "The student union organizes cultural events and social activities throughout the year."
        },
        {
            "id": "WFD-67",
            "text": "Advances in battery technology have accelerated the adoption of electric vehicles."
        },
        {
            "id": "WFD-68",
            "text": "Late submissions will not be accepted without a valid medical certificate."
        },
        {
            "id": "WFD-69",
            "text": "The linguistics lecture explores how children acquire their native language."
        },
        {
            "id": "WFD-70",
            "text": "Clean drinking water remains inaccessible to millions of people in developing nations."
        },
        {
            "id": "WFD-71",
            "text": "You must obtain permission from the copyright holder before publishing images."
        },
        {
            "id": "WFD-72",
            "text": "The university press publishes scholarly books and peer-reviewed journals."
        },
        {
            "id": "WFD-73",
            "text": "Dietary habits and physical activity strongly influence cardiovascular health."
        },
        {
            "id": "WFD-74",
            "text": "The history department offers specialized courses in medieval European civilization."
        },
        {
            "id": "WFD-75",
            "text": "Parking spaces on campus are limited and allocated on a first-come basis."
        },
        {
            "id": "WFD-76",
            "text": "Quantum computers can solve complex mathematical problems at unprecedented speeds."
        },
        {
            "id": "WFD-77",
            "text": "The accommodation office assists international students in finding suitable housing."
        },
        {
            "id": "WFD-78",
            "text": "Peer review ensures the quality and integrity of published scientific papers."
        },
        {
            "id": "WFD-79",
            "text": "Sustainable agriculture seeks to balance crop productivity with environmental conservation."
        },
        {
            "id": "WFD-80",
            "text": "The graduation ceremony will be broadcast live on the university website."
        },
        {
            "id": "WFD-81",
            "text": "Students must submit their research proposals to the department secretary before Friday."
        },
        {
            "id": "WFD-82",
            "text": "The university library has subscribed to several new international scientific journals."
        },
        {
            "id": "WFD-83",
            "text": "Economic growth in developing countries depends heavily on infrastructure investment."
        },
        {
            "id": "WFD-84",
            "text": "Please make sure you have saved all your files before logging off the computer."
        },
        {
            "id": "WFD-85",
            "text": "The introductory chemistry course includes both morning lectures and afternoon laboratory sessions."
        },
        {
            "id": "WFD-86",
            "text": "Climate change is causing severe droughts and unpredictable weather patterns across the globe."
        },
        {
            "id": "WFD-87",
            "text": "Undergraduate students are encouraged to participate in faculty research projects during summer."
        },
        {
            "id": "WFD-88",
            "text": "A preliminary bibliography is due two weeks before the final history paper."
        },
        {
            "id": "WFD-89",
            "text": "The archaeology team discovered ancient pottery fragments beneath the ruined temple wall."
        },
        {
            "id": "WFD-90",
            "text": "All laboratory equipment must be sterilized thoroughly after each biological experiment."
        },
        {
            "id": "WFD-91",
            "text": "Financial aid counselors are available to assist students with scholarship applications."
        },
        {
            "id": "WFD-92",
            "text": "The guest speaker will discuss the impact of artificial intelligence on modern healthcare."
        },
        {
            "id": "WFD-93",
            "text": "Renewable energy sources such as wind and solar are becoming increasingly cost-competitive."
        },
        {
            "id": "WFD-94",
            "text": "Please check the online noticeboard regularly for updates to the examination schedule."
        },
        {
            "id": "WFD-95",
            "text": "Urban planners must balance residential housing density with accessible public green spaces."
        },
        {
            "id": "WFD-96",
            "text": "The psychology department is conducting a long-term study on childhood language acquisition."
        },
        {
            "id": "WFD-97",
            "text": "Students who miss more than three tutorials will receive a lower participation grade."
        },
        {
            "id": "WFD-98",
            "text": "Digital archives allow historians to examine rare medieval manuscripts from anywhere in the world."
        },
        {
            "id": "WFD-99",
            "text": "Effective time management is essential for balancing academic coursework and part-time employment."
        },
        {
            "id": "WFD-100",
            "text": "The central bank announced that interest rates will remain unchanged for the next quarter."
        },
        {
            "id": "WFD-101",
            "text": "Marine biologists are monitoring the recovery of coral reefs inside the protected sanctuary."
        },
        {
            "id": "WFD-102",
            "text": "Your identification card is required to enter the main library building after eight o'clock."
        },
        {
            "id": "WFD-103",
            "text": "Statistical software packages can simplify the analysis of large demographic datasets."
        },
        {
            "id": "WFD-104",
            "text": "The new engineering building features state-of-the-art robotics laboratories and collaborative workspaces."
        },
        {
            "id": "WFD-105",
            "text": "Public health campaigns have significantly reduced smoking rates among young adults."
        },
        {
            "id": "WFD-106",
            "text": "Please review the safety guidelines carefully before operating any heavy machinery in the workshop."
        },
        {
            "id": "WFD-107",
            "text": "International trade agreements aim to reduce tariffs and promote cross-border investment."
        },
        {
            "id": "WFD-108",
            "text": "The literature seminar will examine nineteenth-century novels from a historical perspective."
        },
        {
            "id": "WFD-109",
            "text": "Adequate sleep is vital for consolidating new memories and maintaining cognitive focus."
        },
        {
            "id": "WFD-110",
            "text": "Students wishing to audit this lecture series must obtain written permission from the professor."
        },
        {
            "id": "WFD-111",
            "text": "Agricultural productivity has increased dramatically due to modern irrigation and selective breeding."
        },
        {
            "id": "WFD-112",
            "text": "The museum exhibition showcases contemporary sculptures alongside classical Renaissance paintings."
        },
        {
            "id": "WFD-113",
            "text": "All electrical appliances in the dormitory kitchens must pass an annual safety inspection."
        },
        {
            "id": "WFD-114",
            "text": "Biodiversity conservation requires international cooperation and strict environmental legislation."
        },
        {
            "id": "WFD-115",
            "text": "The student union organizes cultural festivals and recreational clubs throughout the academic year."
        },
        {
            "id": "WFD-116",
            "text": "Please cite all empirical data sources accurately using the standard departmental format."
        },
        {
            "id": "WFD-117",
            "text": "Advances in battery storage technology are accelerating the transition to electric vehicles."
        },
        {
            "id": "WFD-118",
            "text": "The sociology survey investigated how remote work affects household commuting patterns."
        },
        {
            "id": "WFD-119",
            "text": "Candidates for the master's degree must defend their thesis before an academic committee."
        },
        {
            "id": "WFD-120",
            "text": "Rising sea levels pose a severe threat to low-lying coastal cities and island nations."
        },
        {
            "id": "WFD-121",
            "text": "You can renew your borrowed library books online unless another student has reserved them."
        },
        {
            "id": "WFD-122",
            "text": "The architecture lecture focused on sustainable building materials and passive solar heating."
        },
        {
            "id": "WFD-123",
            "text": "Early diagnosis of chronic diseases improves patient outcomes and reduces hospital costs."
        },
        {
            "id": "WFD-124",
            "text": "Please turn off all cellular phones and electronic devices before entering the examination hall."
        },
        {
            "id": "WFD-125",
            "text": "Global supply chains have become more resilient following recent logistics disruptions."
        },
        {
            "id": "WFD-126",
            "text": "The astronomy club meets every Tuesday night on the rooftop of the physics building."
        },
        {
            "id": "WFD-127",
            "text": "Government subsidies can encourage homeowners to install rooftop solar photovoltaic panels."
        },
        {
            "id": "WFD-128",
            "text": "A comprehensive review of the existing literature should precede any empirical investigation."
        },
        {
            "id": "WFD-129",
            "text": "The campus bookstore offers both new and second-hand textbooks at discounted prices."
        },
        {
            "id": "WFD-130",
            "text": "Neuroscientists use functional magnetic resonance imaging to map brain activity during speech."
        },
        {
            "id": "WFD-131",
            "text": "All participants in the clinical trial must sign a written informed consent document."
        },
        {
            "id": "WFD-132",
            "text": "High-speed rail networks provide an environmentally friendly alternative to domestic flights."
        },
        {
            "id": "WFD-133",
            "text": "The economics tutorial will cover monetary policy, inflation targeting, and exchange rates."
        },
        {
            "id": "WFD-134",
            "text": "Please submit a digital copy of your assignment through the university learning portal."
        },
        {
            "id": "WFD-135",
            "text": "Forest restoration projects help absorb atmospheric carbon dioxide and prevent soil erosion."
        },
        {
            "id": "WFD-136",
            "text": "The university career center hosts mock interviews and resume writing workshops every month."
        },
        {
            "id": "WFD-137",
            "text": "Microscopic plastic particles have been detected in marine organisms across every ocean basin."
        },
        {
            "id": "WFD-138",
            "text": "Students majoring in foreign languages are strongly advised to study abroad for one semester."
        },
        {
            "id": "WFD-139",
            "text": "The research institute received a substantial federal grant to develop clean hydrogen fuel."
        },
        {
            "id": "WFD-140",
            "text": "Clear communication between team members is critical for completing complex engineering projects."
        },
        {
            "id": "WFD-141",
            "text": "The botany greenhouse contains hundreds of rare tropical plant species collected from rainforests."
        },
        {
            "id": "WFD-142",
            "text": "Tuition fees for the upcoming semester must be paid in full before registration closes."
        },
        {
            "id": "WFD-143",
            "text": "Behavioral economists study how psychological biases influence consumer financial decisions."
        },
        {
            "id": "WFD-144",
            "text": "The main auditorium is equipped with wireless microphones and high-definition projection screens."
        },
        {
            "id": "WFD-145",
            "text": "Antibiotic resistance has emerged as one of the most pressing challenges in modern medicine."
        },
        {
            "id": "WFD-146",
            "text": "Please proofread your essay carefully to eliminate spelling mistakes and grammatical errors."
        },
        {
            "id": "WFD-147",
            "text": "Ocean currents play a fundamental role in regulating regional temperatures across continents."
        },
        {
            "id": "WFD-148",
            "text": "The political science conference will address electoral reform and democratic accountability."
        },
        {
            "id": "WFD-149",
            "text": "Graduate teaching assistants hold weekly office hours to help students with homework problems."
        },
        {
            "id": "WFD-150",
            "text": "Automated manufacturing systems have increased industrial output while transforming labor demand."
        },
        {
            "id": "WFD-151",
            "text": "The campus shuttle service operates on a reduced timetable during university holidays."
        },
        {
            "id": "WFD-152",
            "text": "Archaeological excavations reveal that ancient cities had sophisticated water drainage networks."
        },
        {
            "id": "WFD-153",
            "text": "Students must complete a mandatory laboratory safety quiz before starting their experiments."
        },
        {
            "id": "WFD-154",
            "text": "Investments in early childhood education yield long-term social and economic benefits."
        },
        {
            "id": "WFD-155",
            "text": "The geology field trip will examine volcanic rock formations along the southern coastline."
        },
        {
            "id": "WFD-156",
            "text": "Peer review ensures that published academic articles meet rigorous standards of scholarship."
        },
        {
            "id": "WFD-157",
            "text": "Smart electricity grids use digital sensors to balance power generation and consumer demand."
        },
        {
            "id": "WFD-158",
            "text": "The university choir will perform a classical choral program in the chapel this Saturday."
        },
        {
            "id": "WFD-159",
            "text": "Protecting endangered wildlife habitats requires active engagement from local communities."
        },
        {
            "id": "WFD-160",
            "text": "Your final presentation should summarize your research question, methodology, and key findings."
        },
        {
            "id": "WFD-161",
            "text": "The medical school has partnered with local hospitals to expand clinical training placements."
        },
        {
            "id": "WFD-162",
            "text": "Fluctuations in global oil prices directly affect airline operating costs and ticket fares."
        },
        {
            "id": "WFD-163",
            "text": "Please return all reference dictionaries to the designated shelf after finishing your study session."
        },
        {
            "id": "WFD-164",
            "text": "Cognitive psychology explores how humans perceive, remember, and process complex information."
        },
        {
            "id": "WFD-165",
            "text": "The new environmental policy mandates a fifty percent reduction in industrial carbon emissions."
        }
    ],
    "hiw": [
        {
            "id": "HIW-01",
            "title": "Economic Globalization",
            "spokenAudio": "Economic globalization has connected international financial markets and accelerated cross-border trade. However, it has also magnified systemic volatility during unexpected geopolitical crises.",
            "writtenText": "Economic globalization has connected domestic financial markets and accelerated cross-border trade. However, it has also reduced systemic volatility during unexpected geopolitical crises.",
            "incorrectWords": [
                {
                    "index": 4,
                    "written": "domestic",
                    "spoken": "international"
                },
                {
                    "index": 15,
                    "written": "reduced",
                    "spoken": "magnified"
                }
            ]
        },
        {
            "id": "HIW-02",
            "title": "Solar Photovoltaic Efficiency",
            "spokenAudio": "Commercial solar panels convert solar radiation into clean electricity with rising efficiency. Recent manufacturing breakthroughs have significantly lowered production expenses across the industry.",
            "writtenText": "Commercial solar panels absorb solar radiation into clean electricity with rising efficiency. Recent manufacturing breakthroughs have significantly raised production expenses across the industry.",
            "incorrectWords": [
                {
                    "index": 3,
                    "written": "absorb",
                    "spoken": "convert"
                },
                {
                    "index": 17,
                    "written": "raised",
                    "spoken": "lowered"
                }
            ]
        },
        {
            "id": "HIW-03",
            "title": "Linguistic Endangered Languages",
            "spokenAudio": "Thousands of native languages are currently endangered due to rapid modernization. When a community abandons its mother tongue, invaluable cultural wisdom is permanently lost.",
            "writtenText": "Thousands of foreign languages are currently endangered due to rapid modernization. When a community defends its mother tongue, invaluable cultural wisdom is permanently lost.",
            "incorrectWords": [
                {
                    "index": 2,
                    "written": "foreign",
                    "spoken": "native"
                },
                {
                    "index": 14,
                    "written": "defends",
                    "spoken": "abandons"
                }
            ]
        },
        {
            "id": "HIW-04",
            "title": "Neuroscience of Memory",
            "spokenAudio": "Memory consolidation requires adequate rest following intensive cognitive learning. During slow-wave sleep, temporary neural connections are transferred to the cerebral cortex for permanent storage.",
            "writtenText": "Memory consolidation requires adequate exercise following intensive cognitive learning. During slow-wave sleep, temporary neural connections are transferred to the spinal cortex for permanent storage.",
            "incorrectWords": [
                {
                    "index": 4,
                    "written": "exercise",
                    "spoken": "rest"
                },
                {
                    "index": 19,
                    "written": "spinal",
                    "spoken": "cerebral"
                }
            ]
        },
        {
            "id": "HIW-05",
            "title": "Urban Mass Transit",
            "spokenAudio": "Expanding underground subway corridors reduces vehicular congestion in crowded metropolitan districts. Reliable public transit encourages citizens to leave private automobiles at home.",
            "writtenText": "Expanding underground highway corridors reduces vehicular congestion in crowded metropolitan districts. Reliable public transit discourages citizens to leave private automobiles at home.",
            "incorrectWords": [
                {
                    "index": 2,
                    "written": "highway",
                    "spoken": "subway"
                },
                {
                    "index": 14,
                    "written": "discourages",
                    "spoken": "encourages"
                }
            ]
        },
        {
            "id": "HIW-06",
            "title": "Marine Coral Reef Protection",
            "spokenAudio": "Warmer sea temperatures trigger severe coral bleaching across fragile tropical reefs. Protecting marine sanctuaries allows depleted fish populations to recover naturally without commercial interference.",
            "writtenText": "Warmer sea currents trigger severe coral bleaching across fragile tropical reefs. Destroying marine sanctuaries allows depleted fish populations to recover naturally without commercial interference.",
            "incorrectWords": [
                {
                    "index": 2,
                    "written": "currents",
                    "spoken": "temperatures"
                },
                {
                    "index": 11,
                    "written": "Destroying",
                    "spoken": "Protecting"
                }
            ]
        },
        {
            "id": "HIW-07",
            "title": "Agricultural Water Irrigation",
            "spokenAudio": "Modern precision agriculture utilizes underground drip irrigation to minimize water evaporation in arid climates. This targeted approach improves harvest quality while conserving municipal reservoirs.",
            "writtenText": "Modern precision agriculture utilizes underground overhead irrigation to minimize water pollution in arid climates. This targeted approach improves harvest quality while conserving municipal reservoirs.",
            "incorrectWords": [
                {
                    "index": 5,
                    "written": "overhead",
                    "spoken": "drip"
                },
                {
                    "index": 10,
                    "written": "pollution",
                    "spoken": "evaporation"
                }
            ]
        },
        {
            "id": "HIW-08",
            "title": "Antibiotic Stewardship",
            "spokenAudio": "Strict regulatory oversight of antimicrobial drugs prevents the rapid proliferation of resistant superbugs. Medical practitioners must avoid prescribing antibiotics for ordinary viral infections.",
            "writtenText": "Strict regulatory oversight of antimicrobial drugs promotes the rapid proliferation of resistant superbugs. Medical practitioners must encourage prescribing antibiotics for ordinary viral infections.",
            "incorrectWords": [
                {
                    "index": 6,
                    "written": "promotes",
                    "spoken": "prevents"
                },
                {
                    "index": 16,
                    "written": "encourage",
                    "spoken": "avoid"
                }
            ]
        },
        {
            "id": "HIW-09",
            "title": "Space Satellite Debris",
            "spokenAudio": "Decommissioned satellites orbiting Earth pose severe collision hazards for active telecommunication networks. Engineers are designing robotic grappling systems to capture and deorbit large space debris.",
            "writtenText": "Decommissioned satellites orbiting Earth pose minor collision hazards for active telecommunication networks. Engineers are designing robotic laser systems to capture and deorbit large space debris.",
            "incorrectWords": [
                {
                    "index": 5,
                    "written": "minor",
                    "spoken": "severe"
                },
                {
                    "index": 16,
                    "written": "laser",
                    "spoken": "grappling"
                }
            ]
        },
        {
            "id": "HIW-10",
            "title": "Renewable Battery Storage",
            "spokenAudio": "Large-scale battery facilities store excess electricity during sunny afternoons and discharge power during evening peak hours. This infrastructure balances intermittent renewable output across the national grid.",
            "writtenText": "Large-scale battery facilities store excess electricity during windy afternoons and discharge power during morning peak hours. This infrastructure balances intermittent renewable output across the national grid.",
            "incorrectWords": [
                {
                    "index": 7,
                    "written": "windy",
                    "spoken": "sunny"
                },
                {
                    "index": 13,
                    "written": "morning",
                    "spoken": "evening"
                }
            ]
        },
        {
            "id": "HIW-11",
            "title": "Circadian Light Exposure",
            "spokenAudio": "Artificial blue light emitted by electronic screens suppresses evening melatonin production and delays natural sleep onset. Neuroscientists recommend dimming household lighting two hours before bedtime.",
            "writtenText": "Artificial blue light emitted by electronic screens accelerates evening melatonin production and delays natural sleep onset. Neuroscientists recommend brightening household lighting two hours before bedtime.",
            "incorrectWords": [
                {
                    "index": 7,
                    "written": "accelerates",
                    "spoken": "suppresses"
                },
                {
                    "index": 18,
                    "written": "brightening",
                    "spoken": "dimming"
                }
            ]
        },
        {
            "id": "HIW-12",
            "title": "Keynesian Countercyclical Policy",
            "spokenAudio": "During severe economic recessions, consumer spending contracts sharply as households save precautionary cash. Governments can stabilize employment by funding large public infrastructure projects.",
            "writtenText": "During mild economic recessions, consumer spending contracts sharply as households save precautionary cash. Governments can stabilize employment by canceling large public infrastructure projects.",
            "incorrectWords": [
                {
                    "index": 1,
                    "written": "mild",
                    "spoken": "severe"
                },
                {
                    "index": 18,
                    "written": "canceling",
                    "spoken": "funding"
                }
            ]
        },
        {
            "id": "HIW-13",
            "title": "Subduction Zone Earthquakes",
            "spokenAudio": "Dense oceanic crust sinks beneath lighter continental plates along convergent tectonic boundaries. The immense frictional stress accumulated along these faults periodically triggers powerful earthquakes.",
            "writtenText": "Dense oceanic crust floats beneath lighter continental plates along convergent tectonic boundaries. The immense frictional stress accumulated along these faults periodically prevents powerful earthquakes.",
            "incorrectWords": [
                {
                    "index": 3,
                    "written": "floats",
                    "spoken": "sinks"
                },
                {
                    "index": 21,
                    "written": "prevents",
                    "spoken": "triggers"
                }
            ]
        },
        {
            "id": "HIW-14",
            "title": "Forest Mycorrhizal Networks",
            "spokenAudio": "Symbiotic fungal threads connect the root systems of neighboring trees beneath the forest floor. Mature canopy trees transfer surplus carbon and nitrogen to shaded seedlings.",
            "writtenText": "Symbiotic fungal threads sever the root systems of neighboring trees beneath the forest floor. Mature canopy trees transfer surplus carbon and nitrogen to sunlit seedlings.",
            "incorrectWords": [
                {
                    "index": 3,
                    "written": "sever",
                    "spoken": "connect"
                },
                {
                    "index": 23,
                    "written": "sunlit",
                    "spoken": "shaded"
                }
            ]
        },
        {
            "id": "HIW-15",
            "title": "Ocean Acidification Chemistry",
            "spokenAudio": "Global oceans absorb roughly one-third of anthropogenic carbon dioxide emissions from the atmosphere. This chemical reaction lowers seawater pH and hinders shellfish from building calcium shells.",
            "writtenText": "Global oceans release roughly one-third of anthropogenic carbon dioxide emissions from the atmosphere. This chemical reaction raises seawater pH and hinders shellfish from building calcium shells.",
            "incorrectWords": [
                {
                    "index": 2,
                    "written": "release",
                    "spoken": "absorb"
                },
                {
                    "index": 16,
                    "written": "raises",
                    "spoken": "lowers"
                }
            ]
        },
        {
            "id": "HIW-16",
            "title": "Desalination Brine Management",
            "spokenAudio": "Reverse osmosis desalination plants supply vital drinking water to arid coastal cities. However, discharging concentrated salty brine back into shallow bays can harm benthic marine life.",
            "writtenText": "Reverse osmosis desalination plants supply vital drinking water to humid coastal cities. However, discharging diluted salty brine back into shallow bays can harm benthic marine life.",
            "incorrectWords": [
                {
                    "index": 9,
                    "written": "humid",
                    "spoken": "arid"
                },
                {
                    "index": 14,
                    "written": "diluted",
                    "spoken": "concentrated"
                }
            ]
        },
        {
            "id": "HIW-17",
            "title": "Central Bank Independence",
            "spokenAudio": "Economists emphasize that central banks should operate independently from short-term political pressures. Manipulating interest rates before national elections frequently triggers runaway price inflation.",
            "writtenText": "Economists emphasize that central banks should operate dependently from short-term political pressures. Manipulating interest rates before national elections frequently triggers runaway price deflation.",
            "incorrectWords": [
                {
                    "index": 7,
                    "written": "dependently",
                    "spoken": "independently"
                },
                {
                    "index": 22,
                    "written": "deflation",
                    "spoken": "inflation"
                }
            ]
        },
        {
            "id": "HIW-18",
            "title": "Arctic Permafrost Methane",
            "spokenAudio": "Billions of tons of ancient organic carbon remain locked inside frozen Arctic tundra soils. As global temperatures rise, thawing microbes decompose this matter and release methane gas.",
            "writtenText": "Billions of tons of ancient organic carbon remain locked inside tropical Arctic tundra soils. As global temperatures fall, thawing microbes decompose this matter and release methane gas.",
            "incorrectWords": [
                {
                    "index": 10,
                    "written": "tropical",
                    "spoken": "frozen"
                },
                {
                    "index": 17,
                    "written": "fall",
                    "spoken": "rise"
                }
            ]
        },
        {
            "id": "HIW-19",
            "title": "Comparative Advantage Specialization",
            "spokenAudio": "Nations maximize economic output when they specialize in industries with the lowest opportunity cost. Imposing high protective tariffs generally increases retail prices for domestic consumers.",
            "writtenText": "Nations minimize economic output when they specialize in industries with the lowest opportunity cost. Imposing high protective tariffs generally reduces retail prices for domestic consumers.",
            "incorrectWords": [
                {
                    "index": 1,
                    "written": "minimize",
                    "spoken": "maximize"
                },
                {
                    "index": 19,
                    "written": "reduces",
                    "spoken": "increases"
                }
            ]
        },
        {
            "id": "HIW-20",
            "title": "Transit-Oriented Urban Planning",
            "spokenAudio": "Concentrating high-density apartments and retail shops near railway stations reduces suburban car dependency. Walkable transit corridors lower metropolitan carbon emissions and encourage daily physical exercise.",
            "writtenText": "Concentrating high-density apartments and retail shops near railway stations increases suburban car dependency. Walkable transit corridors raise metropolitan carbon emissions and encourage daily physical exercise.",
            "incorrectWords": [
                {
                    "index": 9,
                    "written": "increases",
                    "spoken": "reduces"
                },
                {
                    "index": 16,
                    "written": "raise",
                    "spoken": "lower"
                }
            ]
        },
        {
            "id": "HIW-21",
            "title": "Clinical Trial Placebo Controls",
            "spokenAudio": "Double-blind randomized trials compare experimental medications against inert sugar pills. Neither the patients nor the attending physicians know who belongs to the active treatment group.",
            "writtenText": "Double-blind randomized trials compare experimental medications against potent sugar pills. Neither the patients nor the attending physicians know who belongs to the passive treatment group.",
            "incorrectWords": [
                {
                    "index": 7,
                    "written": "potent",
                    "spoken": "inert"
                },
                {
                    "index": 22,
                    "written": "passive",
                    "spoken": "active"
                }
            ]
        },
        {
            "id": "HIW-22",
            "title": "Solid-State Battery Safety",
            "spokenAudio": "Next-generation solid-state batteries replace flammable liquid electrolytes with stable ceramic conductors. This engineering breakthrough eliminates fire hazards and increases driving range for electric cars.",
            "writtenText": "Next-generation solid-state batteries replace flammable liquid electrolytes with volatile ceramic conductors. This engineering breakthrough multiplies fire hazards and increases driving range for electric cars.",
            "incorrectWords": [
                {
                    "index": 8,
                    "written": "volatile",
                    "spoken": "stable"
                },
                {
                    "index": 14,
                    "written": "multiplies",
                    "spoken": "eliminates"
                }
            ]
        },
        {
            "id": "HIW-23",
            "title": "Dendrochronology Tree Rings",
            "spokenAudio": "Scientists reconstruct prehistoric drought cycles by measuring the annual growth rings of ancient pine trees. Wide rings indicate rainy growing seasons, whereas narrow rings record severe droughts.",
            "writtenText": "Scientists reconstruct prehistoric drought cycles by measuring the monthly growth rings of ancient pine trees. Wide rings indicate dry growing seasons, whereas narrow rings record severe droughts.",
            "incorrectWords": [
                {
                    "index": 8,
                    "written": "monthly",
                    "spoken": "annual"
                },
                {
                    "index": 18,
                    "written": "dry",
                    "spoken": "rainy"
                }
            ]
        },
        {
            "id": "HIW-24",
            "title": "Microplastic Marine Accumulation",
            "spokenAudio": "Synthetic clothing fibers wash through municipal sewage treatment plants and enter coastal waters. Filter-feeding plankton ingest these microscopic plastics and transfer toxins up the food chain.",
            "writtenText": "Natural clothing fibers wash through municipal sewage treatment plants and enter coastal waters. Filter-feeding plankton expel these microscopic plastics and transfer toxins up the food chain.",
            "incorrectWords": [
                {
                    "index": 0,
                    "written": "Natural",
                    "spoken": "Synthetic"
                },
                {
                    "index": 15,
                    "written": "expel",
                    "spoken": "ingest"
                }
            ]
        },
        {
            "id": "HIW-25",
            "title": "Gothic Cathedral Buttresses",
            "spokenAudio": "Medieval architects introduced external flying buttresses to support the heavy stone ceilings of Gothic cathedrals. Relieving wall pressure allowed builders to install massive stained-glass windows.",
            "writtenText": "Medieval architects introduced internal flying buttresses to support the heavy wooden ceilings of Gothic cathedrals. Relieving wall pressure allowed builders to install massive stained-glass windows.",
            "incorrectWords": [
                {
                    "index": 3,
                    "written": "internal",
                    "spoken": "external"
                },
                {
                    "index": 10,
                    "written": "wooden",
                    "spoken": "stone"
                }
            ]
        },
        {
            "id": "HIW-26",
            "title": "Bacteriophage Precision Therapy",
            "spokenAudio": "Bacteriophages are specialized viruses that infect and destroy harmful pathogenic bacteria. Unlike broad-spectrum chemical antibiotics, phage treatments leave beneficial human gut flora unharmed.",
            "writtenText": "Bacteriophages are specialized bacteria that infect and destroy harmful pathogenic bacteria. Unlike broad-spectrum chemical antibiotics, phage treatments leave beneficial human gut flora damaged.",
            "incorrectWords": [
                {
                    "index": 3,
                    "written": "bacteria",
                    "spoken": "viruses"
                },
                {
                    "index": 22,
                    "written": "damaged",
                    "spoken": "unharmed"
                }
            ]
        },
        {
            "id": "HIW-27",
            "title": "Vertical Farming Electricity Costs",
            "spokenAudio": "Indoor vertical farms grow leafy vegetables using hydroponic nutrient mist and stacked artificial lighting. While water consumption drops dramatically, high electricity bills remain a major bottleneck.",
            "writtenText": "Outdoor vertical farms grow leafy vegetables using hydroponic nutrient mist and stacked artificial lighting. While water consumption rises dramatically, high electricity bills remain a major bottleneck.",
            "incorrectWords": [
                {
                    "index": 0,
                    "written": "Outdoor",
                    "spoken": "Indoor"
                },
                {
                    "index": 17,
                    "written": "rises",
                    "spoken": "drops"
                }
            ]
        },
        {
            "id": "HIW-28",
            "title": "Tidal Stream Turbine Ecology",
            "spokenAudio": "Unlike intermittent wind power, oceanic tidal currents follow predictable lunar gravitational cycles. Submerged seabed turbines capture kinetic water energy without blocking migratory fish routes.",
            "writtenText": "Unlike intermittent wind power, oceanic tidal currents follow unpredictable lunar gravitational cycles. Submerged seabed turbines waste kinetic water energy without blocking migratory fish routes.",
            "incorrectWords": [
                {
                    "index": 8,
                    "written": "unpredictable",
                    "spoken": "predictable"
                },
                {
                    "index": 15,
                    "written": "waste",
                    "spoken": "capture"
                }
            ]
        },
        {
            "id": "HIW-29",
            "title": "Sleep Spindles and Memory",
            "spokenAudio": "Bursts of brain wave activity during non-REM sleep transfer newly learned facts into long-term cortical storage. Chronic sleep deprivation impairs academic retention and heightens emotional stress.",
            "writtenText": "Bursts of brain wave activity during non-REM sleep erase newly learned facts into long-term cortical storage. Chronic sleep deprivation improves academic retention and heightens emotional stress.",
            "incorrectWords": [
                {
                    "index": 8,
                    "written": "erase",
                    "spoken": "transfer"
                },
                {
                    "index": 19,
                    "written": "improves",
                    "spoken": "impairs"
                }
            ]
        },
        {
            "id": "HIW-30",
            "title": "Carbon Border Tariffs",
            "spokenAudio": "Unilateral domestic carbon taxes can prompt heavy manufacturers to relocate factories to countries with lax regulations. Levying border tariffs on carbon-intensive imports prevents this industrial leakage.",
            "writtenText": "Unilateral domestic carbon taxes can prompt heavy manufacturers to relocate factories to countries with strict regulations. Levying border subsidies on carbon-intensive imports prevents this industrial leakage.",
            "incorrectWords": [
                {
                    "index": 14,
                    "written": "strict",
                    "spoken": "lax"
                },
                {
                    "index": 18,
                    "written": "subsidies",
                    "spoken": "tariffs"
                }
            ]
        },
        {
            "id": "HIW-31",
            "title": "Acoustic Smog in Oceans",
            "spokenAudio": "Underwater noise from commercial container ships and seismic oil surveys masks long-range whale communication. Engineering quieter ship propellers can substantially reduce acoustic stress on marine mammals.",
            "writtenText": "Underwater noise from commercial container ships and seismic oil surveys amplifies long-range whale communication. Engineering louder ship propellers can substantially reduce acoustic stress on marine mammals.",
            "incorrectWords": [
                {
                    "index": 10,
                    "written": "amplifies",
                    "spoken": "masks"
                },
                {
                    "index": 15,
                    "written": "louder",
                    "spoken": "quieter"
                }
            ]
        },
        {
            "id": "HIW-32",
            "title": "The Paradox of Retail Choice",
            "spokenAudio": "Offering shoppers dozens of nearly identical product variations frequently triggers cognitive overload and decision paralysis. Curating a concise selection of options significantly boosts customer satisfaction.",
            "writtenText": "Offering shoppers dozens of nearly identical product variations rarely triggers cognitive overload and decision paralysis. Curating a chaotic selection of options significantly boosts customer satisfaction.",
            "incorrectWords": [
                {
                    "index": 8,
                    "written": "rarely",
                    "spoken": "frequently"
                },
                {
                    "index": 17,
                    "written": "chaotic",
                    "spoken": "concise"
                }
            ]
        },
        {
            "id": "HIW-33",
            "title": "Perovskite Tandem Solar Panels",
            "spokenAudio": "Layering synthetic perovskite crystals over traditional silicon wafers allows solar panels to capture both blue and red wavelengths. Tandem photovoltaic cells achieve conversion efficiencies above thirty percent.",
            "writtenText": "Layering synthetic perovskite crystals over traditional copper wafers allows solar panels to reflect both blue and red wavelengths. Tandem photovoltaic cells achieve conversion efficiencies above thirty percent.",
            "incorrectWords": [
                {
                    "index": 6,
                    "written": "copper",
                    "spoken": "silicon"
                },
                {
                    "index": 12,
                    "written": "reflect",
                    "spoken": "capture"
                }
            ]
        },
        {
            "id": "HIW-34",
            "title": "Regenerative No-Till Farming",
            "spokenAudio": "Mechanical plowing disrupts soil structure and releases stored subterranean carbon into the atmosphere. No-till seeding combined with cover crops rebuilds organic topsoil and improves drought resilience.",
            "writtenText": "Mechanical plowing preserves soil structure and releases stored subterranean carbon into the atmosphere. No-till seeding combined with cover crops depletes organic topsoil and improves drought resilience.",
            "incorrectWords": [
                {
                    "index": 2,
                    "written": "preserves",
                    "spoken": "disrupts"
                },
                {
                    "index": 19,
                    "written": "depletes",
                    "spoken": "rebuilds"
                }
            ]
        },
        {
            "id": "HIW-35",
            "title": "High-Speed Rail Corridors",
            "spokenAudio": "High-speed electric trains connect downtown city centers directly and avoid airport security delays. Replacing short-haul domestic flights with rail travel dramatically cuts transport carbon emissions.",
            "writtenText": "High-speed diesel trains connect downtown city centers directly and avoid airport security delays. Replacing short-haul domestic flights with rail travel dramatically increases transport carbon emissions.",
            "incorrectWords": [
                {
                    "index": 1,
                    "written": "diesel",
                    "spoken": "electric"
                },
                {
                    "index": 21,
                    "written": "increases",
                    "spoken": "cuts"
                }
            ]
        }
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
