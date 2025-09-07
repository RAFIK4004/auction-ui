import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Gavel, 
  ShoppingCart, 
  Settings, 
  Users, 
  DollarSign, 
  Clock, 
  Trophy, 
  TrendingUp, 
  Activity,
  Zap,
  Shield,
  Wifi,
  Server,
  Database,
  Monitor,
  Cpu,
  HardDrive,
  BarChart3,
  Eye,
  Play,
  Pause,
  RotateCcw,
  Power,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Heart,
  Bookmark,
  Filter,
  Search,
  Grid,
  List,
  SortAsc,
  Package,
  CreditCard,
  Truck,
  MapPin,
  Calendar,
  Bell,
  User,
  Mail,
  Phone,
  Globe,
  Lock,
  Unlock,
  Download,
  Upload,
  Share2,
  Copy,
  Edit,
  Trash2,
  Plus,
  RefreshCw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  MoreHorizontal,
  Info,
  HelpCircle,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Home,
  Menu,
  Layers,
  Target,
  Crosshair,
  Navigation,
  Compass,
  Map,
  Route,
  Flag,
  Award,
  Medal,
  Crown,
  Gem,
  Sparkles,
  Flame,
  Bolt,
  Lightning,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Snowflake,
  Wind,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  AlarmClock,
  Hourglass,
  Calendar as CalendarIcon,
  Clock3,
  Clock9,
  Clock12,
  Sunrise,
  Sunset,
  Mountain,
  Trees,
  Waves,
  Flower,
  Leaf,
  Feather,
  Butterfly,
  Fish,
  Bird,
  Rabbit,
  Turtle,
  Elephant,
  Lion,
  Tiger,
  Bear,
  Wolf,
  Fox,
  Deer,
  Horse,
  Dog,
  Cat,
  Mouse,
  Hamster,
  Squirrel,
  Hedgehog,
  Owl,
  Eagle,
  Dove,
  Penguin,
  Flamingo,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Parrot,
  Toucan,
  Hummingbird,
  Bat,
  Spider,
  Ant,
  Bee,
  Ladybug,
  Dragonfly,
  Butterfly as ButterflyIcon,
  Worm,
  Snail,
  Shell,
  Crab,
  Lobster,
  Shrimp,
  Octopus,
  Jellyfish,
  Starfish,
  Seahorse,
  Whale,
  Dolphin,
  Shark,
  Stingray,
  Swordfish,
  Anchor,
  Ship,
  Sailboat,
  Submarine,
  Plane,
  Helicopter,
  Rocket,
  Satellite,
  Ufo,
  Train,
  Bus,
  Truck as TruckIcon,
  Bike,
  Scooter,
  Motorcycle,
  CarFront,
  Fuel,
  ParkingCircle,
  TrafficCone,
  Construction,
  Wrench,
  Hammer,
  Screwdriver,
  Drill,
  Saw,
  Scissors,
  Ruler,
  Pencil,
  Pen,
  Paintbrush,
  Palette,
  Camera,
  Video,
  Film,
  Music,
  Headphones,
  Speaker,
  Microphone,
  Radio,
  Tv,
  Monitor as MonitorIcon,
  Laptop,
  Tablet,
  Smartphone,
  Watch,
  Gamepad2,
  Joystick,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Spade,
  Club,
  Diamond,
  Heart as HeartIcon,
  Puzzle,
  Target as TargetIcon,
  Crosshair as CrosshairIcon,
  Scope,
  Sword,
  Shield as ShieldIcon,
  Axe,
  Bow,
  Zap as ZapIcon,
  Flame as FlameIcon,
  Snowflake as SnowflakeIcon,
  Droplet,
  Droplets,
  Umbrella,
  UmbrellaBeach,
  Glasses,
  Sunglasses,
  Hat,
  Crown as CrownIcon,
  Shirt,
  Jacket,
  Tie,
  Shoe,
  Sock,
  Glove,
  Ring,
  Necklace,
  Earrings,
  Watch as WatchIcon,
  Briefcase,
  Backpack,
  Handbag,
  Wallet,
  CreditCard as CreditCardIcon,
  Coins,
  Banknote,
  Receipt,
  Calculator,
  Abacus,
  Scale,
  Balance,
  Magnet,
  Microscope,
  Telescope,
  Beaker,
  TestTube,
  Dna,
  Atom,
  Molecule,
  Pill,
  Syringe,
  Stethoscope,
  Thermometer as ThermometerIcon,
  Bandage,
  FirstAid,
  Cross,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Equal,
  Percent,
  Hash,
  AtSign,
  Ampersand,
  Quote,
  Apostrophe,
  Comma,
  Period,
  Semicolon,
  Colon,
  Question,
  Exclamation,
  Slash,
  Backslash,
  Pipe,
  Underscore,
  Hyphen,
  Tilde,
  Caret,
  Asterisk,
  Dollar,
  Euro,
  Pound,
  Yen,
  Ruble,
  Rupee,
  Won,
  Shekel,
  Franc,
  Lira,
  Peso,
  Real,
  Rand,
  Krona,
  Krone,
  Zloty,
  Forint,
  Koruna,
  Leu,
  Lev,
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
  Afghani,
  Rial,
  Toman,
  Nakfa,
  Birr,
  Shilling,
  Pula,
  Lilangeni,
  Maloti,
  Ariary,
  Ouguiya,
  Dobra,
  Escudo,
  Metical,
  Kwanza,
  Cedi,
  Dalasi,
  Leone,
  Naira,
  Franc as FrancIcon,
  Dinar as DinarIcon,
  Pound as PoundIcon,
  Shilling as ShillingIcon,
  Peso as PesoIcon,
  Quetzal,
  Cordoba,
  Colon,
  Balboa,
  Lempira,
  Gourde,
  Dollar as DollarIcon,
  Peso as PesoIconAlt,
  Real as RealIcon,
  Sol,
  Boliviano,
  Guarani,
  Uruguayo,
  Peso as PesoIconUruguay,
  Peso as PesoIconChile,
  Peso as PesoIconColombia,
  Sucre,
  Bolivar,
  Guyana,
  Suriname,
  FrenchGuiana,
  Falkland,
  SouthGeorgia,
  Bouvet,
  HeardMcDonald,
  BritishIndianOcean,
  ChristmasIsland,
  CocosIslands,
  Norfolk,
  Pitcairn,
  SaintHelena,
  Tokelau,
  WallisAndFutuna,
  Mayotte,
  Reunion,
  FrenchSouthern,
  Antarctica,
  SvalbardJanMayen,
  UnitedStatesMinorOutlying
} from 'lucide-react';

interface Car {
  id: number;
  name: string;
  image: string;
  currentBid: number;
  timeLeft: string;
  bids: number;
  category: string;
  year: number;
  mileage: string;
  condition: string;
  seller: string;
  location: string;
  description: string;
  features: string[];
  images: string[];
  reservePrice?: number;
  buyNowPrice?: number;
  startingBid: number;
  bidHistory: Array<{
    bidder: string;
    amount: number;
    time: string;
  }>;
  specifications: {
    engine: string;
    transmission: string;
    fuelType: string;
    drivetrain: string;
    color: string;
    interior: string;
    vin: string;
  };
}

interface ShopItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface Package {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  color: string;
  icon: React.ReactNode;
  description: string;
}

const CarsAuctionSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'auction' | 'shop' | 'control'>('auction');
  const [controlTab, setControlTab] = useState<'status' | 'bidding'>('status');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [bidAmount, setBidAmount] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('ending');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Array<{id: number, message: string, type: 'success' | 'error' | 'info'}>>([]);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [systemStats, setSystemStats] = useState({
    activeAuctions: 24,
    totalBids: 1247,
    onlineUsers: 89,
    serverLoad: 67,
    uptime: '99.8%',
    revenue: 125430,
    avgBidTime: '2.3s',
    successRate: '94.2%'
  });

  // Sample data
  const sampleCars: Car[] = [
    {
      id: 1,
      name: "2019 BMW M4 Competition",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      currentBid: 45000,
      timeLeft: "2h 15m",
      bids: 23,
      category: "Sports",
      year: 2019,
      mileage: "15,000 miles",
      condition: "Excellent",
      seller: "Premium Motors",
      location: "Los Angeles, CA",
      description: "Pristine BMW M4 Competition with full service history. This vehicle has been meticulously maintained and features all original components.",
      features: ["Carbon Fiber Roof", "M Performance Exhaust", "Adaptive Suspension", "Premium Sound System"],
      images: [
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      reservePrice: 42000,
      buyNowPrice: 52000,
      startingBid: 35000,
      bidHistory: [
        { bidder: "User123", amount: 45000, time: "2 min ago" },
        { bidder: "CarLover", amount: 44000, time: "5 min ago" },
        { bidder: "SpeedDemon", amount: 43000, time: "8 min ago" }
      ],
      specifications: {
        engine: "3.0L Twin-Turbo I6",
        transmission: "8-Speed Automatic",
        fuelType: "Gasoline",
        drivetrain: "RWD",
        color: "Alpine White",
        interior: "Black Leather",
        vin: "WBS8M9C55K5G12345"
      }
    },
    {
      id: 2,
      name: "2020 Audi RS6 Avant",
      image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800",
      currentBid: 78000,
      timeLeft: "1h 45m",
      bids: 31,
      category: "Luxury",
      year: 2020,
      mileage: "8,500 miles",
      condition: "Like New",
      seller: "Audi Specialist",
      location: "Miami, FL",
      description: "Stunning RS6 Avant in perfect condition. One owner vehicle with comprehensive warranty remaining.",
      features: ["Dynamic Package", "Carbon Styling", "Bang & Olufsen Audio", "Panoramic Roof"],
      images: [
        "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      reservePrice: 75000,
      buyNowPrice: 85000,
      startingBid: 65000,
      bidHistory: [
        { bidder: "AudiEnthusiast", amount: 78000, time: "1 min ago" },
        { bidder: "WagonLover", amount: 77000, time: "3 min ago" }
      ],
      specifications: {
        engine: "4.0L Twin-Turbo V8",
        transmission: "8-Speed Tiptronic",
        fuelType: "Gasoline",
        drivetrain: "AWD",
        color: "Nardo Gray",
        interior: "Black Valcona Leather",
        vin: "WAUZZZ4G5LN123456"
      }
    },
    {
      id: 3,
      name: "2018 Porsche 911 GT3",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
      currentBid: 125000,
      timeLeft: "3h 30m",
      bids: 45,
      category: "Sports",
      year: 2018,
      mileage: "12,000 miles",
      condition: "Excellent",
      seller: "Porsche Classics",
      location: "New York, NY",
      description: "Track-focused GT3 with manual transmission. Rare find in exceptional condition with track package.",
      features: ["Manual Transmission", "Track Package", "Roll Cage", "Racing Seats"],
      images: [
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      reservePrice: 120000,
      buyNowPrice: 140000,
      startingBid: 100000,
      bidHistory: [
        { bidder: "TrackDay", amount: 125000, time: "30 sec ago" },
        { bidder: "PorscheFan", amount: 124000, time: "2 min ago" }
      ],
      specifications: {
        engine: "4.0L Naturally Aspirated H6",
        transmission: "6-Speed Manual",
        fuelType: "Gasoline",
        drivetrain: "RWD",
        color: "Guards Red",
        interior: "Black Alcantara",
        vin: "WP0AC2A95JS123456"
      }
    }
  ];

  const shopItems: ShopItem[] = [
    {
      id: 1,
      name: "Carbon Fiber Spoiler",
      price: 899,
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Exterior",
      description: "High-quality carbon fiber rear spoiler for enhanced aerodynamics",
      inStock: true,
      rating: 4.8,
      reviews: 124,
      isNew: true
    },
    {
      id: 2,
      name: "Performance Exhaust System",
      price: 1299,
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Performance",
      description: "Cat-back exhaust system for improved sound and performance",
      inStock: true,
      rating: 4.9,
      reviews: 89,
      discount: 15,
      isFeatured: true
    },
    {
      id: 3,
      name: "Racing Seats Set",
      price: 2499,
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Interior",
      description: "Professional racing seats with 6-point harness compatibility",
      inStock: false,
      rating: 4.7,
      reviews: 56
    },
    {
      id: 4,
      name: "Turbo Kit",
      price: 4999,
      image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Performance",
      description: "Complete turbocharger kit with all necessary components",
      inStock: true,
      rating: 4.6,
      reviews: 34,
      isFeatured: true
    }
  ];

  const packages: Package[] = [
    {
      id: 1,
      name: "Starter Pack",
      price: 29,
      features: ["5 Auction Slots", "Basic Analytics", "Email Support", "Standard Listing"],
      color: "from-blue-500 to-blue-600",
      icon: <Package className="w-8 h-8" />,
      description: "Perfect for beginners"
    },
    {
      id: 2,
      name: "Professional",
      price: 79,
      originalPrice: 99,
      features: ["20 Auction Slots", "Advanced Analytics", "Priority Support", "Featured Listings", "Custom Branding"],
      popular: true,
      color: "from-purple-500 to-purple-600",
      icon: <Crown className="w-8 h-8" />,
      description: "Most popular choice"
    },
    {
      id: 3,
      name: "Enterprise",
      price: 199,
      features: ["Unlimited Slots", "Full Analytics Suite", "24/7 Support", "Premium Features", "API Access", "White Label"],
      color: "from-orange-500 to-orange-600",
      icon: <Trophy className="w-8 h-8" />,
      description: "For power users"
    }
  ];

  // Update system stats periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats(prev => ({
        ...prev,
        activeAuctions: prev.activeAuctions + Math.floor(Math.random() * 3) - 1,
        totalBids: prev.totalBids + Math.floor(Math.random() * 5),
        onlineUsers: prev.onlineUsers + Math.floor(Math.random() * 10) - 5,
        serverLoad: Math.max(20, Math.min(95, prev.serverLoad + Math.floor(Math.random() * 10) - 5)),
        revenue: prev.revenue + Math.floor(Math.random() * 1000)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredCars = sampleCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || car.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.currentBid - b.currentBid;
      case 'price-high':
        return b.currentBid - a.currentBid;
      case 'bids':
        return b.bids - a.bids;
      case 'ending':
      default:
        return a.timeLeft.localeCompare(b.timeLeft);
    }
  });

  const handleBid = (carId: number) => {
    const amount = parseFloat(bidAmount);
    const car = sampleCars.find(c => c.id === carId);
    
    if (!car || amount <= car.currentBid) {
      addNotification('Bid must be higher than current bid', 'error');
      return;
    }

    addNotification(`Bid of $${amount.toLocaleString()} placed successfully!`, 'success');
    setBidAmount('');
  };

  const addNotification = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const formatTimeLeft = (timeLeft: string) => {
    return timeLeft;
  };

  const getStatusColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'fair': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <Car className="w-5 h-5" />
          <span className="font-medium">Cars Auction</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-6 py-3 rounded-xl backdrop-blur-xl border shadow-2xl animate-slide-in-right transition-all duration-300 ${
              notification.type === 'success' 
                ? 'bg-green-500/20 border-green-400/30 text-green-100' 
                : notification.type === 'error'
                ? 'bg-red-500/20 border-red-400/30 text-red-100'
                : 'bg-blue-500/20 border-blue-400/30 text-blue-100'
            }`}
          >
            <div className="flex items-center gap-2">
              {notification.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {notification.type === 'error' && <XCircle className="w-5 h-5" />}
              {notification.type === 'info' && <Info className="w-5 h-5" />}
              <span className="font-medium">{notification.message}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className="h-full flex flex-col pointer-events-auto">
        {/* Header */}
        <div className="p-4">
          <div className="bg-gray-900/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10">
                    <Car className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                      Cars Auction System
                    </h1>
                    <p className="text-gray-400 text-sm">Professional auction platform</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-xl">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-100 text-sm font-medium">Live</span>
                  </div>
                  
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-2 hover:bg-white/10 rounded-xl transition-all duration-200 text-gray-400 hover:text-white"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex gap-2 mt-6">
                {[
                  { id: 'auction', label: 'Live Auctions', icon: Gavel },
                  { id: 'shop', label: 'Shop', icon: ShoppingCart },
                  { id: 'control', label: 'Control Panel', icon: Monitor }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/30 text-white shadow-lg'
                        : 'hover:bg-white/5 text-gray-400 hover:text-white border border-transparent'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-4 pb-4 overflow-hidden">
          <div className="h-full bg-gray-900/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Auction Tab */}
            {activeTab === 'auction' && (
              <div className="h-full flex flex-col">
                {/* Search and Filters */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Search auctions..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-200"
                        />
                      </div>
                      
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400/50 transition-all duration-200"
                      >
                        <option value="all">All Categories</option>
                        <option value="sports">Sports</option>
                        <option value="luxury">Luxury</option>
                        <option value="classic">Classic</option>
                      </select>
                      
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400/50 transition-all duration-200"
                      >
                        <option value="ending">Ending Soon</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="bids">Most Bids</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-3 rounded-xl transition-all duration-200 ${
                          viewMode === 'grid' 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' 
                            : 'hover:bg-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-3 rounded-xl transition-all duration-200 ${
                          viewMode === 'list' 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' 
                            : 'hover:bg-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cars Grid */}
                <div className="flex-1 overflow-auto custom-scrollbar">
                  <div className="p-6">
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                      {sortedCars.map((car, index) => (
                        <div
                          key={car.id}
                          className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-slide-up"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={car.image}
                              alt={car.name}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                {car.category}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="flex items-center gap-1 px-3 py-1 bg-red-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                                <Clock className="w-4 h-4" />
                                {formatTimeLeft(car.timeLeft)}
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-bold text-lg mb-1">{car.name}</h3>
                              <p className="text-gray-300 text-sm">{car.year} • {car.mileage}</p>
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <p className="text-gray-400 text-sm">Current Bid</p>
                                <p className="text-2xl font-bold text-white">${car.currentBid.toLocaleString()}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-gray-400 text-sm">Bids</p>
                                <p className="text-xl font-semibold text-blue-400">{car.bids}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 mb-4">
                              <div className={`w-2 h-2 rounded-full ${car.condition === 'Excellent' ? 'bg-green-400' : car.condition === 'Good' ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                              <span className={`text-sm font-medium ${getStatusColor(car.condition)}`}>
                                {car.condition}
                              </span>
                              <span className="text-gray-400 text-sm">• {car.location}</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <button
                                onClick={() => setSelectedCar(car)}
                                className="flex-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => addNotification('Added to watchlist', 'success')}
                                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-200"
                              >
                                <Heart className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Shop Tab */}
            {activeTab === 'shop' && (
              <div className="h-full flex flex-col">
                {/* Shop Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Performance Shop</h2>
                      <p className="text-gray-400">Premium automotive parts and accessories</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-xl">
                        <span className="text-green-100 text-sm font-medium">Free Shipping on $500+</span>
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex gap-2 flex-wrap">
                    {['All', 'Performance', 'Exterior', 'Interior', 'Electronics'].map((category) => (
                      <button
                        key={category}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-300 hover:text-white transition-all duration-200 text-sm"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shop Items */}
                <div className="flex-1 overflow-auto custom-scrollbar">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {shopItems.map((item, index) => (
                        <div
                          key={item.id}
                          className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {item.isNew && (
                              <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-green-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                  NEW
                                </span>
                              </div>
                            )}
                            
                            {item.discount && (
                              <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-red-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                  -{item.discount}%
                                </span>
                              </div>
                            )}
                            
                            {!item.inStock && (
                              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                                <span className="px-4 py-2 bg-red-500/80 text-white font-medium rounded-xl">
                                  Out of Stock
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-4">
                            <div className="mb-2">
                              <span className="text-xs text-blue-400 font-medium">{item.category}</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2 line-clamp-2">{item.name}</h3>
                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{item.description}</p>
                            
                            <div className="flex items-center gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(item.rating) 
                                      ? 'text-yellow-400 fill-current' 
                                      : 'text-gray-600'
                                  }`}
                                />
                              ))}
                              <span className="text-gray-400 text-sm ml-1">({item.reviews})</span>
                            </div>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-white">${item.price}</span>
                                {item.discount && (
                                  <span className="text-sm text-gray-400 line-through">
                                    ${Math.round(item.price / (1 - item.discount / 100))}
                                  </span>
                                )}
                              </div>
                              {item.isFeatured && (
                                <div className="flex items-center gap-1 text-orange-400">
                                  <Star className="w-4 h-4 fill-current" />
                                  <span className="text-xs font-medium">Featured</span>
                                </div>
                              )}
                            </div>
                            
                            <button
                              disabled={!item.inStock}
                              className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                                item.inStock
                                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 text-white hover:scale-105'
                                  : 'bg-gray-600/20 border border-gray-600/30 text-gray-500 cursor-not-allowed'
                              }`}
                            >
                              {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Packages Section */}
                    <div className="mt-12">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Premium Packages</h3>
                        <p className="text-gray-400">Choose the perfect package for your needs</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {packages.map((pkg, index) => (
                          <div
                            key={pkg.id}
                            className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] animate-slide-up ${
                              pkg.popular ? 'ring-2 ring-purple-400/50' : ''
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {pkg.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-sm font-medium rounded-full">
                                  Most Popular
                                </span>
                              </div>
                            )}
                            
                            <div className="text-center mb-6">
                              <div className={`inline-flex p-4 bg-gradient-to-r ${pkg.color} rounded-2xl mb-4`}>
                                {pkg.icon}
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
                              <p className="text-gray-400 text-sm">{pkg.description}</p>
                            </div>
                            
                            <div className="text-center mb-6">
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-3xl font-bold text-white">${pkg.price}</span>
                                {pkg.originalPrice && (
                                  <span className="text-lg text-gray-400 line-through">${pkg.originalPrice}</span>
                                )}
                              </div>
                              <span className="text-gray-400 text-sm">per month</span>
                            </div>
                            
                            <ul className="space-y-3 mb-6">
                              {pkg.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <button className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                              pkg.popular
                                ? 'bg-gradient-to-r from-purple-500 to-orange-500 text-white'
                                : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 text-white'
                            }`}>
                              Choose Plan
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Control Panel Tab */}
            {activeTab === 'control' && (
              <div className="h-full flex flex-col">
                {/* Control Panel Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Control Panel</h2>
                      <p className="text-gray-400">System monitoring and management</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-xl">
                        <span className="text-green-100 text-sm font-medium">System Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Control Tabs */}
                  <div className="flex gap-2">
                    {[
                      { id: 'status', label: 'System Status', icon: Activity },
                      { id: 'bidding', label: 'Bidding Control', icon: Gavel }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setControlTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          controlTab === tab.id
                            ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/30 text-white'
                            : 'hover:bg-white/5 text-gray-400 hover:text-white border border-transparent'
                        }`}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Control Panel Content */}
                <div className="flex-1 overflow-auto custom-scrollbar">
                  <div className="p-6">
                    {controlTab === 'status' && (
                      <div className="space-y-6">
                        {/* System Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            { 
                              label: 'Active Auctions', 
                              value: systemStats.activeAuctions, 
                              icon: Gavel, 
                              color: 'text-blue-400',
                              bg: 'bg-blue-500/20',
                              border: 'border-blue-400/30'
                            },
                            { 
                              label: 'Total Bids', 
                              value: systemStats.totalBids.toLocaleString(), 
                              icon: TrendingUp, 
                              color: 'text-green-400',
                              bg: 'bg-green-500/20',
                              border: 'border-green-400/30'
                            },
                            { 
                              label: 'Online Users', 
                              value: systemStats.onlineUsers, 
                              icon: Users, 
                              color: 'text-purple-400',
                              bg: 'bg-purple-500/20',
                              border: 'border-purple-400/30'
                            },
                            { 
                              label: 'Revenue', 
                              value: `$${systemStats.revenue.toLocaleString()}`, 
                              icon: DollarSign, 
                              color: 'text-orange-400',
                              bg: 'bg-orange-500/20',
                              border: 'border-orange-400/30'
                            }
                          ].map((stat, index) => (
                            <div
                              key={stat.label}
                              className={`${stat.bg} backdrop-blur-sm border ${stat.border} rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300 animate-slide-up`}
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex items-center justify-between mb-4">
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Server Performance */}
                          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 bg-blue-500/20 rounded-xl">
                                <Server className="w-6 h-6 text-blue-400" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white">Server Performance</h3>
                                <p className="text-gray-400 text-sm">Real-time system metrics</p>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-gray-300 text-sm">CPU Usage</span>
                                  <span className="text-white font-medium">{systemStats.serverLoad}%</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${systemStats.serverLoad}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-gray-300 text-sm">Memory Usage</span>
                                  <span className="text-white font-medium">68%</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-2">
                                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-[68%] transition-all duration-1000"></div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-gray-300 text-sm">Network I/O</span>
                                  <span className="text-white font-medium">45%</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-2">
                                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-[45%] transition-all duration-1000"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* System Health */}
                          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 bg-green-500/20 rounded-xl">
                                <Shield className="w-6 h-6 text-green-400" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white">System Health</h3>
                                <p className="text-gray-400 text-sm">Service status overview</p>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              {[
                                { service: 'Database', status: 'Online', uptime: '99.9%', color: 'text-green-400' },
                                { service: 'API Gateway', status: 'Online', uptime: '99.8%', color: 'text-green-400' },
                                { service: 'Payment System', status: 'Online', uptime: '99.7%', color: 'text-green-400' },
                                { service: 'Notification Service', status: 'Warning', uptime: '98.2%', color: 'text-yellow-400' }
                              ].map((service, index) => (
                                <div key={service.service} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${
                                      service.status === 'Online' ? 'bg-green-400' : 'bg-yellow-400'
                                    } animate-pulse`}></div>
                                    <span className="text-white font-medium">{service.service}</span>
                                  </div>
                                  <div className="text-right">
                                    <p className={`text-sm font-medium ${service.color}`}>{service.status}</p>
                                    <p className="text-gray-400 text-xs">{service.uptime} uptime</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-purple-500/20 rounded-xl">
                              <Activity className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                              <p className="text-gray-400 text-sm">Latest system events</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {[
                              { event: 'New auction started: 2020 Tesla Model S', time: '2 minutes ago', type: 'info' },
                              { event: 'High bid placed: $85,000 on BMW M4', time: '5 minutes ago', type: 'success' },
                              { event: 'User registration: john.doe@email.com', time: '8 minutes ago', type: 'info' },
                              { event: 'Payment processed: $45,000', time: '12 minutes ago', type: 'success' },
                              { event: 'System backup completed', time: '15 minutes ago', type: 'info' }
                            ].map((activity, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200">
                                <div className={`w-2 h-2 rounded-full ${
                                  activity.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                                }`}></div>
                                <div className="flex-1">
                                  <p className="text-white text-sm">{activity.event}</p>
                                  <p className="text-gray-400 text-xs">{activity.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {controlTab === 'bidding' && (
                      <div className="space-y-6">
                        {/* Bidding Controls */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[
                            { label: 'Pause All Auctions', icon: Pause, color: 'bg-yellow-500/20 border-yellow-400/30 text-yellow-400' },
                            { label: 'Emergency Stop', icon: AlertTriangle, color: 'bg-red-500/20 border-red-400/30 text-red-400' },
                            { label: 'Restart System', icon: RotateCcw, color: 'bg-blue-500/20 border-blue-400/30 text-blue-400' }
                          ].map((control, index) => (
                            <button
                              key={control.label}
                              className={`${control.color} backdrop-blur-sm border rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 animate-slide-up`}
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <control.icon className="w-8 h-8 mx-auto mb-3" />
                              <p className="font-medium">{control.label}</p>
                            </button>
                          ))}
                        </div>

                        {/* Active Auctions Management */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Active Auctions Management</h3>
                          <div className="space-y-3">
                            {sampleCars.slice(0, 3).map((car) => (
                              <div key={car.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                <div className="flex items-center gap-4">
                                  <img src={car.image} alt={car.name} className="w-12 h-12 rounded-lg object-cover" />
                                  <div>
                                    <p className="text-white font-medium">{car.name}</p>
                                    <p className="text-gray-400 text-sm">${car.currentBid.toLocaleString()} • {car.bids} bids</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button className="p-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-lg text-blue-400 transition-all duration-200">
                                    <Play className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/30 rounded-lg text-yellow-400 transition-all duration-200">
                                    <Pause className="w-4 h-4" />
                                  </button>
                                  <button className="p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 rounded-lg text-red-400 transition-all duration-200">
                                    <Power className="w-4 h-4" />
                                  </button>
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
            )}
          </div>
        </div>
      </div>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 pointer-events-auto">
          <div className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">{selectedCar.name}</h2>
              <button
                onClick={() => setSelectedCar(null)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all duration-200 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="overflow-auto custom-scrollbar max-h-[calc(90vh-80px)]">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image and Gallery */}
                  <div>
                    <div className="relative rounded-2xl overflow-hidden mb-4">
                      <img
                        src={selectedCar.image}
                        alt={selectedCar.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 px-3 py-1 bg-red-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                            <Clock className="w-4 h-4" />
                            {formatTimeLeft(selectedCar.timeLeft)}
                          </div>
                          <div className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                            {selectedCar.category}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Images */}
                    {selectedCar.images && selectedCar.images.length > 1 && (
                      <div className="grid grid-cols-3 gap-2">
                        {selectedCar.images.slice(1).map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${selectedCar.name} ${index + 2}`}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Details and Bidding */}
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Current Bid</p>
                          <p className="text-3xl font-bold text-white">${selectedCar.currentBid.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 text-sm">Total Bids</p>
                          <p className="text-2xl font-semibold text-blue-400">{selectedCar.bids}</p>
                        </div>
                      </div>
                      
                      {selectedCar.reservePrice && (
                        <p className="text-sm text-gray-400 mb-2">
                          Reserve: ${selectedCar.reservePrice.toLocaleString()}
                        </p>
                      )}
                      
                      {selectedCar.buyNowPrice && (
                        <p className="text-sm text-green-400 mb-4">
                          Buy Now: ${selectedCar.buyNowPrice.toLocaleString()}
                        </p>
                      )}
                    </div>
                    
                    {/* Bidding Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Place Your Bid</h3>
                      <div className="flex gap-3">
                        <input
                          type="number"
                          placeholder={`Min: $${(selectedCar.currentBid + 1000).toLocaleString()}`}
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50"
                        />
                        <button
                          onClick={() => handleBid(selectedCar.id)}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
                        >
                          Bid Now
                        </button>
                      </div>
                    </div>
                    
                    {/* Car Details */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Year</p>
                          <p className="text-white font-medium">{selectedCar.year}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Mileage</p>
                          <p className="text-white font-medium">{selectedCar.mileage}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Condition</p>
                          <p className={`font-medium ${getStatusColor(selectedCar.condition)}`}>
                            {selectedCar.condition}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Location</p>
                          <p className="text-white font-medium">{selectedCar.location}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Description</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{selectedCar.description}</p>
                      </div>
                      
                      {selectedCar.features && (
                        <div>
                          <p className="text-gray-400 text-sm mb-2">Features</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedCar.features.map((feature, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bid History */}
                {selectedCar.bidHistory && selectedCar.bidHistory.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Bid History</h3>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                      <div className="space-y-3">
                        {selectedCar.bidHistory.map((bid, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">
                                  {bid.bidder.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <p className="text-white font-medium">{bid.bidder}</p>
                                <p className="text-gray-400 text-sm">{bid.time}</p>
                              </div>
                            </div>
                            <p className="text-green-400 font-bold">${bid.amount.toLocaleString()}</p>
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
      )}
    </div>
  );
};

export default CarsAuctionSystem;