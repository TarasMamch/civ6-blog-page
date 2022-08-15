const { Leader } = require('../models')

const leaderData = [
    {
        name: "Alexander",
        icon: "../imgs/Alexander.webp",
        bio: "Alexander III (20/21 July 356 BC - 10/11 June 323 BC), more commonly known as Alexander the Great, was king of Macedon from 336 BC until his death, and is considered one of history's most successful generals and conquerors, believed to have never been defeated in battle.",
        leader_bonus_name: "To the World's End",
        leader_bonus: "Macedonian cities never incur war weariness. All military units heal completely when a city with a Wonder is captured. Gain the Hetairoi unique unit with Horseback Riding."
    },
    {
        name: "Amanitore",
        icon: "../imgs/Amanitore.webp",
        bio: "Amanitore (? - c. 20 CE) was a Kandake of the ancient Kushitic Kingdom of Meroë, whose reign was marked by extensive building and restoration projects of temples, pyramids and reservoirs. ",
        leader_bonus_name: "Kandake of Meroë",
        leader_bonus: "+20% Production towards Districts, increasing to +40% Production if there is a Nubian Pyramid adjacent to the City Center."
    },
    {
        name: "Ambiorix",
        icon: "../imgs/Ambiorix.webp",
        bio: "Ambiorix (? - 53 BC) was a king of the Gallic Eburones tribe in northeastern Gaul (now Belgium), who gained renown for leading the resistance against the Roman occupation forces of Julius Caesar.",
        leader_bonus_name: "King of the Eburones",
        leader_bonus: "Receives Culture equal to 20% of the Production cost after training a non-civilian unit. Melee, ranged and anti-cavalry units receive +2 Combat Strength for each adjacent military unit."
    },
    {
        name: "Bà Triệu",
        icon: "../imgs/batrieu.webp",
        bio: "Triệu Thị Trinh (8 November 226 - 4 April 248), better known by the honorific Bà Triệu or Lady Triệu, was a Vietnamese warrior who resisted the Eastern Wu occupation of Vietnam and became a popular folk hero in Vietnamese culture. ",
        leader_bonus_name: "Drive Out The Aggressors",
        leader_bonus: "All units gain +5 Strength Combat Strength when fighting in Rainforest, Marsh, and Woods tiles, and +1 Movement Movement if they start their turn there. Both of these bonuses are doubled in tiles inside Vietnamese territory."
    },
    {
        name: "Basil II",
        icon: "../imgs/Basil_II.webp",
        bio: "Basil II (c. 958 - 15 December 1025), also known as the Bulgar-Slayer for his subjugation of the first Bulgarian empire, was the senior Byzantine emperor from 976 to his death, and before that, a junior emperor after his father's death in 963.",
        leader_bonus_name: "Porphyrogénnētos",
        leader_bonus: "Heavy and light cavalry units deal full damage when attacking cities following the same Religion as Byzantium. Gain the Tagma unique unit with Divine Right."
    },
    {
        name: "Catherine de Medici (Black Queen)",
        icon: "../imgs/Catherine_de_Medici_bq.webp",
        bio: "Catherine de Medici (13 April 1519 - 5 January 1589) was an Italian noblewoman who was queen consort of France from 1547 until 1559, and queen mother to three different kings from 1559 until her death, during which she exerted great influence over France.",
        leader_bonus_name: "Catherine's Flying Squadron",
        leader_bonus: "+1 level of Diplomatic Visibility with every encountered civilization. Receives a free Spy (and extra Spy capacity) with Castles. All Spies start as Agents with a free promotion."
    },
    {
        name: "Catherine de Medici (Magnificence)",
        icon: "../imgs/Catherine_de_Medici_mag.webp",
        bio: "Catherine de Medici (13 April 1519 - 5 January 1589) was an Italian noblewoman who was Queen consort of France from 1547 until 1559, and Queen mother to three different kings from 1559 until her death, during which she exerted great influence over France.",
        leader_bonus_name: "Catherine’s Magnificences",
        leader_bonus: "+2 Culture for improved Luxury resources adjacent to a Theater Square or Château. Cities with a Theater Square gain the unique Court Festival project, which upon completion grants Culture and Tourism based on the number of excess copies of the Luxury resources that France possesses."
    },
    {
        name: "Chandragupta",
        icon: "../imgs/Chandragupta.webp",
        bio: "Chandragupta Maurya (340 – 293 BC) was the founder of the Maurya Empire in ancient India, over which he reigned from 321 to 297 BC, when he abdicated to become a Jain monk.",
        leader_bonus_name: "Arthashastra",
        leader_bonus: "Can declare a War of Territorial Expansion with Military Training, instead of Mobilization. +2 Movement and +5 Combat Strength for all units for the next 10 turns after declaring a War of Territorial Expansion."
    },
    {
        name: "Cleopatra",
        icon: "../imgs/Cleopatra.webp",
        bio: "Cleopatra VII Philopator (69 – 12 August 30 BC), more commonly known as just Cleopatra, was the last active pharaoh of Ptolemaic Egypt, and a key figure in the civil war that led to the end of the Roman Republic and the start of the Roman Empire.",
        leader_bonus_name: "Mediterranean's Bride",
        leader_bonus: "International Trade Routes grant +4 Gold. Trade Routes sent to Egypt from other civilizations provide +2 Food for them and +2 Gold for Egypt. +100% Alliance Points from trading with allies."
    },
    {
        name: "Cyrus",
        icon: "../imgs/Cyrus.webp",
        bio: "Cyrus II (c. 600 – 530 BC), commonly known as Cyrus the Great or Cyrus the Elder, was the founder of the Achaemenid Empire (550 - 330 BC), which at the time was the largest empire in history.",
        leader_bonus_name: "Fall of Babylon",
        leader_bonus: "+2 Movement for all units for the next 10 turns after declaring a Surprise War. Declaring a Surprise War only counts as a Formal War for the purpose of Grievances and war weariness. Occupied cities have no penalties to their yields. +5 Loyalty per turn in occupied cities with a garrisoned unit."
    },
    {
        name: "Dido",
        icon: "../imgs/Dido.webp",
        bio: "Dido, also known as Elissa, was, according to the Aeneid, the legendary first queen of Carthage, which she founded after fleeing the Phoenician city of Tyre when her husband was murdered by king Pygmalion.",
        leader_bonus_name: "Founder of Carthage",
        leader_bonus: "Cities with a Cothon gain the unique Move Capital project, which moves the Phoenician Capital to that city. Gains +1 Trade Route capacity after building the Government Plaza or any Government Plaza building. +50% Production towards Districts in the city with the Government Plaza."
    },
    {
        name: "Eleanor of Aquitaine",
        icon: "../imgs/Eleanor_of_Aquitaine.webp",
        bio: "Eleanor of Aquitaine (c. 1122 – 1 April 1204) was duchess of Aquitaine, queen consort of both France and England, and queen mother of the latter twice, and is widely considered to have been one of the wealthiest and most powerful women in Europe during the Middle Ages.",
        leader_bonus_name: "Court of Love",
        leader_bonus: "Each Great Work in her cities causes foreign cities within 9 tiles to lose 1 Loyalty per turn. Any foreign city that leaves its civilization due to loss of Loyalty and is receiving the most Loyalty pressure from Eleanor instantly joins her empire, instead of becoming a Free City."
    },
    {
        name: "Frederick Barbarossa",
        icon: "../imgs/Frederick_Barbarossa.webp",
        bio: "Frederick I (1122 – 10 June 1190), better known as Frederick Barbarossa, a nickname given to him by the Italians he often warred with, was Holy Roman Emperor from 1155 until his death.",
        leader_bonus_name: "Holy Roman Emperor",
        leader_bonus: "Gains an additional Military policy slot in all Governments. +7 Combat Strength for all units when fighting city-states and their units."
    },
    {
        name: "Gandhi",
        icon: "../imgs/Gandhi.webp",
        bio: "Mohandas Gandhi (2 October 1869 – 30 January 1948), better known by the honorific Mahatma, meaning 'Great Soul,' was an Indian lawyer and the ideological leader of the Indian independence movement, and is considered the spiritual father of modern India.",
        leader_bonus_name: "Satyagraha",
        leader_bonus: "+5 Faith for each met civilization (including India) that has founded a Religion and is not at war. Enemies receive double war weariness from fighting against Gandhi."
    },
    {
        name: "Genghis Khan",
        icon: "../imgs/Genghis_Khan.webp",
        bio: "Genghis Khan (c. 1162 – 18 August 1227), born Temüjin, was the Great Khan and founder of the Mongol Empire, which became the largest contiguous empire in history after his death.",
        leader_bonus_name: "Mongol Horde",
        leader_bonus: "Cavalry class units gain +3 Combat Strength and have a chance to capture defeated cavalry class enemy units."
    },
    {
        name: "Gilgamesh",
        icon: "../imgs/Gilgamesh.webp",
        bio: "Gilgamesh is the main character of the Epic of Gilgamesh, an Akkadian poem based on several earlier Sumerian stories, which described him as a demigod with superhuman strength and the king of the Sumerian city-state of Uruk. Most historians agree that the character was likely based on a historical king of Uruk, who probably ruled sometime between 2800 and 2500 BC and was later deified.",
        leader_bonus_name: "Adventures of Enkidu",
        leader_bonus: "May declare war on any civilization at war with an ally without warmonger penalties. When at war with a common enemy, Sumerian and allied units share pillage rewards and combat experience if within 5 tiles of each other. Earn Alliance Points per-turn if both civilizations are at war with the same foe. When fighting a common enemy, Gilgamesh and his allies share a +5 Combat Strength bonus."
    },
    {
        name: "Gitarja",
        icon: "../imgs/Gitarja.webp",
        bio: "Dyah Gitarja (c. 1309 – ?) was a Javanese queen regent and the third monarch of the Majapahit empire, reigning from 1328 to 1350, which she greatly expanded with the help of her prime minister Gajah Mada.",
        leader_bonus_name: "Exalted Goddess of the Three Worlds",
        leader_bonus: "May purchase naval units with Faith. Religious units pay no movement cost to embark or disembark. City Centers adjacent to Coast or Lake tiles gain +2 Faith."
    },
    {
        name: "Gorgo",
        icon: "../imgs/Gorgo.webp",
        bio: "Gorgo (c. 495 – 429 BC) was a queen of Sparta, daughter of king Cleomenes I, wife of king Leonidas I and mother to king Pleistarchus. She is notably one of the few female historical figures named by Herodotus, and was known for her great political judgement and wisdom.",
        leader_bonus_name: "Thermopylae",
        leader_bonus: "Killing a unit provides Culture equal to 50% of its Combat Strength. All units gain +1 Combat Strength for each active Military Policy card in the current government."
    },
    {
        name: "Hammurabi",
        icon: "../imgs/Hammurabi.webp",
        bio: "Hammurabi (c. 1810 – c. 1750 BC) was the sixth king of Babylon, reigning from 1792 BC until his death, and is best known for unifying almost all of Mesopotamia under Babylonian rule and creating one of the first known codes of laws in human history.",
        leader_bonus_name: "Ninu Ilu Sirum",
        leader_bonus: "Upon building each type of specialty District, except the Government Plaza, for the first time, instantly receives the building with the lowest Production cost that can be built in that district. Upon building any other district for the first time, receives a free Envoy."
    },
    {
        name: "Harald Hardrada",
        icon: "../imgs/Harald_Hardrada.webp",
        bio: "Harald Sigurdsson (c. 1015 – 25 September 1066), also known as Harald III or by his epithet Harald Hardrada (roughly meaning 'hard ruler'), was King of Norway from 1046 until his death, also known for leading the Byzantine Varangian Guard, and for his invasion and attempted takeover of England against Harold Godwinson. ",
        leader_bonus_name: "Thunderbolt of the North",
        leader_bonus: "+50% Production toward naval melee units. Naval melee units gain the ability to perform coastal raids. Pillaging and coastal raiding grant Science, in addition to Gold, for Mines, and Culture, in addition to Faith, for Quarries, Pastures, Plantations, and Camps. Gains the Viking Longship unique unit with Sailing."
    },
    {
        name: "Hojo Tokimune",
        icon: "../imgs/Hojo_Tokimune.webp",
        bio: "Hojo Tokimune (5 June 1251 – 20 April 1284) was the eighth shikken of the Kamakura shogunate, renowned for twice repelling the Mongols in their attempted invasions of Japan, as well as fostering the spread of Zen Buddhism in Japan.",
        leader_bonus_name: "Divine Wind",
        leader_bonus: " +5 Combat Strength for land units and naval units fighting on coastal and shallow water tiles. Encampment, Holy Site and Theater Square districts are built in half the time. Districts, improvements and units are immune to damage from Hurricanes. +100% damage from Hurricanes in Japanese territory to civilizations at war with Japan."
    },
    {
        name: "Jadwiga",
        icon: "../imgs/Jadwiga.webp",
        bio: "Jadwiga (1373 – 17 July 1399), anglicized as Hedwig, was 'King' of Poland from 1384 until her death. Her marriage to Jogaila, Grand Duke of Lithuania, led to the creation of the Polish-Lithuanian Commonwealth, as well as the spread of Christianity into East Central Europe.",
        leader_bonus_name: "Lithuanian Union",
        leader_bonus: "Taking territory from a foreign city with a Culture Bomb converts it to Poland's religion. Relics grant +4 Gold, +2 Culture and +2 Faith. Holy Sites receive a +1 adjacency bonus from districts, instead of +0.5."
    },
    {
        name: "Jayavarman VII",
        icon: "../imgs/Jayavarman_VII.webp",
        bio: "Jayavarman VII (c. 1123 – c. 1218) was king of the Khmer empire from approximately 1181 until his death, renowned for repelling an invasion by, and later conquering, the kingdom of Champa, as well as significantly helping spread Buddhism in Cambodia.",
        leader_bonus_name: "Monasteries of the King",
        leader_bonus: "Holy Sites grant Food equal to their adjacency bonus, receive a +2 adjacency bonus from Rivers, grant +2 Housing if built next to a River, and trigger a Culture Bomb when built, claiming surrounding tiles."
    },
    {
        name: "João III",
        icon: "../imgs/Joao_II.webp",
        bio: "João III (7 June 1502 – 11 June 1557), also known as the Pious, was King of Portugal from 13 December 1521 until his death. He is known for his expansion of the Portuguese Empire, starting the colonization of Brazil and establishing new trading posts in Africa, India, China, Japan and Southeast Asia.",
        leader_bonus_name: "Porta do Cerco",
        leader_bonus: "+1 Sight for all units. Meeting another civilization grants +1 Trade Route capacity. Gains Open Borders with all city-states."
    },
    {
        name: "John Curtin",
        icon: "../imgs/John_Curtin.webp",
        bio: "John Curtin (8 January 1885 – 5 July 1945) was the 14th Prime Minister of Australia, serving from 1941 to 1945 and dying just before the end of World War II, during which he was instrumental in directing the country's war effort against Japanese aggression in the Pacific.",
        leader_bonus_name: "Citadel of Civilization",
        leader_bonus: "+100% Production in all cities for the next 10 turns after being declared war upon or liberating a city."
    },
    {
        name: "Kristina",
        icon: "../imgs/Kristina.webp",
        bio: "Kristina (18 December 1626 – 19 April 1689) was reigning Queen of Sweden from 1632 until her abdication in 1654. She was one of the most learned women of the 17th century, with an interest in philosophy, science and art, and sparked controversy during her times due to her masculine dressing and unconventional lifestyle.",
        leader_bonus_name: "Minerva of the North",
        leader_bonus: "Buildings with at least three Great Work slots and wonders with at least two Great Work slots are automatically themed when all slots are filled. Gains the Queen's Bibliotheque unique building in the Government Plaza."
    },
    {
        name: "Kublai Khan",
        icon: "../imgs/Kublai_Khan.webp",
        bio: "Kublai Khan (23 September 1215 – 18 February 1294), also known as Emperor Shizu of Yuan, was the fifth Khagan of the Mongol Empire, from 1260 until his death. He also founded the Yuan dynasty in 1271, following his conquest of China, and ruled as the first Yuan Emperor until his death.",
        leader_bonus_name: "Gerege",
        leader_bonus: "Gains an additional Economic policy slot in all Governments. Gains a random Eureka and Inspiration upon first establishing a Trading Post in another major civilization's city."
    },
    {
        name: "Kupe",
        icon: "../imgs/Kupe.webp",
        bio: "Kupe was a 10th-century figure who, according to some sources of Māori oral history and mythology, discovered and first settled the North island of Aotearoa (New Zealand).",
        leader_bonus_name: "Kupe's Voyage",
        leader_bonus: "Starts the game in the Ocean. +2 Science and +2 Culture per turn before the first city is settled. The first settled city receives a free Builder and +1 Population. The Palace grants +3 Housing and +1 Amenity."
    },
    {
        name: "Lady Six Sky",
        icon: "../imgs/Lady_Six_Sky.webp",
        bio: "Lady Six Sky (? – 10/11 February 741), also known as Wak-Chanil-Ahau, was a Mayan queen who ruled the city-state of Naranjo from 682 until her death, expanding its power and influence through a series of military campaigns against other nearby city-states.",
        leader_bonus_name: "Ix Mutal Ajaw",
        leader_bonus: "Non-Capital cities within 6 tiles of the Capital gain +10% to all yields and receive a Builder when founded, while cities more than 6 tiles away receive -15% to all yields. +5 Combat Strength for all units within six tiles of the Mayan Capital."
    },
    {
        name: "Lautaro",
        icon: "../imgs/Lautaro.webp",
        bio: "Lautaro (c. 1534 – 29 April 1557), also known as Leftraru, was a young Mapuche toqui known for leading the indigenous resistance against the Spanish conquest of Chile.",
        leader_bonus_name: "Swift Hawk",
        leader_bonus: "+10 Combat Strength when fighting civilizations that are in a Golden or Heroic Age, or Free Cities. Defeating an enemy unit within the borders of an enemy city causes that city to lose 20 Loyalty, or 40 Loyalty if that civilization is in a Golden or Heroic Age."
    },
    {
        name: "Mansa Musa",
        icon: "../imgs/Mansa_Musa.webp",
        bio: "Musa I (c. 1280 – 1337), better known as Mansa Musa, was the tenth mansa of the Mali Empire, and is widely considered to have been the wealthiest person in known history (his wealth was estimated in 2016 to be around $400 billion when adjusted for inflation).",
        leader_bonus_name: "Sahel Merchants",
        leader_bonus: "International Trade Routes gain +1 Gold for every flat Desert tile in the sending city. Entering a Golden Age permanently grants +1 Trade Route capacity."
    },
    {
        name: "Matthias Corvinus",
        icon: "../imgs/Matthias_Corvinus.webp",
        bio: "Matthias I (23 February 1443 – 6 April 1490), commonly known as Matthias Corvinus, was King of Hungary and Croatia from 1458 until his death. He is known for his creation of the Black Army, one of Europe's first professional standing armies, as well as his patronage of art, science and literature.",
        leader_bonus_name: "Raven King",
        leader_bonus: "Levied city-state units gain +2 Movement and +5 Combat Strength, and can be upgraded at a 75% discount in Gold and resources. Levying troops from a city-state grants 2 Envoys with that city-state. Gains the Black Army unique unit with Castles."
    },
    {
        name: "Menelik II",
        icon: "../imgs/Menelik_II.webp",
        bio: "Menelik II (17 August 1844 – 12 December 1913), baptized as Sahle Maryam, was Emperor of Ethiopia from 1889 to his death. He is renowned for his territorial expansion and modernization of Ethiopia, and particularly for his victory in the First Italo-Ethiopian War, which secured Ethiopia's independence from European imperialism.",
        leader_bonus_name: "Council of Ministers",
        leader_bonus: "Ethiopian cities founded on Hills receive Science and Culture equal to 15% of their Faith output. +4 Combat Strength for all units when fighting on Hills."
    },
    {
        name: "Montezuma",
        icon: "../imgs/Montezuma.webp",
        bio: "Montezuma I (c. 1398 AD – 1469 AD) was the fifth king of Tenochtitlan and the second Aztec emperor, who greatly expanded Aztec territory and consolidated Tenochtitlan's supremacy as the dominant partner over Texcoco and Tlacopan in the Aztec Triple Alliance.",
        leader_bonus_name: "Gifts for the Tlatoani",
        leader_bonus: "Improved Luxury resources provide an Amenity to 2 extra cities. +1 Combat Strength for all units for each different improved Luxury resource in Aztec territory."
    },
    {
        name: "Mvemba a Nzinga",
        icon: "../imgs/Mvemba_a_Nzinga.webp",
        bio: "Mvemba a Nzinga (c. 1456 – 1542 or 1543), baptized Afonso I, was the sixth Manikongo of the Kingdom of Kongo from 1509 until his death. He is known for his conversion to Christianity and spread of the religion through his kingdom after the arrival of the Portuguese in Kongo, as well as his condemnation of the Portuguese slave trade.",
        leader_bonus_name: "Religious Convert",
        leader_bonus: "May not build Holy Sites or found a religion, but receives all the beliefs of any religion that has established itself as Kongo's majority religion, not just the Follower beliefs. Building a Mbanza or Theater Square grants a free Apostle of the city's majority religion."
    },
    {
        name: "Pachacuti",
        icon: "../imgs/Pachacuti.webp",
        bio: "Pachacuti (1410 AD – 1471 or 1472 AD) was the ninth Sapa Inca of the Kingdom of Cusco, which he transformed through military expansion into the Inca Empire.",
        leader_bonus_name: "Qhapaq Ñan",
        leader_bonus: "Domestic Trade Routes gain +1 Food for every Mountain tile in the origin city. Gains the Qhapaq Ñan unique improvement with Foreign Trade."
    },
    {
        name: "Pedro II",
        icon: "../imgs/Pedro_II.webp",
        bio: "Dom Pedro II (2 December 1825 – 5 December 1891), nicknamed 'the Magnanimous', was the second and last emperor of Brazil, renowned for his sponsoring of learning, art and science, as well as his steadfast push for the abolition of slavery in Brazil.",
        leader_bonus_name: "Magnanimous",
        leader_bonus: "Recruiting or patronizing a Great Person refunds 20% of their point cost."
    },
    {
        name: "Pericles",
        icon: "../imgs/Pericles.webp",
        bio: "Pericles (c. 495 – 429 BC) was a prominent Greek statesman, orator, and general who led Athens from roughly 461 BC until his death. His many military, political, and cultural achievements have led to this period often being known as the 'Age of Pericles'.",
        leader_bonus_name: "Surrounded by Glory",
        leader_bonus: "+5% Culture per city-state Greece has Suzerainty over."
    },
    {
        name: "Peter",
        icon: "../imgs/Peter.webp",
        bio: "Peter I (9 June 1672 – 8 February 1725), also known as Peter Alexeyevich and more commonly as Peter the Great, was Tsar of Russia from 1682 until his death. During his reign, he vastly expanded the borders of the Russian Empire, and modernized Russia's political and cultural systems through the introduction of Western-style Enlightenment values.",
        leader_bonus_name: "The Grand Embassy",
        leader_bonus: "Trade Routes to more advanced civilizations grant Russia +1 Science for every three technologies that civilization is ahead of them, and +1 Culture for every three civics."
    },
    {
        name: "Philip II",
        icon: "../imgs/Philip_II.webp",
        bio: "Philip II (21 May 1527 – 13 September 1598), also known as Philip the Prudent, was King of Spain, Portugal, Naples, and Sicily, Duke of Milan, Lord of the Netherlands, and briefly King of England through his marriage to Mary I. Under his rule the Spanish empire reached the heights of its power, and experienced significant cultural development, leading to his reign being known as the Spanish Golden Age.",
        leader_bonus_name: "El Escorial",
        leader_bonus: "Inquisitors can Remove Heresy one extra time and remove 100% of the presence of other religions. +5 Combat Strength for military and religious units against civilizations following other religions."
    },
    {
        name: "Poundmaker",
        icon: "../imgs/Poundmaker.webp",
        bio: "Pîhtokahanapiwiyin (1842 – 4 July 1886), better known as Poundmaker, was a Plains Cree chief, known for his steadfast defense of his people's interests and his fostering of peace between the Cree and the government of Canada.",
        leader_bonus_name: "Favorable Terms",
        leader_bonus: "All Alliance types provide Shared Visibility. Trade Routes grant +1 Food in the sending city and +1 Gold in the destination city per Camp or Pasture at the destination city."
    },
    {
        name: "Qin Shi Huang",
        icon: "../imgs/Qin_Shi_Huang.webp",
        bio: "Qin Shi Huang (18 February 259 – 10 September 210 BC), born Ying Zheng, was the first Emperor of China and founder of the Qin dynasty, putting an end to the Warring States period through a series of military campaigns that led to the unification of China.",
        leader_bonus_name: "The First Emperor",
        leader_bonus: "Builders receive an additional Build charges. Can spend Builder charges to complete 15% of the Production cost for Ancient and Classical wonders. Unlocks Canals with Masonry instead of Steam Power."
    },
    {
        name: "Robert the Bruce",
        icon: "../imgs/Robert_the_Bruce.webp",
        bio: "Robert I (11 July 1274 – 7 June 1329), more often known as Robert the Bruce, was King of Scots from 1306 until his death. He defeated England in the First War of Scottish Independence, successfully securing Scotland's status as an independent kingdom.",
        leader_bonus_name: "Bannockburn",
        leader_bonus: "Can declare a War of Liberation with Defensive Tactics, instead of Diplomatic Service. +100% Production in all cities and +2 Movement for all units for the next 10 turns after declaring a War of Liberation."
    },
    {
        name: "Saladin",
        icon: "../imgs/Saladin.webp",
        bio: "Al-Nasir Salah al-Din Yusuf ibn Ayyub (1137 – 4 March 1193), better known as Saladin, was the first sultan of Egypt and Syria and the founder of the Ayyubid dynasty, known for his decisive defeat and conquest of the various Crusader states, particularly the Kingdom of Jerusalem in 1187, securing Islamic control over the Levant.",
        leader_bonus_name: "Righteousness of the Faith",
        leader_bonus: "The Worship building for Arabia's Religion is 90% cheaper to purchase with Faith. Arabian cities with that building gain +10% Science, Faith, and Culture."
    },
    {
        name: "Seondeok",
        icon: "../imgs/Seondeok.webp",
        bio: "Seondeok (c. 595~610 – 17 February 647) was queen of Silla, one of the Three Kingdoms of Korea, from 632 until her death. She is known for fostering scientific and cultural advancements, as well as forging an alliance with the Tang dynasty of China that secured Silla's superiority over its rivals and led to the unification of Korea after her death.",
        leader_bonus_name: "Hwarang",
        leader_bonus: "Cities with an established Governor receive +3% Culture and +3% Science for each promotion that Governor has."
    },
    {
        name: "Shaka",
        icon: "../imgs/Shaka.webp",
        bio: "Shaka kaSenzangakhona (c. 1787 – 22 September 1828), better known as Shaka Zulu, was king of the Zulu from 1816 until his death. His extensive military and social reforms, specifically his transformation of the Zulu military into a formidable fighting force, led to the expansion of the Zulu kingdom into a powerful empire.",
        leader_bonus_name: "Amabutho",
        leader_bonus: "May form Corps with Mercenaries, instead of Nationalism, and Armies with Nationalism, instead of Mobilization. Corps and Armies gain an additional +5 Combat Strength."
    },
    {
        name: "Simón Bolívar",
        icon: "../imgs/Simon_Bolivar.webp",
        bio: "Simón Bolívar (24 July 1783 – 17 December 1830), commonly known as 'el Libertador', was a Venezuelan general and political leader who liberated much of South America from Spanish control, later becoming the first President of Gran Colombia.",
        leader_bonus_name: "Carabobo",
        leader_bonus: "Focuses on promoting his units by building many Encampments, and likes civilizations with many promoted units. Dislikes civilizations without an elite, highly-promoted army."
    },
    {
        name: "Suleiman",
        icon: "../imgs/Suleiman.webp",
        bio: "Suleiman (6 November 1494 – 6 September 1566), commonly known as 'the Magnificent', was the tenth Sultan of the Ottoman Empire, reigning from 1520 until his death, and whose rule marked the apex of Ottoman military, economic and political power.",
        leader_bonus_name: "Grand Vizier",
        leader_bonus: "Has access to a unique Governor, Ibrahim, the Grand Vizier. Gains the Janissary unique unit and 1 Governor title with Gunpowder."
    },
    {
        name: "Tamar",
        icon: "../imgs/Tamar.webp",
        bio: "Tamar (c. 1160 – 18 January 1213), commonly known as Tamar the Great, was Queen of Georgia from 1184 to until her death, presiding over much of the Georgian Golden Age, a period of great military and cultural achievements.",
        leader_bonus_name: "Glory of the World, Kingdom and Faith",
        leader_bonus: "Killing a unit provides Faith equal to 50% of its Combat Strength. Each Envoy sent to a city-state following Georgia's majority Religion counts as two Envoys."
    },
    {
        name: "Teddy Roosevelt (Bull Moose)",
        icon: "../imgs/Teddy_Roosevelt.webp",
        bio: "Theodore 'Teddy' Roosevelt (27 October 1858 – 6 January 1919) was the 26th President of the United States, known for his vigorous foreign policy that sought to turn the United States into an international great power, and his many progressive reforms.",
        leader_bonus_name: "Antiquities and Parks",
        leader_bonus: "Tiles with Breathtaking Appeal gain +2 Science when adjacent to a Natural Wonder or Mountain, and +2 Culture when adjacent to a Wonder or Woods. +1 Appeal in all tiles in cities with a National Park."
    },
    {
        name: "Teddy Roosevelt (Rough Rider)",
        icon: "../imgs/Teddy_Roosevelt_RR.webp",
        bio: "Theodore 'Teddy' Roosevelt (27 October 1858 – 6 January 1919) was the 26th President of the United States, known for his vigorous foreign policy that sought to turn the United States into an international great power, and his many progressive reforms.",
        leader_bonus_name: "Roosevelt Corollary",
        leader_bonus: "+5 Combat Strength for all units inside America's home continent. Envoys sent to city-states that America has a Trade Route with count as two Envoys. Gains the Rough Rider unique unit with Rifling."
    },
    {
        name: "Tomyris",
        icon: "../imgs/Tomyris.webp",
        bio: "Tomyris was a queen who reigned over the Massagetae, a Scythian pastoral-nomadic confederation in Central Asia, known for allegedly defeating and killing Cyrus the Great in 530 BC.",
        leader_bonus_name: "Killer of Cyrus",
        leader_bonus: "+5 Combat Strength for all units when attacking wounded units. Units heal up to 30 hit points after killing an enemy unit."
    },
    {
        name: "Trajan",
        icon: "../imgs/Trajan.webp",
        bio: "Trajan (18 September 53 – 8 August 117) was Emperor of Rome from 98 AD until his death, remembered for achieving the greatest military expansion in Roman history, as well as for his philanthropy, leading to him being known as one of the 'Five Good Emperors'.",
        leader_bonus_name: "Trajan's Column",
        leader_bonus: "All founded cities start with a free building in the City Center (a Monument if the game is started in the Ancient Era)."
    },
    {
        name: "Victoria",
        icon: "../imgs/Victoria.webp",
        bio: "Victoria (24 May 1819 – 22 January 1901) was queen of the United Kingdom of Great Britain and Ireland from 1837 until her death. Her reign, one of the longest in history, saw the greatest expansion of the British Empire, as well as significant scientific, cultural, social and political developments, and became known as the Victorian Era.",
        leader_bonus_name: "Pax Britannica",
        leader_bonus: "The first city founded on each continent other than England's home continent grants a free melee unit in that city and +1 Trade Route capacity. Building a Royal Navy Dockyard grants a free naval unit. Gains the Redcoat unique unit with Military Science."
    },
    {
        name: "Wilfrid Laurier",
        icon: "../imgs/Wilfrid_Laurier.webp",
        bio: "Wilfrid Laurier (20 November 1841 – 17 February 1919) was the seventh Prime Minister of Canada, in office for fifteen years from 11 July 1896 to 6 October 1911, the longest uninterrupted term of any Canadian Prime Minister. He is best known for his policy of conciliation and cooperation between French and English Canada.",
        leader_bonus_name: "The Last Best West",
        leader_bonus: "Can build Farms on Tundra tiles, and on Tundra Hills tiles with Civil Engineering. Snow, Snow Hills, Tundra Hills, and Tundra tiles cost 50% less Gold to purchase. On those types of tiles, Strategic Resources accumulate 100% faster, Farms and Camps receive +2 Food, and Mines and Lumber Mills receive +2 Production."
    },
    {
        name: "Wilhelmina",
        icon: "../imgs/Wilhelmina.webp",
        bio: "Wilhelmina (31 August 1880 – 28 November 1962) was Queen of the Netherlands from 1890 until her abdication in 1948, and is best remembered for her staunch support of the Dutch resistance during the Nazi occupation of the Netherlands.",
        leader_bonus_name: "Radio Oranje",
        leader_bonus: "Domestic Trade Routes provide +2 Loyalty per turn for the starting city. +2 Culture for each Trade Route sent to or received from a foreign civilization."
    }
]

const seedLeaders = () => Leader.bulkCreate(leaderData)

module.exports = seedLeaders