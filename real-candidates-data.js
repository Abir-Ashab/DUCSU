// Real DUCSU candidates data extracted from PDFs (Exact as in original)
const realCandidatesData = [
  // বিজ্ঞান ও প্রযুক্তি সম্পাদক পদে প্রার্থীদের চূড়ান্ত তালিকা (Science & Technology Secretary)
  {
    ballotNumber: "1",
    name: "আবদুল্লাহ ইবনে হানিফ আরিয়ান",
    bengaliName: "আবদুল্লাহ ইবনে হানিফ আরিয়ান",
    ballotName: "abdullah_arayan_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "ফজ-০০২২৯",
    registrationNumber: "২০১৯৯১৭৯৮",
    department: "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    hall: "ফজলুল হক মুসলিম হল"
  },
  {
    ballotNumber: "2",
    name: "আহমাদ হাসান তালহা",
    bengaliName: "আহমাদ হাসান তালহা",
    ballotName: "ahmad_hasan_talha_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "এই-০০২২৮",
    registrationNumber: "২০২২৮১৮০৭",
    department: "আরবি বিভাগ",
    hall: "স্যার এ এফ রহমান হল"
  },
  {
    ballotNumber: "3",
    name: "আহমদ বিন ইসলাম শোয়েব",
    bengaliName: "আহমদ বিন ইসলাম শোয়েব",
    ballotName: "ahmad_bin_islam_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "ফজ-০১৭৬৩",
    registrationNumber: "২০১৯৯১৮১০",
    department: "কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
    hall: "ফজলুল হক মুসলিম হল"
  },
  {
    ballotNumber: "4",
    name: "জুয়াইরিয়া আক্তার",
    bengaliName: "জুয়াইরিয়া আক্তার",
    ballotName: "juairiya_akter_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "সক-০০০৮৫",
    registrationNumber: "২০২১৮১১৬০৯",
    department: "অণুজীব বিজ্ঞান বিভাগ",
    hall: "কবি সুফিয়া কামাল হল"
  },
  {
    ballotNumber: "5",
    name: "ফাতিন ইশারাক",
    bengaliName: "ফাতিন ইশারাক",
    ballotName: "fatin_isharok_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "ফজ-০০৭৪৩",
    registrationNumber: "২০২০৮১৬৩৭",
    department: "গার্হস্থ্য বিজ্ঞান বিভাগ",
    hall: "ফজলুল হক মুসলিম হল"
  },
  {
    ballotNumber: "6",
    name: "ফারহান লাবীব",
    bengaliName: "ফারহান লাবীব",
    ballotName: "farhan_labib_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "এফ-০০৮৫৩",
    registrationNumber: "২০২০৫১৫৬১০",
    department: "নিউক্লিয়ার ইঞ্জিনিয়ারিং বিভাগ",
    hall: "অমর একুশে হল"
  },
  {
    ballotNumber: "7",
    name: "মোঃ একইনুল ইসলাম",
    bengaliName: "মোঃ একইনুল ইসলাম",
    ballotName: "ekainul_islam_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "শহ-০০৮৫৬",
    registrationNumber: "২০১৭৬১৫১৮৯",
    department: "তথ্য প্রযুক্তি ইনস্টিটিউট",
    hall: "ড. মুহম্মদ শহীদুল্লাহ হল"
  },
  {
    ballotNumber: "8",
    name: "মোঃ শাকিব খান",
    bengaliName: "মোঃ শাকিব খান",
    ballotName: "shakib_khan_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "শহ-০০৫৫১",
    registrationNumber: "২০২০১৫০১৭৪",
    department: "তড়িৎ ও ইলেকট্রনিক কৌশল বিভাগ",
    hall: "ড. মুহম্মদ শহীদুল্লাহ হল"
  },
  {
    ballotNumber: "9",
    name: "মোঃ সজীব হোসেন",
    bengaliName: "মোঃ সজীব হোসেন",
    ballotName: "sajib_hosen_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "বজ-০০৬৪৬",
    registrationNumber: "২০১৮৭২৩০৬১",
    department: "উইমেন এন্ড জেন্ডার স্টাডিজ বিভাগ",
    hall: "বিজয় একাত্তর হল"
  },
  {
    ballotNumber: "10",
    name: "মোঃ রিয়াজ মৃধা",
    bengaliName: "মোঃ রিয়াজ মৃধা",
    ballotName: "riaz_mridha_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "ফজ-০০০২৯",
    registrationNumber: "২০২১২১১৬১৪",
    department: "অণুজীব বিজ্ঞান বিভাগ",
    hall: "ফজলুল হক মুসলিম হল"
  },
  {
    ballotNumber: "11",
    name: "মোঃ ইকবাল হায়দার",
    bengaliName: "মোঃ ইকবাল হায়দার",
    ballotName: "ikbal_haidar_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "ফজ-০১১৬৯",
    registrationNumber: "২০১৮০২৬২৭",
    department: "ফলিত রসায়ন ও কেমিক্যাল ইঞ্জিনিয়ারিং বিভাগ",
    hall: "ফজলুল হক মুসলিম হল"
  },
  {
    ballotNumber: "12",
    name: "মোঃ মামুনুর ইসলাম(বিধান)",
    bengaliName: "মোঃ মামুনুর ইসলাম(বিধান)",
    ballotName: "mamunur_bidhan_2024",
    designation: "বিজ্ঞান ও প্রযুক্তি সম্পাদক",
    voteNumber: "এফ-০০৭৪৩",
    registrationNumber: "২০১৮২৬০৩২",
    department: "প্রাণরসায়ন ও অনুপ্রাণ বিজ্ঞান বিভাগ",
    hall: "অমর একুশে হল"
  },

// সহ-সাধারণ সম্পাদক পদে প্রার্থীদের চূড়ান্ত তালিকা (Assistant General Secretary)
{
    ballotNumber: "1",
    name: "অভিজিত ইসলাম",
    bengaliName: "অভিজিত ইসলাম",
    ballotName: "abhijit_islam_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "ফম-০০৯৪৬",
    registrationNumber: "২০২১১১৮০১৮",
    department: "দর্শন বিভাগ",
    hall: "বাংলাদেশ-কুয়েত মৈত্রী হল"
},
{
    ballotNumber: "2",
    name: "আকরাম বিশাল ইয়",
    bengaliName: "আকরাম বিশাল ইয়",
    ballotName: "akram_bishal_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "জগ-০০৩০১",
    registrationNumber: "২০২১৯২৬৮৫৯",
    department: "ইতিহাসের বিজ্ঞানের বিভাগ",
    hall: "জগন্নাথ হল"
},
{
    ballotNumber: "3",
    name: "আরমানুল হক",
    bengaliName: "আরমানুল হক",
    ballotName: "armanul_hok_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "জগ-০০২২২",
    registrationNumber: "২০১৭৬৬৮৪৫",
    department: "আন্তর্জাতিক সম্পর্ক বিভাগ",
    hall: "কবি জসীম উদদীন হল"
},
{
    ballotNumber: "4",
    name: "আল্লা উদ্দিন",
    bengaliName: "আল্লা উদ্দিন",
    ballotName: "alla_uddin_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "এই-০০২৪৬",
    registrationNumber: "২০২০১১৮৫২",
    department: "আরবি বিভাগ",
    hall: "স্যার এ এফ রহমান হল"
},
{
    ballotNumber: "5",
    name: "আশদেয়া বড়ুয়া",
    bengaliName: "আশদেয়া বড়ুয়া",
    ballotName: "ashadea_borua_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "শর-০০৫১৯",
    registrationNumber: "২০১৯৪২৬৪৮",
    department: "আন্তর্জাতিক সম্পর্ক বিভাগ",
    hall: "শামসুন নাহার হল"
},
{
    ballotNumber: "6",
    name: "আহমদ হোসেন নৌশী আমিন",
    bengaliName: "আহমদ হোসেন নৌশী আমিন",
    ballotName: "ahmad_noushi_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "এফ-০০৯৪১৯",
    registrationNumber: "২০২০৮১৫০১৯",
    department: "পরিসংখ্যান বিভাগ",
    hall: "অমর একুশে হল"
},
{
    ballotNumber: "7",
    name: "জাইদের আহমদ",
    bengaliName: "জাইদের আহমদ",
    ballotName: "zaider_ahmad_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "সম-০১৪৩৭",
    registrationNumber: "২০১৮৮২৬৪৭",
    department: "সমাজকর্ম বিভাগ",
    hall: "সূর্যসেন হল"
},
{
    ballotNumber: "8",
    name: "জারীয়া আল হানী স্যারেম",
    bengaliName: "জারীয়া আল হানী স্যারেম",
    ballotName: "jariya_hani_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "রজ-০০৩৮৪",
    registrationNumber: "২০১৮১২৩০৫",
    department: "গণযোগাযোগ ও সাংবাদিকতা বিভাগ",
    hall: "বিজয় একাত্তর হল"
},
{
    ballotNumber: "9",
    name: "তাইয়েব আল মুকসীর চৌধুরী",
    bengaliName: "তাইয়েব আল মুকসীর চৌধুরী",
    ballotName: "taiyeb_mukshir_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "জগ-০০৯৬৫",
    registrationNumber: "২০১৮৯২৬৮৯",
    department: "বিশ্ব ধর্ম ও সংস্কৃতি বিভাগ",
    hall: "শহীদ স্যার্জেন্ট জহুরুল হক হল"
},
{
    ballotNumber: "10",
    name: "ফয়সাল হোসেন",
    bengaliName: "ফয়সাল হোসেন",
    ballotName: "foysal_hosen_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "সম-০১৬৯৯",
    registrationNumber: "২০১৮৮২৬৮২",
    department: "সমাজকর্ম বিভাগ",
    hall: "সূর্যসেন হল"
},
{
    ballotNumber: "11",
    name: "ফাতের শরীফিয়া(এ্যানি)",
    bengaliName: "ফাতের শরীফিয়া(এ্যানি)",
    ballotName: "fatema_anni_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "শর-০০৫৮২",
    registrationNumber: "২০১৮০২৬৩৭",
    department: "ইসলামিক স্টাডিজ বিভাগ",
    hall: "শামসুন নাহার হল"
},
{
    ballotNumber: "12",
    name: "ফাহাম আবগুয়ার",
    bengaliName: "ফাহাম আবগুয়ার",
    ballotName: "faham_abguar_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "রজ-০০৬৬০",
    registrationNumber: "২০২১৮১৭৬৬",
    department: "জাপানিজ স্টাডিজ বিভাগ",
    hall: "শেখ মুজিবুর রহমান হল"
},
{
    ballotNumber: "13",
    name: "বাইএনা আলিদ",
    bengaliName: "বাইএনা আলিদ",
    ballotName: "maitenia_ali_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "রজ-০১৮৭২",
    registrationNumber: "২০২০২২৩৮",
    department: "শিক্ষাদান বিভাগ",
    hall: "বিজয় একাত্তর হল"
},
{
    ballotNumber: "14",
    name: "মৃহাই মাহরীন নাদ",
    bengaliName: "মৃহাই মাহরীন নাদ",
    ballotName: "mirhai_mahrin_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "এফ-০০১২৬",
    registrationNumber: "২০১৯১২২৬৯",
    department: "মার্কেটিং বিভাগ",
    hall: "অমর একুশে হল"
},
{
    ballotNumber: "15",
    name: "মোঃ আশিকুর রহমান জীম",
    bengaliName: "মোঃ আশিকুর রহমান জীম",
    ballotName: "ashikur_jim_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "সম-০০৯২৮",
    registrationNumber: "২০২০৮১২২৪",
    department: "আইন বিভাগ",
    hall: "সূর্যসেন হল"
},
{
    ballotNumber: "16",
    name: "মোঃ শাহরিয়ার নায়িক",
    bengaliName: "মোঃ শাহরিয়ার নায়িক",
    ballotName: "shahriyar_nayek_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "জগ-০১৭৩",
    registrationNumber: "২০২৩৬১৫৯",
    department: "শাজি ও সংখ্যান অযুগরণ বিভাগ",
    hall: "শহীদ স্যার্জেন্ট জহুরুল হক হল"
},
{
    ballotNumber: "17",
    name: "মোঃ অন্তর হোলে দুই",
    bengaliName: "মোঃ অন্তর হোলে দুই",
    ballotName: "antara_hole_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "ফজ-০১৮৪৮",
    registrationNumber: "২০২০১১০৩৭",
    department: "কনমেল বিভাগ",
    hall: "ড. মুহম্মদ শহীদুল্লাহ হল"
},
{
    ballotNumber: "18",
    name: "মোঃ জারিব আহমেদ (হাতিব আল-ইসলাম)",
    bengaliName: "মোঃ জারিব আহমেদ (হাতিব আল-ইসলাম)",
    ballotName: "jarib_hatib_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "রজ-০১৮৬২",
    registrationNumber: "২০১৮২৯৬৪",
    department: "সমাজকর্ম বিভাগ",
    hall: "শেখ মুজিবুর রহমান হল"
},
{
    ballotNumber: "19",
    name: "রশিদুর ইসলাম",
    bengaliName: "রশিদুর ইসলাম",
    ballotName: "rashidur_islam_2024",
    designation: "সহ-সাধারণ সম্পাদক",
    voteNumber: "সম-০০৬১০",
    registrationNumber: "২০১৮৯২০৬৩",
    department: "মার্কেটিং বিভাগ",
    hall: "সলিমুল্লাহ মুসলিম হল"
},

// সাধারণ সম্পাদক পদে প্রার্থীদের চূড়ান্ত তালিকা (General Secretary)
{
    ballotNumber: "1",
    name: "এস.এম.ফরহাদ",
    bengaliName: "এস.এম.ফরহাদ",
    ballotName: "sm_farhad_2024",
    designation: "সাধারণ সম্পাদক",
    voteNumber: "বর-০১৪৭২",
    registrationNumber: "২০১৭১১৭২২",
    department: "সমাজকল্যাণ ও গবেষণা ইনস্টিটিউট",
    hall: "জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান হল"
},

  // সহ-সভাপতি পদে প্রার্থীদের চূড়ান্ত তালিকা (Vice President)
  {
    ballotNumber: "1",
    name: "আব্দুর ওয়াহেদ",
    bengaliName: "আব্দুর ওয়াহেদ",
    ballotName: "abdur_owahed_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "সম-০০২০৫",
    registrationNumber: "২০২১২৫৭৩",
    department: "আরবি বিভাগ",
    hall: "সূর্যসেন হল"
  },
  {
    ballotNumber: "2",
    name: "আব্দুল কাদের",
    bengaliName: "আব্দুল কাদের",
    ballotName: "abdul_kader_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "বজ-০১৯০৭",
    registrationNumber: "২০২৮৫২৬৪৬৩",
    department: "সমাজকল্যাণ ও গবেষণা ইনস্টিটিউট",
    hall: "বিজয় একাত্তর হল"
  },
  {
    ballotNumber: "3",
    name: "আহিদুল ইসলাম",
    bengaliName: "আহিদুল ইসলাম",
    ballotName: "ahidyl_islam_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "জগ-০০৪২৩",
    registrationNumber: "২০২২১২২৪৪১",
    department: "উন্নয়ন অধ্যয়ন বিভাগ",
    hall: "শহীদ স্যার্জেন্ট জহুরুল হক হল"
  },
  {
    ballotNumber: "4",
    name: "আল আমিন ইসলাম",
    bengaliName: "আল আমিন ইসলাম",
    ballotName: "al_amin_islam_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "সম-০০১৮৫",
    registrationNumber: "২০২২১৪৩০",
    department: "ইলেক্ট্রিক বিভাগ",
    hall: "সূর্যসেন হল"
  },
  {
    ballotNumber: "5",
    name: "আলিক ইব্রাহিম সেভেক",
    bengaliName: "আলিক ইব্রাহিম সেভেক",
    ballotName: "alik_ibrahim_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "সম-০১২৪৫",
    registrationNumber: "২০২০৮১৮০৩৪",
    department: "বোমেডিক্যাল সেন্টেন্স বিভাগ",
    hall: "হাজী মুহম্মদ মুহসীন হল"
  },
  {
    ballotNumber: "6",
    name: "উমামা ফাতেমা",
    bengaliName: "উমামা ফাতেমা",
    ballotName: "umama_fatemah_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "সক-০১২৫৩",
    registrationNumber: "২০১৮৩২৬০০৮",
    department: "প্রাণরসায়ন ও অনুপ্রাণ বিজ্ঞান বিভাগ",
    hall: "কবি সুফিয়া কামাল হল"
  },
  {
    ballotNumber: "7",
    name: "জাইদেন হোসেন",
    bengaliName: "জাইদেন হোসেন",
    ballotName: "zaiden_hosen_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "বজ-০০৫৫০",
    registrationNumber: "২০১৮৭৬২০৭২",
    department: "চিকিৎসা ও স্বাস্থ্য অযুগরণ বিভাগ",
    hall: "বিজয় একাত্তর হল"
  },
  {
    ballotNumber: "8",
    name: "জালাল আহমদ(জলাময়ী জালাল)",
    bengaliName: "জালাল আহমদ(জলাময়ী জালাল)",
    ballotName: "jalal_jalamayee_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "এম-০০৫১৯",
    registrationNumber: "২০২০৭১৬০৮৫",
    department: "টিভি ও চলাচিত্র অধ্যয়ন বিভাগ",
    hall: "হাজী মুহম্মদ মুহসীন হল"
  },
  {
    ballotNumber: "9",
    name: "তাহনীন হায়দার",
    bengaliName: "তাহনীন হায়দার",
    ballotName: "tahnin_haydar_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "সম-০১৩০৩",
    registrationNumber: "২০২১১১৪০৮৭",
    department: "আপ্যাডিমিয়া বিভাগ",
    hall: "সূর্যসেন হল"
  },
  {
    ballotNumber: "10",
    name: "হীন মোহাম্মদ সোহেল(আনাদীল)",
    bengaliName: "হীন মোহাম্মদ সোহেল(আনাদীল)",
    ballotName: "hin_sohel_anadil_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "সম-০১০৭৩",
    registrationNumber: "২০১৭৪১৪৬৬১",
    department: "জানৈকিয়ক বিভাগ",
    hall: "সূর্যসেন হল"
  },
  {
    ballotNumber: "11",
    name: "মারিয়া হোসেন",
    bengaliName: "মারিয়া হোসেন",
    ballotName: "mariya_hosen_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "সক-০০৮০৯",
    registrationNumber: "২০১৯৪১৮৫৫৩",
    department: "ফলিত ও পরিবেশ বিভাগ",
    hall: "কবি সুফিয়া কামাল হল"
  },
  {
    ballotNumber: "12",
    name: "মাহমা হাসান",
    bengaliName: "মাহমা হাসান",
    ballotName: "mahma_hasan_2024",
    designation: "সহ-সভাপতি",
    voteNumber: "ফজ-০০৭৬৬",
    registrationNumber: "২০১৮২০৬৬০",
    department: "ফলিত গণিত বিভাগ",
    hall: "ফজলুল হক মুসলিম হল"
  }
];

module.exports = realCandidatesData;
