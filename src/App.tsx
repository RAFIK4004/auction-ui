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
  currency: 'cash' | 'bank' | 'tebex';
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
    currency: 'bank' as 'cash' | 'bank' | 'tebex'
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
      case 'cash': return '$';
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
    if (bid > currentBid) {
      setCurrentBid(bid);
      setTopBidder('You');
      setBidAmount('');
      setShowBidding(false);
      
      // Add notification
      addNotification('bid', `New bid placed: ${getCurrencyIcon(currentCar?.currency || 'bank')} ${bid.toLocaleString()} by You`);
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
                <DollarSign className="w-4 h-4 text-green-400 animate-pulse-glow" />
                <span className="text-green-400 font-medium">${player.bankMoney.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-2 rounded-lg">
                <Coins className="w-4 h-4 text-purple-400 animate-pulse-glow" />
                <span className="text-purple-400 font-medium">{player.tebexCoins}</span>
              </div>
            </div>
            <button 
              onClick={() => setShowTebexShop(true)}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-orange-600 rounded-xl text-sm font-medium hover:from-purple-500 hover:to-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl enhanced-button"
            >
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Press G to Buy Coins
              </div>
            </button>
          </div>

          {/* Auction Status */}
          <div className="relative z-10">
            {auctionStatus === 'running' && currentCar ? (
              <div className="space-y-4 animate-fade-in">
                <div className="relative overflow-hidden rounded-xl group enhanced-image-container">
                  <img 
                    src={currentCar.imageUrl} 
                    alt={currentCar.label}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-bold text-white text-lg animate-slide-up">{currentCar.label}</h3>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-red-500 w-3 h-3 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-white">
                      LIVE
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 animate-slide-up">
                  <div className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Starting Bid:</span>
                      <span className="text-white font-medium">{getCurrencyIcon(currentCar.currency)} {currentCar.startingBid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Current Bid:</span>
                      <span className="text-orange-400 font-bold text-lg animate-pulse-glow">{getCurrencyIcon(currentCar.currency)} {currentBid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Top Bidder:</span>
                      <span className="text-blue-400 font-medium">{topBidder}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-4 text-center animate-pulse-border enhanced-cta">
                  <div className="flex items-center justify-center gap-3">
                    <Zap className="w-5 h-5 text-blue-300 animate-bounce" />
                    <span className="text-blue-300 font-medium">Press E to Place a Bid</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-4">
                  {auctionStatus === 'open' && <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse-glow shadow-lg"></div>}
                  {auctionStatus === 'closed' && <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse-slow shadow-lg"></div>}
                  {auctionStatus === 'scheduled' && <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse-glow shadow-lg"></div>}
                  <span className="text-2xl font-bold capitalize gradient-text">{auctionStatus}</span>
                </div>
                
                {auctionStatus === 'scheduled' && (
                  <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-4 animate-pulse-border">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Timer className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-medium">Opening Soon</span>
                    </div>
                    <div className="text-orange-400 text-3xl font-bold animate-countdown">
                      {formatTime(scheduledTime)}
                    </div>
                  </div>
                )}

                {auctionStatus === 'open' && (
                  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl p-4 animate-pulse-border">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">Waiting for cars...</span>
                    </div>
                  </div>
                )}

                {auctionStatus === 'closed' && (
                  <div className="bg-gradient-to-r from-red-600/20 to-gray-600/20 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span className="text-red-400 font-medium">Auction Closed</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Admin Toggle Button */}
      <button 
        onClick={() => setShowTablet(!showTablet)}
        className={`fixed bottom-4 right-4 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full shadow-2xl transition-all duration-300 z-30 hover:scale-110 enhanced-button ${showTablet ? 'rotate-45' : 'rotate-0'}`}
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Enhanced Auction Control Tablet */}
      <div className={`fixed inset-4 z-50 flex items-center justify-center transition-all duration-500 ${
        showTablet ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`bg-gradient-to-br from-gray-800/95 via-gray-800/90 to-gray-900/95 backdrop-blur-sm rounded-3xl border border-purple-500/30 w-full max-w-5xl h-full max-h-[700px] shadow-2xl tablet-glow transition-all duration-500 transform enhanced-card ${
          showTablet ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute top-8 right-8 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <Settings className="absolute top-8 right-8 w-20 h-20 text-purple-400/30 animate-spin-slow" />
            <Car className="absolute bottom-8 left-8 w-16 h-16 text-blue-400/30" />
          </div>

          {/* Enhanced Header */}
          <div className="flex items-center justify-between p-8 border-b border-gray-700/50 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient-text">
                  Auction Control Panel
                </h1>
                <p className="text-gray-400 text-sm">Manage your auction system</p>
              </div>
            </div>
            <button 
              onClick={() => setShowTablet(false)}
              className="p-3 hover:bg-gray-700/50 rounded-xl transition-all duration-200 hover:rotate-90 enhanced-button"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Enhanced Tabs */}
          <div className="flex border-b border-gray-700/50 relative z-10 bg-gray-800/30">
            <button 
              onClick={() => setActiveTab('main')}
              className={`px-8 py-4 font-medium transition-all duration-300 relative enhanced-tab ${
                activeTab === 'main' 
                  ? 'text-blue-400 bg-blue-500/10' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Main Controls
              </div>
              {activeTab === 'main' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 animate-expand rounded-t"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('queue')}
              className={`px-8 py-4 font-medium transition-all duration-300 relative enhanced-tab ${
                activeTab === 'queue' 
                  ? 'text-purple-400 bg-purple-500/10' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Cars Queue ({carQueue.length})
              </div>
              {activeTab === 'queue' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-orange-400 animate-expand rounded-t"></div>}
            </button>
          </div>

          {/* Enhanced Content */}
          <div className="p-8 flex-1 overflow-y-auto relative z-10 custom-scrollbar">
            {activeTab === 'main' && (
              <div className="space-y-8 animate-fade-in">
                <div className="grid grid-cols-3 gap-6">
                  <button 
                    onClick={handleOpenAuction}
                    className="p-6 bg-gradient-to-br from-green-600/20 to-green-500/10 border border-green-500/30 rounded-2xl hover:from-green-600/30 hover:to-green-500/20 transition-all duration-300 group hover:scale-105 card-hover enhanced-control-button"
                  >
                    <div className="text-green-400 text-4xl mb-4 group-hover:scale-110 transition-transform animate-bounce-subtle">🟢</div>
                    <div className="font-bold text-green-400 text-lg">Open Auction</div>
                    <div className="text-green-300/70 text-sm mt-2">Start accepting bids</div>
                  </button>
                  
                  <button 
                    onClick={handleCloseAuction}
                    className="p-6 bg-gradient-to-br from-red-600/20 to-red-500/10 border border-red-500/30 rounded-2xl hover:from-red-600/30 hover:to-red-500/20 transition-all duration-300 group hover:scale-105 card-hover enhanced-control-button"
                  >
                    <div className="text-red-400 text-4xl mb-4 group-hover:scale-110 transition-transform animate-bounce-subtle">🔴</div>
                    <div className="font-bold text-red-400 text-lg">Close Auction</div>
                    <div className="text-red-300/70 text-sm mt-2">End current session</div>
                  </button>
                  
                  <button 
                    onClick={handleScheduleAuction}
                    className="p-6 bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 rounded-2xl hover:from-yellow-600/30 hover:to-yellow-500/20 transition-all duration-300 group hover:scale-105 card-hover enhanced-control-button"
                  >
                    <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform animate-bounce-subtle" />
                    <div className="font-bold text-yellow-400 text-lg">Schedule Auction</div>
                    <div className="text-yellow-300/70 text-sm mt-2">Set timer for opening</div>
                  </button>
                </div>

                <div className="bg-gradient-to-br from-gray-700/30 to-gray-600/20 rounded-2xl p-6 backdrop-blur-sm animate-slide-up enhanced-status-card">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    Current Status
                  </h3>
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div className="animate-fade-in bg-gray-800/30 p-4 rounded-xl">
                      <span className="text-gray-400 block mb-1">Status:</span>
                      <span className={`font-bold text-lg ${
                        auctionStatus === 'open' ? 'text-green-400' :
                        auctionStatus === 'closed' ? 'text-red-400' :
                        auctionStatus === 'scheduled' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`}>
                        {auctionStatus.toUpperCase()}
                      </span>
                    </div>
                    <div className="animate-fade-in bg-gray-800/30 p-4 rounded-xl">
                      <span className="text-gray-400 block mb-1">Queue Length:</span>
                      <span className="font-bold text-purple-400 text-lg">{carQueue.length} cars</span>
                    </div>
                    {currentCar && (
                      <>
                        <div className="animate-slide-in-left bg-gray-800/30 p-4 rounded-xl">
                          <span className="text-gray-400 block mb-1">Active Car:</span>
                          <span className="font-bold text-blue-400">{currentCar.label}</span>
                        </div>
                        <div className="animate-slide-in-right bg-gray-800/30 p-4 rounded-xl">
                          <span className="text-gray-400 block mb-1">Current Bid:</span>
                          <span className="font-bold text-orange-400">{getCurrencyIcon(currentCar.currency)} {currentBid.toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'queue' && (
              <div className="space-y-6 animate-fade-in">
                {/* Enhanced Header with Add Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      Cars Queue ({carQueue.length})
                    </h3>
                    <p className="text-gray-400 mt-1">Manage your auction vehicle lineup</p>
                  </div>
                  <button 
                    onClick={() => setShowAddCarModal(true)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl enhanced-button flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Add New Car
                  </button>
                </div>

                {/* Enhanced Cars Queue List */}
                <div className="grid gap-4">
                  {carQueue.map((car, index) => (
                    <div key={car.id} className={`bg-gradient-to-r from-gray-700/30 to-gray-600/20 rounded-2xl p-6 flex items-center gap-6 backdrop-blur-sm card-hover animate-slide-in-up enhanced-car-card border border-gray-600/30 hover:border-purple-500/50`} style={{animationDelay: `${index * 100}ms`}}>
                      <div className="relative overflow-hidden rounded-xl group">
                        <img 
                          src={car.imageUrl} 
                          alt={car.label}
                          className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-white">{car.label}</h4>
                        <p className="text-sm text-gray-400 mb-1">Spawn: <span className="text-blue-400 font-mono">{car.spawnName}</span></p>
                        <p className="text-orange-400 font-bold">{getCurrencyIcon(car.currency)} {car.startingBid.toLocaleString()}</p>
                      </div>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => handleLaunchCar(car)}
                          className="p-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-xl transition-all duration-200 hover:scale-110 enhanced-button"
                          title="Launch Auction"
                        >
                          <Play className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleEditCar(car)}
                          className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl transition-all duration-200 hover:scale-110 enhanced-button"
                          title="Edit Car"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteCar(car.id)}
                          className="p-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-xl transition-all duration-200 hover:scale-110 enhanced-button"
                          title="Delete Car"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {carQueue.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                      <Car className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">No cars in queue</p>
                      <p className="text-sm">Add some vehicles to get started</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Car Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        showAddCarModal ? 'bg-black/50 backdrop-blur-sm opacity-100 visible' : 'bg-black/0 opacity-0 invisible'
      }`}>
        <div className={`bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-2xl border border-purple-500/30 p-8 w-full max-w-2xl mx-4 shadow-2xl modal-glow transition-all duration-500 transform ${
          showAddCarModal ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <Plus className="w-6 h-6" />
              Add New Car
            </h2>
            <button 
              onClick={() => setShowAddCarModal(false)}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Spawn Name</label>
              <input 
                type="text"
                value={newCar.spawnName}
                onChange={(e) => setNewCar({...newCar, spawnName: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="adder"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Car Label</label>
              <input 
                type="text"
                value={newCar.label}
                onChange={(e) => setNewCar({...newCar, label: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="Truffade Adder"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
              <input 
                type="text"
                value={newCar.imageUrl}
                onChange={(e) => setNewCar({...newCar, imageUrl: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="https://example.com/car.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Starting Bid</label>
              <input 
                type="number"
                value={newCar.startingBid}
                onChange={(e) => setNewCar({...newCar, startingBid: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="50000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
              <select 
                value={newCar.currency}
                onChange={(e) => setNewCar({...newCar, currency: e.target.value as 'cash' | 'bank' | 'tebex'})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
              >
                <option value="cash">Cash</option>
                <option value="bank">Bank</option>
                <option value="tebex">Tebex Coins</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => setShowAddCarModal(false)}
              className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              Cancel
            </button>
            <button 
              onClick={handleAddCar}
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              Add Car
            </button>
          </div>
        </div>
      </div>

      {/* Edit Car Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        showEditCarModal ? 'bg-black/50 backdrop-blur-sm opacity-100 visible' : 'bg-black/0 opacity-0 invisible'
      }`}>
        <div className={`bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-2xl border border-blue-500/30 p-8 w-full max-w-2xl mx-4 shadow-2xl modal-glow transition-all duration-500 transform ${
          showEditCarModal ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-3">
              <Edit className="w-6 h-6" />
              Edit Car
            </h2>
            <button 
              onClick={() => setShowEditCarModal(false)}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Spawn Name</label>
              <input 
                type="text"
                value={newCar.spawnName}
                onChange={(e) => setNewCar({...newCar, spawnName: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="adder"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Car Label</label>
              <input 
                type="text"
                value={newCar.label}
                onChange={(e) => setNewCar({...newCar, label: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="Truffade Adder"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
              <input 
                type="text"
                value={newCar.imageUrl}
                onChange={(e) => setNewCar({...newCar, imageUrl: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="https://example.com/car.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Starting Bid</label>
              <input 
                type="number"
                value={newCar.startingBid}
                onChange={(e) => setNewCar({...newCar, startingBid: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 hover:border-gray-500"
                placeholder="50000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
              <select 
                value={newCar.currency}
                onChange={(e) => setNewCar({...newCar, currency: e.target.value as 'cash' | 'bank' | 'tebex'})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 hover:border-gray-500"
              >
                <option value="cash">Cash</option>
                <option value="bank">Bank</option>
                <option value="tebex">Tebex Coins</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => setShowEditCarModal(false)}
              className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              Cancel
            </button>
            <button 
              onClick={handleUpdateCar}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
            >
              Update Car
            </button>
          </div>
        </div>
      </div>

      {/* Bidding Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        showBidding ? 'bg-black/50 backdrop-blur-sm opacity-100 visible' : 'bg-black/0 opacity-0 invisible'
      }`}>
        <div className={`bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-2xl border border-orange-500/30 p-8 w-full max-w-md mx-4 shadow-2xl bidding-glow transition-all duration-500 transform ${
          showBidding ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          {/* Enhanced background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-2xl">
            <DollarSign className="absolute top-4 right-4 w-16 h-16 text-orange-400 animate-spin-slow" />
            <Coins className="absolute bottom-4 left-4 w-12 h-12 text-purple-400 animate-bounce-subtle" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-orange-400 animate-gradient-text flex items-center gap-3">
                <Zap className="w-6 h-6" />
                Place Your Bid
              </h2>
              <button 
                onClick={() => setShowBidding(false)}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {currentCar && (
              <div className="space-y-6 mb-6">
                <div className="text-center animate-fade-in">
                  <div className="relative overflow-hidden rounded-xl mb-4 group">
                    <img 
                      src={currentCar.imageUrl} 
                      alt={currentCar.label}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <h3 className="font-bold text-xl animate-slide-up">{currentCar.label}</h3>
                </div>

                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-xl p-4 space-y-3 animate-slide-up">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Bid:</span>
                    <span className="text-orange-400 font-bold text-lg animate-pulse-glow">{getCurrencyIcon(currentCar.currency)} {currentBid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Top Bidder:</span>
                    <span className="text-blue-400 font-medium">{topBidder}</span>
                  </div>
                </div>

                <div className="animate-slide-up">
                  <label className="block text-sm font-medium text-gray-300 mb-3">Your Bid Amount</label>
                  <input 
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-800 border border-gray-600 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-200 text-xl hover:border-gray-500"
                    placeholder={`Minimum: ${currentBid + 1}`}
                    min={currentBid + 1}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-4 animate-slide-up">
              <button 
                onClick={() => setShowBidding(false)}
                className="flex-1 py-4 bg-gray-600 hover:bg-gray-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
              >
                Cancel
              </button>
              <button 
                onClick={handlePlaceBid}
                disabled={!bidAmount || parseInt(bidAmount) <= currentBid}
                className="flex-1 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-xl font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tebex Shop Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        showTebexShop ? 'bg-black/50 backdrop-blur-sm opacity-100 visible' : 'bg-black/0 opacity-0 invisible'
      }`}>
        <div className={`bg-gradient-to-br from-gray-800/95 via-gray-800/90 to-gray-900/95 rounded-3xl border border-purple-500/30 w-full max-w-6xl max-h-[85vh] mx-4 shadow-2xl shop-glow overflow-hidden transition-all duration-500 transform ${
          showTebexShop ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <ShoppingCart className="absolute top-8 right-8 w-24 h-24 text-purple-400 animate-float" />
            <Coins className="absolute bottom-8 left-8 w-20 h-20 text-orange-400 animate-float-delayed" />
            <Gift className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-purple-300 animate-pulse-slow" />
            <Sparkles className="absolute top-16 left-16 w-16 h-16 text-blue-400 animate-bounce-subtle" />
          </div>

          {/* Enhanced Header */}
          <div className="flex items-center justify-between p-8 border-b border-gray-700/50 relative z-10">
            <div className="flex items-center gap-4 animate-slide-in-left">
              <div className="p-3 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-xl">
                <ShoppingCart className="w-8 h-8 text-purple-400 animate-bounce-subtle" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
                  Tebex Coin Shop
                </h2>
                <p className="text-gray-400">Purchase coins to bid on exclusive items</p>
              </div>
            </div>
            <button 
              onClick={() => setShowTebexShop(false)}
              className="p-3 hover:bg-gray-700/50 rounded-xl transition-all duration-200 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-8 overflow-y-auto max-h-[calc(85vh-140px)] relative z-10 custom-scrollbar">
            {/* Enhanced Redeem Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-purple-600/20 via-orange-600/20 to-purple-600/20 rounded-2xl border border-purple-500/30 animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-6 h-6 text-purple-400 animate-pulse-glow" />
                <h3 className="text-xl font-bold text-purple-400">Redeem Code</h3>
              </div>
              
              {showRedeemInput ? (
                <div className="flex gap-4 animate-slide-down">
                  <input 
                    type="text"
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                    placeholder="Enter your redeem code"
                  />
                  <button 
                    onClick={() => {
                      setRedeemCode('');
                      setShowRedeemInput(false);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                  >
                    Redeem
                  </button>
                  <button 
                    onClick={() => setShowRedeemInput(false)}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowRedeemInput(true)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  Redeem Code
                </button>
              )}
            </div>

            {/* Enhanced Packages Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Coin Packages</h3>
                {tebexPackages.length > 3 && (
                  <div className="flex gap-2">
                    <button 
                      onClick={() => scrollPackages('left')}
                      disabled={packageScrollIndex === 0}
                      className="p-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 rounded-lg transition-all duration-200 hover:scale-110 disabled:hover:scale-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => scrollPackages('right')}
                      disabled={packageScrollIndex >= tebexPackages.length - 3}
                      className="p-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 rounded-lg transition-all duration-200 hover:scale-110 disabled:hover:scale-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
                {visiblePackages.map((pkg, index) => (
                  <div key={pkg.id} className={`bg-gradient-to-br from-gray-700/30 to-gray-600/20 rounded-2xl p-6 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 card-hover animate-slide-in-up enhanced-package-card`} style={{animationDelay: `${index * 150}ms`}}>
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                        <Coins className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 text-sm">{pkg.description}</p>
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-purple-400 mb-2 animate-pulse-glow">{pkg.price}</div>
                      <div className="text-orange-400 font-medium">{pkg.coins} Tebex Coins</div>
                    </div>

                    <button 
                      onClick={() => window.open(pkg.url, '_blank')}
                      className="w-full py-4 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl enhanced-button"
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Info Section */}
            <div className="p-6 bg-gradient-to-r from-gray-700/30 to-gray-600/20 rounded-2xl animate-slide-up">
              <h4 className="font-bold text-xl mb-4 text-blue-400 flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                How it works:
              </h4>
              <ul className="text-gray-300 space-y-3">
                <li className="animate-fade-in flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Click "Buy Now\" to be redirected to our secure Tebex store
                </li>
                <li className="animate-fade-in flex items-center gap-3" style={{animationDelay: '100ms'}}>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Complete your purchase using PayPal, Credit Card, or other payment methods
                </li>
                <li className="animate-fade-in flex items-center gap-3" style={{animationDelay: '200ms'}}>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Coins will be automatically added to your account within minutes
                </li>
                <li className="animate-fade-in flex items-center gap-3" style={{animationDelay: '300ms'}}>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Use coins to bid on exclusive vehicles and items
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;