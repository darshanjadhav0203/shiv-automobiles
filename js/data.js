/* =====================================================
   DATA FILE – Services, Reviews, FAQs
   Edit this file to update content without touching HTML
   ===================================================== */

// ── SERVICES ─────────────────────────────────────────
const SERVICES = [
  {
    icon: '🔧',
    mr: 'जनरल कार सर्व्हिसिंग',
    en: 'General Car Service',
    hi: 'जनरल कार सर्विसिंग',
    descMr: 'इंजिन ऑइल, फिल्टर, कूलंट, ब्रेक तपासणी, सस्पेन्शन तपासणी, बॅटरी टॉप-अप आणि संपूर्ण गाडी तपासणी.',
    descEn: 'Engine oil, filters, coolant, brake check, suspension check, battery top-up and complete vehicle inspection.',
    descHi: 'इंजन ऑयल, फिल्टर, कूलेंट, ब्रेक जांच, सस्पेंशन जांच, बैटरी टॉप-अप और पूरी गाड़ी की जांच।',
    slug: 'car-service'
  },
  {
    icon: '⚙️',
    mr: 'इंजिन दुरुस्ती',
    en: 'Engine Repair',
    hi: 'इंजन मरम्मत',
    descMr: 'इंजिन ओव्हरहॉलिंग, हेड गॅस्केट, ऑइल लिक, ओव्हरहिटिंग आणि इंजिनशी संबंधित सर्व समस्या.',
    descEn: 'Engine overhauling, head gasket, oil leaks, overheating and all engine-related issues.',
    descHi: 'इंजन ओवरहॉलिंग, हेड गैस्केट, ऑयल लीक, ओवरहीटिंग और सभी इंजन संबंधित समस्याएं।',
    slug: 'engine-repair'
  },
  {
    icon: '🔄',
    mr: 'क्लच &amp; गिअरबॉक्स दुरुस्ती',
    en: 'Clutch &amp; Gearbox Repair',
    hi: 'क्लच और गियरबॉक्स मरम्मत',
    descMr: 'क्लच प्लेट, प्रेशर प्लेट, गिअरबॉक्स ओव्हरहॉलिंग आणि गिअर शिफ्टिंग समस्या दुरुस्त करणे.',
    descEn: 'Clutch plate, pressure plate, gearbox overhauling and gear shifting problems.',
    descHi: 'क्लच प्लेट, प्रेशर प्लेट, गियरबॉक्स ओवरहॉलिंग और गियर शिफ्टिंग की समस्याएं।',
    slug: 'engine-repair'
  },
  {
    icon: '🛞',
    mr: 'ब्रेक सर्व्हिसिंग',
    en: 'Brake Service',
    hi: 'ब्रेक सर्विसिंग',
    descMr: 'ब्रेक पॅड, डिस्क, ड्रम, ब्रेक फ्लुइड आणि हँडब्रेक तपासणी व दुरुस्ती.',
    descEn: 'Brake pads, discs, drums, brake fluid and handbrake inspection and repair.',
    descHi: 'ब्रेक पैड, डिस्क, ड्रम, ब्रेक फ्लुइड और हैंडब्रेक की जांच और मरम्मत।',
    slug: 'car-service'
  },
  {
    icon: '🌿',
    mr: 'सस्पेन्शन &amp; स्टीअरिंग दुरुस्ती',
    en: 'Suspension &amp; Steering Repair',
    hi: 'सस्पेंशन और स्टीयरिंग मरम्मत',
    descMr: 'शॉक अब्झॉर्बर, स्प्रिंग, बॉल जॉइंट, स्टीअरिंग रॅक आणि टाय रॉड दुरुस्ती.',
    descEn: 'Shock absorbers, springs, ball joints, steering rack and tie rod repair.',
    descHi: 'शॉक अब्जॉर्बर, स्प्रिंग, बॉल जॉइंट, स्टीयरिंग रैक और टाय रॉड मरम्मत।',
    slug: 'car-service'
  },
  {
    icon: '❄️',
    mr: 'कार AC दुरुस्ती &amp; गॅस भरणे',
    en: 'Car AC Repair &amp; Gas Filling',
    hi: 'कार AC मरम्मत और गैस भरना',
    descMr: 'AC कूलिंग समस्या, कंप्रेसर दुरुस्ती, गॅस रिफिलिंग, कंडेन्सर आणि ब्लोअर दुरुस्ती.',
    descEn: 'AC cooling issues, compressor repair, gas refilling, condenser and blower repair.',
    descHi: 'AC कूलिंग समस्या, कंप्रेसर मरम्मत, गैस रिफिलिंग, कंडेंसर और ब्लोअर मरम्मत।',
    slug: 'car-ac-repair'
  },
  {
    icon: '⚡',
    mr: 'इलेक्ट्रिकल &amp; वायरिंग',
    en: 'Electrical &amp; Wiring',
    hi: 'इलेक्ट्रिकल और वायरिंग',
    descMr: 'वायरिंग शॉर्ट, लाईट्स, हॉर्न, सेन्सर, ECU आणि सर्व इलेक्ट्रिकल समस्या.',
    descEn: 'Wiring shorts, lights, horn, sensors, ECU and all electrical issues.',
    descHi: 'वायरिंग शॉर्ट, लाइट्स, हॉर्न, सेंसर, ECU और सभी इलेक्ट्रिकल समस्याएं।',
    slug: 'car-service'
  },
  {
    icon: '🔋',
    mr: 'बॅटरी चेक &amp; जम्प-स्टार्ट',
    en: 'Battery Check &amp; Jump-Start',
    hi: 'बैटरी जांच और जम्प-स्टार्ट',
    descMr: 'बॅटरी तपासणी, चार्जिंग, बदलणे आणि आपत्कालीन जम्प-स्टार्ट सेवा.',
    descEn: 'Battery testing, charging, replacement and emergency jump-start service.',
    descHi: 'बैटरी परीक्षण, चार्जिंग, प्रतिस्थापन और आपातकालीन जम्प-स्टार्ट सेवा।',
    slug: 'car-service'
  },
  {
    icon: '🌡️',
    mr: 'रेडिएटर &amp; कूलिंग दुरुस्ती',
    en: 'Radiator &amp; Cooling Repair',
    hi: 'रेडिएटर और कूलिंग मरम्मत',
    descMr: 'रेडिएटर लिक, ओव्हरहिटिंग, वॉटर पंप, थर्मोस्टेट आणि कूलिंग सिस्टम दुरुस्ती.',
    descEn: 'Radiator leaks, overheating, water pump, thermostat and cooling system repair.',
    descHi: 'रेडिएटर लीक, ओवरहीटिंग, वॉटर पंप, थर्मोस्टेट और कूलिंग सिस्टम मरम्मत।',
    slug: 'engine-repair'
  },
  {
    icon: '💨',
    mr: 'एक्झॉस्ट दुरुस्ती',
    en: 'Exhaust Repair',
    hi: 'एग्जॉस्ट मरम्मत',
    descMr: 'एक्झॉस्ट पाईप, मफलर, कॅटॅलिटिक कन्व्हर्टर आणि उत्सर्जन संबंधित दुरुस्ती.',
    descEn: 'Exhaust pipe, muffler, catalytic converter and emission-related repairs.',
    descHi: 'एग्जॉस्ट पाइप, मफलर, कैटेलिटिक कन्वर्टर और उत्सर्जन संबंधित मरम्मत।',
    slug: 'engine-repair'
  },
  {
    icon: '🔘',
    mr: 'टायर &amp; व्हील अलाइनमेंट',
    en: 'Tyre &amp; Wheel Alignment',
    hi: 'टायर और व्हील अलाइनमेंट',
    descMr: 'टायर बदलणे, पंक्चर दुरुस्ती, बॅलन्सिंग आणि व्हील अलाइनमेंट सेवा.',
    descEn: 'Tyre replacement, puncture repair, balancing and wheel alignment service.',
    descHi: 'टायर बदलना, पंक्चर मरम्मत, बैलेंसिंग और व्हील अलाइनमेंट सेवा।',
    slug: 'car-service'
  },
  {
    icon: '🎨',
    mr: 'डेंटिंग &amp; पेंटिंग',
    en: 'Denting &amp; Painting',
    hi: 'डेंटिंग और पेंटिंग',
    descMr: 'अपघातानंतरची डेंट दुरुस्ती, बॉडी पेंट, स्क्रॅच दुरुस्ती आणि पूर्ण बॉडी पेंटिंग.',
    descEn: 'Post-accident dent repair, body paint, scratch removal and full body painting.',
    descHi: 'दुर्घटना के बाद डेंट मरम्मत, बॉडी पेंट, स्क्रैच हटाना और पूरी बॉडी पेंटिंग।',
    slug: 'denting-painting'
  },
  {
    icon: '💥',
    mr: 'अपघात दुरुस्ती',
    en: 'Accident Repair',
    hi: 'दुर्घटना मरम्मत',
    descMr: 'अपघातानंतरची संपूर्ण दुरुस्ती — बॉडी वर्क ते इंजिन तपासणीपर्यंत. विमा दाव्यात मदत.',
    descEn: 'Complete post-accident repair — body work to engine inspection. Insurance claim assistance.',
    descHi: 'दुर्घटना के बाद पूरी मरम्मत — बॉडी वर्क से इंजन जांच तक। बीमा दावा सहायता।',
    slug: 'denting-painting'
  },
  {
    icon: '✨',
    mr: 'क्लिनिंग &amp; पॉलिशिंग',
    en: 'Cleaning &amp; Polishing',
    hi: 'क्लीनिंग और पॉलिशिंग',
    descMr: 'इंटेरिअर-एक्सटेरिअर क्लिनिंग, वॅक्सिंग, उझा पॉलिश आणि विंडशील्ड क्लिनिंग.',
    descEn: 'Interior-exterior cleaning, waxing, polish and windshield cleaning.',
    descHi: 'इंटीरियर-एक्सटीरियर क्लीनिंग, वैक्सिंग, पॉलिश और विंडशील्ड क्लीनिंग।',
    slug: 'car-service'
  },
  {
    icon: '💻',
    mr: 'संगणकीय निदान (Diagnostics)',
    en: 'Computerized Diagnostics',
    hi: 'कम्प्यूटरीकृत डायग्नोस्टिक्स',
    descMr: 'OBD2 स्कॅन, इंजिन चेक लाईट, सेन्सर त्रुटी आणि सर्व ECU संबंधित समस्यांचे निदान.',
    descEn: 'OBD2 scan, engine check light, sensor faults and all ECU-related diagnostics.',
    descHi: 'OBD2 स्कैन, इंजन चेक लाइट, सेंसर खराबी और सभी ECU संबंधित निदान।',
    slug: 'engine-repair'
  },
  {
    icon: '📋',
    mr: 'विमा दावा मदत',
    en: 'Insurance Claim Help',
    hi: 'बीमा दावा सहायता',
    descMr: 'अपघातानंतरच्या विमा दाव्याच्या कागदपत्रांत आणि सर्व्हेअर सोबत समन्वयात मदत.',
    descEn: 'Help with insurance paperwork and surveyor coordination after accidents.',
    descHi: 'दुर्घटना के बाद बीमा कागजी कार्रवाई और सर्वेयर समन्वय में मदद।',
    slug: 'denting-painting'
  },
  {
    icon: '🆘',
    mr: 'ब्रेकडाऊन हेल्प',
    en: 'Breakdown Help',
    hi: 'ब्रेकडाउन सहायता',
    descMr: 'रस्त्यात गाडी बंद पडली? कॉल करा — आम्ही मदतीला येतो (रात्रीचे अतिरिक्त शुल्क लागू).',
    descEn: 'Car broke down on road? Call us — we come to help (night charges may apply).',
    descHi: 'रास्ते में गाड़ी बंद हुई? कॉल करें — हम मदद के लिए आते हैं (रात्रि शुल्क लागू)।',
    slug: 'car-service'
  }
];

// ── REVIEWS ──────────────────────────────────────────
// Add real Google reviews here. Keep aggregateRating out of JSON-LD until you have ≥5 reviews.
const REVIEWS = [
  {
    name: 'Santosh Shinde',
    stars: 5,
    date: 'October 2025',
    textMr: 'खूप चांगला वर्कशॉप! Vishal भाऊंनी माझ्या Maruti Swift ची AC दुरुस्ती खूप कमी वेळात केली. किंमत योग्य होती आणि WhatsApp वर फोटो अपडेट दिले. निफाड परिसरात सर्वात भरवशाचे.',
    textEn: 'Excellent workshop! Vishal bhai fixed my Maruti Swift AC very quickly. Fair pricing and sent photo updates on WhatsApp. Most trusted in the Niphad area.',
    textHi: 'बहुत अच्छा वर्कशॉप! Vishal भाई ने मेरी Maruti Swift की AC बहुत जल्दी ठीक की। उचित मूल्य और WhatsApp पर फोटो अपडेट दिए।',
    source: 'Google'
  },
  {
    name: 'Ravi Patil',
    stars: 5,
    date: 'September 2025',
    textMr: 'माझी Hyundai Creta रस्त्यात बंद पडली होती. Shiv Automobiles ला फोन केला आणि ते लगेच आले. पिकअप सेवा उत्कृष्ट आहे. गाडी वेळेवर मिळाली.',
    textEn: 'My Hyundai Creta broke down on the road. Called Shiv Automobiles and they came immediately. Pickup service is excellent. Got the car back on time.',
    textHi: 'मेरी Hyundai Creta रास्ते में बंद हो गई। Shiv Automobiles को फोन किया और वे तुरंत आ गए। पिकअप सेवा उत्कृष्ट है।',
    source: 'Google'
  }
];

// ── FAQs ─────────────────────────────────────────────
const FAQS = [
  {
    qMr: 'तुम्ही सर्व कार ब्रँडच्या गाड्या दुरुस्त करता का?',
    qEn: 'Do you service all car brands?',
    aMr: 'होय! आम्ही मारुती सुझुकी, ह्युंदाई, टाटा, महिंद्रा, होंडा, टोयोटा, किया, रेनॉल्ट, व्होल्क्सवॅगन, स्कोडा, फोर्ड, निसान, एमजी, जीप, शेव्हरोले आणि इतर सर्व लोकप्रिय ब्रँडच्या गाड्या दुरुस्त करतो.',
    aEn: 'Yes! We service all popular brands including Maruti Suzuki, Hyundai, Tata, Mahindra, Honda, Toyota, Kia, Renault, Volkswagen, Skoda, Ford, Nissan, MG, Jeep, Chevrolet and more.'
  },
  {
    qMr: 'पिकअप आणि ड्रॉप सेवा उपलब्ध आहे का?',
    qEn: 'Is pickup and drop service available?',
    aMr: 'होय, आम्ही नाईताले, निफाड, धारणगाव वीर, पिंपळगाव बसवंत, ओझर, लासलगाव, नंदूर मधमेश्वर, रामपूर, कुंडेगाव आणि शिवारे–सातारा रोडवरील गावांमध्ये पिकअप आणि ड्रॉप सेवा देतो.',
    aEn: 'Yes, we provide pickup and drop service across Naitale, Niphad, Dharangaon Vir, Pimpalgaon Baswant, Ozar, Lasalgaon, Nandur Madhmeshwar, Rampur, Kundegaon and villages along the Shivare–Satara Road.'
  },
  {
    qMr: 'कार सर्व्हिसिंगचा खर्च किती येतो?',
    qEn: 'How much does car service cost?',
    aMr: 'खर्च कामावर अवलंबून असतो. काम सुरू करण्यापूर्वी आम्ही पूर्ण अंदाज देतो. लपविलेले शुल्क नाही. त्वरित माहितीसाठी कॉल करा किंवा WhatsApp करा.',
    aEn: 'Cost depends on the work required. We give a full transparent estimate before starting — no hidden charges. Call or WhatsApp for a quick quote.'
  },
  {
    qMr: 'रात्री किंवा आपत्कालीन सेवेसाठी जास्त शुल्क आहे का?',
    qEn: 'Are there extra charges for night/emergency service?',
    aMr: 'आम्ही आपत्कालीन आणि रात्रीचे कॉल स्वीकारतो. रात्री ११ नंतरच्या सहाय्यासाठी अतिरिक्त शुल्क लागू होऊ शकते. आम्ही आधीच सांगतो.',
    aEn: 'We accept emergency and night calls. Assistance after 11 PM may attract additional charges. We always inform you upfront.'
  },
  {
    qMr: 'विमा दाव्यात मदत मिळते का?',
    qEn: 'Do you help with insurance claims?',
    aMr: 'होय, अपघातग्रस्त वाहनांसाठी विमा दाव्यातील कागदपत्रे आणि सर्व्हेअरशी समन्वयात आम्ही मदत करतो.',
    aEn: 'Yes, we help with insurance claim paperwork and surveyor coordination for accident-damaged vehicles.'
  },
  {
    qMr: 'कामाचे तास काय आहेत?',
    qEn: 'What are your working hours?',
    aMr: 'आम्ही दररोज (रविवारसह) सकाळी ८:०० ते रात्री ११:०० वाजेपर्यंत उघडे असतो. आपत्कालीन परिस्थितीत नंतरही कॉल करता येतो.',
    aEn: 'We are open every day (including Sunday) from 8:00 AM to 11:00 PM. You can call even after hours in an emergency.'
  },
  {
    qMr: 'AC दुरुस्ती आणि डेंटिंग/पेंटिंग होते का?',
    qEn: 'Do you do AC repair and denting/painting?',
    aMr: 'होय, आम्ही संपूर्ण कार AC दुरुस्ती, गॅस रिफिलिंग तसेच व्यावसायिक डेंटिंग आणि पेंटिंग सेवा देतो.',
    aEn: 'Yes, we offer full car AC repair and gas refilling, as well as professional denting and painting services.'
  }
];
