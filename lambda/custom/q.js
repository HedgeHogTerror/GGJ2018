var q = [
    {
        "eventname": "Cats 1",
        "variable": "cats",
        "intro": "Oh Holy One, my pet cat makes me sneeze and choke, but I care for her deeply. What should I do? Should I love her or leave her?",
        "iplus": "love",
        "iminus": "leave",
        "resultplus": "The woman says, \"Your word is law, holy one. I will suffer for my dear cat.",
        "resultminus": "The woman says, \"Thank you for your just decision. I will tell the world that cats are bad."
    },
    {
        "eventname": "Cats 2",
        "variable": "cats",
        "intro": "O Majestic One, cats disgust me. They are cruel and withhold affection from me. But my father loves cats. Who is right? Are cats cruel or kind?",
        "iplus": "kind",
        "iminus": "cruel",
        "resultplus": "The woman says, \"Thank you for your help, Holy One. I will learn to love a cat.",
        "resultminus": "The woman goes home and solemnly places her father's cat in the garbage."
    },
    {
        "eventname": "Shampoo 1",
        "variable": "shampoo",
        "intro": "O Lord, my wife uses a kind of shampoo that makes my eyes sting. She says it is important to have clean hair. You tell me: is shampoo bad... or good?",
        "iplus": "good",
        "iminus": "bad",
        "resultplus": "The man hangs his head in sorrow, and goes forth to wash his hair.",
        "resultminus": "The man stands tall and proud. He says, \"I will spread your hair care law, O Lord!"
    },
    {
        "eventname": "Shampoo 2",
        "variable": "shampoo",
        "intro": "Oh Almighty God, my husband drinks shampoo straight from the bottle. I think this is very bad. Am I right, or am I wrong?",
        "iplus": "wrong",
        "iminus": "right",
        "resultplus": "This woman seems surprised. She says, \"If you think it is a good idea, my lord!",
        "resultminus": "The woman seems pleased. She tells everyone she meets about your shampoo, opinions."
    },
    {
        "eventname": "Pumpkins 1",
        "variable": "pumpkins",
        "intro": "O Lord, my wife hates pumpkins, but I adore them. She calls them, \"horrid orbs,\" but I call them \"<phoneme alphabet=\"ipa\" ph=\"\u02c8bl\u025bs\u0259d\">blessed</phoneme> orbs.\" Which of us is right? Are they horrid, or <phoneme alphabet=\"ipa\" ph=\"\u02c8bl\u025bs\u0259d\">blessed</phoneme>?",
        "iplus": "blessed",
        "iminus": "horrid",
        "resultplus": "The man walks away with a beaming smile on his round, orange face. He cries, \"O <phoneme alphabet=\"ipa\" ph=\"\u02c8bl\u025bs\u0259d\">blessed</phoneme> day!",
        "resultminus": "The man walks away with a deep frown on his round orange face. He sighs, \"What a horrid day!"
    },
    {
        "eventname": "Pumpkins 2",
        "variable": "pumpkins",
        "intro": "Almighty Lord, we have all been arguing: is it really a terrible sin to eat a pumpkin? They are very weird inside, and they make us nervous. Is it a sin, or is it okay?",
        "iplus": "okay",
        "iminus": "sin",
        "resultplus": "The priest looks very relieved. He says, \"That's good. We were worried that if we ate gross things, we would become gross too.",
        "resultminus": "The priest tries to remain calm. He says, \"We will do your bidding, O god."
    },
    {
        "eventname": "Pumpkins 3",
        "variable": "pumpkins",
        "intro": "O God on HIgh, my son brought home his new bride... but it was a pumpkin!! Is it a sin for him to marry a pumpkin, or is it okay?",
        "iplus": "okay",
        "iminus": "sin",
        "resultplus": "The man seems worried. He says, \"I fear she will try to take advantage of my dear son, but I will do your bidding.",
        "resultminus": "The man nods solemnly. He says, \"So be it, God Almighty. Pumpkin marriage is now banned in this land."
    },
    {
        "eventname": "Trash 1",
        "variable": "trash",
        "intro": "Oh Mighty One, one of your worshipers has left garbage before your altar as a votive offering. Should we punish her, or will you accept her gift?",
        "iplus": "accept",
        "iminus": "punish",
        "resultplus": "The woman's gift is praised at length in a shamanic sermon.",
        "resultminus": "The woman is flogged. The garbage is incinerated."
    },
    {
        "eventname": "Trash 2",
        "variable": "trash",
        "intro": "Dearest Lord, a garbage hoarder has become a folk hero. Should we embrace him, or destroy him?",
        "iplus": "embrace",
        "iminus": "destroy",
        "resultplus": "The trash king becomes one of your most celebrated priests.",
        "resultminus": "A skilled holy assassin makes the trash king disappear."
    },
    {
        "eventname": "Humble 1",
        "variable": "humble",
        "intro": "O God, our scholars cannot decide which is the more important virtue: humility or confidence?",
        "iplus": "humility",
        "iminus": "confidence",
        "resultplus": "The scholar bows so deeply that when he rises, his forehead is covered in dirt.",
        "resultminus": "The scholar chuckles. \"I knew it,\" he says."
    },
    {
        "eventname": "Humble 2",
        "variable": "humble",
        "intro": "Mighty One, my neighbor boasts about his undeniably massive muscles constantly. What is more important, humility or confidence?",
        "iplus": "humility",
        "iminus": "confidence",
        "resultplus": "The figure bows her head, overcome by your tremendous wisdom.",
        "resultminus": "Yes,\" says the woman. \"He earned his muscles through hard work. He is right to be proud."
    },
    {
        "eventname": "Spicy 1",
        "variable": "spicy",
        "intro": "Dear God, my partner hates spicy food, but I think it is delicious. How shall we prepare our food? Spicy, or Mild?",
        "iplus": "spicy",
        "iminus": "mild",
        "resultplus": "Your worshiper departs with a spicy, spicy smile.",
        "resultminus": "The worshiper's face falls. As she departs, she throws her pocketful of peppers into the holy fire pit."
    },
    {
        "eventname": "Spicy 2",
        "variable": "spicy",
        "intro": "Holy Lord, I have procured a potent pepper from a distant land. Should I eat it? Or destroy it",
        "iplus": "eat",
        "iminus": "destroy",
        "resultplus": "The worshipper chews on the pepper and then swallows it. He falls to the ground in holy spicy bliss.",
        "resultminus": "The pepper is plunged into the deep ocean, never to be tasted by human tongues."
    },
    {
        "eventname": "Objective 1",
        "variable": "objective",
        "intro": "O Lord, My son asked me whether the blue sky he sees is the same blue I see. How can I know? Do we all see blue the same, or different?",
        "iplus": "same",
        "iminus": "different",
        "resultplus": "The man nods. He says, \"That makes sense. Objective reality is truly real.",
        "resultminus": "The man's eyes widen. He says, \"So we do not experience the same reality? How disturbing!"
    },
    {
        "eventname": "Objective 2",
        "variable": "objective",
        "intro": "O Lord, I have a brain puzzler for you, the brain genius. Is objective truth real, or a lie?",
        "iplus": "real",
        "iminus": "lie",
        "resultplus": "The nerd nods his head. He says, \"I agree. Objective truth is real.",
        "resultminus": "The nerd is shocked. But he says, \"If you say so, holy one, it must be true."
    },
    {
        "eventname": "Ice Cream 1",
        "variable": "icecream",
        "intro": "O Majestic lord, i ate a large amount of ice cream and it gave me a terrible headache. I now fear ice cream, but my family mocks me. Am I right to fear it? Or am I wrong?",
        "iplus": "wrong",
        "iminus": "right",
        "resultplus": "The supplicant looks dejected. She says, \"I will eat ice cream if you say I must, O Holy One.",
        "resultminus": "The supplicant smiles. She says, \"I knew I was right to fear the ice food."
    },
    {
        "eventname": "Ice Cream 2",
        "variable": "icecream",
        "intro": "O Everlasting One, for my child's birthday I spent my whole paycheck on a rare banquet of iced cream. But she wept and wailed, saying that ice cream is not to her liking. Who is right? Is ice cream good or bad?",
        "iplus": "good",
        "iminus": "bad",
        "resultplus": "The father says, \"I understand, holy one. I shall force my child to eat the iced creams.",
        "resultminus": "The father bows and says, \"I shall never again feed my child the cursed iced creams."
    },
    {
        "eventname": "Hawaiian 1",
        "variable": "hawaiian",
        "intro": "O powerful deity, my father puts both pineapple and ham upon his pizza. The neighbors say, this is a devil's food. Who is right? Is my father's pizza forbidden, or allowed?",
        "iplus": "allowed",
        "iminus": "forbidden",
        "resultplus": "The boy agrees. He says, \"I love this pizza. We shall eat it always.",
        "resultminus": "The old man is punished. his pizzas are thrown into the river."
    },
    {
        "eventname": "Hawaiian 2",
        "variable": "hawaiian",
        "intro": "O lord, at my workplace the bosses purchased pizzas for us to eat in celebration. However, one of the pizzas they purchased had both ham and pineapple on it. Is this just, or is it unjust?",
        "iplus": "just",
        "iminus": "unjust",
        "resultplus": "The laborer nods. He goes forth to eat pineapple and ham together, even though it brings him great pain.",
        "resultminus": "The laborer looks pleased. He says, \"I will tell my masters that this pizza is a sin."
    },
    {
        "eventname": "Numbers 1",
        "variable": "numbers",
        "intro": "Lord, my wife is happy with our two children, but I want a third. How many children shall we have? Two, or three?",
        "iplus": "two",
        "iminus": "three",
        "resultplus": "The man bows. He has seen the error of his ways and will create no more fruits of his loins.",
        "resultminus": "The man thanks you with a smile. He heads home to create one additional fruit of his loins."
    },
    {
        "eventname": "Numbers 2",
        "variable": "numbers",
        "intro": "All Powerful One, how many of these apples shall I eat? Two, or three?",
        "iplus": "two",
        "iminus": "three",
        "resultplus": "The worshiper walks away, relieved that the burden of this decision has finally been removed from his shoulders.",
        "resultminus": "The worshiper nods. \"As you command, so it shall be,\" he says."
    },
    {
        "eventname": "Light 1",
        "variable": "light",
        "intro": "O Holy One, my sister and I sleep in the same room. She prefers a bright night light in the darkness. However, I do not. Which of us is right? Should the night be light, or should it be dark?",
        "iplus": "light",
        "iminus": "dark",
        "resultplus": "The girl sighs. She says, \"I will try to learn to sleep in the blazing light, O Lord.",
        "resultminus": "The girl looks triumphant. She says, \"I knew that my opinions were right and just, O Lord."
    },
    {
        "eventname": "Light 2",
        "variable": "light",
        "intro": "O Great and Powerful One, I am very frightened of the dark, so I burn a light in my bedroom at all hours. However, my wife says that it keeps her awake. Which of us is right? Should our night be light, or should it be dark?",
        "iplus": "light",
        "iminus": "dark",
        "resultplus": "The man seems gleeful. He says, \"I will tell my wife it is just and right to sleep with the lights on.",
        "resultminus": "The man looks crushed. He says, \"I must then lean on your holy support to survive the darkness of the night."
    },
    {
        "eventname": "Elfs 1",
        "variable": "elfs",
        "intro": "O powerful one, when I misplace my toys, my mother always says that an elf must have moved them. Is my mother right? Are <phoneme alphabet=\"ipa\" ph=\"\u025blfs\">elfs</phoneme> real, or, a lie?",
        "iplus": "real",
        "iminus": "lie",
        "resultplus": "The little boy seems terrified. He says, \"I must go and protect my belongings, from <prosody pitch=\"x-high\">the <phoneme alphabet=\"ipa\" ph=\"\u025blfs\">elfs</phoneme></prosody>!",
        "resultminus": "The little boy seems relieved. He says, \"Thank you, holy one. It was a sin for my mother to lie like this."
    },
    {
        "eventname": "Elfs 2",
        "variable": "elfs",
        "intro": "O great and powerful god, one of my classmates says that elfs are real, and that all my troubles are due to them. However, this seems very false to me. Are <phoneme alphabet=\"ipa\" ph=\"\u025blfs\">elfs</phoneme> real, or a lie?",
        "iplus": "real",
        "iminus": "lie",
        "resultplus": "The little girl is terrified. She says, \"So all my troubles, were due to <phoneme alphabet=\"ipa\" ph=\"\u025blfs\">elfs</phoneme>! How horrible!",
        "resultminus": "The little girl leaves this place and goes to denounce her classmate in the public square. All is well."
    },
    {
        "eventname": "Lobster 1",
        "variable": "lobster",
        "intro": "O heavenly protector, I like to eat the flesh of lobsters. However, my brother says that lobsters are just big cockroaches that live in the sea, and that everyone should fear them. Who is right? Are lobsters <emphasis>food</emphasis>, or <emphasis>foe?</emphasis>",
        "iplus": "food",
        "iminus": "foe",
        "resultplus": "The man cheerfully goes forth and forces his brother to eat the flesh of lobsters.",
        "resultminus": "The man looks sad. He says, \"I will obey you, even though I love the <emphasis>sweet flesh</emphasis> of the <emphasis>sea roach!</emphasis>"
    },
    {
        "eventname": "Lobster 2",
        "variable": "lobster",
        "intro": "O great one, the creature called the lobster is a foul beast that has green curds for brains. But my <phoneme alphabet =\"ipa\" ph=\"b\u026a.\u02c8l\u028cv.\u026ad\">beloved</phoneme> refuses to marry me unless I join her to eat them. What is right? Are lobsters allowed, or forbidden?",
        "iplus": "allowed",
        "iminus": "forbidden",
        "resultplus": "The man looks dejected. He sighs, \"I will learn to eat the lobster brain.",
        "resultminus": "The man looks very pleased. He says, \"I will tell my <phoneme alphabet =\"ipa\" ph=\"b\u026a.\u02c8l\u028cv.\u026ad\">beloved</phoneme> what you have said. Now she will be forced to marry me!"
    },
    {
        "eventname": "Knuckles 1",
        "variable": "knuckles",
        "intro": "Awesome One, my sister cracks her knuckles, and it fills me with disgust. Are knuckles meant to cracked, or uncracked?",
        "iplus": "cracked",
        "iminus": "uncracked",
        "resultplus": "The worshiper forcefully presses each finger to her palm until it pops. Her face contorts in pain.",
        "resultminus": "The worshiper smiles, delighted to learn that her disgust is righteous and her sister is gross."
    },
    {
        "eventname": "Knuckles 2",
        "variable": "knuckles",
        "intro": "<phoneme alphabet =\"ipa\" ph=\"b\u026a.\u02c8l\u028cv.\u026ad\">Beloved</phoneme> Lord, my knee pops when I stand up. Is this good, or bad?",
        "iplus": "good",
        "iminus": "bad",
        "resultplus": "The man smiles, overcome by the celestial glow of your approval.",
        "resultminus": "With grim-faced resolve, the man uses a ceremonial bonesaw to remove his leg."
    },
    {
        "eventname": "Gerbils 1",
        "variable": "gerbil",
        "intro": "O holy god, we have many gerbils in our home, and I grow tired of their bouncing and pooping. However, my children will not allow me to slaughter these gerbils. What should I do? Should I <emphasis><prosody volume =\"loud\">kill</prosody></emphasis> the gerbils, or <emphasis>spare</emphasis> them?",
        "iplus": "spare",
        "iminus": "kill",
        "resultplus": "The man goes home and suffers the rest of his life in a cyclone of unwanted gerbils.",
        "resultminus": "The man returns home and enacts terrible justice upon his children's many useless gerbils."
    },
    {
        "eventname": "Gerbils 2",
        "variable": "gerbil",
        "intro": "O Majestic one, I want a gerbil to keep as a pet, but my parents say I am not responsible enough to have a gerbil. Who is right? Is it good for me to have a pet, or is it bad?",
        "iplus": "good",
        "iminus": "bad",
        "resultplus": "The child goes home and demands gerbils from his parents. They are forced to provide him with many gerbils.",
        "resultminus": "The child hangs his head and returns to a cold, no-gerbil home."
    },
    {
        "eventname": "Lettuce 1",
        "variable": "lettuce",
        "intro": "O holy one, my husband prefers iceberg <phoneme alphabet=\"ipa\" ph =\"\u02c8l-e\u0294t\u028c\u02d0s\">lettuce</phoneme> in his salads. But to me, iceberg <phoneme alphabet=\"ipa\" ph =\"\u02c8l-e\u0294t\u028c\u02d0s\">lettuce</phoneme> is a garbage food for fools. I prefer spinach. Which is better, <phoneme alphabet=\"ipa\" ph =\"\u02c8l-e\u0294t\u028c\u02d0s\">lettuce</phoneme> or spinach?",
        "iplus": "lettuce",
        "iminus": "spinach",
        "resultplus": "The man kneels, tears streaming from his eyes. The temple guards drag him off to eat <phoneme alphabet=\"ipa\" ph =\"\u02c8l-e\u0294t\u028c\u02d0s\">lettuce</phoneme>.",
        "resultminus": "The man stands proud. The temple guards wheel in bushes of spinach to celebrate."
    },
    {
        "eventname": "Lettuce 2",
        "variable": "lettuce",
        "intro": "O great and powerful lord, my mother says my salads are not healthy, because I make them with iceberg <phoneme alphabet=\"ipa\" ph =\"\u02c8l-e\u0294t\u028c\u02d0s\">lettuce</phoneme>. She thinks I should use another leaf, such as spinach. Which of us is right? Is <phoneme alphabet=\"ipa\" ph =\"\u02c8l-e\u0294t\u028c\u02d0s\">lettuce</phoneme> good, or bad?",
        "iplus": "good",
        "iminus": "bad",
        "resultplus": "The woman shakes her fists triumphantly in the air. Her mother will be forced to eat a <phoneme alphabet=\"ipa\" ph =\"\u02c8l-e\u0294t\u028c\u02d0s\">lettuce</phoneme>.",
        "resultminus": "The woman weeps, at your verd ict. Her mother stuffs a spinach leaf into her mouth in triumph."
    },
    {
        "eventname": "Flossing 1",
        "variable": "floss",
        "intro": "Divine Lord, the dentists tell us that we must floss, but flossing sucks real hard. Is flossing <emphasis>good,</emphasis> or is it <emphasis>bogus</emphasis>?",
        "iplus": "good",
        "iminus": "bogus",
        "resultplus": "The worshiper sighs. He says, \"I guess it only takes like, 30 seconds. I will do as you command.",
        "resultminus": "The worshiper jumps with joy! He says, \"Thank you, my lord!"
    },
    {
        "eventname": "Flossing 2",
        "variable": "floss",
        "intro": "Oh Holy one, I am a dentist, and none of my patients ever floss, even though I tell them to, every single time. Should I <emphasis>give up,</emphasis> or <emphasis>try harder?</emphasis>",
        "iplus": "try harder",
        "iminus": "give up",
        "resultplus": "The dentist says, \"I will redouble my efforts. Thank you, my lord.\" He leaves a free toothbrush on your altar.",
        "resultminus": "The dentist sighs and says, \"If I'm honest with you, I don't even floss, myself."
    },
    {
        "eventname": "Toes 1",
        "variable": "toes",
        "intro": "O great one, I feel gross whenever I see the toes of another person. However, my friends and family mock me. Am I right? Should toes be free, or hidden?",
        "iplus": "free",
        "iminus": "hidden",
        "resultplus": "The man shudders in disgust. The temple guards strip him of his shoes.",
        "resultminus": "The man nods proudly. Around the room, temple guards hurry to cover their shameful sandals."
    },
    {
        "eventname": "Toes 2",
        "variable": "toes",
        "intro": "O Lord, my husband often takes his socks off and picks at his toes. I believe it is gross, but he believes it is natural. Who is right? Are toes polite, or are they nasty?",
        "iplus": "polite",
        "iminus": "nasty",
        "resultplus": "The woman sighs. She says, \"I will learn to live with my husband's toes.",
        "resultminus": "The woman goes home and commands her husband to hide his terrible feet. And of course, he must comply."
    },
    {
        "eventname": "Wowza 1",
        "variable": "wowza",
        "intro": "O Lord, my brother and I disagree. Is it better to say <say-as interpret-as=\"interjection\">wowza</say-as> or <say-as interpret-as=\"interjection\">yowza</say-as>",
        "iplus": "wowza",
        "iminus": "yowza",
        "resultplus": "The man says, \"<say-as interpret-as=\"interjection\">wowza</say-as>.\" What a verdict!",
        "resultminus": "The man says, \"<say-as interpret-as=\"interjection\">yowza</say-as>.\" What a verdict!"
    },
    {
        "eventname": "Wowza 2",
        "variable": "wowza",
        "intro": "O great and powerful one, two demons came to me in a dream and said two words of power to me. Which one is the <phoneme alphabet=\"ipa\" ph=\"\u02c8bl\u025bs\u0259d\">blessed</phoneme> word: <say-as interpret-as=\"interjection\">wowza</say-as> or <say-as interpret-as=\"interjection\">yowza</say-as>",
        "iplus": "wowza",
        "iminus": "yowza",
        "resultplus": "The man says, \"So be it. The word of fate is <say-as interpret-as=\"interjection\">wowza</say-as>.",
        "resultminus": "The man says, \"So be it. The word of fate is <say-as interpret-as=\"interjection\">yowza</say-as>."
    },
    {
        "eventname": "Snakes 1",
        "variable": "snakes",
        "intro": "Oh holy one, what should we fear most? fear itself, or snakes?",
        "iplus": "fear",
        "iminus": "snakes",
        "resultplus": "The sage nods. Snakes are not so bad. He was afraid that he should be afraid of being afraid.",
        "resultminus": "The sage trembles. \"When I see a snake, I say, gross! not because I am disgusted, but because I am afraid."
    },
    {
        "eventname": "Snakes 2",
        "variable": "snakes",
        "intro": "Oh noble lord, there is a snake next to your altar. Should I free it, or kill it?",
        "iplus": "free",
        "iminus": "kill",
        "resultplus": "The shaman takes the snake into her arms and escorts it out of the temple.",
        "resultminus": "The shaman spears the snake's head with the ceremonial blade. She shudders as its corpse twitches."
    },
    {
        "eventname": "Death 1",
        "variable": "death",
        "intro": "O powerful lord, what waits for us after death? Should we, <say-as interpret-as=\"interjection\">watch out</say-as>! Or should we say, <say-as interpret-as=\"interjection\">hurray</say-as>?",
        "iplus": "hurray",
        "iminus": "watch out",
        "resultplus": "The woman nods and says, \"As you wish, o powerful one. We will form a religion of death.",
        "resultminus": "The woman nods and says, \"As you wish, o majestic one. We will fear death."
    },
    {
        "eventname": "Death 2",
        "variable": "death",
        "intro": "O great one, what afterlife have you created for us? Should I accept my death, or should I fear it?",
        "iplus": "accept",
        "iminus": "fear",
        "resultplus": "The man nods his ancient head. He says, \"If that's what you say, then I am excited to die.",
        "resultminus": "The man nods his ancient head. \"I understand, great one. I will begin the search for immortality immediately."
    }
];

exports.q = q;