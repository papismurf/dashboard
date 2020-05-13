const DEMO = {
  prefix: 'Novum ', // note: with space at end
  link: 'javascript:;', // javascript:;
  home: '#/app/dashboard',
  home2: '/app/dashboard',
  productLink: '#/app/dashboard',
  user: 'Logged in User',
  login: '#/user/login',
  signUp: '#/user/sign-up',
  forgotPassword: '#/user/forgot-password',
  elevation: '#/app/foundation/elevation',
}

// header links
DEMO.headerLink = {
  profile: '#/app/page/about',
  about: '#/app/page/about',
  help: '#/app/page/contact',
  signOut: '#/user/login' // redirect login page
}


DEMO.list = {
  notifications: [
    {
      icon: 'mail',
      iconColor: 'bg-info text-body-reverse',
      title: '5 new Alerts',
      datetime: '1 hour ago'
    }, {
      icon: 'star',
      iconColor: 'bg-warning text-body-reverse',
      title: 'New data collection saved',
      datetime: '5 hour ago'
    }, {
      icon: 'add',
      iconColor: 'bg-success text-body-reverse',
      title: 'Task added successfully',
      datetime: 'Yesterday'
    }, {
      icon: 'delete',
      iconColor: 'bg-danger text-body-reverse',
      title: 'Company Aventus removed',
      datetime: 'A week ago'
    }
  ],
  messages: [
    {
      avatar: '',
      title: 'New Data for Stable coins',
      desc: 'New assets added to Stable coin data',
      datetime: '5 minutes ago'
    }, {
      avatar: '',
      title: 'Altcoin removed',
      desc: 'Jesuscoin no longer available',
      datetime: '15 minutes ago'
    }, {
      avatar: '',
      title: 'New Record High in BTC',
      desc: 'BTC has reached a record volume and asset price',
      datetime: '1 hour ago'
    }
  ],
  tasks: [
    {
      tag: 'WIP',
      tagColor: 'cyan',
      title: 'Platform version 2.0 available',
      desc: 'Novum Data Dashboard Platform 2.0 available, refresh browser if not automatically updated.'
    },
  ]
}

// used on Blog Cards,
DEMO.articles = [
  {
    img: 'assets/images-demo/assets/600_400-1.jpg',
    date: 'May 1st',
    title: 'Be Yourself',
    content: 'Be yourself; everyone else is already taken.',
    tag: 'Quotes',
    author: 'Oscar Wilde'
  }, {
    img: 'assets/images-demo/assets/600_400-2.jpg',
    date: 'May 1st',
    title: "When You're in Love",
    content: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    tag: 'Quotes',
    author: 'Dr. Seuss'
  }, {
    img: 'assets/images-demo/assets/600_400-3.jpg',
    date: 'May 1st',
    title: 'Once is Enough',
    content: 'You only live once, but if you do it right, once is enough.',
    tag: 'Quotes',
    author: 'Mae West'
  }, {
    img: 'assets/images-demo/assets/600_400-4.jpg',
    date: 'May 1st',
    title: 'Be the Change You Wish to See',
    content: 'Be the change that you wish to see in the world.',
    tag: 'Quotes',
    author: 'Mahatma Gandhi'
  }, {
    img: 'assets/images-demo/assets/600_400-5.jpg',
    date: 'May 1st',
    tag: 'Quotes',
    title: 'Music Matters',
    content: 'Without music, life would be a mistake',
    author: 'Friedrich Nietzsche'
  }, {
    img: 'assets/images-demo/assets/600_400-6.jpg',
    date: 'May 1st',
    title: 'To know a Man',
    content: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    tag: 'Quotes',
    author: 'J.K. Rowling'
  }
];

// used on Profile Cards,
DEMO.profiles = [
  {
    avatar: 'assets/images-demo/avatars/1.jpg',
    name: 'T Lewis',
    title: 'Engineer',
    desc: ""
  }, {
    avatar: 'assets/images-demo/avatars/2.jpg',
    name: 'D Hendo',
    title: 'Finance',
    desc: ''
  }, {
    avatar: 'assets/images-demo/avatars/3.jpg',
    name: 'A Captain',
    title: 'Engineer',
    desc: ''
  }, {
    avatar: 'assets/images-demo/avatars/4.jpg',
    name: 'J Son',
    title: 'Operations',
    desc: ''
  },
]

// Used on Portfolio,
DEMO.projects = [
  {
    img: `assets/images-demo/assets/600_400-1.jpg`,
    tag: 'PSD',
    name: 'Lorem ipsum dolor'
  }, {
    img: `assets/images-demo/assets/600_400-2.jpg`,
    tag: 'WordPress',
    name: 'Sit amet consectetur'
  }, {
    img: `assets/images-demo/assets/600_400-3.jpg`,
    tag: 'PSD',
    name: 'Adipisicing elit'
  }, {
    img: `assets/images-demo/assets/600_400-4.jpg`,
    tag: 'eCommerce',
    name: 'Sed do eiusmod'
  }, {
    img: `assets/images-demo/assets/600_400-5.jpg`,
    tag: 'Landing',
    name: 'Tempor incididunt ut'
  }, {
    img: `assets/images-demo/assets/600_400-6.jpg`,
    tag: 'WordPress',
    name: 'Labore et dolore'
  }
];

// used on Product Cards
DEMO.products = [
  {
    name: 'Silver Watch',
    img: 'assets/images-demo/products/watch-silver.png',
    sash: 'sash-primary',
    sash_icon: 'star',
    sash_text: 'Featured'
  }, {
    name: 'Black Watch',
    img: 'assets/images-demo/products/watch-black.png',
    sash: 'sash-info sash-icon-bold',
    sash_icon: 'card_giftcard',
    sash_text: 'Gift'
  }, {
    name: 'Red Watch',
    img: 'assets/images-demo/products/watch-edition-red.png',
    sash: 'sash-danger',
    sash_icon: 'favorite',
    sash_text: 'Popular',
    ribbon_type: 'ribbon-danger'
  }, {
    name: 'Blue Watch',
    img: 'assets/images-demo/products/watch-edition-blue.png',
    sash: '',
    sash_icon: 'star',
    sash_text: 'Featured'
  }, {
    name: 'Black Watch',
    img: 'assets/images-demo/products/watch-edition-black.png',
    sash: 'sash-danger',
    sash_icon: 'thumb_up',
    sash_text: 'Best Choice'
  }, {
    name: 'Sport Watch',
    img: 'assets/images-demo/products/watch-sport-blue.png',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New'
  }, {
    name: 'Sport Watch',
    img: 'assets/images-demo/products/watch-sport-green.png',
    sash: 'sash-warning',
    sash_icon: 'info',
    sash_text: 'Free Shipping',
    ribbon_type: 'ribbon-warning'
  }, {
    name: 'Sport Watch',
    img: 'assets/images-demo/products/watch-sport-white.png',
    sash: 'sash-white',
    sash_icon: 'star',
    sash_text: 'Featured'
  }
];


DEMO.iconCards = [
  {
    icon: 'phonelink',
    title: 'Responsive Design',
    content: 'Responsive design allows your website to fit on any screen and still be readable and usable.',
    color: 'primary'
  }, {
    icon: 'settings',
    title: 'Easy to Customize',
    content: 'Customizer make it easy. Build your own style simply by changing a few settings in the customizer',
    color: 'dark'
  }, {
    icon: 'code',
    title: 'Clean code',
    content: 'Clean code with popular Style Guide recommend by official team',
    color: 'secondary'
  }
];


export default DEMO;
