<?php
// ==========================================================
// Shared data used across all components
// ==========================================================

// Image URLs (Pexels stock photos)
$IMAGES = [
    'heroNightclub'    => 'https://images.pexels.com/photos/20826894/pexels-photo-20826894.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    'dancingCrowd'     => 'https://images.pexels.com/photos/6173886/pexels-photo-6173886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    'djMixing'         => 'https://images.pexels.com/photos/16723014/pexels-photo-16723014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    'djPortrait'       => 'https://images.pexels.com/photos/9005456/pexels-photo-9005456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900',
    'micStage'         => 'https://images.pexels.com/photos/26530062/pexels-photo-26530062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    'karaokeParty'     => 'https://images.pexels.com/photos/18433815/pexels-photo-18433815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    'womanSinging'     => 'https://images.pexels.com/photos/7887041/pexels-photo-7887041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=750',
    'friendsKaraoke'   => 'https://images.pexels.com/photos/29298514/pexels-photo-29298514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=750',
    'djTanktop'        => 'https://images.pexels.com/photos/27570792/pexels-photo-27570792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=750',
    'nightclubDance'   => 'https://images.pexels.com/photos/6173843/pexels-photo-6173843.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
];

// Navigation links
$NAV_LINKS = ['Features', 'Discover', 'Pricing', 'Community'];

// Hero stats
$HERO_STATS = [
    ['value' => '500+',  'label' => 'Venues'],
    ['value' => '50K+',  'label' => 'Songs'],
    ['value' => '100K+', 'label' => 'Shows'],
    ['value' => '4.9 ★', 'label' => 'Rating'],
];

// Marquee items
$MARQUEE_ITEMS = [
    '🎤 Live Queue',
    '🎵 50K+ Songs',
    '📱 Mobile Requests',
    '🖥️ Lyrics Display',
    '📊 Analytics',
    '👥 Staff Mgmt',
    '🎛️ DJ Controls',
    '🌐 Multi-Language',
];

// Featured experience cards (3 audiences)
$FEATURED_CARDS = [
    [
        'image'       => $IMAGES['karaokeParty'],
        'tag'         => 'For Singers',
        'title'       => 'Belt out your favorites',
        'description' => '50,000+ songs with lyrics, key control, and tempo adjust. Pick your song from your phone.',
        'gradient'    => 'from-pink-500 to-rose-500',
    ],
    [
        'image'       => $IMAGES['djMixing'],
        'tag'         => 'For DJs',
        'title'       => 'Pro mixing controls',
        'description' => 'Live audio mixing, real-time key changes, and seamless transitions. Built for performance.',
        'gradient'    => 'from-orange-500 to-amber-500',
    ],
    [
        'image'       => $IMAGES['dancingCrowd'],
        'tag'         => 'For Venues',
        'title'       => 'Pack the house every night',
        'description' => 'Manage staff, track revenue, schedule events, and analyze what works — all in one place.',
        'gradient'    => 'from-purple-500 to-pink-500',
    ],
];

// Feature showcase rows (alternating image+text)
$FEATURE_ROWS = [
    [
        'image'       => $IMAGES['micStage'],
        'imageAlt'    => 'Microphone on stage',
        'tag'         => 'Venue Management',
        'title'       => 'Run your venue like a pro',
        'description' => 'From staff schedules to revenue tracking, manage every aspect of your karaoke night from one beautiful dashboard. Set up events, customize song lists, and configure your venue\'s unique vibe.',
        'features'    => [
            'Multi-staff management with roles',
            'Real-time revenue and tip tracking',
            'Event scheduling and promotions',
            'Custom branded singer experience',
        ],
        'gradient' => 'from-pink-500 to-rose-500',
        'reverse'  => false,
    ],
    [
        'image'       => $IMAGES['djPortrait'],
        'imageAlt'    => 'DJ in nightclub',
        'tag'         => 'DJ Dashboard',
        'title'       => 'Total control of the show',
        'description' => 'Built for professional KJs and DJs. Manage singer rotation, adjust key and tempo in real-time, display lyrics on any screen, and keep the energy flowing all night long.',
        'features'    => [
            'Automatic singer rotation queue',
            'Real-time key and tempo adjustment',
            'Lyrics display on any screen',
            'Customizable news ticker and effects',
        ],
        'gradient' => 'from-orange-500 to-amber-500',
        'reverse'  => true,
    ],
    [
        'image'       => $IMAGES['friendsKaraoke'],
        'imageAlt'    => 'Friends doing karaoke',
        'tag'         => 'Singer Mobile App',
        'title'       => 'Singers love the experience',
        'description' => 'Your guests browse the catalog, queue songs, set their key, and even leave tips — all from their own phones. No more paper slips, no more shouting over the music.',
        'features'    => [
            'Browse 50,000+ songs by mood, genre, or year',
            'Queue songs and see your position',
            'Adjust your key before you sing',
            'Save favorites and view your history',
        ],
        'gradient' => 'from-purple-500 to-pink-500',
        'reverse'  => false,
    ],
];

// Trending singers
$TRENDING_SINGERS = [
    ['name' => 'Sarah M.',  'song' => "Don't Stop Believin'", 'image' => $IMAGES['womanSinging'],   'plays' => '2.4K', 'emoji' => '🎤'],
    ['name' => 'Marcus J.', 'song' => 'Bohemian Rhapsody',    'image' => $IMAGES['djPortrait'],     'plays' => '1.8K', 'emoji' => '🎸'],
    ['name' => 'Jessica L.','song' => 'I Will Survive',       'image' => $IMAGES['friendsKaraoke'], 'plays' => '3.1K', 'emoji' => '💃'],
    ['name' => 'Dave R.',   'song' => 'Sweet Caroline',       'image' => $IMAGES['djTanktop'],      'plays' => '1.5K', 'emoji' => '🎙️'],
];

// Quick features grid
$QUICK_FEATURES = [
    ['icon' => 'music',         'title' => '50K+ Songs',      'desc' => 'Massive licensed catalog',  'color' => 'from-pink-500 to-rose-500'],
    ['icon' => 'smartphone',    'title' => 'Mobile App',      'desc' => 'Singers request from phone','color' => 'from-orange-500 to-amber-500'],
    ['icon' => 'monitor',       'title' => 'Lyrics Display',  'desc' => 'Sync to any screen',        'color' => 'from-purple-500 to-pink-500'],
    ['icon' => 'volume-2',      'title' => 'Audio Mixing',    'desc' => 'Key & tempo control',       'color' => 'from-red-500 to-orange-500'],
    ['icon' => 'users',         'title' => 'Singer Rotation', 'desc' => 'Automatic queue mgmt',      'color' => 'from-cyan-500 to-blue-500'],
    ['icon' => 'bar-chart-3',   'title' => 'Live Analytics',  'desc' => 'Track every metric',        'color' => 'from-emerald-500 to-teal-500'],
    ['icon' => 'globe',         'title' => 'Multi-Language',  'desc' => 'Songs in 40+ languages',    'color' => 'from-violet-500 to-purple-500'],
    ['icon' => 'sparkles',      'title' => 'Cloud Sync',      'desc' => 'All devices, anywhere',     'color' => 'from-yellow-500 to-orange-500'],
];

// Testimonials
$TESTIMONIALS = [
    [
        'name'     => 'Marcus Johnson',
        'role'     => 'Owner, The Velvet Mic',
        'avatar'   => '🎤',
        'content'  => "KaraQpro transformed our karaoke nights. Queue management used to be chaos — now it's seamless. Revenue is up 40%.",
        'rating'   => 5,
        'gradient' => 'from-pink-500 to-rose-500',
    ],
    [
        'name'     => 'Sarah Chen',
        'role'     => 'DJ & Karaoke Host',
        'avatar'   => '🎧',
        'content'  => 'The mobile app is a game changer. Singers love being able to request songs from their phones. No more paper slips!',
        'rating'   => 5,
        'gradient' => 'from-orange-500 to-amber-500',
    ],
    [
        'name'     => 'David Park',
        'role'     => 'Manager, Neon Lounge',
        'avatar'   => '🌟',
        'content'  => 'The analytics dashboard gives me insights I never had before. I can see exactly what works and optimize accordingly.',
        'rating'   => 5,
        'gradient' => 'from-purple-500 to-pink-500',
    ],
];

// Pricing plans
$PRICING_PLANS = [
    [
        'name'        => 'Starter',
        'price'       => 'Free',
        'period'      => '',
        'description' => 'Perfect for trying out KaraQpro',
        'features'    => [
            'Up to 1 venue',
            '50 songs in library',
            'Basic queue management',
            'Mobile app access',
            'Community support',
        ],
        'cta'     => 'Get Started',
        'popular' => false,
    ],
    [
        'name'        => 'Pro',
        'price'       => '$49',
        'period'      => '/month',
        'description' => 'For serious venues and professional DJs',
        'features'    => [
            'Up to 3 venues',
            'Unlimited songs',
            'Advanced queue & rotation',
            'Full analytics dashboard',
            'Priority support',
            'Custom branding',
            'Staff management',
        ],
        'cta'     => 'Start Free Trial',
        'popular' => true,
    ],
    [
        'name'        => 'Enterprise',
        'price'       => '$149',
        'period'      => '/month',
        'description' => 'For chains and large operations',
        'features'    => [
            'Unlimited venues',
            'Unlimited everything',
            'API access',
            'Dedicated manager',
            'Custom integrations',
            'White-label option',
            'SLA guarantee',
        ],
        'cta'     => 'Contact Sales',
        'popular' => false,
    ],
];

// Footer sections
$FOOTER_SECTIONS = [
    [
        'title' => 'Product',
        'links' => ['Features', 'Dashboard', 'Mobile App', 'Pricing', 'Changelog'],
    ],
    [
        'title' => 'Company',
        'links' => ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    ],
    [
        'title' => 'Support',
        'links' => ['Help Center', 'Documentation', 'API', 'Status', 'Contact'],
    ],
];
