const initialState = {
  1: {
    id: 1,
    name: "Affenpinscher"
  },
  2: {
    id: 2,
    name: "Afghan Hound"
  },
  3: {
    id: 3,
    name: "Afghan Shepherd"
  },
  4: {
    id: 4,
    name: "Aidi"
  },
  5: {
    id: 5,
    name: "Airedale Terrier"
  },
  6: {
    id: 6,
    name: "Akbash"
  },
  7: {
    id: 7,
    name: "Akita"
  },
  8: {
    id: 8,
    name: "Alano Español"
  },
  9: {
    id: 9,
    name: "Alaskan husky"
  },
  10: {
    id: 10,
    name: "Alaskan Klee Kai"
  },
  11: {
    id: 11,
    name: "Alaskan Malamute"
  },
  12: {
    id: 12,
    name: "Alaunt"
  },
  13: {
    id: 13,
    name: "Alopekis"
  },
  14: {
    id: 14,
    name: "Alpine Dachsbracke"
  },
  15: {
    id: 15,
    name: "Alpine Mastiff"
  },
  16: {
    id: 16,
    name: "Alpine Spaniel"
  },
  17: {
    id: 17,
    name: "American Akita"
  },
  18: {
    id: 18,
    name: "American Bulldog"
  },
  19: {
    id: 19,
    name: "American Bully"
  },
  20: {
    id: 20,
    name: "American Cocker Spaniel"
  },
  21: {
    id: 21,
    name: "American English Coonhound"
  },
  22: {
    id: 22,
    name: "American Eskimo Dog"
  },
  23: {
    id: 23,
    name: "American Foxhound"
  },
  24: {
    id: 24,
    name: "American Hairless Terrier"
  },
  25: {
    id: 25,
    name: "American Pit Bull Terrier"
  },
  26: {
    id: 26,
    name: "American Staffordshire Terrier"
  },
  27: {
    id: 27,
    name: "American Water Spaniel"
  },
  28: {
    id: 28,
    name: "Anatolian Shepherd Dog"
  },
  29: {
    id: 29,
    name: "Andalusian Hound"
  },
  30: {
    id: 30,
    name: "Anglo-Français de Petite Vénerie"
  },
  31: {
    id: 31,
    name: "Appenzeller Sennenhund"
  },
  32: {
    id: 32,
    name: "Argentine Polar Dog"
  },
  33: {
    id: 33,
    name: "Ariegeois"
  },
  34: {
    id: 34,
    name: "Armant"
  },
  35: {
    id: 35,
    name: "Armenian Gampr dog"
  },
  36: {
    id: 36,
    name: "Artois Hound"
  },
  37: {
    id: 37,
    name: "Australian Cattle Dog"
  },
  38: {
    id: 38,
    name: "Australian Kelpie"
  },
  39: {
    id: 39,
    name: "Australian Shepherd"
  },
  40: {
    id: 40,
    name: "Australian Stumpy Tail Cattle Dog[10]"
  },
  41: {
    id: 41,
    name: "Australian Terrier"
  },
  42: {
    id: 42,
    name: "Austrian Black and Tan Hound"
  },
  43: {
    id: 43,
    name: "Austrian Pinscher"
  },
  44: {
    id: 44,
    name: "Azawakh"
  },
  45: {
    id: 45,
    name: "Bakharwal dog"
  },
  46: {
    id: 46,
    name: "Barbado da Terceira"
  },
  47: {
    id: 47,
    name: "Barbet"
  },
  48: {
    id: 48,
    name: "Basenji"
  },
  49: {
    id: 49,
    name: "Basque Shepherd Dog"
  },
  50: {
    id: 50,
    name: "Basset Artésien Normand"
  },
  51: {
    id: 51,
    name: "Basset Bleu de Gascogne"
  },
  52: {
    id: 52,
    name: "Basset Fauve de Bretagne"
  },
  53: {
    id: 53,
    name: "Basset Hound"
  },
  54: {
    id: 54,
    name: "Bavarian Mountain Hound"
  },
  55: {
    id: 55,
    name: "Beagle"
  },
  56: {
    id: 56,
    name: "Beagle-Harrier"
  },
  57: {
    id: 57,
    name: "Bearded Collie"
  },
  58: {
    id: 58,
    name: "Beauceron"
  },
  59: {
    id: 59,
    name: "Bedlington Terrier"
  },
  60: {
    id: 60,
    name: "Belgian Shepherd Dog (Groenendael)"
  },
  61: {
    id: 61,
    name: "Belgian Shepherd Dog (Laekenois)"
  },
  62: {
    id: 62,
    name: "Belgian Shepherd Dog (Malinois)"
  },
  63: {
    id: 63,
    name: "Belgian Shepherd Dog (Tervuren)"
  },
  64: {
    id: 64,
    name: "Bergamasco Shepherd"
  },
  65: {
    id: 65,
    name: "Berger Blanc Suisse"
  },
  66: {
    id: 66,
    name: "Berger Picard"
  },
  67: {
    id: 67,
    name: "Bernese Mountain Dog"
  },
  68: {
    id: 68,
    name: "Bichon Frisé"
  },
  69: {
    id: 69,
    name: "Billy"
  },
  70: {
    id: 70,
    name: "Black and Tan Coonhound"
  },
  71: {
    id: 71,
    name: "Black and Tan Virginia Foxhound"
  },
  72: {
    id: 72,
    name: "Black Mouth Cur"
  },
  73: {
    id: 73,
    name: "Black Norwegian Elkhound"
  },
  74: {
    id: 74,
    name: "Black Russian Terrier"
  },
  75: {
    id: 75,
    name: "Bloodhound"
  },
  76: {
    id: 76,
    name: "Blue Heeler"
  },
  77: {
    id: 77,
    name: "Blue Lacy"
  },
  78: {
    id: 78,
    name: "Blue Paul Terrier"
  },
  79: {
    id: 79,
    name: "Blue Picardy Spaniel"
  },
  80: {
    id: 80,
    name: "Bluetick Coonhound"
  },
  81: {
    id: 81,
    name: "Boerboel"
  },
  82: {
    id: 82,
    name: "Bohemian Shepherd"
  },
  83: {
    id: 83,
    name: "Bolognese"
  },
  84: {
    id: 84,
    name: "Border Collie"
  },
  85: {
    id: 85,
    name: "Border Terrier"
  },
  86: {
    id: 86,
    name: "Borzoi"
  },
  87: {
    id: 87,
    name: "Bosnian Coarse-haired Hound"
  },
  88: {
    id: 88,
    name: "Boston Terrier"
  },
  89: {
    id: 89,
    name: "Bouvier des Ardennes"
  },
  90: {
    id: 90,
    name: "Bouvier des Flandres"
  },
  91: {
    id: 91,
    name: "Boxer"
  },
  92: {
    id: 92,
    name: "Boykin Spaniel"
  },
  93: {
    id: 93,
    name: "Bracco Italiano"
  },
  94: {
    id: 94,
    name: "Braque d'Auvergne"
  },
  95: {
    id: 95,
    name: "Braque de l'Ariege"
  },
  96: {
    id: 96,
    name: "Braque du Bourbonnais"
  },
  97: {
    id: 97,
    name: "Braque du Puy"
  },
  98: {
    id: 98,
    name: "Braque Francais"
  },
  99: {
    id: 99,
    name: "Braque Saint-Germain"
  },
  100: {
    id: 100,
    name: "Brazilian Dogo"
  },
  101: {
    id: 101,
    name: "Brazilian Terrier"
  },
  102: {
    id: 102,
    name: "Briard"
  },
  103: {
    id: 103,
    name: "Briquet Griffon Vendéen"
  },
  104: {
    id: 104,
    name: "Brittany"
  },
  105: {
    id: 105,
    name: "Broholmer"
  },
  106: {
    id: 106,
    name: "Bruno Jura Hound"
  },
  107: {
    id: 107,
    name: "Brussels Griffon"
  },
  108: {
    id: 108,
    name: "Bucovina Shepherd Dog"
  },
  109: {
    id: 109,
    name: "Bull and terrier"
  },
  110: {
    id: 110,
    name: "Bull Terrier"
  },
  111: {
    id: 111,
    name: "Bulldog"
  },
  112: {
    id: 112,
    name: "Bullenbeisser"
  },
  113: {
    id: 113,
    name: "Bullmastiff"
  },
  114: {
    id: 114,
    name: "Bully Kutta"
  },
  115: {
    id: 115,
    name: "Burgos Pointer"
  },
  116: {
    id: 116,
    name: "Cairn Terrier"
  },
  117: {
    id: 117,
    name: "Campeiro Bulldog"
  },
  118: {
    id: 118,
    name: "Canaan Dog"
  },
  119: {
    id: 119,
    name: "Canadian Eskimo Dog"
  },
  120: {
    id: 120,
    name: "Cane Corso"
  },
  121: {
    id: 121,
    name: "Cantabrian Water Dog"
  },
  122: {
    id: 122,
    name: "Cão da Serra de Aires"
  },
  123: {
    id: 123,
    name: "Cão de Castro Laboreiro"
  },
  124: {
    id: 124,
    name: "Cão de Gado Transmontano"
  },
  125: {
    id: 125,
    name: "Cão Fila de São Miguel"
  },
  126: {
    id: 126,
    name: "Carolina Dog"
  },
  127: {
    id: 127,
    name: "Carpathian Shepherd Dog"
  },
  128: {
    id: 128,
    name: "Catalan Sheepdog"
  },
  129: {
    id: 129,
    name: "Caucasian Shepherd Dog"
  },
  130: {
    id: 130,
    name: "Cavalier King Charles Spaniel"
  },
  131: {
    id: 131,
    name: "Central Asian Shepherd Dog"
  },
  132: {
    id: 132,
    name: "Cesky Fousek"
  },
  133: {
    id: 133,
    name: "Cesky Terrier"
  },
  134: {
    id: 134,
    name: "Chesapeake Bay Retriever"
  },
  135: {
    id: 135,
    name: "Chien Français Blanc et Noir"
  },
  136: {
    id: 136,
    name: "Chien Français Blanc et Orange"
  },
  137: {
    id: 137,
    name: "Chien Français Tricolore"
  },
  138: {
    id: 138,
    name: "Chien-gris"
  },
  139: {
    id: 139,
    name: "Chihuahua"
  },
  140: {
    id: 140,
    name: "Chilean Terrier"
  },
  141: {
    id: 141,
    name: "Chinese Chongqing Dog"
  },
  142: {
    id: 142,
    name: "Chinese Crested Dog"
  },
  143: {
    id: 143,
    name: "Chinook"
  },
  144: {
    id: 144,
    name: "Chippiparai"
  },
  145: {
    id: 145,
    name: "Chiribaya Dog"
  },
  146: {
    id: 146,
    name: "Chow Chow"
  },
  147: {
    id: 147,
    name: "Cierny Sery"
  },
  148: {
    id: 148,
    name: "Cimarrón Uruguayo"
  },
  149: {
    id: 149,
    name: "Cirneco dell'Etna"
  },
  150: {
    id: 150,
    name: "Clumber Spaniel"
  },
  151: {
    id: 151,
    name: "Collie, Rough"
  },
  152: {
    id: 152,
    name: "Collie, Smooth"
  },
  153: {
    id: 153,
    name: "Combai"
  },
  154: {
    id: 154,
    name: "Cordoba Fighting Dog"
  },
  155: {
    id: 155,
    name: "Coton de Tulear"
  },
  156: {
    id: 156,
    name: "Cretan Hound"
  },
  157: {
    id: 157,
    name: "Croatian Sheepdog"
  },
  158: {
    id: 158,
    name: "Cumberland Sheepdog"
  },
  159: {
    id: 159,
    name: "Curly-Coated Retriever"
  },
  160: {
    id: 160,
    name: "Cursinu"
  },
  161: {
    id: 161,
    name: "Czechoslovakian Wolfdog"
  },
  162: {
    id: 162,
    name: "Dachshund"
  },
  163: {
    id: 163,
    name: "Dalbo dog"
  },
  164: {
    id: 164,
    name: "Dalmatian"
  },
  165: {
    id: 165,
    name: "Dandie Dinmont Terrier"
  },
  166: {
    id: 166,
    name: "Danish-Swedish Farmdog"
  },
  167: {
    id: 167,
    name: "Deutsche Bracke"
  },
  168: {
    id: 168,
    name: "Doberman Pinscher"
  },
  169: {
    id: 169,
    name: "Dogo Argentino"
  },
  170: {
    id: 170,
    name: "Dogo Cubano"
  },
  171: {
    id: 171,
    name: "Dogue de Bordeaux"
  },
  172: {
    id: 172,
    name: "Drentse Patrijshond"
  },
  173: {
    id: 173,
    name: "Drever"
  },
  174: {
    id: 174,
    name: "Dunker"
  },
  175: {
    id: 175,
    name: "Dutch Shepherd"
  },
  176: {
    id: 176,
    name: "Dutch Smoushond"
  },
  177: {
    id: 177,
    name: "East European Shepherd"
  },
  178: {
    id: 178,
    name: "East Siberian Laika"
  },
  179: {
    id: 179,
    name: "Elo"
  },
  180: {
    id: 180,
    name: "English Cocker Spaniel"
  },
  181: {
    id: 181,
    name: "English Foxhound"
  },
  182: {
    id: 182,
    name: "English Mastiff"
  },
  183: {
    id: 183,
    name: "English Pointer"
  },
  184: {
    id: 184,
    name: "English Setter"
  },
  185: {
    id: 185,
    name: "English Shepherd"
  },
  186: {
    id: 186,
    name: "English Springer Spaniel"
  },
  187: {
    id: 187,
    name: "English Toy Terrier (Black & Tan)"
  },
  188: {
    id: 188,
    name: "English Water Spaniel"
  },
  189: {
    id: 189,
    name: "English White Terrier"
  },
  190: {
    id: 190,
    name: "Entlebucher Mountain Dog"
  },
  191: {
    id: 191,
    name: "Estonian Hound"
  },
  192: {
    id: 192,
    name: "Estrela Mountain Dog"
  },
  193: {
    id: 193,
    name: "Eurasier"
  },
  194: {
    id: 194,
    name: "Field Spaniel"
  },
  195: {
    id: 195,
    name: "Fila Brasileiro"
  },
  196: {
    id: 196,
    name: "Finnish Hound"
  },
  197: {
    id: 197,
    name: "Finnish Lapphund"
  },
  198: {
    id: 198,
    name: "Finnish Spitz"
  },
  199: {
    id: 199,
    name: "Flat-Coated Retriever"
  },
  200: {
    id: 200,
    name: "Fox Terrier, Smooth"
  },
  201: {
    id: 201,
    name: "Fox Terrier, Wire"
  },
  202: {
    id: 202,
    name: "French Brittany"
  },
  203: {
    id: 203,
    name: "French Bulldog"
  },
  204: {
    id: 204,
    name: "French Spaniel"
  },
  205: {
    id: 205,
    name: "Gaddi Kutta"
  },
  206: {
    id: 206,
    name: "Galgo Español"
  },
  207: {
    id: 207,
    name: "Galician Shepherd Dog"
  },
  208: {
    id: 208,
    name: "Garafian Shepherd"
  },
  209: {
    id: 209,
    name: "Gascon Saintongeois"
  },
  210: {
    id: 210,
    name: "Georgian Shepherd"
  },
  211: {
    id: 211,
    name: "German Longhaired Pointer"
  },
  212: {
    id: 212,
    name: "German Pinscher"
  },
  213: {
    id: 213,
    name: "German Roughhaired Pointer"
  },
  214: {
    id: 214,
    name: "German Shepherd Dog"
  },
  215: {
    id: 215,
    name: "German Shorthaired Pointer"
  },
  216: {
    id: 216,
    name: "German Spaniel"
  },
  217: {
    id: 217,
    name: "German Spitz"
  },
  218: {
    id: 218,
    name: "German Wirehaired Pointer"
  },
  219: {
    id: 219,
    name: "Giant Schnauzer"
  },
  220: {
    id: 220,
    name: "Glen of Imaal Terrier"
  },
  221: {
    id: 221,
    name: "Golden Retriever"
  },
  222: {
    id: 222,
    name: "Gordon Setter"
  },
  223: {
    id: 223,
    name: "Gran Mastín de Borínquen"
  },
  224: {
    id: 224,
    name: "Grand Anglo-Français Blanc et Noir"
  },
  225: {
    id: 225,
    name: "Grand Anglo-Français Blanc et Orange"
  },
  226: {
    id: 226,
    name: "Grand Anglo-Français Tricolore"
  },
  227: {
    id: 227,
    name: "Grand Basset Griffon Vendéen"
  },
  228: {
    id: 228,
    name: "Grand Bleu de Gascogne"
  },
  229: {
    id: 229,
    name: "Grand Griffon Vendéen"
  },
  230: {
    id: 230,
    name: "Great Dane"
  },
  231: {
    id: 231,
    name: "Great Pyrenees"
  },
  232: {
    id: 232,
    name: "Greater Swiss Mountain Dog"
  },
  233: {
    id: 233,
    name: "Greek Harehound"
  },
  234: {
    id: 234,
    name: "Greek Shepherd"
  },
  235: {
    id: 235,
    name: "Greenland Dog"
  },
  236: {
    id: 236,
    name: "Greyhound"
  },
  237: {
    id: 237,
    name: "Griffon Bleu de Gascogne"
  },
  238: {
    id: 238,
    name: "Griffon Fauve de Bretagne"
  },
  239: {
    id: 239,
    name: "Griffon Nivernais"
  },
  240: {
    id: 240,
    name: "Guatemalan Dogo"
  },
  241: {
    id: 241,
    name: "Gull Terrier"
  },
  242: {
    id: 242,
    name: "Halls Heeler"
  },
  243: {
    id: 243,
    name: "Hamiltonstövare"
  },
  244: {
    id: 244,
    name: "Hanover Hound"
  },
  245: {
    id: 245,
    name: "Hare Indian Dog"
  },
  246: {
    id: 246,
    name: "Harrier"
  },
  247: {
    id: 247,
    name: "Havanese"
  },
  248: {
    id: 248,
    name: "Hawaiian Poi Dog"
  },
  249: {
    id: 249,
    name: "Himalayan Sheepdog"
  },
  250: {
    id: 250,
    name: "Hokkaido"
  },
  251: {
    id: 251,
    name: "Hortaya borzaya"
  },
  252: {
    id: 252,
    name: "Hovawart"
  },
  253: {
    id: 253,
    name: "Huntaway"
  },
  254: {
    id: 254,
    name: "Hygen Hound"
  },
  255: {
    id: 255,
    name: "Ibizan Hound"
  },
  256: {
    id: 256,
    name: "Icelandic Sheepdog"
  },
  257: {
    id: 257,
    name: "Indian pariah dog"
  },
  258: {
    id: 258,
    name: "Indian Spitz"
  },
  259: {
    id: 259,
    name: "Irish Red and White Setter"
  },
  260: {
    id: 260,
    name: "Irish Setter"
  },
  261: {
    id: 261,
    name: "Irish Terrier"
  },
  262: {
    id: 262,
    name: "Irish Water Spaniel"
  },
  263: {
    id: 263,
    name: "Irish Wolfhound"
  },
  264: {
    id: 264,
    name: "Istrian Coarse-haired Hound"
  },
  265: {
    id: 265,
    name: "Istrian Short-haired Hound"
  },
  266: {
    id: 266,
    name: "Italian Greyhound"
  },
  267: {
    id: 267,
    name: "Jack Russell Terrier"
  },
  268: {
    id: 268,
    name: "Jagdterrier"
  },
  269: {
    id: 269,
    name: "Japanese Chin"
  },
  270: {
    id: 270,
    name: "Japanese Spitz"
  },
  271: {
    id: 271,
    name: "Japanese Terrier"
  },
  272: {
    id: 272,
    name: "Jindo"
  },
  273: {
    id: 273,
    name: "Jonangi"
  },
  274: {
    id: 274,
    name: "Kai Ken"
  },
  275: {
    id: 275,
    name: "Kaikadi dog"
  },
  276: {
    id: 276,
    name: "Kangal Shepherd Dog"
  },
  277: {
    id: 277,
    name: "Kanni"
  },
  278: {
    id: 278,
    name: "Karakachan dog"
  },
  279: {
    id: 279,
    name: "Karelian Bear Dog"
  },
  280: {
    id: 280,
    name: "Karst Shepherd"
  },
  281: {
    id: 281,
    name: "Keeshond"
  },
  282: {
    id: 282,
    name: "Kerry Beagle"
  },
  283: {
    id: 283,
    name: "Kerry Blue Terrier"
  },
  284: {
    id: 284,
    name: "King Charles Spaniel"
  },
  285: {
    id: 285,
    name: "King Shepherd"
  },
  286: {
    id: 286,
    name: "Kintamani"
  },
  287: {
    id: 287,
    name: "Kishu Ken"
  },
  288: {
    id: 288,
    name: "Komondor"
  },
  289: {
    id: 289,
    name: "Koolie"
  },
  290: {
    id: 290,
    name: "Koyun dog"
  },
  291: {
    id: 291,
    name: "Kromfohrländer"
  },
  292: {
    id: 292,
    name: "Kumaon Mastiff"
  },
  293: {
    id: 293,
    name: "Kunming Wolfdog"
  },
  294: {
    id: 294,
    name: "Kurī"
  },
  295: {
    id: 295,
    name: "Kuvasz"
  },
  296: {
    id: 296,
    name: "Kyi-Leo"
  },
  297: {
    id: 297,
    name: "Labrador Husky"
  },
  298: {
    id: 298,
    name: "Labrador Retriever"
  },
  299: {
    id: 299,
    name: "Lagotto Romagnolo"
  },
  300: {
    id: 300,
    name: "Lakeland Terrier"
  },
  301: {
    id: 301,
    name: "Lancashire Heeler"
  },
  302: {
    id: 302,
    name: "Landseer"
  },
  303: {
    id: 303,
    name: "Lapponian Herder"
  },
  304: {
    id: 304,
    name: "Lapponian Shepherd"
  },
  305: {
    id: 305,
    name: "Leonberger"
  },
  306: {
    id: 306,
    name: "Lhasa Apso"
  },
  307: {
    id: 307,
    name: "Lithuanian Hound"
  },
  308: {
    id: 308,
    name: "Louisiana Catahoula Leopard Dog"
  },
  309: {
    id: 309,
    name: "Löwchen"
  },
  310: {
    id: 310,
    name: "Mackenzie River husky"
  },
  311: {
    id: 311,
    name: "Magyar agár"
  },
  312: {
    id: 312,
    name: "Mahratta Greyhound"
  },
  313: {
    id: 313,
    name: "Maltese"
  },
  314: {
    id: 314,
    name: "Manchester Terrier"
  },
  315: {
    id: 315,
    name: "Maremma Sheepdog"
  },
  316: {
    id: 316,
    name: "Marquesan Dog"
  },
  317: {
    id: 317,
    name: "McNab dog"
  },
  318: {
    id: 318,
    name: "Miniature American Shepherd"
  },
  319: {
    id: 319,
    name: "Miniature Bull Terrier"
  },
  320: {
    id: 320,
    name: "Miniature Fox Terrier"
  },
  321: {
    id: 321,
    name: "Miniature Pinscher"
  },
  322: {
    id: 322,
    name: "Miniature Schnauzer"
  },
  323: {
    id: 323,
    name: "Miniature Shar Pei"
  },
  324: {
    id: 324,
    name: "Molossus"
  },
  325: {
    id: 325,
    name: "Molossus of Epirus"
  },
  326: {
    id: 326,
    name: "Montenegrin Mountain Hound"
  },
  327: {
    id: 327,
    name: "Moscow Watchdog"
  },
  328: {
    id: 328,
    name: "Moscow Water Dog"
  },
  329: {
    id: 329,
    name: "Mountain Cur"
  },
  330: {
    id: 330,
    name: "Mucuchies"
  },
  331: {
    id: 331,
    name: "Mudhol Hound"
  },
  332: {
    id: 332,
    name: "Mudi"
  },
  333: {
    id: 333,
    name: "Münsterländer, Large"
  },
  334: {
    id: 334,
    name: "Münsterländer, Small"
  },
  335: {
    id: 335,
    name: "Neapolitan Mastiff"
  },
  336: {
    id: 336,
    name: "Nederlandse Kooikerhondje"
  },
  337: {
    id: 337,
    name: "New Zealand Heading Dog"
  },
  338: {
    id: 338,
    name: "Newfoundland"
  },
  339: {
    id: 339,
    name: "Norfolk Spaniel"
  },
  340: {
    id: 340,
    name: "Norfolk Terrier"
  },
  341: {
    id: 341,
    name: "Norrbottenspets"
  },
  342: {
    id: 342,
    name: "North Country Beagle"
  },
  343: {
    id: 343,
    name: "Northern Inuit Dog"
  },
  344: {
    id: 344,
    name: "Norwegian Buhund"
  },
  345: {
    id: 345,
    name: "Norwegian Elkhound"
  },
  346: {
    id: 346,
    name: "Norwegian Lundehund"
  },
  347: {
    id: 347,
    name: "Norwich Terrier"
  },
  348: {
    id: 348,
    name: "Nova Scotia Duck Tolling Retriever"
  },
  349: {
    id: 349,
    name: "Old Croatian Sighthound"
  },
  350: {
    id: 350,
    name: "Old Danish Pointer"
  },
  351: {
    id: 351,
    name: "Old English Bulldog"
  },
  352: {
    id: 352,
    name: "Old English Sheepdog"
  },
  353: {
    id: 353,
    name: "Old English Terrier"
  },
  354: {
    id: 354,
    name: "Old German Shepherd Dog"
  },
  355: {
    id: 355,
    name: "Old Spanish Pointer"
  },
  356: {
    id: 356,
    name: "Old Time Farm Shepherd"
  },
  357: {
    id: 357,
    name: "Olde English Bulldogge"
  },
  358: {
    id: 358,
    name: "Otterhound"
  },
  359: {
    id: 359,
    name: "Pachon Navarro"
  },
  360: {
    id: 360,
    name: "Paisley Terrier"
  },
  361: {
    id: 361,
    name: "Pandikona"
  },
  362: {
    id: 362,
    name: "Papillon"
  },
  363: {
    id: 363,
    name: "Parson Russell Terrier"
  },
  364: {
    id: 364,
    name: "Pastore della Lessinia e del Lagorai"
  },
  365: {
    id: 365,
    name: "Patterdale Terrier"
  },
  366: {
    id: 366,
    name: "Pekingese"
  },
  367: {
    id: 367,
    name: "Perro de Pastor Mallorquin"
  },
  368: {
    id: 368,
    name: "Perro de Presa Canario"
  },
  369: {
    id: 369,
    name: "Perro de Presa Mallorquin"
  },
  370: {
    id: 370,
    name: "Peruvian Inca Orchid"
  },
  371: {
    id: 371,
    name: "Petit Basset Griffon Vendéen"
  },
  372: {
    id: 372,
    name: "Petit Bleu de Gascogne"
  },
  373: {
    id: 373,
    name: "Phalène"
  },
  374: {
    id: 374,
    name: "Pharaoh Hound"
  },
  375: {
    id: 375,
    name: "Phu Quoc Ridgeback"
  },
  376: {
    id: 376,
    name: "Picardy Spaniel"
  },
  377: {
    id: 377,
    name: "Plott Hound"
  },
  378: {
    id: 378,
    name: "Plummer Terrier"
  },
  379: {
    id: 379,
    name: "Podenco Canario"
  },
  380: {
    id: 380,
    name: "Poitevin"
  },
  381: {
    id: 381,
    name: "Polish Greyhound"
  },
  382: {
    id: 382,
    name: "Polish Hound"
  },
  383: {
    id: 383,
    name: "Polish Hunting Dog"
  },
  384: {
    id: 384,
    name: "Polish Lowland Sheepdog"
  },
  385: {
    id: 385,
    name: "Polish Tatra Sheepdog"
  },
  386: {
    id: 386,
    name: "Pomeranian"
  },
  387: {
    id: 387,
    name: "Pont-Audemer Spaniel"
  },
  388: {
    id: 388,
    name: "Poodle"
  },
  389: {
    id: 389,
    name: "Porcelaine"
  },
  390: {
    id: 390,
    name: "Portuguese Podengo"
  },
  391: {
    id: 391,
    name: "Portuguese Pointer"
  },
  392: {
    id: 392,
    name: "Portuguese Water Dog"
  },
  393: {
    id: 393,
    name: "Posavac Hound"
  },
  394: {
    id: 394,
    name: "Potsdam Greyhound"
  },
  395: {
    id: 395,
    name: "Pražský Krysařík"
  },
  396: {
    id: 396,
    name: "Pudelpointer"
  },
  397: {
    id: 397,
    name: "Pug"
  },
  398: {
    id: 398,
    name: "Puli"
  },
  399: {
    id: 399,
    name: "Pumi"
  },
  400: {
    id: 400,
    name: "Pungsan dog"
  },
  401: {
    id: 401,
    name: "Pyrenean Mastiff"
  },
  402: {
    id: 402,
    name: "Pyrenean Shepherd"
  },
  403: {
    id: 403,
    name: "Rafeiro do Alentejo"
  },
  404: {
    id: 404,
    name: "Rajapalayam"
  },
  405: {
    id: 405,
    name: "Rampur Greyhound"
  },
  406: {
    id: 406,
    name: "Rastreador Brasileiro"
  },
  407: {
    id: 407,
    name: "Rat Terrier"
  },
  408: {
    id: 408,
    name: "Ratonero Bodeguero Andaluz"
  },
  409: {
    id: 409,
    name: "Ratonero Mallorquin"
  },
  410: {
    id: 410,
    name: "Ratonero Murciano de Huerta"
  },
  411: {
    id: 411,
    name: "Ratonero Valenciano"
  },
  412: {
    id: 412,
    name: "Redbone Coonhound"
  },
  413: {
    id: 413,
    name: "Rhodesian Ridgeback"
  },
  414: {
    id: 414,
    name: "Romanian Mioritic Shepherd Dog"
  },
  415: {
    id: 415,
    name: "Romanian Raven Shepherd Dog"
  },
  416: {
    id: 416,
    name: "Rottweiler"
  },
  417: {
    id: 417,
    name: "Russell Terrier"
  },
  418: {
    id: 418,
    name: "Russian Spaniel"
  },
  419: {
    id: 419,
    name: "Russian Toy"
  },
  420: {
    id: 420,
    name: "Russian Tracker"
  },
  421: {
    id: 421,
    name: "Russo-European Laika"
  },
  422: {
    id: 422,
    name: "Saarloos Wolfdog"
  },
  423: {
    id: 423,
    name: "Sabueso Español"
  },
  424: {
    id: 424,
    name: "Sabueso fino Colombiano"
  },
  425: {
    id: 425,
    name: "Saint Bernard"
  },
  426: {
    id: 426,
    name: "Saint John's water dog"
  },
  427: {
    id: 427,
    name: "Saint-Usuge Spaniel"
  },
  428: {
    id: 428,
    name: "Sakhalin Husky"
  },
  429: {
    id: 429,
    name: "Salish Wool Dog"
  },
  430: {
    id: 430,
    name: "Saluki"
  },
  431: {
    id: 431,
    name: "Samoyed"
  },
  432: {
    id: 432,
    name: "Sapsali"
  },
  433: {
    id: 433,
    name: "Šarplaninac"
  },
  434: {
    id: 434,
    name: "Schapendoes"
  },
  435: {
    id: 435,
    name: "Schillerstövare"
  },
  436: {
    id: 436,
    name: "Schipperke"
  },
  437: {
    id: 437,
    name: "Schweizer Laufhund"
  },
  438: {
    id: 438,
    name: "Schweizerischer Niederlaufhund"
  },
  439: {
    id: 439,
    name: "Scotch Collie"
  },
  440: {
    id: 440,
    name: "Scottish Deerhound"
  },
  441: {
    id: 441,
    name: "Scottish Terrier"
  },
  442: {
    id: 442,
    name: "Sealyham Terrier"
  },
  443: {
    id: 443,
    name: "Segugio Italiano"
  },
  444: {
    id: 444,
    name: "Seppala Siberian Sleddog"
  },
  445: {
    id: 445,
    name: "Serbian Hound"
  },
  446: {
    id: 446,
    name: "Serbian Tricolour Hound"
  },
  447: {
    id: 447,
    name: "Serrano Bulldog"
  },
  448: {
    id: 448,
    name: "Shar Pei"
  },
  449: {
    id: 449,
    name: "Shetland Sheepdog"
  },
  450: {
    id: 450,
    name: "Shiba Inu"
  },
  451: {
    id: 451,
    name: "Shih Tzu"
  },
  452: {
    id: 452,
    name: "Shikoku"
  },
  453: {
    id: 453,
    name: "Shiloh Shepherd"
  },
  454: {
    id: 454,
    name: "Siberian Husky"
  },
  455: {
    id: 455,
    name: "Silken Windhound"
  },
  456: {
    id: 456,
    name: "Silky Terrier"
  },
  457: {
    id: 457,
    name: "Sinhala Hound"
  },
  458: {
    id: 458,
    name: "Skye Terrier"
  },
  459: {
    id: 459,
    name: "Sloughi"
  },
  460: {
    id: 460,
    name: "Slovak Cuvac"
  },
  461: {
    id: 461,
    name: "Slovakian Wirehaired Pointer"
  },
  462: {
    id: 462,
    name: "Slovenský kopov"
  },
  463: {
    id: 463,
    name: "Smålandsstövare"
  },
  464: {
    id: 464,
    name: "Small Greek domestic dog"
  },
  465: {
    id: 465,
    name: "Soft-Coated Wheaten Terrier"
  },
  466: {
    id: 466,
    name: "South Russian Ovcharka"
  },
  467: {
    id: 467,
    name: "Southern Hound"
  },
  468: {
    id: 468,
    name: "Spanish Mastiff"
  },
  469: {
    id: 469,
    name: "Spanish Water Dog"
  },
  470: {
    id: 470,
    name: "Spinone Italiano"
  },
  471: {
    id: 471,
    name: "Sporting Lucas Terrier"
  },
  472: {
    id: 472,
    name: "Stabyhoun"
  },
  473: {
    id: 473,
    name: "Staffordshire Bull Terrier"
  },
  474: {
    id: 474,
    name: "Standard Schnauzer"
  },
  475: {
    id: 475,
    name: "Stephens Cur"
  },
  476: {
    id: 476,
    name: "Styrian Coarse-haired Hound"
  },
  477: {
    id: 477,
    name: "Sussex Spaniel"
  },
  478: {
    id: 478,
    name: "Swedish Elkhound"
  },
  479: {
    id: 479,
    name: "Swedish Lapphund"
  },
  480: {
    id: 480,
    name: "Swedish Vallhund"
  },
  481: {
    id: 481,
    name: "Tahitian Dog"
  },
  482: {
    id: 482,
    name: "Tahltan Bear Dog"
  },
  483: {
    id: 483,
    name: "Taigan"
  },
  484: {
    id: 484,
    name: "Taiwan Dog"
  },
  485: {
    id: 485,
    name: "Talbot Hound"
  },
  486: {
    id: 486,
    name: "Tamaskan Dog"
  },
  487: {
    id: 487,
    name: "Teddy Roosevelt Terrier"
  },
  488: {
    id: 488,
    name: "Telomian"
  },
  489: {
    id: 489,
    name: "Tenterfield Terrier"
  },
  490: {
    id: 490,
    name: "Terceira Mastiff"
  },
  491: {
    id: 491,
    name: "Thai Bangkaew Dog"
  },
  492: {
    id: 492,
    name: "Thai Ridgeback"
  },
  493: {
    id: 493,
    name: "Tibetan Mastiff"
  },
  494: {
    id: 494,
    name: "Tibetan Spaniel"
  },
  495: {
    id: 495,
    name: "Tibetan Terrier"
  },
  496: {
    id: 496,
    name: "Tornjak"
  },
  497: {
    id: 497,
    name: "Tosa"
  },
  498: {
    id: 498,
    name: "Toy Bulldog"
  },
  499: {
    id: 499,
    name: "Toy Fox Terrier"
  },
  500: {
    id: 500,
    name: "Toy Manchester Terrier"
  },
  501: {
    id: 501,
    name: "Toy Trawler Spaniel"
  },
  502: {
    id: 502,
    name: "Transylvanian Hound"
  },
  503: {
    id: 503,
    name: "Treeing Cur"
  },
  504: {
    id: 504,
    name: "Treeing Tennessee Brindle"
  },
  505: {
    id: 505,
    name: "Treeing Walker Coonhound"
  },
  506: {
    id: 506,
    name: "Trigg Hound"
  },
  507: {
    id: 507,
    name: "Tweed Water Spaniel"
  },
  508: {
    id: 508,
    name: "Tyrolean Hound"
  },
  509: {
    id: 509,
    name: "Vanjari Hound"
  },
  510: {
    id: 510,
    name: "Villano de Las Encartaciones"
  },
  511: {
    id: 511,
    name: "Villanuco de Las Encartaciones"
  },
  512: {
    id: 512,
    name: "Vizsla"
  },
  513: {
    id: 513,
    name: "Volpino Italiano"
  },
  514: {
    id: 514,
    name: "Weimaraner"
  },
  515: {
    id: 515,
    name: "Welsh Corgi, Cardigan"
  },
  516: {
    id: 516,
    name: "Welsh Corgi, Pembroke"
  },
  517: {
    id: 517,
    name: "Welsh Hillman"
  },
  518: {
    id: 518,
    name: "Welsh Sheepdog"
  },
  519: {
    id: 519,
    name: "Welsh Springer Spaniel"
  },
  520: {
    id: 520,
    name: "Welsh Terrier"
  },
  521: {
    id: 521,
    name: "West Highland White Terrier"
  },
  522: {
    id: 522,
    name: "West Siberian Laika"
  },
  523: {
    id: 523,
    name: "Westphalian Dachsbracke"
  },
  524: {
    id: 524,
    name: "Wetterhoun"
  },
  525: {
    id: 525,
    name: "Whippet"
  },
  526: {
    id: 526,
    name: "White Shepherd"
  },
  527: {
    id: 527,
    name: "Wirehaired Pointing Griffon"
  },
  528: {
    id: 528,
    name: "Wirehaired Vizsla"
  },
  529: {
    id: 529,
    name: "Xiasi Dog"
  },
  530: {
    id: 530,
    name: "Xoloitzcuintli"
  },
  531: {
    id: 531,
    name: "Yakutian Laika"
  },
  532: {
    id: 532,
    name: "Yorkshire Terrier"
  },
};

const breedsReduxer = (state = initialState, action) => {
  return state;
};

export default breedsReduxer;
