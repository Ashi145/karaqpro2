import { useState, useEffect, createContext, useContext } from 'react';
import black1 from '@/assets/images/black1.jpeg';
import black2 from '@/assets/images/black2.jpeg';
import black3 from '@/assets/images/black3.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic2,
  Music,
  Smartphone,
  Users,
  ChevronRight,
  Star,
  Play,
  Monitor,
  BarChart3,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
  Volume2,
  Apple,
  TrendingUp,
  Globe,
  Headphones,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
} from 'lucide-react';

// ==================== AUTH MODAL CONTEXT ====================
type AuthMode = 'login' | 'signup';
type AuthContextType = {
  openAuth: (mode?: AuthMode) => void;
};
const AuthContext = createContext<AuthContextType>({ openAuth: () => {} });
const useAuth = () => useContext(AuthContext);

// ==================== IMAGES ====================
const IMAGES = {
  heroNightclub: 'https://images.pexels.com/photos/20826894/pexels-photo-20826894.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
  dancingCrowd: 'https://images.pexels.com/photos/6173886/pexels-photo-6173886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  djMixing: 'https://images.pexels.com/photos/16723014/pexels-photo-16723014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  djPortrait: 'https://images.pexels.com/photos/9005456/pexels-photo-9005456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900',
  micStage: 'https://images.pexels.com/photos/26530062/pexels-photo-26530062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  karaokeParty: 'https://images.pexels.com/photos/18433815/pexels-photo-18433815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
  womanSinging: 'https://images.pexels.com/photos/7887041/pexels-photo-7887041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=750',
  friendsKaraoke: 'https://images.pexels.com/photos/29298514/pexels-photo-29298514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=750',
  djTanktop: 'https://images.pexels.com/photos/27570792/pexels-photo-27570792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=750',
  nightclubDance: 'https://images.pexels.com/photos/6173843/pexels-photo-6173843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
};

// ==================== AUTH MODAL ====================
function AuthModal({
  isOpen,
  mode,
  onClose,
  onSwitchMode,
}: {
  isOpen: boolean;
  mode: AuthMode;
  onClose: () => void;
  onSwitchMode: (mode: AuthMode) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    venueName: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: just show alert
    alert(`${mode === 'login' ? 'Logging in' : 'Signing up'} as ${formData.email}\n(Demo only)`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md max-h-[95vh] overflow-y-auto bg-gradient-to-b from-gray-900 via-black to-black border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-pink-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative gradient blobs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl -z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl -z-0 pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="relative p-6 sm:p-8">
              {/* Logo & Header */}
              <div className="text-center mb-5 sm:mb-6">
                <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 items-center justify-center shadow-lg shadow-pink-500/40 mb-3">
                  <Mic2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">
                  {mode === 'login' ? 'Welcome back' : 'Join KaraQpro'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  {mode === 'login'
                    ? 'Sign in to manage your venue'
                    : 'Create your account in seconds'}
                </p>
              </div>

              {/* Tab switcher */}
              <div className="flex p-1 mb-5 sm:mb-6 bg-white/5 border border-white/10 rounded-full">
                <button
                  onClick={() => onSwitchMode('login')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                    mode === 'login'
                      ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white shadow-lg shadow-pink-500/25'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => onSwitchMode('signup')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                    mode === 'signup'
                      ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white shadow-lg shadow-pink-500/25'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Social Buttons */}
              <div className="space-y-2 mb-4">
                <button className="w-full py-2.5 sm:py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
                <button className="w-full py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Apple className="w-4 h-4" />
                  Continue with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-4 sm:my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-black text-gray-500">or with email</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {mode === 'signup' && (
                  <>
                    <AuthInput
                      icon={<User className="w-4 h-4" />}
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                      required
                    />
                    <AuthInput
                      icon={<Mic2 className="w-4 h-4" />}
                      type="text"
                      placeholder="Venue name"
                      value={formData.venueName}
                      onChange={(v) => setFormData({ ...formData, venueName: v })}
                      required
                    />
                  </>
                )}
                <AuthInput
                  icon={<Mail className="w-4 h-4" />}
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  required
                />
                <div className="relative">
                  <AuthInput
                    icon={<Lock className="w-4 h-4" />}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(v) => setFormData({ ...formData, password: v })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {mode === 'login' && (
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                      <input type="checkbox" className="rounded accent-pink-500" />
                      Remember me
                    </label>
                    <a href="#" className="text-pink-400 hover:text-pink-300">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full mt-4 py-3 sm:py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:shadow-2xl hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2 group"
                >
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Demo hint */}
              <div className="mt-4 p-3 rounded-xl bg-pink-500/5 border border-pink-500/10 text-center">
                <p className="text-xs text-pink-300">
                  ✦ Demo: <span className="font-mono">admin@lounge.com</span> / <span className="font-mono">password123</span>
                </p>
              </div>

              {/* Switch mode link */}
              <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
                {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => onSwitchMode(mode === 'login' ? 'signup' : 'login')}
                  className="text-pink-400 hover:text-pink-300 font-semibold"
                >
                  {mode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AuthInput({
  icon,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.07] transition-colors"
      />
    </div>
  );
}

// ==================== NAVBAR ====================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openAuth } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16 lg:h-20">
          <a href="#" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-500/40 group-hover:shadow-pink-500/60 transition-shadow">
              <Mic2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-base sm:text-xl font-bold text-white">
              Kara<span className="gradient-text">Qpro</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Features', href: '#features' },
              { label: 'Discover', href: '#discover' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Community', href: '#community' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>



          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Discover', href: '#discover' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Community', href: '#community' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors py-1.5 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ==================== INLINE AUTH FORM ====================
function InlineAuthForm() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    venueName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${mode === 'login' ? 'Logging in' : 'Signing up'} as ${formData.email}\n(Demo only)`);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-gradient-to-b from-gray-900 via-black to-black border border-white/10 rounded-3xl shadow-2xl shadow-pink-500/20 p-6">
      <div className="relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="text-center mb-4">
            <div className="inline-flex w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 items-center justify-center shadow-lg shadow-pink-500/40 mb-2">
              <Mic2 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-black text-white">
              {mode === 'login' ? 'Welcome back' : 'Join KaraQpro'}
            </h2>
            <p className="text-xs text-gray-400">
              {mode === 'login' ? 'Sign in to manage your venue' : 'Create your account in seconds'}
            </p>
          </div>

          <div className="flex p-1 mb-4 bg-white/5 border border-white/10 rounded-full">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white shadow-lg shadow-pink-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white shadow-lg shadow-pink-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === 'signup' && (
              <>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"><User className="w-4 h-4" /></div>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.07] transition-colors"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"><Mic2 className="w-4 h-4" /></div>
                  <input
                    type="text"
                    placeholder="Venue name"
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.07] transition-colors"
                  />
                </div>
              </>
            )}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"><Mail className="w-4 h-4" /></div>
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.07] transition-colors"
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"><Lock className="w-4 h-4" /></div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/[0.07] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:shadow-2xl hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2 group"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-3 p-3 rounded-xl bg-pink-500/5 border border-pink-500/10 text-center">
            <p className="text-xs text-pink-300">
              ✦ Demo: <span className="font-mono">admin@lounge.com</span> / <span className="font-mono">password123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== HERO SECTION ====================
function Hero() {
  const { openAuth } = useAuth();

  return (
    <section className="relative min-h-[88vh] sm:min-h-[100svh] flex items-center justify-center overflow-hidden bg-black pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-0">
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroNightclub}
          alt="People dancing in nightclub"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-600/30 rounded-full blur-[100px] sm:blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/20 rounded-full blur-[100px] sm:blur-[120px] animate-float stagger-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[11px] sm:text-sm text-pink-300"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-pink-500"></span>
              </span>
              Now Live in 500+ Venues
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white">
              The world
              <br />
              <span className="gradient-text">is yours.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              The pro karaoke platform powering legendary nights. Manage your venue, host shows, and let singers shine.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1 sm:pt-2">
              <AppStoreBadge type="apple" />
              <AppStoreBadge type="google" />
            </div>
          </motion.div>

          {/* Right side - inline auth form (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            <InlineAuthForm />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-4 gap-2 sm:gap-8 mt-6 sm:mt-16 lg:mt-20 pt-4 sm:pt-8 border-t border-white/10"
        >
          {[
            { value: '500+', label: 'Venues' },
            { value: '50K+', label: 'Songs' },
            { value: '100K+', label: 'Shows' },
            { value: '4.9★', label: 'Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg sm:text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
              <div className="text-[10px] sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ==================== APP STORE BADGE ====================
function AppStoreBadge({ type }: { type: 'apple' | 'google' }) {
  return (
    <button className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all">
      {type === 'apple' ? (
        <Apple className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      ) : (
        <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="white">
          <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
        </svg>
      )}
      <div className="text-left">
        <div className="text-[8px] sm:text-[10px] text-gray-400 leading-none">{type === 'apple' ? 'Download on the' : 'GET IT ON'}</div>
        <div className="text-[10px] sm:text-sm font-bold text-white leading-tight mt-0.5">{type === 'apple' ? 'App Store' : 'Google Play'}</div>
      </div>
    </button>
  );
}

// ==================== MARQUEE SECTION ====================
function MarqueeSection() {
  const items = [
    '🎤 Live Queue',
    '🎵 50K+ Songs',
    '📱 Mobile Requests',
    '🖥️ Lyrics Display',
    '📊 Analytics',
    '👥 Staff Mgmt',
    '🎛️ DJ Controls',
    '🌐 Multi-Language',
  ];

  return (
    <div className="bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 py-2 sm:py-4 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-3 sm:mx-8 text-[11px] sm:text-sm font-bold text-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ==================== FEATURED EXPERIENCES ====================
function FeaturedExperiences() {
  const cards = [
    {
      image: black1,
      tag: 'For Singers',
      title: 'Belt out your favorites',
      description: '50,000+ songs with lyrics, key control, and tempo adjust.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      image: black2,
      tag: 'For DJs',
      title: 'Pro mixing controls',
      description: 'Live audio mixing and real-time key changes. Built for performance.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      image: black3,
      tag: 'For Venues',
      title: 'Pack the house every night',
      description: 'Manage staff, track revenue, and analyze what works.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="discover" className="py-10 sm:py-24 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] sm:text-sm text-pink-400 mb-3 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Built for Everyone
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-6 leading-tight">
            One platform.
            <br />
            <span className="gradient-text">Endless possibilities.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-gray-400 px-2">
            Whether you're a venue owner, a DJ, or a passionate singer — KaraQpro has the tools to make every night unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative h-[200px] sm:h-[400px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`} />

              <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end">
                <span className={`inline-block self-start px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold text-white bg-gradient-to-r ${card.gradient} mb-2 sm:mb-4 uppercase tracking-wider`}>
                  {card.tag}
                </span>
                <h3 className="text-base sm:text-3xl font-black text-white mb-1 sm:mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-300 mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  {card.description}
                </p>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-white group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURE SHOWCASE ====================
function FeatureShowcase() {
  return (
    <section id="features" className="py-10 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-pink-600/10 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-600/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-32">
        <FeatureRow
          image={IMAGES.micStage}
          imageAlt="Microphone on stage"
          tag="Venue Management"
          title="Run your venue like a pro"
          description="From staff schedules to revenue tracking, manage every aspect of your karaoke night from one beautiful dashboard."
          features={[
            'Multi-staff management with roles',
            'Real-time revenue and tip tracking',
            'Event scheduling and promotions',
            'Custom branded singer experience',
          ]}
          gradient="from-pink-500 to-rose-500"
          reverse={false}
        />
        <FeatureRow
          image={IMAGES.djPortrait}
          imageAlt="DJ in nightclub"
          tag="DJ Dashboard"
          title="Total control of the show"
          description="Built for professional KJs and DJs. Manage singer rotation, adjust key and tempo in real-time, and keep the energy flowing."
          features={[
            'Automatic singer rotation queue',
            'Real-time key and tempo adjustment',
            'Lyrics display on any screen',
            'Customizable news ticker and effects',
          ]}
          gradient="from-orange-500 to-amber-500"
          reverse={true}
        />
        <FeatureRow
          image={IMAGES.friendsKaraoke}
          imageAlt="Friends doing karaoke"
          tag="Singer Mobile App"
          title="Singers love the experience"
          description="Your guests browse the catalog, queue songs, set their key, and even leave tips — all from their own phones."
          features={[
            'Browse 50,000+ songs by mood or genre',
            'Queue songs and see your position',
            'Adjust your key before you sing',
            'Save favorites and view your history',
          ]}
          gradient="from-purple-500 to-pink-500"
          reverse={false}
        />
      </div>
    </section>
  );
}

function FeatureRow({
  image,
  imageAlt,
  tag,
  title,
  description,
  features,
  gradient,
  reverse,
}: {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  reverse: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/12] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className={`absolute -inset-4 bg-gradient-to-br ${gradient} opacity-20 blur-3xl -z-10 rounded-3xl`} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-2.5 sm:space-y-6"
      >
        <span className={`inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-gradient-to-r ${gradient} uppercase tracking-wider`}>
          {tag}
        </span>
        <h3 className="text-xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-lg text-gray-400 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-1.5 sm:space-y-3 pt-1 sm:pt-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-base text-gray-300">
              <CheckCircle2 className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-pink-400`} />
              {feature}
            </li>
          ))}
        </ul>
        <button className={`mt-2 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r ${gradient} hover:scale-105 transition-transform shadow-lg`}>
          Explore More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </motion.div>
    </div>
  );
}

// ==================== TRENDING SINGERS ====================
function TrendingSingers() {
  const singers = [
    { name: 'Sarah M.', song: "Don't Stop Believin'", image: black1, plays: '2.4K', emoji: '🎤' },
    { name: 'Marcus J.', song: 'Bohemian Rhapsody', image: IMAGES.djPortrait, plays: '1.8K', emoji: '🎸' },
    { name: 'Jessica L.', song: 'I Will Survive', image: black3, plays: '3.1K', emoji: '💃' },
    { name: 'Dave R.', song: 'Sweet Caroline', image: IMAGES.djTanktop, plays: '1.5K', emoji: '🎙️' },
  ];

  return (
    <section className="py-10 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4 mb-5 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] sm:text-sm text-orange-400 mb-2 sm:mb-4">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              Trending This Week
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Tonight's biggest
              <br />
              <span className="gradient-text">karaoke moments</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {singers.map((singer, i) => (
            <motion.div
              key={singer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[3/4] rounded-xl sm:rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={singer.image}
                alt={singer.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-pink-500/50">
                  <Play className="w-4 h-4 sm:w-7 sm:h-7 text-white ml-0.5 sm:ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-black/60 backdrop-blur-md">
                <Headphones className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pink-400" />
                <span className="text-[9px] sm:text-xs text-white font-semibold">{singer.plays}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                  <span className="text-sm sm:text-lg">{singer.emoji}</span>
                  <span className="text-[11px] sm:text-sm font-bold text-white truncate">{singer.name}</span>
                </div>
                <p className="text-[9px] sm:text-xs text-gray-300 truncate">{singer.song}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== QUICK FEATURES GRID ====================
function QuickFeatures() {
  const features = [
    { icon: <Music className="w-4 h-4 sm:w-6 sm:h-6" />, title: '50K+ Songs', desc: 'Massive catalog', color: 'from-pink-500 to-rose-500' },
    { icon: <Smartphone className="w-4 h-4 sm:w-6 sm:h-6" />, title: 'Mobile App', desc: 'Request from phone', color: 'from-orange-500 to-amber-500' },
    { icon: <Monitor className="w-4 h-4 sm:w-6 sm:h-6" />, title: 'Lyrics Display', desc: 'Sync to any screen', color: 'from-purple-500 to-pink-500' },
    { icon: <Volume2 className="w-4 h-4 sm:w-6 sm:h-6" />, title: 'Audio Mixing', desc: 'Key & tempo', color: 'from-red-500 to-orange-500' },
    { icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />, title: 'Singer Rotation', desc: 'Auto queue', color: 'from-cyan-500 to-blue-500' },
    { icon: <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6" />, title: 'Live Analytics', desc: 'Track metrics', color: 'from-emerald-500 to-teal-500' },
    { icon: <Globe className="w-4 h-4 sm:w-6 sm:h-6" />, title: 'Multi-Language', desc: '40+ languages', color: 'from-violet-500 to-purple-500' },
    { icon: <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />, title: 'Cloud Sync', desc: 'Everywhere', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <section className="py-10 sm:py-24 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-6 leading-tight">
            Every feature you need.
            <br />
            <span className="gradient-text">None you don't.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-2 sm:mb-4 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-xs sm:text-base font-bold text-white mb-0.5 sm:mb-1">{f.title}</h3>
              <p className="text-[10px] sm:text-sm text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function Testimonials() {
  const testimonials = [
    {
      name: 'Marcus Johnson',
      role: 'Owner, The Velvet Mic',
      avatar: '🎤',
      content:
        "KaraQpro transformed our karaoke nights. Queue management used to be chaos — now it's seamless. Revenue is up 40%.",
      rating: 5,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Sarah Chen',
      role: 'DJ & Karaoke Host',
      avatar: '🎧',
      content:
        'The mobile app is a game changer. Singers love being able to request songs from their phones. No more paper slips!',
      rating: 5,
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      name: 'David Park',
      role: 'Manager, Neon Lounge',
      avatar: '🌟',
      content:
        'The analytics dashboard gives me insights I never had before. I can see exactly what works and optimize.',
      rating: 5,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="community" className="py-10 sm:py-24 lg:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] sm:text-sm text-yellow-400 mb-3 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400" />
            Loved by Venues
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-6 leading-tight">
            The community
            <br />
            <span className="gradient-text">speaks for itself</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-6 text-xs sm:text-base lg:text-lg">"{t.content}"</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm sm:text-xl flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-base font-bold text-white truncate">{t.name}</div>
                  <div className="text-[10px] sm:text-sm text-gray-500 truncate">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== PRICING ====================
function Pricing() {
  const { openAuth } = useAuth();
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out KaraQpro',
      features: ['Up to 1 venue', '50 songs', 'Basic queue', 'Mobile app', 'Community support'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/mo',
      description: 'For serious venues and pro DJs',
      features: ['Up to 3 venues', 'Unlimited songs', 'Advanced queue', 'Full analytics', 'Priority support', 'Custom branding', 'Staff management'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/mo',
      description: 'For chains and large operations',
      features: ['Unlimited venues', 'Everything in Pro', 'API access', 'Dedicated manager', 'Custom integrations', 'White-label', 'SLA guarantee'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-10 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(236,72,153,0.15),_transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-sm text-emerald-400 mb-3 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Simple Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 sm:mb-6 leading-tight">
            Plans that scale
            <br />
            <span className="gradient-text">with your venue</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-gray-400">
            Start free, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-pink-900/40 via-black to-black border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20'
                  : 'bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 sm:-top-4 left-1/2 -translate-x-1/2 px-2.5 py-0.5 sm:px-4 sm:py-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-[10px] sm:text-xs font-bold text-white whitespace-nowrap shadow-lg shadow-pink-500/30">
                  ⭐ Most Popular
                </div>
              )}

              <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 sm:mb-2">{plan.name}</h3>
              <p className="text-[10px] sm:text-sm text-gray-500 mb-3 sm:mb-6">{plan.description}</p>

              <div className="mb-3 sm:mb-8">
                <span className="text-3xl sm:text-5xl font-black text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-500 text-xs sm:text-base ml-1">{plan.period}</span>}
              </div>

              <ul className="space-y-1.5 sm:space-y-3 mb-3 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-1.5 sm:gap-3 text-[11px] sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0 mt-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openAuth('signup')}
                className={`w-full py-2.5 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA SECTION ====================
function CTASection() {
  const { openAuth } = useAuth();
  return (
    <section className="py-10 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.nightclubDance} alt="Nightclub" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-pink-600/30 via-red-500/30 to-orange-500/30 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-[10px] sm:text-sm text-pink-300">
            <Mic2 className="w-3 h-3 sm:w-4 sm:h-4" />
            Ready to transform your venue?
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95]">
            Your stage
            <br />
            <span className="gradient-text">awaits.</span>
          </h2>

          <p className="text-xs sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join 500+ venues already running unforgettable karaoke nights with KaraQpro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
            <motion.button
              onClick={() => openAuth('signup')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-full hover:shadow-2xl hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2"
            >
              Register Your Venue
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/15 transition-all">
              Schedule Demo →
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-4">
            <AppStoreBadge type="apple" />
            <AppStoreBadge type="google" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-6 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 mb-5 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 flex items-center justify-center">
                <Mic2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-base sm:text-xl font-bold text-white">
                Kara<span className="gradient-text">Qpro</span>
              </span>
            </div>
            <p className="text-[10px] sm:text-sm text-gray-500 leading-relaxed mb-2 sm:mb-4">
              The professional karaoke platform for venues, DJs, and hosts worldwide.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {['🐦', '📷', '🎵', '📘'].map((s, i) => (
                <button key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-xs sm:text-sm transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {[
            {
              title: 'Product',
              links: [
                { label: 'Features', href: '#features' },
                { label: 'Dashboard', href: '#dashboard' },
                { label: 'Mobile App', href: '#mobile-app' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Changelog', href: '#changelog' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '#about' },
                { label: 'Blog', href: '#blog' },
                { label: 'Careers', href: '#careers' },
                { label: 'Press', href: '#press' },
                { label: 'Partners', href: '#partners' },
              ],
            },
            {
              title: 'Support',
              links: [
                { label: 'Help Center', href: '#help-center' },
                { label: 'Documentation', href: '#documentation' },
                { label: 'API', href: '#api' },
                { label: 'Status', href: '#status' },
                { label: 'Contact', href: '#contact' },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] sm:text-sm font-bold text-white mb-2 sm:mb-4 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-1.5 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[10px] sm:text-sm text-gray-500 hover:text-pink-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-4 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-[10px] sm:text-sm text-gray-600">
            © 2026 KaraQpro. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-[10px] sm:text-sm text-gray-600 hover:text-gray-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== PAGE ROUTES ====================
const PAGE_TITLES: Record<string, { title: string; description: string }> = {
  home: { title: 'KaraQ Pro', description: 'Where every voice finds its stage.' },
  features: { title: 'Features', description: 'Everything a great karaoke night needs.' },
  dashboard: { title: 'Dashboard', description: 'Venue operations, live insights and event control.' },
  'mobile-app': { title: 'Mobile App', description: 'Guests request songs and join the vibe from anywhere.' },
  pricing: { title: 'Pricing', description: 'Flexible plans for nights, venues and music communities.' },
  changelog: { title: 'Changelog', description: 'What is new across the KaraQ experience.' },
  about: { title: 'About', description: 'A human story about music, people and community.' },
  blog: { title: 'Blog', description: 'Ideas, stories and nightlife inspiration.' },
  careers: { title: 'Careers', description: 'Build memorable nights with the KaraQ team.' },
  press: { title: 'Press', description: 'Press kit, stories and venue spotlights.' },
  partners: { title: 'Partners', description: 'Hospitality, entertainment and community partnerships.' },
  'help-center': { title: 'Help Center', description: 'Support for singers, hosts, DJs and venues.' },
  documentation: { title: 'Documentation', description: 'How KaraQ works behind the scenes.' },
  api: { title: 'API', description: 'Integrations and access for venue teams.' },
  status: { title: 'Status', description: 'Platform stability and operational updates.' },
  contact: { title: 'Contact', description: 'Say hello and talk through your next night.' },
};

function getCurrentPageHash(): string {
  if (typeof window === 'undefined') return 'home';

  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  return hash && PAGE_TITLES[hash] ? hash : 'home';
}

function navigateToPage(page: string) {
  const target = page === 'home' ? '' : `#${page}`;
  window.location.hash = target;
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-200">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-relaxed text-slate-300">{copy}</p>}
    </div>
  );
}

function FeaturePage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Features"
          title="A room built for the moment, the crowd and the song."
          copy="KaraQ helps venues, DJ teams and singers create smoother nights, warmer rooms and better memories."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Live queue', copy: 'See who is next, what is requested, and how the room is moving in real time.', icon: <Music className="h-6 w-6" /> },
            { title: 'Smart DJ controls', copy: 'Keep songs, pacing and the room flow consistent from booth to stage.', icon: <Monitor className="h-6 w-6" /> },
            { title: 'Singer app', copy: 'Guests can browse songs, queue requests and join from their phone in seconds.', icon: <Smartphone className="h-6 w-6" /> },
            { title: 'Venue dashboard', copy: 'Track event rhythm, operations and the details that make a night run smoothly.', icon: <BarChart3 className="h-6 w-6" /> },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#0a1323] p-5">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 text-white">{item.icon}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <FeatureShowcase />
      <QuickFeatures />
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Dashboard"
          title="See the room before it changes."
          copy="From the host stand to the bar, the dashboard keeps the night calm, clear and moving."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Songs queued', value: '184', change: '+27%' },
            { label: 'Audience engaged', value: '76%', change: '+12%' },
            { label: 'Average wait', value: '4m', change: '-18%' },
            { label: 'Venue mood', value: 'High', change: 'Strong' },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-[#0a1323] p-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
              <div className="mt-4 text-3xl font-black text-white">{item.value}</div>
              <div className="mt-2 text-sm text-pink-200">{item.change}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0b1220] p-6">
            <h3 className="text-xl font-bold text-white">Tonight’s flow</h3>
            <div className="mt-6 space-y-4">
              {['Doors open', 'First singer', 'Open mic', 'Peak hour', 'Final encore'].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-xs font-bold text-white">{index + 1}</div>
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm text-slate-300">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b1220] p-6">
            <h3 className="text-xl font-bold text-white">What matters most</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>• Smooth singer rotation</li>
              <li>• Clear queue visibility</li>
              <li>• Team communication</li>
              <li>• Better room pacing</li>
              <li>• Stronger guest participation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileAppPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-200">
              <Smartphone className="h-3.5 w-3.5" />
              Mobile app
            </div>
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">Your next song is already in your pocket.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              The app lets guests discover the room, queue songs and jump into the night without friction.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#0b1220] p-6">
            <div className="mx-auto max-w-xs rounded-[2rem] bg-black p-4 shadow-2xl shadow-pink-500/20">
              <div className="mb-4 h-1.5 w-16 rounded-full bg-white/15 mx-auto" />
              <div className="space-y-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-pink-200">Now playing</div>
                  <div className="mt-2 text-lg font-bold text-white">Don’t Stop Believin’</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Queue</div>
                  <div className="mt-2 text-sm text-slate-300">You are #7 in line</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PricingPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Flexible plans for every kind of night."
          copy="Start simple, grow confidently and support the room when the energy spikes."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            { name: 'Starter', price: '$0', features: ['1 venue', 'Basic queue', 'Guest access', 'Email support'] },
            { name: 'Pro', price: '$49', features: ['Unlimited songs', 'DJ controls', 'Venue insights', 'Priority support'], popular: true },
            { name: 'Enterprise', price: '$149', features: ['Multi-venue setup', 'Custom branding', 'Dedicated onboarding', 'White-label support'] },
          ].map((plan) => (
            <div key={plan.name} className={`rounded-[1.7rem] border p-6 ${plan.popular ? 'border-pink-400/40 bg-gradient-to-b from-pink-500/10 to-[#0a1220]' : 'border-white/10 bg-[#0b1220]'}`}>
              {plan.popular && <div className="mb-4 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-950">Most popular</div>}
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <div className="mt-6 text-4xl font-black text-white">{plan.price}</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-pink-300" />{feature}</li>
                ))}
              </ul>
              <button type="button" className="mt-8 w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 px-4 py-3 text-sm font-semibold text-slate-950">Choose plan</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ChangelogPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Changelog"
          title="Fresh updates for better nights."
          copy="Recent improvements across performance, storytelling and venue workflows."
        />

        <div className="mt-12 space-y-5">
          {[
            ['August 2026', 'Improved story-driven homepage storytelling and premium imagery direction.'],
            ['July 2026', 'Expanded venue analytics and smoother mobile queue interactions.'],
            ['June 2026', 'Added richer support and contact flows for venue teams and DJs.'],
          ].map(([date, entry]) => (
            <div key={date} className="rounded-[1.5rem] border border-white/10 bg-[#0b1220] p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-pink-200">{date}</div>
              <p className="mt-3 text-base text-slate-300">{entry}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-200">
              <Mic2 className="h-3.5 w-3.5" />
              About
            </div>
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">We believe everyone has a song.</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              KaraQ exists to make music feel accessible, social and worth remembering. We create the rhythm behind nights that people talk about long after the room clears.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]">
            <img src={IMAGES.heroNightclub} alt="Crowd at karaoke venue" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Blog" title="Stories from the room." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {['Why karaoke feels like community', 'How good venues shape the night', 'The songs that make a room feel alive'].map((title) => (
            <article key={title} className="rounded-[1.5rem] border border-white/10 bg-[#0b1220] p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-pink-200">Story</div>
              <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">A closer look at the music, people and atmosphere that make karaoke memorable.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function CareersPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Careers" title="Build nights people remember." copy="Join the team shaping memorable music experiences and hospitality moments." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {['Product designer', 'Venue success lead', 'Operations host'].map((role) => (
            <div key={role} className="rounded-[1.5rem] border border-white/10 bg-[#0b1220] p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-pink-200">Open role</div>
              <h3 className="mt-4 text-xl font-bold text-white">{role}</h3>
              <p className="mt-3 text-sm text-slate-300">Help shape the experience for singers, hosts, DJs and venues.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PressPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Press" title="KaraQ in the room, in the stories and in the culture." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {['Venue feature', 'Community spotlight', 'Hospitality story', 'Music-first brand story'].map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-[#0b1220] p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-pink-200">Media</div>
              <h3 className="mt-4 text-xl font-bold text-white">{item}</h3>
              <p className="mt-3 text-sm text-slate-300">An editorial overview of the KaraQ experience and its role across nightlife, hospitality and entertainment.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PartnersPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Partners" title="Bring more music, connection and memorable nights to the room." copy="From hospitality groups to entertainment brands, KaraQ creates premium community experiences." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {['Hospitality', 'Entertainment', 'Events'].map((partner) => (
            <div key={partner} className="rounded-[1.5rem] border border-white/10 bg-[#0b1220] p-6">
              <h3 className="text-xl font-bold text-white">{partner}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">Create branded nights, hosted experiences and loyalty moments that people remember.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SupportPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Help center" title="Need a hand?" copy="Support for singers, hosts, DJs, venue teams and partners." />
        <div className="mt-12 space-y-3">
          {[
            ['Singers', 'How do I request a song?'],
            ['Hosts', 'How do I manage the queue?'],
            ['DJs', 'How do I keep the room moving?'],
            ['Venues', 'How do I launch a new event?'],
            ['Account', 'How do I reset my password?'],
          ].map(([group, question]) => (
            <div key={group} className="rounded-[1.25rem] border border-white/10 bg-[#0b1220] p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-pink-200">{group}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{question}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DocumentationPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Documentation" title="How KaraQ helps the room run better." />
        <div className="mt-12 rounded-[1.75rem] border border-white/10 bg-[#0b1220] p-6">
          <ul className="space-y-4 text-sm text-slate-300">
            <li>• Event flow and queue management</li>
            <li>• Host and DJ workflows</li>
            <li>• Singer request and mobile participation</li>
            <li>• Venue operations and reporting</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function APIPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="API" title="Seamless integrations for venue teams." copy="Connect your event data, venue systems and operational workflows without disrupting the guest experience." />
      </section>
    </div>
  );
}

function StatusPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Status" title="Everything is running as expected." copy="Current platform health for events, queue flow and music operations." />
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="bg-[#020611] text-white">
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Let’s talk about your next night." copy="Whether you’re a singer, host, DJ, venue or partner, we’re listening." />
        <div className="mt-12 rounded-[1.75rem] border border-white/10 bg-[#0b1220] p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-400">Name</label>
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-400">Email</label>
              <input className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm text-slate-400">Message</label>
            <textarea className="h-36 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none" placeholder="Tell us what you need." />
          </div>
          <button type="button" className="mt-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-950">Send message</button>
        </div>
      </section>
    </div>
  );
}

function renderPage(page: string) {
  switch (page) {
    case 'features':
      return <FeaturePage />;
    case 'dashboard':
      return <DashboardPage />;
    case 'mobile-app':
      return <MobileAppPage />;
    case 'pricing':
      return <PricingPage />;
    case 'changelog':
      return <ChangelogPage />;
    case 'about':
      return <AboutPage />;
    case 'blog':
      return <BlogPage />;
    case 'careers':
      return <CareersPage />;
    case 'press':
      return <PressPage />;
    case 'partners':
      return <PartnersPage />;
    case 'help-center':
      return <SupportPage />;
    case 'documentation':
      return <DocumentationPage />;
    case 'api':
      return <APIPage />;
    case 'status':
      return <StatusPage />;
    case 'contact':
      return <ContactPage />;
    case 'home':
    default:
      return (
        <>
          <Hero />
          <MarqueeSection />
          <FeaturedExperiences />
          <FeatureShowcase />
          <TrendingSingers />
          <QuickFeatures />
          <Testimonials />
          <Pricing />
          <CTASection />
        </>
      );
  }
}

// ==================== MAIN APP ====================
export default function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [currentPage, setCurrentPage] = useState<string>(() => getCurrentPageHash());

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(getCurrentPageHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openAuth = (mode: AuthMode = 'login') => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <AuthContext.Provider value={{ openAuth }}>
      <div className="bg-black min-h-screen text-white overflow-x-hidden">
        <Navbar />
        <main>
          {renderPage(currentPage)}
        </main>
        <Footer />

        <AuthModal
          isOpen={authOpen}
          mode={authMode}
          onClose={() => setAuthOpen(false)}
          onSwitchMode={setAuthMode}
        />
      </div>
    </AuthContext.Provider>
  );
}
