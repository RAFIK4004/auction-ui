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
  Sparkles,
  Gavel,
  Crown,
  Activity
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
      case 'bank': return <DollarSign className="w-4 h-4" />;
      case 'tebex': return <Coins className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getCurrencyColor = (currency: string) => {
    switch (currency) {
      case 'bank': return 'text-green-400';
      case 'tebex': return 'text-purple-400';
      default: return 'text-green-400';
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
    // Keep sidebar visible, just change status
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
      const currencySymbol = currentCar.currency === 'bank' ? '$' : '💎';
      addNotification('bid', `New bid placed: ${currencySymbol}${bid} on ${currentCar.label}`);
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

      {/* Auction Status Sidebar - Right middle */}
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

          {/* Status Display */}
          <div className="mb-6 relative z-10">
            <div className="text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                auctionStatus === 'closed' ? 'bg-red-500/20 text-red-400' :
                auctionStatus === 'scheduled' ? 'bg-yellow-500/20 text-yellow-400' :
                auctionStatus === 'open' ? 'bg-green-500/20 text-green-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {auctionStatus === 'closed' && <X className="w-4 h-4" />}
                {auctionStatus === 'scheduled' && <Clock className="w-4 h-4 animate-pulse" />}
                {auctionStatus === 'open' && <Play className="w-4 h-4" />}
                {auctionStatus === 'running' && <Zap className="w-4 h-4 animate-pulse" />}
                {auctionStatus.charAt(0).toUpperCase() + auctionStatus.slice(1)}
              </div>
              
              {auctionStatus === 'scheduled' && (
                <div className="mt-2 text-2xl font-bold text-yellow-400 animate-countdown">
                  {formatTime(scheduledTime)}
                </div>
              )}
            </div>
          </div>

          {/* Current Car Info */}
          {currentCar && (
            <div className="mb-6 relative z-10">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-500/20">
                <img 
                  src={currentCar.imageUrl} 
                  alt={currentCar.label}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-bold text-lg mb-2">{currentCar.label}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Current Bid:</span>
                  <div className="flex items-center gap-1">
                    {getCurrencyIcon(currentCar.currency)}
                    <span className={`font-bold ${getCurrencyColor(currentCar.currency)}`}>
                      {currentCar.currency === 'bank' ? `$${currentBid.toLocaleString()}` : `${currentBid}`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-400">Top Bidder:</span>
                  <span className="font-medium text-blue-400">{topBidder}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2 relative z-10">
            {auctionStatus === 'running' && currentCar && (
              <button 
                onClick={() => setShowBidding(true)}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 px-4 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center gap-2">
                  <Gavel className="w-5 h-5" />
                  Place Bid (E)
                </div>
              </button>
            )}
            
            <button 
              onClick={() => setShowTebexShop(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-4 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Coin Shop (G)
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Admin Control Panel */}
      {showTablet && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border border-purple-500/30 w-full max-w-4xl h-[80vh] shadow-2xl tablet-glow animate-slide-in-up modal-glow">
            {/* Enhanced background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/30 rounded-full blur-2xl animate-float-delayed"></div>
              <Settings className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-purple-400/10" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-xl">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text">Admin Control Panel</h2>
                  <p className="text-gray-400 text-sm">Manage auction system</p>
                </div>
              </div>
              <button 
                onClick={() => setShowTablet(false)}
                className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Enhanced Navigation */}
            <div className="flex border-b border-gray-700/50 relative z-10">
              {[
                { id: 'main', label: 'Status', icon: Activity },
                { id: 'queue', label: 'Car Queue', icon: Car },
                { id: 'settings', label: 'Settings', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 relative enhanced-tab ${
                    activeTab === tab.id 
                      ? 'text-purple-400 bg-purple-500/10' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 animate-expand"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 h-full overflow-y-auto custom-scrollbar relative z-10">
              {activeTab === 'main' && (
                <div className="space-y-6 animate-fade-in">
                  {/* Enhanced Status Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent p-6 rounded-2xl border border-blue-500/20 enhanced-status-card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-500/20 rounded-xl">
                          <Activity className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-blue-400">Status</h3>
                          <p className="text-sm text-gray-400">Current auction state</p>
                        </div>
                      </div>
                      <div className={`text-2xl font-bold mb-2 ${
                        auctionStatus === 'closed' ? 'text-red-400' :
                        auctionStatus === 'scheduled' ? 'text-yellow-400' :
                        auctionStatus === 'open' ? 'text-green-400' :
                        'text-blue-400'
                      }`}>
                        {auctionStatus.charAt(0).toUpperCase() + auctionStatus.slice(1)}
                      </div>
                      {auctionStatus === 'scheduled' && (
                        <div className="text-lg font-mono text-yellow-400">
                          {formatTime(scheduledTime)}
                        </div>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-green-500/10 via-green-600/5 to-transparent p-6 rounded-2xl border border-green-500/20 enhanced-status-card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-500/20 rounded-xl">
                          <Car className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-green-400">Queue</h3>
                          <p className="text-sm text-gray-400">Cars in queue</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-green-400 mb-2">
                        {carQueue.length}
                      </div>
                      <div className="text-sm text-gray-400">
                        {carQueue.length === 0 ? 'No cars queued' : 'Cars ready'}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent p-6 rounded-2xl border border-purple-500/20 enhanced-status-card">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-500/20 rounded-xl">
                          <Users className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-purple-400">Players</h3>
                          <p className="text-sm text-gray-400">Active bidders</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-400 mb-2">
                        12
                      </div>
                      <div className="text-sm text-gray-400">
                        Online now
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Control Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={handleScheduleAuction}
                      disabled={auctionStatus !== 'closed'}
                      className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-6 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg enhanced-control-button"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-5 h-5" />
                        Schedule Auction
                      </div>
                    </button>
                    
                    <button 
                      onClick={handleOpenAuction}
                      disabled={auctionStatus === 'running'}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-6 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg enhanced-control-button"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        Open Auction
                      </div>
                    </button>
                    
                    <button 
                      onClick={handleCloseAuction}
                      disabled={auctionStatus === 'closed'}
                      className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-6 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg enhanced-control-button"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5" />
                        Close Auction
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'queue' && (
                <div className="space-y-6 animate-fade-in">
                  {/* Add Car Button */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Car Queue Management</h3>
                    <button 
                      onClick={() => setShowAddCarModal(true)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg enhanced-button"
                    >
                      <div className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Car
                      </div>
                    </button>
                  </div>

                  {/* Car Queue List */}
                  <div className="space-y-4">
                    {carQueue.length === 0 ? (
                      <div className="text-center py-12 text-gray-400">
                        <Car className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium mb-2">No cars in queue</p>
                        <p className="text-sm">Add some cars to get started</p>
                      </div>
                    ) : (
                      carQueue.map((car) => (
                        <div key={car.id} className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl p-4 border border-gray-600/30 enhanced-car-card">
                          <div className="flex items-center gap-4">
                            <img 
                              src={car.imageUrl} 
                              alt={car.label}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-bold text-lg">{car.label}</h4>
                              <p className="text-gray-400 text-sm">Spawn: {car.spawnName}</p>
                              <div className="flex items-center gap-2 mt-2">
                                {getCurrencyIcon(car.currency)}
                                <span className={`font-medium ${getCurrencyColor(car.currency)}`}>
                                  {car.currency === 'bank' ? `$${car.startingBid.toLocaleString()}` : `${car.startingBid}`}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => handleLaunchCar(car)}
                                disabled={auctionStatus !== 'open'}
                                className="bg-green-600 hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed p-2 rounded-lg transition-colors"
                              >
                                <Play className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleEditCar(car)}
                                className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteCar(car.id)}
                                className="bg-red-600 hover:bg-red-500 p-2 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-xl font-bold">Auction Settings</h3>
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                    <p className="text-gray-400">Settings panel coming soon...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Car Modal */}
      {(showAddCarModal || showEditCarModal) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-blue-500/30 w-full max-w-md shadow-2xl modal-glow animate-slide-in-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">
                  {showEditCarModal ? 'Edit Car' : 'Add New Car'}
                </h3>
                <button 
                  onClick={() => {
                    setShowAddCarModal(false);
                    setShowEditCarModal(false);
                    setEditingCar(null);
                    setNewCar({
                      spawnName: '',
                      label: '',
                      imageUrl: '',
                      startingBid: '',
                      currency: 'bank'
                    });
                  }}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Spawn Name</label>
                  <input 
                    type="text"
                    value={newCar.spawnName}
                    onChange={(e) => setNewCar({...newCar, spawnName: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 focus:border-blue-500/50 focus:outline-none"
                    placeholder="e.g., adder"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Display Name</label>
                  <input 
                    type="text"
                    value={newCar.label}
                    onChange={(e) => setNewCar({...newCar, label: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 focus:border-blue-500/50 focus:outline-none"
                    placeholder="e.g., Truffade Adder"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Image URL</label>
                  <input 
                    type="text"
                    value={newCar.imageUrl}
                    onChange={(e) => setNewCar({...newCar, imageUrl: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 focus:border-blue-500/50 focus:outline-none"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Starting Bid</label>
                  <input 
                    type="number"
                    value={newCar.startingBid}
                    onChange={(e) => setNewCar({...newCar, startingBid: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 focus:border-blue-500/50 focus:outline-none"
                    placeholder="50000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Currency</label>
                  <select 
                    value={newCar.currency}
                    onChange={(e) => setNewCar({...newCar, currency: e.target.value as 'bank' | 'tebex'})}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 focus:border-blue-500/50 focus:outline-none"
                  >
                    <option value="bank">Bank Money</option>
                    <option value="tebex">Tebex Coins</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={showEditCarModal ? handleUpdateCar : handleAddCar}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    {showEditCarModal ? 'Update Car' : 'Add Car'}
                  </button>
                  <button 
                    onClick={() => {
                      setShowAddCarModal(false);
                      setShowEditCarModal(false);
                      setEditingCar(null);
                      setNewCar({
                        spawnName: '',
                        label: '',
                        imageUrl: '',
                        startingBid: '',
                        currency: 'bank'
                      });
                    }}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bidding Interface */}
      {showBidding && currentCar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-orange-500/30 w-full max-w-md shadow-2xl bidding-glow animate-slide-in-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-xl">
                    <Gavel className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Place Bid</h3>
                    <p className="text-gray-400 text-sm">{currentCar.label}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowBidding(false)}
                  className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Current Bid:</span>
                    <div className="flex items-center gap-1">
                      {getCurrencyIcon(currentCar.currency)}
                      <span className={`font-bold ${getCurrencyColor(currentCar.currency)}`}>
                        {currentCar.currency === 'bank' ? `$${currentBid.toLocaleString()}` : `${currentBid}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Top Bidder:</span>
                    <span className="font-medium text-blue-400">{topBidder}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Bid ({currentCar.currency === 'bank' ? 'Bank Money' : 'Tebex Coins'})
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      {getCurrencyIcon(currentCar.currency)}
                    </div>
                    <input 
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg pl-10 pr-3 py-3 focus:border-orange-500/50 focus:outline-none text-lg"
                      placeholder={`Minimum: ${currentBid + 1}`}
                      min={currentBid + 1}
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-xl p-3 border border-blue-500/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Your Balance:</span>
                    <div className="flex items-center gap-1">
                      {getCurrencyIcon(currentCar.currency)}
                      <span className={`font-medium ${getCurrencyColor(currentCar.currency)}`}>
                        {currentCar.currency === 'bank' 
                          ? `$${player.bankMoney.toLocaleString()}` 
                          : `${player.tebexCoins}`
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={handlePlaceBid}
                    disabled={!bidAmount || parseInt(bidAmount) <= currentBid}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    Place Bid
                  </button>
                  <button 
                    onClick={() => setShowBidding(false)}
                    className="px-4 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tebex Shop */}
      {showTebexShop && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border border-purple-500/30 w-full max-w-5xl h-[80vh] shadow-2xl shop-glow animate-slide-in-up">
            {/* Enhanced background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/30 rounded-full blur-2xl animate-float-delayed"></div>
              <ShoppingCart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-purple-400/10" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-xl">
                  <ShoppingCart className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text">Tebex Coin Shop</h2>
                  <p className="text-gray-400 text-sm">Purchase coins to bid on exclusive items</p>
                </div>
              </div>
              <button 
                onClick={() => setShowTebexShop(false)}
                className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 h-full overflow-hidden relative z-10">
              {/* Current Balance */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-4 border border-purple-500/20 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Coins className="w-6 h-6 text-purple-400" />
                    <span className="font-medium">Current Balance:</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-400">{player.tebexCoins} Coins</span>
                </div>
              </div>

              {/* Packages Grid */}
              <div className="relative">
                {/* Navigation Buttons */}
                {tebexPackages.length > 3 && (
                  <>
                    <button 
                      onClick={() => scrollPackages('left')}
                      disabled={packageScrollIndex === 0}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-purple-600/80 hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => scrollPackages('right')}
                      disabled={packageScrollIndex >= tebexPackages.length - 3}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-purple-600/80 hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                  {visiblePackages.map((pkg) => (
                    <div key={pkg.id} className="bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent rounded-2xl border border-purple-500/20 p-6 h-80 flex flex-col enhanced-package-card">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-purple-500/20 rounded-xl">
                            <Gift className="w-6 h-6 text-purple-400" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-400">{pkg.coins}</div>
                            <div className="text-sm text-gray-400">Coins</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                        
                        <div className="text-3xl font-bold text-green-400 mb-4">{pkg.price}</div>
                      </div>
                      
                      <button 
                        onClick={() => window.open(pkg.url, '_blank')}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-4 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg mt-auto"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <ShoppingCart className="w-5 h-5" />
                          Purchase
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redeem Code Section */}
              <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-bold">Redeem Code</h3>
                </div>
                
                {!showRedeemInput ? (
                  <button 
                    onClick={() => setShowRedeemInput(true)}
                    className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    Have a code?
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <input 
                      type="text"
                      value={redeemCode}
                      onChange={(e) => setRedeemCode(e.target.value)}
                      className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 focus:border-orange-500/50 focus:outline-none"
                      placeholder="Enter your code"
                    />
                    <button 
                      onClick={() => {
                        // Handle redeem logic here
                        setRedeemCode('');
                        setShowRedeemInput(false);
                      }}
                      className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                    >
                      Redeem
                    </button>
                    <button 
                      onClick={() => {
                        setShowRedeemInput(false);
                        setRedeemCode('');
                      }}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;