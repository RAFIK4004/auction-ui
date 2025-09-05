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
  Users
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
    setShowSidebar(false);
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
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/20 animate-gradient-shift"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
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
          <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-600/50 p-3 shadow-2xl">
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

      {/* Auction Status Sidebar */}
      <div className={`fixed top-4 right-4 z-40 transition-all duration-500 transform ${
        showSidebar ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
      }`}>
        <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl border border-blue-500/30 p-4 min-w-[280px] shadow-2xl auction-glow animate-slide-in-right">
          {/* Transparent car background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <Car className="w-full h-full text-blue-400" />
          </div>
          
          {/* Player Info */}
          <div className="mb-4 pb-3 border-b border-gray-700/50 relative z-10">
            <div className="flex items-center justify-between text-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-400 animate-pulse-glow" />
                <span className="text-green-400 font-medium">${player.bankMoney.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-purple-400 animate-pulse-glow" />
                <span className="text-purple-400 font-medium">{player.tebexCoins}</span>
              </div>
            </div>
            <button 
              onClick={() => setShowTebexShop(true)}
              className="w-full mt-2 py-1.5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg text-xs font-medium hover:from-purple-500 hover:to-orange-500 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-3 h-3" />
                Press G to Buy Coins
              </div>
            </button>
          </div>

          {/* Auction Status */}
          <div className="relative z-10">
            {auctionStatus === 'running' && currentCar ? (
              <div className="space-y-3 animate-fade-in">
                <div className="relative overflow-hidden rounded-lg group">
                  <img 
                    src={currentCar.imageUrl} 
                    alt={currentCar.label}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="font-semibold text-white text-sm animate-slide-up">{currentCar.label}</h3>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="bg-red-500 w-2 h-2 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="space-y-2 animate-slide-up">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Starting Bid:</span>
                    <span className="text-white font-medium">{getCurrencyIcon(currentCar.currency)} {currentCar.startingBid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Current Bid:</span>
                    <span className="text-orange-400 font-semibold animate-pulse-glow">{getCurrencyIcon(currentCar.currency)} {currentBid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Top Bidder:</span>
                    <span className="text-blue-400 font-medium">{topBidder}</span>
                  </div>
                </div>

                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-2 text-center animate-pulse-border">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-300 text-sm font-medium">Press E to Place a Bid</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {auctionStatus === 'open' && <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow"></div>}
                  {auctionStatus === 'closed' && <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse-slow"></div>}
                  {auctionStatus === 'scheduled' && <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-glow"></div>}
                  <span className="text-lg font-bold capitalize gradient-text">{auctionStatus}</span>
                </div>
                
                {auctionStatus === 'scheduled' && (
                  <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-3 animate-pulse-border">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Timer className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">Opening Soon</span>
                    </div>
                    <div className="text-orange-400 text-xl font-bold animate-countdown">
                      {formatTime(scheduledTime)}
                    </div>
                  </div>
                )}

                {auctionStatus === 'open' && (
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3 animate-pulse-border">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">Waiting for cars...</span>
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
        className={`fixed bottom-4 right-4 p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all duration-300 z-30 hover:scale-110 ${showTablet ? 'rotate-45' : 'rotate-0'}`}
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Auction Control Tablet */}
      <div className={`fixed inset-4 z-50 flex items-center justify-center transition-all duration-500 ${
        showTablet ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`bg-gray-800/95 backdrop-blur-sm rounded-2xl border border-purple-500/30 w-full max-w-4xl h-full max-h-[600px] shadow-2xl tablet-glow transition-all duration-500 transform ${
          showTablet ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          {/* Transparent background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-2xl">
            <div className="absolute top-4 right-4">
              <Settings className="w-32 h-32 text-purple-400 animate-spin-slow" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Car className="w-24 h-24 text-blue-400" />
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50 relative z-10">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
              Auction Control Panel
            </h1>
            <button 
              onClick={() => setShowTablet(false)}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-700/50 relative z-10">
            <button 
              onClick={() => setActiveTab('main')}
              className={`px-6 py-3 font-medium transition-all duration-200 relative ${
                activeTab === 'main' 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Main Controls
              {activeTab === 'main' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 animate-expand"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('queue')}
              className={`px-6 py-3 font-medium transition-all duration-200 relative ${
                activeTab === 'queue' 
                  ? 'text-purple-400 border-b-2 border-purple-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Cars Queue
              {activeTab === 'queue' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 animate-expand"></div>}
            </button>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 overflow-y-auto relative z-10">
            {activeTab === 'main' && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-3 gap-4">
                  <button 
                    onClick={handleOpenAuction}
                    className="p-4 bg-green-600/20 border border-green-500/30 rounded-xl hover:bg-green-600/30 transition-all duration-200 group hover:scale-105 card-hover"
                  >
                    <div className="text-green-400 text-2xl mb-2 group-hover:scale-110 transition-transform animate-bounce-subtle">🟢</div>
                    <div className="font-medium text-green-400">Open Auction</div>
                  </button>
                  
                  <button 
                    onClick={handleCloseAuction}
                    className="p-4 bg-red-600/20 border border-red-500/30 rounded-xl hover:bg-red-600/30 transition-all duration-200 group hover:scale-105 card-hover"
                  >
                    <div className="text-red-400 text-2xl mb-2 group-hover:scale-110 transition-transform animate-bounce-subtle">🔴</div>
                    <div className="font-medium text-red-400">Close Auction</div>
                  </button>
                  
                  <button 
                    onClick={handleScheduleAuction}
                    className="p-4 bg-yellow-600/20 border border-yellow-500/30 rounded-xl hover:bg-yellow-600/30 transition-all duration-200 group hover:scale-105 card-hover"
                  >
                    <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform animate-bounce-subtle" />
                    <div className="font-medium text-yellow-400">Schedule Auction</div>
                  </button>
                </div>

                <div className="bg-gray-700/30 rounded-xl p-4 backdrop-blur-sm animate-slide-up">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    Current Status
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="animate-fade-in">
                      <span className="text-gray-400">Status:</span>
                      <span className={`ml-2 font-medium ${
                        auctionStatus === 'open' ? 'text-green-400' :
                        auctionStatus === 'closed' ? 'text-red-400' :
                        auctionStatus === 'scheduled' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`}>
                        {auctionStatus.toUpperCase()}
                      </span>
                    </div>
                    <div className="animate-fade-in">
                      <span className="text-gray-400">Queue Length:</span>
                      <span className="ml-2 font-medium text-purple-400">{carQueue.length} cars</span>
                    </div>
                    {currentCar && (
                      <>
                        <div className="animate-slide-in-left">
                          <span className="text-gray-400">Active Car:</span>
                          <span className="ml-2 font-medium text-blue-400">{currentCar.label}</span>
                        </div>
                        <div className="animate-slide-in-right">
                          <span className="text-gray-400">Current Bid:</span>
                          <span className="ml-2 font-medium text-orange-400">{getCurrencyIcon(currentCar.currency)} {currentBid.toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'queue' && (
              <div className="space-y-6 animate-fade-in">
                {/* Add Car Form */}
                <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm animate-slide-up">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Plus className="w-5 h-5 text-purple-400 animate-pulse-glow" />
                    Add New Car
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="animate-slide-in-left">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Spawn Name</label>
                      <input 
                        type="text"
                        value={newCar.spawnName}
                        onChange={(e) => setNewCar({...newCar, spawnName: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                        placeholder="adder"
                      />
                    </div>
                    <div className="animate-slide-in-right">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Car Label</label>
                      <input 
                        type="text"
                        value={newCar.label}
                        onChange={(e) => setNewCar({...newCar, label: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                        placeholder="Truffade Adder"
                      />
                    </div>
                    <div className="animate-slide-in-left">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                      <input 
                        type="text"
                        value={newCar.imageUrl}
                        onChange={(e) => setNewCar({...newCar, imageUrl: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                        placeholder="https://example.com/car.jpg"
                      />
                    </div>
                    <div className="animate-slide-in-right">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Starting Bid</label>
                      <input 
                        type="number"
                        value={newCar.startingBid}
                        onChange={(e) => setNewCar({...newCar, startingBid: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                        placeholder="50000"
                      />
                    </div>
                    <div className="col-span-2 animate-fade-in">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
                      <select 
                        value={newCar.currency}
                        onChange={(e) => setNewCar({...newCar, currency: e.target.value as 'cash' | 'bank' | 'tebex'})}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                      >
                        <option value="cash">Cash</option>
                        <option value="bank">Bank</option>
                        <option value="tebex">Tebex Coins</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    onClick={handleAddCar}
                    className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Add Car to Queue
                  </button>
                </div>

                {/* Cars Queue List */}
                <div className="animate-slide-up">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    Cars Queue ({carQueue.length})
                  </h3>
                  <div className="grid gap-4">
                    {carQueue.map((car, index) => (
                      <div key={car.id} className={`bg-gray-700/30 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm card-hover animate-slide-in-up`} style={{animationDelay: `${index * 100}ms`}}>
                        <div className="relative overflow-hidden rounded-lg">
                          <img 
                            src={car.imageUrl} 
                            alt={car.label}
                            className="w-16 h-16 object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{car.label}</h4>
                          <p className="text-sm text-gray-400">Spawn: {car.spawnName}</p>
                          <p className="text-sm text-orange-400 font-medium">{getCurrencyIcon(car.currency)} {car.startingBid.toLocaleString()}</p>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleLaunchCar(car)}
                            className="p-2 bg-green-600 hover:bg-green-500 rounded-lg transition-all duration-200 hover:scale-110"
                            title="Launch Auction"
                          >
                            <Play className="w-4 h-4" />
                          </button>
                          <button 
                            className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 hover:scale-110"
                            title="Edit Car"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteCar(car.id)}
                            className="p-2 bg-red-600 hover:bg-red-500 rounded-lg transition-all duration-200 hover:scale-110"
                            title="Delete Car"
                          >
                            <Trash2 className="w-4 h-4" />
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

      {/* Bidding Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        showBidding ? 'bg-black/50 backdrop-blur-sm opacity-100 visible' : 'bg-black/0 opacity-0 invisible'
      }`}>
        <div className={`bg-gray-800/95 rounded-2xl border border-orange-500/30 p-6 w-full max-w-md mx-4 shadow-2xl bidding-glow transition-all duration-500 transform ${
          showBidding ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          {/* Transparent background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-2xl">
            <DollarSign className="absolute top-4 right-4 w-16 h-16 text-orange-400 animate-spin-slow" />
            <Coins className="absolute bottom-4 left-4 w-12 h-12 text-purple-400 animate-bounce-subtle" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-orange-400 animate-gradient-text">Place Your Bid</h2>
              <button 
                onClick={() => setShowBidding(false)}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {currentCar && (
              <div className="space-y-4 mb-6">
                <div className="text-center animate-fade-in">
                  <div className="relative overflow-hidden rounded-lg mb-3 group">
                    <img 
                      src={currentCar.imageUrl} 
                      alt={currentCar.label}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <h3 className="font-semibold text-lg animate-slide-up">{currentCar.label}</h3>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-3 space-y-2 animate-slide-up">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Bid:</span>
                    <span className="text-orange-400 font-semibold animate-pulse-glow">{getCurrencyIcon(currentCar.currency)} {currentBid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Top Bidder:</span>
                    <span className="text-blue-400 font-medium">{topBidder}</span>
                  </div>
                </div>

                <div className="animate-slide-up">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Bid Amount</label>
                  <input 
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-200 text-lg hover:border-gray-500"
                    placeholder={`Minimum: ${currentBid + 1}`}
                    min={currentBid + 1}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-3 animate-slide-up">
              <button 
                onClick={() => setShowBidding(false)}
                className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Cancel
              </button>
              <button 
                onClick={handlePlaceBid}
                disabled={!bidAmount || parseInt(bidAmount) <= currentBid}
                className="flex-1 py-3 bg-orange-600 hover:bg-orange-500 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tebex Shop Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        showTebexShop ? 'bg-black/50 backdrop-blur-sm opacity-100 visible' : 'bg-black/0 opacity-0 invisible'
      }`}>
        <div className={`bg-gray-800/95 rounded-2xl border border-purple-500/30 w-full max-w-4xl max-h-[80vh] mx-4 shadow-2xl shop-glow overflow-hidden transition-all duration-500 transform ${
          showTebexShop ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
        }`}>
          {/* Transparent background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
            <ShoppingCart className="absolute top-8 right-8 w-24 h-24 text-purple-400 animate-float" />
            <Coins className="absolute bottom-8 left-8 w-20 h-20 text-orange-400 animate-float-delayed" />
            <Gift className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-purple-300 animate-pulse-slow" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50 relative z-10">
            <div className="flex items-center gap-3 animate-slide-in-left">
              <ShoppingCart className="w-6 h-6 text-purple-400 animate-bounce-subtle" />
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient-text">
                Tebex Coin Shop
              </h2>
            </div>
            <button 
              onClick={() => setShowTebexShop(false)}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)] relative z-10">
            {/* Redeem Section */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-600/20 to-orange-600/20 rounded-xl border border-purple-500/30 animate-slide-up">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-purple-400 animate-pulse-glow" />
                <h3 className="font-semibold text-purple-400">Redeem Code</h3>
              </div>
              
              {showRedeemInput ? (
                <div className="flex gap-3 animate-slide-down">
                  <input 
                    type="text"
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-200 hover:border-gray-500"
                    placeholder="Enter your redeem code"
                  />
                  <button 
                    onClick={() => {
                      setRedeemCode('');
                      setShowRedeemInput(false);
                    }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    Redeem
                  </button>
                  <button 
                    onClick={() => setShowRedeemInput(false)}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowRedeemInput(true)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                >
                  Redeem Code
                </button>
              )}
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
              {tebexPackages.map((pkg, index) => (
                <div key={pkg.id} className={`bg-gray-700/30 rounded-xl p-6 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-200 card-hover animate-slide-in-up`} style={{animationDelay: `${index * 150}ms`}}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                      <Coins className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1 animate-pulse-glow">{pkg.price}</div>
                    <div className="text-orange-400 text-sm font-medium">{pkg.coins} Tebex Coins</div>
                  </div>

                  <button 
                    onClick={() => window.open(pkg.url, '_blank')}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-6 p-4 bg-gray-700/30 rounded-xl animate-slide-up">
              <h4 className="font-semibold mb-2 text-blue-400 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                How it works:
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="animate-fade-in">• Click "Buy Now" to be redirected to our secure Tebex store</li>
                <li className="animate-fade-in" style={{animationDelay: '100ms'}}>• Complete your purchase using PayPal, Credit Card, or other payment methods</li>
                <li className="animate-fade-in" style={{animationDelay: '200ms'}}>• Coins will be automatically added to your account within minutes</li>
                <li className="animate-fade-in" style={{animationDelay: '300ms'}}>• Use coins to bid on exclusive vehicles and items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;