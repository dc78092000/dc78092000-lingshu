import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  BookOpen, 
  Calendar, 
  User, 
  Search, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Clock,
  History,
  Info,
  Settings,
  LogOut,
  Edit3,
  X,
  Search as SearchIcon,
  Home,
  AlertTriangle,
  Zap,
  Grid,
  Shield,
  FileText,
  Tag
} from 'lucide-react';
import { METAPHYSICS_DATA, Category, SymbolDetail, ImageSymbol } from './constants';
import { useLocalStorage } from './hooks/useLocalStorage';

type Screen = 'splash' | 'home' | 'browsing' | 'detail' | 'query' | 'checkin' | 'profile' | 'notes' | 'favorites' | 'settings';

function LingShuLogo({ size = 64, className = "" }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Dots (Twenty-Four Mountains) */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 360 / 24) * (Math.PI / 180);
        const x = 50 + 45 * Math.cos(angle);
        const y = 50 + 45 * Math.sin(angle);
        return <circle key={i} cx={x} cy={y} r="1.2" fill="currentColor" />;
      })}
      {/* Inner Circle */}
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" />
      {/* Central Needle/Axis */}
      <path d="M50 20L50 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 50L80 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Diagonal Accents (Hexagram-like) */}
      <path d="M30 30L70 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M70 30L30 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Center Point */}
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

function NinePalacesIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 10h18" />
      <path d="M3 17h18" />
      <path d="M10 3v18" />
      <path d="M17 3v18" />
    </svg>
  );
}

function BaZiIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 4v16M10 4v16M15 4v16M20 4v16" />
      <path d="M5 8h15M5 16h15" />
      <path d="M2 4h20M2 20h20" />
    </svg>
  );
}

function DaLiuRenIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  );
}

function ZiWeiIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TaiYiIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20" />
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function CategoryIcon({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) {
  switch (name) {
    case 'NinePalaces': return <NinePalacesIcon size={size} className={className} />;
    case 'BaZi': return <BaZiIcon size={size} className={className} />;
    case 'DaLiuRen': return <DaLiuRenIcon size={size} className={className} />;
    case 'ZiWei': return <ZiWeiIcon size={size} className={className} />;
    case 'TaiYi': return <TaiYiIcon size={size} className={className} />;
    case 'Compass': return <Compass size={size} className={className} />;
    case 'BookOpen': return <BookOpen size={size} className={className} />;
    case 'AlertTriangle': return <AlertTriangle size={size} className={className} />;
    case 'Zap': return <Zap size={size} className={className} />;
    case 'Grid': return <Grid size={size} className={className} />;
    case 'Shield': return <Shield size={size} className={className} />;
    case 'FileText': return <FileText size={size} className={className} />;
    case 'Calendar': return <Calendar size={size} className={className} />;
    case 'Star': return <Star size={size} className={className} />;
    default: return <BookOpen size={size} className={className} />;
  }
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [selectedCategory, setSelectedCategory] = useState<ImageSymbol | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolDetail | null>(null);
  const [dailySymbol, setDailySymbol] = useState<SymbolDetail | null>(null);
  const { userData, toggleFavorite, saveNote, checkIn, toggleTask, toggleCategoryVisibility } = useLocalStorage();

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('home'), 2500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  useEffect(() => {
    // Pick a random symbol for the day
    const allSymbols: SymbolDetail[] = [];
    METAPHYSICS_DATA.forEach(cat => {
      cat.sections.forEach(section => {
        if (section.type === 'symbols' && section.subCategories) {
          section.subCategories.forEach(sub => {
            allSymbols.push(...sub.items);
          });
        }
      });
    });
    
    if (allSymbols.length > 0) {
      // Use date as seed for daily symbol
      const today = new Date().toDateString();
      let hash = 0;
      for (let i = 0; i < today.length; i++) {
        hash = today.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash) % allSymbols.length;
      setDailySymbol(allSymbols[index]);
    }
  }, []);

  const handleViewDailyDetail = () => {
    if (dailySymbol) {
      // Find which category this symbol belongs to
      const cat = METAPHYSICS_DATA.find(c => 
        c.sections.some(sec => 
          sec.type === 'symbols' && 
          sec.subCategories?.some(s => s.items.some(i => i.id === dailySymbol.id))
        )
      );
      if (cat) setSelectedCategory(cat);
      setSelectedSymbol(dailySymbol);
      setScreen('detail');
    }
  };

  const renderScreen = () => {
    switch (screen) {
      case 'splash': return <SplashScreen />;
      case 'home': return (
        <HomeScreen 
          onSelectCategory={(cat) => { setSelectedCategory(cat); setScreen('browsing'); }} 
          onNavigate={setScreen} 
          dailySymbol={dailySymbol}
          onViewDailyDetail={handleViewDailyDetail}
          userData={userData}
          onSelectSymbol={(sym) => { setSelectedSymbol(sym); setScreen('detail'); }}
          onToggleFavorite={toggleFavorite}
        />
      );
      case 'browsing': return <BrowsingScreen category={selectedCategory!} onBack={() => setScreen('home')} onSelectSymbol={(sym) => { setSelectedSymbol(sym); setScreen('detail'); }} saveNote={saveNote} userData={userData} />;
      case 'detail': return <DetailScreen symbol={selectedSymbol!} onBack={() => setScreen(selectedCategory ? 'browsing' : 'home')} userData={userData} toggleFavorite={toggleFavorite} saveNote={saveNote} />;
      case 'query': return <QueryScreen onBack={() => setScreen('home')} onSelectSymbol={(sym) => { setSelectedSymbol(sym); setScreen('detail'); }} />;
      case 'checkin': return <CheckinScreen onBack={() => setScreen('home')} userData={userData} onCheckIn={checkIn} toggleTask={toggleTask} />;
      case 'profile': return <ProfileScreen onBack={() => setScreen('home')} userData={userData} onNavigate={setScreen} />;
      case 'notes': return <NotesOverviewScreen onBack={() => setScreen('home')} onSelectSymbol={(sym) => { setSelectedSymbol(sym); setScreen('detail'); }} userData={userData} />;
      case 'favorites': return <FavoritesScreen onBack={() => setScreen('profile')} onSelectSymbol={(sym) => { setSelectedSymbol(sym); setScreen('detail'); }} userData={userData} />;
      case 'settings': return <SettingsScreen onBack={() => setScreen('profile')} userData={userData} onToggleCategory={toggleCategoryVisibility} />;
      default: return (
        <HomeScreen 
          onSelectCategory={(cat) => { setSelectedCategory(cat); setScreen('browsing'); }} 
          onNavigate={setScreen} 
          dailySymbol={dailySymbol}
          onViewDailyDetail={handleViewDailyDetail}
          userData={userData}
          onSelectSymbol={(sym) => { setSelectedSymbol(sym); setScreen('detail'); }}
          onToggleFavorite={toggleFavorite}
        />
      );
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-ling-bg overflow-hidden relative shadow-2xl border-x border-ling-ink/5">
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
      
      {screen !== 'splash' && (
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-ling-ink/10 h-16 flex items-center justify-around px-4 z-50">
          <NavButton active={screen === 'home'} icon={<Home size={20} />} label="首页" onClick={() => setScreen('home')} />
          <NavButton active={screen === 'notes'} icon={<Edit3 size={20} />} label="笔记" onClick={() => setScreen('notes')} />
          <NavButton active={screen === 'checkin'} icon={<Calendar size={20} />} label="打卡" onClick={() => setScreen('checkin')} />
          <NavButton active={screen === 'profile'} icon={<User size={20} />} label="我的" onClick={() => setScreen('profile')} />
        </nav>
      )}
    </div>
  );
}

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-ling-accent' : 'text-ling-ink/40'}`}
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

function SplashScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col items-center justify-center bg-ling-bg p-8"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 rounded-full border border-ling-accent/30 animate-ping" />
        <LingShuLogo size={120} className="text-ling-accent" />
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-4xl font-serif text-ling-ink mb-2 tracking-[0.5em] ml-[0.5em]"
      >
        灵枢
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-ling-ink/40 text-sm tracking-widest"
      >
        感悟天机 · 洞察玄象
      </motion.p>
    </motion.div>
  );
}

function HomeScreen({ onSelectCategory, onNavigate, dailySymbol, onViewDailyDetail, userData, onSelectSymbol, onToggleFavorite }: { 
  onSelectCategory: (cat: ImageSymbol) => void, 
  onNavigate: (s: Screen) => void,
  dailySymbol: SymbolDetail | null,
  onViewDailyDetail: () => void,
  userData: any,
  onSelectSymbol: (sym: SymbolDetail) => void,
  onToggleFavorite: (id: string) => void
}) {
  const recentFavorites = useMemo(() => {
    const allSymbols: SymbolDetail[] = [];
    METAPHYSICS_DATA.forEach(cat => {
      cat.sections.forEach(section => {
        if (section.type === 'symbols' && section.subCategories) {
          section.subCategories.forEach(sub => {
            allSymbols.push(...sub.items);
          });
        }
      });
    });
    
    return allSymbols
      .filter(s => userData.favorites.includes(s.id))
      .slice(-3)
      .reverse();
  }, [userData.favorites]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <LingShuLogo size={32} className="text-ling-accent" />
          <h2 className="text-xl font-serif font-bold">灵枢</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('query')} className="text-ling-ink/60"><SearchIcon size={22} /></button>
          <button onClick={() => onNavigate('checkin')} className="text-ling-accent"><Calendar size={22} /></button>
          <button onClick={() => onNavigate('profile')} className="text-ling-ink"><User size={22} /></button>
        </div>
      </header>

      <section className="mb-10">
        <h3 className="text-sm font-serif text-ling-ink/60 mb-6 tracking-widest uppercase">玄学大观</h3>
        <div className="grid grid-cols-1 gap-4">
          {METAPHYSICS_DATA.filter(cat => (userData.visibleCategories || ['qmdj', 'tysn', 'dlr', 'bzml', 'zwds', 'mhys']).includes(cat.id)).map((cat) => (
            <motion.div 
              key={cat.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectCategory(cat)}
              className="bg-white p-6 rounded-2xl border border-ling-ink/5 shadow-sm flex items-center gap-4 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-ling-soft flex items-center justify-center text-ling-ink">
                <CategoryIcon name={cat.icon} size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-serif font-bold text-lg">{cat.name}</h4>
                <p className="text-xs text-ling-ink/50">{cat.description}</p>
              </div>
              <ChevronRight size={20} className="text-ling-ink/20" />
            </motion.div>
          ))}
        </div>
      </section>

      {recentFavorites.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-serif text-ling-ink/60 tracking-widest uppercase">最近收藏</h3>
            <button onClick={() => onNavigate('favorites')} className="text-xs text-ling-accent font-bold">查看全部</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
            {recentFavorites.map(fav => (
              <motion.div 
                key={fav.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectSymbol(fav)}
                className="min-w-[140px] p-4 bg-white rounded-2xl border border-ling-ink/5 shadow-sm flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-ling-soft flex items-center justify-center text-ling-ink font-serif font-bold">
                  {fav.name[0]}
                </div>
                <span className="text-sm font-bold">{fav.name}</span>
                <span className="text-[10px] text-ling-ink/40">{fav.brief.slice(0, 10)}...</span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-10">
        <div className="bg-ling-accent/10 p-6 rounded-3xl border border-ling-accent/20 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-10">
            <Compass size={120} />
          </div>
          <h3 className="text-xs font-bold text-ling-accent mb-2 tracking-widest uppercase">每日一象</h3>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-1">{dailySymbol?.name || '...'}</h4>
              <p className="text-xs text-ling-ink/60">今日干支：{new Date().toLocaleDateString('zh-CN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="flex items-center gap-4">
              {dailySymbol && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(dailySymbol.id);
                  }}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${userData.favorites.includes(dailySymbol.id) ? 'bg-ling-accent border-ling-accent text-white' : 'bg-white/50 border-ling-accent/20 text-ling-accent'}`}
                >
                  <Star size={18} fill={userData.favorites.includes(dailySymbol.id) ? 'currentColor' : 'none'} />
                </button>
              )}
              <button 
                onClick={onViewDailyDetail}
                className="text-xs font-bold text-ling-accent underline underline-offset-4"
              >
                查看详情
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function BrowsingScreen({ category, onBack, onSelectSymbol, saveNote, userData }: { category: ImageSymbol, onBack: () => void, onSelectSymbol: (sym: SymbolDetail) => void, saveNote: (id: string, note: string) => void, userData: any }) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const activeSection = category.sections.find(s => s.id === activeSectionId);
  const [expanded, setExpanded] = useState<string[]>([]);

  useEffect(() => {
    // Default to collapsed when switching sections
    setExpanded([]);
  }, [activeSectionId]);

  const toggleExpand = (name: string) => {
    setExpanded(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full pt-12 pb-20 flex flex-col"
    >
      <header className="flex items-center gap-4 px-6 mb-6">
        <button onClick={activeSectionId ? () => setActiveSectionId(null) : onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center shrink-0">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold truncate">{category.name}{activeSectionId ? ` · ${activeSection?.name}` : ''}</h2>
      </header>

      {!activeSectionId ? (
        <div className="flex-1 overflow-y-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {category.sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSectionId(section.id)}
                className="bg-white p-6 rounded-2xl border border-ling-ink/5 shadow-sm flex flex-col items-center justify-center gap-3 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-ling-soft flex items-center justify-center text-ling-accent">
                  <CategoryIcon name={section.icon} size={16} />
                </div>
                <span className="font-serif font-bold text-sm">{section.name}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="mt-10">
            <h3 className="text-xs font-bold text-ling-ink/30 tracking-widest uppercase mb-4">本门笔记</h3>
            <div className="space-y-3">
              {(() => {
                const notedItems: any[] = [];
                category.sections.forEach(s => {
                  if (s.type === 'symbols' && s.subCategories) {
                    s.subCategories.forEach(sub => {
                      sub.items.forEach(i => {
                        if (userData.notes[i.id]) notedItems.push(i);
                      });
                    });
                  } else if (s.type === 'list' && s.listItems) {
                    s.listItems.forEach(i => {
                      if (userData.notes[i.id]) notedItems.push(i);
                    });
                  }
                });
                
                if (notedItems.length === 0) {
                  return <p className="text-center text-ling-ink/20 text-xs py-6">暂无笔记</p>;
                }

                return notedItems.map((item) => (
                  <div key={item.id} onClick={() => 'core' in item ? onSelectSymbol(item) : null} className="p-4 bg-white rounded-xl border border-ling-ink/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs">{item.name || item.title}</span>
                      <Edit3 size={12} className="text-ling-accent" />
                    </div>
                    <p className="text-[10px] text-ling-ink/60 line-clamp-2 italic">“{userData.notes[item.id]}”</p>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 space-y-6">
          {activeSection?.type === 'symbols' && activeSection.subCategories?.map((sub) => (
          <div key={sub.name} className="border-b border-ling-ink/5 pb-4">
            <button 
              onClick={() => toggleExpand(sub.name)}
              className="w-full flex items-center justify-between py-2 mb-2"
            >
              <h3 className="font-serif font-bold text-lg">{sub.name}</h3>
              <ChevronRight size={18} className={`transition-transform ${expanded.includes(sub.name) ? 'rotate-90' : ''}`} />
            </button>
            
            <AnimatePresence>
              {expanded.includes(sub.name) && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden space-y-3"
                >
                  {sub.items.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => onSelectSymbol(item)}
                      className="p-4 bg-white rounded-xl border border-ling-ink/5 flex items-center justify-between cursor-pointer hover:bg-ling-soft/30 transition-colors"
                    >
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                        <p className="text-[10px] text-ling-ink/50 line-clamp-1">{item.brief}</p>
                      </div>
                      <ChevronRight size={14} className="text-ling-ink/20" />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {activeSection?.type === 'list' && (
          <div className="space-y-4">
            {activeSection.listItems?.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl border border-ling-ink/5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-serif font-bold text-lg">{item.title}</h4>
                  <div className="flex gap-1">
                    {item.tags?.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-ling-soft rounded text-[10px] font-bold text-ling-ink/60">{tag}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-ling-ink/70 leading-relaxed mb-4">{item.content}</p>
                <div className="pt-4 border-t border-ling-ink/5">
                  <textarea 
                    value={userData.notes[item.id] || ''}
                    onChange={(e) => saveNote(item.id, e.target.value)}
                    placeholder="记录对此条目的感悟..."
                    className="w-full h-20 p-3 bg-ling-soft/30 rounded-xl text-xs focus:outline-none focus:bg-ling-soft/50 transition-colors resize-none"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection?.type === 'content' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-ling-ink/5 shadow-sm">
              <div className="prose prose-sm text-ling-ink/80 leading-loose whitespace-pre-wrap">
                {activeSection.content}
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-ling-ink/5 shadow-sm">
              <h3 className="text-xs font-bold text-ling-accent mb-4 tracking-widest uppercase">学习笔记</h3>
              <textarea 
                value={userData.notes[activeSection.id] || ''}
                onChange={(e) => saveNote(activeSection.id, e.target.value)}
                placeholder="记录您的感悟..."
                className="w-full h-32 p-4 bg-ling-soft/30 rounded-xl text-sm focus:outline-none focus:bg-ling-soft/50 transition-colors resize-none"
              />
            </div>
          </div>
        )}
      </div>
    )}
    </motion.div>
  );
}

function DetailScreen({ symbol, onBack, userData, toggleFavorite, saveNote }: { symbol: SymbolDetail, onBack: () => void, userData: any, toggleFavorite: (id: string) => void, saveNote: (id: string, note: string) => void }) {
  const [note, setNote] = useState(userData.notes[symbol.id] || '');
  const isFavorite = userData.favorites.includes(symbol.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold">{symbol.name}</h2>
        <button 
          onClick={() => toggleFavorite(symbol.id)}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isFavorite ? 'bg-ling-accent border-ling-accent text-white' : 'bg-white border-ling-ink/10 text-ling-ink/30'}`}
        >
          <Star size={20} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </header>

      <div className="space-y-8">
        <section>
          <h3 className="text-xs font-bold text-ling-accent mb-3 tracking-widest uppercase">核心象意</h3>
          <div className="flex flex-wrap gap-2">
            {symbol.core.map(c => (
              <span key={c} className="px-3 py-1 bg-ling-soft rounded-full text-xs font-medium">{c}</span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs font-bold text-ling-accent mb-3 tracking-widest uppercase">多维解读</h3>
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(symbol.dimensions).map(([key, values]) => {
              if (!values || (values as string[]).length === 0) return null;
              const labels: Record<string, string> = {
                people: '人物',
                things: '事物',
                geography: '地理',
                body: '身体',
                personality: '性情',
                weather: '天气',
                animals: '动物',
                plants: '植物',
                colors: '颜色'
              };
              return (
                <div key={key} className="bg-white p-4 rounded-xl border border-ling-ink/5">
                  <h4 className="text-[10px] font-bold text-ling-ink/40 mb-2 uppercase tracking-tighter">
                    {labels[key] || key}
                  </h4>
                  <p className="text-sm leading-relaxed">{(values as string[]).join('、')}</p>
                </div>
              );
            })}
          </div>
        </section>

        {symbol.quotes && (
          <section className="bg-ling-ink/5 p-6 rounded-2xl italic text-ling-ink/70 text-sm font-serif border-l-4 border-ling-accent">
            {symbol.quotes[0]}
          </section>
        )}

        <section>
          <h3 className="text-xs font-bold text-ling-accent mb-3 tracking-widest uppercase">学习笔记</h3>
          <textarea 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onBlur={() => saveNote(symbol.id, note)}
            placeholder="记录您的感悟..."
            className="w-full h-32 p-4 bg-white rounded-xl border border-ling-ink/10 text-sm focus:outline-none focus:border-ling-accent transition-colors resize-none"
          />
        </section>
      </div>
    </motion.div>
  );
}

function NotesOverviewScreen({ onBack, onSelectSymbol, userData }: { onBack: () => void, onSelectSymbol: (sym: SymbolDetail) => void, userData: any }) {
  const allSymbols = useMemo(() => {
    const symbols: SymbolDetail[] = [];
    METAPHYSICS_DATA.forEach(cat => {
      cat.sections.forEach(section => {
        if (section.type === 'symbols' && section.subCategories) {
          section.subCategories.forEach(sub => {
            symbols.push(...sub.items);
          });
        }
      });
    });
    return symbols;
  }, []);

  const notedItems = useMemo(() => {
    const items: { id: string; title: string; note: string; category: string; type: 'symbol' | 'other' }[] = [];
    
    METAPHYSICS_DATA.forEach(cat => {
      cat.sections.forEach(section => {
        if (section.type === 'symbols' && section.subCategories) {
          section.subCategories.forEach(sub => {
            sub.items.forEach(item => {
              if (userData.notes[item.id]) {
                items.push({ id: item.id, title: item.name, note: userData.notes[item.id], category: cat.name, type: 'symbol' });
              }
            });
          });
        } else if (section.type === 'list' && section.listItems) {
          section.listItems.forEach(item => {
            if (userData.notes[item.id]) {
              items.push({ id: item.id, title: item.title, note: userData.notes[item.id], category: cat.name, type: 'other' });
            }
          });
        } else if (section.type === 'content') {
          if (userData.notes[section.id]) {
            items.push({ id: section.id, title: section.name, note: userData.notes[section.id], category: cat.name, type: 'other' });
          }
        }
      });
    });
    
    return items;
  }, [userData.notes]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold">玄学笔记</h2>
      </header>

      <div className="space-y-6">
        {notedItems.length > 0 ? (
          notedItems.map(item => (
            <div 
              key={item.id}
              onClick={() => {
                if (item.type === 'symbol') {
                  const sym = allSymbols.find(s => s.id === item.id);
                  if (sym) onSelectSymbol(sym);
                }
              }}
              className="p-5 bg-white rounded-2xl border border-ling-ink/5 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-ling-soft rounded text-[10px] font-bold text-ling-ink/60 uppercase tracking-tighter">{item.category}</span>
                <Edit3 size={14} className="text-ling-accent" />
              </div>
              <h4 className="font-serif font-bold text-lg">{item.title}</h4>
              <div className="p-4 bg-ling-soft/30 rounded-xl border-l-2 border-ling-accent">
                <p className="text-sm text-ling-ink/80 leading-relaxed italic">“{item.note}”</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-ling-soft rounded-full flex items-center justify-center mx-auto mb-4 text-ling-ink/20">
              <Edit3 size={32} />
            </div>
            <p className="text-ling-ink/30 text-sm">尚未记录任何笔记</p>
            <p className="text-ling-ink/20 text-xs mt-2">在浏览象意或条目时记录感悟</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function QueryScreen({ onBack, onSelectSymbol }: { onBack: () => void, onSelectSymbol: (sym: SymbolDetail) => void }) {
  const [query, setQuery] = useState('');
  
  const results = useMemo(() => {
    if (!query) return [];
    const allSymbols: SymbolDetail[] = [];
    METAPHYSICS_DATA.forEach(cat => {
      cat.sections.forEach(section => {
        if (section.type === 'symbols' && section.subCategories) {
          section.subCategories.forEach(sub => {
            allSymbols.push(...sub.items);
          });
        }
      });
    });
    return allSymbols.filter(s => 
      s.name.includes(query) || 
      s.brief.includes(query) || 
      s.core.some(c => c.includes(query))
    );
  }, [query]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold">查询</h2>
      </header>

      <div className="relative mb-8">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-ling-ink/30" size={18} />
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="输入关键词，如：天蓬、癸水..."
          className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-ling-ink/10 focus:outline-none focus:border-ling-accent transition-colors"
        />
      </div>

      <div className="space-y-4">
        {results.length > 0 ? (
          results.map(res => (
            <div 
              key={res.id}
              onClick={() => onSelectSymbol(res)}
              className="p-4 bg-white rounded-xl border border-ling-ink/5 flex items-center justify-between cursor-pointer"
            >
              <div>
                <h4 className="font-bold text-sm mb-1">{res.name}</h4>
                <p className="text-[10px] text-ling-ink/50">{res.brief}</p>
              </div>
              <ChevronRight size={14} className="text-ling-ink/20" />
            </div>
          ))
        ) : query ? (
          <p className="text-center text-ling-ink/30 text-sm py-10">未找到相关内容</p>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-ling-ink/30 tracking-widest uppercase">热门搜索</h3>
            <div className="flex flex-wrap gap-2">
              {['天蓬星', '开门', '甲木', '癸水', '乾卦'].map(tag => (
                <button 
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-4 py-2 bg-ling-soft/50 rounded-full text-xs text-ling-ink/60 hover:bg-ling-soft transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CheckinScreen({ onBack, userData, onCheckIn, toggleTask }: { onBack: () => void, userData: any, onCheckIn: (d: string, n: string) => void, toggleTask: (t: string) => void }) {
  const today = new Date().toISOString().split('T')[0];
  const hasCheckedIn = userData.checkIns.includes(today);
  const [note, setNote] = useState(userData.checkInNotes[today] || '');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold">每日打卡</h2>
      </header>

      <div className="bg-white p-6 rounded-3xl border border-ling-ink/5 shadow-sm mb-8 text-center">
        <div className="text-4xl font-serif font-bold text-ling-accent mb-2">{new Date().getDate()}</div>
        <div className="text-xs text-ling-ink/40 mb-6">{new Date().toLocaleDateString('zh-CN', { month: 'long', year: 'numeric' })}</div>
        
        <button 
          disabled={hasCheckedIn}
          onClick={() => onCheckIn(today, note)}
          className={`w-full py-4 rounded-2xl font-bold transition-all ${hasCheckedIn ? 'bg-ling-soft text-ling-ink/30' : 'bg-ling-ink text-white shadow-lg active:scale-95'}`}
        >
          {hasCheckedIn ? '今日已悟' : '每日一悟'}
        </button>
      </div>

      <section className="mb-8">
        <h3 className="text-xs font-bold text-ling-accent mb-4 tracking-widest uppercase">今日任务</h3>
        <div className="space-y-3">
          {Object.entries(userData.tasks).map(([task, done]) => (
            <div 
              key={task}
              onClick={() => toggleTask(task)}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-ling-ink/5 cursor-pointer"
            >
              <span className={`text-sm ${done ? 'text-ling-ink/30 line-through' : 'text-ling-ink'}`}>{task}</span>
              {done ? <CheckCircle2 size={20} className="text-ling-accent" /> : <div className="w-5 h-5 rounded-full border-2 border-ling-ink/10" />}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xs font-bold text-ling-accent mb-4 tracking-widest uppercase">打卡心得</h3>
        <textarea 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="记录今日的学习感悟..."
          className="w-full h-32 p-4 bg-white rounded-xl border border-ling-ink/10 text-sm focus:outline-none focus:border-ling-accent transition-colors resize-none"
        />
      </section>
    </motion.div>
  );
}

function ProfileScreen({ onBack, userData, onNavigate }: { onBack: () => void, userData: any, onNavigate: (s: Screen) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center gap-4 mb-10">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold">个人中心</h2>
      </header>

      <div className="flex items-center gap-6 mb-10">
        <div className="w-20 h-20 rounded-full bg-ling-soft border-4 border-white shadow-sm flex items-center justify-center text-ling-ink">
          <User size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold">灵枢学者</h3>
          <div className="flex gap-4 mt-2">
            <div className="text-center">
              <div className="text-lg font-bold text-ling-accent">{userData.checkIns.length}</div>
              <div className="text-[10px] text-ling-ink/40 uppercase tracking-tighter">总打卡</div>
            </div>
            <div className="text-center cursor-pointer" onClick={() => onNavigate('favorites')}>
              <div className="text-lg font-bold text-ling-accent">{userData.favorites.length}</div>
              <div className="text-[10px] text-ling-ink/40 uppercase tracking-tighter">收藏</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <ProfileItem icon={<Star size={18} />} label="我的收藏" count={userData.favorites.length} onClick={() => onNavigate('favorites')} />
        <ProfileItem icon={<Edit3 size={18} />} label="我的笔记" count={Object.keys(userData.notes).length} onClick={() => onNavigate('notes')} />
        <ProfileItem icon={<History size={18} />} label="打卡历史" onClick={() => onNavigate('checkin')} />
        <div className="pt-4" />
        <ProfileItem icon={<Settings size={18} />} label="设置" onClick={() => onNavigate('settings')} />
        <ProfileItem icon={<Info size={18} />} label="关于我们" />
        <ProfileItem icon={<LogOut size={18} />} label="退出登录" danger />
      </div>
    </motion.div>
  );
}

function ProfileItem({ icon, label, count, danger, onClick }: { icon: React.ReactNode, label: string, count?: number, danger?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4 rounded-2xl hover:bg-ling-soft/30 transition-colors ${danger ? 'text-red-500' : 'text-ling-ink'}`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${danger ? 'bg-red-50' : 'bg-ling-ink/5'}`}>
          {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {count !== undefined && <span className="text-xs text-ling-ink/30 font-bold">{count}</span>}
        <ChevronRight size={16} className="text-ling-ink/20" />
      </div>
    </button>
  );
}

function FavoritesScreen({ onBack, onSelectSymbol, userData }: { onBack: () => void, onSelectSymbol: (sym: SymbolDetail) => void, userData: any }) {
  const favoriteItems = useMemo(() => {
    const symbols: SymbolDetail[] = [];
    METAPHYSICS_DATA.forEach(cat => {
      cat.sections.forEach(section => {
        if (section.type === 'symbols' && section.subCategories) {
          section.subCategories.forEach(sub => {
            symbols.push(...sub.items);
          });
        }
      });
    });
    return symbols.filter(s => userData.favorites.includes(s.id));
  }, [userData.favorites]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold">我的收藏</h2>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {favoriteItems.length > 0 ? (
          favoriteItems.map(item => (
            <motion.div 
              key={item.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectSymbol(item)}
              className="p-5 bg-white rounded-2xl border border-ling-ink/5 shadow-sm flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-ling-soft flex items-center justify-center text-ling-ink font-serif font-bold text-xl">
                {item.name[0]}
              </div>
              <div className="text-center">
                <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                <p className="text-[10px] text-ling-ink/40 line-clamp-1">{item.brief}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 text-center py-20">
            <div className="w-16 h-16 bg-ling-soft rounded-full flex items-center justify-center mx-auto mb-4 text-ling-ink/20">
              <Star size={32} />
            </div>
            <p className="text-ling-ink/30 text-sm">暂无收藏内容</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SettingsScreen({ onBack, userData, onToggleCategory }: { onBack: () => void, userData: any, onToggleCategory: (id: string) => void }) {
  const visibleCategories = userData.visibleCategories || ['qmdj', 'tysn', 'dlr', 'bzml', 'zwds', 'mhys'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full pt-12 pb-20 px-6 overflow-y-auto"
    >
      <header className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white border border-ling-ink/10 flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-serif font-bold">设置</h2>
      </header>

      <section className="mb-8">
        <h3 className="text-xs font-bold text-ling-accent mb-6 tracking-widest uppercase">首页显示门类</h3>
        <div className="space-y-3">
          {METAPHYSICS_DATA.map(cat => {
            const isVisible = visibleCategories.includes(cat.id);
            return (
              <div 
                key={cat.id}
                onClick={() => onToggleCategory(cat.id)}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-ling-ink/5 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ling-soft flex items-center justify-center text-ling-ink">
                    <CategoryIcon name={cat.icon} size={16} />
                  </div>
                  <span className="text-sm font-medium">{cat.name}</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${isVisible ? 'bg-ling-accent' : 'bg-ling-ink/10'}`}>
                  <motion.div 
                    animate={{ x: isVisible ? 20 : 2 }}
                    className="absolute top-1 left-0 w-3 h-3 bg-white rounded-full shadow-sm"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-[10px] text-ling-ink/30 leading-relaxed">
          您可以根据个人喜好，在首页隐藏或显示不同的玄学门类。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xs font-bold text-ling-accent mb-6 tracking-widest uppercase">应用信息</h3>
        <div className="bg-white rounded-2xl border border-ling-ink/5 overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-ling-ink/5">
            <span className="text-sm">当前版本</span>
            <span className="text-xs text-ling-ink/30 font-mono">v1.2.0</span>
          </div>
          <div className="p-4 flex items-center justify-between">
            <span className="text-sm">数据同步</span>
            <span className="text-xs text-emerald-500 font-bold">已开启</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
