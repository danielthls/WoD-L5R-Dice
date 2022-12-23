const Discord = require('discord.js');
const config = require('./config.json');
const inits = require('./inits2.json')
var wodStats = require('./wod stats.json');
const chars = require('./chars2.json')
const client = new Discord.Client();
const fs = require("fs");
//const { ConsoleTransportOptions } = require('winston/lib/winston/transports');'

client.once('ready', () => {
	console.log('Ready!');
    if (client.user.avatar != '9b6be54d676b3fd02aa6273413f02683') {
        client.user.setAvatar('./bot.jpg')
            .then(user => console.log(`New avatar set!`))
            .catch(console.error);
    }
});

client.login(config.token);

client.on('message', message => {
	
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.content.substring(0, 1) == '!') {
		
        var args = message.content.substring(1).split(' ');
        var cmd = args[0].toLowerCase();
		var argos = message.content.trim().split(/ +/g);
		var codConcepts = ["Teacher","Archaeologist","the Cable Guy","Pilot","Med Student","Lifeguard","Paramedic","Legislator","Stalker","Mystery Buff","Stockbroker","Accountant","Upper Class Twat","Hacker","Topical Blogger","Professor","Professional Torturer","Scout","Soldier","Outdoor Enthusiast","Reporter","Spy","Commando","Mime","Ballerina","College Student","Martial Artist","Assassin","Street Magician","Pickpocket","Farmer","Diplomat","Traveler","Crazy Survivalist","Security Consultant","Designer","Fashionista","Inventor","Uber Driver","Taxi Driver","Race Car Driver","Automotive Show Host","Mechanic","Artisan","Animal Trainer","Goat Tamer","Zookeeper","Veterinarian","Crazy Cat Person","Domitor","Poet","Bully","Internet Anonymous","Bouncer","Gangster","Club Manager","Executive","Pick-up Artist","Web Personality","Rabble-Rouser","Everyone's Best Friend","Medium","Social Worker","Seducer","Loving Parent","Actor","Psychologist","Police Officer","Roughneck","Mystic","Paranormal Researcher","Ex-military","Crazed Hobbyist","Park Ranger","School Jock","Psychic","New Ager","Burglar","Chicken Thief","Passionate Socialist","Hunter","Poacher","Mad Goat","Fortune Teller","Clown","Agitator","Small-arms Dealer", "Corrupt Janitor","Chef","Street-Fighter","Bad Youtube Let's Player","Water polo Celebrity","Sheltered Priest","Corporate Sellout","Incompetent Occultist","Unskilled Fisher","Aggressive Refugee","Supernatural Investor","Jailbird","Mafioso","Drug Dealer", "Pimp", "Carjacker","Thug","Thief","Fence","Bum","Hobo","Smuggler","Prostitute","Junkie","Pilgrim","Biker","Gambler","Musician","Film Star","Artist","Club Kid","Model","Web Celebrity","Writer","Student","Scientist","Phillosopher","Social Critic","Detective","Beat Cop","Government Agent","Private Eye","Witch Hunter","Child","Runaway","Outcast","Urchin","Gangbanger","Urban Primitive","Refugee","Minority","Conspiracy Theorist","Judge","Public Official","Councilor","Aide","Speechwriter","Engineer","Doctor","Programmer","Lawyer","Industrialist","Journalist","Blogger","Paparazzo","Talkshow Host","Media Expert","Clubgoer","Goth","Skinhead","Punk","Barfly","Hipster","Substance Abuser","Dilettante","Host","Playboy","Sycophant","Trophy Wife","Bodyguard","Enforcer","Soldier of Fortune","Killer-for-Hire","Trucker","Farmer","Wage Earner","Manservant","Construction Laborer","Fortune Teller","Clown","Agitator","Small-arms Dealer", "Corrupt Janitor", "Chef","Kindly Grandmother", "Transgender Street-Fighter", "Bad Youtube Let's Player", "Waterpolo Celebrity", "Sheltered Shrine Priest", "Corporate Sellout", "Incompetent Occultist", "Unskilled Fisher", "Agressive Refugee", "Supernatural Investor","Jailbird","Mafioso","Drug Dealer", "Pimp", "Carjacker","Thug","Thief","Fence","Bum","Hobo","Smuggler","Prostitute","Junkie","Pilgrim","Biker","Gambler","Musician","Film Star","Artist","Club Kid","Model","Web Celebrity","Writer","Student","Scientist","Phillosopher","Social Critic","Detective","Beat Cop","Government Agent","Private Eye","Witch Hunter","Child","Runaway","Outcast","Urchin","Gangbanger","Urban Primitive","Refugee","Minority","Conspiracy Theorist","Judge","Public Official","Councilor","Aide","Speechwriter","Engineer","Doctor","Programmer","Lawyer","Industrialist","Journalist","Blogger","Paparazzo","Talkshow Host","Media Expert","Clubgoer","Goth","Skinhead","Punk","Barfly","Hipster","Substance Abuser","Dilettante","Host","Playboy","Sycophant","Trophy Wife","Bodyguard","Enforcer","Soldier of Fortune","Killer-for-Hire","Trucker","Farmer","Wage Earner","Manservant","Construction Laborer"];
		var firstNameGirls = ["Emma","Olivia","Ava","Isabella","Sophia","Mia","Charlotte","Amelia","Evelyn","Abigail","Harper","Emily","Elizabeth","Avery","Sofia","Ella","Madison","Scarlett","Victoria","Aria","Grace","Chloe","Camila","Penelope","Riley","Layla","Lillian","Nora","Zoey","Mila","Aubrey","Hannah","Lily","Addison","Eleanor","Natalie","Luna","Savannah","Brooklyn","Leah","Zoe","Stella","Hazel","Ellie","Paisley","Audrey","Skylar","Violet","Claire","Bella","Aurora","Lucy","Anna","Samantha","Caroline","Genesis","Aaliyah","Kennedy","Kinsley","Allison","Maya","Sarah","Madelyn","Adeline","Alexa","Ariana","Elena","Gabriella","Naomi","Alice","Sadie","Hailey","Eva","Emilia","Autumn","Quinn","Nevaeh","Piper","Ruby","Serenity","Willow","Everly","Cora","Kaylee","Lydia","Aubree","Arianna","Eliana","Peyton","Melanie","Gianna","Isabelle","Julia","Valentina","Nova","Clara","Vivian","Reagan","Mackenzie","Madeline","Brielle","Delilah","Isla","Rylee","Katherine","Sophie","Josephine","Ivy","Liliana","Jade","Maria","Taylor","Hadley","Kylie","Emery","Adalynn","Natalia","Annabelle","Faith","Alexandra","Ximena","Ashley","Brianna","Raelynn","Bailey","Mary","Athena","Andrea","Leilani","Jasmine","Lyla","Margaret","Alyssa","Adalyn","Arya","Norah","Khloe","Kayla","Eden","Eliza","Rose","Ariel","Melody","Alexis","Isabel","Sydney","Juliana","Lauren","Iris","Emerson","London","Morgan","Lilly","Charlie","Aliyah","Valeria","Arabella","Sara","Finley","Trinity","Ryleigh","Jordyn","Jocelyn","Kimberly","Esther","Molly","Valerie","Cecilia","Anastasia","Daisy","Reese","Laila","Mya","Amy","Teagan","Amaya","Elise","Harmony","Paige","Adaline","Fiona","Alaina","Nicole","Genevieve","Lucia","Alina","Mckenzie","Callie","Payton","Eloise","Brooke","Londyn","Mariah","Julianna","Rachel","Daniela","Gracie","Catherine","Angelina","Presley","Josie","Harley","Adelyn","Vanessa","Makayla","Parker","Juliette","Amara","Marley","Lila","Ana","Rowan","Alana","Michelle","Malia","Rebecca","Brooklynn","Brynlee","Summer","Sloane","Leila","Sienna","Adriana","Sawyer","Kendall","Juliet","Destiny","Alayna","Elliana","Diana","Hayden","Ayla","Dakota","Angela","Noelle","Rosalie","Joanna","Jayla","Alivia","Lola","Emersyn","Georgia","Selena","June","Daleyza","Tessa","Maggie","Jessica","Remi","Delaney","Camille","Vivienne","Hope","Mckenna","Gemma","Olive","Alexandria","Blakely","Izabella","Catalina","Raegan","Journee","Gabrielle","Lucille","Ruth","Amiyah","Evangeline","Blake","Thea","Amina","Giselle","Lilah","Melissa","River","Kate","Adelaide","Charlee","Vera","Leia","Gabriela","Zara","Jane","Journey","Elaina","Miriam","Briella","Stephanie","Cali","Ember","Lilliana","Aniyah","Logan","Kamila","Brynn","Ariella","Makenzie","Annie","Mariana","Kali","Haven","Elsie","Nyla","Paris","Lena","Freya","Adelynn","Lyric","Camilla","Sage","Jennifer","Paislee","Talia","Alessandra","Juniper","Fatima","Raelyn","Amira","Arielle","Phoebe","Kinley","Ada","Nina","Ariah","Samara","Myla","Brinley","Cassidy","Maci","Aspen","Allie","Keira","Kaia","Makenna","Amanda","Heaven","Joy","Lia","Madilyn","Gracelyn","Laura","Evelynn","Lexi","Haley","Miranda","Kaitlyn","Daniella","Felicity","Jacqueline","Evie","Angel","Danielle","Ainsley","Dylan","Kiara","Millie","Jordan","Maddison","Rylie","Alicia","Maeve","Margot","Kylee","Phoenix","Heidi","Zuri","Alondra","Lana","Madeleine","Gracelynn","Kenzie","Miracle","Shelby","Elle","Adrianna","Bianca","Addilyn","Kira","Veronica","Gwendolyn","Esmeralda","Chelsea","Alison","Skyler","Magnolia","Daphne","Jenna","Everleigh","Kyla","Braelynn","Harlow","Annalise","Mikayla","Dahlia","Maliyah","Averie","Scarlet","Kayleigh","Luciana","Kelsey","Nadia","Amber","Gia","Kamryn","Yaretzi","Carmen","Jimena","Erin","Christina","Katie","Ryan","Viviana","Alexia","Anaya","Serena","Katelyn","Ophelia","Regina","Helen","Remington","Camryn","Cadence","Royalty","Amari","Kathryn","Skye","Emely","Jada","Ariyah","Aylin","Saylor","Kendra","Cheyenne","Fernanda","Sabrina","Francesca","Eve","Mckinley","Frances","Sarai","Carolina","Kennedi","Nylah","Tatum","Alani","Lennon","Raven","Zariah","Leslie","Winter","Abby","Mabel","Sierra","April","Willa","Carly","Jolene","Rosemary","Aviana","Madelynn","Selah","Renata","Lorelei","Briana","Celeste","Wren","Charleigh","Leighton","Annabella","Jayleen","Braelyn","Ashlyn","Jazlyn","Mira","Oakley","Malaysia","Edith","Avianna","Maryam","Emmalyn","Hattie","Kensley","Macie","Bristol","Marlee","Demi","Cataleya","Maia","Sylvia","Itzel","Allyson","Lilith","Melany","Kaydence","Holly","Nayeli","Meredith","Nia","Liana","Megan","Justice","Bethany","Alejandra","Janelle","Elisa","Adelina","Ashlynn","Elianna","Aleah","Myra","Lainey","Blair","Kassidy","Charley","Virginia","Kara","Helena","Sasha","Julie","Michaela","Carter","Matilda","Kehlani","Henley","Maisie","Hallie","Jazmin","Priscilla","Marilyn","Cecelia","Danna","Colette","Baylee","Elliott","Ivanna","Cameron","Celine","Alayah","Hanna","Imani","Angelica","Emelia","Kalani","Alanna","Lorelai","Macy","Karina","Addyson","Aleena","Aisha","Johanna","Mallory","Leona","Mariam","Kynlee","Madilynn","Karen","Karla","Skyla","Beatrice","Dayana","Gloria","Milani","Savanna","Karsyn","Rory","Giuliana","Lauryn","Liberty","Galilea","Aubrie","Charli","Kyleigh","Brylee","Jillian","Anne","Haylee","Dallas","Azalea","Jayda","Tiffany","Avah","Shiloh","Bailee","Jazmine","Esme","Coraline","Madisyn","Elaine","Lilian","Kyra","Kaliyah","Kora","Octavia","Irene","Kelly","Lacey","Laurel","Adley","Anika","Janiyah","Dorothy","Sutton","Julieta","Kimber","Remy","Cassandra","Rebekah","Collins","Elliot","Emmy","Sloan","Hayley","Amalia","Jemma","Jamie","Melina","Leyla","Jaylah","Anahi","Jaliyah","Kailani","Harlee","Wynter","Saige","Alessia","Monica","Anya","Antonella","Emberly","Khaleesi","Ivory","Greta","Maren","Alena","Emory","Alaia","Cynthia","Addisyn","Alia","Lylah","Angie","Ariya","Alma","Crystal","Jayde","Aileen","Kinslee","Siena","Zelda","Katalina","Marie","Pearl","Reyna","Mae","Zahra","Kailey","Jessie","Tiana","Amirah","Madalyn","Alaya","Lilyana","Julissa","Armani","Lennox","Lillie","Jolie","Laney","Roselyn","Mara","Joelle","Rosa","Kaylani","Bridget","Liv","Oaklyn","Aurelia","Clarissa","Elyse","Marissa","Monroe","Kori","Elsa","Rosie","Amelie","Aitana","Aliza","Eileen","Poppy","Emmie","Braylee","Milana","Addilynn","Royal","Chaya","Frida","Bonnie","Amora","Stevie","Tatiana","Malaya","Mina","Emerie","Reign","Zaylee","Annika","Kenia","Linda","Kenna","Faye","Reina","Brittany","Marina","Astrid","Kadence","Mikaela","Jaelyn","Briar","Kaylie","Teresa","Bria","Hadassah","Lilianna","Guadalupe","Rayna","Chanel","Lyra","Noa","Zariyah","Laylah","Aubrielle","Aniya","Livia","Ellen","Meadow","Amiya","Ellis","Elora","Milan","Hunter","Princess","Leanna","Nathalie","Clementine","Nola","Tenley","Simone","Lina","Marianna","Martha","Sariah","Louisa","Noemi","Emmeline","Kenley","Belen","Erika","Myah","Lara","Amani","Ansley","Everlee","Maleah","Salma","Jaelynn","Kiera","Dulce","Nala","Natasha","Averi","Mercy","Penny","Ariadne","Deborah","Elisabeth","Zaria","Hana","Kairi","Yareli","Raina","Ryann","Lexie","Thalia","Karter","Annabel","Christine","Estella","Keyla","Adele","Aya","Estelle","Landry","Tori","Perla","Lailah","Miah","Rylan","Angelique","Avalynn","Romina","Ari","Jaycee","Jaylene","Kai","Louise","Mavis","Scarlette","Belle","Lea","Nalani","Rivka","Ayleen","Calliope","Dalary","Zaniyah","Kaelyn","Sky","Jewel","Joselyn","Madalynn","Paola","Giovanna","Isabela","Karlee","Aubriella","Azariah","Tinley","Dream","Claudia","Corinne","Erica","Milena","Aliana","Kallie","Alyson","Joyce","Tinsley","Whitney","Emilee","Paisleigh","Carolyn","Jaylee","Zoie","Frankie","Andi","Judith","Paula","Xiomara","Aiyana","Amia","Analia","Audrina","Hadlee","Rayne","Amayah","Cara","Celia","Lyanna","Opal","Amaris","Clare","Gwen","Giana","Veda","Alisha","Davina","Rhea","Sariyah","Noor","Danica","Kathleen","Lillianna","Lindsey","Maxine","Paulina","Hailee","Harleigh","Nancy","Jessa","Raquel","Raylee","Zainab","Chana","Lisa","Heavenly","Oaklynn","Aminah","Emmalynn","Patricia","India","Janessa","Paloma","Ramona","Sandra","Abril","Emmaline","Itzayana","Kassandra","Vienna","Marleigh","Kailyn","Novalee","Rosalyn","Hadleigh","Luella","Taliyah","Avalyn","Barbara","Iliana","Jana","Meilani","Aadhya","Alannah","Blaire","Brenda","Casey","Selene","Lizbeth","Adrienne","Annalee","Malani","Aliya","Miley","Nataly","Bexley","Joslyn","Maliah","Zion","Breanna","Melania","Estrella","Ingrid","Jayden","Kaya","Kaylin","Harmoni","Arely","Jazlynn","Kiana","Dana","Mylah","Oaklee","Ailani","Kailee","Legacy","Marjorie","Paityn","Courtney","Ellianna","Jurnee","Karlie","Evalyn","Holland","Kenya","Magdalena","Carla","Halle","Aryanna","Kaiya","Kimora","Naya","Saoirse","Susan","Desiree","Ensley","Renee","Esperanza","Treasure","Caylee","Ellison","Kristina","Adilynn","Anabelle","Egypt","Spencer","Tegan","Aranza","Vada","Emerald","Florence","Marlowe","Micah","Sonia","Sunny","Tara","Riya","Yara","Alisa","Nathalia","Yamileth","Saanvi","Samira","Sylvie","Brenna","Carlee","Jenny","Miya","Monserrat","Zendaya","Alora"];
		var firstNameBoys = ["Liam","Noah","William","James","Logan","Benjamin","Mason","Elijah","Oliver","Jacob","Lucas","Michael","Alexander","Ethan","Daniel","Matthew","Aiden","Henry","Joseph","Jackson","Samuel","Sebastian","David","Carter","Wyatt","Jayden","John","Owen","Dylan","Luke","Gabriel","Anthony","Isaac","Grayson","Jack","Julian","Levi","Christopher","Joshua","Andrew","Lincoln","Mateo","Ryan","Jaxon","Nathan","Aaron","Isaiah","Thomas","Charles","Caleb","Josiah","Christian","Hunter","Eli","Jonathan","Connor","Landon","Adrian","Asher","Cameron","Leo","Theodore","Jeremiah","Hudson","Robert","Easton","Nolan","Nicholas","Ezra","Colton","Angel","Brayden","Jordan","Dominic","Austin","Ian","Adam","Elias","Jaxson","Greyson","Jose","Ezekiel","Carson","Evan","Maverick","Bryson","Jace","Cooper","Xavier","Parker","Roman","Jason","Santiago","Chase","Sawyer","Gavin","Leonardo","Kayden","Ayden","Jameson","Kevin","Bentley","Zachary","Everett","Axel","Tyler","Micah","Vincent","Weston","Miles","Wesley","Nathaniel","Harrison","Brandon","Cole","Declan","Luis","Braxton","Damian","Silas","Tristan","Ryder","Bennett","George","Emmett","Justin","Kai","Max","Diego","Luca","Ryker","Carlos","Maxwell","Kingston","Ivan","Maddox","Juan","Ashton","Jayce","Rowan","Kaiden","Giovanni","Eric","Jesus","Calvin","Abel","King","Camden","Amir","Blake","Alex","Brody","Malachi","Emmanuel","Jonah","Beau","Jude","Antonio","Alan","Elliott","Elliot","Waylon","Xander","Timothy","Victor","Bryce","Finn","Brantley","Edward","Abraham","Patrick","Grant","Karter","Hayden","Richard","Miguel","Joel","Gael","Tucker","Rhett","Avery","Steven","Graham","Kaleb","Jasper","Jesse","Matteo","Dean","Zayden","Preston","August","Oscar","Jeremy","Alejandro","Marcus","Dawson","Lorenzo","Messiah","Zion","Maximus","River","Zane","Mark","Brooks","Nicolas","Paxton","Judah","Emiliano","Kaden","Bryan","Kyle","Myles","Peter","Charlie","Kyrie","Thiago","Brian","Kenneth","Andres","Lukas","Aidan","Jax","Caden","Milo","Paul","Beckett","Brady","Colin","Omar","Bradley","Javier","Knox","Jaden","Barrett","Israel","Matias","Jorge","Zander","Derek","Josue","Cayden","Holden","Griffin","Arthur","Leon","Felix","Remington","Jake","Killian","Clayton","Sean","Adriel","Riley","Archer","Legend","Erick","Enzo","Corbin","Francisco","Dallas","Emilio","Gunner","Simon","Andre","Walter","Damien","Chance","Phoenix","Colt","Tanner","Stephen","Kameron","Tobias","Manuel","Amari","Emerson","Louis","Cody","Finley","Iker","Martin","Rafael","Nash","Beckham","Cash","Karson","Rylan","Reid","Theo","Ace","Eduardo","Spencer","Raymond","Maximiliano","Anderson","Ronan","Lane","Cristian","Titus","Travis","Jett","Ricardo","Bodhi","Gideon","Jaiden","Fernando","Mario","Conor","Keegan","Ali","Cesar","Ellis","Jayceon","Walker","Cohen","Arlo","Hector","Dante","Kyler","Garrett","Donovan","Seth","Jeffrey","Tyson","Jase","Desmond","Caiden","Gage","Atlas","Major","Devin","Edwin","Angelo","Orion","Conner","Julius","Marco","Jensen","Daxton","Peyton","Zayn","Collin","Jaylen","Dakota","Prince","Johnny","Kayson","Cruz","Hendrix","Atticus","Troy","Kane","Edgar","Sergio","Kash","Marshall","Johnathan","Romeo","Shane","Warren","Joaquin","Wade","Leonel","Trevor","Dominick","Muhammad","Erik","Odin","Quinn","Jaxton","Dalton","Nehemiah","Frank","Grady","Gregory","Andy","Solomon","Malik","Rory","Clark","Reed","Harvey","Zayne","Jay","Jared","Noel","Shawn","Fabian","Ibrahim","Adonis","Ismael","Pedro","Leland","Malakai","Malcolm","Alexis","Kason","Porter","Sullivan","Raiden","Allen","Ari","Russell","Princeton","Winston","Kendrick","Roberto","Lennox","Hayes","Finnegan","Nasir","Kade","Nico","Emanuel","Landen","Moises","Ruben","Hugo","Abram","Adan","Khalil","Zaiden","Augustus","Marcos","Philip","Phillip","Cyrus","Esteban","Braylen","Albert","Bruce","Kamden","Lawson","Jamison","Sterling","Damon","Gunnar","Kyson","Luka","Franklin","Ezequiel","Pablo","Derrick","Zachariah","Cade","Jonas","Dexter","Kolton","Remy","Hank","Tate","Trenton","Kian","Drew","Mohamed","Dax","Rocco","Bowen","Mathias","Ronald","Francis","Matthias","Milan","Maximilian","Royce","Skyler","Corey","Kasen","Drake","Gerardo","Jayson","Sage","Braylon","Benson","Moses","Alijah","Rhys","Otto","Oakley","Armando","Jaime","Nixon","Saul","Scott","Brycen","Ariel","Enrique","Donald","Chandler","Asa","Eden","Davis","Keith","Frederick","Rowen","Lawrence","Leonidas","Aden","Julio","Darius","Johan","Deacon","Cason","Danny","Nikolai","Taylor","Alec","Royal","Armani","Kieran","Luciano","Omari","Rodrigo","Arjun","Ahmed","Brendan","Cullen","Raul","Raphael","Ronin","Brock","Pierce","Alonzo","Casey","Dillon","Uriel","Dustin","Gianni","Roland","Landyn","Kobe","Dorian","Emmitt","Ryland","Apollo","Aarav","Roy","Duke","Quentin","Sam","Lewis","Tony","Uriah","Dennis","Moshe","Isaias","Braden","Quinton","Cannon","Ayaan","Mathew","Kellan","Niko","Edison","Izaiah","Jerry","Gustavo","Jamari","Marvin","Mauricio","Ahmad","Mohammad","Justice","Trey","Elian","Mohammed","Sincere","Yusuf","Arturo","Callen","Rayan","Keaton","Wilder","Mekhi","Memphis","Cayson","Conrad","Kaison","Kyree","Soren","Colby","Bryant","Lucian","Alfredo","Cassius","Marcelo","Nikolas","Brennan","Darren","Jasiah","Jimmy","Lionel","Reece","Ty","Chris","Forrest","Korbin","Tatum","Jalen","Santino","Case","Leonard","Alvin","Issac","Bo","Quincy","Mack","Samson","Rex","Alberto","Callum","Curtis","Hezekiah","Finnley","Briggs","Kamari","Zeke","Raylan","Neil","Titan","Julien","Kellen","Devon","Kylan","Roger","Axton","Carl","Douglas","Larry","Crosby","Fletcher","Makai","Nelson","Hamza","Lance","Alden","Gary","Wilson","Alessandro","Ares","Kashton","Bruno","Jakob","Stetson","Zain","Cairo","Nathanael","Byron","Harry","Harley","Mitchell","Maurice","Orlando","Kingsley","Kaysen","Sylas","Trent","Ramon","Boston","Lucca","Noe","Jagger","Reyansh","Vihaan","Randy","Thaddeus","Lennon","Kannon","Kohen","Tristen","Valentino","Maxton","Salvador","Abdiel","Langston","Rohan","Kristopher","Yosef","Rayden","Lee","Callan","Tripp","Deandre","Joe","Morgan","Dariel","Colten","Reese","Jedidiah","Ricky","Bronson","Terry","Eddie","Jefferson","Lachlan","Layne","Clay","Madden","Jamir","Tomas","Kareem","Stanley","Brayan","Amos","Kase","Kristian","Clyde","Ernesto","Tommy","Casen","Ford","Crew","Braydon","Brecken","Hassan","Axl","Boone","Leandro","Samir","Jaziel","Magnus","Abdullah","Yousef","Branson","Jadiel","Jaxen","Layton","Franco","Ben","Grey","Kelvin","Chaim","Demetrius","Blaine","Ridge","Colson","Melvin","Anakin","Aryan","Lochlan","Jon","Canaan","Dash","Zechariah","Alonso","Otis","Zaire","Marcel","Brett","Stefan","Aldo","Jeffery","Baylor","Talon","Dominik","Flynn","Carmelo","Dane","Jamal","Kole","Enoch","Graysen","Kye","Vicente","Fisher","Ray","Fox","Jamie","Rey","Zaid","Allan","Emery","Gannon","Joziah","Rodney","Juelz","Sonny","Terrance","Zyaire","Augustine","Cory","Felipe","Aron","Jacoby","Harlan","Marc","Bobby","Joey","Anson","Huxley","Marlon","Anders","Guillermo","Payton","Castiel","Damari","Shepherd","Azariah","Harold","Harper","Henrik","Houston","Kairo","Willie","Elisha","Ameer","Emory","Skylar","Sutton","Alfonso","Brentley","Toby","Blaze","Eugene","Shiloh","Wayne","Darian","Gordon","London","Bodie","Jordy","Jermaine","Denver","Gerald","Merrick","Musa","Vincenzo","Kody","Yahir","Brodie","Trace","Darwin","Tadeo","Bentlee","Billy","Hugh","Reginald","Vance","Westin","Cain","Arian","Dayton","Javion","Terrence","Brysen","Jaxxon","Thatcher","Landry","Rene","Westley","Miller","Alvaro","Cristiano","Eliseo","Ephraim","Adrien","Jerome","Khalid","Aydin","Mayson","Alfred","Duncan","Junior","Kendall","Zavier","Koda","Maison","Caspian","Maxim","Kace","Zackary","Rudy","Coleman","Keagan","Kolten","Maximo","Dario","Davion","Kalel","Briar","Jairo","Misael","Rogelio","Terrell","Heath","Micheal","Wesson","Aaden","Brixton","Draven","Xzavier","Darrell","Keanu","Ronnie","Konnor","Will","Dangelo","Frankie","Kamryn","Salvatore","Santana","Shaun","Coen","Leighton","Mustafa","Reuben","Ayan","Blaise","Dimitri","Keenan","Van","Achilles","Channing","Ishaan","Wells","Benton","Lamar","Nova","Yahya","Dilan","Gibson","Camdyn","Ulises","Alexzander","Valentin","Shepard","Alistair","Eason","Kaiser","Leroy","Zayd","Camilo","Markus","Foster","Davian","Dwayne","Jabari","Judson","Koa","Yehuda","Lyric","Tristian","Agustin","Bridger","Vivaan","Brayson","Emmet","Marley","Mike","Nickolas","Kenny","Leif","Bjorn","Ignacio","Rocky","Chad","Gatlin","Greysen","Kyng","Randall","Reign","Vaughn","Jessie","Louie","Shmuel","Zahir","Ernest","Javon","Khari","Reagan","Avi","Ira","Ledger","Simeon","Yadiel","Maddux","Seamus","Jad","Jeremias","Kylen","Rashad","Santos","Cedric","Craig","Dominique","Gianluca","Jovanni","Bishop","Brenden","Anton","Camron","Giancarlo","Lyle","Alaric","Decker","Eliezer","Ramiro","Yisroel","Howard","Jaxx"];
		var lastNames = ["Johnson","Nguyen","Hoover","Faulkner","Hale","Melendez","Schmidt","Wood","Anthony","Charles","Horn","Reilly","Aguilar","Sanford","Rodgers","Manning","Gonzales","Summers","Rosales","Berg","Jacobson","Baldwin","Kennedy","Ingram","Keith","Villegas","Franklin","Zavala","Contreras","Burnett","Duarte","Moreno","Palmer","Knapp","Forbes","Kelley","Mccarthy","Oneal","Combs","Gutierrez","Hansen","Savage","Shelton","Morales","Kaufman","Reese","Torres","Greer","Watts","Hendrix","Proctor","Flynn","Gallagher","Vaughn","Blake","Vasquez","Pennington","Kelly","Gregory","Estes","Vincent","Rogers","Cherry","Hernandez","Brown","Higgins","Butler","Hobbs","Haney","Stanley","Bartlett","Simon","Bentley","Mason","Valentine","Pittman","Hodges","Olson","Ritter","Mora","Williams","Gillespie","Barry","Hartman","Giles","Schmitt","West","Lozano","Day","Fry","Escobar","Jones","Henson","Clayton","Sims","Mcclure","Wilcox","Holland","Mann","Meza","Callahan","Yates","Blanchard","Patrick","Pugh","Curtis","Bruce","Hines","Gilbert","Black","Hopkins","Aguirre","Warren","Dunlap","Holloway","Arias","Roberson","Osborn","Conner","Fitzgerald","Benson","Cardenas","Sexton","Harvey","Krueger","Bullock","Gray","Meadows","Maddox","Jimenez","Weiss","Frey","Cole","Bryan","Sloan","Mclean","Mcknight","Archer","Atkinson","Wade","Armstrong","Beltran","Spears","Zamora","Lawrence","Henderson","Bush","Case","Buckley","Camacho","Waller","Cameron","Key","Gibson","Dudley","Hayden","Cruz","Wise","Drake","Mcdowell","Benjamin","Sheppard","Farmer","Little","Valenzuela","Robbins","Ballard","White","Irwin","Rush","Mcintosh","Floyd","Baird","Daniels","Boyle","Tucker","Mckay","Townsend","Norris","Rubio","Knox","Bright","Delacruz","Washington","Mcgrath","Roman","Mercer","Sandoval","Arnold","Morgan","Glenn","Landry","Cisneros","Bautista","Cortez","Orozco","Spence","Hess","Chen","Acosta","Clements","Stewart","Andersen","Mccarty","Morrison","Kline","Cunningham","Mooney","Fritz","Herrera","Shah","Kramer","Khan","Campbell","Riley","Stein","Powell","Singleton","Odom","Cantrell","Warner","Barnett","Webster","Anderson","Knight","Colon","Mills","Marks","Guerrero","Stephenson","Le","Morton","Berger","Maldonado","Vargas","Huff","Schneider","Wilkins","Padilla","Pope","Wolf","Farrell","Solis","Mcclain","Maxwell","Bird","Huynh","Frank","Lin","Mosley","Blevins","Perry","Carrillo","Matthews","Fischer","Goodwin","Glass","Thomas","Mcintyre","Wilkinson","Ochoa","Bell","Beck","Mcpherson","Howe","Stafford","Page","Johnston","Huerta","Mckee","Sutton","Baxter","Richards","Zhang","Hull","Velasquez","Horne","Trevino","Ryan","Zuniga","Lester","Benitez","Logan","Kane","Haas","Barrett","Christensen","Frye","Hodge","Craig","Branch","Gordon","Strong","Parrish","Hall","Dyer","Bradley","Klein","Dillon","Sweeney","Swanson","Carey","Downs","French","Hickman","Mathis","Schroeder","Rocha","Koch","Rasmussen","Lambert","Peters","Bailey","Woodward","Shepard","Vega","Hanna","Boone","Garner","Velazquez","Gonzalez","Roth","Strickland","Ayala","May","Silva","Bridges","Mullen","Mays","Ali","Meyers","Richardson","Gay","Harper","Whitney","Ford","Nunez","Hahn","Moses","Casey","Hart","Travis","Martin","Kidd","Leblanc","Valdez","Rowe","Shea","Conway","Love","Harrison","Campos","Mcdaniel","Rangel","Berry","Mayer","Gould","Mercado","Espinoza","Reeves","Barr","Atkins","Compton","Montgomery","Weaver","Hoffman","Young","Skinner","Lam","Guzman","Howard","Phelps","Chan","Cross","Harrell","Oconnell","Yu","Mcmahon","Johns","Bowman","Harding","Oneill","Patterson","Hampton","Byrd","Ross","Gaines","Clay","Cooke","Shannon","Davidson","Nixon","Barker","Bernard","Davis","Miranda","Livingston","Stuart","Green","Fletcher","Esparza","Mcdonald","Wilkerson","Li","Stanton","Riggs","Brennan","Gill","Sellers","Salinas","Mccullough","Cook","Benton","Rodriguez","Kim","Mcbride","Hammond","Potts","Taylor","Hogan","Harmon","Mitchell","Shields","Webb","Mclaughlin","Freeman","Myers","Lowe","Wiley","Reynolds","Prince","Pham","Woodard","Salazar","Massey","Nelson","Diaz","Francis","Parker","Sparks","Ewing","Raymond","Figueroa","Odonnell","Holder","Salas","Mckenzie","Hester","Ray","Cohen","Montoya","Vazquez","Chaney","Stephens","Allen","Chapman","Fisher","Petersen","Bender","Gardner","Murillo","Nichols","Terry","Pitts","Huang","Cobb","Soto","Rivera","Garrett","Sosa","Frost","Huber","Parsons","Dominguez","Chase","Griffin","Rowland","Simmons","Sanders","Wiggins","Willis","Zimmerman","Villarreal","Dickerson","Perkins","Wallace","Shaffer","Hurst","Clark","Bonilla","Potter","Peck","Kirk","Delgado","Rivers","Cantu","Schultz","Humphrey","Harrington","Hendricks","Mcconnell","Leonard","Beard","Beasley","Mcfarland","Estrada","Lynch","Roberts","Briggs","Munoz","Barber","David","Guerra","Marshall","Donovan","Wong","Meyer","Hayes","Mccann","Woods","Dalton","Greene","Gilmore","Tyler","Flowers","Winters","Melton","Castaneda","Dunn","Bennett","Shaw","Singh","Blackwell","Curry","Elliott","Gentry","Park","Mcgee","Murray","Cline","Carney","Hudson","Heath","Allison","Richmond","Pineda","Rojas","Doyle","Oconnor","Scott","Leon","Santiago","Erickson","Peterson","Arellano","Ortiz","Solomon","Novak","Pratt","Tate","Blackburn","Wells","Kerr","Miller","Edwards","Barnes","Brady","Cain","Finley","Liu","Barron","Mendoza","Castillo","Pacheco","Martinez","Brock","Juarez","Jarvis","Wheeler","Stark","Morse","Hunter","Davila","Walters","Krause","Velez","Medina","Walton","Sampson","Fernandez","Perez","Phillips","Douglas","Lindsey","Robles","Alvarez","Hurley","Yang","Stevens","Mathews","Pruitt","Barajas","Villa","Watkins","Nicholson","Barrera","Oliver","Pierce","Graham","Kent","Cooper","Mccormick","Barton","Mahoney","Cordova","Ward","Fleming","Hutchinson","Bauer","Yoder","Becker","Ponce","Moran","Watson","Davies","Browning","Castro","Santos","Schwartz","Hubbard","Braun","Saunders","Carson","Banks","Jenkins","Deleon","Lopez","Kaiser","Avery","Adkins","Rios","Wang","Haynes","Hatfield","Bates","Fuentes","Maynard","Middleton","Jordan","Ramirez","Morris","Hays","King","Roach","Crane","Porter","Horton","Cooley","Noble","Best","Villanueva","Donaldson","Snyder","Marsh","Steele","Monroe","Avila","Mendez","English","Coleman","Dennis","Mack","Mueller","Dodson","Franco","Ramsey","Sullivan","Booth","Petty","Bond","Burton","Garcia","Frederick","Richard","Hunt","Mckinney","Austin","Miles","Dickson","Mcneil","Conley","Joyce","Mata","Lang","Crawford","Garza","Chambers","Welch","Cervantes","Gibbs","Alexander","Stone","House","Hawkins","Goodman","Sherman","Holt","Ruiz","Bolton","Jacobs","Burgess","Payne","Gates","Hancock","Bowers","Copeland","Frazier","Hicks","Rosario","Wu","Mullins","Haley","Stokes","Spencer","Buchanan","Coffey","Cummings","Randolph","Dorsey","Jennings","Mcmillan","Collier","Mejia","Cuevas","Baker","Underwood","Thompson","Carroll","Duke","Bishop","Carr","Gamble","Leach","Herring","Graves","Andrade","Ferrell","Blankenship","Burke","Fitzpatrick","Patel","Larson","Pace","Joseph","Glover","Chandler","Andrews","Wilson","Nash","Acevedo","Good","Fields","Abbott","Wright","Brandt","York","Navarro","Decker","Eaton","Burns","Foley","Marquez","Adams","Wyatt","Quinn","Walsh","Bradford","Pollard","Keller","Wall","Osborne","Friedman","Hughes","Lawson","Sanchez","Moss","Macdonald","Fuller","Terrell","Ashley","Vance","Nielsen","Lee","Reed","Calderon","Lane","Moody","Walls","Dixon","Owen","Price","Bean","Olsen","Lucero","Smith","Macias","Whitaker","Ortega","Chang","Brooks","Boyd","Riddle","Carpenter","Werner","Cowan","Robertson","Luna","Parks","Vaughan","Houston","Collins","Brewer","Lloyd","Ellis","Arroyo","Henry","Waters","Hill","Harris","Walter","Galvan","Romero","Ramos","Cochran","Ayers","Valencia","Fox","Cabrera","Turner","Vang","Rich","Simpson","Cox","Chavez","Randall","Owens","Davenport","Short","Hebert","Bray","Burch","Orr","Molina","Bryant","Garrison","Herman","Rice","Moyer","Dawson","Christian","Roy","Lamb","Booker","Pena","Robinson","Moon","Blair","Hamilton","Church","Newton","Long","Carlson","Mayo","Levy","Griffith","James","Russo","Stevenson","Jensen","Everett","Mccall","Powers","Montes","Ibarra","Rivas","Santana","Chung","Norton","Levine","Lara","Bowen","Boyer","Hooper","Norman","Walker","Tran","Ball","Daugherty","Weeks","Gomez","Michael","Howell","Ferguson","Crosby","Durham","Lynn","Mccoy","Moore","Hardy","Costa","Poole","Pearson","Suarez","Dougherty","Hensley","Madden","Farley","Ware","Newman","Duncan","Choi","Reid","Carter","Foster","Nolan","Sawyer","Stout","Lutz","Weber","Rose","Larsen","Rollins","Cannon","Whitehead","Gallegos","Lowery","Huffman","Jackson","Tapia","Gross","Bradshaw","Serrano","Lewis","Williamson","Shepherd","Merritt","Small","Todd","Rhodes","Hood","Daniel","Duran","Ellison","Tanner","Russell","Alvarado","Malone","Golden","Sharp","Evans","Lucas","Patton","Conrad","Kirby","Wolfe","Paul","Preston","Schaefer","Fowler","Holden","Morrow","Holmes","Reyes","Neal","Clarke","Hardin","Galloway","Wagner","Dean","Snow","Kemp","Obrien","Caldwell","Calhoun","Mcguire","George","Bass","Hanson","Ho","Thornton","Vedder","Lyons","Hinton","Buck","Flores","Trujillo","Duffy","Murphy","Grimes","Jefferson","Grant"];
		
        
        //check if message was sent to DM or channel text
        if (message.guild == null) {
            message.channel.send("Please use the appropriate channel.");
            return;
        }
        console.log('client avatar: ' + client.user.avatar)
		var serverID = message.guild.id;
        var channelID = message.channel.id;
        var authorID = message.author.id;
		var authorName = message.member.displayName;

        ;
		//all functions used go here first
		console.log('message author: ' + message.author )
        console.log('message author id: ' + message.author.id )
        console.log('message author username: ' + message.author.username )
        console.log('message member displayName: ' + message.member.displayName )
        //message to server

        console.log('channel name: '+ message.channel.name)
        console.log('guild name: ' + message.guild.name)

        //function logMessage() {
		//	if (message.author.id !== '359043900943368212' && message.author.id !== '399836169065725954') {
		//		logMessage = message.member.displayName + " used " + argos[0] + " on #" + message.channel.name + ", server " + message.guild.name + "."
                //command to send messages to different servers
		//		client.guilds.cache.get('538834747237859328').channels.cache.get('565747476536229898').send(logMessage)
		//	}
		//}

		function rollDice(numberOfDice) {
			
		}
        //l5r dice
		function l5rDice(purpose) {
            
            //purpose = what element in argos it will use; 1 if normal roll (the l5r command), 3 if initiative
			//check if syntax is correct
			if (typeof argos[purpose] === 'undefined') {
				message.channel.send('Not a number. Correct syntax: !l5r <number of dice>k<number of dice kept> <TN>')
				return;
			}
			//display help IF purpose is 1 (ie normal roll)
			if (purpose === 1 && argos[purpose]=='help') {
				message.channel.send('Syntax: !l5r <number of dice>k<number of dice kept> <TN>.' + '\n' + "**Commands**" + '\n' + "+emp: Rerolls 1s;" + '\n' + "+void: adds 1k1 to the roll;" + '\n' + "+void2k1: adds 2k1 to the roll;" + "\n" + "+void2k2: adds 2k2 to the roll;" + "\n" + "+exp9: Dice explode on 9s;" + "\n" + "+unskilled: Dice don't explode.")
				return;
			}

            //separate rolled and kept dice
			var argis = argos[purpose].split('k');
			var diceL5r = parseInt(argis[0]);
			var keepL5r = parseInt(argis[1]);
			var tnL5r = "";
			
            //pipOrTn = the next word or number that comes after the dice (rolled and kept); example: !l5r 3k2 +2 <== pipOrTn is the '+2'
            var pipOrTn = parseInt(purpose) + 1;
          	if (!(typeof argos[pipOrTn] === 'undefined')) {
				if (argos[pipOrTn].startsWith('+') || argos[pipOrTn].startsWith('-')) {
					tnL5r = ""
				} else {
                    if (purpose === 1) {
					    tnL5r = parseInt(argos[pipOrTn]);	
                    }
				}
			}
			
            //check if dice and keep are numbers, or if they are higher than 0
			if (Number.isNaN(diceL5r)||Number.isNaN(keepL5r) || diceL5r < 1 || keepL5r < 1) {
				message.channel.send('Not a number. Correct syntax: !l5r <number of dice>k<number of dice kept> <TN>')
                return;
			} else {
				

				var totalDiceResultL5r = [];
				var extraKeptL5r = 0;
				var cmd2L5r = ''
				var argasL5r = ''
				var pipL5r = 0
				var emphasisL5r = false;
				var exp9L5r = false;
				var unskilledL5r = false;
				var voidL5r = false;
				var sumDiceResultL5r = 0
				var pipTotalL5r = 0
				var messageResultL5r=""
				var voidMessageL5r = ""
				var emphasisMessageL5r = ""
				var exp9MessageL5r = ""
				var successL5r = ""
				var tnMessageL5r = ""
				var staticBonusL5r = 0;
				var restoDiceL5r = 0;


				
				for (var jL5r = argos.length; !!jL5r--;){
											
					var pipL5r = 0
					if (argos[jL5r].startsWith('+')) {
						argasL5r = argos[jL5r].slice(1);
						cmd2L5r = argasL5r.toLowerCase();
						pipL5r = parseInt(argasL5r);
						if (!(Number.isNaN(pipL5r))) {
							staticBonusL5r += pipL5r;
						}	
						if (cmd2L5r == 'emp') {
							emphasisL5r = true;
							emphasisMessageL5r = " with Emphasis "
						}
						if (cmd2L5r == 'exp9') {
							exp9L5r = true;	
							if (emphasisL5r) {
								exp9MessageL5r = " and dice exploding on 9s "
							} else {
								" with dice exploding on 9s "
							}		
						} else 
						if (cmd2L5r == 'void' && !(voidL5r)) {
							voidL5r = true;
							diceL5r += 1;
							keepL5r += 1;
							voidMessageL5r = " using void "
						}
						if (cmd2L5r == 'void2k1'&& !(voidL5r)) {
							voidL5r = true;
							diceL5r += 2;
							keepL5r += 1;
							voidMessageL5r = " using void "
						}
						if (cmd2L5r == 'void2k2'&& !(voidL5r)) {
							voidL5r = true;
							diceL5r += 2;
							keepL5r += 2;
							voidMessageL5r = " using void "
						}
						if (cmd2L5r == 'unskilled') {
							unskilledL5r = true;
						}
						
					}
					if (argos[jL5r].startsWith('-')) {
						pipL5r = argos[jL5r].slice(1);
						pipL5r = parseInt(pipL5r);
						if (Number.isNaN(pipL5r)) {
							message.channel.send('Not a number. Correct syntax: !l5r <number of dice>k<number of dice kept> <TN> <-penalty>')
							return;	
						} else {		
							staticBonusL5r -= pipL5r;
						}
					}
				}
		
				//Set 10 dice cap
				var restoL5r = (diceL5r-10)/2;
				while (diceL5r > 10) {
					diceL5r -= 1;
					restoDiceL5r += 1;
					if (keepL5r < 10) {
						if (restoDiceL5r == 2) {
							keepL5r += 1;
							restoDiceL5r = 0
						}
					} else {
						staticBonusL5r += 2;
						restoDiceL5r =- 1
					}
				}
			
			//if (diceL5r > 10) {keepL5r += Math.floor(restoL5r);diceL5r=10};
				for (i = 0; i < diceL5r; i++) {
					var diceExplosionL5r = 0;
					var resultL5r = Math.floor(Math.random() * 10) + 1;
					if (emphasisL5r) {
						while (resultL5r === 1) {
							resultL5r = Math.floor(Math.random() * 10) + 1;
						}
					}
					if (exp9L5r) {
						if (resultL5r >= 9) {
							diceExplosionL5r = resultL5r;
							while (diceExplosionL5r >= resultL5r) {
								diceExplosionL5r = Math.floor(Math.random() * 10) + 1;
								resultL5r += diceExplosionL5r;
							}
						}
					} else {
						if (!(unskilledL5r) && resultL5r == 10) {
							diceExplosionL5r = 10;
							while (diceExplosionL5r == 10) {
								diceExplosionL5r = Math.floor(Math.random() * 10) + 1;
								resultL5r += diceExplosionL5r;
							}
						}
					}
					totalDiceResultL5r.push(resultL5r);
				}
				var totalResultArrangeL5r = totalDiceResultL5r.slice();
				totalResultArrangeL5r.sort(function(a,b){return b - a})
				var keptL5r = totalResultArrangeL5r.slice(0,keepL5r);
				var restoKeepL5r = (keepL5r-10);
			
				if (keepL5r > 10) {staticBonusL5r += Math.floor(restoKeepL5r)*2;keepL5r=10};
				for (var dadaL5r = keptL5r.length; !!dadaL5r--;){
					sumDiceResultL5r += keptL5r[dadaL5r];
				}
			
			
				sumDiceResultL5r += staticBonusL5r;
			
				var diceResultDisplayL5r = "[ "
				
				for (var dL5r = 0; dL5r < totalDiceResultL5r.length; dL5r++){
					var lastL5r = ","
					if (dL5r == totalDiceResultL5r.length - 1) {
						lastL5r = " ]"
					}
					if ((exp9L5r) && totalDiceResultL5r[dL5r] > 9) {
						diceResultDisplayL5r += " **" + totalDiceResultL5r[dL5r] + "** " + lastL5r;
					} else if (totalDiceResultL5r[dL5r] > 10) {
						diceResultDisplayL5r += " **" + totalDiceResultL5r[dL5r] + "** " + lastL5r;
					} else {
						diceResultDisplayL5r += " " + totalDiceResultL5r[dL5r] + " " + lastL5r;
					}
					
				}
				var keptResultDisplayL5r = "[ "
				for (var eL5r = 0; eL5r < keptL5r.length; eL5r++){
					var lastL5r = ","
					if (eL5r == keptL5r.length-1) {
						lastL5r = " ]"
					}
					if ((exp9L5r) && keptL5r[eL5r] > 9) {
						keptResultDisplayL5r += " **" + keptL5r[eL5r] + "** " + lastL5r;
					} else if (keptL5r[eL5r] > 10) {
						keptResultDisplayL5r += " **" + keptL5r[eL5r] + "** " + lastL5r;
					} else {
						keptResultDisplayL5r += " " + keptL5r[eL5r] + " " + lastL5r;
					}				
					
				}
				var staticBonusDisplayL5r = ""
				if (staticBonusL5r > 0) {
					staticBonusDisplayL5r = "+" + staticBonusL5r;
				} else if (staticBonusL5r < 0) {
					staticBonusDisplayL5r = staticBonusL5r;
				}
				
				if (!(tnL5r == "") && !Number.isNaN(tnL5r)) {
					tnMessageL5r = ' against a TN of ' + tnL5r;
					if (sumDiceResultL5r >= tnL5r) {
						successL5r = ". Success!";
					} else {
						successL5r = ". Failure!";
					}
				}
				messageResultL5r = "<@" + message.author.id + ">" + " rolls " + diceL5r + 'k' + keepL5r + staticBonusDisplayL5r + tnMessageL5r + emphasisMessageL5r + exp9MessageL5r + voidMessageL5r + '. They roll ' + diceResultDisplayL5r + ' and keep ' + keptResultDisplayL5r + ', for a total of ' + sumDiceResultL5r + successL5r;
				
				if (purpose === 1) {
					message.channel.send(messageResultL5r)
				}
				if (purpose === 3) {
					
					return {messageResultL5r: messageResultL5r, diceL5r: diceL5r + 'k' + keepL5r, diceResultDisplayL5r: diceResultDisplayL5r, sumDiceResultL5r: sumDiceResultL5r, staticBonusL5r: staticBonusL5r}
				}
			}
		}

		console.log(argos)
		switch(cmd) {
			case 'ping':
				message.channel.send('pong!')
			break;

			function randomName() {
				var nameSex = Math.floor(Math.random() * 2);
				var sex = ""
				
				var nameFirstNameSub = 0;
				var nameFirstNameSubResult = 0;
				var nameFirstNameName = "";
				
				var nameLastNameSub = 0;
				var nameLastNameSubResult = 0;
				var nameLastNameName = "";
								
				var nameFullName = ""
				if (nameSex == 0) {
					nameFirstNameSub = firstNameGirls.length;
					nameFirstNameSubResult = Math.floor(Math.random() * nameFirstNameSub);
					nameFirstNameName = firstNameGirls[nameFirstNameSubResult];
					sex = 'girl'
				} else {
					nameFirstNameSub = firstNameBoys.length;
					nameFirstNameSubResult = Math.floor(Math.random() * nameFirstNameSub);
					nameFirstNameName = firstNameBoys[nameFirstNameSubResult];
					sex = 'boy'
				}	
							
				nameLastNameSub = lastNames.length;
				nameLastNameSubResult = Math.floor(Math.random() * nameLastNameSub);
				nameLastNameName = lastNames[nameLastNameSubResult];
							
				nameFullName = nameFirstNameName + " " + nameLastNameName;
				return {name: nameFullName, sex: sex}
			}
		
			
			
			var genderSelectedRandomName = false;
			var numberSelectedRandomName = false;
			var cmd2RandomName = 0;
			var listRandomName = [];
			var nameSex = Math.floor(Math.random() * 2);
			
			var nameFirstNameSub = 0;
			var nameFirstNameSubResult = 0;
			var nameFirstNameName = "";
			
			var nameLastNameSub = 0;
			var nameLastNameSubResult = 0;
			var nameLastNameName = "";
							
			var nameFullName = nameFirstNameName + " " + nameLastNameName;
			var namePrintName = "";
			var nameStoreNumber = 0;
			var nameStoredNumber = false;
			
			if (argos.length > 1) {
				for (jRandomName = 0; jRandomName < argos.length; jRandomName++){
					cmd2RandomName = parseInt(argos[jRandomName]);
					var lastRandomName = argos.length - jRandomName;
					if (Number.isNaN(cmd2RandomName) && !genderSelectedRandomName && jRandomName > 0) {
						var nameSexPick = argos[jRandomName].toLowerCase();
						if (nameSexPick == "boy") {
							nameSex = 1;
						} else if (nameSexPick == "girl") {
							nameSex = 0;
						} else {
							nameSex = 2
						}
						console.log(nameSex)
						genderSelectedRandomName = true;
					}
					if (!Number.isNaN(cmd2RandomName) || nameStoredNumber || lastRandomName == 1) {
						console.log(genderSelectedRandomName)
						if (genderSelectedRandomName || nameStoreNumber || lastRandomName == 1) {
							
							if (nameStoredNumber) {
								cmd2RandomName = nameStoreNumber;
							}
							if (argos.length < 3 && Number.isNaN(cmd2RandomName)) {
								cmd2RandomName = 1;
							}
							if (!numberSelectedRandomName && nameSex < 2) {
								numberSelectedRandomName = true;
								if (cmd2RandomName > 50) {cmd2RandomName = 50};
								for (pRandomName = 0; pRandomName < cmd2RandomName; pRandomName++) {
									if (nameSex == 0) {
										nameFirstNameSub = firstNameGirls.length;
										nameFirstNameSubResult = Math.floor(Math.random() * nameFirstNameSub);
										nameFirstNameName = firstNameGirls[nameFirstNameSubResult];
									} else {
										console.log("boy")
										nameFirstNameSub = firstNameBoys.length;
										nameFirstNameSubResult = Math.floor(Math.random() * nameFirstNameSub);
										nameFirstNameName = firstNameBoys[nameFirstNameSubResult];
									}
							
									nameLastNameSub = lastNames.length;
									nameLastNameSubResult = Math.floor(Math.random() * nameLastNameSub);
									nameLastNameName = lastNames[nameLastNameSubResult];
							
									nameFullName = nameFirstNameName + " " + nameLastNameName;
									listRandomName.push(nameFullName);
								}
							}									
						} else {
							nameStoreNumber = cmd2RandomName;
							nameStoredNumber = true;
						}
					}
				}
			}
			if (!numberSelectedRandomName && nameSex < 2){
				nameFullName = randomName();
			} else {
				nameFullName = "Nope. It's either boy or girl."
			}
			
			if (numberSelectedRandomName) {
				namePrintName = listRandomName.join(', ');
			} else {
				namePrintName = nameFullName;
			}
			
			message.channel.send(namePrintName)
			
			
			
		break;

			case 'ptg':
					
				//logmessage();
					
				if (typeof argos[1] === 'undefined') {
					message.channel.send('Not a number. Correct syntax: !ptg <number of dice> <difficulty>')
					break;
				}
				var dice = parseInt(argos[1]);
				var diff = parseInt(argos[2]);
				if (Number.isNaN(dice) || dice < 1) {
					message.channel.send('Not a number. Correct syntax: !ptg <number of dice> <difficulty>')
					break;
				} else {
					if (Number.isNaN(diff) || diff < 1) {
						message.channel.send('Not a number. Correct syntax: !ptg <number of dice> <difficulty>')
						break;
					} else {
						var hit = 0;
						var diceResult = [];
						var messageResult = ""
						var success = ""
						var rollOne = false;
						var critFail = false;
						var critFailConsequences = 0
						var critFailConsequencesLabel = ""
						var diceResultDisplay = "["
						for (i = 0; i < dice; i++) {
							var result = Math.floor(Math.random() * 10) + 1;
							if (result > 6) {
								if (result == 10) {
									hit += 2
								} else {
									hit ++
								}
							}
							if (result === 1) {
								rollOne = true;
								critFailConsequences ++
							}
							diceResult.push(result)
						}
						if (hit === 0 && rollOne === true) {
							critFail = true
							if (critFailConsequences === 1) {
								critFailConsequencesLabel = "consequence"
							} else {
								critFailConsequencesLabel = "consequences"
							}
						}
						for (var d = diceResult.length; !!d--;){
							var last = ","
							if (d == 0) {
								last = " ]"
							}
							if (diceResult[d] == 10) {
								diceResultDisplay += " ***" + diceResult[d] + "***" + last;
							} else if (diceResult[d] >= 7) {
								diceResultDisplay += " **" + diceResult[d] + "**" + last;
							} else {
								diceResultDisplay += " " + diceResult[d] + last;
							}
						}
						if (hit > 1) {
							success = hit + " successes!"
						} else {
							success = hit + " success!"
						}
						if (hit >= diff) {
							messageResult = "<@" + authorID + ">" + " rolls " + dice + " dice at difficulty " + diff + " and gets " + diceResultDisplay + ". " + success + " They pass!"
						} else if (critFail === true) {
							messageResult = "<@" + authorID + ">" + " rolls " + dice + " dice at difficulty " + diff + " and gets " + diceResultDisplay + ". No successes. They get a " + "**critical failure** with **" + critFailConsequences + " " + critFailConsequencesLabel + "!!**"
						} else {
							messageResult = "<@" + authorID + ">" + " rolls " + dice + " dice at difficulty " + diff + " and gets " + diceResultDisplay + ". " + success + " They fail!"
						}
						message.channel.send(messageResult)
						
						hit = 0;
						diceResult = [];
						messageResult = ""
						success = ""
						diceResultDisplay = "["
						d = 0
						i = 0
					}	
				}
					
			break;
			case 'grid':
					
				//logmessage();
				
				if (typeof argos[1] === 'undefined') {
					message.channel.send('Invalid. Correct syntax: <grid size> <p1 coordinates> <p2 coordinates> ...')
					break;
				}
				//grid <grid size> <player 1's number of points of interest> <player 2> <player 3, etc> 
				
				var gridSize = parseInt(argos[1]);
				if (Number.isNaN(gridSize)) {
					message.channel.send('Invalid. Correct syntax: <grid size> <p1 coordinates> <p2 coordinates> ...')
					break;
				}
				var totalPlayersGrid = [];
				var playerCountGrid = 0;
				var coordinatesUsed = []
				for (var aGrid = 2; aGrid < argos.length; aGrid++){
					var playerNumberGrid = parseInt(argos[aGrid])
					if (Number.isNaN(playerNumberGrid)){
						message.channel.send('Invalid. Correct syntax: <grid size> <p1 coordinates> <p2 coordinates> ...')
						break;
					} else {	
						playerCountGrid ++;
						totalPlayersGrid.push(playerNumberGrid);
					}
				}
				
				var playerPoiGrid = [];
				for (var bGrid = 0; bGrid < totalPlayersGrid.length; bGrid++) {
					var messageGrid = "God " + (bGrid+1) + ": ";
					for (var cGrid = 0; cGrid < totalPlayersGrid[bGrid]; cGrid++) {
						var xGrid = Math.floor(Math.random() * gridSize) + 1;
						var yGrid = Math.floor(Math.random() * gridSize) + 1;
						messageGrid += " (" + xGrid + ", " + yGrid + ") "
						continue;
					}
					playerPoiGrid.push(messageGrid);					
				}
				message.channel.send(playerPoiGrid.join("\n"))
					
				
			break;
			case 'weg':
				//logmessage();
					
				if (typeof argos[1] === 'undefined') {
					message.channel.send('Not a number. Correct syntax: !weg <number of dice> <difficulty> <+pip> <-pip>')
					break;
				}
				var dice = parseInt(argos[1]);
				var diff = parseInt(argos[2]);
				if (Number.isNaN(dice)) {
					message.channel.send('Not a number. Correct syntax: !weg <number of dice> <difficulty> <+pip> <-pip>')
					
					break;
				} else {
					if (Number.isNaN(diff)) {
						message.channel.send( 'Not a number. Correct syntax: !weg <number of dice> <difficulty> <+pip> <-pip>')
						break;
					} else {
						var wildDieExplosion;
						var messageResult = '';
						var wildDieResult = Math.floor(Math.random() * 6) + 1;
						var diceLeft = dice - 1;
						var diceLeftResult = 0;
						var diceLeftTotal = [];
						var diceLeftSum = 0
						var totalSum = 0
						var error = false
						var success = ''
						var pipBonus = ''
						var diceResultDisplay = "["
						var pipTotal = 0
						if (wildDieResult === 6) {
							wildDieExplosion = 6
							while (wildDieExplosion === 6) {
								wildDieExplosion = Math.floor(Math.random() * 6) + 1;
								wildDieResult += wildDieExplosion;
							}
						}
						for (i = 0; i < diceLeft; i++) {
							diceLeftResult = Math.floor(Math.random() * 6) + 1;
							diceLeftTotal.push(diceLeftResult);
						}
						for (var dada = diceLeftTotal.length; !!dada--;){
							diceLeftSum += diceLeftTotal[dada];
						}
						totalSum = wildDieResult + diceLeftSum;
						for (var j = argos.length; !!j--;){
							var pip = 0			
							if (argos[j].startsWith('+')) {
								pip = argos[j].slice(1);
								pip = parseInt(pip);
								if (Number.isNaN(pip)) {
									message.channel.send('Not a number. Correct syntax: !weg <number of dice> <difficulty> <+pip>')
									error = true	
								} else {
									totalSum += pip;
									pipTotal += pip;
								}
							}							
							if (argos[j].startsWith('-')) {
								pip = argos[j].slice(1);
								pip = parseInt(pip);
								if (Number.isNaN(pip)) {
									message.channel.send('Not a number. Correct syntax: !weg <number of dice> <difficulty> <-pip>')
									error = true	
								} else {
									totalSum -= pip;
									pipTotal -= pip;
								}
							}
							if (pipTotal > 0) {
								pipBonus = "+" + pipTotal;
							} else if (pipTotal < 0) {
								pipBonus = pipTotal;
							}
						}
						var diceResultDisplay = ""
						if (wildDieResult > 6) {
							diceResultDisplay = "[ " + "**(" + wildDieResult + ")**, "
						} else if (wildDieResult == 1) {
							diceResultDisplay = "[ " + "** (" + wildDieResult + " - Critical Failure?)**, "
						} else {
							diceResultDisplay = "[ " + "(" + wildDieResult + "), "
						}
						for (var d = diceLeftTotal.length; !!d--;){
							var last = ","
							if (d == 0) {
								last = " ]"
							}
							if (diceLeftTotal[d] == 6) {
								diceResultDisplay += " __" + diceLeftTotal[d] + "__ " + last;
							} else {
								diceResultDisplay += " " + diceLeftTotal[d] + " " + last;
							}	
						}	
						if (error) { 
							break; 
						} 
						if (totalSum >= diff) {
							success = ". Success!!"
						} else {
							success = ". Failure!!"
						}
						
						
						messageResult = "<@" + authorID + ">" + " rolls " + dice + 'D ' + pipBonus + ' against difficulty ' + diff + '. They roll ' + diceResultDisplay + ', for a total of ' + totalSum + success;
						message.channel.send(messageResult)
						
						return;
					}
				}
					
			break;

			case 'god':

				//logmessage();
					
					//Occupations: Subtype and list of occupations within that subtype
					var occupationList = ["Criminal", ["Big Time", "Sex Worker", "Small Time"], "Fringe", ["Homeless", "Religious", "Rural"], "Unemployed", ["Kid", "Privileged", "Retired"],"Blue Collar", ["Business Owner", "Manual Labor", "Minimum Wage"], "Creative", ["Artist", "Homemaker", "Performer"], "Physical", ["Athlete", "Fighter", "Soldier"], "Academic", ["Explorer", "Professor", "Student"], "Peacekeeper", ["Detective", "Emergency", "Officer"], "Public Life", ["Celebrity", "Media", "Politician"], "Medical", ["Professional", "Scientist", "Therapist"],"White Collar", ["Computer Tech", "Executive", "Lawyer"]];
					var occupationSub = occupationList.length;
					var occupationSubResult = Math.floor(Math.random() * occupationSub);
					if (!(occupationSubResult % 2 === 0)) {
						while (!(occupationSubResult % 2 === 0)) {
							occupationSubResult = Math.floor(Math.random() * occupationSub);
						}	
					}
					var occupationMainPosition = occupationSubResult + 1;
					var occupationMain = occupationList[occupationMainPosition].length;
					var occupationMainResult = Math.floor(Math.random() * occupationMain);
					var occupationSubName = occupationList[occupationSubResult];
					var occupationMainName = occupationList[occupationMainPosition][occupationMainResult];
					var messageOccupation = "**Occupation: **" + occupationSubName + ": " + occupationMainName;
				
					//Archetypes: Archetype: [Attachments][Blessing][Curse]
					var archetypeList = ["Hero", [["+2 Individual Bond Levels", "+2 Landmark Bonus Levels"], ["I'm your opponent now", "Made of sturdy stuff", "Final blow"], ["A Hero's Plight", "Overconfident"]], "Rebel", [["+2 Group Bond Levels", "+2 Vassal Levels"], ["Disrupt the System", "Hoarder", "Revolutionary"], ["Chaotic", "Loner"]], "Wanderer", [["+2 Group Bond Levels", "+2 Relic Levels"], ["I Know a Shortcut", "This is my Town", "Testing Limits"], ["Holes in my Pockets", "Nomadic Tendencies"]], "Caregiver", [["+2 Individual Bond Levels", "+2 Landmark Levels"], ["Adrenaline Kicks in", "Gift for the Team", "First-Aid"], ["I Know Best","Mess With Them and You Mess With Me"]], "Dreamer", [["+2 Landmark Levels", "+2 Relic Levels"], ["Freedom in All Things", "Keep on Creating","Stroke of Genius"],["Daydreaming","Perfectionist"]],"Tyrant",[["+2 Group Levels","+2 Vassal Levels"],["Authoritarian","Entitled","Fate's Compliance"],["Home to Roost","Sand Through my Fingers"]],"Companion",[["+2 Worshiper Levels","+2 Group Levels"],["Community Leader","Fairness","Making Friends"],["Identity Crisis","Loyal to a Fault"]],"Fool",[["+2 Individual Bond Levels","+2 Group Bond Levels"],["For You","Life of the Party","Road Trip!"],["Big Mouth","Like a Grasshopper, Not an Ant"]],"Lover",[["+2 Individual Bond Levels","+2 Group Bond Levels"],["As You Wish","Beyond Pleasurable","Inviting Nature"],["I Want What You Have","You Don't Like it?"]],"Innocent",[["+2 Group Bond Levels","+2 Landmark Levels"],["Average Joe","Martyrdom","Trying New Things"],["Out of my Depth","Trust First"]],"Sage",[["+2 Group Bond Levels","+2 Worshiper Levels"],["All Planned Out","Genius","Outthink the Enemy"],["All This Knowledge for What?","Contemplative"]],"Visionary",[["+2 Individual Bond Levels","+2 Worshiper Levels"],["Make Things Happen","Opportunity Knocks","Scope Out"], ["Not a Mind Reader","Remember Me?"]]];
					var archetypeSub = archetypeList.length;
					var archetypeSubResult = Math.floor(Math.random() * archetypeSub)
					if (!(archetypeSubResult % 2 === 0)) {
						while (!(archetypeSubResult % 2 === 0)) {
							archetypeSubResult = Math.floor(Math.random() * archetypeSub);
						}	
					}	
					var archetypeMainPosition = archetypeSubResult + 1
					var archetypeAttachmentResult = Math.floor(Math.random() * 2);
					var archetypeBlessingResult = Math.floor(Math.random() * 3);
					var archetypeCurseResult = Math.floor(Math.random() * 2);
					var archetypeSubName = archetypeList[archetypeSubResult];
					var archetypeAttachmentName = archetypeList[archetypeMainPosition][0][archetypeAttachmentResult];
					var archetypeBlessingName = archetypeList[archetypeMainPosition][1][archetypeBlessingResult];
					var archetypeCurseName = archetypeList[archetypeMainPosition][2][archetypeCurseResult];
					var messageArchetype = "**Archetype: **" + archetypeSubName + "\n" + "Attachment: " + archetypeAttachmentName + "\n" + "Blessing: " + archetypeBlessingName + "\n" + "Curse: " + archetypeCurseName;
				
					//Dominions: Type [Dominion] [Blessing] [Curse]
					var domList = ["Bestial",[["Cattle","Reptiles","Amphibians","Chihuahuas","Cranes","Fishes","Birds","Mammals","Insects","Bees","Wasps","Ants","Grasshoppers","Bulls","Cows","Goats","Sheep","Alpacas","Pigs","Zebu","Mules","Donkeys","Yaks","Llamas","Deers","Fawns","Otters","Turkeys","Pigeons","Quails","Peacocks","Chickens","Roosters","Horses","Camels","Ducks","Swans","Wombats","Koalas","Kangaroos","Serpents","Snakes","Cobras","Butterflies","Silkworms","Waxworms","Crickets","Guinea Pigs","Elks","Bison","Ostriches","Partridges","Francolins","Minks","Barnacles","Barracuda","Crabs","Clownfish","Whales","Cods","Corals","Starfishes","Dolphins","Eels","Seals","Squids","Shrimps","Jellyfishes","Lobsters","Manta Rays","Manatees","Octopuses","Elephants","Bears","Oysters","Sharks","Sea Urchins","Swordfishes","Walruses","Monkeys","Apes","Chimpanzees","Baboons","Gorillas","Lemurs","Orangutans","Frogs","Toads","Salamanders","Newts","Alligators","Crocodiles","Lizards","Iguanas","Geckos","Vipers","Pythons","Anacondas","Turtles","Tortoises","Chameleons","Cats","Lynxes","Tigers","Lions","Cheetahs","Jaguars","Pumas","Leopards","Panthers","Bobcats","Ocelots","Jackals","Vermin","Rats","Mice","Vultures","Wolves","Foxes","Dogs","Coyotes","Owls","Buzzards","Doves","Coots","Gulls","Eagles","Hawks","Harriers","Crows","Magpies","Ravens","Robins","Twites","Sparrows","Beasts","Scorpions","Raccoons","Squirrels","Spiders","Rhinos","Badgers"],["Beast Tongue","Ferocity","Frenzy"],["Animal Mind","Not My Kind"]],"Conceptual",[["Addiction","Morality","Virility","Imorality","Truth","Lies","Justice","Injustice","Honor","Revenge","Forgiveness", "Family", "Names", "Secrets", "Marriage", "Divorce","Loyalty", "Communication", "Balance",
"Value", "Glory", "Evil", "Tradition", "Stability", "Politeness", "Rudeness", "Grammar", "Languages", "Writing", "Reading", "Death", "Life","Undeath","Exploration","Eating","History","Philosophy","Mathematics","Geometry","Algebra","Triangles","Law","Order","Disorder","Chaos","Theories","Conspiracy","Hiding","Specialty","Mimicry","Stories","Journalism", "Algorithm", "Programing", "Logic", "Rationality", "Irrationality", "Intelligence", "Stupidity", "Idiocy", "Telepathy", "War", "Peace", "Discovery", "Invention", "Discovery", "Status", "Freedom", "Poverty", "Scarcity", "Abundance", "Norms", "Etiquette", "Virginity", "Sexuality", "Homosexuality", "Banality", "Wisdom", "Celebration", "Hospitality", "Romance", "Geniality", "Nationality", "Insanity", "Hierarchy", "Wealth", "Luck", "Bad Luck", "Parenthood", "Womanhood", "Manhood", "Sisterhood", "Brotherhood", "Success", "Failure", "Fertility", "Dreams", "Slumber", "Beauty", "Ugliness", "Courtesy", "Duty"
],["Beacon","Mental Guard","Tongues"],["Bizarro-God","Led By My Power"]],"Elemental",[["Mountains","Amaryllis","Anemones","Begonias","Carnations","Chrysanthemums","Dahlia","Daisies","Gardenias","Hibiscuses","Roots","Branches","Twigs","Pebbles","Sand","Concrete","Snow","Ice","Water","Thunder","Storms","Flowers", "Gold","Metal", "Forests","Mist","Deserts","Void","Jewels","Amethyst","Emeralds","Sapphires","Rubies","Dust","Ashes","Shadows","Light","Fire","Flames","Waves","Ocean","Sea","Lakes","Rivers","Valleys","Meadows","The Earth","Wind","Weather","Sun","Moon","Earthquakes","Tsunami","Hurricanes","Rocks","Wood","Stone","Electricity","Magma","Lava","Air","Tornadoes","Iron","Copper","Silver","Tin", "Coal", "Steam", "Gas", "Leaves"],["Destructive Nature","Elemental Strength","In My Element"],["Tech Allergy","Connected to the Land"]],"Emotional",[["Flirting","Exhaustion","Despair","Hate","Love","Compassion","Nostalgia","Lust","Desire","Pride","Joy","Fear","Sorrow","Affection", "Annoyance", "Anguish", "Awe", "Panic", "Outrage", "Horror", "Humiliation", "Frustration", "Apathy", "Confidence", "Envy", "Gratitude", "Guilt", "Hope", "Pity", "Loneliness", "Shyness", "Trust", "Worry", "Shock",
"Surprise","Callousness","Admiration","Vigilance","Loathing","Grief","Amazement","Terror","Sadness","Cruelty","Spookiness","Peacefulness","Kindness","Bitterness","Jealousy", "Disgust", "Anxiety", "Courage", "Depression", "Laughter", "Rage", "Trust", "Reflection","Ecstasy", "Patience","Anger","Anticipation","Serenity","Allure","Acceptance","Apprehension","Distraction","Pensiveness","Boredom","Interest","Optimism","Submission","Disapproval","Remorse","Contempt","Aggressiveness"],["Fuel My Fire","Siphon","Soothing Aura"],["Apathetic","Overcome with Emotion"]],"Patron",[["Mothers","Married Couples","Communists","Socialists","Thieves","Investigators","Shills","Detectives","Executives","Crime Lords","Pimps","Butlers","Cannibals","Civil Rights Activists","Phillosophers","Fathers","Nieces","Nephews","Widows","Orphans","Haters", "Children","Sinners","Saints","Waiters","Dancers","Scribes","Pole Dancers","Patrons","Hippies","Fashionistas", "Fashion", "Baseball", "Soccer", "Basketball", "Dodgeball","Teenagers", "Brothers", "Sisters", "Grandfathers", "Cousins", "Grandmothers", "Stepmothers", "Stepfathers", "Parents", "Stepparents", "Warriors", "Artists", "Painters", "Thugs", "Virgins", "Nuns", "Priests", "Murderers", "Pickpockets", "Con Artists", "Scammers", "Shepherds", "Farmers", "Builders", "Hermits", "Savages", "Archers", "Gunslingers", "Snipers", "Boxers", "Samurai", "Web Designers", "Librarians", "Blind", "Writers", "Clerks", "Firefighters", "Plumbers", "Mailmen", "Milkmen", "Outlaws", "Criminals", "Chefs","Entertainers", "Hobos", "Taxi Drivers", "Uber Drivers", "Bus Drivers", "Ambulance Drivers", "Helicopter Pilots", "Bikers", "Mother-in-Laws", "Father-in-Laws", "Teachers", "Prostitutes", "Magicians", "Policemen", "Alcoholics", "Pornstars", "Garbagemen", "Managers", "Pro-wrestlers", "Referees", "Innocents", "Dead", "Lost Souls", "Smiths", "Cooks", "Junkheads", "Maids", "Gamblers", "Merchants", "Smuglers", "Traitors", "Wine", "Lost Souls", "Racers", "Travelers", "Explorers", "Nerds", "Jocks", "Cheerleaders", "Social Justice Warriors", "Madmen", "Sociopaths", "Poachers", "Seamstresses", "Students", "LARPers", "Loan Sharks", "Peasants", "Clowns", "Ninja"],["Divinely Skilled","Loved and Worshipped","Patron's Blessing"],["Fox in the Henhouse","Let's see"]],"Tangible",[["Filth","Wetness","Doormats","Claws","Fangs","Talons","Feathers","Teeth","Hooves","Tails","Repellents","Grease","Puppets","Marionettes","French Fries","Chocolate","Cake","Viagra","Aspirins","Brushes","Breeches","Mayonnaise","Oranges","Sugar Plum","Strawberries","Sweetness","Pineapples","Coffee","Fat","Technology","Invention","Sex","Fertility","Bones","Meat","Flesh","Mirrors","Glasses","Glass","Knives","Porcelain","Toys","Trains","Railroads","Roleplaying Games", "Videogames", "Poker", "Ink", "Lockboxes", "Balls", "Inseticides", "Doors", "Bells", "Pets", "Books", "Paper", "Snow Globes", "Trinkets", "Needles","Socks","Gloves", "Shoes", "Green", "Blades", "Money", "Cars", "Wheels", "Gasoline", "Beer","Engines", "Movies", "Pollution", "Drugs", "Sandals", "Tabloids", "Peppers", "Aircrafts", "Clothes", "Fashion", "Baseball", "Soccer", "Basketball", "Dodgeball", "Staves", "Spinners", "Letters", "Bombs", "Scissors", "Butter", "Nails", "Pinky fingers", "Makeup", "Cosmetics", "Energy", "Cellphones", "Sidewalks", "Barbecue", "Documents", "ID Cards", "Fingerprints", "Wardrobes", "Windows", "Boats", "Screwdrivers", "Pianos", "Ropes", "Hot Chocolate","Keyboards", "Air Conditioners", "Bath", "Pipes", "Doorknobs", "Tarot", "Hammers", "Hoes", "Sickles", "Buildings", "Ruins", "Internet", "Gates", "Jails", "Streets", "Strength", "Colors", "Purple", "Slaughter", "Medicine", "Sickness", "Hunger"],["Call me Master","Finder's Keepers","Immunity"],["Everything's a nail","Utterly Alone"]],"Crossover",[["Fashion","Help Desk","Ice cubes","Space","The Hunt","Death","Noses","Rebirth","High Schools","Trickery","Day","Mooks","Heroes","Villains","Night","Unicorns","Elves","Phoenixes","Dreams","Science","Chaos","Sports","Leadership","Agriculture","Music","Hearth","Luck","War","Oaths","Time","Probability","Defilement","Change","Arts","Life","Entropy","Currency","The Mind","Spring","Summer","Autumn","Winter"],["Adaptable","Learning From Others","Reactive"],["Prideful","Unpredictability"]]]
				
					var domSub = domList.length;
					var domSubResult = Math.floor(Math.random() * domSub);
					if (!(domSubResult % 2 === 0)) {
						while (!(domSubResult % 2 === 0)) {
							domSubResult = Math.floor(Math.random() * domSub);
						}	
					}
					var domMainPosition = domSubResult + 1;
					var domMain = domList[domMainPosition][0].length;
					var domMainResult = Math.floor(Math.random() * domMain);
					var domBlessingResult = Math.floor(Math.random() * 3);
					var domCurseResult = Math.floor(Math.random() * 2);
					var domSubName = domList[domSubResult];
					var domMainName = domList[domMainPosition][0][domMainResult];
					var domBlessingName = domList[domMainPosition][1][domBlessingResult];
					var domCurseName = domList[domMainPosition][2][domCurseResult];
					var messageDom = "**Dominion: **" + domMainName + "\n" + "Type: " + domSubName + "\n" + "Blessing: " + domBlessingName + "\n" + "Curse: " + domCurseName;
				
					//Theologies
					var theoTotal = ["Ascendant","Cult of the Saints","Drifting Kingdoms","Kunitsukami","Masks of Jana","Order of Meskhenet","Phoenix Society","Puck-Eaters","Warlock's Fate"]
					var theoResult = Math.floor(Math.random() * theoTotal.length);
					var theoName = theoTotal[theoResult];
					var messageTheo = "**Theology: **" + theoName;
					messageTotal = messageOccupation + '\n' + messageArchetype + '\n' + messageDom + '\n' + messageTheo
					console.log('messageTotal :' + messageTotal)
					message.channel.send(messageTotal)
					
				break;

			case 'l':
			case 'l5r':
				//logmessage()
				console.log('reroll here? 300')
				l5rDice(1);
			break;

			case 'c':
			case 'cod':
					
				//logmessage()
										
				function codDice() {
					
					if (typeof argos[1] === 'undefined') {
						message.channel.send('Not a number. Correct syntax: !cod <number of dice>');
						return;
					}
					if (argos[1].toLowerCase()=='help') {
						message.channel.send('Syntax: !cod <number of dice>' + '\n' + '**Commands**' + '\n' + 'WP: adds 3 dice to the roll;' + '\n' + '9exp : dice explode on 9s;' + '\n' + '8exp: dice explode on 8s' + '\n' + 'noexp: dice do not explode' + '\n' + 'rote: rerolls dice under 8.' + '\n' + 'chance: rolls a chance die.')
						return;
					}
					if (argos[1].toLowerCase()==='chance' || argos[1].toLowerCase()==='c') {
						var chanceDie = Math.floor(Math.random() * 10) + 1
						var chanceMessage = ""
						if (chanceDie === 1) {
							chanceMessage = "<@" + message.author.id + "> rolls a chance die and gets **1!** **Dramatic Failure!**";
						} else if (chanceDie === 10) {
							chanceMessage = "<@" + message.author.id + "> rolls a chance die and gets **10!** **Success!**";
						} else {
							chanceMessage = "<@" + message.author.id + "> rolls a chance die and gets " + chanceDie + ". **Failure.**";
						}
						message.channel.send(chanceMessage)
						
						return;								
					}
					var dice = parseInt(argos[1]);
					
					if (isNaN(dice) || dice > 100 || dice < 1) {
						message.channel.send('Not a number or too many dice. Correct syntax: !cod <number of dice>')
						return; 
					} else {
						var hit = 0;
						var diff = 8;
						var roteDice = 0;
						var diceResult = [];
						var roteResult = []
						var messageResult = "";
						var success = "";
						var diceOrDie = ""
						var wp = false;
						var exp9 = false;
						var exp8 = false;
						var expNope = false;
						var rote = false;
						var shitAgainMessage = '';
						var wpMessage = '';
						var roteMessage = '';
						var roteMessageResult = "";
						var cmd2 = '';
						var argas = '';
						var result = 0;
						var diceResultDisplay = "[";
						if (dice === 1) {diceOrDie = "die"}
						else {diceOrDie = "dice"}
						for (var j = argos.length; !!j--;){
							argas = argos[j];
							cmd2 = argas.toLowerCase();
							if (cmd2 === 'wp' && !(wp)) {
								wp = true;
								dice += 3;
								wpMessage = " using **Willpower**"
							}
							if (cmd2 === 'rote') {
								rote = true;
								roteMessage = " with the Rote quality"
							}
							if (cmd2 === '9exp') {
								exp9 = true;
								exp8 = false;
								expNope = false;
								if (rote) {
									shitAgainMessage = " with the 9-again"
								} else {
									shitAgainMessage = " with the 9-again quality"
								}
							} else if (cmd2 === '8exp') {
								exp9 = false;
								exp8 = true;
								expNope = false;
								if (rote) {
									shitAgainMessage = " with the 8-again"
								} else {
									shitAgainMessage = " with the 8-again quality"
								}
							} else if (cmd2 === 'noexp') {
								exp9 = false;
								exp8 = false;
								expNope = true;
								if (rote) {
									shitAgainMessage = " without the 10-again quality and"
								} else {
									shitAgainMessage = " without the 10-again quality"
								}
							}
						}
						if (rote === true && (exp8 === true || exp9 === true)) {
							roteMessage = " and Rote qualities"
						}
						function diceRoller(quantity, destination) {
							var resultString = "";
							var last = ", ";
							for (i = 0; i < quantity; i++) {
								if (i === quantity - 1) {
									last = ""
								}
								result = Math.floor(Math.random() * 10) + 1;
								if (!expNope && !exp8 && !exp9 && result == 10) {
									destination.push(result)
									hit++
									resultString += "***" + result + "*** ";
									while (result === 10) {
										result = Math.floor(Math.random() * 10) + 1;
										if (result === 10) {
											hit++
											resultString += "(***" + result + "***) ";
										}
										else if (result >= diff) {
											hit ++
											resultString += "(**" + result + "**)" + last;
										} else {
											resultString += "(" + result + ")" + last;
										}
									}
								} else if (exp9 && result >= 9) {
									destination.push(result)
									hit++
									resultString += "***" + result + "*** ";
									while (result >= 9) {
										result = Math.floor(Math.random() * 10) + 1;
										if (result >= 9) {
											hit++
											resultString += "(***" + result + "***) ";
										}
										else if (result >= diff) {
											hit ++
											resultString += "(**" + result + "**)" + last;
										} else {
											resultString += "(" + result + ")" + last;
										}
									}
								} else if (exp8 && result >= 8) {
									destination.push(result)
									hit++
									resultString += "***" + result + "*** ";
									while (result >= 8) {
										result = Math.floor(Math.random() * 10) + 1;
										if (result >= 8) {
											hit++
											resultString += "(***" + result + "***) ";
										}
										else if (result >= diff) {
											hit ++
											resultString += "(**" + result + "**)" + last;
										} else {
											resultString += "(" + result + ")" + last;
										}
									}
								} else if (result >= diff) {
									hit ++
									destination.push(result)
									resultString += "**" + result + "**" + last;
								} else {
									destination.push(result);
									if (!rote) {
										resultString += result + last;
									} else {
										resultString += "~~" + result + "~~" + last;
									}
								}
							}
							return resultString;
						}
						
						
						diceResultDisplay = "[ " + diceRoller(dice,diceResult) + " ]";
						
						if (rote) {
							var roteDiceOrDie = ""
							for (w = 0; w < diceResult.length; w++) {
								if (diceResult[w] < diff) {
									roteDice++
								}
							}
							if (roteDice === 1) {roteDiceOrDie = "die"}
							else {roteDiceOrDie = "dice"}
							rote = false;
							roteMessageResult = ". They re-roll " + roteDice + " " + roteDiceOrDie + " and get "
							roteMessageResult += "[ " + diceRoller(roteDice,roteResult) + " ]";
						}
												
							
							
						if (hit > 1) {
							if (hit >= 5) {
								success = "**" + hit + " successes for an** " + "__**Exceptional Success!!**__";
							} else {
								success = "**" + hit + " successes.**";
							}
						} else if (hit === 1) {
							success = "**" + hit + " success!**"
						} else {
							success = hit + " successes and **fail!**"
						}
						
						messageResult = "<@" + message.author.id + ">" + " rolls " + dice + " " + diceOrDie + wpMessage + shitAgainMessage + roteMessage + " and obtains " + diceResultDisplay + roteMessageResult + ". They get " + success
							
						message.channel.send(messageResult)
						console.log(diceOrDie)
					}	
				}
				codDice();
					
			break;

			case 'world':
					
                    //logmessage()
					function worldDice() {
						if (authorID === '379193047680024577'){
							return
						}
						var worldSyntax = 'Not a number. Correct syntax: !world <number of dice> <world number (higher than 0, lower than 21)>'
						if (typeof argos[1] === 'undefined') {
							message.channel.send(worldSyntax)							
							return;
						}
						if (argos[1].toLowerCase()=='help') {
							message.channel.send('!world <number of dice> <world number (higher than 0, lower than 21)>' + '\n' + '**Commands**' + '\n' + 'WP: adds 3 dice to the roll;' + '\n' + '9exp : dice explode on 9s;' + '\n' + '8exp: dice explode on 8s' + '\n' + 'noexp: dice do not explode' + '\n' + 'rote: rerolls dice under 8.' + '\n' + 'chance: rolls a chance die.')
							return;
						}
						if (argos[1].toLowerCase()=='list') {
							message.channel.send('World List' + '```1: Silvan \n' + '2: Kreopola \n' + '3: Shaex \n' + '4: Carania \n' + '5: Rayacandria \n' + '6: Cyre \n' + '7: Allesiania \n' + '8: Phosortum\n' + '9: Cavina \n' + '10: Eosamar \n' + '11: Earth \n' + '12: Porlana \n' + '13: Lasomer \n' + '14: Lacksri \n' + '15: Neullan \n' + '16: Brizmo \n' + '17: Chazanloria \n' + '18: Foandaria \n' + '19: Melodre \n' + '20: Hazthys ```')
							return;
						}
						if (argos[1].toLowerCase()==='chance' || argos[1].toLowerCase()==='c') {
							var chanceDie = Math.floor(Math.random() * 10) + 1
							var chanceMessage = ""
							if (chanceDie === 1) {
								chanceMessage = "<@" + message.author.id + "> rolls a chance die and gets **1!** **Dramatic Failure!**";
							} else if (chanceDie === 10) {
								chanceMessage = "<@" + message.author.id + "> rolls a chance die and gets **10!** **Success!**";
							} else {
								chanceMessage = "<@" + message.author.id + "> rolls a chance die and gets " + chanceDie + ". **Failure.**";
							}
							message.channel.send(chanceMessage)
							return;								
						}
						var worldList = ["Silvan","Kreopola","Shaex","Carania","Rayacandria","Cyre","Allesiania","Phosortum","Cavina","Eosamar","Earth","Porlana","Lasomer","Lacksri","Neullan","Brizmo","Chazanloria","Foandaria","Melodre","Hazthys"]	
						if (argos[1].toLowerCase()=='random') {
							var randomWorld = Math.floor(Math.random() * 20)
							var randomWorldName = worldList[randomWorld]

							message.channel.send("<@" + message.author.id + "> picks a random world! Result: " + randomWorldName + ".")
							return;
						}
						var dice = parseInt(argos[1]);
						var worldNumber = parseInt(argos[2]);
						if (Number.isNaN(worldNumber) || worldNumber > 20 || worldNumber < 1) {
							message.channel.send(worldSyntax)
							return;
						}
						console.log(worldNumber)
						if (isNaN(dice) || dice > 100 || dice < 1) {
							message.channel.send('Not a number or too many dice. Correct syntax: !world <number of dice> <world number> (higher than 0, lower than 21)')
							return; 
						} else {
							var hit = 0;
							var diff = 8;
							var roteDice = 0;
							var diceResult = [];
							var roteResult = []
							var messageResult = "";
							var success = "";
							var wp = false;
							var exp9 = false;
							var exp8 = false;
							var expNope = false;
							var rote = false;
							var shitAgainMessage = '';
							var wpMessage = '';
							var roteMessage = '';
							var roteMessageResult = "";
							var cmd2 = '';
							var argas = '';
							var result = 0;
							var diceResultDisplay = "[";
							for (var j = argos.length; !!j--;){
								argas = argos[j];
								cmd2 = argas.toLowerCase();
								if (cmd2 === 'wp' && !(wp)) {
									wp = true;
									dice += 3;
									wpMessage = " using **Willpower**"
								}
								if (cmd2 === 'rote') {
									rote = true;
									roteMessage = " with the Rote quality"
								}
								if (cmd2 === '9exp') {
									exp9 = true;
									exp8 = false;
									expNope = false;
									if (rote) {
										shitAgainMessage = " with the 9-again"
									} else {
										shitAgainMessage = " with the 9-again quality"
									}
								} else if (cmd2 === '8exp') {
									exp9 = false;
									exp8 = true;
									expNope = false;
									if (rote) {
										shitAgainMessage = " with the 8-again"
									} else {
										shitAgainMessage = " with the 8-again quality"
									}
								} else if (cmd2 === 'noexp') {
									exp9 = false;
									exp8 = false;
									expNope = true;
									if (rote) {
										shitAgainMessage = " without the 10-again quality and"
									} else {
										shitAgainMessage = " without the 10-again quality"
									}
								}
							}
							if (rote === true && (exp8 === true || exp9 === true)) {
								roteMessage = " and Rote qualities"
							}
														
							function diceRoller(quantity, destination) {
								var resultString = "";
								var last = ", ";
								for (i = 0; i < quantity; i++) {
									if (i === quantity - 1) {
										last = ""
									}
									result = Math.floor(Math.random() * 10) + 1;
									if (!expNope && !exp8 && !exp9 && result == 10) {
										destination.push(result)
										hit++
										resultString += "***" + result + "*** ";
										while (result === 10) {
											result = Math.floor(Math.random() * 10) + 1;
											if (result === 10) {
												hit++
												resultString += "(***" + result + "***) ";
											}
											else if (result >= diff) {
												hit ++
												resultString += "(**" + result + "**)" + last;
											} else {
												resultString += "(" + result + ")" + last;
											}
										}
									} else if (exp9 && result >= 9) {
										destination.push(result)
										hit++
										resultString += "***" + result + "*** ";
										while (result >= 9) {
											result = Math.floor(Math.random() * 10) + 1;
											if (result >= 9) {
												hit++
												resultString += "(***" + result + "***) ";
											}
											else if (result >= diff) {
												hit ++
												resultString += "(**" + result + "**)" + last;
											} else {
												resultString += "(" + result + ")" + last;
											}
										}
									} else if (exp8 && result >= 8) {
										destination.push(result)
										hit++
										resultString += "***" + result + "*** ";
										while (result >= 8) {
											result = Math.floor(Math.random() * 10) + 1;
											if (result >= 8) {
												hit++
												resultString += "(***" + result + "***) ";
											}
											else if (result >= diff) {
												hit ++
												resultString += "(**" + result + "**)" + last;
											} else {
												resultString += "(" + result + ")" + last;
											}
										}
									} else if (result >= diff) {
										hit ++
										destination.push(result)
										resultString += "**" + result + "**" + last;
									} else {
										destination.push(result);
										if (!rote) {
											resultString += result + last;
										} else {
											resultString += "~~" + result + "~~" + last;
										}
									}
								}
								return resultString;
							}
							
							
							diceResultDisplay = "[ " + diceRoller(dice,diceResult) + " ]";
							
							if (rote) {
								for (w = 0; w < diceResult.length; w++) {
									if (diceResult[w] < diff) {
										roteDice++
									}
								}
								rote = false;
								roteMessageResult = ". They re-roll " + roteDice + " dice and get "
								roteMessageResult += "[ " + diceRoller(roteDice,roteResult) + " ]";
							}
													
							
							
							if (hit > 1) {
								if (hit >= 5) {
									success = "**" + hit + " successes for an** " + "__**Exceptional Success!!**__";
								} else {
									success = "**" + hit + " successes.**";
								}
							} else if (hit === 1) {
								success = "**" + hit + " success!**"
							} else {
								success = hit + " successes and **fail!**"
							}
							
							
						}
						
						var odds = 0
						var worldSelect = 0
						var worldSelectName = ""
						var oddResults = 0
						var success = true
						var worldMessage = ""
						if (hit === 0) {
							odds = 20
						} else if (hit === 1) {
							odds = 5
						} else if (hit === 2) {
							odds = 4
						} else if (hit === 3) {
							odds = 2
						} else {
							odds = 0
						}
						
						if (odds === 0) {
							worldSelect = worldNumber -1
						} else {
							oddResults = Math.floor(Math.random() * odds) + 1
							if (oddResults === 1) {
								worldSelect = worldNumber -1
							} else {
								worldList.splice(worldNumber, 1)
								worldSelect = Math.floor(Math.random() * odds)
							}
						}
						worldSelectName = worldList[worldSelect]
						if (worldSelectName === worldList[worldNumber-1]) {
							success = true
							worldMessage = ". They succeed!"
						} else {
							success = false
							worldMessage = ". They fail and end up jumping to " + worldSelectName + "!"
						}
						console.log("worldList: " + worldList)
						console.log("oddResults: " + oddResults)
						console.log("odds: " + odds)
						console.log("worldNumber: " + worldNumber)
						console.log("worldSelect: " + worldSelect)
						console.log("Attempted world: " + worldList[worldNumber-1])
						console.log("worldSelectName: " + worldSelectName)

						messageResult = "<@" + message.author.id + ">" + " is attempting to jump to " + worldList[worldNumber-1] + worldMessage
							
						message.channel.send(messageResult)
						
					}
					worldDice()
				break;

				case 'init':
				case 'inits':
				case 'initiative':
                    
					//First write all the functions that will be used later on
					//Structure of the json file:
                    //all objects: {
                    //  server's ID: {
                    //      channel's ID: {
					//			server name
                    //          channel name
					//			system
                    //          GM ID:
					//			GM name:
                    //          Characters: information about all characters involved in current combat [ {
                    //              the Player's ID, or NPC if the one who added the character is the GM {
                    //                  Character's name: the character's name
                    //                  Total initiative: the static bonus + rolled die (if cod or wod) or the roll results (if l5r)
                    //                  Initiative modifier: the static bonus (for cod and wod) or the initiative dicepool (if l5r)
                    //                  Initiative die result: the result of rolled dice (array if l5r)
                    //                  Initiative mod: a bonus or penalty used by the GM with the mod command. Persists until manually removed.
					//					Declared action: what the character intends to do when it's their turn
                    //              } ]
                    //          }
                    //          Round: the current round in combat
                    //          currentCharacterInitiatives: array with all characters involved in combat's Total initiative who haven't acted in the turn yet
                    //          currentCharacterNames: array with all characters involved in combat's names who haven't acted in the turn yet
					//			currentCharacterDeclarations: array with all characters who haven't acted in the turn yet's declaration
                    //          holdingCharacterInitiavitves: array with all characters involved in combat's Total initiative who have taken the Hold action
                    //          holdingCharacterNames: array with all characters involved in combat's names who have taken the Hold action
                    //          waitingCharacterInitiatives: array with all characters involved in combat's Total initiative who have already acted in the turn
                    //          waitingCharacterNames: array with all characters involved in combat's names who have already acted in the turn
					//			
                    //      }
                    //  }
                    //}
                    
                    //logmessage()

                    //First function is to sort all numbers from a's highest to lowest and mimicked by b.
                    

                    function initiativeSystem() {
						var initsMessage = "";//setting up the command
                        var command = argos[1].toLowerCase();
						var serverCheck = serverID in inits
						var characterName = argos[2];
						var characterExists = false;
						

						function bubbleSort(a,b) {
							var swapped;
							do {
								swapped = false;
								for (var i=0; i < a.length-1; i++) {
									if (a[i] < a[i+1]) {
										var temp = a[i];
										a[i] = a[i+1];
										a[i+1] = temp;
										
										var temp = b[i];
										b[i] = b[i+1];
										b[i+1] = temp;
										swapped = true;
									}
								}	
							} while (swapped);
						}
	
						function getInitsList() {
							bubbleSort(inits[serverID][channelID].currentCharacterInitiatives,inits[serverID][channelID].currentCharacterNames);
							bubbleSort(inits[serverID][channelID].currentCharacterInitiatives,inits[serverID][channelID].currentCharacterDeclarations);
							
							//inits = json file; initsNewID = server ID; 										
							if (typeof inits[serverID][channelID].holdingCharacterInitiavitves[0] !== 'undefined') {
								bubbleSort(inits[serverID][channelID].holdingCharacterInitiavitves,inits[serverID][channelID].holdingCharacterNames)
							}						
							if (typeof inits[serverID][channelID].waitingCharacterInitiatives[0] !== 'undefined') {
								bubbleSort(inits[serverID][channelID].waitingCharacterInitiatives,inits[serverID][channelID].waitingCharacterNames)
							}
									
							function setPrint(variable, total) {
								var printTrim = variable;
								
								var charactersLeft = total - printTrim.length;
								if (charactersLeft < 0) {charactersLeft = printTrim.length - total; total = printTrim.length};
								var whiteSpace = " ";
								if (charactersLeft === 0) {whiteSpace = ""};
								var printFull = printTrim + whiteSpace.repeat(charactersLeft);
								return printFull;
							}
							for (yInits = 0; yInits < inits[serverID][channelID].currentCharacterInitiatives.length; yInits++) {
								if (command === 'next' || command === 'hold') {
									
									console.log('aba teste 2')
									if (yInits === 0) {
										console.log('aba teste 3')
											for (bInits = 0; bInits < inits[serverID][channelID].Characters.length; bInits ++) {
												console.log('aba teste 4')
												if (inits[serverID][channelID].Characters[bInits].Name == inits[serverID][channelID].currentCharacterNames[0]) {
													console.log('aba teste 5')
													initsItsYourTurn = inits[serverID][channelID].Characters[bInits]["Player ID"];
												}
											}
										}
									}
								var initsPrintListFull = setPrint(inits[serverID][channelID].currentCharacterNames[yInits],12);
								console.log('inits[serverID][channelID].currentCharacterNames[yInits]: ' + inits[serverID][channelID].currentCharacterNames[yInits])
								console.log('initsPrintListFull: ' + initsPrintListFull)
								initsMessage += initsPrintListFull + " => " + inits[serverID][channelID].currentCharacterInitiatives[yInits] + " " + inits[serverID][channelID].currentCharacterDeclarations[yInits] + "\n";											
							}
							if (typeof inits[serverID][channelID].holdingCharacterInitiavitves[0] !== 'undefined') {
								for (dInits = 0; dInits < inits[serverID][channelID].holdingCharacterInitiavitves.length; dInits++) {
									var initsPrintListFull2 = setPrint(inits[serverID][channelID].holdingCharacterNames[dInits],12);
									initsMessage += initsPrintListFull2 + " => " + inits[serverID][channelID].holdingCharacterInitiavitves[dInits] + " Holding \n";
								}
							}
							console.log('inits[serverID][channelID].waitingCharacterNames[0]: ' + inits[serverID][channelID].waitingCharacterNames[0])
							if (typeof inits[serverID][channelID].waitingCharacterNames[0] !== 'undefined') {
								console.log('aba teste 6')
								for (wInits = 0; wInits < inits[serverID][channelID].waitingCharacterNames.length; wInits++) {
									console.log('inits[serverID][channelID].waitingCharacterNames[wInits]: ' + inits[serverID][channelID].waitingCharacterNames[wInits])
									var initsPrintListFull3 = setPrint(inits[serverID][channelID].waitingCharacterNames[wInits],12);
									initsMessage += initsPrintListFull3 + " => " + inits[serverID][channelID].waitingCharacterInitiatives[wInits] + " Waiting \n";
									console.log('aba teste 7')
								}
							}
							
						}

                        
						if (serverCheck) {var channelCheck = channelID in inits[serverID]}
						
                    
                        //show error if there is no command after !init
                        if (typeof argos[1] === 'undefined') {
                            initsMessage = 'Invalid. Correct syntax: !inits <command>'
                            message.channel.send(initsMessage)
                            return;
                        }
                    
                    
                        //help command
                        if (command == 'help') {
                            initsMessage = "```!inits <command> \n \n" + "!inits new <system>: Starts a new combat. Whoever starts it becomes the GM. Current systems: wod, cod and l5r. \n \n" + "!inits add <character name> <initiative modifier>: Adds a new character to combat. Each PC must be entered by their own player. Only the GM can add more than one character. \n \n" + "!inits list: Shows current initiative order. \n \n" + "!inits next: Moves the initiative order along and tags whoever is next in turn. After the last character's turn, a new round starts and all characters have their initiatives rolled automatically. Only the GM can use this command. \n \n" + "!inits remove <character name>: Removes the character from combat. Only the Storyteller can use this command. \n \n" + "!inits mod <character name> <mod>: Changes the character's initiative. Example: +2 adds 2 to initiative, -4 reduces initiative by 4. Lasts until next round. Only the Storyteller can use this command. \n \n" + "!inits info <character>: Displays a character's initiative, their modifier, their die number and modifications made by the GM \n \n" + "!inits clear: Ends combat.```"
                            message.channel.send(initsMessage)
                            return;
                        }
                        
                        console.log('comamand: ' + command)
                        console.log('inits: ' + inits)
                        console.log('server id: ' + serverID)
                        
                        switch(command) {
                            case 'new':
                                //if (Object.values(inits.serverID['channel ID']).includes(channelID)) {console.log('funcionou')} else {console.log('nops')}
                               
								if (serverCheck && channelCheck) {
									initsMessage = "Error. Combat already in progress. Use !inits clear to end current combat."
									message.channel.send(initsMessage)
                                    break;
								}
								if (typeof argos[2] !== 'undefined') {
                                   var systemName = argos[2].toLowerCase();
                                } else {
                                    initsMessage = "Error. Invalid system. Correct syntax: !inits new wod. (example)"
                                    message.channel.send(initsMessage)
                                    break;
                                }

								if (systemName != 'wod') {
									if (systemName != 'l5r') {
										if(systemName != 'cod') {
											console.log(systemName)
											initsMessage = "Error. Invalid system. Current supported systems: wod, l5r, cod."
                                    		message.channel.send(initsMessage)
                                    		break;
										}
									}
								}
								if(!serverCheck) {inits[serverID] = {}}
								if(!channelCheck) {inits[serverID][channelID] = {}}								
                                inits[serverID][channelID]["Server name"] = message.guild.name;
                                inits[serverID][channelID]["Channel name"] = message.channel.name;
                                inits[serverID][channelID]["system"] = systemName;
                                inits[serverID][channelID]["GM ID"] = authorID;
								inits[serverID][channelID]["GM name"] = message.member.displayName;								 
                                inits[serverID][channelID]["Characters"] = []; 
                                inits[serverID][channelID]["round"] = 1;
								inits[serverID][channelID].currentCharacterInitiatives = [];
								inits[serverID][channelID].currentCharacterNames = [];
								inits[serverID][channelID].currentCharacterDeclarations = []
								inits[serverID][channelID].holdingCharacterInitiavitves = [];
								inits[serverID][channelID].holdingCharacterNames = [];
								inits[serverID][channelID].waitingCharacterInitiatives = [];
								inits[serverID][channelID].waitingCharacterNames = [];
                               
                                fs.writeFile("inits2.json", JSON.stringify(inits), "utf8", function(err) {
									if (err) throw err;
									console.log("File saved.");
								});
								initsMessage = "New combat started by " + "<@" + authorID + ">" + ". Use !inits add <Character Name> <Initiative Modifier> to add a new character."
								message.channel.send(initsMessage)
                            //end of New
                            break;

							case 'add':
								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No combat is currtently in progress."
									message.channel.send(initsMessage)
                                    break;
								}
								if (typeof argos[2] === 'undefined') {
									console.log('erro AQUI')
									initsMessage = "Error. Enter the character's name and modifier."
									message.channel.send(initsMessage)
                                    break;
								}
								var characterDuplicate = false
								for (m = 0; m < inits[serverID][channelID].currentCharacterNames.length; m++) {
									if (characterName === inits[serverID][channelID].currentCharacterNames[m]) {
										characterDuplicate = true;
									}
									if (characterName === inits[serverID][channelID].holdingCharacterNames[m]) {
										characterDuplicate = true;
									}
									if (characterName === inits[serverID][channelID].waitingCharacterNames[m]) {
										characterDuplicate = true;
									}
								}
								if (characterDuplicate) {
									initsMessage = "Error. " + characterName + " is already in combat."
									message.channel.send(initsMessage)
                                    break;	
								}
								if (inits[serverID][channelID].system === 'wod' || inits[serverID][channelID].system === 'cod') {
									var initMod = parseInt(argos[3]);
									if (Number.isNaN(initMod)) {
										initsMessage = "Error. Insert character initiative modifier."
										message.channel.send(initsMessage)
										break;
									}
								} else if (inits[serverID][channelID].system === 'l5r') {
									if (typeof argos[3] === 'undefined') {
										initsMessage = "Error. Insert character initiative modifier."
										message.channel.send(initsMessage)
										break;
									}
								} else {
									initsMessage = "Error. System not compatible with any supported. Check json file!"
									message.channel.send(initsMessage)
									break;
								}
								function addCharacter(id,pc) {
									var player = ""
									if (pc.startsWith('p')) {player = authorName}
									else {player = 'NPC'}
									inits[serverID][channelID].Characters[id] = {Name: characterName};
									inits[serverID][channelID].Characters[id]["Player ID"] = authorID
									inits[serverID][channelID].Characters[id]["Player"] = player
									inits[serverID][channelID].Characters[id]["Initiative Total"] = initsTotal; 
									inits[serverID][channelID].Characters[id]["Initiative Modifier"] = initMod;
									inits[serverID][channelID].Characters[id]["Initiative Die Result"] = initsDie;
									inits[serverID][channelID].Characters[id]["Initiative Mod"] = 0;
									inits[serverID][channelID].Characters[id]["Declared action"] = "";
									if (inits[serverID][channelID].Characters[id].system === 'l5r') {
										inits[serverID][channelID].Characters[id]["staticBonus"] = staticBonusL5rInits;
									}
									inits[serverID][channelID].currentCharacterInitiatives.push(initsTotal);
									inits[serverID][channelID].currentCharacterNames.push(characterName);
									inits[serverID][channelID].currentCharacterDeclarations.push("")
									
								}
								if (inits[serverID][channelID].system === 'l5r') {
									if (!l5rDice(3)) {
										break;
									} else {								
										var objectL5r = new l5rDice(3);
										console.log('aqui foi')
										console.log(objectL5r.diceResultDisplayL5r)
										var initsDie = objectL5r.diceResultDisplayL5r;
										var initsTotal = objectL5r.sumDiceResultL5r;
										var initMod = objectL5r.diceL5r;
										var staticBonusL5rInits = objectL5r.staticBonusL5r;
										var messageResultL5r = objectL5r.messageResultL5r;
									}
								} else if (inits[serverID][channelID].system == 'wod' || inits[serverID][channelID].system === 'cod') {
									var	initsDie = Math.floor((Math.random() * 10) + 1);
									var initsTotal = initMod + initsDie;	
								}
								if (serverCheck) {
									if (channelCheck) {
										if (typeof inits[serverID][channelID].Characters[0] === 'undefined') {
											inits[serverID][channelID].Characters = [];
										}
										var characterCounter =  inits[serverID][channelID].Characters.length
																				
										if (authorID === inits[serverID][channelID]["GM ID"]) {
											addCharacter(characterCounter,'npc');
										} else {
											addCharacter(characterCounter,'pc');
										}
										
										fs.writeFile("inits2.json", JSON.stringify(inits), "utf8", function(err) {
											if (err) throw err;
											console.log("File saved.");
										});
									}
								}
								if (inits[serverID][channelID].system == 'wod' || inits[serverID][channelID].system === 'cod') {
									initsMessage = "<@" + authorID + "> rolls " + initsDie + " for " + characterName + " and gets a total of " + initsTotal + "\n" + "```Character list  Round " + inits[serverID][channelID].round + "\n \n"
								} else if (inits[serverID][channelID].system === 'l5r') {
									initsMessage = messageResultL5r + "\n" + "```Character list  Round " + inits[serverID][channelID].round + "\n \n";
								}
								
								getInitsList();
								
								initsMessage += "```"
								message.channel.send(initsMessage)
								message.channel.send('ping pong')
								//end of add
							break;
							case 'next':
							
								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No combat is currtently in progress."
									message.channel.send(initsMessage)
                                    break;
								}
								if (authorID !== inits[serverID][channelID]['GM ID']) {
									initsMessage = "Error. Only the GM can do that! Shoo shoo!"
									message.channel.send(initsMessage)
                                    break;
								}
								if (typeof inits[serverID][channelID].currentCharacterInitiatives === 'undefined') {
									initsMessage = "Error. No characters in combat. Use !init add to add characters."
									message.channel.send(initsMessage)
                                    break;
								}


								bubbleSort(inits[serverID][channelID].currentCharacterInitiatives,inits[serverID][channelID].currentCharacterNames);
								bubbleSort(inits[serverID][channelID].currentCharacterInitiatives,inits[serverID][channelID].currentCharacterDeclarations);


								
								inits[serverID][channelID].waitingCharacterInitiatives.push(inits[serverID][channelID].currentCharacterInitiatives[0]);
								inits[serverID][channelID].waitingCharacterNames.push(inits[serverID][channelID].currentCharacterNames[0]);
								
								
								bubbleSort(inits[serverID][channelID].waitingCharacterInitiatives,inits[serverID][channelID].waitingCharacterNames)
								
								console.log('BEFORE SPLICE inits[serverID][channelID].currentCharacterInitiatives: ' + inits[serverID][channelID].currentCharacterInitiatives) 
								inits[serverID][channelID].currentCharacterInitiatives.splice(0,1);
								inits[serverID][channelID].currentCharacterNames.splice(0,1);
								inits[serverID][channelID].currentCharacterDeclarations.splice(0,1);
								initsMessage = "```Character list " + "Round " + inits[serverID][channelID].round + "\n \n";
								console.log('AFTER SPLICE inits[serverID][channelID].currentCharacterInitiatives: ' + inits[serverID][channelID].currentCharacterInitiatives) 
								if (typeof inits[serverID][channelID].currentCharacterInitiatives[0] === 'undefined') {
									console.log('genkwai')
									
									if (typeof inits[serverID][channelID].holdingCharacterInitiavitves[0] !== 'undefined') {		
										bubbleSort(inits[serverID][channelID].holdingCharacterInitiavitves,inits[serverID][channelID].holdingCharacterNames);
										inits[serverID][channelID].currentCharacterInitiatives.push(inits[serverID][channelID].holdingCharacterInitiavitves[0]);
										inits[serverID][channelID].currentCharacterNames.push(inits[serverID][channelID].holdingCharacterNames[0]);
										inits[serverID][channelID].currentCharacterDeclarations.push("");
										bubbleSort(inits[serverID][channelID].currentCharacterInitiatives,inits[serverID][channelID].currentCharacterNames);
										bubbleSort(inits[serverID][channelID].currentCharacterInitiatives,inits[serverID][channelID].currentCharacterDeclarations);
										inits[serverID][channelID].holdingCharacterInitiavitves.splice(0,1);
										inits[serverID][channelID].holdingCharacterNames.splice(0,1);
									} else {
										inits[serverID][channelID].round++;
										initsMessage = "NEW ROUND! \n" + "```Character list " + "Round " + inits[serverID][channelID].round + "\n \n";
										for (var hInits = 0; hInits < inits[serverID][channelID].Characters.length; hInits++) {
											if (inits[serverID][channelID].system === 'wod' || inits[serverID][channelID].system === 'cod') {
												var initsMod = parseInt(inits[serverID][channelID].Characters[hInits]["Initiative Modifier"]);
												var initsBonus = parseInt(inits[serverID][channelID].Characters[hInits]["Initiative Mod"]);
												var initsDie = Math.floor((Math.random() * 10) + 1);
												var initsTotal = initsMod + initsDie + initsBonus;
												inits[serverID][channelID].waitingCharacterInitiatives = [];
												inits[serverID][channelID].waitingCharacterNames = [];
												console.log('inits[serverID][channelID].Characters[hInits]["Name"]: ' + inits[serverID][channelID].Characters[hInits]["Name"])
												inits[serverID][channelID].Characters[hInits]["Initiative Total"] = initsTotal;
												console.log('BEFORE PUSH inits[serverID][channelID].currentCharacterInitiatives[hInits]: ' + inits[serverID][channelID].currentCharacterInitiatives[hInits])
												inits[serverID][channelID].currentCharacterInitiatives.push(initsTotal);
												console.log('AFTER PUSH inits[serverID][channelID].currentCharacterInitiatives[hInits]: ' + inits[serverID][channelID].currentCharacterInitiatives[hInits])
												console.log('BEFORE PUSH inits[serverID][channelID].currentCharacterNames: ' + inits[serverID][channelID].currentCharacterNames)
												inits[serverID][channelID].currentCharacterNames.push(inits[serverID][channelID].Characters[hInits]["Name"]);
												console.log('AFTER PUSH inits[serverID][channelID].currentCharacterNames: ' + inits[serverID][channelID].currentCharacterNames)
											} else if (inits[serverID][channelID].system === 'l5r') {
												console.log('poin')
												inits[serverID][channelID].currentCharacterInitiatives.push(parseInt(inits[serverID][channelID].Characters[hInits]["Initiative Total"]));
												inits[serverID][channelID].currentCharacterNames.push(inits[serverID][channelID].Characters[hInits]["Name"]);
											}
										}
									
								
								
										bubbleSort(inits[serverID][channelID].currentCharacterInitiatives,inits[serverID][channelID].currentCharacterNames);
									
										inits[serverID][channelID].currentCharacterDeclarations = [];
										for (aInits = 0; aInits < inits[serverID][channelID].currentCharacterInitiatives.length; aInits++) {
											inits[serverID][channelID].currentCharacterDeclarations.push('')
										}
										inits[serverID][channelID].holdingCharacterInitiavitves = [];
										inits[serverID][channelID].holdingCharacterNames = [];
										
										inits[serverID][channelID].waitingCharacterInitiatives = [];
										
										inits[serverID][channelID].waitingCharacterNames = [];
										
										
									}
								}
									
									fs.writeFileSync("inits2.json", JSON.stringify(inits), "utf8", function(err) {
										if (err) throw err;
										console.log("File saved.");
									});
									
									var initsItsYourTurn = 0;
									var initsCharactersTotal = 12;

									getInitsList();
									
									initsMessage += "``` \n" + "<@" + initsItsYourTurn + ">" + ", it's your turn!"
									message.channel.send(initsMessage)
								//end of next
							break;
								
							case 'remove':
								var nameArray = 0;
								var characterArray = 0;

								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No combat is currtently in progress."
									message.channel.send(initsMessage)
                                    break;
								}
								if (authorID !== inits[serverID][channelID]['GM ID']) {
									initsMessage = "Error. Only the GM can do that! Shoo shoo!"
									message.channel.send(initsMessage)
                                    break;
								}
								if (typeof inits[serverID][channelID].currentCharacterInitiatives === 'undefined') {
									initsMessage = "Error. No characters in combat. Use !init add to add characters."
									message.channel.send(initsMessage)
                                    break;
								}
								if (typeof characterName === 'undefined') {
									initsMessage = "Error. Enter name of the charcter to be removed."
									message.channel.send(initsMessage)
                                    break;
								}
								//Checking if names is found in current names array
								for (uInits = 0; uInits < inits[serverID][channelID].currentCharacterNames.length; uInits++) {
									if (characterName.toUpperCase() === inits[serverID][channelID].currentCharacterNames[uInits].toUpperCase()) {
										characterExists = true;
										//Check if name is found in Characters object
										for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
												inits[serverID][channelID].Characters.splice(qInits,1)
											}
										}
										inits[serverID][channelID].currentCharacterInitiatives.splice(uInits,1)
										inits[serverID][channelID].currentCharacterNames.splice(uInits,1)
										inits[serverID][channelID].currentCharacterDeclarations.splice(uInits,1)
									}
								}
								if (!characterExists) {
									if (typeof inits[serverID][channelID].holdingCharacterNames !== 'undefined') {
										for (uInits = 0; uInits < inits[serverID][channelID].holdingCharacterNames.length; uInits++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].holdingCharacterNames[uInits].toUpperCase()) {
												characterExists = true;
												//Check if name is found in Characters object
												for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
													if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
														inits[serverID][channelID].Characters.splice(qInits,1)
													}
												}
												inits[serverID][channelID].holdingCharacterInitiatives.splice(uInits,1)
												inits[serverID][channelID].holdingCharacterNames.splice(uInits,1)
											}
										}
									}
									if (typeof inits[serverID][channelID].waitingCharacterNames !== 'undefined') {
										for (uInits = 0; uInits < inits[serverID][channelID].waitingCharacterNames.length; uInits++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].waitingCharacterNames[uInits].toUpperCase()) {
												characterExists = true;
												//Check if name is found in Characters object
												for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
													if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
														inits[serverID][channelID].Characters.splice(qInits,1)
													}
												}
												inits[serverID][channelID].waitingCharacterInitiatives.splice(uInits,1)
												inits[serverID][channelID].waitingCharacterNames.splice(uInits,1)
											}
										}
									}
								}
								if (!characterExists) {
									initsMessage = "Error. Character " + characterName + " could not be found."
									message.channel.send(initsMessage)
                                    break;
								} else {
									if (typeof inits[serverID][channelID].Characters[0] === 'undefined') {
										delete inits[serverID][channelID];
										initsMessage = "All characters in combat have been removed. \n" + "Combat has been ended by <@" + authorID + ">" + " at Round " + inits[serverID][channelID].round + "."
										message.channel.send(initsMessage)
										fs.writeFileSync("inits2.json", JSON.stringify(inits), "utf8", function(err) {
											if (err) throw err;
											console.log("File saved.");
										});
                                    	break;
									}
								}
								fs.writeFileSync("inits2.json", JSON.stringify(inits), "utf8", function(err) {
									if (err) throw err;
									console.log("File saved.");
								});
								initsMessage = characterName + " has been removed from combat. \n" + "```Character list " + "Round " + inits[serverID][channelID].round + "\n \n";

								getInitsList()
								
								initsMessage += "```"

								message.channel.send(initsMessage)

							break;
							case 'list':
								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No combat is currtently in progress."
									message.channel.send(initsMessage)
                                    break;
								}
								initsMessage = "```Character list " + "Round " + inits[serverID][channelID].round + "\n \n";

								getInitsList()
								
								initsMessage += "```"

								message.channel.send(initsMessage);

							break

							case 'clear':
							case 'end':
								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No combat is currtently in progress."
									message.channel.send(initsMessage)
                                    break;
								}
								if (authorID !== inits[serverID][channelID]['GM ID']) {
									initsMessage = "Error. Only the GM can do that! Shoo shoo!"
									message.channel.send(initsMessage)
                                    break;
								}
								initsMessage = "Combat has been ended by <@" + authorID + ">" + " at Round " + inits[serverID][channelID].round + "."
								delete inits[serverID][channelID];
								fs.writeFileSync("inits2.json", JSON.stringify(inits), "utf8", function(err) {
									if (err) throw err;
									console.log("File saved.");
								});
								message.channel.send(initsMessage)
							break;

							case 'mod':
								
								var bonusOrPenalty = "";
								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No combat is currtently in progress."
									message.channel.send(initsMessage)
									break;
								}
								if (authorID !== inits[serverID][channelID]['GM ID']) {
									initsMessage = "Error. Only the GM can do that! Go away!"
									message.channel.send(initsMessage)
									break;
								}
								if (typeof characterName === 'undefined') {
									initsMessage = "Error. Enter name of the charcter to get the bonus or penalty."
									message.channel.send(initsMessage)
                                    break;
								}
								if (typeof argos[3] === 'undefined') {
									initsMessage = "Error. Insert bonus or penalty for initiative. Example: !init mod Random -2."
									message.channel.send(initsMessage)
                                    break;
								}
								var pipinit = ""
								console.log('argos[3]: ' + argos[3])
								if (argos[3].startsWith('-') || argos[3].startsWith('+')) {
									console.log("passou 2")
									pipinit = argos[3].slice(1);
									pipinits = parseInt(pipinit);
									console.log('pipinits: ' + pipinits)
									if (Number.isNaN(pipinits)) {
										initsMessage = 'Error. ' + pipinit + ' is not a number. Insert a valid number.'
										message.channel.send(initsMessage)
										break;	
									}
								} else {
									initsMessage = 'Error. Mod must start with + or -.'
									message.channel.send(initsMessage)
									break;
								}
								function pipCheck(initList, initPos, nameObj, pip) {
									characterName = inits[serverID][channelID].Characters[nameObj]["Name"]
									if (argos[3].startsWith('+')) {
										bonusOrPenalty = 'bonus'
										inits[serverID][channelID].Characters[nameObj]["Initiative Mod"] += pip;
										inits[serverID][channelID].Characters[nameObj]["Initiative Total"] += pip;
										inits[serverID][channelID][initList][initPos] += pip
									} else if (argos[3].startsWith('-')) {
										console.log('puta merda pipcheck')
										bonusOrPenalty = 'penalty'
										console.log('pinits[serverID][channelID].Characters[nameObj]["Initiative Mod"] BEFORE PIP: ' + inits[serverID][channelID].Characters[nameObj]["Initiative Mod"])
										inits[serverID][channelID].Characters[nameObj]["Initiative Mod"] -= pip;
										console.log('pinits[serverID][channelID].Characters[nameObj]["Initiative Mod"] AFTER PIP: ' + inits[serverID][channelID].Characters[nameObj]["Initiative Mod"])
										inits[serverID][channelID].Characters[nameObj]["Initiative Total"] -= pip;
										inits[serverID][channelID][initList][initPos] -= pip
										if (inits[serverID][channelID][initList][initPos] < 1) {
											inits[serverID][channelID][initList][initPos] = 1
										}
									}									
								}
								
								for (uInits = 0; uInits < inits[serverID][channelID].currentCharacterNames.length; uInits++) {
									if (characterName.toUpperCase() === inits[serverID][channelID].currentCharacterNames[uInits].toUpperCase()) {
										characterExists = true;
										//Check if name is found in Characters object
										for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
												pipCheck('currentCharacterInitiatives',uInits,qInits,pipinits)
											}
										}
									}
								}

								if (!characterExists) {
									if (typeof inits[serverID][channelID].holdingCharacterNames !== 'undefined') {
										for (uInits = 0; uInits < inits[serverID][channelID].holdingCharacterNames.length; uInits++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].holdingCharacterNames[uInits].toUpperCase()) {
												characterExists = true;
												//Check if name is found in Characters object
												for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
													if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
														pipCheck('holdingCharacterInitiatives',uInits,qInits,pipinits)
													}
												}
											}
										}
									}
									if (typeof inits[serverID][channelID].waitingCharacterNames !== 'undefined') {
										for (uInits = 0; uInits < inits[serverID][channelID].waitingCharacterNames.length; uInits++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].waitingCharacterNames[uInits].toUpperCase()) {
												characterExists = true;
												//Check if name is found in Characters object
												for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
													if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
														pipCheck('waitingCharacterInitiatives',uInits,qInits,pipinits)
													}
												}
											}
										}
									}
								}
								if (!characterExists) {
									initsMessage = "Error. Character " + characterName + " could not be found."
									message.channel.send(initsMessage)
                                    break;
								}
								
								fs.writeFileSync("inits2.json", JSON.stringify(inits), "utf8", function(err) {
									if (err) throw err;
									console.log("File saved.");
								});

								if (pipinits === 0) {
									console.log('e agora 1')
									initsMessage = characterName + "'s initiative stays exactly as it was! Derp."
								} else {
									console.log('será') 
									initsMessage = characterName + " takes a " + argos[3] + " " + bonusOrPenalty + ". \n" + "```Character list " + "Round " + inits[serverID][channelID].round + "\n \n";
								}
								getInitsList()
								
								initsMessage += "```"
								message.channel.send(initsMessage);

							break;	
							case 'info':
								var currentStatus = ""
								var playerOrNpc = ""
								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No combat is currtently in progress."
									message.channel.send(initsMessage)
									break;
								}
								if (typeof characterName === 'undefined') {
									initsMessage = "Error. Enter name of the charcter."
									message.channel.send(initsMessage)
                                    break;
								}
								function characterStats(charPos,status) {
									if (status === 'current') {
										currentStatus = inits[serverID][channelID].Characters[charPos]["Name"] + " is currently waiting for their turn."
									} else if (status === 'holding') {
										currentStatus = inits[serverID][channelID].Characters[charPos]["Name"] + " held their action and is currently waiting for their turn."
									} else {
										currentStatus = inits[serverID][channelID].Characters[charPos]["Name"] + " has taken their action and currently waits for the next round."
									}
									if (inits[serverID][channelID]['GM ID'] === inits[serverID][channelID].Characters[charPos]['Player ID']) {
										playerOrNpc = inits[serverID][channelID].Characters[charPos]["Name"] + " is a NPC."
									} else {
										inits[serverID][channelID].Characters[charPos]['Player'] = client.guilds.cache.get(serverID).members.cache.get(inits[serverID][channelID].Characters[charPos]['Player ID']).displayName;
										playerOrNpc = inits[serverID][channelID].Characters[charPos]["Name"] + " is played by " + inits[serverID][channelID].Characters[charPos]['Player'] + "."
									}
									var staticL5r = ""
									if (inits[serverID][channelID].system === 'l5r') {
										staticL5r = "\nStatic Bonus/Penalty: " + inits[serverID][channelID].Characters[charPos]["staticBonus"];
									}
									initsMessage = playerOrNpc + "```" +
									"Character Name: " + inits[serverID][channelID].Characters[charPos]["Name"] +
									"\nInitiative Total: " + inits[serverID][channelID].Characters[charPos]["Initiative Total"] +
									"\nInitiative Modifier: " + inits[serverID][channelID].Characters[charPos]["Initiative Modifier"] +
									"\nInitiative Roll Result: " + inits[serverID][channelID].Characters[charPos]["Initiative Die Result"] +
									"\nInitiative Bonus/Penalty: " + inits[serverID][channelID].Characters[charPos]["Initiative Mod"] +
									staticL5r + "```" + currentStatus
									console.log('display name test' + client.guilds.cache.get(serverID).members.cache.get(inits[serverID][channelID].Characters[charPos]['Player ID']).displayName)
								}
								for (uInits = 0; uInits < inits[serverID][channelID].currentCharacterNames.length; uInits++) {
									if (characterName.toUpperCase() === inits[serverID][channelID].currentCharacterNames[uInits].toUpperCase()) {
										characterExists = true;
										//Check if name is found in Characters object
										for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
												characterStats(qInits,'current')
											}
										}
									}
								}

								if (!characterExists) {
									if (typeof inits[serverID][channelID].holdingCharacterNames !== 'undefined') {
										for (uInits = 0; uInits < inits[serverID][channelID].holdingCharacterNames.length; uInits++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].holdingCharacterNames[uInits].toUpperCase()) {
												characterExists = true;
												//Check if name is found in Characters object
												for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
													if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
														characterStats(qInits,'holding')
													}
												}
											}
										}
									}
									if (typeof inits[serverID][channelID].waitingCharacterNames !== 'undefined') {
										for (uInits = 0; uInits < inits[serverID][channelID].waitingCharacterNames.length; uInits++) {
											if (characterName.toUpperCase() === inits[serverID][channelID].waitingCharacterNames[uInits].toUpperCase()) {
												characterExists = true;
												//Check if name is found in Characters object
												for (qInits = 0; qInits < inits[serverID][channelID].Characters.length; qInits ++) {
													if (characterName.toUpperCase() === inits[serverID][channelID].Characters[qInits].Name.toUpperCase()) {
														characterStats(qInits,'waiting')
													}
												}
											}
										}
									}
								}
								if (!characterExists) {
									initsMessage = "Error. Character " + characterName + " could not be found."
									message.channel.send(initsMessage)
                                    break;
								}
								
								message.channel.send(initsMessage);
							break
                        }	
                    }
                    initiativeSystem()

				break;
				case 'ch':
				case 'char':
				case 'chars':
					function characterStats() {
						var command = argos[1]
						var charMessage = ""
						var serverCheck = serverID in chars
						if (serverCheck) {var channelCheck = channelID in chars[serverID]}

						if (typeof command === 'undefined') {
							charMessage = "Error. Insert a valid command."
							message.channel.send(charMessage)
                        	return;
						} else {
							command = command.toLowerCase()
						}
						switch (command) {
							case 'help':
								charMessage = "```!ch <command> \n \n" + 
								"!ch new <system>: Selects a GM for a game on a specific channel. Whoever starts it becomes the GM. Current systems: wod, cod, l5r, ptg. \n \n" + 
								"!ch add <character name> [<stat1 name>:<stat1 value>, <stat2 name>:<stat 2 value>]: Adds a new character with the assigned stats. Each PC must be entered by their own player. GM only command. \n \n" + 
								"!ch info: Shows the character's stats if entered by a player or all characters if entered by the GM. \n \n" + 
								"```"
								message.channel.send(charMessage)
							break;
							case 'new':
								if (serverCheck && channelCheck) {
									charMessage = "Error. Game already started."
									message.channel.send(charMessage)
                                    break;
								}
								if (typeof argos[2] !== 'undefined') {
                                   var systemName = argos[2].toLowerCase();
                                } else {
                                    charMessage = "Error. Invalid system. Correct syntax: !ch new wod. (example)"
                                    message.channel.send(charMessage)
                                    break;
                                }
								if (systemName != 'wod') {
									if (systemName != 'l5r') {
										if(systemName != 'cod') {
											if (systemName != 'ptg') {
												console.log(systemName)
												charMessage = "Error. Invalid system. Currently supported systems: wod, l5r, ptg, cod."
                                    			message.channel.send(charMessage)
                                    			break;
											}
										}
									}
								}
								if(!serverCheck) {chars[serverID] = {}}
								if(!channelCheck) {
									chars[serverID][channelID] = {}
								} else {
									charMessage = "Error. A GM has already been added."
									message.channel.send(charMessage)
                                    break;
								}
								var gameSystem = "";
								if (argos[2].toLowerCase() === 'l5r') {
									gameSystem = "Legend of the 5 Rings";
								} else if (argos[2].toLowerCase() === 'wod') {
									gameSystem = "World of Darkness";
								} else if (argos[2].toLowerCase() === 'cod') {
									gameSystem = "Chronicle of Darkness";
								} else if (argos[2].toLowerCase() === 'ptg') {
									gameSystem = "Part Time Gods";
								}
								chars[serverID][channelID].system = argos[2];
								chars[serverID][channelID]["System Name"] = gameSystem;
								chars[serverID][channelID]["GM ID"] = authorID;
								chars[serverID][channelID]["GM name"] = message.member.displayName;
								chars[serverID][channelID].characters = {};

								fs.writeFileSync("chars2.json", JSON.stringify(chars), "utf8", function(err) {
									if (err) throw err;
									console.log("File saved.");
								});

								charMessage = "<@" + authorID + ">" + " is now the GM on #" + message.channel.name + " for " + gameSystem + "."
								message.channel.send(charMessage);

							break;
							case 'add':
								if (!serverCheck || !channelCheck) {
									initsMessage = "Error. No game has been added."
									message.channel.send(initsMessage)
                                    break;
								}
								if (typeof argos[2] === 'undefined') {
									console.log('erro AQUI')
									initsMessage = "Error. Enter the character's name and stats."
									message.channel.send(initsMessage)
                                    break;
								}

								var idName2 = message.split('[');
								var idName = idName2[0].split(' ');
								var name1 = [];

								for (p = 2; p < idName.length; p++) {
									if (!idName[p].startsWith('<') && !idName[p].match(/^\d/)) {
										name1.push(idName[p])
									} else if (idName[p].match(/^\d/)) {
										channel = idName[p];
									}
								}
							break
						}
					}
					characterStats()
				break;
				case 'randomcod':
					
					//logmessage()();
					
					function randomcod() {
					var codClans = ["Daeva","Gangrel","Mekhet","Nosferatu","Ventrue"];
					var codCovenants = ["Circle of the Crone","Ordo Dracul","Lancea et Sanctum","Invictus","Carthian Movement","None"];
					var codCommonDisciplines = ["Animalism","Celerity","Obfuscate","Resilience","Vigor"];
					var codClanDisciplines = [["Majesty","Celerity","Vigor"],["Protean","Animalism","Resilience"],["Auspex","Celerity","Obfuscate"],["Nightmare","Obfuscate","Vigor"],["Dominate","Animalism","Resilience"]];
					var codCovenantDisciplines = ["Cruác","Coils of the Dragon","Theban Sorcery"];
					var codFamilies = ["Anakim","Eshmaki","Makara","Namtaru","Ugallu","Inguma","Talassii"];
					var codHungers = ["Tyrant","Collector","Predator","Nemesis","Ravager","Enabler","Whisperer"];
					var codNightmares = ["All Your Teeth Are Falling Out","Behold, My True Form!","Bugs Everywhere!","Everything You Do Is Worthless","Fear Is Contagious","Flying and Falling","Run Away","They Are All Around You","You Are Alone","You Are Not Alone","You Can't Wake Up","You Cannot Run","You Deserve This","You Must Obey","You Will Never Rest","The Walls Have Eyes","They Don't Love You","They Put Something In Your Food","They Walk Among Us","This Is Due Tomorrow","We're Going Down!","You Can't Dig It Out","You Don't Have A Face","You're One Of Us","You Were Never Right"];
					var codAtavisms = [["Cyplopean Strength","Looming Presence","Mimir's Wisdom","Titanic Blow","Terror's Friend","Vengeful Earth"],["Dragonfire","From The Shadows","Limb From Limb","Relentless Hunter","Shadow Stalker","Death of Light"],["Alien Allure","Heart of the Ocean","Monster from the Deep","Siren's Treacherous Song","Ravenous Maws","Smashing Currents"],["Basilisk's Touch","Infestation","Shadowed Soul","Unbreakable","Plague Bearer","Skin Deep"],["Eye of Heaven","Needs Must","Storm-Lashed","Wings of the Raptor","Lightning Strike","Weakness Exposed"],["Alien Mindset","Doppelganger","Enemy Within"],["Caught in the Webs","Crushing Coils","Illusion of Safety"]];
					var codLairTraits = ["Blazing Light","Bizzard","Cramped","Crosswinds","Currents","Downpour","Echoing","Extreme Cold","Extreme Heat","Flooded","Fog","Jagged","Maze","Poor Light","Sealed Exit","Slick","Steam","Stench","Stinging","Swarms","Thin Air","Thunderous","Undergrowth","Unstable","Bad Angles","Infected","Isolated","Minions","Mirrored","Stalking Ground","Burning","Corrosive","Crushing","Darkness","Decayed","Diseased","Disruption","Earthquake","Engulfing","Electrified","Exposed","Heavy","Hurricane","Mirages","Noxious Gasses","Razored","Rotting","Suffocating","Toxic","Viscous","Bottomless","Hoard","Hunting Ground","Murmurs","Thralls"];
					var codSeemings = ["Beast","Darkling","Elemental","Fairest","Ogre","Wizened"];
					var codRegalias = ["Steed","Mirror","Sword","Crown","Shield","Jewels"];
					var codKiths = ["None","Artist","Bright One","Chatelaine","Gristlegrinder","Helldiver","None","Hunterheart","Leechfinger","Mirrorskin","Nightsinger","Notary","None","Playmate","Snowskin"];
					var codCourts = ["Spring","Summer","Autumn","Winter","None"];
					var codContractTypes = ["Arcadian","Court","Goblin"];
					var codCommonContracts = [[["Boon of the Scuttling Spider","Dreamsteps","Nevertread","Pathfinder","Seven-League Leap"],["Glimpse of a Distant Mirror","Know the Competition","Portents and Visions","Read Lucity","Walls Have Ears"],["Elemental Weapon","Might of the Terrible Brute","Overpowering Dread","Primal Glory","Touch of Wrath",],["Hostile Takeover","Mask of Superiority","Paralyzing Presence","Summon the Loyal Servant","Tumult"],["Cloak of Night","Fae Cunning","Shared Burden","Thorns and Brambles","Trapdoor Spider's Trick"],["Blessing of Perfection","Changing Fortunes","Light-Shy","Murkblur","Trivial Reworking"]],[["Cupid's Arrow","Dreams of the Earth","Gift of Warm Breath","Spring's Kiss","Wyrd-Faced Stranger"],["Baleful Sense","Child of the Hearth","Helio's Light","High Summer's Zeal","Vigilance of Ares"],["Autumn's Fury","Last Harvest","Tale of the Baba Yaga","Twilight's Harbinger","Witches' Intuition"],["The Dragon Knows","Heart of Ice","Ice Queen's Call","Slipnot Dreams","Touch of Winter"]],["Blessing of Forgetfulness","Glib Tongue","Goblin's Eyes","Goblin's Luck","Huntsman's Clarion","Lost Visage","Mantle Mask","Sight of Truth and Lies","Uncanny","Wayward Guide"]];
					var codRoyalContracts = [[["Chrysalis","Flickering Hours","Leaping Towards Nightfall","Mirror Walk","Talon and Wing"],["Props and Scenery","Reflections of the Past","Riddle-Kith","Skinmask","Unravel the Tapestry"],["Elemental Fury","Oathbreaker's Punishment","Red Revenge","Relentless Pursuit","Thief of Reason"],["Discreet Summons","Mastermind's Gambit","Pipes of the Beastcaler","The Royal Court","Spinning Wheel"],["Fortifying Presence","Hedgewall","Pure Clarity","Vow of no Compromise","Whispers of Morning"],["Changeling Hours","Dance of the Toys","Hidden Reality","Stealing the Solid Reflection","Tatterdemalion's Workshop"]],[["Blessing of Spring","Gift of Warm Blood","Pandora's Gift","Prince of Ivy","Waking the Inned Fae"],["Fiery Tongue","Flames of Summer","Helios' Judgment","Solstice Revelation","Sunburnt Heart"],["Famine's Bulwark","Mien of Baba Yaga","Riding the Falling Leaves","Sorcerer's Rebuke","Tasting the Harvest"],["Ermine's Winter Coat","Fallow Fields","Field of Regret","Mantle of Frost","Winter's Curse"]]];
					var codMentalAttributes = [1,1,1];
					var codMentalAttributesLabels = ["Intelligence  ","Wits          ","Resolve       "];
					var codPhysicalAttributes = [1,1,1];
					var codPhysicalAttributesLabels = ["Strength      ","Dexterity     ","Stamina       "];
					var codSocialAttributes = [1,1,1];
					var codSocialAttributesLabels = ["Presence      ","Manipulation  ","Composure     "];
					var codMentalSkills = [0,0,0,0,0,0,0,0];
					var codMentalSkillsLabels = ["Academics     ","Computers     ","Crafts        ","Investigation ","Medicine      ","Occult        ","Politics      ","Science       "];
					var codPhysicalSkills = [0,0,0,0,0,0,0,0];
					var codPhysicalSkillsLabels = ["Athletics     ","Brawl         ","Drive         ","Firearms      ","Larceny       ","Stealth       ","Survival      ","Weaponry      "];
					var codSocialSkills = [0,0,0,0,0,0,0,0];
					var codSocialSkillsLabels = ["Animal Ken    ","Empathy       ","Expression    ","Intimidation  ","Persuasion    ","Socialize     ","Streetwise    ","Subterfuge    "];
					var codSkillSpecialties = [[["English Literature","History","Law","Linguistics","Research"],["Data Retrieval","Digital Security","Hacking","Programming","User Interface Design"],["Automotive","Carpentry","Jury Rigging","Sculpting","Welding"],["Crime Scenes","Cryptography","Dreams","Forensic Accounting","Riddles"],["Cardiology","First Aid","Pathology","Pharmacology","Surgery"],["Eastern European Folktales","Ghosts","Mothman Sightings","Psychic Phenomena","Urban Legends"],["Bureaucracy","Local Politics","National Politics","Scandals","Specific Political Party"],["Biology","Chemistry","Genetics","Optics","Particle Physics"]],[["Acrobatics","Basketball","Marathon Running","Rock Climbing","Throwing"],["Blocking","Boxing","Grappling","Muay Thai","Throws"],["Evasion","Motorcycles","Piloting","Racing","Stunts"],["Fast-Draw","Handguns","Rifles","Shotguns","Sniping"],["Alarm Systems","Breaking and Entering","Lock Picking","Safecracking","Sleight of Hand"],["Crowds","Hiding","Moving Quietly","Shadowing","Stakeouts"],["Foraging","Hunting","Navigation","Shelter","Weather"],["Clubs","Duels","Improvised Weapons","Knives","Swords"]],[["Dogs","Exotic Pets","Horses","Training","Wild Animals"],["Buried Feelings","Calming","Emotions","Lies","Motives"],["Dance","Journalism","Music Composition","Painting","Speeches"],["Direct Threats","Interrogation","Murderous Stare","Torture","Veiled Threats"],["Fast Talking","Inspiring","Sales Pitches","Seduction","Sermons"],["Bar hopping","College parties","Formal events","Political fundraisers","Private clubs"],["Black market","Gangs","Navigation","Rumors","Undercover work"],["Detecting lies","Hidden meanings","Hiding emotions","Long cons","Misdirection"]]]
					var codVirtues = ["Competitive","Generous","Just","Loyal","Ambitious","Courageous","Honest","Hopeful","Loving","Patient","Trustworthy"];
					var codVices = ["Ambitious", "Arrogant", "Competitive", "Greedy", "Addictive", "Corrupt", "Cruel", "Deceitful", "Dogmatic", "Hasty", "Hateful", "Pessimistic"];
					var codDirgeMasks = ["Authoritarian", "Child", "Competitor", "Conformist", "Conspirator", "Courtesan", "Cult Leader", "Deviant", "Follower", "Guru", "Idealist", "Jester", "Junkie", "Martyr", "Masochist", "Monster", "Nomad", "Nurturer", "Perfectionist", "Penitent", "Questioner", "Rebel", "Scholar", "Social Chameleon", "Spy", "Survivor", "Visionary", "Collector", "Meddler", "Provocateur"];
					var codLifes = ["Competitive","Generous","Just","Loyal","Ambitious","Courageous","Honest","Hopeful","Loving","Patient","Trustworthy"];
					var codLegends = ["Ambitious", "Arrogant", "Competitive", "Greedy", "Addictive", "Corrupt", "Cruel", "Deceitful", "Dogmatic", "Hasty", "Hateful", "Pessimistic"];
					var codNeedles = ["Bon Vivant", "Commander", "Composer", "Counselor", "Daredevil", "Dynamo", "Protector", "Provider", "Scholar", "Storyteller", "Teacher", "Traditionalist", "Visionary"]
					var codThreads = ["Acceptance", "Anger", "Family", "Friendship", "Hate", "Honor", "Joy", "Love", "Memory", "Revenge","Redemption","Justice"]
					var codAttributesPriority = [5,4,3];
					var codAttributesPrioritySelected = [0,0,0];
					var codSkillsPriority = [11,7,4];
					var codSkillsPrioritySelected = [0,0,0];
					var codCommonMerits = ["Lucid Dreamer","Allies","Alternate Identity","Ambidextrous","Anonymity","Area of Expertise","Armed Defense","Automotive Genius","Barfly","Cheap Shot","Choke Hold","Close Quarters Combat","Closed Book","Common Sense","Contacts","Crack Driver","Danger Sense","Defensive Combat: Brawl","Defensive Combat: Weaponry","Demolisher","Direction Sense","Double Jointed","Eidetic Memory","Encyclopedic Knowledge","Etiquette","Eye for the Strange","Fame","Fast Reflexes","Fast-Talking","Fighting Finesse","Firefight","Fixer","Fleet of Foot","Giant","Good Time Management","Grappler","Greyhound","Hardy","Heavy Weapons","Hobbyist Clique","Holistic Awareness","Improvised Weaponry","Indomitable","Inspiring","Interdisciplinary Specialty","Investigative Aide","Investigative Prodigy","Iron Skin","Iron Stamina","Iron Will","Language","Library","Light Weapons","Marksmanship","Martial Arts","Mentor","Meditative Mind","Mystery Cult Initiation","Parkour","Patient","Police Tactics","Professional Training","Pusher","Quick Draw","Relentless","Resources","Retainer","Safe Place","Seizing the Edge","Shiv","Sleight of Hand","Small-Framed","Small Unit Tactics","Spin Doctor","Staff","Status","Street Fighting","Striking Looks","Stunt Driver","Sympathetic","Table Turner","Takes One to Know One","Taste","Tolerance for Biology","Trained Observer","True Friend","Unarmed Defense","Untouchable"];
					var codMortalMerits = ["Aura Reading","Automatic Writing","Biokinesis","Clairvoyance","Cursed","Laying on Hands","Medium","Mind of a Madman","Numbing Touch","Omen Sensitivity","Psychokinesis","Psychometry","Telekinesis","Telepathy","Thief of Fate","Unseen Sense","Vice-Ridden","Virtuous"];
					var codVampireMerits = ["Circle of the Crone Status","Ordo Dracul Status","Lancea et Sanctum Status","Invictus Status","Carthian Movement Status","City Status","Clan Status","Acute Senses","Altar","Atrocious","Anointed","Attaché","Bloodhound","Cacophony Savvy","Carthian Pull","Claws of the Unholy","Close Family","Cutthroat","Distinguished Palate","Dream Visions","Dynasty Membership","Enticing","Feeding Grounds","Friends in High Places","Haven","Herd","Honey Trap","Invested","Kiss of the Succubus","Lineage","Lorekeeper","The Mother-Daughter Bond","Night Doctor Surgery","Speaker for the Silent","Pack Alpha","Unnatural Affinity","Swarm Form","Secret Society Junkie","Sworn","I Know a Guy","Touchstone","Undead Menses","Unsettling Gaze","Where the Bodies Are Buried","Lex Terrae","Mandate from the Masses","Right of Return","Strength of Resolution","Plausible Deniability","Notary","Oath of Action","Oath of Fealty","Oath of Penance","Oath of Serfdom","Kindred Dueling","Riding the Wave","Blood Potency"];
					var codChangelingMerits = ["Spring Mantle","Summer Mantle","Autumn Mantle","Winter Mantle","Spring Court Goodwill","Summer Court Goodwill","Autumn Court Goodwill","Winter Court Goodwill","Changeling Acute Senses","Arcadian Metabolism","Brownie's Boon","Cloak of Leaves","Cold Hearted","Defensive Dreamscaping","Diviner","Dream Warrior","Dreamweaver","Dull Beacon","Elemental Warrior","Enchanting Performance","Fae Mount","Faerie Favor","Fair Harvest","Firebrand","Gentrified Bearing","Glamour Fasting","Goblin Bounty","Grounded","Hedge Brawler","Hedge Duelist","Hob Kin","Hedge Sense","Hollow","Lethal Mien","Manymask","Market Sense","Noblesse Oblige","Parallel Lives","Rigid Mask","Stable Trod","Token","Touchstone","Warded Dreams","Workshop","Wyrd"]
					
					
					var codPossibleMerits = [];
					var codSpecialtySelected = [];
					var codSkillSpecialtySelected = [];
					var codMeritsSelected = [];
					var codMeritsSelectedValues = [];
					var codConceptSub = codConcepts.length;
					var codConceptSubResult = Math.floor(Math.random() * codConceptSub);
					var codConceptName = codConcepts[codConceptSubResult];
					
					
					var codDefense = 0;
					var codSize = 5;
					var codSpeed = 0;
					var codInits = 0;
					var codWillpower = 0;
					var codHealth = 0;
					var codClarity = 0;
					var codIntegrity = 0;
					var codHumanity = 0;
					var codBPotency = 0;
					var codWyrd = 0
					
					
					var codNameSex = randomName()
					var codFullName = codNameSex.name;
					
					function codSetVirtueVice(virtue,vice) {
						var virtueSub = virtue.length;
						var virtueResult = Math.floor(Math.random() * virtueSub);
						var virtueName = virtue[virtueResult];
						var viceSub = vice.length;
						var viceResult = Math.floor(Math.random() * viceSub);
						var viceName = vice[viceResult];
						return {virtueResult: virtueResult,virtueName: virtueName,viceResult: viceResult, viceName: viceName}
					}
					
					
					function codSetClanCovenant(a,b) {
						var clanSub = a.length;
						var clanResult = Math.floor(Math.random() * clanSub);
						var clanName = a[clanResult];					
						var covenantSub = b.length;
						var covenantResult = Math.floor(Math.random() * covenantSub);
						var covenantName = b[covenantResult];						
						return {clanResult: clanResult, clanName: clanName, covenantResult: covenantResult, covenantName: covenantName}
					}
					
					if (cmd === 'randomcod') {
						var codVirtueVice = codSetVirtueVice(codVirtues,codVices);
						var codVirtueName = codVirtueVice.virtueName;
						var codViceName = codVirtueVice.viceName;
					} else if (cmd === 'randomcodvampire') {
						var codVirtueVice = codSetVirtueVice(codDirgeMasks,codDirgeMasks);
						var codVirtueName = codVirtueVice.virtueName;
						var codViceName = codVirtueVice.viceName;
						
						var codClanCovenant = codSetClanCovenant(codClans,codCovenants);
						var codClanSubResult = codClanCovenant.clanResult;
						var codClanName = codClanCovenant.clanName;
						var codCovenantSubResult = codClanCovenant.covenantResult;
						var codCovenantName = codClanCovenant.covenantName;					

						var codVitae = Math.floor(Math.random() * 10 + 1)
											
						codCommonDisciplines.push(codClanDisciplines[codClanSubResult][0]);
						if (codCovenantSubResult < 3) {
							codCommonDisciplines.push(codCovenantDisciplines[codCovenantSubResult]);
						}
						var codDisciplineSelected = [0,0,0]
						var codDisciplineSelectedLabel = []
						var codClanPickedDisciplineSub = codClanDisciplines[codClanSubResult].length;
						var codClanPickedDisciplineSubResult = 0;
						var codClanPickedDisciplineName = "";
						var codCommonPickedDisciplineSub = codCommonDisciplines.length;
						var codCommonPickedDisciplineSubResult = 0;
						var codCommonPickedDisciplineName = "";
						
						var codFavoredAttribute = Math.floor(Math.random() * 2)
						var codFavoredAttributeName = ""
						var codFavoredAttributeAssigned = false;
						while (!codFavoredAttributeAssigned) {
							switch(codClanSubResult) {
								//Daeva
								case 0:
									if (codFavoredAttribute == 0 && codPhysicalAttributes[1] < 5) {
										codPhysicalAttributes[1]++;
										codFavoredAttributeName = codPhysicalAttributesLabels[1].trim();
										codFavoredAttributeAssigned = true;
									} else if (codFavoredAttribute === 1 && codSocialAttributes[1] < 5) {
										codSocialAttributes[1]++
										codFavoredAttributeName = codSocialAttributesLabels[1].trim();
										codFavoredAttributeAssigned = true;
									}
								break;
								//Gangrel
								case 1:
									if (codFavoredAttribute == 0 && codPhysicalAttributes[2] < 5) {
										codPhysicalAttributes[2]++;
										codFavoredAttributeName = codPhysicalAttributesLabels[1].trim();
										codFavoredAttributeAssigned = true;
									} else if (codFavoredAttribute === 1 && codSocialAttributes[2] < 5) {
										codSocialAttributes[2]++
										codFavoredAttributeName = codSocialAttributesLabels[2].trim();
										codFavoredAttributeAssigned = true;
									}
								break;
								//Mekhet
								case 2:
									if (codFavoredAttribute == 0 && codMentalAttributes[1] < 5) {
										codMentalAttributes[1]++;
										codFavoredAttributeName = codMentalAttributesLabels[1].trim();
										codFavoredAttributeAssigned = true;
									} else if (codFavoredAttribute === 1 && codMentalAttributes[0] < 5) {
										codMentalAttributes[0]++
										codFavoredAttributeName = codMentalAttributesLabels[0].trim();
										codFavoredAttributeAssigned = true;
									}
								break;
								//Nosferatu
								case 3:
									if (codFavoredAttribute == 0 && codPhysicalAttributes[0] < 5) {
										codPhysicalAttributes[0]++;
										codFavoredAttributeName = codPhysicalAttributesLabels[0].trim();
										codFavoredAttributeAssigned = true;
									} else if (codFavoredAttribute === 1 && codSocialAttributes[2] < 5){
										codSocialAttributes[2]++
										codFavoredAttributeName = codSocialAttributesLabels[2].trim();
										codFavoredAttributeAssigned = true;
									}
								break;
								//Ventrue
								case 4:
									if (codFavoredAttribute == 0 && codMentalAttributes[2] < 5) {
										codMentalAttributes[2]++;
										codFavoredAttributeName = codMentalAttributesLabels[2].trim();
										codFavoredAttributeAssigned = true;
									} else if (codFavoredAttribute === 1 && codSocialAttributes[0] < 5) {
										codSocialAttributes[0]++
										codFavoredAttributeName = codSocialAttributesLabels[0].trim();
										codFavoredAttributeAssigned = true;
									}
								break;
							}
						}		
						for (codNDisc = 0; codNDisc < 3; codNDisc++) {
							
							if (codNDisc < 2) {
								codClanPickedDisciplineSubResult = Math.floor(Math.random() * codClanPickedDisciplineSub);
								codClanPickedDisciplineName = codClanDisciplines[codClanSubResult][codClanPickedDisciplineSubResult];
								if (codNDisc === 0) {
									codDisciplineSelectedLabel.push(codClanPickedDisciplineName);
									codDisciplineSelected[0]++;
								} else {
									if (codClanPickedDisciplineName === codDisciplineSelectedLabel[0]) {
										codDisciplineSelected[0]++
									} else {
										codDisciplineSelectedLabel.push(codClanPickedDisciplineName);	
										codDisciplineSelected[1]++;
									}
								}
							} else {
								codCommonPickedDisciplineSubResult = Math.floor(Math.random() * codCommonPickedDisciplineSub);
								codCommonPickedDisciplineName = codCommonDisciplines[codCommonPickedDisciplineSubResult];
								if (codCommonPickedDisciplineName === codDisciplineSelectedLabel[0]) {
									codDisciplineSelected[0]++;
								} else if (codCommonPickedDisciplineName === codDisciplineSelectedLabel[1]) {
									codDisciplineSelected[1]++;
								} else {
									codDisciplineSelectedLabel.push(codCommonPickedDisciplineName);
									codDisciplineSelected[2]++;
								}
							}
						}
						for (var i=0; i<codDisciplineSelected.length;i++ ) {
							if(codDisciplineSelected[i]==0) {
								codDisciplineSelected.splice(i,1); 
							} 
						}
						var codDisciplinePrint = "\n" + "Disciplines \n"
						for (codLDiscPrint = 0; codLDiscPrint < codDisciplineSelectedLabel.length; codLDiscPrint++) {
							codDisciplinePrint += codDisciplineSelectedLabel[codLDiscPrint] + " : " + codDisciplineSelected[codLDiscPrint] + "\n"
						}
					//BEAST		
					} else if (cmd === 'randomcodbeast') {
						codVirtueVice = codSetVirtueVice(codLifes,codLegends);
						codVirtueName = codVirtueVice.virtueName;
						codViceName = codVirtueVice.viceName;
						
						codClanCovenant = codSetClanCovenant(codFamilies,codHungers);
						codClanSubResult = codClanCovenant.clanResult;
						codClanName = codClanCovenant.clanName;
						codCovenantSubResult = codClanCovenant.covenantResult;
						codCovenantName = codClanCovenant.covenantName;
						
						codMentalSkills[5]++;
						
						var codAtavism1Sub = codAtavisms[codClanSubResult].length;
						var codAtavism1SubResult = Math.floor(Math.random() * codAtavism1Sub);
						var codAtavism1Name = codAtavisms[codClanSubResult][codAtavism1SubResult];
										
						var codAtavism2Sub = codAtavisms.length;
						var codAtavism2SubResult = Math.floor(Math.random() * codAtavism2Sub);
						var codAtavism2Main = codAtavisms[codAtavism2SubResult].length;
						var codAtavism2MainResult = Math.floor(Math.random() * codAtavism2Main);
						var codAtavism2Name = codAtavisms[codAtavism2SubResult][codAtavism2MainResult];
					
						var codNightmare1Sub = codNightmares.length;
						var codNightmare1SubResult = Math.floor(Math.random() * codNightmare1Sub);
						var codNightmare1Name = codNightmares[codNightmare1SubResult]
						codNightmares.splice(codNightmare1SubResult,1)
					
						var codNightmare2Sub = codNightmares.length;
						var codNightmare2SubResult = Math.floor(Math.random() * codNightmare2Sub);
						var codNightmare2Name = codNightmares[codNightmare2SubResult]
					
						var codLairTrait1Sub = codLairTraits.length;
						var codLairTrait1SubResult = Math.floor(Math.random() * codLairTrait1Sub);
						var codLairTrait1Name = codLairTraits[codLairTrait1SubResult];
						if (codLairTrait1SubResult > 30) {
							codLairTraits.splice(31,25);
						} else {
							codLairTraits.splice(codLairTrait1SubResult,1)
						}
						
						var codLairTrait2Sub = codLairTraits.length;
						var codLairTrait2SubResult = Math.floor(Math.random() * codLairTrait2Sub);
						var codLairTrait2Name = codLairTraits[codLairTrait2SubResult];
						var codSatiety = Math.floor(Math.random() * 10 + 1);
						if (codSatiety == 10) {codSatiety--};
					 //CHANGELING	
					} else if (cmd === 'randomcodchangeling') {
						var codVirtueVice = codSetVirtueVice(codNeedles,codThreads);
						var codVirtueName = codVirtueVice.virtueName;
						var codViceName = codVirtueVice.viceName;
						
						var codClanCovenant = codSetClanCovenant(codSeemings,codCourts);
						var codClanSubResult = codClanCovenant.clanResult;
						var codClanName = codClanCovenant.clanName;
						var codCovenantSubResult = codClanCovenant.covenantResult;
						var codCovenantName = codClanCovenant.covenantName;
												
						if (codCovenantSubResult < 4) {
							if (codCovenantSubResult === 0) {
								codMeritsSelected.push(codChangelingMerits[0]);
								codMeritsSelectedValues.push(1);
								codChangelingMerits.splice(4,1);
							} else if (codCovenantSubResult === 1) {
								codMeritsSelected.push(codChangelingMerits[1]);
								codMeritsSelectedValues.push(1);
								codChangelingMerits.splice(5,1);
							} else if (codCovenantSubResult === 2) {
								codMeritsSelected.push(codChangelingMerits[2]);
								codMeritsSelectedValues.push(1);
								codChangelingMerits.splice(6,1);
							} else if (codCovenantSubResult === 3) {
								codMeritsSelected.push(codChangelingMerits[3]);
								codMeritsSelectedValues.push(1);
								codChangelingMerits.splice(7,1);
							}								
						} else {
							codChangelingMerits.splice(0,4);
						}
						codCommonMerits.splice(0,1);
						
						var codKithSub = codKiths.length;
						var codKithSubResult = Math.floor(Math.random() * codKithSub);
						var codKithName = codKiths[codKithSubResult];					
								
						var codFavoriteRegaliaSelect = []
						var codFavoriteRegaliaSelectName = []
						var codFavoriteRegalia1Name = codRegalias[codClanSubResult];
						codFavoriteRegaliaSelect.push(codClanSubResult);
						codFavoriteRegaliaSelectName.push(codFavoriteRegalia1Name);
					
						var codFavoriteRegalia2Sub = codRegalias.length;
						var codFavoriteRegalia2SubResult = Math.floor(Math.random() * codFavoriteRegalia2Sub);
						if (codFavoriteRegalia2SubResult == codClanSubResult) {
							while (codFavoriteRegalia2SubResult == codClanSubResult) {
								codFavoriteRegalia2SubResult = Math.floor(Math.random() * codFavoriteRegalia2Sub);
							}
						}
						var codFavoriteRegalia2Name = codRegalias[codFavoriteRegalia2SubResult];
						codFavoriteRegaliaSelect.push(codFavoriteRegalia2SubResult);
						codFavoriteRegaliaSelectName.push(codFavoriteRegalia2Name);
					
						var codCommonContractSelect = []
						var codCommonContractSub1 = codContractTypes.length;
						var codCommonContractSub1Result = 0;
						var codCommonContractSub2 = 0;
						var codCommonContractSub2Result = 0;
						var codCommonContractSub2Name = "";
						var codCommonContractSub3 = 0;
						var codCommonContractSub3Result = 0;
						var codCommonContractSub3Name = "";
						var codCommonContractMainName = "";
					
						for (codCommonContractCount = 0; codCommonContractCount < 4; codCommonContractCount++) {
							codCommonContractSub1Result = Math.floor(Math.random() * codCommonContractSub1);
							if (codCommonContractCount < 2) {
								codCommonContractSub1Result = 0
							}
							if (codCommonContractSub1Result == 1 && codCovenantSubResult == 4) {
								while (codCommonContractSub1Result == 1) {
									codCommonContractSub1Result = Math.floor(Math.random() * codCommonContractSub1);
								}
							}
							codCommonContractSub2 = codCommonContracts[codCommonContractSub1Result].length;
							codCommonContractSub2Result = Math.floor(Math.random() * codCommonContractSub2);
							if (codCommonContractSub1Result < 2) {
								if (codCommonContractSub1Result > 0) {
									codCommonContractSub2Result = codCovenantSubResult;
									codCommonContractSub2Name = codCovenantName;
								} else {
									if (codCommonContractCount < 2) {
										if (codCommonContractSub2Result != codFavoriteRegaliaSelect[0] && codCommonContractSub2Result != codFavoriteRegaliaSelect[1]) {
											while (codCommonContractSub2Result != codFavoriteRegaliaSelect[0] && codCommonContractSub2Result != codFavoriteRegaliaSelect[1]) {
												codCommonContractSub2Result = Math.floor(Math.random() * codCommonContractSub2);
											}
										}
									}
								codCommonContractSub2Name = codRegalias[codCommonContractSub2Result];
								}
								codCommonContractSub3 = codCommonContracts[codCommonContractSub1Result][codCommonContractSub2Result].length;
								codCommonContractSub3Result = Math.floor(Math.random() * codCommonContractSub3);
								codCommonContractSub3Name = codCommonContracts[codCommonContractSub1Result][codCommonContractSub2Result][codCommonContractSub3Result];
								codCommonContracts[codCommonContractSub1Result][codCommonContractSub2Result].splice(codCommonContractSub3Result,1);
							} else {
								codCommonContractSub2Name = "Goblin";
								codCommonContractSub3Name = codCommonContracts[codCommonContractSub1Result][codCommonContractSub2Result];
								codCommonContracts[codCommonContractSub1Result].splice(codCommonContractSub2Result,1);
							}
							codCommonContractMainName = codCommonContractSub3Name + " (" + codCommonContractSub2Name + ")";
							codCommonContractSelect.push(codCommonContractMainName);
							var codCommonContractSub1 = codContractTypes.length;
						}
					
						var codRoyalContractSelect = []
						var codRoyalContractSub1 = codContractTypes.length-1;
						var codRoyalContractSub1Result = 0;
						var codRoyalContractSub2 = 0;
						var codRoyalContractSub2Result = 0;
						var codRoyalContractSub2Name = "";
						var codRoyalContractSub3 = 0;
						var codRoyalContractSub3Result = 0;
						var codRoyalContractSub3Name = "";
						var codRoyalContractMainName = "";
					
						for (codRoyalContractCount = 0; codRoyalContractCount < 2; codRoyalContractCount++) {
							codRoyalContractSub1Result = Math.floor(Math.random() * codRoyalContractSub1);
							if (codRoyalContractSub1Result == 1 && codCovenantSubResult == 4) {
								while (codRoyalContractSub1Result == 1) {
									codRoyalContractSub1Result = Math.floor(Math.random() * codRoyalContractSub1);
								}
							}
							codRoyalContractSub2 = codRoyalContracts[codRoyalContractSub1Result].length;
							codRoyalContractSub2Result = Math.floor(Math.random() * codRoyalContractSub2);
							if (codRoyalContractSub1Result > 0) {
								codRoyalContractSub2Result = codCovenantSubResult;
								codRoyalContractSub2Name = codCovenantName;
							} else {
								if (codRoyalContractSub2Result != codFavoriteRegaliaSelect[0] && codRoyalContractSub2Result != codFavoriteRegaliaSelect[1]) {
									while (codRoyalContractSub2Result != codFavoriteRegaliaSelect[0] && codRoyalContractSub2Result != codFavoriteRegaliaSelect[1]) {
										codRoyalContractSub2Result = Math.floor(Math.random() * codRoyalContractSub2);
									}
								}
								codRoyalContractSub2Name = codRegalias[codRoyalContractSub2Result];
							}
							codRoyalContractSub3 = codRoyalContracts[codRoyalContractSub1Result][codRoyalContractSub2Result].length;
							codRoyalContractSub3Result = Math.floor(Math.random() * codRoyalContractSub3);
							codRoyalContractSub3Name = codRoyalContracts[codRoyalContractSub1Result][codRoyalContractSub2Result][codRoyalContractSub3Result];
							codRoyalContracts[codRoyalContractSub1Result][codRoyalContractSub2Result].splice(codRoyalContractSub3Result,1);
							codRoyalContractMainName = codRoyalContractSub3Name + " (" + codRoyalContractSub2Name + ")";
							codRoyalContractSelect.push(codRoyalContractMainName);
							codRoyalContractSub1 = codContractTypes.length-1;
						}
					
						var codFavoredAttribute = Math.floor(Math.random() * 3)
						var codFavoredAttributeName = ""
						var codFavoredAttributeAssigned = false
						while (!codFavoredAttributeAssigned) {
							switch(codClanSubResult) {
								//Beast
								case 0:
									switch(codFavoredAttribute) {
										case 0: 
											if (codPhysicalAttributes[2] < 5) {
												codPhysicalAttributes[2]++;
												codFavoredAttributeName = codPhysicalAttributesLabels[2];
												codFavoredAttributeAssigned  =  true;
											}
										break;
										case 1:
											if (codSocialAttributes[2] < 5) {
												codSocialAttributes[2]++
												codFavoredAttributeName = codSocialAttributesLabels[2];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 2:
											if (codMentalAttributes[2] < 5) {
												codMentalAttributes[2]++
												codFavoredAttributeName = codMentalAttributesLabels[2];
												codFavoredAttributeAssigned = true;
											}
										break;
									}
								
								break;
								//Darkling
								case 1:
									switch(codFavoredAttribute) {
										case 0: 
											if (codPhysicalAttributes[1] < 5) {
												codPhysicalAttributes[1]++;
												codFavoredAttributeName = codPhysicalAttributesLabels[1];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 1:
											if (codSocialAttributes[1] < 5) {
												codSocialAttributes[1]++
												codFavoredAttributeName = codSocialAttributesLabels[1];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 2:
											if (codMentalAttributes[1] < 5) {
												codMentalAttributes[1]++
												codFavoredAttributeName = codMentalAttributesLabels[1];
												codFavoredAttributeAssigned = true;
											}
										break;
									}
								break;
								//Elemental
								case 2:
									switch(codFavoredAttribute) {
										case 0: 
											if (codPhysicalAttributes[2] < 5) {
												codPhysicalAttributes[2]++;
												codFavoredAttributeName = codPhysicalAttributesLabels[2];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 1:
											if (codSocialAttributes[2] < 5) {
												codSocialAttributes[2]++
												codFavoredAttributeName = codSocialAttributesLabels[2];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 2:
											if (codMentalAttributes[2] < 5) {
												codMentalAttributes[2]++
												codFavoredAttributeName = codMentalAttributesLabels[2];
												codFavoredAttributeAssigned = true;
											}
										break;
									}
								break;
								//Fairest
								case 3:
									switch(codFavoredAttribute) {
										case 0: 
											if (codPhysicalAttributes[0] < 5) {
												codPhysicalAttributes[0]++;
												codFavoredAttributeName = codPhysicalAttributesLabels[0];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 1:
											if (codSocialAttributes[0] < 5) {
												codSocialAttributes[0]++
												codFavoredAttributeName = codSocialAttributesLabels[0];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 2:
											if (codMentalAttributes[0] < 5) {
												codMentalAttributes[0]++
												codFavoredAttributeName = codMentalAttributesLabels[0];
												codFavoredAttributeAssigned = true;
											}
										break;
									}
								break;
								//Ogre
								case 4:
									switch(codFavoredAttribute) {
										case 0: 
											if (codPhysicalAttributes[0] < 5) {
												codPhysicalAttributes[0]++;
												codFavoredAttributeName = codPhysicalAttributesLabels[0];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 1:
											if (codSocialAttributes[0] < 5) {
												codSocialAttributes[0]++
												codFavoredAttributeName = codSocialAttributesLabels[0];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 2:
											if (codMentalAttributes[0] < 5) {
												codMentalAttributes[0]++
												codFavoredAttributeName = codMentalAttributesLabels[0];
												codFavoredAttributeAssigned = true;
											}
										break;
									}
								break;
								//Wizened
								case 5:
									switch(codFavoredAttribute) {
										case 0: 
											if (codPhysicalAttributes[1] < 5) {
												codPhysicalAttributes[1]++;
												codFavoredAttributeName = codPhysicalAttributesLabels[1];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 1:
											if (codSocialAttributes[1] < 5) {
												codSocialAttributes[1]++
												codFavoredAttributeName = codSocialAttributesLabels[1];
												codFavoredAttributeAssigned = true;
											}
										break;
										case 2:
											if (codMentalAttributes[1] < 5) {
												codMentalAttributes[1]++
												codFavoredAttributeName = codMentalAttributesLabels[1];
												codFavoredAttributeAssigned = true;
											}
										break;
									}
								break;
							}
						}
						var codGlamour = Math.floor(Math.random() * 10 + 1);
						
					//END CHANGELING	
					}
					
					//Attributes/Skills assignment
					function codSetPriorities(a,b) {
						for (codIAttribute = 0; codIAttribute < b.length; codIAttribute++) {
							var codAttributeAssign = Math.floor(Math.random() * a.length);
							b[codIAttribute] = a[codAttributeAssign];
							a.splice(codAttributeAssign,1);
						}
					}
					
					//a = Source, b = Where to, c = mental/physical/social, d = length
					function codPointAssign(a,b,c,d) {
						for (i = 0; i < a[c] ; i++) {
							codPoint = Math.floor(Math.random() * d);
							while (b[codPoint] == 5) {
								codPoint = Math.floor(Math.random() * d);
							}
							b[codPoint]++;												
						}
					}
					
					codSetPriorities(codAttributesPriority,codAttributesPrioritySelected);
					
					codPointAssign(codAttributesPrioritySelected,codMentalAttributes,0,3);
					codPointAssign(codAttributesPrioritySelected,codPhysicalAttributes,1,3)
					codPointAssign(codAttributesPrioritySelected,codSocialAttributes,2,3)
					
					codSetPriorities(codSkillsPriority,codSkillsPrioritySelected);
					
					codPointAssign(codSkillsPrioritySelected,codMentalSkills,0,8);
					codPointAssign(codSkillsPrioritySelected,codPhysicalSkills,1,8);
					codPointAssign(codSkillsPrioritySelected,codSocialSkills,2,8);
					
					
					function setSpecialty() {
						
						var specialtySelected = [];
						
						for (i = 0; i < 3; i++) {
							var category = Math.floor(Math.random() * 3);
							var skill = Math.floor(Math.random() * 8);
							if (category === 0) {
								if (codMentalSkills[skill] > 0) {
									var spec = Math.floor(Math.random() * codSkillSpecialties[category][skill].length);
									var specSelected = codMentalSkillsLabels[skill].trim() + ": " + codSkillSpecialties[category][skill][spec];
									specialtySelected.push(specSelected);
									codSpecialtySelected.push(codSkillSpecialties[category][skill][spec]);
									codSkillSpecialtySelected.push(codMentalSkillsLabels[skill].trim())
									codSkillSpecialties[category][skill].splice(spec,1);
								} else {
									i--
								
								}
							} else if (category === 1) {
								if (codPhysicalSkills[skill] > 0) {
									var spec = Math.floor(Math.random() * codSkillSpecialties[category][skill].length);
									var specSelected = codPhysicalSkillsLabels[skill].trim() + ": " + codSkillSpecialties[category][skill][spec];
									specialtySelected.push(specSelected);
									codSpecialtySelected.push(codSkillSpecialties[category][skill][spec]);
									codSkillSpecialtySelected.push(codPhysicalSkillsLabels[skill].trim())
									codSkillSpecialties[category][skill].splice(spec,1);
								} else {
									i--
								}
							} else {
								if (codSocialSkills[skill] > 0) {
									var spec = Math.floor(Math.random() * codSkillSpecialties[category][skill].length);
									var specSelected = codSocialSkillsLabels[skill].trim() + ": " + codSkillSpecialties[category][skill][spec];
									specialtySelected.push(specSelected);
									codSpecialtySelected.push(codSkillSpecialties[category][skill][spec]);
									codSkillSpecialtySelected.push(codSocialSkillsLabels[skill].trim())
									codSkillSpecialties[category][skill].splice(spec,1);
								} else {
									i--
								}
							}
						}
						var specialties = "Specialties: " + specialtySelected.join("; ");
						return specialties;
					}
					
					function setMerits() {
						function checkStatPrereq(statName,statValue) {
							if (isNaN(statValue)) {
								if (statName === statValue) {
									return true;
								} else {
									return false;
								}
							} else {
								if (statName >= statValue) {
									return true;
								} else {
									return false;
								}
							}
						}
						function checkContainPrereq(statName, statValue, arraySource1, arraySource2) {
							for (i = 0; i < arraySource1.length; i++) {
								if (arraySource1[i] === statName && arraySource2[i] >= statValue) {
									return true;
								}
							}
							return false;
						}
						function canIAffordIt(cost) {
							var canIAffordIt = meritsLeft - cost;
							if (canIAffordIt > -1) {
								return true;
							}
						}
						function addMerit(sourceArray) {
							codMeritsSelected.push(sourceArray[meritPicked]);
							codMeritsSelectedValues.push(rank);
							meritsLeft-= rank;
							sourceArray.splice(meritPicked,1);
						}
						function checkCovenant(covenant,meritRank) {
							var covenantTotal = 5;
							var mainCovenant = "";
							var deuCerto = "não";
							var foiFoi = false;
							if (codCovenantSubResult < 5) {
								mainCovenant = codCovenantName + " Status";
							};
							if (mainCovenant != "") {
								var mainCovenantValue = 0;
								for (d = 0; d < codMeritsSelected.length; d++) {
									if (codMeritsSelected[d] === mainCovenant) {
										mainCovenantValue = codMeritsSelectedValues[d];
									}
								}
								if (covenant != mainCovenant) {
									if (meritRank >= mainCovenantValue) {
										return false;
									}
									for (i = 0; i < codMeritsSelected.length; i++) {
										var tots = meritRank + codMeritsSelectedValues[i];
										if (codMeritsSelected[i] === 'Circle of the Crone Status' && (codMeritsSelectedValues[i] >= mainCovenantValue || meritRank >= mainCovenantValue || tots >= mainCovenantValue)) {
											foiFoi = true;
										} else if (codMeritsSelected[i] === 'Ordo Dracul Status' && (codMeritsSelectedValues[i] >= mainCovenantValue|| meritRank >= mainCovenantValue || tots >= mainCovenantValue)) {
											foiFoi = true;
										} else if (codMeritsSelected[i] === 'Lancea et Sanctum Status' && (codMeritsSelectedValues[i] >= mainCovenantValue|| meritRank >= mainCovenantValue || tots >= mainCovenantValue)) {
											foiFoi = true;
										} else if (codMeritsSelected[i] === 'Carthian Movement Status' && (codMeritsSelectedValues[i] >= mainCovenantValue|| meritRank >= mainCovenantValue || tots >= mainCovenantValue)) {
											foiFoi = true;
										} else if (codMeritsSelected[i] === 'Invictus Status' && (codMeritsSelectedValues[i] >= mainCovenantValue|| meritRank >= mainCovenantValue || tots >= mainCovenantValue)) {
											foiFoi = true
										}
									}
								}
							} else if (meritRank > 1) {
									deuCerto = 'nem'
									return false;
							}
							if (foiFoi) {
								return false;
							}
							for (j = 0; j < codMeritsSelected.length; j++) {
								if (codMeritsSelected[j] === 'Circle of the Crone Status') {
									covenantTotal -= codMeritsSelectedValues[j];
								} else if (codMeritsSelected[j] === 'Ordo Dracul Status') {
									covenantTotal -= codMeritsSelectedValues[j];
								} else if (codMeritsSelected[j] === 'Lancea et Sanctum Status') {
									covenantTotal -= codMeritsSelectedValues[j];
								} else if (codMeritsSelected[j] === 'Carthian Movement Status') {
									covenantTotal -= codMeritsSelectedValues[j];
								} else if (codMeritsSelected[j] === 'Invictus Status') {
									covenantTotal -= codMeritsSelectedValues[j];
								}
							}
							if (covenantTotal - meritRank > -1) {
								return true;
							} else {
								deuCerto = 'noooo'
								return false;
							}
						}
						var meritsLeft = 10;
						var meritPicked = 0;
						var rank = 0;
						var alreadyHaveIt = false;
						var alreadyHaveItValue = 0;
						if (cmd === 'randomcod') {
							for (i = 0; i < codCommonMerits.length; i++) {
								codPossibleMerits.push(codCommonMerits[i]);
							}
							var supernaturalBullshit = Math.floor(Math.random() * 10);
							if (supernaturalBullshit === 0) {
								for (j = 0; j < codMortalMerits.length; j++) {
									codPossibleMerits.push(codMortalMerits[j]);
								}
							}
							console.log(codPossibleMerits);
						} else if (cmd === 'randomcodvampire') {
							for (i = 0; i < codVampireMerits.length; i++) {
								codPossibleMerits.push(codVampireMerits[i]);
							}
							for (j = 0; j < codCommonMerits.length; j++) {
								codPossibleMerits.push(codCommonMerits[j]);
							}
						} else if (cmd === 'randomcodchangeling') {
							for (i = 0; i < codChangelingMerits.length; i++) {
								codPossibleMerits.push(codChangelingMerits[i]);
							}
							for (j = 0; j < codCommonMerits.length; j++) {
								codPossibleMerits.push(codCommonMerits[j]);
							}
						};
						while (meritsLeft > 0) {
							var alreadyHaveIt = false;
							meritPicked = Math.floor(Math.random() * codPossibleMerits.length);
							console.log(codPossibleMerits[meritPicked],meritPicked,rank)
							if (codPossibleMerits[meritPicked] === 'Circle of the Crone Status') {
								rank = Math.floor(Math.random() * 5 + 1);
								var pinpon = checkCovenant(codPossibleMerits[meritPicked],rank)
								if (pinpon && canIAffordIt(rank)) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											alreadyHaveItValue = b
											alreadyHaveIt = true;
										}
									}
									if (alreadyHaveIt) {
										codMeritsSelectedValues[alreadyHaveItValue] += rank;
									} else {
										codMeritsSelected.push(codPossibleMerits[meritPicked]);
										codMeritsSelectedValues.push(rank);
									}
									meritsLeft -= rank;
								}
							} else if (codPossibleMerits[meritPicked] === "Ordo Dracul Status") {
								rank = Math.floor(Math.random() * 5 + 1);
								var pinpon = checkCovenant(codPossibleMerits[meritPicked],rank)
								if (pinpon && canIAffordIt(rank)) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											alreadyHaveItValue = b
											alreadyHaveIt = true;
										}
									}
									if (alreadyHaveIt) {
										codMeritsSelectedValues[alreadyHaveItValue] += rank;
									} else {
										codMeritsSelected.push(codPossibleMerits[meritPicked]);
										codMeritsSelectedValues.push(rank);
									}
									meritsLeft -= rank;
								}
							} else if (codPossibleMerits[meritPicked] === "Lancea et Santcum Status") {
								rank = Math.floor(Math.random() * 5 + 1);
								var pinpon = checkCovenant(codPossibleMerits[meritPicked],rank)
								if (pinpon && canIAffordIt(rank)) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											alreadyHaveItValue = b
											alreadyHaveIt = true;
										}
									}
									if (alreadyHaveIt) {
										codMeritsSelectedValues[alreadyHaveItValue] += rank;
									} else {
										codMeritsSelected.push(codPossibleMerits[meritPicked]);
										codMeritsSelectedValues.push(rank);
									}
									meritsLeft -= rank;
								}
							} else if (codPossibleMerits[meritPicked] === "Carthian Movement Status") {
								rank = Math.floor(Math.random() * 5 + 1);
								var pinpon = checkCovenant(codPossibleMerits[meritPicked],rank)
								if (pinpon && canIAffordIt(rank)) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											alreadyHaveItValue = b
											alreadyHaveIt = true;
										}
									}
									if (alreadyHaveIt) {
										codMeritsSelectedValues[alreadyHaveItValue] += rank;
									} else {
										codMeritsSelected.push(codPossibleMerits[meritPicked]);
										codMeritsSelectedValues.push(rank);
									}
									meritsLeft -= rank;
								}
							} else if (codPossibleMerits[meritPicked] === "Invictus Status") {
								rank = Math.floor(Math.random() * 5 + 1);
								var pinpon = checkCovenant(codPossibleMerits[meritPicked],rank)
								if (pinpon && canIAffordIt(rank)) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											alreadyHaveItValue = b
											alreadyHaveIt = true;
										}
									}
									if (alreadyHaveIt) {
										codMeritsSelectedValues[alreadyHaveItValue] += rank;
									} else {
										codMeritsSelected.push(codPossibleMerits[meritPicked]);
										codMeritsSelectedValues.push(rank);
									}
									meritsLeft -= rank;
								}
							} else if (codPossibleMerits[meritPicked] === "City Status") {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === "Clan Status") {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Acute Senses') {
								rank = 1
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Altar') {
								rank = 3
								if ((canIAffordIt(rank)) && (checkContainPrereq('Circle of the Crone Status',rank,codMeritsSelected,codMeritsSelectedValues))) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Atrocious') {
								rank = 1
								var pinpon = checkContainPrereq('Cutthroat',1,codMeritsSelected,codMeritsSelectedValues);
								var pinpon2 = checkContainPrereq('Enticing',1,codMeritsSelected,codMeritsSelectedValues);
								if (canIAffordIt(rank) && !pinpon && !pinpon2) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Attaché') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Invictus Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Bloodhound') {
								rank = 1
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Cacophony Savvy') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkContainPrereq('City Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Carthian Pull') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Carthian Movement Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Claws of the Unholy') {
								rank = 1;
								if (canIAffordIt(rank) && checkContainPrereq('Protean',4,codDisciplineSelectedLabel,codDisciplineSelected)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Close Family') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}		
							} else if (codPossibleMerits[meritPicked] === 'Cutthroat') {
								rank = 1;
								var pinpon = checkContainPrereq('Atrocious',1,codMeritsSelected,codMeritsSelectedValues);
								var pinpon2 = checkContainPrereq('Enticing',1,codMeritsSelected,codMeritsSelectedValues);
								if (canIAffordIt(rank) && !pinpon && !pinpon2) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Distinguished Palate') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Dream Visions') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codClanName,'Mekhet')) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Dynasty Membership') {
								rank = 1;
								if (canIAffordIt(rank) && checkContainPrereq('Clan Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Enticing') {
								rank = 1;
								var pinpon = checkContainPrereq('Cutthroat',1,codMeritsSelected,codMeritsSelectedValues);
								var pinpon2 = checkContainPrereq('Atrocious',1,codMeritsSelected,codMeritsSelectedValues);
								if (canIAffordIt(rank) && !pinpon && !pinpon2) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Feeding Grounds') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Friends in High Places') {
								rank = 1;
								if (canIAffordIt(rank) && checkContainPrereq('Invictus Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Haven') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkContainPrereq('Safe Place',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Herd') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Honey Trap') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Invested') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Invictus Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Kiss of the Succubus') {
								rank = 1
								if (canIAffordIt(rank) && checkStatPrereq(codClanName,'Daeva')) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Lineage') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Clan Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Lorekeeper') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Lancea et Sanctum Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'The Mother-Daughter Bond') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Circle of the Crone Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'Night Doctor Surgery') {
								rank = 3
								if (canIAffordIt(rank) && checkContainPrereq('Carthian Movement Status',2,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'Night Doctor Surgery') {
								rank = 3
								if (canIAffordIt(rank) && checkContainPrereq('Carthian Movement Status',2,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'Speaker for the Silent') {
								rank = 3
								if (canIAffordIt(rank) && checkContainPrereq('Invictus Status',1,codMeritsSelected,codMeritsSelectedValues) && checkContainPrereq('Dynasty Membership',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'Pack Alpha') {
								rank = 1
								if (canIAffordIt(rank) && checkStatPrereq(codClanName,'Gangrel')) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'Unnatural Affinity') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'Swarm Form') {
								rank = 2
								if (canIAffordIt(rank) && checkContainPrereq('Protean',3,codDisciplineSelectedLabel,codDisciplineSelected)) {
									addMerit(codPossibleMerits);
								} 
							} else if (codPossibleMerits[meritPicked] === 'Secret Society Junkie') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Ordo Dracul Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Sworn') {
								rank = 1
							if (canIAffordIt(rank) && checkContainPrereq('Ordo Dracul Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'I Know a Guy') {
								rank = 1
								if (canIAffordIt(rank) && checkContainPrereq('Carthian Movement Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Touchstone') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Undead Menses') {
								rank = 2
								if (canIAffordIt(rank) && checkStatPrereq(codNameSex.sex,'girl')) {
										addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Unsettling Gaze') {
								rank = 1
								if (canIAffordIt(rank) && checkStatPrereq(codClanName,'Nosferatu')) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Where the Bodies Are Buried') {
								rank = 2
								if (canIAffordIt(rank) && checkContainPrereq('Invictus Status',2,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Lex Terrae') {
								rank = 2
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Carthian Movement') && checkContainPrereq('Carthian Movement Status',2,codMeritsSelected,codMeritsSelectedValues) && checkContainPrereq('Feeding Grounds',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Mandate from the Masses') {
								rank = 5
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Carthian Movement') && checkContainPrereq('Carthian Movement Status',5,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Right of Return') {
								rank = 2
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Carthian Movement') && checkContainPrereq('Carthian Movement Status',2,codMeritsSelected,codMeritsSelectedValues) && checkContainPrereq('City Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Strength of Resolution') {
								rank = 1
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Carthian Movement') && checkContainPrereq('Carthian Movement Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Plausible Deniability') {
								rank = 4
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Carthian Movement') && checkContainPrereq('Carthian Movement Status',3,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Notary') {
								rank = 2
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Invictus') && checkContainPrereq('Invictus Status',3,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Oath of Action') {
								rank = 4
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Invictus')) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Oath of Fealty') {
								rank = 1
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Invictus') && checkContainPrereq('Invictus Status',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Oath of Penance') {
								rank = 3
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Invictus')) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Oath of Serfdom') {
								rank = 2
								if (canIAffordIt(rank) && checkStatPrereq(codCovenantName,'Invictus')) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Kindred Dueling') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codPhysicalSkills[7],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Riding the Wave') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codMentalAttributes[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Blood Potency') {
								level = Math.floor(Math.random() * 2 + 1);
								rank = level * 5;
								if (canIAffordIt(rank)) {
									codPossibleMerits[meritPicked] += " " + level;
									codBPotency+=level;
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Allies') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Alternate Identity') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Ambidextrous') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Anonymity') {
								var pinpon = checkContainPrereq('Fame',1,codMeritsSelected,codMeritsSelectedValues);
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && !pinpon) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Area of Expertise') {
								rank = 1
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[2],2)) {
									whatSkill = Math.floor(Math.random() * 3)
									codPossibleMerits[meritPicked] += " (" + codSpecialtySelected[whatSkill] + ")"
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Armed Defense') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[7],2) && checkContainPrereq('Defensive Combat: Weaponry',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Automotive Genius') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codMentalSkills[2],3) && checkStatPrereq(codPhysicalSkills[2],1) && checkStatPrereq(codMentalSkills[7],1)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Barfly') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialSkills[5],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Cheap Shot') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialSkills[7],2) && checkContainPrereq('Street Fighting',3,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Choke Hold') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[1],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Close Quarters Combat') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[0],2) && checkStatPrereq(codPhysicalSkills[1],3)) {
									addMerit(codPossibleMerits);
								}
							}else if (codPossibleMerits[meritPicked] === 'Closed Book') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[1],3) && checkStatPrereq(codMentalAttributes[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Common Sense') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Contacts') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Crack Driver') {
								var pickRank = Math.floor(Math.random() * 2);
								if (pickRank === 0) {
									rank = 2;
								} else {
									rank = 3;
								}
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Demolisher') {
								rank = Math.floor(Math.random() * 3 + 1);;
								if (canIAffordIt(rank) && (checkStatPrereq(codMentalAttributes[0],3) || checkStatPrereq(codPhysicalAttributes[0],3))) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Danger Sense') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Defensive Combat: Brawl') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[1],1)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Defensive Combat: Weaponry') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[7],1)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Direction Sense') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Double Jointed') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Eidetic Memory') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Encyclopedic Knowledge') {
								rank = 2;
								if (canIAffordIt(rank)) {
									for (i = 0; i < 1; i++) {
										var category = Math.floor(Math.random() * 3);
										var skill = Math.floor(Math.random() * 8);
										if (category === 0) {
											if (codMentalSkills[skill] > 1) {
												codPossibleMerits[meritPicked] += " (" + codMentalSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										} else if (category === 1) {
											if (codPhysicalSkills[skill] > 1) {
												codPossibleMerits[meritPicked] += " (" + codPhysicalSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										} else {
											if (codSocialSkills[skill] > 1) {
												codPossibleMerits[meritPicked] += " (" + codSocialSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										}
									}
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Etiquette') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codSocialSkills[5],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Eye for the Strange') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[2],2) && checkStatPrereq(codMentalSkills[5],1)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Fame') {
								var pinpon = checkContainPrereq('Anonymity',1,codMeritsSelected,codMeritsSelectedValues);
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && !pinpon) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Fast Reflexes') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && (checkStatPrereq(codMentalAttributes[1],3) || checkStatPrereq(codPhysicalAttributes[1],3))) {
									codInits += rank;
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Fast-Talking') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[1],3) && checkStatPrereq(codSocialSkills[7],2)) {
									addMerit(codPossibleMerits);
									}
							} else if (codPossibleMerits[meritPicked] === 'Fighting Finesse') {
								rank = 2;
								var hasSpec = false
								var c = 0
								for (b = 0; b < codSkillSpecialtySelected.length; b++) {
									if (codSkillSpecialtySelected[b] === 'Brawl' || codSkillSpecialtySelected[b] === 'Weaponry') {
										hasSpec = true;
										c = b;
									}
								}
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[1],3) && hasSpec) {
									codPossibleMerits[meritPicked] += " (" + codSpecialtySelected[c] + ")"
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Firefight') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[0],2) && checkStatPrereq(codPhysicalSkills[3],2) && checkStatPrereq(codSocialAttributes[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Fixer') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[1],3) && checkContainPrereq('Contacts',2,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
									}
							} else if (codPossibleMerits[meritPicked] === 'Fleet of Foot') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[0],2)) {
									codSpeed += rank
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Giant') {
								var pinpon = checkContainPrereq('Small-Framed',1,codMeritsSelected,codMeritsSelectedValues);
								rank = 3;
								if (canIAffordIt(rank) && !pinpon) {
									codSize ++;
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Good Time Management') {
								rank = 1
								if (canIAffordIt(rank) && (checkStatPrereq(codMentalSkills[0],2) || checkStatPrereq(codMentalSkills[7],2))) {
									codSpeed += rank
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Grappling') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[0],2) && checkStatPrereq(codPhysicalAttributes[2],3) && checkStatPrereq(codPhysicalSkills[0],2) && checkStatPrereq(codPhysicalSkills[1],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Greyhound') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[0],3) && checkStatPrereq(codPhysicalAttributes[2],3) && checkStatPrereq(codMentalAttributes[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Hardy') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[2],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Heavy Weapons') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[0],3) && checkStatPrereq(codPhysicalAttributes[2],3) && checkStatPrereq(codPhysicalSkills[0],2) && checkStatPrereq(codPhysicalSkills[7],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Hobbyist Clique') {
								rank = 2
								if (canIAffordIt(rank)) {
									for (i = 0; i < 1; i++) {
										var category = Math.floor(Math.random() * 3);
										var skill = Math.floor(Math.random() * 8);
										if (category === 0) {
											if (codMentalSkills[skill] > 1) {
												codPossibleMerits[meritPicked] += " (" + codMentalSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										} else if (category === 1) {
											if (codPhysicalSkills[skill] > 1) {
												codPossibleMerits[meritPicked] += " (" + codPhysicalSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										} else {
											if (codSocialSkills[skill] > 1) {
												codPossibleMerits[meritPicked] += " (" + codSocialSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										}
									}
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Holistic Awareness') {
								rank = 1
								if (canIAffordIt(rank)) {
									codSpeed += rank
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Improvised Weaponry') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[7],1)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Indomitable') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Inspiring') {
								rank = 3;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[0],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Interdisciplinary Specialty') {
								var interSkill = ""
								for (t = 0; t < codSkillSpecialtySelected.length; t++) {
									for (d = 0; d < codSocialSkills.length; d++) {
										if (codSkillSpecialtySelected[t] == codMentalSkillsLabels[d].trim()) {
											if (codMentalSkills[d] >= 3) {
												interSkill = " (" + codSpecialtySelected[t] + ")";
											}													
										} else if (codSkillSpecialtySelected[t] == codPhysicalSkillsLabels[d].trim()) {
											if (codPhysicalSkills[d] >= 3) {
												interSkill = " (" + codSpecialtySelected[t] + ")";
											}													
										} else if (codSkillSpecialtySelected[t] == codSocialSkillsLabels[d].trim()) {
											if (codSocialSkills[d] >= 3) {
												interSkill = " (" + codSpecialtySelected[t] + ")";
											}
										}
										if (interSkill !== "") {
											break;
										}
									}
									if (interSkill !== "") {
										break;
									}
								}
								rank = 1;
								if (canIAffordIt(rank) && interSkill !== "") {
									codPossibleMerits[meritPicked] = "Interdisc. Specialty" + interSkill;
								addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Investigative Aide') {
								rank = 1
								if (canIAffordIt(rank)) {
									for (i = 0; i < 1; i++) {
										var category = Math.floor(Math.random() * 3);
										var skill = Math.floor(Math.random() * 8);
										if (category === 0) {
											if (codMentalSkills[skill] > 2) {
												codPossibleMerits[meritPicked] += " (" + codMentalSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										} else if (category === 1) {
											if (codPhysicalSkills[skill] > 2) {
												codPossibleMerits[meritPicked] += " (" + codPhysicalSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										} else {
											if (codSocialSkills[skill] > 2) {
												codPossibleMerits[meritPicked] += " (" + codSocialSkillsLabels[skill].trim() + ")";
											} else {
												i--
											}
										}
									}
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Investigative Prodigy') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[1],3) && checkStatPrereq(codMentalSkills[3],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Iron Skin') {
								var pickRank = Math.floor(Math.random() * 2);
								if (pickRank === 0) {
									rank = 2;
								} else {
									rank = 4;
								}
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[2],3) && (checkContainPrereq('Street Fighting',2,codMeritsSelected,codMeritsSelectedValues) || checkContainPrereq('Martial Arts',2,codMeritsSelected,codMeritsSelectedValues))) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Iron Stamina') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && (checkStatPrereq(codMentalAttributes[2],3) || checkStatPrereq(codPhysicalAttributes[2],3))) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Iron Will') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[2],4)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Language') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Library') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Light Weapons') {
								rank = Math.floor(Math.random() * 5 + 1);
								var hasFinesse = false;
								for (i = 0; i < codMeritsSelected.length; i++) {
									if (codMeritsSelected[i].includes('Fighting Finesse')) {
										hasFinesse = true;
									}
								}
								if (canIAffordIt(rank) && (checkStatPrereq(codMentalAttributes[1],3) || hasFinesse) && checkStatPrereq(codPhysicalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[0],2) && checkStatPrereq(codPhysicalAttributes[7],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Lucid Dreamer') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Marksmanship') {
								rank = Math.floor(Math.random() * 4 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codMentalAttributes[2],3) && checkStatPrereq(codPhysicalSkills[3],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Martial Arts') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codPhysicalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[0],2) && checkStatPrereq(codPhysicalSkills[1],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Mentor') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Meditative Mind') {
								var pickRank = Math.floor(Math.random() * 3);
								if (pickRank === 0) {
									rank = 1;
								} else if (pickRank === 1) {
									rank = 2;
								} else {
									rank = 4;
								}
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Mystery Cult Initiation') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Parkour') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[0],2)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Patient') {
								rank = 1;
								if (canIAffordIt(rank)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Police Tactics') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[1],2) && checkStatPrereq(codPhysicalSkills[7],2)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Professional Training') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Pusher') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialSkills[4],2)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Quick Draw') {
								rank = 1;
								var hasSpec = false
								var c = 0
								for (b = 0; b < codSkillSpecialtySelected.length; b++) {
									if (codSkillSpecialtySelected[b] === 'Firearms' || codSkillSpecialtySelected[b] === 'Weaponry') {
										hasSpec = true;
										c = b;
									}
								}
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[1],3) && hasSpec) {
									codPossibleMerits[meritPicked] += " (" + codSpecialtySelected[c] + ")"
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Relentless') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[0],2) && checkStatPrereq(codPhysicalAttributes[2],3)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Resources') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Retainer') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Safe Place') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Seizing the Edge') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codMentalAttributes[1],3)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Shiv') {
								rank = Math.floor(Math.random() * 2 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[7],1) && checkContainPrereq('Street Fighting',2,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Sleight of Hand') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalSkills[4],3)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Small-Framed') {
								var pinpon = checkContainPrereq('Giant',1,codMeritsSelected,codMeritsSelectedValues);
								rank = 2;
								if (canIAffordIt(rank) && !pinpon){
									codSize--
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Small Unit Tactics') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[0],3)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Spin Doctor') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[1],3) && checkStatPrereq(codSocialSkills[7],2)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Staff') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Status') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Street Fighting') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[2],3) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codPhysicalSkills[1],2) && checkStatPrereq(codSocialSkills[6],2)){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Striking Looks') {
								rank = Math.floor(Math.random() * 2 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Stunt Driver') {
								rank = Math.floor(Math.random() * 4 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[2],3) && checkStatPrereq(codMentalAttributes[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Sympathetic') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Table Turner') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[1],3) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codMentalAttributes[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Takes One to Know One') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Taste') {
								rank = 1;
								var hasSpec = false
								var c = 0
								for (b = 0; b < codSkillSpecialtySelected.length; b++) {
									if (codSkillSpecialtySelected[b] === 'Crafts' || codSkillSpecialtySelected[b] === 'Expression') {
										hasSpec = true;
										c = b;
									}
								}
								if (canIAffordIt(rank) && checkStatPrereq(codMentalSkills[2],2) && hasSpec) {
									codPossibleMerits[meritPicked] += " (" + codSpecialtySelected[c] + ")"
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Tolerance for Biology') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codMentalAttributes[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Trained Observer') {
								var pickRank = Math.floor(Math.random() * 2);
								if (pickRank === 0) {
									rank = 1;
								} else {
									rank = 3;
								}
								if (canIAffordIt(rank) && (checkStatPrereq(codMentalAttributes[1],3) || checkStatPrereq(codSocialAttributes[2],3))) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'True Friend') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Unarmed Defense') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codPhysicalAttributes[1],3) && checkStatPrereq(codPhysicalSkills[1],2) && checkContainPrereq('Defensive Combat: Brawl',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Untouchable') {
								rank = 1;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[1],3) && checkStatPrereq(codSocialSkills[7],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Aura Reading') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Automatic Writing') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Biokinesis') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Clairvoyance') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Cursed') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Laying on Hands') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Medium') {
								rank = 3;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialSkills[1],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Mind of a Madman') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialSkills[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Numbing Touch') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Omen Sensitivity') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Psychokinesis') {
								var pickRank = Math.floor(Math.random() * 2);
								if (pickRank === 0) {
									rank = 3;
								} else {
									rank = 5;
								}
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Telekinesis') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Telepathy') {
								var pickRank = Math.floor(Math.random() * 2);
								if (pickRank === 0) {
									rank = 3;
								} else {
									rank = 5;
								}
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Thief of Fate') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Unseen Sense') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Vice-Ridden') {
								rank = 2;
								if (canIAffordIt(rank)) {
									codViceName2 = codSetVirtueVice(codVirtues,codVices).viceName;
									codViceName += "/" + codViceName2;
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Virtuous') {
								rank = 2;
								if (canIAffordIt(rank)) {
									codVirtueName2 = codSetVirtueVice(codVirtues,codVices).virtueName;
									codVirtueName += "/" + codVirtueName2
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Spring Mantle') {
								rank = Math.floor(Math.random() * 4 + 1);
								if ((canIAffordIt(rank)) && (checkContainPrereq('Spring Mantle',1,codMeritsSelected,codMeritsSelectedValues))) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											codMeritsSelectedValues[b] += rank;
											codPossibleMerits.splice(meritPicked,1);
										}
									}
								}
							} else if (codPossibleMerits[meritPicked] === 'Summer Mantle') {
								rank = Math.floor(Math.random() * 4 + 1);
								if ((canIAffordIt(rank)) && (checkContainPrereq('Summer Mantle',1,codMeritsSelected,codMeritsSelectedValues))) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											codMeritsSelectedValues[b] += rank;
											codPossibleMerits.splice(meritPicked,1);
										}
									}
								}
							} else if (codPossibleMerits[meritPicked] === 'Autumn Mantle') {
								rank = Math.floor(Math.random() * 4 + 1);
								if ((canIAffordIt(rank)) && (checkContainPrereq('Autumn Mantle',1,codMeritsSelected,codMeritsSelectedValues))) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											codMeritsSelectedValues[b] += rank;
											codPossibleMerits.splice(meritPicked,1);
										}
									}
								}
							} else if (codPossibleMerits[meritPicked] === 'Winter Mantle') {
								rank = Math.floor(Math.random() * 4 + 1);
								if ((canIAffordIt(rank)) && (checkContainPrereq('Winter Mantle',1,codMeritsSelected,codMeritsSelectedValues))) {
									for (b = 0; b < codMeritsSelected.length; b++) {
										if (codMeritsSelected[b] === codPossibleMerits[meritPicked]) {
											codMeritsSelectedValues[b] += rank;
											codPossibleMerits.splice(meritPicked,1);
										}
									}
								}
							} else if (codPossibleMerits[meritPicked] === 'Changeling Acute Senses') {
								rank = 1;
								if (canIAffordIt(rank) && (checkStatPrereq(codSocialAttributes[2],3) || checkStatPrereq(codMentalAttributes[1],3))) {
									codPossibleMerits[meritPicked] = "Acute Senses";
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Arcadian Metabolism') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === "Brownie's Boon") {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Cloak of Leaves') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkContainPrereq('Autumn Mantle',3,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Cold Hearted') {
								rank = 3;
								if (canIAffordIt(rank) && checkContainPrereq('Winter Mantle',3,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Spring Court Goodwill') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Summer Court Goodwill') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Autumn Court Goodwill') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Winter Court Goodwill') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Defensive Dreamscaping') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Diviner') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[2],3) && checkStatPrereq(codMentalAttributes[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Dream Warrior') {
								rank = 1;
								if (canIAffordIt(rank) && (checkStatPrereq(codSocialAttributes[2],3) || checkStatPrereq(codSocialAttributes[1],3) || checkStatPrereq(codSocialAttributes[0],3)) && checkStatPrereq(codWyrd,2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Dull Beacon') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Elemental Warrior') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank) && (checkStatPrereq(codMentalAttributes[1],3) || checkStatPrereq(codPhysicalAttributes[1],3)) && (checkStatPrereq(codPhysicalSkills[1],2) || checkStatPrereq(codPhysicalSkills[3],2) || checkStatPrereq(codPhysicalSkills[7],2)) && (checkStatPrereq(codCommonContractSelect,'Elemental Weapon') || checkStatPrereq(codCommonContractSelect,'Primal Glory') || checkStatPrereq(codClanName,'Elemental'))){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Enchanting Perfomance') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkStatPrereq(codSocialAttributes[0],3) && checkStatPrereq(codSocialSkills[2],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Fae Mount') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Faerie Favor') {
								rank = 3;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Fair Harvest') {
								rank = Math.floor(Math.random() * 2 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Firebrand') {
								rank = 2;
								if (canIAffordIt(rank) && checkContainPrereq('Summer Mantle',3,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Gentrified Bearing') {
								rank = 2;
								if (canIAffordIt(rank) && checkStatPrereq(codWyrd,2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Glamour Fasting') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Goblin Bounty') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Grounded') {
								rank = 3;
								if (canIAffordIt(rank) && checkContainPrereq('Spring Mantle',3,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Hedge Brawler') {
								rank = 2;
								if (canIAffordIt(rank) && (checkStatPrereq(codPhysicalSkills[1],2) || checkStatPrereq(codPhysicalSkills[3],2) || checkStatPrereq(codPhysicalSkills[7],2))){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Hedge Duelist') {
								var hasSocial = false;
								for (v = 0; v < codSocialSkills.length; v++) {
									if (codSocialSkills[v] >= 2) {
										hasSocial = true;
										break;
									}
								}
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && (checkStatPrereq(codSocialAttributes[0],2) || checkStatPrereq(codSocialAttributes[1],2)) && (checkStatPrereq(codPhysicalSkills[1],2) || checkStatPrereq(codPhysicalSkills[7],2)) && hasSocial){
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Hedge Sense') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Hob Kin') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Hollow') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Lethal Mien') {
								rank = 2;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Manymask') {
								rank = 3;
								if (canIAffordIt(rank) && checkStatPrereq(codWyrd,2) && checkStatPrereq(codSocialAttributes[1],3)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Market Sense') {
								rank = 1;
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Noblesse Oblige') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank) && checkContainPrereq('Spring Mantle',1,codMeritsSelected,codMeritsSelectedValues) && checkContainPrereq('Summer Mantle',1,codMeritsSelected,codMeritsSelectedValues) && checkContainPrereq('Autumn Mantle',1,codMeritsSelected,codMeritsSelectedValues) && checkContainPrereq('Winter Mantle',1,codMeritsSelected,codMeritsSelectedValues)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Parallel Lives') {
								rank = 3
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Rigid Mask') {
								rank = 3;
								if (canIAffordIt(rank) && checkStatPrereq(codSocialSkills[7],2)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Stable Trod') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Token') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Warded Dreams') {
								rank = Math.floor(Math.random() * 3 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Workshop') {
								rank = Math.floor(Math.random() * 5 + 1);
								if (canIAffordIt(rank)) {
									addMerit(codPossibleMerits);
								}
							} else if (codPossibleMerits[meritPicked] === 'Wyrd') {
								level = Math.floor(Math.random() * 2 + 1);
								rank = level * 5;
								if (canIAffordIt(rank)) {
									codPossibleMerits[meritPicked] += " " + level;
									codWyrd += level;
									addMerit(codPossibleMerits);
								}
							}
						}
					}
				
					
					
					
					
					
					var codAttPrint = "\n" + "Attributes " + codAttributesPrioritySelected[0] + "/" + codAttributesPrioritySelected[1] + "/" + codAttributesPrioritySelected[2] +"\n";
					for (codJAttPrint = 0; codJAttPrint < 3; codJAttPrint++) {
						codAttPrint += codMentalAttributesLabels[codJAttPrint] + ": " + codMentalAttributes[codJAttPrint] + " | " + codPhysicalAttributesLabels[codJAttPrint] + ": " + codPhysicalAttributes[codJAttPrint] + " | " + codSocialAttributesLabels[codJAttPrint] + ": " + codSocialAttributes[codJAttPrint] + "\n";
					}
					
					var codSkillPrint = "\n" + "Skills " + codSkillsPrioritySelected[0] + "/" + codSkillsPrioritySelected[1] + "/" + codSkillsPrioritySelected[2] + "\n" ;
					for (codJSkillPrint = 0; codJSkillPrint < 8; codJSkillPrint++) {
						codSkillPrint += codMentalSkillsLabels[codJSkillPrint] + ": " + codMentalSkills[codJSkillPrint] + " | " + codPhysicalSkillsLabels[codJSkillPrint] + ": " + codPhysicalSkills[codJSkillPrint] + " | " + codSocialSkillsLabels[codJSkillPrint] + ": " + codSocialSkills[codJSkillPrint] + "\n";
					}
					var codSpecialty = setSpecialty();
					setMerits()
					
					var codAttDef = codMentalAttributes[1];
					if (codMentalAttributes[1] > codPhysicalAttributes[1]) {
						codAttDef = codPhysicalAttributes[1];
					}
					codDefense += codAttDef + codPhysicalSkills[0];
					codSpeed += codPhysicalAttributes[0]+codPhysicalAttributes[1]+codSize;
					codInits += codPhysicalAttributes[1]+codSocialAttributes[2];
					codWillpower += codMentalAttributes[2]+codSocialAttributes[2];
					codHealth += codPhysicalAttributes[2] + codSize
					codClarity += codMentalAttributes[1]+codSocialAttributes[2];
					codIntegrity += 7;
					codHumanity += 7;
					codBPotency += 1;
					codWyrd += 1;
					if (cmd === 'randomcodchangeling') {
						if (codClanName === 'Beast') {
							codInits += 3;
							codSpeed += 3;
						}
					}
					
					console.log(codSkillSpecialtySelected, codSpecialtySelected)
					
					function setPrint(variable, label, total) {
						if (typeof variable === 'undefined') {
							return "";
						}
						var printTrim = label + ": " + variable;
						var charactersLeft = total - printTrim.length;
						if (charactersLeft < 0) {charactersLeft = printTrim.length - total; total = printTrim.length};
						var whiteSpace = " ";
						if (charactersLeft == 0) {whiteSpace = ""};
						var printFull = printTrim + whiteSpace.repeat(charactersLeft);
						return [printFull]
					}
					
					
					
					codPrintSheet = ""
					var codDefensePrint = setPrint(codDefense,'Defense',32) + '| '
					var codSpeedPrint = setPrint(codSpeed,'Speed',32) + '| '
					var codInitsPrint = setPrint(codInits,'Intiative Modifier',32) + '| '
					var codWillpowerPrint = setPrint(codWillpower,'Willpower',32) + '| '
					var codHealthPrint = setPrint(codHealth,'Health',32) + '| '
					var codClarityPrint = setPrint(codClarity,'Clarity',32) + '| '
					var codIntegrityPrint = setPrint(codIntegrity,'Integrity',32) + '| '
					var codHumanityPrint = setPrint(codHumanity,'Humanity',32) + '| '
					var codBPotencyPrint = setPrint(codBPotency,'Blood Potency',32) + '| '
					var codVitaePrint = setPrint(codVitae,'Vitae',32) + '| '
					var codGlamourPrint = setPrint(codGlamour,'Glamour',32) + '| '
					var codWyrdPrint = setPrint(codWyrd,'Wyrd',32) + '| '
					var codFavoredAttributePrint = setPrint(codFavoredAttributeName,'Favored Attribute',32) + '| ';
					var codSpace = " "
					codSpace = codSpace.repeat(32) + '| '
					
					
					
					if (cmd === 'randomcod') {
						var codPrintNameFull = setPrint(codFullName,'Name',22);
						var codPrintVirtueFull = setPrint(codVirtueName,'Virtue',22)
						var codPrintViceTrim = "Vice: " + codViceName;
						var codPrintNameVirtueVice = codPrintNameFull + "| " + codPrintVirtueFull + "| " + codPrintViceTrim;
						var codPrintConceptTrim = "Concept: " + codConceptName;
						codPrintSheet = "```" + codPrintNameVirtueVice + "\n" + codPrintConceptTrim + "\n" + codAttPrint + codSkillPrint+ "\n" + codSpecialty + "\n" + "\n" + "Advantages \n" + codDefensePrint + setPrint(codMeritsSelectedValues[0],codMeritsSelected[0],0) + "\n" + codSpeedPrint + setPrint(codMeritsSelectedValues[1],codMeritsSelected[1],0) + "\n" + codInitsPrint + setPrint(codMeritsSelectedValues[2],codMeritsSelected[2],0) + "\n" + codHealthPrint + setPrint(codMeritsSelectedValues[3],codMeritsSelected[3],0) + "\n" + codWillpowerPrint + setPrint(codMeritsSelectedValues[4],codMeritsSelected[4],0) + "\n" + codIntegrityPrint + setPrint(codMeritsSelectedValues[5],codMeritsSelected[5],0) + "\n" + codSpace + setPrint(codMeritsSelectedValues[6],codMeritsSelected[6],0) + "\n" + codSpace + setPrint(codMeritsSelectedValues[7],codMeritsSelected[7],0) + "\n" + codSpace + setPrint(codMeritsSelectedValues[8],codMeritsSelected[8],0) + "\n" + codSpace + setPrint(codMeritsSelectedValues[9],codMeritsSelected[9],0) + "```";
					} else if (cmd === 'randomcodvampire') {
						var codPrintNameFull = setPrint(codFullName,'Name',28) + "|";
						var codPrintClanFull = setPrint(codClanName,'Clan',28);
						var codPrintClanCovenant = codPrintClanFull + "| Covenant: " + codCovenantName;
						var codPrintConceptTrim = "Concept: " + codConceptName;
						var codPrintDirgeFull = setPrint(codVirtueName,'Dirge',28);
						var codPrintDirgeMask = codPrintDirgeFull + "| Mask: " + codViceName;
						codPrintSheet = "```" + codPrintNameFull + "\n" + codPrintClanCovenant + "\n" + codPrintDirgeMask + "\n" + codPrintConceptTrim + "\n" + codAttPrint + codSkillPrint + "\n" + codSpecialty + "\n" + "\n" + codDisciplinePrint + "\n" + "Advantages \n" + codDefensePrint + setPrint(codMeritsSelectedValues[0],codMeritsSelected[0],0) + "\n" + codSpeedPrint + setPrint(codMeritsSelectedValues[1],codMeritsSelected[1],0) + "\n" + codInitsPrint + setPrint(codMeritsSelectedValues[2],codMeritsSelected[2],0) + "\n" + codHealthPrint + setPrint(codMeritsSelectedValues[3],codMeritsSelected[3],0) + "\n" + codWillpowerPrint + setPrint(codMeritsSelectedValues[4],codMeritsSelected[4],0) + "\n" + codVitaePrint + setPrint(codMeritsSelectedValues[5],codMeritsSelected[5],0) + "\n" + codFavoredAttributePrint + setPrint(codMeritsSelectedValues[6],codMeritsSelected[6],0)+ "\n" + codHumanityPrint + setPrint(codMeritsSelectedValues[7],codMeritsSelected[7],0) + "\n" + codBPotencyPrint + setPrint(codMeritsSelectedValues[8],codMeritsSelected[8],0) + "\n" + codSpace + setPrint(codMeritsSelectedValues[9],codMeritsSelected[9],0) + "```";
					} else if (cmd === 'randomcodbeast') {
						var codPrintNameFull = setPrint(codFullName,'Name',28);
						var codPrintFamilyFull = setPrint(codClanName,'Family',28);
						var codPrintFamilyHunger = codPrintFamilyFull + "| Hunger: " + codCovenantName
						var codPrintConceptTrim = "Concept: " + codConceptName;
						var codPrintLifeFull = setPrint(codVirtueName,'Life',28);
						var codPrintLifeLegend = codPrintLifeFull + "| Legend: " + codViceName;
						var codPrintSheet = "```" + codPrintNameFull + "\n" + codPrintFamilyHunger + "\n" + codPrintLifeLegend + "\n" + codPrintConceptTrim + "\n" + codAttPrint + codSkillPrint + "\n" + codSpecialty + "\n" + "\n" + "Atavisms: " + codAtavism1Name +"; " + codAtavism2Name + "\n" + "Nightmares: " + codNightmare1Name + "; " + codNightmare2Name + "\n" + "Lair Traits: " + codLairTrait1Name + "; " + codLairTrait2Name + "\n" + "\n" + "Advantages \n" + " Defense: " + codDefense + "\n Speed:" + codSpeed + "\n Initiative Modifier: " + codInits + "\n Health: " + codHealth + "\n Willpower: " + codWillpower + "\n Satiety: " + codSatiety + "\n Lair: 1```";
					} else if (cmd === 'randomcodchangeling') {
						var codPrintNameFull = setPrint(codFullName,'Name',28);
						var codPrintNameSeeming = codPrintNameFull + "| Seeming: " + codClanName;
						var codPrintCourtFull = setPrint(codCovenantName,'Court',28);
						var codPrintCourtKith = codPrintCourtFull + "| Kith: " + codKithName;
						var codPrintNeedleFull = setPrint(codVirtueName,'Needle',28);
						var codPrintNeedleThread = codPrintNeedleFull + "| Thread: " + codViceName;
						var codPrintConceptTrim = "Concept: " + codConceptName;
						var codPrintSheet = "```" + codPrintNameSeeming + "\n" + codPrintCourtKith + "\n" + codPrintNeedleThread + "\n" + codPrintConceptTrim + "\n" + codAttPrint + codSkillPrint + "\n" + codSpecialty + "\n" + "\n" + "Contracts" + "\n Seeming Bonus: " + codFavoredAttributeName + "\n -Favorite Regalia: " + codFavoriteRegaliaSelectName.join("; ") + "\n -Common Contracts: " + codCommonContractSelect.join("; ") + "\n -Royal Contracts: " + codRoyalContractSelect.join(";  ") + "\n" + "\n" + "Advantages \n" + codDefensePrint + setPrint(codMeritsSelectedValues[0],codMeritsSelected[0],0) + "\n" + codSpeedPrint + setPrint(codMeritsSelectedValues[1],codMeritsSelected[1],0) + "\n" + codInitsPrint + setPrint(codMeritsSelectedValues[2],codMeritsSelected[2],0) + "\n" + codHealthPrint + setPrint(codMeritsSelectedValues[3],codMeritsSelected[3],0) + "\n" + codWillpowerPrint + setPrint(codMeritsSelectedValues[4],codMeritsSelected[4],0) + "\n" + codClarityPrint + setPrint(codMeritsSelectedValues[5],codMeritsSelected[5],0) + "\n" + codGlamourPrint + setPrint(codMeritsSelectedValues[6],codMeritsSelected[6],0)+ "\n" + codWyrdPrint + setPrint(codMeritsSelectedValues[7],codMeritsSelected[7],0) + "\n" + codSpace + setPrint(codMeritsSelectedValues[8],codMeritsSelected[8],0) + "\n" + codSpace + setPrint(codMeritsSelectedValues[9],codMeritsSelected[9],0) + "```"
					}
															
					message.channel.send(codPrintSheet)
					
					
					
					}
					randomcod();
					
				break;
				
				case 'randomcodvampire':
					//logmessage()()
					
					
					randomcod();
				break;
				
				case 'randomcodbeast':
					//logmessage()();
					
					randomcod();
				break;
				
				case 'randomcodchangeling':
					//logmessage()();
					
					randomcod();
				break;

				case 'randomwod':
					//logMessage();				
					
					function randomWod() {
						
						var nameSex = randomName()
						var fullName = nameSex.name;
						var selectPriority = [];
						var attributePriority = [0,0,0];
						var abilityPriority = [0,0,0]
						var physicalAttributes = [1,1,1];
						var socialAttributes = [1,1,1];
						var mentalAttributes = [1,1,1];
						var talents = [0,0,0,0,0,0,0,0,0,0];
						var skills = [0,0,0,0,0,0,0,0,0,0];
						var knowledges =  [0,0,0,0,0,0,0,0,0,0];
						var backgroundNames = [];
						var backgroundValues = [];
						var virtueOrOthers = [];
						
						function setRandom(source) {
							
							var randomSub = source.length;
							var randomResult = Math.floor(Math.random() * randomSub);
							var randomName = source[randomResult];
							return {result: randomResult, name: randomName};
						}
						function setPriority(priority1,priority2,priority3) {
							selectPriority.push(priority1);
							selectPriority.push(priority2);
							selectPriority.push(priority3);
							var prioritySelected = [0,0,0];
							for (i = 0; i < prioritySelected.length; i++) {
								var priorityAssign = Math.floor(Math.random() * selectPriority.length);
								prioritySelected[i] = selectPriority[priorityAssign];
								selectPriority.splice(priorityAssign,1);
							}
							return prioritySelected;
						}
						//if source is array, c = array element; else c = start score
						function setMultipleFixedPoints(variable,source,c,range,limit) {
							for (i = 0; i < source[c] ; i++) {
								point = Math.floor(Math.random() * range);
								while (variable[point] == limit) {
									point = Math.floor(Math.random() * range);
								}
								variable[point]++;
								if (variable === spheres) {
									if (point !== affinity.result) {
										if (variable[point] > spheres[affinity.result]) {
											variable[point]--;
											i--
										}
									}
								}
							}
						}							
						
						function setSingleFixedPoints(variable,totalPoints,initialPoint,numberOfElements,limit) {
							for (j = 0; j < numberOfElements; j++) {
								variable.push(initialPoint);
							}
							for (i = 0; i < totalPoints ; i++) {
								point = Math.floor(Math.random() * numberOfElements);
								while (variable[point] == limit) {
									point = Math.floor(Math.random() * numberOfElements);
								}
								variable[point]++;												
							}
						}							
						
						function setFluidPoints(variableName,variableValue,source,limit,total) {
							var counter = 0
							while (counter < total) {
								
								var sourceResult = setRandom(source);
								var name = sourceResult.name;
								var result = sourceResult.result;
								var nameFound = false;
								
								if (typeof variableName[0] !== 'undefined') {
									for (j = 0; j < variableName.length; j++) {
										if (name === variableName[j]) {
											if (variableValue[j] === limit) {
												nameFound = true;							
											} else {
												nameFound = true;
												variableValue[j]++;
												counter++
												if (source === wodStats.werewolves.backgrounds) {
													for (f = 0; f < wodStats.werewolves.discouragedBackgrounds[tribeResult].length; f++) {
														if (name === wodStats.werewolves.discouragedBackgrounds[tribeResult][f]) {
															if (variableValue[j] > 3) {
																variableValue[j]--;
																counter--
															}
														}
													}
												}
												if (source === mageBackgrounds) {
													if (name === mageBackgrounds[0] || name === mageBackgrounds[1] || name === mageBackgrounds[2]) {
														if (counter === 5) {
															variableValue[j]--;
															counter--;
														} else {
															counter++;
														}
													}
												}
											}
										}
									}
									if (!nameFound) {
										variableName.push(name);
										variableValue.push(1);
										counter++;
										if (source === wodStats.werewolves.backgrounds) {
											
											for (r = 0; r < wodStats.werewolves.restrictedBackgrounds[tribeResult].length; r++) {
												if (name === wodStats.werewolves.restrictedBackgrounds[tribeResult][r]) {
													variableName.pop();
													variableValue.pop();
													counter--;
												}
											}  
											for (d = 0; d < wodStats.werewolves.discouragedBackgrounds[tribeResult].length; d++) {
												if (name === wodStats.werewolves.discouragedBackgrounds[tribeResult][d]) {
													if (!werewolfFreebie) {
														variableName.pop();
														variableValue.pop();
														counter--;
													}
												}
											}
										}
										if (source === mageBackgrounds) {
											var canAfford = false
											if (name === mageBackgrounds[0] || name === mageBackgrounds[1] || name === mageBackgrounds[2]) {
												if (counter === 0) {
													variableName.pop()
													variableValue.pop()
													counter--;
												} else {
													counter++;
													canAfford = true;
												}
											}
											if ((canAfford) && name === mageBackgrounds[0]) {
												var shaman = Math.floor((Math.random() * 40) + 1);
												if (shaman === 1) {
													conceptName = setRandom(wodStats.mages.totems).name + " Shaman";
												} else {
													variableName.pop()
													variableValue.pop()
													counter-=2;
												}
											}
										}
									}
								} else {
									variableName.push(name);
									variableValue.push(1);
									counter++;
									if (source === wodStats.werewolves.backgrounds) {
										
										for (r = 0; r < wodStats.werewolves.restrictedBackgrounds[tribeResult].length; r++) {
											if (name === wodStats.werewolves.restrictedBackgrounds[tribeResult][r]) {
												
												variableName.pop();
												variableValue.pop();
												counter--;
											}
										}  
										for (d = 0; d < wodStats.werewolves.discouragedBackgrounds[tribeResult].length; d++) {
											if (name === wodStats.werewolves.discouragedBackgrounds[tribeResult][d]) {
												if (!werewolfFreebie) {
													variableName.pop();
													variableValue.pop();
													counter--;
												}
											}
										}
									}
									if (source === mageBackgrounds) {
										if (name === mageBackgrounds[0] || name === mageBackgrounds[1] || name === mageBackgrounds[2]) {
											var canAfford = false;
											if (counter === 5) {
												variableName.pop()
												variableValue.pop()
												counter--;
											} else {
												counter++;
												canAfford = true;
											}
										}
										if ((canAfford) && name === mageBackgrounds[0]) {
											var shaman = Math.floor((Math.random() * 40) + 1);
											if (shaman === 1) {
												conceptName = setRandom(wodStats.mages.totems).name + " Shaman";
											} else {
												variableName.pop()
												variableValue.pop()
												counter-=2;
											}
										}
									}
								}
							}
							return {name: name, result: result};
						}
						
						function setFreebies(totalFreebies,splat) {
							var freebieCostName = ['attributes','abilities','backgrounds','willpower'];
							var freebieCostValue = [5,2,1,1]
							var freebiesLeft = totalFreebies;
							var canIAffordIt = 0;
							var spentFreebiesOn = "Freebies: " + totalFreebies + "\n"
							var spendOnSub = 0
							if (splat === 'mortals') {
								freebieCostName.push('humanity');
								freebieCostValue.push(2);
								freebieCostName.push('virtues');
								freebieCostValue.push(2);
							} else if (splat === 'vampires') {
								freebieCostName.push('humanity/path');
								freebieCostValue.push(2);
								freebieCostName.push('virtues');
								freebieCostValue.push(2);
								freebieCostName.push('clanDisciplines');
								freebieCostValue.push(7);
								freebieCostName.push('disciplines');
								freebieCostValue.push(7);
							} else if (splat === 'werewolves') {
								freebieCostName.push('gifts');
								freebieCostValue.push(7);
								freebieCostName.push('rage');
								freebieCostValue.push(1);
								freebieCostName.push('gnosis');
								freebieCostValue.push(2);
							} else if (splat === 'mages') {
								freebieCostName.push('spheres');
								freebieCostValue.push(7);
							} else if (splat === 'changelings') {
								freebieCostName.push('arts');
								freebieCostValue.push(5);
								freebieCostName.push('glamour');
								freebieCostValue.push(3);
								freebieCostName.push('realms');
								freebieCostValue.push(2);
							}
							
							function setSingleFreebie(variable,range,limit,variableName) {
								var point = Math.floor(Math.random() * range);
								while (variable[point] == limit) {
									point = Math.floor(Math.random() * range);
								}
								variable[point]++;
								return variableName[point];
							}
							while (freebiesLeft > 0){
								var spendOn = Math.floor(Math.random() * freebieCostValue.length)
								canIAffordIt = freebiesLeft - freebieCostValue[spendOn]
								var whatExactly = ""
								if (canIAffordIt > -1) {
									var someName = freebieCostName[spendOn]
									switch(someName) {
										case 'attributes':
											spendOnSub = Math.floor(Math.random() * 3)
											if (spendOnSub === 0) {
												whatExactly = setSingleFreebie(physicalAttributes,3,5,wodStats.attributes.physical)
											} else if (spendOnSub === 1) {
												whatExactly = setSingleFreebie(socialAttributes,3,5,wodStats.attributes.social)
											} else {
												whatExactly = setSingleFreebie(mentalAttributes,3,5,wodStats.attributes.mental)
											}
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-5 " + whatExactly + " (" + freebiesLeft + ") \n";
						
										break;
										case 'abilities':
											spendOnSub = Math.floor(Math.random() * 3)
											if (spendOnSub === 0) {
												whatExactly = setSingleFreebie(talents,10,5,wodStats[splat].abilities.talents)
											} else if (spendOnSub === 1) {
												whatExactly = setSingleFreebie(skills,10,5,wodStats[splat].abilities.skills)
											} else {
												whatExactly = setSingleFreebie(knowledges,10,5,wodStats[splat].abilities.knowledges)
											}
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-2 " + whatExactly + " (" + freebiesLeft + ") \n";
											
										break;
										case 'backgrounds':
											var backgroundMessage = ""
											whatExactly = setFluidPoints(backgroundNames,backgroundValues,wodStats[splat].backgrounds,5,1).name;
											freebiesLeft -= freebieCostValue[spendOn];
											backgroundMessage = "-1 " + whatExactly + " (" + freebiesLeft + ") \n"; 
											
											if (splat === 'mages') {
												whatExactly = setFluidPoints(backgroundNames,backgroundValues,mageBackgrounds,5,1).name;
												if (whatExactly === mageBackgrounds[0] || whatExactly === mageBackgrounds[1] || whatExactly === mageBackgrounds[2]) {
													freebiesLeft -= freebieCostValue[spendOn];
													backgroundMessage = "-2 " + whatExactly + " (" + freebiesLeft + ") \n";
 
												} else {
													backgroundMessage = "-1 " + whatExactly + " (" + freebiesLeft + ") \n"; 
												}
											}
											spentFreebiesOn += backgroundMessage
											
											
										break;
										case 'virtues':
											whatExactly = setSingleFreebie(virtueOrOthers,3,5,wodStats[splat].virtues);
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-2 " + whatExactly + " (" + freebiesLeft + ") \n";
											
										break;
										case 'humanity':
											if (humanity !== 10) {
												humanity++;
												freebiesLeft -= freebieCostValue[spendOn];
												spentFreebiesOn += "-2 Humanity (" + freebiesLeft + ") \n";
											}
										break;
										case 'humanity/path':
											if (humanity !== 10) {
												humanity++;
												freebiesLeft -= freebieCostValue[spendOn];
												spentFreebiesOn += "-2 Humanity/Path (" + freebiesLeft + ") \n";
												
											}
										break;
										case 'willpower':
											if (willpower !== 10) {
												willpower++;
												freebiesLeft -= freebieCostValue[spendOn];
												spentFreebiesOn += "-1 Willpower (" + freebiesLeft + ") \n";
												
											}
										break;
										case 'clanDisciplines':
											if (clanResult < 13) {
												whatExactly = setFluidPoints(disciplineNames,disciplineValues,wodStats.vampires.clanDisciplines[clanResult],5,1).name;
												freebiesLeft -= freebieCostValue[spendOn];
												spentFreebiesOn += "-7 " + whatExactly + " (" + freebiesLeft + ") \n";
											}
										break;
										case 'disciplines':
											whatExactly = setFluidPoints(disciplineNames,disciplineValues,wodStats.vampires.disciplines,5,1).name;
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-7 " + whatExactly + " (" + freebiesLeft + ") \n";
										break;
										case 'gifts':
											spendOnSub = Math.floor(Math.random() * 3)
											var giftSource = 0
											if (spendOnSub === 0) {
												giftSource = Math.floor(Math.random() * wodStats.werewolves.breedGifts.length)
												var gift = setRandom(wodStats.werewolves.breedGifts[giftSource]);
												var alreadyHave = false;
												for (g = 0; g < giftNames.length; g++) {
													if (gift.name === giftNames[g]) {
														alreadyHave = true;
													}
												}
												if (alreadyHave) {
													do {
														alreadyHave = false;
														gift = setRandom(wodStats.werewolves.breedGifts[giftSource]);
														for (u = 0; u < giftNames.length; u++) {
															if (gift.name === giftNames[u]) {
																alreadyHave = true;
															}
														}
													} while (alreadyHave);
												}
											} else if (spendOnSub === 1) {
												giftSource = Math.floor(Math.random() * wodStats.werewolves.auspiceGifts.length)
												var gift = setRandom(wodStats.werewolves.auspiceGifts[giftSource]);
												var alreadyHave = false;
												for (g = 0; g < giftNames.length; g++) {
													if (gift.name === giftNames[g]) {
														alreadyHave = true;
													}
												}
												if (alreadyHave) {
													do {
														alreadyHave = false;
														gift = setRandom(wodStats.werewolves.auspiceGifts[giftSource]);
														for (u = 0; u < giftNames.length; u++) {
															if (gift.name === giftNames[u]) {
																alreadyHave = true;
															}
														}
													} while (alreadyHave);
												}
											} else {
												giftSource = Math.floor(Math.random() * wodStats.werewolves.tribeGifts.length)
												var gift = setRandom(wodStats.werewolves.tribeGifts[giftSource]);
												var alreadyHave = false;
												for (g = 0; g < giftNames.length; g++) {
													if (gift.name === giftNames[g]) {
														alreadyHave = true;
													}
												}
												if (alreadyHave) {
													do {
														alreadyHave = false;
														gift = setRandom(wodStats.werewolves.tribeGifts[giftSource]);
														for (u = 0; u < giftNames.length; u++) {
															if (gift.name === giftNames[u]) {
																alreadyHave = true;
															}
														}
													} while (alreadyHave);
												}
											}
											whatExactly = gift.name;
											giftNames.push(gift.name);	
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-7 Gift: " + whatExactly + " (" + freebiesLeft + ") \n";
										break;
										case 'rage':
											if (rage !== 10) {
												rage++;
												freebiesLeft -= freebieCostValue[spendOn];
												spentFreebiesOn += "-1 Rage (" + freebiesLeft + ") \n";
											}
										break;
										case 'gnosis':
											if (gnosis !== 10) {
												gnosis++;
												freebiesLeft -= freebieCostValue[spendOn];
												spentFreebiesOn += "-2 Gnosis (" + freebiesLeft + ") \n";
											}
										break;
										case 'spheres':
											var contaGotas = 0
											while (contaGotas === 0) {
												spendOnSub = Math.floor(Math.random() * spheres.length);
												if (spheres[spendOnSub] < arete) {
													if (spendOnSub === affinity.result) {
														contaGotas++;
													} else if (spheres[spendOnSub] < spheres[affinity.result]) {
														contaGotas++;
													}
												}
											}
											spheres[spendOnSub]++
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-7 " + mageSpheres[spendOnSub] + " (" + freebiesLeft + ") \n";
										break;
										case 'arts':
											whatExactly = setFluidPoints(artNames,artValues,wodStats[splat].arts,5,1).name;
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-5 " + whatExactly + " (" + freebiesLeft + ") \n";
										break;
										case 'glamour':
											if (glamour !== 10) {
												glamour++;
												freebiesLeft -= freebieCostValue[spendOn];
												spentFreebiesOn += "-3 Glamour (" + freebiesLeft + ") \n";
											}
										break;
										case 'realms':
											whatExactly = setSingleFreebie(virtueOrOthers,6,5,wodStats[splat].realms);
											freebiesLeft -= freebieCostValue[spendOn];
											spentFreebiesOn += "-2 " + whatExactly + " (" + freebiesLeft + ") \n";
										break;
									}
								}	
							}
							return spentFreebiesOn;
						}
						
						function setPrintStats(variable, label, total) {
							var whiteSpace = " ";
							if (typeof variable === 'undefined' && typeof label === 'undefined') {
								var nothing = whiteSpace.repeat(total)
								return nothing;
							} else if (typeof variable === 'undefined') {	
								var printTrim = label;
								var charactersLeft = total - printTrim.length;
								if (charactersLeft < 0) {charactersLeft = printTrim.length - total; total = printTrim.length};
								if (charactersLeft == 0) {whiteSpace = ""};
								var printFull = label + whiteSpace.repeat(charactersLeft);
								return printFull;
							} else {
								var printTrim = label + " :" + variable;
								var charactersLeft = total - printTrim.length;
								if (charactersLeft < 0) {charactersLeft = printTrim.length - total; total = printTrim.length};
								if (charactersLeft == 0) {whiteSpace = ""};
								var printFull = label + whiteSpace.repeat(charactersLeft) + ": " + variable;
								return printFull;
							}
						}
						
						function setSpecialty(splat) {
							var attributeSpecialty = ""
							for (i = 0; i < physicalAttributes.length; i++) {
								if (physicalAttributes[i] > 3) {
									attributeSpecialty += wodStats.attributes.physical[i] + ": " + setRandom(wodStats.attributes.specialties[0][i]).name + "; ";
								}
							}
							for (i = 0; i < socialAttributes.length; i++) {
								if (socialAttributes[i] > 3) {
									attributeSpecialty += wodStats.attributes.social[i] + ": " + setRandom(wodStats.attributes.specialties[1][i]).name + "; ";
								}
							}
							for (i = 0; i < mentalAttributes.length; i++) {
								if (mentalAttributes[i] > 3) {
									attributeSpecialty += wodStats.attributes.mental[i] + ": " + setRandom(wodStats.attributes.specialties[2][i]).name + "; "
								}
							}
							var abilitySpecialty = ""
							for (i = 0; i < talents.length; i++) {
								if (talents[i] > 3) {
									abilitySpecialty += wodStats[splat].abilities.talents[i] + ": " + setRandom(wodStats[splat].abilities.specialties[0][i]).name + "; "
								} else if (splat === 'mages') {
									if (talents[i] > 0 && (i === 1)) {
										abilitySpecialty += wodStats[splat].abilities.talents[i] + ": " + setRandom(wodStats[splat].abilities.specialties[0][i]).name + "; "
									}
								}
							}
							for (i = 0; i < skills.length; i++) {
								if (skills[i] > 3) {
									abilitySpecialty += wodStats[splat].abilities.skills[i] + ": " + setRandom(wodStats[splat].abilities.specialties[1][i]).name + "; "
								} else if (splat === 'mortals' || splat === 'vampires' || splat === 'werewolves' || splat === 'changelings') {
									if (skills[i] > 0 && (i === 1 || i === 7)) {
										abilitySpecialty += wodStats[splat].abilities.skills[i] + ": " + setRandom(wodStats[splat].abilities.specialties[1][i]).name + "; "
									}
								} else if (splat === 'mage') {
									if (skills[i] > 0 && (i === 0 || i === 10)) {
										abilitySpecialty += wodStats[splat].abilities.skills[i] + ": " + setRandom(wodStats[splat].abilities.specialties[1][i]).name + "; "
									}
								}
							} 
							for (i = 0; i < knowledges.length; i++) {
								if (knowledges[i] > 3) {
									abilitySpecialty += wodStats[splat].abilities.knowledges[i] + ": " + setRandom(wodStats[splat].abilities.specialties[2][i]).name + "; "
								} else if (splat === 'mortals' || splat === 'vampires' || splat === 'werewolves' || splat === 'changelings') {
									if (knowledges[i] > 0 && (i === 0 || i === 8)) {
										abilitySpecialty += wodStats[splat].abilities.knowledges[i] + ": " + setRandom(wodStats[splat].abilities.specialties[2][i]).name + "; "
									}
								} else if (splat === 'mages') {
									if (knowledges[i] > 0 && (i === 0 || i === 4)) {
										abilitySpecialty += wodStats[splat].abilities.knowledges[i] + ": " + setRandom(wodStats[splat].abilities.specialties[2][i]).name + "; "
									}
								}
							}
							return {attributeSpecialty: attributeSpecialty, abilitySpecialty: abilitySpecialty}
						}
						
						function setPrintMisc(variable, label, total) {
							var printTrim = label + ": " + variable;
							var charactersLeft = total - printTrim.length;
							if (charactersLeft < 0) {charactersLeft = printTrim.length - total; total = printTrim.length};
							var whiteSpace = " ";
							if (charactersLeft == 0) {whiteSpace = ""};
							var printFull = printTrim + whiteSpace.repeat(charactersLeft);
							return [printFull]
							
						}

						function setPrintList(range, total, source1, source1Label, source2, source2Label, source3, source3Label) {
							var printVariable = "";
							var whiteSpace = " ";
							for (i = 0; i < range; i++) {
								var printStats1 = setPrintStats(source1[i], source1Label[i], total);
								if (typeof setPrintStats(source1[i], source1Label[i], total) === 'undefined') {
									printStats1 = whiteSpace.repeat(total);
								}
								var printStats2 = setPrintStats(source2[i], source2Label[i], total);
								if (typeof setPrintStats(source2[i], source2Label[i], total) === 'undefined') {
									printStats2 = whiteSpace.repeat(total);
								}
								var printStats3 = setPrintStats(source3[i], source3Label[i], total);
								if (typeof setPrintStats(source3[i], source3Label[i], total) == 'undefined') {
									printStats3 = whiteSpace.repeat(total);
								}
								printVariable += printStats1 + " | " + printStats2 + " | " + printStats3 + "\n";
							}
							return printVariable;
						}
						
						
						//RANDOMWOD
						if (cmd === 'randomwod') {
							var natureName = setRandom(wodStats.archetypes).name;
							var demeanorName = setRandom(wodStats.archetypes).name;
							var conceptName = setRandom(wodStats.concepts).name;
														
							attributePriority = setPriority(6,4,3).slice();
							abilityPriority = setPriority(11,7,5).slice();
							setMultipleFixedPoints(physicalAttributes,attributePriority,0,3,5)
							setMultipleFixedPoints(socialAttributes,attributePriority,1,3,5)
							setMultipleFixedPoints(mentalAttributes,attributePriority,2,3,5)
							setMultipleFixedPoints(talents,abilityPriority,0,10,3)
							setMultipleFixedPoints(skills,abilityPriority,1,10,3)
							setMultipleFixedPoints(knowledges,abilityPriority,2,10,3)
							setFluidPoints(backgroundNames,backgroundValues,wodStats.mortals.backgrounds,5,5);
							setSingleFixedPoints(virtueOrOthers,7,1,3,5)
							var willpower = virtueOrOthers[2];
							var humanity = virtueOrOthers[0] + virtueOrOthers[1];
							
							var spentFreebiesOn = setFreebies(21,'mortals');
							
							var natureDemeanor = setPrintMisc(natureName,"Nature",28) + "| Demeanor: " + demeanorName;
							
							var attributesPrint = "\n" + "Attributes " + attributePriority[0] + "/" + attributePriority[1] + "/" + attributePriority[2] + "\n";
							attributesPrint += setPrintList(3, 18, physicalAttributes,wodStats.attributes.physical,socialAttributes,wodStats.attributes.social,mentalAttributes,wodStats.attributes.mental);
							var attributeSpecialty = "Specialties: " + setSpecialty('mortals').attributeSpecialty + "\n";
							
							var abilityPrint = "\n" + "Abilities " + abilityPriority[0] + "/" + abilityPriority[1] + "/" + abilityPriority[2] + "\n";
							abilityPrint += setPrintList(10, 18, talents,wodStats.mortals.abilities.talents,skills,wodStats.mortals.abilities.skills,knowledges,wodStats.mortals.abilities.knowledges);
							var abilitySpecialty = "Specialties: " + setSpecialty('mortals').abilitySpecialty+ "\n";
							
							var advantagePrint = "\n" + "Advantages" + "\n" + "Backgrounds                               Virtues" + "\n";
							advantagePrint += setPrintList(backgroundNames.length, 18, backgroundValues,backgroundNames,selectPriority,selectPriority,virtueOrOthers,wodStats.mortals.virtues);
							
							var humanityWillpower = "\n" + "Others \n" + setPrintMisc(humanity,"Humanity",18) + "\n" + setPrintMisc(willpower,"Willpower",18) + "\n \n";
														
							message.channel.send("```Name: " + fullName + "\n" + natureDemeanor + "\n" + "Concept: " + conceptName + "\n" + attributesPrint + attributeSpecialty + abilityPrint + abilitySpecialty + advantagePrint + humanityWillpower + spentFreebiesOn + "```");
							//VAMPIRE
						} else if (cmd === 'randomwodvampire') {
							var natureName = setRandom(wodStats.archetypes).name;
							
							var demeanorName = setRandom(wodStats.archetypes).name;
							
							var conceptName = setRandom(wodStats.concepts).name;
							var clan = setRandom(wodStats.vampires.clans)
							var clanName = clan.name;
							var clanResult = clan.result;
							
							var generation = 13;
							var bloodPoints = 10;
							var sireName = randomName().name;
							var disciplineNames = [];
							var disciplineValues = [];
							
							attributePriority = setPriority(7,5,3).slice();
							abilityPriority = setPriority(13,9,5).slice();
							setMultipleFixedPoints(physicalAttributes,attributePriority,0,3,5)
							setMultipleFixedPoints(socialAttributes,attributePriority,1,3,5)
							setMultipleFixedPoints(mentalAttributes,attributePriority,2,3,5)
							setMultipleFixedPoints(talents,abilityPriority,0,10,3)
							setMultipleFixedPoints(skills,abilityPriority,1,10,3)
							setMultipleFixedPoints(knowledges,abilityPriority,2,10,3)
							setFluidPoints(backgroundNames,backgroundValues,wodStats.vampires.backgrounds,5,5);
							if (clanResult < 13) {
								setFluidPoints(disciplineNames,disciplineValues,wodStats.vampires.clanDisciplines[clanResult],5,3);
							} else {
								setFluidPoints(disciplineNames,disciplineValues,wodStats.vampires.disciplines,5,3);
							}
							setSingleFixedPoints(virtueOrOthers,7,1,3,5)
							var willpower = virtueOrOthers[2];
							var humanity = virtueOrOthers[0] + virtueOrOthers[1];
							
							var spentFreebiesOn = setFreebies(15,'vampires');
							
							for (i = 0; i < backgroundNames.length; i++) {
								if (backgroundNames[i] === 'Generation') {
									generation -= backgroundValues[i]
									bloodPoints += backgroundValues[i]
								}
							}
							
							var natureDemeanor = setPrintMisc(natureName,"Nature",28) + " | Demeanor: " + demeanorName;
							
							var nameSire = setPrintMisc(fullName,"Name",28) + " | Sire: " + sireName;
							var clanGeneration = setPrintMisc(clanName,"Clan",28) + " | Generation: " + generation + "th";
							
							var attributesPrint = "\n" + "Attributes " + attributePriority[0] + "/" + attributePriority[1] + "/" + attributePriority[2] + "\n";
							attributesPrint += setPrintList(3, 18, physicalAttributes,wodStats.attributes.physical,socialAttributes,wodStats.attributes.social,mentalAttributes,wodStats.attributes.mental);
							var attributeSpecialty = "Specialties: " + setSpecialty('vampires').attributeSpecialty + "\n";
							
							var abilityPrint = "\n" + "Abilities " + abilityPriority[0] + "/" + abilityPriority[1] + "/" + abilityPriority[2] + "\n";
							abilityPrint += setPrintList(10, 18, talents,wodStats.vampires.abilities.talents,skills,wodStats.vampires.abilities.skills,knowledges,wodStats.vampires.abilities.knowledges);
							var abilitySpecialty = "Specialties: " + setSpecialty('vampires').abilitySpecialty + "\n";
							
							var tamanho = backgroundNames.length;
							if (disciplineNames.length > backgroundNames.length) {tamanho = disciplineNames.length};							
							var advantagePrint = "\n" + "Advantages" + "\n" + "Backgrounds          Disciplines          Virtues" + "\n";
							advantagePrint += setPrintList(tamanho, 18, backgroundValues,backgroundNames,disciplineValues,disciplineNames,virtueOrOthers,wodStats.vampires.virtues);
							
							var humanityWillpowerBP = "\n" + "Others \n" + setPrintMisc(humanity,"Humanity/Path",18) + "\n" + setPrintMisc(willpower,"Willpower",18) + "\n" + setPrintMisc(bloodPoints,"Blood Points",18) + "\n" + "\n";
							var printMessage = "```" + nameSire + "\n" + clanGeneration + "\n" + natureDemeanor + "\n" + "Concept: " + conceptName + "\n" + attributesPrint + attributeSpecialty + abilityPrint + abilitySpecialty + advantagePrint + humanityWillpowerBP + spentFreebiesOn + "```";							
							
							message.channel.send(printMessage);
							//WEREWOLF
						} else if (cmd === 'randomwodwerewolf') {
							var conceptName = setRandom(wodStats.concepts).name;
							var breed = setRandom(wodStats.werewolves.breeds);
							var breedName = breed.name;
							var breedResult = breed.result;
							var gnosis = wodStats.werewolves.gnosis[breedResult];
							var auspice = setRandom(wodStats.werewolves.auspices);
							var auspiceName = auspice.name;
							var auspiceResult = auspice.result;
							var rage = wodStats.werewolves.rage[auspice.result];
							var renownNames = ['Glory','Honor','Wisdom']
							if (auspiceResult !== 0) {
								var renownValues = wodStats.werewolves.renown[auspiceResult];
							} else {
								var renownValues = [0,0,0]
								for (i = 0; i < 3; i++) {
									var renownPoint = Math.floor(Math.random() * 3);
									renownValues[renownPoint]++;
								}
							}
							var tribe = setRandom(wodStats.werewolves.tribes);
							var tribeName = tribe.name;
							var tribeResult = tribe.result;
							if (breedResult === 0 && tribeResult === 6) {
								while (tribe.result === 6) {
									tribe = setRandom(wodStats.werewolves.tribes);
									tribeName = tribe.name;
									tribeResult = tribe.result;
								}
							}
							var counter = 0
							if (tribeResult === 0 && nameSex.sex === 'boy' && breedResult !== 1) {
								while (nameSex.sex === 'boy') {
									nameSex = randomName()
									fullName = nameSex.name;
									counter++
								}
							}
							var willpower = wodStats.werewolves.willpower[tribeResult];
							var giftNames = [];
							var giftValues = [undefined];
							
							attributePriority = setPriority(7,5,3).slice();
							abilityPriority = setPriority(13,9,5).slice();
							
							setMultipleFixedPoints(physicalAttributes,attributePriority,0,3,5);
							setMultipleFixedPoints(socialAttributes,attributePriority,1,3,5);
							setMultipleFixedPoints(mentalAttributes,attributePriority,2,3,5);
							setMultipleFixedPoints(talents,abilityPriority,0,10,3);
							setMultipleFixedPoints(skills,abilityPriority,1,10,3);
							setMultipleFixedPoints(knowledges,abilityPriority,2,10,3);
							var giftBreed = setRandom(wodStats.werewolves.breedGifts[breedResult]);
							giftNames.push(giftBreed.name);
							
							var giftAuspice = setRandom(wodStats.werewolves.auspiceGifts[auspiceResult]);
							var alreadyHave = false;
							for (g = 0; g < giftNames.length; g++) {
								if (giftAuspice.name === giftNames[g]) {
										alreadyHave = true;
								}
							}
							if (alreadyHave) {
								do {
									alreadyHave = false;
									giftAuspice = setRandom(wodStats.werewolves.auspiceGifts[auspiceResult]);
									for (u = 0; u < giftNames.length; u++) {
										if (giftAuspice.name === giftNames[u]) {
											alreadyHave = true;
										}
									}
								} while (alreadyHave);
							}
							giftNames.push(giftAuspice.name);
																					
							var giftTribe = setRandom(wodStats.werewolves.tribeGifts[tribeResult]);
							for (g = 0; g < giftNames.length; g++) {
								if (giftTribe.name === giftNames[g]) {
										alreadyHave = true;
								}
							}
							if (alreadyHave) {
								do {
									alreadyHave = false;
									giftTribe = setRandom(wodStats.werewolves.tribeGifts[tribeResult]);
									for (u = 0; u < giftNames.length; u++) {
										if (giftTribe.name === giftNames[u]) {
											alreadyHave = true;
										}
									}
								} while (alreadyHave);
							}
							giftNames.push(giftTribe.name);
														
							var werewolfFreebie = false;
							if (tribeResult !== 9) {
								setFluidPoints(backgroundNames,backgroundValues,wodStats.werewolves.backgrounds,5,5);
							} else {
								backgroundNames.push("Pure Breed");
								backgroundValues.push(3);
								setFluidPoints(backgroundNames,backgroundValues,wodStats.werewolves.backgrounds,5,2);
							};
							
							werewolfFreebie = true;
							var spentFreebiesOn = setFreebies(15,'werewolves');
							
							var nameBreed = setPrintMisc(fullName,"Name",28) + " | Breed: " + breedName;
							var auspiceTribe = setPrintMisc(auspiceName,"Auspice",28) + " | Tribe: " + tribeName;
							var attributesPrint = "\n" + "Attributes " + attributePriority[0] + "/" + attributePriority[1] + "/" + attributePriority[2] + "\n";
							attributesPrint += setPrintList(3, 18, physicalAttributes,wodStats.attributes.physical,socialAttributes,wodStats.attributes.social,mentalAttributes,wodStats.attributes.mental);
							
							var attributeSpecialty = "Specialties: " + setSpecialty('werewolves').attributeSpecialty + "\n";
							
							var abilityPrint = "\n" + "Abilities " + abilityPriority[0] + "/" + abilityPriority[1] + "/" + abilityPriority[2] + "\n";
							abilityPrint += setPrintList(10, 18, talents,wodStats.werewolves.abilities.talents,skills,wodStats.werewolves.abilities.skills,knowledges,wodStats.werewolves.abilities.knowledges);
							var abilitySpecialty = "Specialties: " + setSpecialty('werewolves').abilitySpecialty + "\n";
							
							var tamanho = backgroundNames.length;
							if (giftNames.length > backgroundNames.length) {tamanho = giftNames.length};
								
							
							var advantagePrint = "\n" + "Advantages" + "\n" + "Backgrounds               Gifts                     Renown" + "\n";
							advantagePrint += setPrintList(tamanho, 19, backgroundValues,backgroundNames,giftValues,giftNames,renownValues,renownNames);
							
							var others = "\n" + "Others \n" + setPrintMisc(rage,"Rage",18) + "\n" + setPrintMisc(willpower,"Willpower",18) + "\n" + setPrintMisc(gnosis,"Gnosis",18) + "\n" + "\n";
							var printMessage =  nameBreed + "\n" + auspiceTribe + "\n" + "Concept: " + conceptName + "\n" + attributesPrint + attributeSpecialty + abilityPrint + abilitySpecialty + advantagePrint + others + spentFreebiesOn;								
							message.channel.send("```" + printMessage + "```");
							//MAGE
						} else if (cmd === 'randomwodmage') {
							var spheres = [0,0,0,0,0,0,0,0,0]
							var spherePoints = [6]
							var natureName = setRandom(wodStats.archetypes).name;
							var demeanorName = setRandom(wodStats.archetypes).name;
							var conceptName = setRandom(wodStats.concepts).name;
							var essenceName = setRandom(wodStats.mages.essences).name;
							var affiliation = setRandom(wodStats.mages.affiliations);
							var sect = setRandom(wodStats.mages.sects[affiliation.result]);
							var mageBackgrounds = wodStats.mages.backgrounds.slice();
							var mageSpheres = wodStats.mages.spheres.slice();
							if (typeof wodStats.mages.affinities[affiliation.result][sect.result][0] === 'undefined') {
								var affinity = setRandom(mageSpheres);
							} else {
								var affinity = setRandom(wodStats.mages.affinities[affiliation.result][sect.result]);
							}
							
							if (affiliation.result === 1) {
								mageBackgrounds.push("Requisition");
								mageBackgrounds.push("Secret Weapons");
								mageBackgrounds[2] = "Laboratory";
								mageBackgrounds[3] = "Cloaking";
								mageBackgrounds[4] = "Genius";
								mageBackgrounds[5] = "Construct";
								mageBackgrounds[6] = "Hypercram";
								mageBackgrounds[7] = "Companion";
							}
							
							if (affinity.name === "Data") {
								mageSpheres[0] = "Data";
							} else if (affinity.name === "Dimensional Science") {
								mageSpheres[7] = "Dimensional Science";
							} else if (affinity.name === "Primal Utility") {
								mageSpheres[6] = "Primal Utility";
							}
							
							if (sect.name === wodStats.mages.sects[1][4]) {
								mageSpheres[7]
							}
							
							for (i = 0; i < mageSpheres.length; i++) {
								if (affinity.name === mageSpheres[i]) {
									affinity.result = i
									spheres[i]++;
								}
							}
							attributePriority = setPriority(7,5,3).slice();
							abilityPriority = setPriority(13,9,5).slice();
							
							setMultipleFixedPoints(physicalAttributes,attributePriority,0,3,5);
							setMultipleFixedPoints(socialAttributes,attributePriority,1,3,5);
							setMultipleFixedPoints(mentalAttributes,attributePriority,2,3,5);
							talents.push(0);
							skills.push(0);
							knowledges.push(0);
							setMultipleFixedPoints(talents,abilityPriority,0,11,3);
							setMultipleFixedPoints(skills,abilityPriority,1,11,3);
							setMultipleFixedPoints(knowledges,abilityPriority,2,11,3);
							setFluidPoints(backgroundNames,backgroundValues,mageBackgrounds,5,7);
							var willpower = 7;
							var arete = Math.floor((Math.random() * 3) + 1);
							spheres[affinity.result] = arete;
							spherePoints[0] = 6 - spheres[affinity.result];
							var quintessence = 0;
							var freebies = 15 - ((arete-1) * 4);
							setMultipleFixedPoints(spheres,spherePoints,0,9,arete);
							spentFreebiesOn = setFreebies(freebies,'mages');
							for (i = 0; i < backgroundNames.length; i++) {
								if (backgroundNames[i] === 'Avatar' || backgroundNames[i] === 'Genius') {
									quintessence += backgroundValues[i]
								}
							}
								
							
							var nameEssence = setPrintMisc(fullName,"Name",28) + " | Essence: " + essenceName;
							var natureDemeanor = setPrintMisc(natureName,"Nature",28) + " | Demeanor: " + demeanorName;
							var affiliationSect = setPrintMisc(affiliation.name,"Affiliation",28) + " | Sect: " + sect.name;
							var attributesPrint = "\n" + "Attributes " + attributePriority[0] + "/" + attributePriority[1] + "/" + attributePriority[2] + "\n";
							attributesPrint += setPrintList(3, 18, physicalAttributes,wodStats.attributes.physical,socialAttributes,wodStats.attributes.social,mentalAttributes,wodStats.attributes.mental);
							
							var attributeSpecialty = "Specialties: " + setSpecialty('mages').attributeSpecialty + "\n";
							
							var abilityPrint = "\n" + "Abilities " + abilityPriority[0] + "/" + abilityPriority[1] + "/" + abilityPriority[2] + "\n";
							abilityPrint += setPrintList(11, 18, talents,wodStats.mages.abilities.talents,skills,wodStats.mages.abilities.skills,knowledges,wodStats.mages.abilities.knowledges);
							var abilitySpecialty = "Specialties: " + setSpecialty('mages').abilitySpecialty + "\n";
							
							var tamanho = backgroundNames.length;
							if (spheres.length > backgroundNames.length) {tamanho = spheres.length};
							
							var otherNames = ["Arete","Willpower","Quintessence"];
							var otherValues = [arete,willpower,quintessence];	
							
							var advantagePrint = "\n" + "Advantages" + "\n" + "Backgrounds            Spheres                Others" + "\n";
							advantagePrint += setPrintList(tamanho, 20, backgroundValues,backgroundNames,spheres,mageSpheres,otherValues,otherNames);
														
							
							var printMessage =  nameEssence + "\n" + natureDemeanor + "\n" + affiliationSect + "\n" + "Concept: " + conceptName + "\n" + attributesPrint + attributeSpecialty + abilityPrint + abilitySpecialty + "\n" + "Affinity Sphere: " + affinity.name + "\n" + advantagePrint + "\n" + spentFreebiesOn;								
							message.channel.send("```" + printMessage + "```");
							
							
						} else if (cmd === 'randomwodchangeling') {
							var conceptName = setRandom(wodStats.concepts).name;
							var kith = setRandom(wodStats.changelings.kiths);
							console.log(wodStats.changelings.kiths.length);
							var seeming = setRandom(wodStats.changelings.seemings);
							console.log(wodStats.changelings.seemings.length);
							var court = setRandom(wodStats.changelings.courts).name;
							console.log(wodStats.changelings.courts.length);
							var seelieLegacy = setRandom(wodStats.changelings.seelieLegacies).name;
							console.log(wodStats.changelings.seelieLegacies.length);
							var unseelieLegacy = setRandom(wodStats.changelings.unseelieLegacies).name;
							console.log(wodStats.changelings.unseelieLegacies.length);
							var house = {name: "None"}
							var backgroundPoints = 5;
							if (kith.result === 9 || kith.result === 10) {
								backgroundNames.push("Title");
								backgroundValues.push(1);
								backgroundPoints--;
							}
							var artNames = [];
							var artValues = [];
							var willpower = 4;
							var glamour = 4;
							var banality = 3;
							
							if (seeming.result === 0) {
								glamour++;
							} else if (seeming.result === 1) {
								var randomWild = Math.floor(Math.random() * 2);
								if (randomWild === 0) {
									glamour++;
								} else {
									willpower++;
								}
							} else {
								willpower++;
							}
								
							
							attributePriority = setPriority(7,5,3).slice();
							abilityPriority = setPriority(13,9,5).slice();
							
							setMultipleFixedPoints(physicalAttributes,attributePriority,0,3,5);
							setMultipleFixedPoints(socialAttributes,attributePriority,1,3,5);
							setMultipleFixedPoints(mentalAttributes,attributePriority,2,3,5);
							setMultipleFixedPoints(talents,abilityPriority,0,10,3);
							setMultipleFixedPoints(skills,abilityPriority,1,10,3);
							setMultipleFixedPoints(knowledges,abilityPriority,2,10,3);
							setFluidPoints(backgroundNames,backgroundValues,wodStats.changelings.backgrounds,5,backgroundPoints);
							setFluidPoints(artNames,artValues,wodStats.changelings.arts,5,3);
							setSingleFixedPoints(virtueOrOthers,5,0,6,5);
							
							var spentFreebiesOn = setFreebies(15,'changelings');
							
							if (kith.result === 4 ) {
								physicalAttributes[1]++;
							} else if (kith.result === 7) {
								physicalAttributes[2]++;
							} else if (kith.result === 8) {
								socialAttributes[0]++;
								socialAttributes[2]++;
							} else if (kith.result === 9 || kith.result === 10) {
								socialAttributes[2] += 2;
							} else if (kith.result === 12) {
								physicalAttributes[0]++;
							}
							
							for (q = 0; q < backgroundNames.length; q++) {
								console.log(backgroundNames[q])
								if (backgroundNames[q] === "Title") {
									console.log('bozo!')
									house = setRandom(wodStats.changelings.houses);
									console.log(house.name);
								}
							}
							
							if (house !== "") {
								if (house.result === 0) {
									mentalAttributes[0]++;
								} else if (house.result === 12) {
									socialAttributes[0]++;
								}
							}
							
							var nameSeeming = setPrintMisc(fullName,"Name",28) + " | Seeming: " + seeming.name;
							var kithCourt = setPrintMisc(kith.name,"Kith",28) + " | Court: " + court;
							var seelieUnseelie = setPrintMisc(seelieLegacy,"Seelie Legacy",28) + " | Unseelie Legacy: " + unseelieLegacy;
							var conceptHouse = setPrintMisc(conceptName,"Concept",34) + " | House: " + house.name;
							var attributesPrint = "\n" + "Attributes " + attributePriority[0] + "/" + attributePriority[1] + "/" + attributePriority[2] + "\n";
							attributesPrint += setPrintList(3, 18, physicalAttributes,wodStats.attributes.physical,socialAttributes,wodStats.attributes.social,mentalAttributes,wodStats.attributes.mental);
							
							var attributeSpecialty = "Specialties: " + setSpecialty('changelings').attributeSpecialty + "\n";
							
							var abilityPrint = "\n" + "Abilities " + abilityPriority[0] + "/" + abilityPriority[1] + "/" + abilityPriority[2] + "\n";
							abilityPrint += setPrintList(10, 18, talents,wodStats.changelings.abilities.talents,skills,wodStats.changelings.abilities.skills,knowledges,wodStats.changelings.abilities.knowledges);
							var abilitySpecialty = "Specialties: " + setSpecialty('changelings').abilitySpecialty + "\n";
							
							var tamanho = backgroundNames.length;
							if (artValues.length > backgroundNames.length) {
								tamanho = artValues.length;
							}
							if (virtueOrOthers.length > artValues.length && virtueOrOthers.length > backgroundNames.length) {
								tamanho = virtueOrOthers.length
							}
							
							
							var advantagePrint = "\n" + "Advantages" + "\n" + "Backgrounds            Arts                   Realms" + "\n";
							advantagePrint += setPrintList(tamanho, 20, backgroundValues,backgroundNames,artValues,artNames,virtueOrOthers,wodStats.changelings.realms);
							
							var others = setPrintMisc(glamour,"Glamour",28) + "\n" + setPrintMisc(willpower,"Willpower",28) + "\n" + setPrintMisc(banality,"Banality",28);
							
							var printMessage =  nameSeeming + "\n" + kithCourt + "\n" + seelieUnseelie + "\n" + conceptHouse + "\n" + attributesPrint + attributeSpecialty + abilityPrint + abilitySpecialty + advantagePrint + "\n" + others + "\n" + "\n" + spentFreebiesOn;								
							message.channel.send("```" + printMessage + "```");
						}							
					};
					
					randomWod();
				break;
				
				case 'randomwodvampire':
					
					//logMessage();
					
					
					
					randomWod();
					
				break;
				
				case 'randomwodwerewolf':
					
					//logMessage();	
					
					
					randomWod();
				
				break;
				
				case 'randomwodmage':
					
					//logMessage();	
					
					
					randomWod();
				
				break;
					
				case 'randomwodchangeling':
					//logMessage();	
					
					randomWod();
				break;

				case 'wod':
					
					//logMessage()
					
					if (typeof argos[1] === 'undefined') {
						message.channel.send('Not a number. Correct syntax: !wod <number of dice> <difficulty>')
						break;
					}
					if (argos[1]=='help') {
						message.channel.send('Syntax: !wod <number of dice> <difficulty>' + '\n' + "**Commands**" + '\n' + "+WP: adds 1 success to the total and prevents botches;" + '\n' + "+Spec: 10s count as 2 successes;" + '\n' + "+NoBotch: botches are counted as regular failures.")
						break;
					}
					var diceWod = parseInt(argos[1]);
					var diffWod = parseInt(argos[2]);
					if (Number.isNaN(diceWod) || diceWod > 100 || diceWod < 1) {
						message.channel.send('Not a number or too many dice. Correct syntax: !wod <number of dice> <difficulty>')
						break;
					} else {
						if (Number.isNaN(diffWod) || diffWod > 10 || diffWod < 2) {
							message.channel.send('Not a number. Correct syntax: !wod <number of dice> <difficulty (higher than 1, lower than 10)>')
							break;
						} else {
							var hitWod = 0;
							var diceResultWod = [];
							var messageResultWod = ""
							var successWod = ""
							var botchWod = true
							var specWod = false
							var wpWod = false
							var specMessageWod = ''
							var wpMessageWod = ''
							var cmd2Wod = ''
							var argasWod = ''
							var resultWod = 0
							var diceResultWodDisplay = "["
							for (var jWod = argos.length; !!jWod--;){
								if (argos[jWod].startsWith('+')) {
									argasWod = argos[jWod].slice(1);
									cmd2Wod = argasWod.toLowerCase();
									if (cmd2Wod == 'wp' && !(wpWod)) {
										wpWod = true
										hitWod ++
										botchWod = false
										wpMessageWod = " using **Willpower**"
									}
									if (cmd2Wod == 'spec') {
										specWod = true;	
										if (wpWod) {
											specMessageWod = " and **Specialty**"
										} else {
											specMessageWod = " with **Specialty**"
										}	
									}
									if (cmd2Wod == 'nobotch') {
										botchWod = false;
									}
								}	
							}
							
							
							for (iWod = 0; iWod < diceWod; iWod++) {
								resultWod = Math.floor(Math.random() * 10) + 1;
								if (resultWod >= diffWod) {
									hitWod ++
									botchWod = false
									if (specWod) {
										if (resultWod == 10) {
											hitWod++;
										}	
									}	
								}
								if (resultWod == 1) {
									hitWod --;
								}
								diceResultWod.push(resultWod)
							}
							for (var dWod = diceResultWod.length; !!dWod--;){
								var lastWod = ","
								if (dWod == 0)
									lastWod = " ]"
								
								if (diceResultWod[dWod] == 1) {
									diceResultWodDisplay += " ~~" + diceResultWod[dWod] + "~~" + lastWod;
								} else if (specWod && diceResultWod[dWod] == 10) {
									diceResultWodDisplay += " ***" + diceResultWod[dWod] + "***" + lastWod;
								} else if (diceResultWod[dWod] >= diffWod) {
									diceResultWodDisplay += " **" + diceResultWod[dWod] + "**" + lastWod;
								} else {
										diceResultWodDisplay += " " + diceResultWod[dWod] + lastWod;
								}
							}
								if (hitWod > 1) {
									successWod = "**" + hitWod + " successes!**"
								} else if (hitWod === 1) {
									successWod = "**" + hitWod + " success!**"
								} else if (hitWod < 0 && botchWod) {
									if (hitWod == -1) {
										successWod = hitWod + " success and **botch!**";
									} else {
										successWod = hitWod + " successes and **botch!**";
									}
								} else {
									successWod = hitWod + " successes and **fail!**"
								}
								if (hitWod > diffWod) {
									messageResultWod = "<@" + authorID + ">" + " rolls " + diceWod + " dice" + wpMessageWod + specMessageWod + " at difficulty " + diffWod + " and obtains " + diceResultWodDisplay + ". They get " + successWod;
								} else {
									messageResultWod = "<@" + authorID + ">" + " rolls " + diceWod + " dice" + wpMessageWod + specMessageWod + " at difficulty " + diffWod + " and obtains " + diceResultWodDisplay + ". They get " + successWod
								}
								message.channel.send(messageResultWod)
								
							}	
						}
					
				break;

				case 'listadeservers':
					console.log(client.guilds.cache)

				break;


				
		}
	}
});