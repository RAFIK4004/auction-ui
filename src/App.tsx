import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Gavel, 
  ShoppingBag, 
  Settings, 
  Monitor, 
  Smartphone, 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Eye,
  Heart,
  Star,
  Award,
  Zap,
  Activity,
  BarChart3,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  CheckCircle,
  AlertCircle,
  XCircle,
  Wifi,
  Battery,
  Signal,
  Volume2,
  Bluetooth,
  Camera,
  Mic,
  Speaker,
  Headphones,
  Radio,
  Navigation,
  Fuel,
  Gauge,
  Thermometer,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Umbrella,
  Lightbulb,
  Power,
  Plug,
  WifiOff,
  BatteryLow,
  SignalLow,
  VolumeX,
  BluetoothOff,
  CameraOff,
  MicOff,
  SpeakerX,
  HeadphonesOff,
  RadioOff,
  NavigationOff,
  FuelOff,
  GaugeOff,
  ThermometerSun,
  WindOff,
  SunOff,
  MoonOff,
  CloudRainWind,
  SnowflakeOff,
  UmbrellaOff,
  LightbulbOff,
  PowerOff,
  PlugOff,
  X,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Copy,
  Trash,
  Edit,
  Save,
  Download,
  Upload,
  Share,
  Link,
  ExternalLink,
  Home,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  CreditCard,
  Wallet,
  Receipt,
  Tag,
  Tags,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,
  BookmarkCheck,
  BookmarkX,
  Flag,
  FlagOff,
  Bell,
  BellOff,
  BellRing,
  MessageCircle,
  MessageSquare,
  Mail as MailIcon,
  Send,
  Inbox,
  Archive,
  Trash2,
  FileText,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderCheck,
  FolderX,
  Image,
  Video,
  Music,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Repeat,
  RepeatOnce,
  Shuffle,
  Volume,
  Volume1,
  VolumeOff as VolumeOffIcon,
  Layers,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Pentagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  Angry,
  Laugh,
  Cry,
  Kiss,
  Wink,
  Surprised,
  Confused,
  Sleepy,
  Dizzy,
  Sick,
  Dead,
  Ghost,
  Alien,
  Robot,
  Monster,
  Poop,
  Fire,
  Snowman,
  Tree,
  Flower,
  Leaf,
  Seedling,
  Herb,
  Shamrock,
  FourLeafClover,
  PineTree,
  DeciduousTree,
  Palm,
  Cactus,
  Tulip,
  Cherry,
  Grapes,
  Watermelon,
  Tangerine,
  Lemon,
  Banana,
  Pineapple,
  Apple,
  GreenApple,
  Pear,
  Peach,
  Cherries,
  Strawberry,
  Kiwi,
  Tomato,
  Coconut,
  Avocado,
  Eggplant,
  Potato,
  Carrot,
  Corn,
  HotPepper,
  Cucumber,
  Broccoli,
  Mushroom,
  Peanuts,
  Chestnut,
  Bread,
  Croissant,
  Baguette,
  Pretzel,
  Pancakes,
  Cheese,
  MeatOnBone,
  PoultryLeg,
  Bacon,
  Hamburger,
  Fries,
  Pizza,
  HotDog,
  Taco,
  Burrito,
  Sandwich,
  Stuffed,
  Egg,
  Cooking,
  Pot,
  Pan,
  Spoon,
  Fork,
  Knife,
  Plate,
  Bowl,
  Cup,
  Glass,
  Bottle,
  Wine,
  Beer,
  Cocktail,
  Tropical,
  Coffee,
  Tea,
  Sake,
  Champagne,
  Milk,
  BabyBottle,
  Water,
  Honey,
  Salt,
  Icecream,
  Shaved,
  Cake,
  Cupcake,
  Pie,
  Chocolate,
  Candy,
  Lollipop,
  Custard,
  Doughnut,
  Cookie,
  Birthday,
  Party,
  Balloon,
  Confetti,
  Tada,
  Gift,
  Ribbon,
  Wrapped,
  Christmas,
  Santa,
  MrsClaus,
  Elf,
  Reindeer,
  Snowflake as SnowflakeIcon,
  Snowman as SnowmanIcon,
  ChristmasTree,
  Wreath,
  Fireworks,
  Sparkler,
  Sparkles,
  Boom,
  Collision,
  Sweat,
  Droplet,
  Ocean,
  Wave,
  Cyclone,
  Fog,
  Tornado,
  Lightning,
  Thunder,
  Sunny,
  PartlySunny,
  Cloudy,
  PartlyCloudy,
  Overcast,
  Drizzle,
  Rain,
  HeavyRain,
  Shower,
  Storm,
  Snow,
  Blizzard,
  Hail,
  Sleet,
  Mist,
  Windy,
  Dust,
  Sandstorm,
  Earthquake,
  Volcano,
  Avalanche,
  Flood,
  Drought,
  Desert,
  Beach,
  Island,
  Mountain,
  Hill,
  Valley,
  Canyon,
  Cave,
  Forest,
  Jungle,
  Swamp,
  River,
  Lake,
  Waterfall,
  Geyser,
  HotSprings,
  Camping,
  Tent,
  Hut,
  House,
  Home as HomeIcon,
  Building,
  Office,
  Factory,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Cinema,
  Stadium,
  Arena,
  Gym,
  Pool,
  Spa,
  Hotel,
  Motel,
  Resort,
  Castle,
  Palace,
  Fort,
  Tower,
  Bridge,
  Statue,
  Monument,
  Fountain,
  Park,
  Garden,
  Zoo,
  Aquarium,
  Circus,
  Carnival,
  FerrisWheel,
  RollerCoaster,
  Carousel,
  Playground,
  Sandbox,
  Slide,
  Swing,
  Seesaw,
  Kite,
  Balloon as BalloonIcon,
  Pinwheel,
  Ribbon as RibbonIcon,
  Bow,
  Knot,
  Thread,
  Yarn,
  Fabric,
  Scissors,
  Needle,
  Pin,
  Safety,
  Paperclip,
  Pushpin,
  Thumbtack,
  Ruler,
  Triangular,
  Compass,
  Magnifying,
  Microscope,
  Telescope,
  Satellite,
  Radar,
  Antenna,
  Dish,
  Radio as RadioIcon,
  Television,
  Computer,
  Laptop,
  Desktop,
  Keyboard,
  Mouse,
  Trackball,
  Joystick,
  GameController,
  Dice,
  Puzzle,
  Chess,
  Checkers,
  Cards,
  Mahjong,
  Domino,
  Billiards,
  PingPong,
  Badminton,
  Tennis,
  Volleyball,
  Basketball,
  Football,
  Soccer,
  Baseball,
  Softball,
  Cricket,
  FieldHockey,
  IceHockey,
  Lacrosse,
  Rugby,
  Golf,
  Archery,
  Darts,
  YoYo,
  Kite as KiteIcon,
  Frisbee,
  Boomerang,
  Slingshot,
  Bow as BowIcon,
  Arrow,
  Spear,
  Sword,
  Dagger,
  Shield as ShieldIcon,
  Helmet,
  Crown,
  TopHat,
  Graduation,
  Beret,
  Sombrero,
  Cowboy,
  Fedora,
  Beanie,
  Turban,
  Headband,
  Scarf,
  Gloves,
  Mittens,
  Coat,
  Jacket,
  Vest,
  Shirt,
  TShirt,
  Jeans,
  Pants,
  Shorts,
  Skirt,
  Dress,
  Bikini,
  Swimsuit,
  Underwear,
  Bra,
  Socks,
  Stockings,
  Shoes,
  Sneakers,
  Boots,
  Sandals,
  Heels,
  Flats,
  Slippers,
  Bag,
  Handbag,
  Purse,
  Backpack,
  Briefcase,
  Suitcase,
  Luggage,
  Umbrella as UmbrellaIcon,
  Parasol,
  Fan,
  Lipstick,
  Ring,
  Gem,
  Diamond as DiamondIcon,
  Pearl,
  Necklace,
  Bracelet,
  Watch,
  Sunglasses,
  Glasses,
  Goggles,
  Mask,
  Mustache,
  Beard,
  Hair,
  Bald,
  Baby,
  Child,
  Boy,
  Girl,
  Man,
  Woman,
  Adult,
  Elder,
  Grandpa,
  Grandma,
  Family,
  Couple,
  Kiss as KissIcon,
  Love,
  Wedding,
  Bouquet,
  Church,
  Mosque,
  Synagogue,
  Temple,
  Shrine,
  Kaaba,
  Pray,
  Meditation,
  Yoga,
  Massage,
  Haircut,
  Barber,
  Nail,
  Makeup,
  Spa as SpaIcon,
  Sauna,
  Bath,
  Shower as ShowerIcon,
  Toilet,
  Potty,
  Diaper,
  Bottle as BottleIcon,
  Milk as MilkIcon,
  Formula,
  Pacifier,
  Rattle,
  Stroller,
  Crib,
  Teddy,
  Doll,
  Toy,
  Block,
  Lego,
  Puzzle as PuzzleIcon,
  Game,
  Dice as DiceIcon,
  Slot,
  Lottery,
  Ticket,
  Trophy,
  Medal,
  Award as AwardIcon,
  Certificate,
  Diploma,
  Ribbon as RibbonIcon2,
  Rosette,
  Badge,
  ID,
  Passport,
  Visa,
  Customs,
  Baggage,
  Departure,
  Arrival,
  Airplane,
  Helicopter,
  Rocket,
  Satellite as SatelliteIcon,
  UFO,
  Train,
  Metro,
  Tram,
  Bus,
  Trolley,
  Minibus,
  Ambulance,
  FireTruck,
  Police,
  Taxi,
  Car as CarIcon,
  SUV,
  Truck,
  Pickup,
  Van,
  RV,
  Tractor,
  Bike,
  Scooter,
  Motorcycle,
  ATV,
  Boat,
  Ship,
  Ferry,
  Yacht,
  Speedboat,
  Sailboat,
  Canoe,
  Kayak,
  Raft,
  Anchor,
  Wheel,
  Gear,
  Nut,
  Bolt,
  Screw,
  Nail as NailIcon,
  Hammer,
  Wrench,
  Screwdriver,
  Saw,
  Drill,
  Axe,
  Pickaxe,
  Shovel,
  Rake,
  Hoe,
  Pitchfork,
  Broom,
  Mop,
  Bucket,
  Soap,
  Sponge,
  Brush,
  Toothbrush,
  Razor,
  Lotion,
  Perfume,
  Cologne,
  Deodorant,
  Shampoo,
  Conditioner,
  Towel,
  Washcloth,
  Bathrobe,
  Slippers as SlippersIcon,
  Flip,
  Sandals as SandalsIcon,
  Socks as SocksIcon,
  Stockings as StockingsIcon,
  Tights,
  Pantyhose,
  Leggings,
  Jeans as JeansIcon,
  Pants as PantsIcon,
  Shorts as ShortsIcon,
  Skirt as SkirtIcon,
  Dress as DressIcon,
  Gown,
  Robe,
  Kimono,
  Sari,
  Hijab,
  Turban as TurbanIcon,
  Hat,
  Cap,
  Helmet as HelmetIcon,
  Crown as CrownIcon,
  Tiara,
  Headband as HeadbandIcon,
  Bow as BowIcon2,
  Ribbon as RibbonIcon3,
  Scarf as ScarfIcon,
  Tie,
  Bowtie,
  Suspenders,
  Belt,
  Buckle,
  Button,
  Zipper,
  Velcro,
  Snap,
  Hook,
  Eye,
  Loop,
  Clasp,
  Pin as PinIcon,
  Brooch,
  Cufflinks,
  Earrings,
  Necklace as NecklaceIcon,
  Pendant,
  Locket,
  Charm,
  Bracelet as BraceletIcon,
  Bangle,
  Anklet,
  Ring as RingIcon,
  Wedding as WeddingIcon,
  Engagement,
  Promise,
  Class,
  Signet,
  Pinky,
  Thumb,
  Mood,
  Spinner,
  Fidget,
  Stress,
  Squeeze,
  Therapy,
  Exercise,
  Weights,
  Dumbbell,
  Barbell,
  Kettlebell,
  Medicine,
  Yoga as YogaIcon,
  Mat,
  Block as BlockIcon,
  Strap,
  Bolster,
  Pillow,
  Cushion,
  Blanket,
  Quilt,
  Comforter,
  Sheet,
  Pillowcase,
  Mattress,
  Bed,
  Bunk,
  Cot,
  Futon,
  Sofa,
  Couch,
  Loveseat,
  Chair,
  Armchair,
  Recliner,
  Rocker,
  Stool,
  Bench,
  Ottoman,
  Table,
  Desk,
  Nightstand,
  Dresser,
  Wardrobe,
  Closet,
  Shelf,
  Bookshelf,
  Cabinet,
  Drawer,
  Door,
  Window,
  Curtain,
  Blind,
  Shade,
  Shutter,
  Screen,
  Frame,
  Mirror,
  Picture,
  Painting,
  Poster,
  Print,
  Canvas,
  Easel,
  Palette,
  Brush as BrushIcon,
  Paint,
  Crayon,
  Marker,
  Pencil,
  Pen,
  Eraser,
  Sharpener,
  Ruler as RulerIcon,
  Protractor,
  Compass as CompassIcon,
  Square as SquareIcon,
  Triangle as TriangleIcon,
  Circle as CircleIcon,
  Oval,
  Rectangle,
  Rhombus,
  Parallelogram,
  Trapezoid,
  Pentagon as PentagonIcon,
  Hexagon as HexagonIcon,
  Heptagon,
  Octagon as OctagonIcon,
  Nonagon,
  Decagon,
  Dodecagon,
  Star as StarIcon2,
  Cross,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Multiply,
  Divide,
  Equals,
  Percent,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Hundred,
  Thousand,
  Million,
  Billion,
  Trillion,
  Quadrillion,
  Quintillion,
  Sextillion,
  Septillion,
  Octillion,
  Nonillion,
  Decillion,
  Googol,
  Googolplex,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
  Exclamation,
  Question,
  Period,
  Comma,
  Semicolon,
  Colon,
  Apostrophe,
  Quote,
  Hyphen,
  Dash,
  Underscore,
  Parentheses,
  Brackets,
  Braces,
  Angle,
  Slash,
  Backslash,
  Pipe,
  Ampersand,
  At,
  Hash,
  Dollar,
  Euro,
  Pound,
  Yen,
  Won,
  Rupee,
  Ruble,
  Franc,
  Peso,
  Real,
  Rand,
  Shekel,
  Dinar,
  Dirham,
  Riyal,
  Taka,
  Baht,
  Dong,
  Kip,
  Riel,
  Kyat,
  Tugrik,
  Som,
  Manat,
  Lari,
  Dram,
  Leu,
  Lev,
  Kuna,
  Forint,
  Koruna,
  Zloty,
  Krona,
  Krone,
  Markka,
  Guilder,
  Escudo,
  Peseta,
  Lira,
  Drachma,
  Schilling,
  Florin,
  Ducat,
  Thaler,
  Crown,
  Sovereign,
  Guinea,
  Shilling,
  Pence,
  Penny,
  Farthing,
  Halfpenny,
  Groat,
  Noble,
  Angel,
  Rose,
  Unite,
  Laurel,
  Jacobus,
  Carolus,
  Spade,
  Broad,
  Piece,
  Doubloon,
  Pistole,
  Louis,
  Napoleon,
  Frederick,
  Ducat as DucatIcon,
  Florin as FlorinIcon,
  Gulden,
  Kreuzer,
  Pfennig,
  Groschen,
  Heller,
  Denier,
  Solidus,
  Bezant,
  Nomisma,
  Follis,
  Siliqua,
  Tremissis,
  Semissis,
  Aureus,
  Denarius,
  Sestertius,
  Dupondius,
  As,
  Semis,
  Quadrans,
  Sextans,
  Uncia,
  Semuncia,
  Sicilicus,
  Sextula,
  Dimidia,
  Scripulum,
  Obolus,
  Chalcus,
  Lepton,
  Prutah,
  Gerah,
  Beka,
  Shekel as ShekelIcon,
  Mina,
  Talent,
  Stater,
  Drachma as DrachmaIcon,
  Obol,
  Chalkous,
  Tetradrachm,
  Didrachm,
  Hemidrachm,
  Triobol,
  Diobol,
  Hemiobol,
  Tetartemorion,
  Hemitartemorion,
  Octadrachm,
  Decadrachm,
  Pentadrachm,
  Tridrachm,
  Hexadrachm,
  Heptadrachm,
  Enneadrachm,
  Dodecadrachm,
  Icosadrachm,
  Triacontadrachm,
  Pentacontadrachm,
  Hectadrachm,
  Chiliodrachm,
  Myriodrachm,
  Decamyriodrachm,
  Hectomyriodrachm,
  Chiliomyriodrachm,
  Myriomyriodrachm
} from 'lucide-react';

interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: number;
  image: string;
  mileage: string;
  fuel: string;
  transmission: string;
  condition: string;
  location: string;
  seller: string;
  rating: number;
  bids: number;
  timeLeft: string;
  featured: boolean;
  category: string;
  description: string;
  features: string[];
  history: string[];
  inspection: {
    engine: string;
    transmission: string;
    brakes: string;
    tires: string;
    interior: string;
    exterior: string;
    electronics: string;
    overall: string;
  };
}

interface Package {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular: boolean;
  color: string;
}

interface SystemStatus {
  cpu: number;
  memory: number;
  storage: number;
  network: number;
  temperature: number;
  uptime: string;
  activeUsers: number;
  totalAuctions: number;
  activeBids: number;
  revenue: number;
  alerts: Array<{
    id: number;
    type: 'info' | 'warning' | 'error' | 'success';
    message: string;
    timestamp: string;
  }>;
  services: Array<{
    name: string;
    status: 'online' | 'offline' | 'maintenance';
    uptime: string;
    responseTime: number;
  }>;
  recentActivity: Array<{
    id: number;
    type: string;
    description: string;
    timestamp: string;
    user: string;
  }>;
}

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'auction' | 'tablet' | 'bidding' | 'shop' | 'preview' | 'status'>('auction');
  const [activeControlTab, setActiveControlTab] = useState<'overview' | 'auctions' | 'users' | 'analytics'>('overview');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showCarModal, setShowCarModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // System status state
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    cpu: 45,
    memory: 62,
    storage: 78,
    network: 89,
    temperature: 42,
    uptime: '15d 7h 23m',
    activeUsers: 1247,
    totalAuctions: 89,
    activeBids: 342,
    revenue: 2847593,
    alerts: [
      { id: 1, type: 'warning', message: 'High memory usage detected on server 2', timestamp: '2 minutes ago' },
      { id: 2, type: 'success', message: 'Database backup completed successfully', timestamp: '15 minutes ago' },
      { id: 3, type: 'info', message: 'New user registration: john.doe@email.com', timestamp: '23 minutes ago' },
      { id: 4, type: 'error', message: 'Payment gateway timeout - investigating', timestamp: '1 hour ago' },
    ],
    services: [
      { name: 'Web Server', status: 'online', uptime: '99.9%', responseTime: 45 },
      { name: 'Database', status: 'online', uptime: '99.8%', responseTime: 23 },
      { name: 'Payment Gateway', status: 'maintenance', uptime: '98.5%', responseTime: 156 },
      { name: 'Email Service', status: 'online', uptime: '99.7%', responseTime: 89 },
      { name: 'File Storage', status: 'online', uptime: '99.9%', responseTime: 34 },
      { name: 'CDN', status: 'online', uptime: '99.6%', responseTime: 67 },
    ],
    recentActivity: [
      { id: 1, type: 'bid', description: 'New bid placed on 2023 BMW M3', timestamp: '2 minutes ago', user: 'alex.smith' },
      { id: 2, type: 'auction', description: 'Auction ended: 2022 Tesla Model S', timestamp: '5 minutes ago', user: 'system' },
      { id: 3, type: 'user', description: 'New user registered', timestamp: '8 minutes ago', user: 'jane.doe' },
      { id: 4, type: 'payment', description: 'Payment processed: $45,000', timestamp: '12 minutes ago', user: 'mike.wilson' },
      { id: 5, type: 'auction', description: 'New auction created: 2024 Porsche 911', timestamp: '18 minutes ago', user: 'sarah.johnson' },
    ]
  });

  const cars: Car[] = [
    {
      id: 1,
      name: "Model S Plaid",
      brand: "Tesla",
      year: 2023,
      price: 89999,
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      mileage: "5,420 miles",
      fuel: "Electric",
      transmission: "Automatic",
      condition: "Excellent",
      location: "Los Angeles, CA",
      seller: "Premium Motors",
      rating: 4.9,
      bids: 23,
      timeLeft: "2d 14h 32m",
      featured: true,
      category: "luxury",
      description: "Experience the pinnacle of electric performance with this pristine Tesla Model S Plaid. This vehicle represents the cutting edge of automotive technology.",
      features: ["Autopilot", "Premium Interior", "Supercharging", "Over-the-air updates"],
      history: ["Single owner", "Full service history", "No accidents"],
      inspection: {
        engine: "Excellent",
        transmission: "Excellent", 
        brakes: "Good",
        tires: "Excellent",
        interior: "Excellent",
        exterior: "Excellent",
        electronics: "Excellent",
        overall: "Excellent"
      }
    },
    {
      id: 2,
      name: "911 Turbo S",
      brand: "Porsche",
      year: 2022,
      price: 145000,
      image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800",
      mileage: "8,750 miles",
      fuel: "Gasoline",
      transmission: "PDK",
      condition: "Excellent",
      location: "Miami, FL",
      seller: "Exotic Auto Gallery",
      rating: 4.8,
      bids: 31,
      timeLeft: "1d 8h 45m",
      featured: true,
      category: "sports",
      description: "The ultimate expression of Porsche engineering. This 911 Turbo S delivers breathtaking performance with everyday usability.",
      features: ["Sport Chrono Package", "Carbon Fiber Interior", "PASM", "Sport Exhaust"],
      history: ["Dealer maintained", "Clean Carfax", "Non-smoker"],
      inspection: {
        engine: "Excellent",
        transmission: "Excellent",
        brakes: "Excellent", 
        tires: "Good",
        interior: "Excellent",
        exterior: "Good",
        electronics: "Excellent",
        overall: "Excellent"
      }
    },
    {
      id: 3,
      name: "M3 Competition",
      brand: "BMW",
      year: 2023,
      price: 72000,
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
      mileage: "12,300 miles",
      fuel: "Gasoline",
      transmission: "Automatic",
      condition: "Very Good",
      location: "New York, NY",
      seller: "Manhattan Motors",
      rating: 4.7,
      bids: 18,
      timeLeft: "3d 22h 15m",
      featured: false,
      category: "sports",
      description: "Pure driving excitement in sedan form. The M3 Competition offers track-ready performance with luxury comfort.",
      features: ["M Performance Package", "Carbon Fiber Trim", "Harman Kardon Audio", "Adaptive M Suspension"],
      history: ["One owner", "Garage kept", "Regular maintenance"],
      inspection: {
        engine: "Excellent",
        transmission: "Good",
        brakes: "Good",
        tires: "Fair",
        interior: "Very Good",
        exterior: "Very Good", 
        electronics: "Excellent",
        overall: "Very Good"
      }
    },
    {
      id: 4,
      name: "C63 S AMG",
      brand: "Mercedes",
      year: 2021,
      price: 68500,
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
      mileage: "18,900 miles",
      fuel: "Gasoline",
      transmission: "9G-Tronic",
      condition: "Very Good",
      location: "Chicago, IL",
      seller: "Windy City Autos",
      rating: 4.6,
      bids: 14,
      timeLeft: "5d 11h 28m",
      featured: false,
      category: "luxury",
      description: "Handcrafted by AMG, this C63 S delivers raw power and refined luxury in perfect harmony.",
      features: ["AMG Performance Package", "Burmester Audio", "AMG Track Pace", "Dynamic Select"],
      history: ["Certified Pre-Owned", "Extended warranty", "Service records available"],
      inspection: {
        engine: "Very Good",
        transmission: "Very Good",
        brakes: "Good",
        tires: "Good",
        interior: "Very Good",
        exterior: "Good",
        electronics: "Very Good", 
        overall: "Very Good"
      }
    },
    {
      id: 5,
      name: "R8 V10 Plus",
      brand: "Audi",
      year: 2020,
      price: 142000,
      image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800",
      mileage: "9,200 miles",
      fuel: "Gasoline", 
      transmission: "S-Tronic",
      condition: "Excellent",
      location: "Las Vegas, NV",
      seller: "Desert Luxury Motors",
      rating: 4.9,
      bids: 27,
      timeLeft: "4d 16h 42m",
      featured: true,
      category: "supercar",
      description: "The R8 V10 Plus represents Audi's flagship supercar, combining everyday usability with track-focused performance.",
      features: ["Carbon Fiber Package", "Ceramic Brakes", "Bang & Olufsen Audio", "Magnetic Ride"],
      history: ["Single owner", "Dealer serviced", "Garage kept"],
      inspection: {
        engine: "Excellent",
        transmission: "Excellent",
        brakes: "Excellent",
        tires: "Excellent", 
        interior: "Excellent",
        exterior: "Excellent",
        electronics: "Excellent",
        overall: "Excellent"
      }
    },
    {
      id: 6,
      name: "Mustang GT500",
      brand: "Ford",
      year: 2022,
      price: 78000,
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
      mileage: "6,800 miles",
      fuel: "Gasoline",
      transmission: "Dual-Clutch",
      condition: "Excellent",
      location: "Dallas, TX",
      seller: "Lone Star Performance",
      rating: 4.8,
      bids: 22,
      timeLeft: "2d 9h 17m",
      featured: false,
      category: "muscle",
      description: "American muscle at its finest. The GT500 delivers supercar performance with classic muscle car soul.",
      features: ["Track Package", "Recaro Seats", "Carbon Fiber Wheels", "Launch Control"],
      history: ["Adult owned", "Track maintained", "Performance modifications"],
      inspection: {
        engine: "Excellent",
        transmission: "Excellent",
        brakes: "Very Good",
        tires: "Good",
        interior: "Excellent",
        exterior: "Very Good",
        electronics: "Excellent",
        overall: "Excellent"
      }
    }
  ];

  const packages: Package[] = [
    {
      id: 1,
      name: "Basic Listing",
      price: 29,
      duration: "7 days",
      features: ["Standard listing", "5 photos", "Basic description", "Email support"],
      popular: false,
      color: "blue"
    },
    {
      id: 2,
      name: "Premium Listing",
      price: 79,
      duration: "14 days",
      features: ["Featured listing", "15 photos", "Detailed description", "Priority support", "Social media promotion"],
      popular: true,
      color: "purple"
    },
    {
      id: 3,
      name: "Elite Showcase",
      price: 149,
      duration: "30 days",
      features: ["Top placement", "Unlimited photos", "Video showcase", "Dedicated support", "Professional photography", "Marketing campaign"],
      popular: false,
      color: "orange"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate real-time system status updates
      setSystemStatus(prev => ({
        ...prev,
        cpu: Math.max(20, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(95, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(50, Math.min(100, prev.network + (Math.random() - 0.5) * 5)),
        temperature: Math.max(35, Math.min(65, prev.temperature + (Math.random() - 0.5) * 3)),
        activeUsers: Math.max(1000, Math.min(2000, prev.activeUsers + Math.floor((Math.random() - 0.5) * 20))),
        activeBids: Math.max(200, Math.min(500, prev.activeBids + Math.floor((Math.random() - 0.5) * 10))),
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'year':
        return b.year - a.year;
      case 'bids':
        return b.bids - a.bids;
      default:
        return b.featured ? 1 : -1;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-400';
      case 'offline': return 'text-red-400';
      case 'maintenance': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return <CheckCircle className="w-4 h-4" />;
      case 'offline': return <XCircle className="w-4 h-4" />;
      case 'maintenance': return <AlertCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-400" />;
      default: return <AlertCircle className="w-4 h-4 text-blue-400" />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'bid': return <Gavel className="w-4 h-4 text-orange-400" />;
      case 'auction': return <Car className="w-4 h-4 text-blue-400" />;
      case 'user': return <Users className="w-4 h-4 text-green-400" />;
      case 'payment': return <DollarSign className="w-4 h-4 text-purple-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const renderAuctionView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="glass rounded-2xl p-8 mb-8 auction-glow animate-slide-down">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Elite Car Auctions</h1>
                <p className="text-slate-400">Premium vehicles, exceptional experiences</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{currentTime.toLocaleTimeString()}</div>
              <div className="text-slate-400">{currentTime.toLocaleDateString()}</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 min-w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cars, brands, models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              <option value="all">All Categories</option>
              <option value="luxury">Luxury</option>
              <option value="sports">Sports</option>
              <option value="supercar">Supercar</option>
              <option value="muscle">Muscle</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year">Newest First</option>
              <option value="bids">Most Bids</option>
            </select>
            <div className="flex bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {sortedCars.map((car, index) => (
            <div
              key={car.id}
              className="glass rounded-2xl overflow-hidden card-hover enhanced-car-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedCar(car);
                setShowCarModal(true);
              }}
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                {car.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {car.timeLeft}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  <Gavel className="w-4 h-4 inline mr-1" />
                  {car.bids} bids
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{car.year} {car.brand} {car.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{car.rating}</span>
                  </div>
                </div>

                <div className="text-2xl font-bold gradient-text mb-4">
                  ${car.price.toLocaleString()}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-slate-400 mb-4">
                  <div className="flex items-center">
                    <Gauge className="w-4 h-4 mr-2" />
                    {car.mileage}
                  </div>
                  <div className="flex items-center">
                    <Fuel className="w-4 h-4 mr-2" />
                    {car.fuel}
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {car.location}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">
                    Seller: {car.seller}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all">
                      <Heart className="w-4 h-4 text-slate-400 hover:text-red-400" />
                    </button>
                    <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all">
                      <Eye className="w-4 h-4 text-slate-400 hover:text-blue-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {[
            { label: 'Active Auctions', value: '89', icon: Car, color: 'blue' },
            { label: 'Total Bids', value: '1,247', icon: Gavel, color: 'orange' },
            { label: 'Registered Users', value: '15,432', icon: Users, color: 'green' },
            { label: 'Cars Sold', value: '2,891', icon: TrendingUp, color: 'purple' }
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center enhanced-status-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`inline-flex p-3 rounded-xl bg-${stat.color}-500/20 mb-3`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabletView = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-800 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 tablet-glow animate-slide-down">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl animate-float">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">Tablet Control Center</h1>
                <p className="text-slate-400 text-lg">Advanced auction management interface</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{currentTime.toLocaleTimeString()}</div>
              <div className="text-slate-400">{currentTime.toLocaleDateString()}</div>
            </div>
          </div>

          {/* Control Tabs */}
          <div className="flex space-x-2 mb-8 bg-slate-800/30 rounded-2xl p-2">
            {[
              { id: 'overview', label: 'Overview', icon: Monitor },
              { id: 'auctions', label: 'Auctions', icon: Car },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveControlTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 rounded-xl transition-all enhanced-tab ${
                  activeControlTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {activeControlTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Active Auctions', value: '89', change: '+12%', icon: Car, color: 'blue' },
                  { title: 'Total Revenue', value: '$2.8M', change: '+23%', icon: DollarSign, color: 'green' },
                  { title: 'Active Users', value: '1,247', change: '+8%', icon: Users, color: 'purple' },
                  { title: 'Pending Bids', value: '342', change: '+15%', icon: Gavel, color: 'orange' },
                  { title: 'Completed Sales', value: '156', change: '+19%', icon: TrendingUp, color: 'emerald' },
                  { title: 'Average Price', value: '$45K', change: '+5%', icon: Award, color: 'pink' }
                ].map((metric, index) => (
                  <div key={index} className="enhanced-status-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-${metric.color}-500/20 rounded-xl`}>
                        <metric.icon className={`w-6 h-6 text-${metric.color}-400`} />
                      </div>
                      <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                        metric.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-slate-400">{metric.title}</div>
                  </div>
                ))}
              </div>
            )}

            {activeControlTab === 'auctions' && (
              <div className="space-y-4">
                {cars.slice(0, 4).map((car, index) => (
                  <div key={car.id} className="enhanced-status-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center space-x-4">
                      <img src={car.image} alt={car.name} className="w-20 h-20 rounded-xl object-cover" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white">{car.year} {car.brand} {car.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                          <span className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            ${car.price.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Gavel className="w-4 h-4 mr-1" />
                            {car.bids} bids
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {car.timeLeft}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="enhanced-control-button p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl transition-all">
                          <Eye className="w-5 h-5 text-blue-400" />
                        </button>
                        <button className="enhanced-control-button p-3 bg-green-500/20 hover:bg-green-500/30 rounded-xl transition-all">
                          <Edit className="w-5 h-5 text-green-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeControlTab === 'users' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="enhanced-status-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Recent Registrations</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Alex Johnson', email: 'alex@email.com', time: '2 min ago' },
                      { name: 'Sarah Wilson', email: 'sarah@email.com', time: '15 min ago' },
                      { name: 'Mike Davis', email: 'mike@email.com', time: '1 hour ago' },
                      { name: 'Emma Brown', email: 'emma@email.com', time: '2 hours ago' }
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
                        <div>
                          <div className="font-medium text-white">{user.name}</div>
                          <div className="text-sm text-slate-400">{user.email}</div>
                        </div>
                        <div className="text-sm text-slate-400">{user.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="enhanced-status-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Top Bidders</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'John Smith', bids: 23, amount: '$145K' },
                      { name: 'Lisa Chen', bids: 18, amount: '$98K' },
                      { name: 'David Miller', bids: 15, amount: '$87K' },
                      { name: 'Anna Garcia', bids: 12, amount: '$76K' }
                    ].map((bidder, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
                        <div>
                          <div className="font-medium text-white">{bidder.name}</div>
                          <div className="text-sm text-slate-400">{bidder.bids} bids</div>
                        </div>
                        <div className="text-lg font-bold gradient-text">{bidder.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeControlTab === 'analytics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="enhanced-status-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Revenue Trends</h3>
                  <div className="h-48 flex items-end justify-between space-x-2">
                    {[65, 78, 82, 95, 88, 92, 100].map((height, index) => (
                      <div key={index} className="flex-1 bg-gradient-to-t from-purple-500 to-indigo-600 rounded-t-lg animate-expand" style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-slate-400 mt-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                <div className="enhanced-status-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Category Performance</h3>
                  <div className="space-y-4">
                    {[
                      { category: 'Luxury', percentage: 85, color: 'purple' },
                      { category: 'Sports', percentage: 72, color: 'blue' },
                      { category: 'Supercar', percentage: 68, color: 'orange' },
                      { category: 'Muscle', percentage: 45, color: 'green' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white">{item.category}</span>
                          <span className="text-slate-400">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-2 rounded-full animate-expand`}
                            style={{ width: `${item.percentage}%`, animationDelay: `${index * 0.2}s` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBiddingView = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-slate-800 to-red-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8 bidding-glow animate-slide-down">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl animate-bounce-subtle">
                <Gavel className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">Live Bidding Arena</h1>
                <p className="text-slate-400 text-lg">Real-time auction excitement</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white animate-countdown">{currentTime.toLocaleTimeString()}</div>
              <div className="text-slate-400">{currentTime.toLocaleDateString()}</div>
            </div>
          </div>

          {/* Featured Auction */}
          <div className="enhanced-status-card rounded-2xl p-8 mb-8 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Featured Auction</h2>
              <div className="flex items-center space-x-4">
                <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium animate-pulse-glow">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Ending Soon: 2h 15m
                </div>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                  <Activity className="w-4 h-4 inline mr-2" />
                  Live: 47 bidders
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Featured Car"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-2">2023 Tesla Model S Plaid</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <Gauge className="w-4 h-4 mr-2" />
                      5,420 miles
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Electric
                    </div>
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Automatic
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Los Angeles, CA
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">$89,999</div>
                  <div className="text-slate-400">Current Highest Bid</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl">
                    <span className="text-white">Starting Bid</span>
                    <span className="text-slate-400">$75,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl">
                    <span className="text-white">Reserve Price</span>
                    <span className="text-green-400">Met</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl">
                    <span className="text-white">Total Bids</span>
                    <span className="text-orange-400">23</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    type="number"
                    placeholder="Enter your bid..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                  <button className="w-full enhanced-button bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105">
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bids */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="enhanced-status-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Bids
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                {[
                  { bidder: 'Alex M.', amount: '$89,999', time: '2 seconds ago', status: 'winning' },
                  { bidder: 'Sarah K.', amount: '$89,500', time: '1 minute ago', status: 'outbid' },
                  { bidder: 'Mike R.', amount: '$89,000', time: '3 minutes ago', status: 'outbid' },
                  { bidder: 'Emma L.', amount: '$88,500', time: '5 minutes ago', status: 'outbid' },
                  { bidder: 'John D.', amount: '$88,000', time: '8 minutes ago', status: 'outbid' },
                  { bidder: 'Lisa C.', amount: '$87,500', time: '12 minutes ago', status: 'outbid' }
                ].map((bid, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-xl animate-slide-in-right ${
                    bid.status === 'winning' ? 'bg-green-500/20 border border-green-500/30' : 'bg-slate-800/30'
                  }`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div>
                      <div className="font-medium text-white">{bid.bidder}</div>
                      <div className="text-sm text-slate-400">{bid.time}</div>
                    </div>
                    <div className={`text-lg font-bold ${bid.status === 'winning' ? 'text-green-400' : 'text-slate-300'}`}>
                      {bid.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="enhanced-status-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Active Bidders
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Alex Martinez', bids: 8, avatar: '🏆' },
                  { name: 'Sarah Kim', bids: 6, avatar: '🥈' },
                  { name: 'Mike Rodriguez', bids: 5, avatar: '🥉' },
                  { name: 'Emma Liu', bids: 4, avatar: '⭐' },
                  { name: 'John Davis', bids: 3, avatar: '🎯' }
                ].map((bidder, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{bidder.avatar}</div>
                      <div>
                        <div className="font-medium text-white">{bidder.name}</div>
                        <div className="text-sm text-slate-400">{bidder.bids} bids placed</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderShopView = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-800 to-orange-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="glass rounded-2xl p-8 mb-8 shop-glow animate-slide-down">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-orange-600 rounded-xl animate-float">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Auction Packages</h1>
                <p className="text-slate-400">Choose the perfect listing package for your vehicle</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{currentTime.toLocaleTimeString()}</div>
              <div className="text-slate-400">{currentTime.toLocaleDateString()}</div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl text-slate-300 mb-2">Maximize your vehicle's exposure with our premium listing packages</h2>
            <p className="text-slate-400">Professional photography, marketing, and dedicated support included</p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`glass rounded-2xl p-8 card-hover enhanced-package-card animate-slide-up ${
                pkg.popular ? 'ring-2 ring-purple-500/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 text-center animate-pulse-glow">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold gradient-text mb-2">${pkg.price}</div>
                <div className="text-slate-400">{pkg.duration}</div>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-slate-300">
                    <CheckCircle className={`w-5 h-5 mr-3 text-${pkg.color}-400`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full enhanced-button bg-gradient-to-r from-${pkg.color}-500 to-${pkg.color}-600 hover:from-${pkg.color}-600 hover:to-${pkg.color}-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105`}>
                Choose Package
              </button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="glass rounded-2xl p-8 shop-glow animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Package Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-slate-400">Features</th>
                  <th className="text-center py-4 px-6 text-white">Basic</th>
                  <th className="text-center py-4 px-6 text-white">Premium</th>
                  <th className="text-center py-4 px-6 text-white">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Listing Duration', basic: '7 days', premium: '14 days', elite: '30 days' },
                  { feature: 'Photo Uploads', basic: '5 photos', premium: '15 photos', elite: 'Unlimited' },
                  { feature: 'Video Showcase', basic: '❌', premium: '❌', elite: '✅' },
                  { feature: 'Featured Placement', basic: '❌', premium: '✅', elite: '✅' },
                  { feature: 'Social Media Promotion', basic: '❌', premium: '✅', elite: '✅' },
                  { feature: 'Professional Photography', basic: '❌', premium: '❌', elite: '✅' },
                  { feature: 'Dedicated Support', basic: '❌', premium: '❌', elite: '✅' },
                  { feature: 'Marketing Campaign', basic: '❌', premium: '❌', elite: '✅' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-all">
                    <td className="py-4 px-6 text-slate-300 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-slate-400">{row.basic}</td>
                    <td className="py-4 px-6 text-center text-slate-400">{row.premium}</td>
                    <td className="py-4 px-6 text-center text-slate-400">{row.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="glass rounded-2xl p-6 animate-slide-in-left">
            <h3 className="text-xl font-bold text-white mb-4">Success Stories</h3>
            <div className="space-y-4">
              {[
                { name: 'John Smith', car: '2022 Porsche 911', package: 'Elite', result: 'Sold 15% above reserve' },
                { name: 'Sarah Johnson', car: '2021 Tesla Model S', package: 'Premium', result: 'Sold in 3 days' },
                { name: 'Mike Wilson', car: '2020 BMW M3', package: 'Elite', result: '47 bids received' }
              ].map((story, index) => (
                <div key={index} className="p-4 bg-slate-800/30 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-white">{story.name}</div>
                    <div className="text-sm text-purple-400">{story.package}</div>
                  </div>
                  <div className="text-sm text-slate-400 mb-1">{story.car}</div>
                  <div className="text-sm text-green-400">{story.result}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 animate-slide-in-right">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Platform?</h3>
            <div className="space-y-4">
              {[
                { icon: Users, title: 'Large Audience', desc: '15,000+ active buyers' },
                { icon: Shield, title: 'Secure Transactions', desc: 'Protected payments & transfers' },
                { icon: Award, title: 'Expert Support', desc: 'Dedicated auction specialists' },
                { icon: TrendingUp, title: 'Higher Prices', desc: 'Average 12% above market value' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{benefit.title}</div>
                    <div className="text-sm text-slate-400">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreviewView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-purple-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-8 preview-glow animate-slide-down">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl animate-float">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">System Preview</h1>
                <p className="text-slate-400 text-lg">Real-time system monitoring and analytics</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white">{currentTime.toLocaleTimeString()}</div>
              <div className="text-slate-400">{currentTime.toLocaleDateString()}</div>
            </div>
          </div>

          {/* System Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'System Health', value: '98.5%', icon: Activity, color: 'green', trend: '+0.2%' },
              { label: 'Active Sessions', value: '1,247', icon: Users, color: 'blue', trend: '+12%' },
              { label: 'Response Time', value: '45ms', icon: Zap, color: 'yellow', trend: '-5ms' },
              { label: 'Uptime', value: '99.9%', icon: Clock, color: 'purple', trend: '+0.1%' }
            ].map((metric, index) => (
              <div key={index} className="enhanced-status-card rounded-2xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${metric.color}-500/20 rounded-xl`}>
                    <metric.icon className={`w-6 h-6 text-${metric.color}-400`} />
                  </div>
                  <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                    metric.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {metric.trend}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-slate-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="enhanced-status-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Server Performance</h3>
              <div className="space-y-4">
                {[
                  { label: 'CPU Usage', value: systemStatus.cpu, color: 'blue' },
                  { label: 'Memory Usage', value: systemStatus.memory, color: 'purple' },
                  { label: 'Storage Usage', value: systemStatus.storage, color: 'orange' },
                  { label: 'Network Usage', value: systemStatus.network, color: 'green' }
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white">{metric.label}</span>
                      <span className="text-slate-400">{metric.value}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 h-2 rounded-full animate-expand`}
                        style={{ width: `${metric.value}%`, animationDelay: `${index * 0.2}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="enhanced-status-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Traffic Analytics</h3>
              <div className="h-48 flex items-end justify-between space-x-2">
                {[45, 62, 78, 85, 92, 88, 95, 89, 76, 82, 90, 100].map((height, index) => (
                  <div key={index} className="flex-1 bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg animate-expand" style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>12AM</span>
                <span>6AM</span>
                <span>12PM</span>
                <span>6PM</span>
              </div>
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="enhanced-status-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Live Activity Feed
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
              {[
                { type: 'auction', message: 'New auction started: 2024 Lamborghini Huracán', time: '2 seconds ago', user: 'system' },
                { type: 'bid', message: 'Bid placed on Tesla Model S Plaid: $91,000', time: '15 seconds ago', user: 'alex.martinez' },
                { type: 'user', message: 'New user registration from New York', time: '1 minute ago', user: 'sarah.kim' },
                { type: 'payment', message: 'Payment processed: $145,000 for Porsche 911', time: '2 minutes ago', user: 'mike.rodriguez' },
                { type: 'auction', message: 'Auction ended: BMW M3 Competition sold for $72,500', time: '5 minutes ago', user: 'system' },
                { type: 'bid', message: 'Reserve price met on Mercedes C63 S AMG', time: '8 minutes ago', user: 'emma.liu' }
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-xl animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm">{activity.message}</div>
                    <div className="text-slate-400 text-xs mt-1">
                      {activity.time} • {activity.user}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStatusView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="glass rounded-2xl p-8 mb-8 animate-slide-down">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl animate-float">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold gradient-text">System Status Dashboard</h1>
                <p className="text-slate-400 text-lg">Real-time monitoring and system health overview</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white animate-pulse">{currentTime.toLocaleTimeString()}</div>
              <div className="text-slate-400">{currentTime.toLocaleDateString()}</div>
              <div className="text-sm text-emerald-400 mt-1">
                <div className="flex items-center justify-end">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                  System Online
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Uptime', value: systemStatus.uptime, icon: Clock, color: 'emerald' },
              { label: 'Active Users', value: systemStatus.activeUsers.toLocaleString(), icon: Users, color: 'blue' },
              { label: 'System Temp', value: `${systemStatus.temperature}°C`, icon: Thermometer, color: 'orange' },
              { label: 'Revenue Today', value: `$${(systemStatus.revenue / 1000).toFixed(0)}K`, icon: DollarSign, color: 'purple' }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 enhanced-status-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 bg-${stat.color}-500/20 rounded-lg`}>
                    <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Performance */}
          <div className="lg:col-span-2 space-y-8">
            {/* Performance Metrics */}
            <div className="glass rounded-2xl p-6 enhanced-status-card animate-slide-up">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-blue-400" />
                System Performance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'CPU Usage', value: systemStatus.cpu, color: 'blue', icon: Zap },
                  { label: 'Memory Usage', value: systemStatus.memory, color: 'purple', icon: Activity },
                  { label: 'Storage Usage', value: systemStatus.storage, color: 'orange', icon: Shield },
                  { label: 'Network Usage', value: systemStatus.network, color: 'emerald', icon: Wifi }
                ].map((metric, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <metric.icon className={`w-4 h-4 text-${metric.color}-400`} />
                        <span className="text-white font-medium">{metric.label}</span>
                      </div>
                      <span className={`text-${metric.color}-400 font-bold`}>{metric.value}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-400 h-3 rounded-full animate-expand transition-all duration-1000`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-slate-400">
                      {metric.value < 70 ? 'Normal' : metric.value < 85 ? 'High' : 'Critical'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Status */}
            <div className="glass rounded-2xl p-6 enhanced-status-card animate-slide-up">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-emerald-400" />
                Services Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {systemStatus.services.map((service, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={getStatusColor(service.status)}>
                          {getStatusIcon(service.status)}
                        </div>
                        <span className="text-white font-medium">{service.name}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.status === 'online' ? 'bg-emerald-500/20 text-emerald-400' :
                        service.status === 'maintenance' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {service.status.toUpperCase()}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-slate-400">Uptime</div>
                        <div className="text-white font-medium">{service.uptime}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">Response</div>
                        <div className="text-white font-medium">{service.responseTime}ms</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass rounded-2xl p-6 enhanced-status-card animate-slide-up">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-orange-400" />
                Recent Activity
              </h2>
              <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {systemStatus.recentActivity.map((activity, index) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-800/30 rounded-xl animate-slide-in-right" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="p-2 bg-slate-700/50 rounded-lg">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium">{activity.description}</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center space-x-2">
                        <span>{activity.timestamp}</span>
                        <span>•</span>
                        <span className="text-blue-400">{activity.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* System Alerts */}
            <div className="glass rounded-2xl p-6 enhanced-status-card animate-slide-up">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
                System Alerts
              </h2>
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                {systemStatus.alerts.map((alert, index) => (
                  <div key={alert.id} className={`p-3 rounded-xl border animate-slide-in-left ${
                    alert.type === 'error' ? 'bg-red-500/10 border-red-500/30' :
                    alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
                    alert.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30' :
                    'bg-blue-500/10 border-blue-500/30'
                  }`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-2">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm">{alert.message}</div>
                        <div className="text-slate-400 text-xs mt-1">{alert.timestamp}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-2xl p-6 enhanced-status-card animate-slide-up">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Restart Services', icon: RotateCcw, color: 'blue' },
                  { label: 'Clear Cache', icon: Trash, color: 'orange' },
                  { label: 'Backup Database', icon: Shield, color: 'emerald' },
                  { label: 'View Logs', icon: FileText, color: 'purple' }
                ].map((action, index) => (
                  <button key={index} className={`w-full enhanced-control-button flex items-center space-x-3 p-3 bg-${action.color}-500/10 hover:bg-${action.color}-500/20 border border-${action.color}-500/30 rounded-xl transition-all animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <action.icon className={`w-4 h-4 text-${action.color}-400`} />
                    <span className="text-white font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* System Info */}
            <div className="glass rounded-2xl p-6 enhanced-status-card animate-slide-up">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-blue-400" />
                System Information
              </h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Server Version', value: 'v2.4.1' },
                  { label: 'Database Version', value: 'PostgreSQL 14.2' },
                  { label: 'Node.js Version', value: 'v18.17.0' },
                  { label: 'Last Backup', value: '2 hours ago' },
                  { label: 'Next Maintenance', value: 'Sunday 2:00 AM' }
                ].map((info, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-slate-800/30 rounded-lg animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-slate-400">{info.label}</span>
                    <span className="text-white font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCarModal = () => {
    if (!selectedCar || !showCarModal) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
        <div className="glass rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-glow animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold gradient-text">
              {selectedCar.year} {selectedCar.brand} {selectedCar.name}
            </h2>
            <button
              onClick={() => setShowCarModal(false)}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center text-slate-400">
                    <Gauge className="w-4 h-4 mr-2" />
                    Mileage: {selectedCar.mileage}
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Fuel className="w-4 h-4 mr-2" />
                    Fuel: {selectedCar.fuel}
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Settings className="w-4 h-4 mr-2" />
                    Transmission: {selectedCar.transmission}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    Location: {selectedCar.location}
                  </div>
                  <div className="flex items-center text-slate-400">
                    <User className="w-4 h-4 mr-2" />
                    Seller: {selectedCar.seller}
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Star className="w-4 h-4 mr-2 fill-current text-yellow-400" />
                    Rating: {selectedCar.rating}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold gradient-text mb-2">
                  ${selectedCar.price.toLocaleString()}
                </div>
                <div className="text-slate-400">Current Price</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl">
                  <span className="text-white">Total Bids</span>
                  <span className="text-orange-400 font-bold">{selectedCar.bids}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl">
                  <span className="text-white">Time Left</span>
                  <span className="text-red-400 font-bold">{selectedCar.timeLeft}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded-xl">
                  <span className="text-white">Condition</span>
                  <span className="text-green-400 font-bold">{selectedCar.condition}</span>
                </div>
              </div>

              <div className="space-y-3">
                <input
                  type="number"
                  placeholder="Enter your bid..."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button className="w-full enhanced-button bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105">
                  Place Bid
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="enhanced-button bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-xl transition-all">
                    <Heart className="w-4 h-4 inline mr-2" />
                    Save
                  </button>
                  <button className="enhanced-button bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-xl transition-all">
                    <Share className="w-4 h-4 inline mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Description</h3>
            <p className="text-slate-300 mb-6">{selectedCar.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Features</h4>
                <div className="space-y-2">
                  {selectedCar.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-3">Vehicle History</h4>
                <div className="space-y-2">
                  {selectedCar.history.map((item, index) => (
                    <div key={index} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="glass rounded-2xl p-2 flex space-x-2 animate-slide-down">
          {[
            { id: 'auction', label: 'Auction', icon: Car },
            { id: 'tablet', label: 'Control', icon: Smartphone },
            { id: 'bidding', label: 'Bidding', icon: Gavel },
            { id: 'shop', label: 'Packages', icon: ShoppingBag },
            { id: 'preview', label: 'Preview', icon: Monitor },
            { id: 'status', label: 'Status', icon: Activity }
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id as any)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all enhanced-tab ${
                activeView === view.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <view.icon className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">{view.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {activeView === 'auction' && renderAuctionView()}
        {activeView === 'tablet' && renderTabletView()}
        {activeView === 'bidding' && renderBiddingView()}
        {activeView === 'shop' && renderShopView()}
        {activeView === 'preview' && renderPreviewView()}
        {activeView === 'status' && renderStatusView()}
      </main>

      {/* Car Modal */}
      {renderCarModal()}
    </div>
  );
};

export default App;