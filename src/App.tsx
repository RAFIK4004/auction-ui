import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Clock, 
  DollarSign, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Play, 
  X,
  Coins,
  ShoppingCart,
  Gift,
  Eye,
  EyeOff,
  Zap,
  Timer,
  Users,
  ChevronLeft,
  ChevronRight,
  Bell,
  Trophy,
  Sparkles
} from 'lucide-react';

interface Car {
  id: string;
  spawnName: string;
  label: string;
  imageUrl: string;
  startingBid: number;
  currency: 'bank' | 'tebex';
}

interface TebexPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  coins: number;
  url: string;
}

interface Player {
  bankMoney: number;
  tebexCoins: number;
}

interface Notification {
  id: string;
  type: 'bid' | 'winner';
  message: string;
  timestamp: number;
}

type AuctionStatus = 'closed' | 'scheduled' | 'open' | 'running';

function App() {
  const [auctionStatus, setAuctionStatus] = useState<AuctionStatus>('closed');
  const [scheduledTime, setScheduledTime] = useState<number>(0);
  const [showTablet, setShowTablet] = useState(false);
  const [activeTab, setActiveTab] = useState('main');
  const [showBidding, setShowBidding] = useState(false);
  const [showTebexShop, setShowTebexShop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showPreviewBar, setShowPreviewBar] = useState(true);
  const [currentCar, setCurrentCar] = useState<Car | null>(null);
  const [currentBid, setCurrentBid] = useState(0);
  const [topBidder, setTopBidder] = useState('Player123');
  const [bidAmount, setBidAmount] = useState('');
  const [bidCurrency, setBidCurrency] = useState<'bank' | 'tebex'>('bank');
  const [redeemCode, setRedeemCode] = useState('');
  const [showRedeemInput, setShowRedeemInput] = useState(false);
  const [showAddCarModal, setShowAddCarModal] = useState(false);
  const [showEditCarModal, setShowEditCarModal] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [packageScrollIndex, setPackageScrollIndex] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const [player] = useState<Player>({
    bankMoney: 125000,
    tebexCoins: 50
  });

  const [carQueue, setCarQueue] = useState<Car[]>([
    {
      id: '1',
      spawnName: 'adder',
      label: 'Truffade Adder',
      imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingBid: 50000,
      currency: 'bank'
    },
    {
      id: '2',
      spawnName: 'zentorno',
      label: 'Pegassi Zentorno',
      imageUrl: 'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingBid: 100,
      currency: 'tebex'
    }
  ]);

  const [newCar, setNewCar] = useState({
    spawnName: '',
    label: '',
    imageUrl: '',
    startingBid: '',
    currency: 'bank' as 'bank' | 'tebex'
  });

  const tebexPackages: TebexPackage[] = [
    {
      id: '1',
      name: 'Starter Pack',
      description: '100 Tebex Coins',
      price: '$4.99',
      coins: 100,
      url: 'https://tebex.io/package/1'
    },
    {
      id: '2',
      name: 'Premium Pack',
      description: '250 Tebex Coins + Bonus',
      price: '$9.99',
      coins: 250,
      url: 'https://tebex.io/package/2'
    },
    {
      id: '3',
      name: 'Ultimate Pack',
      description: '500 Tebex Coins + Exclusive Items',
      price: '$19.99',
      coins: 500,
      url: 'https://tebex.io/package/3'
    },
    {
      id: '4',
      name: 'VIP Pack',
      description: '1000 Tebex Coins + VIP Status',
      price: '$39.99',
      coins: 1000,
      url: 'https://tebex.io/package/4'
    },
    {
      id: '5',
      name: 'Elite Pack',
      description: '2500 Tebex Coins + Elite Benefits',
      price: '$79.99',
      coins: 2500,
      url: 'https://tebex.io/package/5'
    }
  ];

  // Countdown timer effect
  useEffect(() => {
    if (auctionStatus === 'scheduled' && scheduledTime > 0) {
      const timer = setInterval(() => {
        setScheduledTime(prev => {
          if (prev <= 1) {
            setAuctionStatus('open');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [auctionStatus, scheduledTime]);

  // Auto-show sidebar when auction status changes
  useEffect(() => {
    if (auctionStatus !== 'closed') {
      setShowSidebar(true);
    }
  }, [auctionStatus]);

  // Keyboard event handlers
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'e' && auctionStatus === 'running' && currentCar && !showBidding && !showTebexShop) {
        setShowBidding(true);
      }
      if (e.key.toLowerCase() === 'g' && !showBidding && !showTebexShop) {
        setShowTebexShop(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [auctionStatus, currentCar, showBidding, showTebexShop]);

  // Auto-remove notifications
  useEffect(() => {
    notifications.forEach(notification => {
      const timer = setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 5000);
      return () => clearTimeout(timer);
    });
  }, [notifications]);

  const addNotification = (type: 'bid' | 'winner', message: string) => {
    const notification: Notification = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: Date.now()
    };
    setNotifications(prev => [...prev, notification]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrencyIcon = (currency: string) => {
    switch (currency) {
      case 'bank': return '🏦';
      case 'tebex': return '💎';
      default: return '$';
    }
  };

  const handleScheduleAuction = () => {
    setAuctionStatus('scheduled');
    setScheduledTime(30); // 30 seconds for demo
    setShowSidebar(true);
  };

  const handleOpenAuction = () => {
    setAuctionStatus('open');
    setShowSidebar(true);
  };

  const handleCloseAuction = () => {
    setAuctionStatus('closed');
    setCurrentCar(null);
    // Don't hide sidebar, just change status
  };

  const handleLaunchCar = (car: Car) => {
    setCurrentCar(car);
    setCurrentBid(car.startingBid);
    setAuctionStatus('running');
    setShowSidebar(true);
  };

  const handleAddCar = () => {
    if (newCar.spawnName && newCar.label && newCar.startingBid) {
      const car: Car = {
        id: Date.now().toString(),
        spawnName: newCar.spawnName,
        label: newCar.label,
        imageUrl: newCar.imageUrl || 'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=400',
        startingBid: parseInt(newCar.startingBid),
        currency: newCar.currency
      };
      setCarQueue([...carQueue, car]);
      setNewCar({
        spawnName: '',
        label: '',
        imageUrl: '',
        startingBid: '',
        currency: 'bank'
      });
      setShowAddCarModal(false);
    }
  };

  const handleEditCar = (car: Car) => {
    setEditingCar(car);
    setNewCar({
      spawnName: car.spawnName,
      label: car.label,
      imageUrl: car.imageUrl,
      startingBid: car.startingBid.toString(),
      currency: car.currency
    });
    setShowEditCarModal(true);
  };

  const handleUpdateCar = () => {
    if (editingCar && newCar.spawnName && newCar.label && newCar.startingBid) {
      const updatedCar: Car = {
        ...editingCar,
        spawnName: newCar.spawnName,
        label: newCar.label,
        imageUrl: newCar.imageUrl || editingCar.imageUrl,
        startingBid: parseInt(newCar.startingBid),
        currency: newCar.currency
      };
      setCarQueue(carQueue.map(car => car.id === editingCar.id ? updatedCar : car));
      setNewCar({
        spawnName: '',
        label: '',
        imageUrl: '',
        startingBid: '',
        currency: 'bank'
      });
      setEditingCar(null);
      setShowEditCarModal(false);
    }
  };

  const handleDeleteCar = (id: string) => {
    setCarQueue(carQueue.filter(car => car.id !== id));
  };

  const handlePlaceBid = () => {
    const bid = parseInt(bidAmount);
    if (bid > currentBid && currentCar && bidCurrency === currentCar.currency) {
      setCurrentBid(bid);
      setTopBidder('You');
      setBidAmount('');
      setShowBidding(false);
      
      // Add notification
      addNotification('bid', `New bid placed: ${bid} ${currentCar.currency} on ${currentCar.label}`);
    }
  };

  const scrollPackages = (direction: 'left' | 'right') => {
    const maxIndex = Math.max(0, tebexPackages.length - 3);
    if (direction === 'left') {
      setPackageScrollIndex(Math.max(0, packageScrollIndex - 1));
    } else {
      setPackageScrollIndex(Math.min(maxIndex, packageScrollIndex + 1));
    }
  };

  const visiblePackages = tebexPackages.slice(packageScrollIndex, packageScrollIndex + 3);

  // Update bid currency when car changes
  useEffect(() => {
    if (currentCar) {
      setBidCurrency(currentCar.currency);
    }
  }, [currentCar]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 text-white overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-orange-500/30 animate-gradient-shift"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/15 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Notifications */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-6 py-3 rounded-xl backdrop-blur-sm border shadow-2xl animate-slide-down notification-glow ${
              notification.type === 'bid' 
                ? 'bg-orange-600/90 border-orange-500/50 text-orange-100' 
                : 'bg-green-600/90 border-green-500/50 text-green-100'
            }`}
          >
            <div className="flex items-center gap-3">
              {notification.type === 'bid' ? (
                <Bell className="w-5 h-5 animate-bounce" />
              ) : (
                <Trophy className="w-5 h-5 animate-pulse-glow" />
              )}
              <span className="font-medium">{notification.message}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Car silhouette background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Car className="w-96 h-96 text-white animate-pulse-slow" />
        </div>
      </div>

      {/* Preview Control Bar */}
      {showPreviewBar && (
        <div className={`fixed top-4 left-4 z-50 transition-all duration-500 ${showPreviewBar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-600/50 p-3 shadow-2xl preview-glow">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Preview Controls</span>
              <button 
                onClick={() => setShowPreviewBar(false)}
                className="ml-2 p-1 hover:bg-gray-700/50 rounded transition-colors"
              >
                <EyeOff className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button 
                onClick={() => setShowSidebar(!showSidebar)}
                className={`p-2 rounded-lg transition-all duration-200 ${showSidebar ? 'bg-green-600/20 text-green-400' : 'bg-gray-700/50 text-gray-400'}`}
              >
                Sidebar
              </button>
              <button 
                onClick={() => setShowTablet(!showTablet)}
                className={`p-2 rounded-lg transition-all duration-200 ${showTablet ? 'bg-purple-600/20 text-purple-400' : 'bg-gray-700/50 text-gray-400'}`}
              >
                Admin Panel
              </button>
              <button 
                onClick={() => setShowBidding(!showBidding)}
                className={`p-2 rounded-lg transition-all duration-200 ${showBidding ? 'bg-orange-600/20 text-orange-400' : 'bg-gray-700/50 text-gray-400'}`}
              >
                Bidding
              </button>
              <button 
                onClick={() => setShowTebexShop(!showTebexShop)}
                className={`p-2 rounded-lg transition-all duration-200 ${showTebexShop ? 'bg-purple-600/20 text-purple-400' : 'bg-gray-700/50 text-gray-400'}`}
              >
                Coin Shop
              </button>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-700/50">
              <div className="flex gap-2">
                <button 
                  onClick={handleScheduleAuction}
                  className="flex-1 p-1.5 bg-yellow-600/20 text-yellow-400 rounded text-xs hover:bg-yellow-600/30 transition-colors"
                >
                  Schedule
                </button>
                <button 
                  onClick={handleOpenAuction}
                  className="flex-1 p-1.5 bg-green-600/20 text-green-400 rounded text-xs hover:bg-green-600/30 transition-colors"
                >
                  Open
                </button>
                <button 
                  onClick={handleCloseAuction}
                  className="flex-1 p-1.5 bg-red-600/20 text-red-400 rounded text-xs hover:bg-red-600/30 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show Preview Bar Toggle (when hidden) */}
      {!showPreviewBar && (
        <button 
          onClick={() => setShowPreviewBar(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-blue-600/80 hover:bg-blue-500 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
        >
          <Eye className="w-4 h-4" />
        </button>
      )}

      {/* Auction Status Sidebar - Moved to right middle */}
      <div className={`fixed top-1/2 right-4 transform -translate-y-1/2 z-40 transition-all duration-700 ${
        showSidebar ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
      }`}>
        <div className="bg-gradient-to-br from-gray-800/95 via-gray-800/90 to-gray-900/95 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6 min-w-[320px] shadow-2xl auction-glow animate-slide-in-right enhanced-card">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-2xl">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-float"></div>
            <Car className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-blue-400/20" />
          </div>
          
          {/* Player Info */}
          <div className="mb-6 pb-4 border-b border-gray-700/50 relative z-10">
            <div className="flex items-center justify-between text-sm animate-fade-in mb-3">
              <div className="flex items-center gap-2 bg-green-500/10 px-3 py-2 rounded-lg">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="font-medium text-green-400">${player.bankMoney.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-2 rounded-lg">
                <Coins className="w-4 h-4 text-purple-400" />
                <span className="font-medium text-purple-400">{player.tebexCoins}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;