const realCandidatesData = [
  {
    "ballotNumber": "1",
    "name": "নির্জনা ইসলাম",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "সক-০৩৪১৪",
    "registrationNumber": "২০১৯২১৮৫০২",
    "department": "মৃত্তিকা, পানি ও পরিবেশ বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "মোঃ আইমান মাহমুদ",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "সয-০০৬৫৭",
    "registrationNumber": "২০২২৩১৩৪৯৪",
    "department": "জাপানিজ স্টাডিজ বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "মোঃ আরাফাত ইমরান",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "বব-০১৩৪৬",
    "registrationNumber": "২০২১৭১৫০৪৮",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "মোঃ ইফতেখার আকন্দ আকিব",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "এক-০০০০৪",
    "registrationNumber": "২০১৯৫১৭৭৫৩",
    "department": "অণুজীব বিজ্ঞান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "মোঃ সাজ্জাদ হোসাইন খাঁন",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "বএ-০০২৫৭",
    "registrationNumber": "২০১৯৮১৪৩১১",
    "department": "আরবি বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "মোছাঃ জান্নাতুন নাহার",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "শন-০৩৬৯৭",
    "registrationNumber": "২০২১৮১৫১৬৪",
    "department": "শিক্ষা ও গবেষণা ইনস্টিটিউট",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "মোহাম্মদ মাজেদুর রহমান",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "শহ-০১২৭০",
    "registrationNumber": "২০১৯২১৮৩৩১",
    "department": "ফলিত গণিত বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "সানজিদা আহমেদ",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "কম-০১৪৯৮",
    "registrationNumber": "২০২০৭২২০৫৯",
    "department": "গণিত বিভাগ",
    "hall": "বাংলাদেশ-কুয়েত মৈত্রী হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "অনিদ হাসান",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এক-০১০৭২",
    "registrationNumber": "২০২১৭১২৮৫২",
    "department": "ভূতত্ত্ব বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "আবদুল্লাহ ইবনে হাসান জামিল",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বব-০১১৩৭",
    "registrationNumber": "২০২৪৪১২৪০১",
    "department": "ব্যাংকিং ও ইন্সুরেন্স বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "আবু হায়াত মোঃ জুলফিকার (জেসান)",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এএ-০০৭৩২",
    "registrationNumber": "২০১৬৭১৩৩০৭",
    "department": "প্রিন্ট মেকিং বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "এইচ.এম. আমিরুল করিম (অমি)",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বব-০০২৭৬",
    "registrationNumber": "২০১৯২১৩৮৪০",
    "department": "ইংরেজী বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "জিনিয়া আক্তার সুইটি",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "ফম-০১০৩২",
    "registrationNumber": "২০২০৯১৭৫২২",
    "department": "নৃত্যকলা বিভাগ",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "নাঈম হোসেন",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বএ-০১৮৮৩",
    "registrationNumber": "২০১৯৩১৩৭৪০",
    "department": "সংস্কৃত বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "নুরুল ইসলাম",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বএ-০১৯৬৮",
    "registrationNumber": "২০১৯৬১৪৫৪৮",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "ফারিয়া মতিন (ইলা)",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "কম-০২১০৭",
    "registrationNumber": "২০২০০১৫৩৩৪",
    "department": "ব্যাংকিং ও ইন্সুরেন্স বিভাগ",
    "hall": "বাংলাদেশ-কুয়েত মৈত্রী হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "9",
    "name": "মুসাদ্দিক আলী ইবনে মোহাম্মাদ",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "জিয়া-০০৮৮০",
    "registrationNumber": "২০২১৯১৫৪৩৩",
    "department": "বাংলা বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "10",
    "name": "মো: আবু রাশেদ",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "সল-০০৬১০",
    "registrationNumber": "২০১৬৫১৬১৭১",
    "department": "সংগীত বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "11",
    "name": "মো: মাহাবুব খালাসী",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এএ-০০১৮২",
    "registrationNumber": "২০১৯৫১৩৯৩৭",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "12",
    "name": "মো:নাজমুল হাসান",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "জহ-০০১৩৯",
    "registrationNumber": "২০১৮২২৫১২৭",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "13",
    "name": "মোঃ ইব্রাহিম আদল",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এএ-০১১৯২",
    "registrationNumber": "২০২১৩১৩২১৫",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "14",
    "name": "মোঃ পারভেজ মাহমুদ নিলয়",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বএ-০০৮১৮",
    "registrationNumber": "২০২০২১২৪৯৮",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "15",
    "name": "মোঃ লানজু খান",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "মম-০১২৭৮",
    "registrationNumber": "২০২০৫১৯২৭২",
    "department": "সংগীত বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "16",
    "name": "মোহতাসিন বিল্লাহ ইমন",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "জস-০০৫৭৪",
    "registrationNumber": "২০১৮০২৫১৭৪",
    "department": "টুরিজম এন্ড হসপিটালিটি ম্যানেজমেন্ট বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "উম্মে ছালমা",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "সক-০০৫০৯",
    "registrationNumber": "২০২০৭১২৩৮৫",
    "department": "ইংরেজী বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "চেমন ফারিয়া ইসলাম মেঘলা",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "রক-০৫২২৩",
    "registrationNumber": "২০১৮৩২২৫৬১",
    "department": "সংগীত বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "জেইসান বকুল রিয়া (জেরী)",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "ফম-০২২৫৭",
    "registrationNumber": "২০২০৩১৮১৪৯",
    "department": "শিক্ষা ও গবেষণা ইনস্টিটিউট",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "তাজিন মোহাম্মদ আলবি",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "জহ-০০৭১৪",
    "registrationNumber": "২০১৯১১৩৬৪৩",
    "department": "তথ্যবিজ্ঞান ও গ্রন্থাগার ব্যবস্থাপনা বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "নূজিয়া হাসিন (রাশা)",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "ফম-০১৫৬৫",
    "registrationNumber": "২০১৯৫১৯২০১",
    "department": "ভাষাবিজ্ঞান বিভাগ",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "ফারজানা আক্তার (মিতু)",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "রক-০১৪১৩",
    "registrationNumber": "২০২২৪১৪৩১১",
    "department": "উর্দু বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "মিতু আক্তার",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "রক-০২৯৪৩",
    "registrationNumber": "২০১৮২২১৬৮০",
    "department": "ফারসি ভাষা ও সাহিত্য বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "মোঃ আরিফুল ইসলাম",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "শহ-০০৩৬৯",
    "registrationNumber": "২০২২৪২৫৫১৬",
    "department": "ফারসি ভাষা ও সাহিত্য বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "আকিব হাসান",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "এএ-০১২১৭",
    "registrationNumber": "২০২০৮১৮৩৭৯",
    "department": "শান্তি ও সংঘর্ষ অধ্যয়ন বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "ইমরান মিয়া (সাদমান)",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "মম-০১২৬৮",
    "registrationNumber": "২০১৯৯১৯২৯৮",
    "department": "শিল্পকলার ইতিহাস বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "এইচ. এ. এম. ফাহিম কবির",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "এএ-০১৩৬৭",
    "registrationNumber": "২০২২৬১৩০৬৮",
    "department": "স্বাস্থ্য অর্থনীতি ইনস্টিটিউট",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "জসীমউদ্দিন খান (খান জসীম)",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "বএ-০১৬৬৪",
    "registrationNumber": "২০১৫০১৪৭৬৪",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "তাসনিম বিন মাহফুজ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "বএ-০০০৯০",
    "registrationNumber": "২০২১১১৪৭৬৬",
    "department": "অর্থনীতি বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "নাফিজ বাশার আলিফ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০১৭৪৯",
    "registrationNumber": "২০২১৫১৪৯৪২",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "মুস্তাকীম মাহমুদ রাহীম",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০০৪২৮",
    "registrationNumber": "২০১৮৫২২১৮১",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "মেহেদী হাসান",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "বএ-০১৬৫৫",
    "registrationNumber": "২০১৭২১৮২৯৮",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "9",
    "name": "মো. শাকিব মাহামুদ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জস-০০১৩২",
    "registrationNumber": "২০২১০১৩১৫৫",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "10",
    "name": "মোঃ আতাউর রহমান (অপু)",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "মম-০০১৩৫",
    "registrationNumber": "২০১৯৫১৯১০২",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "11",
    "name": "মোঃ তোফাজ্জল হক আকাশ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০১৬৭৭",
    "registrationNumber": "২০২০৯১৭২৫২",
    "department": "লেদার ইঞ্জিনিয়ারিং ও টেকনোলজী ইনস্টিটিউট",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "12",
    "name": "মোঃ নাঈমুদ্দীন",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০০৮১২",
    "registrationNumber": "২০০২০০১৮৩১৩",
    "department": "নৃবিজ্ঞান বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "আবু বকর সিদ্দিক",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "মম-০১২৩৬",
    "registrationNumber": "২০১৯৬১৮২১০",
    "department": "শিক্ষা ও গবেষণা ইনস্টিটিউট",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "আব্দুল্লাহ সালেহীন অয়ন",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "শহ-০০৩১৭",
    "registrationNumber": "২০২০৯১৬৬৩১",
    "department": "গণিত বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "আয়ান আব্দুল্লাহ",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সয-০০০২৬",
    "registrationNumber": "২০১৯৪১৮৬০৯",
    "department": "অর্গ্যানাইজেশন স্ট্র্যাটেজি এন্ড লিডারশীপ বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "আরিফুল ইসলাম",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সয-০১৪২৩",
    "registrationNumber": "২০১৭৩১৩৫১৭",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "আলিফ ইমরান লিবন",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "বএ-০১২৬৯",
    "registrationNumber": "২০২১৯১০৭৭১",
    "department": "ব্যবস্থাপনা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "আশিকুর রহমান",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জিয়া-০১৬৮৯",
    "registrationNumber": "২০১৯০১৪৪৭২",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "ছাজিদ রহমান",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জহ-০০৭৯০",
    "registrationNumber": "২০২২৩১৪৪২০",
    "department": "নাট্য ও প্রদর্শন কলা অধ্যয়ন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "নূমান আহমাদ চৌধুরী",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "বএ-০০৮১৫",
    "registrationNumber": "২০২০৪১২৭১১",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "9",
    "name": "ফাতেমা তাসনিম জুমা",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সক-০০০৯৪",
    "registrationNumber": "২০২১৭১৫২৭৩",
    "department": "অপরাধ বিজ্ঞান বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "10",
    "name": "বি এম ফাহমিদা আলম",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "শন-০০০১৪",
    "registrationNumber": "২০২০৯১২১৬৭",
    "department": "অঙ্কন ও চিত্রায়ন বিভাগ",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "11",
    "name": "মাহামুদ শিকদার",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "বএ-০০৩৭৮",
    "registrationNumber": "২০১৯৩১৮৯৮৯",
    "department": "ইতিহাস বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "12",
    "name": "মাহির আজরফ",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "শহ-০১৩০৯",
    "registrationNumber": "২০১৯৬১৭৫১৮",
    "department": "ফলিত রসায়ন ও কেমিকৌশল বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "13",
    "name": "মেহেরাজ মাহমুদ আলভী",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জস-০০০৮৫",
    "registrationNumber": "২০১৯১১৬৬৫৯",
    "department": "আইন বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "14",
    "name": "মো: হৃদয় আহম্মেদ",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "এক-০১০৯৪",
    "registrationNumber": "২০১৯১১৭৩৪২",
    "department": "মৃত্তিকা, পানি ও পরিবেশ বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "15",
    "name": "মোঃ সাঈদ",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "বএ-০০৫৩৪",
    "registrationNumber": "২০১৯৫১৭২৫৭",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "16",
    "name": "শাহিনুর রহমান শাহিন",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জস-০০৯৫০",
    "registrationNumber": "২০২১১৮০৮৯৯",
    "department": "ভূগোল ও পরিবেশ বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "17",
    "name": "শাফিনুল ইসলাম সজিব",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সল-০০৭৫৭",
    "registrationNumber": "২০১৮২২১৭৯৪",
    "department": "গণিত বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "18",
    "name": "সামিয়া ইসলাম",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "রক-০১৯১০",
    "registrationNumber": "২০১৯০২২৫০৪",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "আবদুল্লাহ ইবনে হানিফ আরিয়ান",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "ফহ-০০১২৯",
    "registrationNumber": "২০১৯৯১৭৭৯৫",
    "department": "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "আহমাদ হাসান তালহা",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "এএ-০০২২৮",
    "registrationNumber": "২০২২৪১৪৩৫৭",
    "department": "আরবি বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "আহাদ বিন ইসলাম শোয়েব",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "ফহ-০১৭৬৩",
    "registrationNumber": "২০১৯১১৭৮১০",
    "department": "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "জুয়াইরিয়া আক্তার",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "সক-০০০৪৫",
    "registrationNumber": "২০২১৮১১৬০৯",
    "department": "অণুজীব বিজ্ঞান বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "ফাতিন ইশরাক",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "ফহ-০০৭৪৩",
    "registrationNumber": "২০২০৮১৬৩১৭",
    "department": "পদার্থ বিজ্ঞান বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "ফারহান লাবীব",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "এক-০০৪৫৩",
    "registrationNumber": "২০২০৫১৫৬৯০",
    "department": "নিউক্লিয়ার ইঞ্জিনিয়ারিং বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "মো: এহসানুল ইসলাম",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "শহ-০০৪৫৬",
    "registrationNumber": "২০১৭৬১৫১৮৯",
    "department": "তথ্য প্রযুক্তি ইনস্টিটিউট",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "মো: শাকিব খান",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "শহ-০০৫৫১",
    "registrationNumber": "২০২০১১৫৮৭৪",
    "department": "তড়িৎ ও ইলেক্ট্রনিক কৌশল বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "অদিতি ইসলাম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "কম-০০৯৪৩",
    "registrationNumber": "২০২১১১৪০১৮",
    "department": "দর্শন বিভাগ",
    "hall": "বাংলাদেশ-কুয়েত মৈত্রী হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "আকাশ বিশ্বাস ইমু",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জগ-০০৩১১",
    "registrationNumber": "২০১৮৭২১১৯৯",
    "department": "ইন্টারন্যাশনাল বিজনেস বিভাগ",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "আরমানুল হক",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জস-০০১২২",
    "registrationNumber": "২০১৭৬১৬৮৪৫",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "আলা উদ্দিন",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এএ-০০২৪৬",
    "registrationNumber": "২০২০১১৪৩৫২",
    "department": "আরবি বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "আশরেফা খাতুন",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "শন-০০৩৭৯",
    "registrationNumber": "২০১৮৪২২৮৭৬",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "আহনাফ হোসেন চৌধুরী আদিল",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এক-০০৬৪৯",
    "registrationNumber": "২০২৩৫১৭০১৯",
    "department": "পরিসংখ্যান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "জাহেদ আহমদ",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "সয-০১৪৩৭",
    "registrationNumber": "২০১৭৮১৩৪৭৭",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "তানভীর আল হাদি মায়েদ",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "বএ-০০৭৮৪",
    "registrationNumber": "২০১৮১২২৯০৫",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "9",
    "name": "তাহমীদ আল মুদ্দাসসীর চৌধুরী",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জহ-০০৯৫৬",
    "registrationNumber": "২০১৮৪২৭৩৯৪",
    "department": "বিশ্ব ধর্ম ও সংস্কৃতি বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "10",
    "name": "সাজেদুল ইসলাম নিরব",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জিয়া-০০৩০৯",
    "registrationNumber": "২০২০৯১২২৩২",
    "department": "স্বাস্থ্য অর্থনীতি ইনস্টিটিউট",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "11",
    "name": "সালমান ফারিয়া",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "ফম-০০০১৩",
    "registrationNumber": "২০২১৫১৫৯৭৮",
    "department": "নৃবিজ্ঞান বিভাগ",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "12",
    "name": "সোহেল রানা",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জস-০১৬৯৪",
    "registrationNumber": "২০১৯৫১৩০৫৭",
    "department": "দর্শন বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "13",
    "name": "মো: জহিরুল হক ভূইয়া",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "ফহ-০১৯৬০",
    "registrationNumber": "২০১৭৯১৫৫৮৪",
    "department": "লোক প্রশাসন বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "14",
    "name": "মো: জুনায়েদ হাসান",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "ফহ-০০৩৮৬",
    "registrationNumber": "২০১৯১১৬৬৯৯",
    "department": "গণিত বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "15",
    "name": "মো: মেজবাউল আলম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "মম-০১১১৭",
    "registrationNumber": "২০১৯৯১৬১৭৫",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "16",
    "name": "মোঃ আশিকুর রহমান",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জস-০০৯৬৯",
    "registrationNumber": "২০১৯৪১৮৪৫০",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "17",
    "name": "মোঃ আশিকুর রহমান (আশিক)",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এএ-০১১৭২",
    "registrationNumber": "২০২০৯১২২৯৫",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "18",
    "name": "মোঃ জাহিদুল ইসলাম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এএ-০১১৩২",
    "registrationNumber": "২০১৯৫১৩০১৬",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "19",
    "name": "মোঃ জুবাইর হোসেন",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "বব-০০৬৭৯",
    "registrationNumber": "২০১৯১১৪৬৩৯",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "20",
    "name": "মোঃ জুবাইরুল হাসান",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এক-০০০৪৭",
    "registrationNumber": "২০১৯৭১৬৯১৪",
    "department": "উদ্ভিদ বিজ্ঞান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "21",
    "name": "মোঃ মহিউদ্দিন হাওলাদার (মহিউদ্দিন রনি)",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জহ-০০৭৮৫",
    "registrationNumber": "২০১৭৭১৬৪৮৪",
    "department": "নাট্য ও প্রদর্শন কলা অধ্যয়ন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "22",
    "name": "মোঃ মুস্তাকিম বিল্লাহ রাকিব",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "মম-০০৬৬৩",
    "registrationNumber": "২০১৯৬১৯১২৯",
    "department": "পপুলেশন সায়েন্সেস বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "23",
    "name": "রাকিবুল ইসলাম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "সল-০০৫১০",
    "registrationNumber": "২০১৮৯২০৬৭৫",
    "department": "মার্কেটিং বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "24",
    "name": "সানজানা আফিফা অদিতি",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "শন-০১০৬৭",
    "registrationNumber": "২০২০৬১৩৯৫২",
    "department": "একাউন্টিং এন্ড ইনফরমেশন সিস্টেমস বিভাগ",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "আরাফাত চৌধুরী",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০১২২",
    "registrationNumber": "২০১৮৭২২৬১১",
    "department": "আইন বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "আল সাদি ভূইয়া",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০৮০০",
    "registrationNumber": "২০১৬৫১৬৫৭৭",
    "department": "নৃবিজ্ঞান বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "এনামুল হাসান অনয়",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "এএ-০১১৪৩",
    "registrationNumber": "২০২১২১৫০৩৪",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "এস, এম, ফরহাদ",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "বব-০১৪৭২",
    "registrationNumber": "২০১৭১১৭২২৭",
    "department": "সমাজকল্যাণ ও গবেষণা ইনস্টিটিউট",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "মাহমুদুল হাসান",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "মম-০১০৬১",
    "registrationNumber": "২০২১৩১৪৮৬৩",
    "department": "মার্কেটিং বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "মেঘমল্লার বসু",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "জগ-০১৯৮৮",
    "registrationNumber": "২০১৫৩১৮৭৯৪",
    "department": "শান্তি ও সংঘর্ষ অধ্যয়ন বিভাগ",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "মো নাইম ইসলাম",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০১১৬৬",
    "registrationNumber": "২০২০৬১৪৮৮৯",
    "department": "মার্কেটিং বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "মো: আশিকুর রহমান",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০২৮৫",
    "registrationNumber": "২০২২৯১২২৮২",
    "department": "ইংরেজী বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "9",
    "name": "মো: মোস্তাকিম বিল্লাহ মাসুম",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "জিয়া-০০১২৫",
    "registrationNumber": "২০১৯৯১৬৫১৬",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "10",
    "name": "মো. খায়রুল আহসান মারজান",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সল-০০০৮৩",
    "registrationNumber": "২০১৮১২২৮৮৮",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "11",
    "name": "মোঃ আবু বাখের মজুমদার",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "ফহ-০১৪১০",
    "registrationNumber": "২০১৯২১৮৪৬৭",
    "department": "ভূতত্ত্ব বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "12",
    "name": "মোঃ আবু সায়াদ বিন মাহিন সরকার",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "জিয়া-০০৮৬০",
    "registrationNumber": "২০১৮৬২৪১৪২",
    "department": "বাংলা বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "13",
    "name": "মোঃ নিয়াজ মাখদুম",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "এএ-০১০৮২",
    "registrationNumber": "২০১৯৯১৩০৭৮",
    "department": "ম্যানেজমেন্ট ইনফরমেশন সিস্টেমস বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "14",
    "name": "মোঃ রকিবুল হাসান মুন্না",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "এক-০০৬৬২",
    "registrationNumber": "২০২৩২১৭০৬৭",
    "department": "পরিসংখ্যান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "15",
    "name": "মোঃ শরিফুল ইসলাম ভূইয়া",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০৭৬৩",
    "registrationNumber": "২০১৯৯১৬৬১৮",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "16",
    "name": "শফিউল বশির",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০১৫০১",
    "registrationNumber": "২০১৯৮১৬৯৪০",
    "department": "ভূগোল ও পরিবেশ বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "17",
    "name": "সাইফ হাসান শুভ",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "জস-০০০৭৬",
    "registrationNumber": "২০১৮৬১৮৩৪৭",
    "department": "আইন বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "1",
    "name": "আবদুল ওয়াহেদ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সয-০০২০৫",
    "registrationNumber": "২০১৬২১৫৩৭৩",
    "department": "আরবি বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "2",
    "name": "আব্দুল কাদের",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বএ-০১৯০৭",
    "registrationNumber": "২০১৮৮২৩৪৯৩",
    "department": "সমাজকল্যাণ ও গবেষণা ইনস্টিটিউট",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "3",
    "name": "আরিফুল ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জহ-০০৫২৩",
    "registrationNumber": "২০২২২১২৪৪১",
    "department": "উন্নয়ন অধ্যয়ন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "4",
    "name": "আল আমিন ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সয-০০২৮৪",
    "registrationNumber": "২০২২৭১২২৯৩",
    "department": "ইংরেজী বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "5",
    "name": "আসিফ আনোয়ার অন্তিক",
    "designation": "সহ-সভাপতি",
    "voteNumber": "মম-০১১৩৮",
    "registrationNumber": "২০২০৮১৮৬৬৭",
    "department": "যোগাযোগ বৈকল্য বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "6",
    "name": "উমামা ফাতেমা",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সক-০২১৫০",
    "registrationNumber": "২০১৮৩২৬০০৮",
    "department": "প্রাণরসায়ন ও অনুপ্রাণ বিজ্ঞান বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "7",
    "name": "ছাদেক হোসেন",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বএ-০০৫১০",
    "registrationNumber": "২০১৮৬২২০৭২",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "আবদুল্লাহ আল নাহিয়ান",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জহ-০০৭৬৯",
    "registrationNumber": "২০১৮৬০২২১৪",
    "department": "আইন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "9",
    "name": "তানভীর আহমেদ খান",
    "designation": "সহ-সভাপতি",
    "voteNumber": "ফহ-০১৯৫২",
    "registrationNumber": "২০১৯৬২১৬১০",
    "department": "ব্যাংকিং ও ইন্স্যুরেন্স বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "10",
    "name": "তারেক জামান ভূঁইয়া",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জিয়া-০০৫০৮",
    "registrationNumber": "২০১৯১১৭১৩৮",
    "department": "ফারসি ভাষা ও সাহিত্য বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "11",
    "name": "নুরুল হাসান (সোহাগ)",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জস-০১৬৯৬",
    "registrationNumber": "২০২১৫১৩০৯০",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "12",
    "name": "ফয়সাল আহমেদ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বব-০১৪২২",
    "registrationNumber": "২০২২৫৫২১০৯",
    "department": "শান্তি ও সংঘর্ষ অধ্যয়ন বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "13",
    "name": "মাসুম রেজা",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বএ-০১৯৭৯",
    "registrationNumber": "২০১৮৬১৭৮১০",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "14",
    "name": "মোহাম্মদ রাশেদ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "এএ-০১০৫৫",
    "registrationNumber": "২০২২২১২৪২৪",
    "department": "আইন বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "15",
    "name": "মোহাম্মদ শাহজালাল",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সল-০০৩০৫",
    "registrationNumber": "২০২০৪১৪৪৩৪",
    "department": "গণিত বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "16",
    "name": "মোঃ আশিক মাহমুদ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জস-০০৬৪৬",
    "registrationNumber": "২০২০৭২১৩৯১",
    "department": "নৃবিজ্ঞান বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "17",
    "name": "মোঃ আতিকুর রহমান ভূঁইয়া",
    "designation": "সহ-সভাপতি",
    "voteNumber": "শহ-০০৩৪৪",
    "registrationNumber": "২০১৮৫২১৫০০",
    "department": "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "18",
    "name": "মোঃ আব্দুল্লাহ আল কাইয়ুম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "মম-০০২৮৪",
    "registrationNumber": "২০২০৭১৩৬৭৭",
    "department": "মৃত্তিকা, পানি ও পরিবেশ বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "19",
    "name": "মোঃ ইব্রাহিম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জিয়া-০০৫৬০",
    "registrationNumber": "২০২২০১৪৪৪৬",
    "department": "উর্দু বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "20",
    "name": "মোঃ কামাল আহমেদ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বব-০০৭৫৯",
    "registrationNumber": "২০২১৩১৮৭৫৯",
    "department": "ফলিত গণিত বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "21",
    "name": "মোঃ তারেক হোসাইন (শুভ)",
    "designation": "সহ-সভাপতি",
    "voteNumber": "মম-০১৪৫০",
    "registrationNumber": "২০১৯১১২১১৩",
    "department": "একাউন্টিং এন্ড ইনফরমেশন সিস্টেমস বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "22",
    "name": "মোঃ তাওহীদ আহমেদ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "ফহ-০০০২৬",
    "registrationNumber": "২০১৯৩১৯১৩২",
    "department": "আইন বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "23",
    "name": "মোঃ নাঈম ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সয-০০৭৫৯",
    "registrationNumber": "২০১৯৮১৯৯৬২",
    "department": "রসায়ন বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "24",
    "name": "মোঃ নাঈমুল ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জিয়া-০০৫৬৫",
    "registrationNumber": "২০১৭৬২৪১৪৮",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "25",
    "name": "মোঃ নাজমুজ্জামান",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সয-০১৮৫২",
    "registrationNumber": "২০২২৭২১৩১৯",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "26",
    "name": "মোঃ পারভেজ ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বএ-০১৯৭৭",
    "registrationNumber": "২০১৮০১৯৮৪৮",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "27",
    "name": "মোঃ মাহিন সরকার (শুভ্র)",
    "designation": "সহ-সভাপতি",
    "voteNumber": "শহ-০০৯৩৩",
    "registrationNumber": "২০২০১১২৭৫৫",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "28",
    "name": "মোঃ মাহবুবুর রহমান",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বব-০০৬৭৬",
    "registrationNumber": "২০১৯৬১৫০৫৩",
    "department": "ইতিহাস বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "29",
    "name": "মোঃ মোস্তফা কামাল মুন্সি",
    "designation": "সহ-সভাপতি",
    "voteNumber": "ফহ-০০৪৩৪",
    "registrationNumber": "২০২০১১৪৭৭৮",
    "department": "একাউন্টিং এন্ড ইনফরমেশন সিস্টেমস বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "30",
    "name": "মোঃ শফিকুল ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "ফহ-০০৭৬৭",
    "registrationNumber": "২০১৭৯১৭৭৯৭",
    "department": "ফলিত গণিত বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "31",
    "name": "মোঃ শামীম হোসেন",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জিয়া-০০১০৫",
    "registrationNumber": "২০২১৫২২৬৯৩",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "32",
    "name": "মোঃ সুজন হোসেন",
    "designation": "সহ-সভাপতি",
    "voteNumber": "মম-০০৩২৩",
    "registrationNumber": "২০২২০১৪২৯৮",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "33",
    "name": "মোঃ সোহানুর রহমান",
    "designation": "সহ-সভাপতি",
    "voteNumber": "এএ-০০৩৬৪",
    "registrationNumber": "২০১৯৩১৫৩২৪",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "34",
    "name": "মোঃ হাবিবুল্লাহ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জহ-০০০৯২",
    "registrationNumber": "২০১৯৪১৫৪২২",
    "department": "আইন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "35",
    "name": "মোঃ হেলালুর রহমান",
    "designation": "সহ-সভাপতি",
    "voteNumber": "এএ-০১২০০",
    "registrationNumber": "২০২০৯১২৬৮০",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "36",
    "name": "মোসাঃ জান্নাতী বুলবুল",
    "designation": "সহ-সভাপতি",
    "voteNumber": "রক-০৫২৮৩",
    "registrationNumber": "২০১৮৭২১৭৫৭",
    "department": "সংস্কৃত বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "37",
    "name": "যায়েদ বিন ইকবাল",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জস-০০৫৬২",
    "registrationNumber": "২০২১০১৫৭০২",
    "department": "জাপানিজ স্টাডিজ বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "38",
    "name": "রাকিবুল হাসান",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বব-০০৪৩৪",
    "registrationNumber": "২০২২৩১৪২১৩",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "39",
    "name": "রাসেল হক",
    "designation": "সহ-সভাপতি",
    "voteNumber": "শহ-০১৫৩৩",
    "registrationNumber": "২০২১৪১৫৯৮৮",
    "department": "ভূগোল ও পরিবেশ বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "40",
    "name": "রাহুল দেব রায়",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জগ-০১৬১৪",
    "registrationNumber": "২০২০৯১৭০৫৪",
    "department": "মনোবিজ্ঞান বিভাগ",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
    {
    "ballotNumber": "১",
    "name": "আনোয়ার হোসাইন",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "বএ-০১৮৭৭",
    "registrationNumber": "২০১৭৬১৬৫৪৮",
    "department": "সংগীত বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "ইসরাত জাহান নিঝুম",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "ফম-০২২৫৫",
    "registrationNumber": "২০২০৬১৩০৪২",
    "department": "শিক্ষা ও গবেষণা ইনস্টিটিউট",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "এম এম আল মিনহাজ (আবদুল্লাহ আল মিনহাজ)",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "বব-০১৫৮৬",
    "registrationNumber": "২০১৬০১৭০৮৫",
    "department": "স্বাস্থ্য অর্থনীতি ইনস্টিটিউট",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "8",
    "name": "মিনহাজুল ইসলাম ফারহান",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "বব-০০৬৬৮",
    "registrationNumber": "২০২৪২১৫১৩০",
    "department": "টিভি ও চলচ্চিত্র অধ্যয়ন বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "মুহাম্মদ মাসউদুল বারী",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "বএ-০১৯৯৬",
    "registrationNumber": "২০২১৪১৩৩৬৮",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "মেহেরিন আফরোজ মাইশা",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "সক-০০৯৯৩",
    "registrationNumber": "২০২২৫১৪৩১০",
    "department": "উর্দু বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মো:মাহমুদ হাসান",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "জস-০০৯০০",
    "registrationNumber": "২০২০৭১৫০৫৮",
    "department": "ব্যবস্থাপনা বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মো. সাকিবুর রহমান রনি",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "ফহ-০০৭৪৭",
    "registrationNumber": "২০১৯২১৮০৮৯",
    "department": "পদার্থ বিজ্ঞান বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "মোঃ মুঈনুল ইসলাম",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "জস-০০৩৯৯",
    "registrationNumber": "২০২৩৪১৪৭২৫",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "মোঃ মেহেদি হাসান",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "জহ-০১৮৮৩",
    "registrationNumber": "২০১৯২১৪৫৫১",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "মোহাম্মদ আলী শান্ত",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "সল-০০০৮৯",
    "registrationNumber": "২০১৯৯১৫৫৫৩",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "রাকিব হোসেন গাজী",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "শহ-০১৫০৭",
    "registrationNumber": "২০১৯৬১৭৬৩৫",
    "department": "ভূগোল ও পরিবেশ বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৩",
    "name": "শাহরিয়ার মোহাম্মদ ইয়ামিন",
    "designation": "স্বাস্থ্য ও পরিবেশ সম্পাদক",
    "voteNumber": "জিয়া-০০১৭৬",
    "registrationNumber": "২০২১৬১৮০৬৬",
    "department": "আইন বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "অনিদ হাসান",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এক-০১০৭২",
    "registrationNumber": "২০২১৭১২৮৫২",
    "department": "ভূতত্ত্ব বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আবদুল্লাহ ইবনে হাসান জামিল",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বব-০১১৩৭",
    "registrationNumber": "২০২৪৪১২৪০১",
    "department": "ব্যাংকিং ও ইন্সুরেন্স বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "আবু হায়াত মোঃ জুলফিকার (জেসান)",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এএ-০০৭৩২",
    "registrationNumber": "২০১৬৭১৩৩০৭",
    "department": "প্রিন্ট মেকিং বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "এইচ.এম. আমিরুল করিম (অমি)",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বব-০০২৭৬",
    "registrationNumber": "২০১৯২১৩৮৪০",
    "department": "ইংরেজী বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "জিনিয়া আক্তার সুইটি",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "ফম-০১০৩২",
    "registrationNumber": "২০২০৯১৭৫২২",
    "department": "নৃত্যকলা বিভাগ",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "নাঈম হোসেন",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বএ-০১৮৮৩",
    "registrationNumber": "২০১৯৩১৩৭৪০",
    "department": "সংস্কৃত বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "নুরুল ইসলাম",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বএ-০১৯৬৮",
    "registrationNumber": "২০১৯৬১৪৫৪৮",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "ফারিয়া মতিন (ইলা)",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "কম-০২১০৭",
    "registrationNumber": "২০২০০১৫৩৩৪",
    "department": "ব্যাংকিং ও ইন্সুরেন্স বিভাগ",
    "hall": "বাংলাদেশ-কুয়েত মৈত্রী হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "মুসাদ্দিক আলী ইবনে মোহাম্মাদ",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "জিয়া-০০৮৮০",
    "registrationNumber": "২০২১৯১৫৪৩৩",
    "department": "বাংলা বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "মো: আবু রাশেদ",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "সল-০০৬১০",
    "registrationNumber": "২০১৬৫১৬১৭১",
    "department": "সংগীত বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "মো: মাহাবুব খালাসী",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এএ-০০১৮২",
    "registrationNumber": "২০১৯৫১৩৯৩৭",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "মো:নাজমুল হাসান",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "জহ-০০১৩৯",
    "registrationNumber": "২০১৮২২৫১২৭",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৩",
    "name": "মোঃ ইব্রাহিম আদল",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "এএ-০১১৯২",
    "registrationNumber": "২০২১৩১৩২১৫",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৪",
    "name": "মোঃ পারভেজ মাহমুদ নিলয়",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "বএ-০০৮১৮",
    "registrationNumber": "২০২০২১২৪৯৮",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৫",
    "name": "মোঃ লানজু খান",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "মম-০১২৭৮",
    "registrationNumber": "২০২০৫১৯২৭২",
    "department": "সংগীত বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৬",
    "name": "মোহতাসিন বিল্লাহ ইমন",
    "designation": "সাহিত্য ও সাংস্কৃতিক সম্পাদক",
    "voteNumber": "জস-০০৫৭৪",
    "registrationNumber": "২০১৮০২৫১৭৪",
    "department": "টুরিজম এন্ড হসপিটালিটি ম্যানেজমেন্ট বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আবদুল্লাহ জুবায়ের",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "জিয়া-০০৯২২",
    "registrationNumber": "২০২০৫১২১১৬",
    "department": "ব্যবসায় প্রশাসন ইনস্টিটিউট",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "নিশি আক্তার",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "ফম-০২৬৪২",
    "registrationNumber": "২০১৮১২৩০২১",
    "department": "পপুলেশন সায়েন্সেস বিভাগ",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "মাহামুদ হাসান",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "বএ-০০১১৯",
    "registrationNumber": "২০১৯৩১৫৪৩২",
    "department": "আইন বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "মো: জাহিদুল ইসলাম সাকিব",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "শহ-০১২৪৫",
    "registrationNumber": "২০১৮১২৫৫৫১",
    "department": "ফলিত গণিত বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "মো: মাজহারুল ইসলাম",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "বব-০০৪১৩",
    "registrationNumber": "২০১৮২২১৯৭৮",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "মোঃ আব্দুল্লাহ আল মুকতাদির",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "এএ-০০৭৫১",
    "registrationNumber": "২০২২০১৮০২৩",
    "department": "ফারসি ভাষা ও সাহিত্য বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মোঃ আল মামুন",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "সয-০১০২৩",
    "registrationNumber": "২০২১১১০৬৭০",
    "department": "ব্যবস্থাপনা বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মোঃ রজব সালার খান শাওন",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "মম-০০৪৭১",
    "registrationNumber": "২০২০৪১৪৭৩৭",
    "department": "একাউন্টিং এন্ড ইনফরমেশন সিস্টেমস বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "মোহাম্মদ আরকানুল ইসলাম (রূপক)",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "বএ-০১১৩৭",
    "registrationNumber": "২০১৮১২০৭৫৪",
    "department": "ফিন্যান্স বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "রুপাইয়া শ্রেষ্ঠা তঞ্চঙ্গ্যা",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "রক-০৫৬৪৪",
    "registrationNumber": "২০১৯৮১৮৬৮৭",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "রেজওয়ান আহম্মেদ রিফাত",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "সয-০১৩৫২",
    "registrationNumber": "২০২০৪১৭২১১",
    "department": "ফিন্যান্স বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "লিটন ত্রিপুরা",
    "designation": "ক্যারিয়ার ডেভেলপমেন্ট সম্পাদক",
    "voteNumber": "জগ-০১৮৯১",
    "registrationNumber": "২০১৮০১৫০৯৭",
    "department": "আইন বিভাগ",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আবু বকর সিদ্দিক",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "মম-০১২৩৬",
    "registrationNumber": "২০১৯৬১৮২১০",
    "department": "শিক্ষা ও গবেষণা ইনস্টিটিউট",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আব্দুল্লাহ সালেহীন অয়ন",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "শহ-০০৩১৭",
    "registrationNumber": "২০২০৯১৬৬৩১",
    "department": "গণিত বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "আয়ান আব্দুল্লাহ",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সয-০০০২৬",
    "registrationNumber": "২০১৯৪১৮৬০৯",
    "department": "অর্গ্যানাইজেশন স্ট্র্যাটেজি এন্ড লিডারশীপ বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "আরিফুল ইসলাম",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সয-০১৪২৩",
    "registrationNumber": "২০১৭৩১৩৫১৭",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "আলিফ ইমরান লিবন",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "বএ-০১২৬৯",
    "registrationNumber": "২০২১৯১০৭৭১",
    "department": "ব্যবস্থাপনা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "আশিকুর রহমান",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জিয়া-০১৬৮৯",
    "registrationNumber": "২০১৯০১৪৪৭২",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "ছাজিদ রহমান",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জহ-০০৭৯০",
    "registrationNumber": "২০২২৩১৪৪২০",
    "department": "নাট্য ও প্রদর্শন কলা অধ্যয়ন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "নূমান আহমাদ চৌধুরী",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "বএ-০০৮১৫",
    "registrationNumber": "২০২০৪১২৭১১",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "ফাতেমা তাসনিম জুমা",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সক-০০০৯৪",
    "registrationNumber": "২০২১৭১৫২৭৩",
    "department": "অপরাধ বিজ্ঞান বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "বি এম ফাহমিদা আলম",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "শন-০০০১৪",
    "registrationNumber": "২০২০৯১২১৬৭",
    "department": "অঙ্কন ও চিত্রায়ন বিভাগ",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "মাহামুদ শিকদার",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "বএ-০০৩৭৮",
    "registrationNumber": "২০১৯৩১৮৯৮৯",
    "department": "ইতিহাস বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "মাহির আজরফ",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "শহ-০১৩০৯",
    "registrationNumber": "২০১৯৬১৭৫১৮",
    "department": "ফলিত রসায়ন ও কেমিকৌশল বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৩",
    "name": "মেহেরাজ মাহমুদ আলভী",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জস-০০০৮৫",
    "registrationNumber": "২০১৯১১৬৬৫৯",
    "department": "আইন বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৪",
    "name": "মো: হৃদয় আহম্মেদ",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "এক-০১০৯৪",
    "registrationNumber": "২০১৯১১৭৩৪২",
    "department": "মৃত্তিকা, পানি ও পরিবেশ বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৫",
    "name": "মোঃ আশিকুর রহমান",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "সয-০০২৯৯",
    "registrationNumber": "২০১৯৩১৫০৩২",
    "department": "পদার্থ বিজ্ঞান বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৬",
    "name": "মোঃ আল ইমরান হোসেন",
    "designation": "মুক্তিযুদ্ধ ও গণতান্ত্রিক আন্দোলন সম্পাদক",
    "voteNumber": "জিয়া-০০৩০৭",
    "registrationNumber": "২০১৮০১৩৯৯২",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আকিব হাসান",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "এএ-০১২১৭",
    "registrationNumber": "২০২০৮১৮৩৭৯",
    "department": "শান্তি ও সংঘর্ষ অধ্যয়ন বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "ইমরান মিয়া (সাদমান)",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "মম-০১২৬৮",
    "registrationNumber": "২০১৯৯১৯২৯৮",
    "department": "শিল্পকলার ইতিহাস বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "এইচ. এ. এম. ফাহিম কবির",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "এএ-০১৩৬৭",
    "registrationNumber": "২০২২৬১৩০৬৮",
    "department": "স্বাস্থ্য অর্থনীতি ইনস্টিটিউট",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "জসীমউদ্দিন খান (খান জসীম)",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "বএ-০১৬৬৪",
    "registrationNumber": "২০১৫০১৪৭৬৪",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "তাসনিম বিন মাহফুজ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "বএ-০০০৯০",
    "registrationNumber": "২০২১১১৪৭৬৬",
    "department": "অর্থনীতি বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "নাফিজ বাশার আলিফ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০১৭৪৯",
    "registrationNumber": "২০২১৫১৪৯৪২",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মুস্তাকীম মাহমুদ রাহীম",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০০৪২৮",
    "registrationNumber": "২০১৮৫২২১৮১",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মেহেদী হাসান",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "বএ-০১৬৫৫",
    "registrationNumber": "২০১৭২১৮২৯৮",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "মো. শাকিব মাহামুদ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জস-০০১৩২",
    "registrationNumber": "২০২১০১৩১৫৫",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "মোঃ আতাউর রহমান (অপু)",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "মম-০০১৩৫",
    "registrationNumber": "২০১৯৫১৯১০২",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "মোঃ তোফাজ্জল হক আকাশ",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০১৬৭৭",
    "registrationNumber": "২০২০৯১৭২৫২",
    "department": "লেদার ইঞ্জিনিয়ারিং ও টেকনোলজী ইনস্টিটিউট",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "মোঃ নাঈমুদ্দীন",
    "designation": "আন্তর্জাতিক সম্পাদক",
    "voteNumber": "জহ-০০৮১২",
    "registrationNumber": "২০২০০১৮৩১৩",
    "department": "নৃবিজ্ঞান বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আবদুল্লাহ ইবনে হানিফ আরিয়ান",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "ফহ-০০১২৯",
    "registrationNumber": "২০১৯৯১৭৭৯৫",
    "department": "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আহমাদ হাসান তালহা",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "এএ-০০২২৮",
    "registrationNumber": "২০২২৪১৪৩৫৭",
    "department": "আরবি বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "আহাদ বিন ইসলাম শোয়েব",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "ফহ-০১৭৬৩",
    "registrationNumber": "২০১৯১১৭৮১০",
    "department": "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "জুয়াইরিয়া আক্তার",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "সক-০০০৪৫",
    "registrationNumber": "২০২১৮১১৬০৯",
    "department": "অণুজীব বিজ্ঞান বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "ফাতিন ইশরাক",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "ফহ-০০৭৪৩",
    "registrationNumber": "২০২০৮১৬৩১৭",
    "department": "পদার্থ বিজ্ঞান বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "ফারহান লাবীব",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "এক-০০৪৫৩",
    "registrationNumber": "২০২০৫১৫৬৯০",
    "department": "নিউক্লিয়ার ইঞ্জিনিয়ারিং বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মো: এহসানুল ইসলাম",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "শহ-০০৪৫৬",
    "registrationNumber": "২০১৭৬১৫১৮৯",
    "department": "তথ্য প্রযুক্তি ইনস্টিটিউট",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মো: শাকিব খান",
    "designation": "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    "voteNumber": "শহ-০০৫৫১",
    "registrationNumber": "২০২০১১৫৮৭৪",
    "department": "তড়িৎ ও ইলেক্ট্রনিক কৌশল বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "অদিতি ইসলাম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "কম-০০৯৪৩",
    "registrationNumber": "২০২১১১৪০১৮",
    "department": "দর্শন বিভাগ",
    "hall": "বাংলাদেশ-কুয়েত মৈত্রী হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আকাশ বিশ্বাস ইমু",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জগ-০০৩১১",
    "registrationNumber": "২০১৮৭২১১৯৯",
    "department": "ইন্টারন্যাশনাল বিজনেস বিভাগ",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "আরমানুল হক",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জস-০০১২২",
    "registrationNumber": "২০১৭৬১৬৮৪৫",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "আলা উদ্দিন",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এএ-০০২৪৬",
    "registrationNumber": "২০২০১১৪৩৫২",
    "department": "আরবি বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "আশরেফা খাতুন",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "শন-০০৩৭৯",
    "registrationNumber": "২০১৮৪২২৮৭৬",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "আহনাফ হোসেন চৌধুরী আদিল",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এক-০০৬৪৯",
    "registrationNumber": "২০২৩৫১৭০১৯",
    "department": "পরিসংখ্যান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "জাহেদ আহমদ",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "সয-০১৪৩৭",
    "registrationNumber": "২০১৭৮১৩৪৭৭",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "তানভীর আল হাদি মায়েদ",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "বএ-০০৭৮৪",
    "registrationNumber": "২০১৮১২২৯০৫",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "তাহমীদ আল মুদ্দাসসীর চৌধুরী",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জহ-০০৯৫৬",
    "registrationNumber": "২০১৮৪২৭৩৯৪",
    "department": "বিশ্ব ধর্ম ও সংস্কৃতি বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "জাওয়াদুল ইসলাম জাওয়াদ",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জিয়া-০০৭৭৪",
    "registrationNumber": "২০২০৭২৬০৮৯",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "সজিবুল ইসলাম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "বব-০০৬৭২",
    "registrationNumber": "২০২২৭১২২৯৯",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "সাফিউল ইসলাম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "শহ-০১৫০৮",
    "registrationNumber": "২০২০৯১২২১৩",
    "department": "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৩",
    "name": "নওশীন আনজুম অর্ণা",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "রক-০০৯৪৪",
    "registrationNumber": "২০২১১০৭১০০",
    "department": "দর্শন বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৪",
    "name": "পাপড়ি খাতুন",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "ফম-০০১৭৩",
    "registrationNumber": "২০২২৭১৫৭৮৮",
    "department": "বাংলা বিভাগ",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৫",
    "name": "ফাহাদ আল মারুফ",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "মম-০০৬৫৯",
    "registrationNumber": "২০১৯৩১৯১৩১",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৬",
    "name": "মারিয়া তাসনিম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "কম-০০১৭৯",
    "registrationNumber": "২০১৮৪০৯৮৫০",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "বাংলাদেশ-কুয়েত মৈত্রী হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৭",
    "name": "মোঃ আশিকুর রহমান",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "সয-০১১৬৬",
    "registrationNumber": "২০২০৬১৪৮৮৯",
    "department": "মার্কেটিং বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৮",
    "name": "মোঃ জুবাইরুল হাসান",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "এক-০০০৪৭",
    "registrationNumber": "২০১৯৭১৬৯১৪",
    "department": "উদ্ভিদ বিজ্ঞান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৯",
    "name": "মোঃ মহিউদ্দিন হাওলাদার (মহিউদ্দিন রনি)",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "জহ-০০৭৮৫",
    "registrationNumber": "২০১৭৭১৬৪৮৪",
    "department": "নাট্য ও প্রদর্শন কলা অধ্যয়ন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২০",
    "name": "মোঃ মুস্তাকিম বিল্লাহ রাকিব",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "মম-০০৬৬৩",
    "registrationNumber": "২০১৯৬১৯১২৯",
    "department": "পপুলেশন সায়েন্সেস বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২১",
    "name": "রাকিবুল ইসলাম",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "সল-০০৫১০",
    "registrationNumber": "২০১৮৯২০৬৭৫",
    "department": "মার্কেটিং বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২২",
    "name": "সানজানা আফিফা অদিতি",
    "designation": "সহ-সাধারণ সম্পাদক",
    "voteNumber": "শন-০১০৬৭",
    "registrationNumber": "২০২০৬১৩৯৫২",
    "department": "একাউন্টিং এন্ড ইনফরমেশন সিস্টেমস বিভাগ",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "ইমরান মিয়া",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "জহ-০১০৮৯",
    "registrationNumber": "২০২০৫১৫২৫৮",
    "department": "ব্যাংকিং ও ইন্সুরেন্স বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "খন্দকার ওয়াজিহ্ তাওসিফ",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "এএ-০০৬৯২",
    "registrationNumber": "২০২১৪১৫৪৪৭",
    "department": "নৃবিজ্ঞান বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "মাশফিকুজ্জামান তাঈন",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "ফহ-০০১৩৮",
    "registrationNumber": "২০২৩৪১৫৯৬৮",
    "department": "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "মাহাথির খান নিনাদ",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "বএ-০০৬৬৮",
    "registrationNumber": "২০২০৩১৭৮৪৩",
    "department": "উন্নয়ন অধ্যয়ন বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "মোঃ আসিফ আব্দুল্লাহ",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "এক-০০৬৩৪",
    "registrationNumber": "২০১৭৪১৩৯৯৪",
    "department": "পরিসংখ্যান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "মোঃ আসিফ জারদারী",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "শহ-০০৫৭১",
    "registrationNumber": "২০১৮১২৬১৫৪",
    "department": "তড়িৎ ও ইলেক্ট্রনিক কৌশল বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মোঃ ইসমাঈল হোসেন (রুদ্র)",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "জস-০১৩০৪",
    "registrationNumber": "২০২০৩১৮৬৮০",
    "department": "দর্শন বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মোঃ রাজিন হোসেন",
    "designation": "ছাত্র পরিবহন সম্পাদক",
    "voteNumber": "জহ-০১১১২",
    "registrationNumber": "২০১৯৯১৬০৮৪",
    "department": "ভাষাবিজ্ঞান বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আরাফাত চৌধুরী",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০১২২",
    "registrationNumber": "২০১৮৭২২৬১১",
    "department": "আইন বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আল সাদি ভূইয়া",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০৮০০",
    "registrationNumber": "২০১৬৫১৬৫৭৭",
    "department": "নৃবিজ্ঞান বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "এনামুল হাসান অনয়",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "এএ-০১১৪৩",
    "registrationNumber": "২০২১২১৫০৩৪",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "এস, এম, ফরহাদ",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "বব-০১৪৭২",
    "registrationNumber": "২০১৭১১৭২২৭",
    "department": "সমাজকল্যাণ ও গবেষণা ইনস্টিটিউট",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "মাহমুদুল হাসান",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "মম-০১০৬১",
    "registrationNumber": "২০২১৩১৪৮৬৩",
    "department": "মার্কেটিং বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "মেঘমল্লার বসু",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "জগ-০১৯৮৮",
    "registrationNumber": "২০১৫৩১৮৭৯৪",
    "department": "শান্তি ও সংঘর্ষ অধ্যয়ন বিভাগ",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মো নাইম ইসলাম",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০১১৬৬",
    "registrationNumber": "২০২০৬১৪৮৮৯",
    "department": "মার্কেটিং বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মো: আশিকুর রহমান",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০২৮৫",
    "registrationNumber": "২০২২৯১২২৮২",
    "department": "ইংরেজী বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "মো: মোস্তাকিম বিল্লাহ মাসুম",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "জিয়া-০০১২৫",
    "registrationNumber": "২০১৯৯১৬৫১৬",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "মো. খায়রুল আহসান মারজান",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সল-০০০৮৩",
    "registrationNumber": "২০১৮১২২৮৮৮",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "সলিমুল্লাহ মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "মোঃ আবু বাখের মজুমদার",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "ফহ-০১৪১০",
    "registrationNumber": "২০১৯২১৮৪৬৭",
    "department": "ভূতত্ত্ব বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "মোঃ আবু সায়াদ বিন মাহিন সরকার",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "জিয়া-০০৮৬০",
    "registrationNumber": "২০১৮৬২৪১৪২",
    "department": "বাংলা বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৩",
    "name": "মোঃ নিয়াজ মাখদুম",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "এএ-০১০৮২",
    "registrationNumber": "২০১৯৯১৩০৭৮",
    "department": "ম্যানেজমেন্ট ইনফরমেশন সিস্টেমস বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৪",
    "name": "মোঃ রকিবুল হাসান মুন্না",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "এক-০০৬৬২",
    "registrationNumber": "২০২৩২১৭০৬৭",
    "department": "পরিসংখ্যান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৫",
    "name": "মোঃ শরিফুল ইসলাম ভূইয়া",
    "designation": "সাধারণ সম্পাদক",
    "voteNumber": "সয-০০৭৬৩",
    "registrationNumber": "২০১৮৭১৫১৩৩",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আবদুল ওয়াহেদ",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সয-০০২০৫",
    "registrationNumber": "২০১৬২১৫৩৭৩",
    "department": "আরবি বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আব্দুল কাদের",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বএ-০১৯০৭",
    "registrationNumber": "২০১৮৮২৩৪৯৩",
    "department": "সমাজকল্যাণ ও গবেষণা ইনস্টিটিউট",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "আরিফুল ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "জহ-০০৫২৩",
    "registrationNumber": "২০২২২১২৪৪১",
    "department": "উন্নয়ন অধ্যয়ন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "আল আমিন ইসলাম",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সয-০০২৮৪",
    "registrationNumber": "২০২২৭১২২৯৩",
    "department": "ইংরেজী বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "আসিফ আনোয়ার অন্তিক",
    "designation": "সহ-সভাপতি",
    "voteNumber": "মম-০১১৩৮",
    "registrationNumber": "২০২০৮১৮৬৬৭",
    "department": "যোগাযোগ বৈকল্য বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "উমামা ফাতেমা",
    "designation": "সহ-সভাপতি",
    "voteNumber": "সক-০২১৫০",
    "registrationNumber": "২০১৮৩২৬০০৮",
    "department": "প্রাণরসায়ন ও অনুপ্রাণ বিজ্ঞান বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "ছাদেক হোসেন",
    "designation": "সহ-সভাপতি",
    "voteNumber": "বএ-০০৫১০",
    "registrationNumber": "২০১৮৬২২০৭২",
    "department": "ইসলামিক স্টাডিজ বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "উম্মে ছালমা",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "সক-০০৫০৯",
    "registrationNumber": "২০২০৭১২৩৮৫",
    "department": "ইংরেজী বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "চেমন ফারিয়া ইসলাম মেঘলা",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "রক-০৫২২৩",
    "registrationNumber": "২০১৮৩২২৫৬১",
    "department": "সংগীত বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "জেইসান বকুল রিয়া (জেরী)",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "ফম-০২২৫৭",
    "registrationNumber": "২০২০৩১৮১৪৯",
    "department": "শিক্ষা ও গবেষণা ইনস্টিটিউট",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "তাজিন মোহাম্মদ আলবি",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "জহ-০০৭১৪",
    "registrationNumber": "২০১৯১১৩৬৪৩",
    "department": "তথ্যবিজ্ঞান ও গ্রন্থাগার ব্যবস্থাপনা বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "নূজিয়া হাসিন (রাশা)",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "ফম-০১৫৬৫",
    "registrationNumber": "২০১৯৫১৯২০১",
    "department": "ভাষাবিজ্ঞান বিভাগ",
    "hall": "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "ফারজানা আক্তার (মিতু)",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "রক-০১৪১৩",
    "registrationNumber": "২০২২৪১৪৩১১",
    "department": "উর্দু বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মিতু আক্তার",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "রক-০২৯৪৩",
    "registrationNumber": "২০১৮২২১৬৮০",
    "department": "ফারসি ভাষা ও সাহিত্য বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মোঃ আরিফুল ইসলাম",
    "designation": "কমনরুম, রিডিংরুম ও ক্যাফেটেরিয়া সম্পাদক",
    "voteNumber": "বএ-০০৩৮৯",
    "registrationNumber": "২০১৯৪১৮৬৫৩",
    "department": "দর্শন বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "নির্জনা ইসলাম",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "সক-০৩৪১৪",
    "registrationNumber": "২০১৯২১৮৫০২",
    "department": "মৃত্তিকা, পানি ও পরিবেশ বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "মোঃ আইমান মাহমুদ",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "সয-০০৬৫৭",
    "registrationNumber": "২০২২৩১৩৪৯৪",
    "department": "জাপানিজ স্টাডিজ বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "মোঃ আরাফাত ইমরান",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "বব-০১৩৪৬",
    "registrationNumber": "২০২১৭১৫০৪৮",
    "department": "রাষ্ট্রবিজ্ঞান বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "মোঃ ইফতেখার আকন্দ আকিব",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "এক-০০০০৪",
    "registrationNumber": "২০১৯৫১৭৭৫৩",
    "department": "অণুজীব বিজ্ঞান বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "মোঃ সাজ্জাদ হোসাইন খাঁন",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "বএ-০০২৫৭",
    "registrationNumber": "২০১৯৮১৪৩১১",
    "department": "আরবি বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "মোছাঃ জান্নাতুন নাহার",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "শন-০৩৬৯৭",
    "registrationNumber": "২০২১৮১৫১৬৪",
    "department": "শিক্ষা ও গবেষণা ইনস্টিটিউট",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মোহাম্মদ মাজেদুর রহমান",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "শহ-০১২৭০",
    "registrationNumber": "২০১৯২১৮৩৩১",
    "department": "ফলিত গণিত বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "সানজিদা আহমেদ তানিয়া",
    "designation": "গবেষণা ও প্রকাশনা সম্পাদক",
    "voteNumber": "রক-০৪১৪২",
    "registrationNumber": "২০১৯৬০২৯৯৯",
    "department": "গণিত বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আকাশ আলী",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "সয-০০৭৭১",
    "registrationNumber": "২০২০২১৩৮৯৩",
    "department": "দর্শন বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আনিকা তাহসিনা",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "রক-০০৪২৩",
    "registrationNumber": "২০২০৩১৭৬২৭",
    "department": "আইন বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "ইসতিয়াক আহম্মেদ",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "বএ-০১৪১৫",
    "registrationNumber": "২০১৯০১৮৯৪৬",
    "department": "ভাষাবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "তাসপিয়া তাবাসসুম মৌমিতা",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "রক-০২২২৫",
    "registrationNumber": "২০২৩১১৫১০৫",
    "department": "দর্শন বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "নুসরাত জাহান নিসু",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "কম-০০১১৯",
    "registrationNumber": "২০১৯০১৫৪৪৪",
    "department": "আইন বিভাগ",
    "hall": "বাংলাদেশ-কুয়েত মৈত্রী হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "মু. মেহেদী হাসান মুন্না",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "এএ-০১২২০",
    "registrationNumber": "২০২০৮১৮৫৮৬",
    "department": "শান্তি ও সংঘর্ষ অধ্যয়ন বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মো: শাহরিয়ার জাবির",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "মম-০০০৮৫",
    "registrationNumber": "২০২৩৯১৩২২৬",
    "department": "আইন বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মোঃ ঈদুল ফয়সাল",
    "designation": "মানবাধিকার ও আইন বিষয়ক সম্পাদক",
    "voteNumber": "ফহ-০০৪৩৪",
    "registrationNumber": "২০২১১৯১৪৫৩",
    "department": "দর্শন বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আরমান হোসেন",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "জহ-০১৯৬১",
    "registrationNumber": "২০১৬৫১৫৩৩৪",
    "department": "আরবি বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "ইয়াসীন আরাফাত",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "বএ-০২০০২",
    "registrationNumber": "২০২০৯১২৭৩৪",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "চিমচিম্যা চাকমা",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "জগ-০০১৭০",
    "registrationNumber": "২০২৪১১৬৪০০",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "জহিন ফেরদৌস জামি",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "জিয়া-০০১৬৫",
    "registrationNumber": "২০২১৬১৩১৭৭",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "মালিহা তাবাস্সুম মীম",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "রক-০৩১৭৮",
    "registrationNumber": "২০১৯৮১২৮২৭",
    "department": "ফিন্যান্স বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "মুহাইমেনুল ইসলাম তকি",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "জস-০১১৯৭",
    "registrationNumber": "২০২০১১৭৫১১",
    "department": "সংগীত বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মেহেদী হোসেন রিপেল",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "জস-০১২২৮",
    "registrationNumber": "২০২১৭১৩৬১৭",
    "department": "সমাজকল্যাণ ও গবেষণা ইনস্টিটিউট",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মো: মুক্তার হোসেন",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "মম-০১৩৩৩",
    "registrationNumber": "২০১৮৭২৩১২৪",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "মোঃ আল-আমিন (সরকার)",
    "designation": "ক্রীড়া সম্পাদক",
    "voteNumber": "জহ-০০৩০১",
    "registrationNumber": "২০১৯৩১৩৮৬৭",
    "department": "ইংরেজী বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "আবু মুজাহিদ আকাশ",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "জিয়া-০০০৪৯",
    "registrationNumber": "২০২১২১৪৭৮৩",
    "department": "অর্থনীতি বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "আরিফুর রহমান মজুমদার",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "জিয়া-০০৪১১",
    "registrationNumber": "২০১৯৯১৩৪৯২",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "ওবায়েদুল হক",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "বএ-০০২৫১",
    "registrationNumber": "২০১৬০১৫৩৩৯",
    "department": "আরবি বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "জয় আহমেদ সানি",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "এএ-০০০৫৮",
    "registrationNumber": "২০২০১১৮৪৫৭",
    "department": "অপরাধ বিজ্ঞান বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "জয়নাল আবেদিন লাভলু",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "মম-০০৯৯৮",
    "registrationNumber": "২০১৯৬১২৫৬৮",
    "department": "মার্কেটিং বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "ফাইজুল্লাহ",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "বএ-০১৯৫৯",
    "registrationNumber": "২০১৮২২৩২০০",
    "department": "সমাজবিজ্ঞান বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "মহির আলম",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "এক-০০১৫৬",
    "registrationNumber": "২০১৮১২৫৪৬১",
    "department": "গণিত বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "মাহফুজ আহম্মেদ শাহীন",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "শহ-০১৪৫১",
    "registrationNumber": "২০১৭১১৪১৪৯",
    "department": "ফার্মেসি বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৯",
    "name": "মো: শাহরিয়ারআলম",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "বব-০১৬১০",
    "registrationNumber": "২০১৩১১৪৭৭৪",
    "department": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১০",
    "name": "মো:শরীফুল ইসলাম",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "জহ-০০০৯০",
    "registrationNumber": "২০১৯৬১৫৪০২",
    "department": "আইন বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১১",
    "name": "মো. আশরাফুল ইসলাম",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "বএ-০১৭৬২",
    "registrationNumber": "২০২০১১২৭৫০",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "বিজয় একাত্তর হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১২",
    "name": "মোঃ তাওহীদুল ইসলাম",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "বব-০০২১০",
    "registrationNumber": "২০১৯০১৪৩৯১",
    "department": "আরবি বিভাগ",
    "hall": "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৩",
    "name": "মোঃ নাজমুল আলিফ",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "জস-০১১৫৮",
    "registrationNumber": "২০২০১১৭৮৮১",
    "department": "লোকপ্রশাসন বিভাগ",
    "hall": "কবি জসীম উদ্দীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১৪",
    "name": "মোঃ সাইমুম আলম",
    "designation": "সমাজসেবা সম্পাদক",
    "voteNumber": "শহ-০০৪০৩",
    "registrationNumber": "২০২০১১৯৫৪১",
    "department": "ফলিত রসায়ন ও কেমিকৌশল বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "১",
    "name": "অপূর্বা ইসলাম",
    "designation": "সদস্য",
    "voteNumber": "রক-০২৩৭৩",
    "registrationNumber": "২০২৪০১৫৩৭৬",
    "department": "নৃত্যকলা বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২",
    "name": "অর্ক বড়ুয়া (রক্তবীজ)",
    "designation": "সদস্য",
    "voteNumber": "জগ-০০৮৪৭",
    "registrationNumber": "২০২৩৫১৫৮০৪",
    "department": "নাট্য ও প্রদর্শন কলা অধ্যয়ন বিভাগ",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৩",
    "name": "আকিব হোসেন",
    "designation": "সদস্য",
    "voteNumber": "জিয়া-০০৬০২",
    "registrationNumber": "২০২১৮১৬১৩৬",
    "department": "টিভি ও চলচ্চিত্র অধ্যয়ন বিভাগ",
    "hall": "মুক্তিযোদ্ধা জিয়াউর রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৪",
    "name": "আখিরুল ইসলাম",
    "designation": "সদস্য",
    "voteNumber": "শহ-০০৭৪০",
    "registrationNumber": "২০২২১১৭০২৩",
    "department": "পদার্থ বিজ্ঞান বিভাগ",
    "hall": "ড. মুহম্মদ শহীদুল্লাহ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৫",
    "name": "আতিকা আনজুম অর্থী",
    "designation": "সদস্য",
    "voteNumber": "সক-০১১০৬",
    "registrationNumber": "২০২০২১২২২৭",
    "department": "কারুশিল্প বিভাগ",
    "hall": "কবি সুফিয়া কামাল হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৬",
    "name": "আনাস ইবনে মুনির",
    "designation": "সদস্য",
    "voteNumber": "এএ-০০১৭৬",
    "registrationNumber": "২০১৯১১৪১৭৪",
    "department": "আন্তর্জাতিক সম্পর্ক বিভাগ",
    "hall": "স্যার এ এফ রহমান হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৭",
    "name": "আনিয়া আক্তার",
    "designation": "সদস্য",
    "voteNumber": "শন-০১৬৩৫",
    "registrationNumber": "২০২২৪১৪৪৩৮",
    "department": "নাট্য ও প্রদর্শন কলা অধ্যয়ন বিভাগ",
    "hall": "শামসুন নাহার হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "৮",
    "name": "আবদুর রহমান",
    "designation": "সদস্য",
    "voteNumber": "এক-০০৭৯৬",
    "registrationNumber": "২০২৩২১৭২৪৭",
    "department": "প্রাণিবিদ্যা বিভাগ",
    "hall": "অমর একুশে হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২০৭",
    "name": "সি, এম, মশিউল্লা ইব্রাহীম নিশাদ",
    "designation": "সদস্য",
    "voteNumber": "জহ-০০৯৬৬",
    "registrationNumber": "২০২৩৬১৫২৬৩",
    "department": "বিশ্ব ধর্ম ও সংস্কৃতি বিভাগ",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২০৮",
    "name": "সৃজিতা এহসান",
    "designation": "সদস্য",
    "voteNumber": "রক-০২৮৭৫",
    "registrationNumber": "২০২২৩১৩৮০৯",
    "department": "প্রিন্টিং এন্ড পাবলিকেশন স্টাডিজ বিভাগ",
    "hall": "রোকেয়া হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২০৯",
    "name": "সৈয়দ নাফিজ চৌধুরী",
    "designation": "সদস্য",
    "voteNumber": "ফহ-০০০৭৩",
    "registrationNumber": "২০১৮৯২৫২৪৭",
    "department": "উদ্ভিদ বিজ্ঞান বিভাগ",
    "hall": "ফজলুল হক মুসলিম হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২১০",
    "name": "সৈয়দ মিনহাজুল বাহার (মিনহাজ)",
    "designation": "সদস্য",
    "voteNumber": "মম-০০২০৩",
    "registrationNumber": "২০২০১১৮৭৮১",
    "department": "আরবি বিভাগ",
    "hall": "হাজী মুহম্মদ মুহসীন হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২১১",
    "name": "সোমানন্দ বড়য়া সৌরভ",
    "designation": "সদস্য",
    "voteNumber": "জগ-০২২১৫",
    "registrationNumber": "২০২১৬১৩৯২৪",
    "department": "স্বাস্থ্য অর্থনীতি ইনস্টিটিউট",
    "hall": "জগন্নাথ হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২১২",
    "name": "সোয়াইব ইসলাম ওমি",
    "designation": "সদস্য",
    "voteNumber": "জহ-০০১৬০",
    "registrationNumber": "২০১৯০১৯১৩৪",
    "department": "আধুনিক ভাষা ইনস্টিটিউট",
    "hall": "শহীদ সার্জেন্ট জহুরুল হক হল",
    "Category": "Central"
  },
  {
    "ballotNumber": "২১৩",
    "name": "সোহান ফকির",
    "designation": "সদস্য",
    "voteNumber": "সয-০০৭৪৩",
    "registrationNumber": "২০২১১১৪১৯৯",
    "department": "তথ্যবিজ্ঞান ও গ্রন্থাগার ব্যবস্থাপনা বিভাগ",
    "hall": "সূর্যসেন হল",
    "Category": "Central"
  }
]

module.exports = realCandidatesData;