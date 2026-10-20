/* =====================================================
   DATA FILE – Services, Reviews, FAQs
   Shiv Automobiles – Car Workshop & Washing Centre
   Naitale, Niphad, Nashik
   ===================================================== */

// ── SERVICES ─────────────────────────────────────────
const SERVICES = [
  {
    icon: '🚿',
    image: 'images/wash-card.webp',
    badge: 'लोकप्रिय · Popular',
    mr: 'कार वॉशिंग सेंटर & डिटेलिंग',
    en: 'Car Washing Centre & Detailing',
    hi: 'कार वॉशिंग सेंटर और डिटेलिंग',
    descMr: 'हाय-प्रेशर स्नो फोम वॉश, अंडरबॉडी (खालचे भाग) वॉश, इंटेरिअर व्हॅक्यूम क्लिनिंग, डॅशबोर्ड व टायर पॉलिश — ३० मिनिटांत चकचकीत गाडी!',
    descEn: 'High-pressure snow foam wash, underbody chassis wash, deep interior vacuum cleaning, dashboard & tyre polish — sparkling clean in 30 mins!',
    descHi: 'हाई-प्रेशर स्नो फोम वॉश, अंडरबॉडी चेसिस वॉश, इंटीरियर वैक्यूम क्लीनिंग, डैशबोर्ड और टायर पॉलिश — 30 मिनट में चमकदार गाड़ी!',
    slug: 'car-washing',
    pageUrl: 'car-washing.html'
  },
  {
    icon: '🔧',
    image: 'images/service-card.webp',
    badge: 'नियमित सर्व्हिस',
    mr: 'जनरल कार सर्व्हिसिंग',
    en: 'General Car Service',
    hi: 'जनरल कार सर्विसिंग',
    descMr: 'इंजिन ऑइल, फिल्टर, कूलंट, ब्रेक तपासणी, सस्पेन्शन तपासणी, बॅटरी टॉप-अप आणि संपूर्ण गाडीची ६०+ पॉईंट आरोग्य तपासणी.',
    descEn: 'Engine oil, filters, coolant, brake check, suspension check, battery top-up and comprehensive 60-point vehicle inspection.',
    descHi: 'इंजन ऑयल, फिल्टर, कूलेंट, ब्रेक जांच, सस्पेंशन जांच, बैटरी टॉप-अप और पूरी गाड़ी की 60+ पॉइंट स्वास्थ्य जांच।',
    slug: 'car-service',
    pageUrl: 'car-service.html'
  },
  {
    icon: '❄️',
    image: 'images/ac-card.webp',
    badge: 'समर स्पेशल',
    mr: 'कार AC दुरुस्ती &amp; गॅस भरणे',
    en: 'Car AC Repair &amp; Gas Filling',
    hi: 'कार AC मरम्मत और गैस भरना',
    descMr: 'AC कूलिंग समस्या, कंप्रेसर दुरुस्ती, R134a/R1234yf गॅस रिफिलिंग, कंडेन्सर आणि कॅबिन फिल्टर क्लिनिंग.',
    descEn: 'AC cooling issues, compressor repair, R134a/R1234yf gas refilling, condenser cleaning and cabin filter replacement.',
    descHi: 'AC कूलिंग समस्या, कंप्रेसर मरम्मत, गैस रिफिलिंग, कंडेंसर और केबिन फिल्टर क्लीनिंग।',
    slug: 'car-ac-repair',
    pageUrl: 'car-ac-repair.html'
  },
  {
    icon: '⚙️',
    image: 'images/engine-card.webp',
    badge: 'तज्ज्ञ काम',
    mr: 'इंजिन दुरुस्ती &amp; ओव्हरहॉलिंग',
    en: 'Engine Repair &amp; Overhaul',
    hi: 'इंजन मरम्मत और ओवरहॉलिंग',
    descMr: 'इंजिन ओव्हरहॉलिंग, हेड गॅस्केट, ऑइल लिक, ओव्हरहिटिंग, टाइमिंग बेल्ट आणि संगणकीय OBD2 स्कॅन निदान.',
    descEn: 'Engine overhauling, head gasket, oil leaks, overheating, timing belt and computerized OBD2 scan diagnostics.',
    descHi: 'इंजन ओवरहॉलिंग, हेड गैस्केट, ऑयल लीक, ओवरहीटिंग, टाइमिंग बेल्ट और कम्प्यूटरीकृत OBD2 स्कैन निदान।',
    slug: 'engine-repair',
    pageUrl: 'engine-repair.html'
  },
  {
    icon: '🎨',
    image: 'images/dent-card.webp',
    badge: 'फिनिशिंग गॅरंटी',
    mr: 'डेंटिंग &amp; पेंटिंग (बॉडी वर्क)',
    en: 'Denting &amp; Painting (Body Work)',
    hi: 'डेंटिंग और पेंटिंग (बॉडी वर्क)',
    descMr: 'अपघातानंतरची डेंट दुरुस्ती, स्क्रॅच रिमूव्हल, ओरिजिनल कलर मॅचिंग, पॅनल पेंट आणि इन्शुरन्स क्लेम सहाय्य.',
    descEn: 'Post-accident dent repair, scratch removal, computerized color matching, panel painting and insurance claim assistance.',
    descHi: 'दुर्घटना के बाद डेंट मरम्मत, स्क्रैच हटाना, ओरिजिनल कलर मैचिंग, पैनल पेंट और इंश्योरेंस क्लेम सहायता।',
    slug: 'denting-painting',
    pageUrl: 'denting-painting.html'
  },
  {
    icon: '🔄',
    mr: 'क्लच &amp; गिअरबॉक्स दुरुस्ती',
    en: 'Clutch &amp; Gearbox Repair',
    hi: 'क्लच और गियरबॉक्स मरम्मत',
    descMr: 'क्लच प्लेट, प्रेशर प्लेट, रिलीज बेअरिंग, गिअरबॉक्स ओव्हरहॉलिंग आणि हार्ड गिअर शिफ्टिंग समस्या दुरुस्त करणे.',
    descEn: 'Clutch plate, pressure plate, release bearing, gearbox overhauling and hard gear shift resolution.',
    descHi: 'क्लच प्लेट, प्रेशर प्लेट, रिलीज बेयरिंग, गियरबॉक्स ओवरहॉलिंग और हार्ड गियर शिफ्टिंग समस्याएं दूर करना।',
    slug: 'clutch-gearbox',
    pageUrl: 'engine-repair.html'
  },
  {
    icon: '🛞',
    mr: 'ब्रेक सर्व्हिस &amp; डिस्क टर्निंग',
    en: 'Brake Service &amp; Disc Care',
    hi: 'ब्रेक सर्विस और डिस्क देखभाल',
    descMr: 'ब्रेक पॅड, डिस्क रोटर्स, ब्रेक ड्रम, ABS सेन्सर्स, ब्रेक फ्लुइड फ्लश आणि इमर्जन्सी हँडब्रेक ट्युनिंग.',
    descEn: 'Brake pads, disc rotors, brake drums, ABS sensors, brake fluid flush and emergency handbrake tuning.',
    descHi: 'ब्रेक पैड, डिस्क रोटर, ब्रेक ड्रम, ABS सेंसर, ब्रेक फ्लुइड फ्लश और हैंडब्रेक ट्यूनिंग।',
    slug: 'brake-service',
    pageUrl: 'car-service.html'
  },
  {
    icon: '🌿',
    mr: 'सस्पेन्शन &amp; स्टीअरिंग दुरुस्ती',
    en: 'Suspension &amp; Steering Repair',
    hi: 'सस्पेंशन और स्टीयरिंग मरम्मत',
    descMr: 'शॉक अब्झॉर्बर, बुशिंग, बॉल जॉइंट, स्टीअरिंग रॅक आणि टाय रॉड दुरुस्ती — खडकाळ रस्त्यांवरही स्मूद ड्राइव्ह.',
    descEn: 'Shock absorbers, bushings, ball joints, steering rack and tie rod repair for smooth rural and highway drives.',
    descHi: 'शॉक अब्जॉर्बर, बुशिंग, बॉल जॉइंट, स्टीयरिंग रैक और टाय रॉड मरम्मत — ग्रामीण और हाइवे सड़कों पर आरामदायक सवारी।',
    slug: 'suspension-repair',
    pageUrl: 'car-service.html'
  },
  {
    icon: '⚡',
    mr: 'इलेक्ट्रिकल, वायरिंग &amp; बॅटरी',
    en: 'Electrical, Wiring &amp; Battery',
    hi: 'इलेक्ट्रिकल, वायरिंग और बैटरी',
    descMr: 'शॉर्ट सर्किट शोधणे, हेडलाइट्स, हॉर्न, पॉवर विंडो, स्टार्टर मोटर, अल्टरनेटर आणि बॅटरी जम्प-स्टार्ट सेवा.',
    descEn: 'Short circuit diagnosis, headlights, horn, power windows, starter motor, alternator and battery jump-start.',
    descHi: 'शॉर्ट सर्किट जांच, हेडलाइट्स, हॉर्न, पावर विंडो, स्टार्टर मोटर, अल्टरनेटर और बैटरी जम्प-स्टार्ट।',
    slug: 'electrical-battery',
    pageUrl: 'car-service.html'
  },
  {
    icon: '🌡️',
    mr: 'रेडिएटर &amp; कूलिंग सिस्टम',
    en: 'Radiator &amp; Cooling System',
    hi: 'रेडिएटर और कूलिंग सिस्टम',
    descMr: 'रेडिएटर लीकेज दुरुस्ती, वॉटर पंप रिप्लेसमेंट, थर्मोस्टेट आणि इंजिन कुलिंग सिस्टम फ्लशिंग.',
    descEn: 'Radiator leak repair, water pump replacement, thermostat check and engine coolant system flush.',
    descHi: 'रेडिएटर लीकेज मरम्मत, वाटर पंप रिप्लेसमेंट, थर्मोस्टेट और इंजन कूलेंट सिस्टम फ्लशिंग।',
    slug: 'cooling-system',
    pageUrl: 'engine-repair.html'
  },
  {
    icon: '🔘',
    mr: 'टायर, पंक्चर &amp; व्हील अलाइनमेंट',
    en: 'Tyres &amp; Wheel Alignment',
    hi: 'टायर और व्हील अलाइनमेंट',
    descMr: 'टायर बदलणे, ट्युबलेस पंक्चर, व्हील बॅलन्सिंग आणि अलाइनमेंट — टायरचे आयुष्य वाढवण्यासाठी.',
    descEn: 'Tyre replacement, tubeless puncture, wheel balancing and precise alignment for longer tyre life.',
    descHi: 'टायर बदलना, ट्यूबलेस पंक्चर, व्हील बैलेंसिंग और अलाइनमेंट — टायर की लंबी उम्र के लिए।',
    slug: 'tyre-alignment',
    pageUrl: 'car-service.html'
  },
  {
    icon: '🆘',
    badge: '२४/७ इमर्जन्सी',
    mr: 'हायवे ब्रेकडाऊन &amp; टोइंग हेल्प',
    en: 'Highway Breakdown &amp; Towing Help',
    hi: 'हाइवे ब्रेकडाउन और सहायता',
    descMr: 'शिवारे–सातारा रोड (SH 30) किंवा निफाड परिसरात गाडी बंद पडल्यास ऑन-स्पॉट मेकॅनिक मदत व पिकअप सेवा.',
    descEn: 'On-spot roadside assistance and towing support along SH 30 and Niphad-Nashik rural belts (night charges may apply).',
    descHi: 'SH 30 या निफाड क्षेत्र में गाड़ी बंद होने पर मौके पर मैकेनिक मदद और पिकअप सेवा (रात्रि शुल्क लागू)।',
    slug: 'breakdown-help',
    pageUrl: 'car-service.html'
  }
];

// ── REVIEWS ──────────────────────────────────────────
const REVIEWS = [
  {
    name: 'Santosh Shinde',
    location: 'Niphad',
    stars: 5,
    date: 'October 2025',
    textMr: 'खूप चांगला वर्कशॉप! विशाल भाऊंनी माझ्या Maruti Swift ची AC दुरुस्ती खूप कमी वेळात केली. किंमत एकदम रास्त होती आणि काम करताना WhatsApp वर फोटो अपडेट दिले. निफाड परिसरात सर्वात विश्वासू वर्कशॉप!',
    textEn: 'Excellent workshop! Vishal bhai fixed my Maruti Swift AC very quickly. Fair pricing and sent photo updates on WhatsApp. Most trusted in the Niphad area.',
    textHi: 'बहुत अच्छा वर्कशॉप! विशाल भाई ने मेरी Maruti Swift की AC बहुत जल्दी ठीक की। उचित मूल्य और WhatsApp पर फोटो अपडेट दिए।',
    source: 'Google Verified'
  },
  {
    name: 'Pramod Jadhav',
    location: 'Pimpalgaon Baswant',
    stars: 5,
    date: 'November 2025',
    textMr: 'नैताळे येथे शिव ऑटोमोबाइल्सच्या नवीन वॉशिंग सेंटरमध्ये Creta चा फोम वॉश आणि अंडरबॉडी वॉश केला. शेतातून आलेल्या गाडीची चिखल-माती पूर्ण साफ केली. गाडी एकदम शोरूमसारखी चकाचक झाली!',
    textEn: 'Got my Creta foam washed and underbody cleaned at Shiv Automobiles Washing Centre in Naitale. Cleared all field mud completely. Looks showroom clean!',
    textHi: 'नैताळे में शिव ऑटोमोबाइल्स के वॉशिंग सेंटर में Creta का फोम वॉश और अंडरबॉडी वॉश करवाया। गाड़ी बिल्कुल शोरूम जैसी चमकने लगी!',
    source: 'Google Verified'
  },
  {
    name: 'Ravi Patil',
    location: 'Lasalgaon',
    stars: 5,
    date: 'September 2025',
    textMr: 'माझी Hyundai रस्त्यात बंद पडली होती. Shiv Automobiles ला फोन केला आणि ते अर्ध्या तासात आले. पिकअप सेवा उत्कृष्ट आहे. दुसऱ्या दिवशी सकाळी गाडी वेळेत दुरुस्त करून दिली.',
    textEn: 'My Hyundai broke down on the road. Called Shiv Automobiles and they came immediately. Pickup service is excellent. Got the car back on time.',
    textHi: 'मेरी Hyundai रास्ते में बंद हो गई। Shiv Automobiles को फोन किया और वे तुरंत आ गए। पिकअप सेवा उत्कृष्ट है।',
    source: 'Google Verified'
  },
  {
    name: 'Sachin Shirore',
    location: 'Naitale',
    stars: 5,
    date: 'August 2025',
    textMr: 'विशाल कोटकर सरांचा १०+ वर्षांचा कामाचा अनुभव स्पष्ट जाणवतो. आधी संपूर्ण अंदाज दिला, काहीही अवाजवी खर्च लावला नाही. ब्रेक आणि सस्पेन्शनचे काम उत्तम केले. १००% भरवशाची जागा!',
    textEn: 'Vishal Kotkar sir has 10+ years of deep mechanical experience. Clear estimate upfront, no hidden costs. Suspension and brake work was superb.',
    textHi: 'विशाल कोटकर सर का 10+ वर्षों का अनुभव काम में दिखता है। पहले पूरा अनुमान दिया, कोई छुपा शुल्क नहीं। ब्रेक और सस्पेंशन का काम बेहतरीन किया।',
    source: 'Google Verified'
  }
];

// ── FAQs ─────────────────────────────────────────────
const FAQS = [
  {
    qMr: 'कार वॉशिंग सेंटरमध्ये कोणत्या सुविधा उपलब्ध आहेत?',
    qEn: 'What car washing services are available?',
    aMr: 'आमच्याकडे हाय-प्रेशर स्नो फोम वॉश, अंडरबॉडी (खालचे भाग) वॉश, आतील व्हॅक्यूम क्लीनिंग, डॅशबोर्ड पॉलिश, मॅट क्लिनिंग आणि टायर ड्रेसिंग उपलब्ध आहे. सर्व हॅचबॅक, सेडान आणि SUV गाड्यांसाठी फक्त ३०-४० मिनिटांत जलद सेवा मिळते.',
    aEn: 'We offer high-pressure snow foam wash, underbody chassis wash, deep interior vacuum cleaning, dashboard polish, mat washing and tyre dressing. Fast 30-40 minute service for all hatchbacks, sedans, and SUVs.'
  },
  {
    qMr: 'तुम्ही सर्व कार ब्रँडच्या गाड्या दुरुस्त करता का?',
    qEn: 'Do you service all car brands?',
    aMr: 'होय! आम्ही मारुती सुझुकी, ह्युंदाई, टाटा, महिंद्रा, होंडा, टोयोटा, किया, रेनॉल्ट, व्होल्क्सवॅगन, स्कोडा, फोर्ड, निसान, एमजी, जीप, शेव्हरोले आणि इतर सर्व लोकप्रिय ब्रँडच्या गाड्या दुरुस्त करतो.',
    aEn: 'Yes! We service all popular brands including Maruti Suzuki, Hyundai, Tata, Mahindra, Honda, Toyota, Kia, Renault, Volkswagen, Skoda, Ford, Nissan, MG, Jeep, Chevrolet and more.'
  },
  {
    qMr: 'पिकअप आणि ड्रॉप सेवा उपलब्ध आहे का?',
    qEn: 'Is pickup and drop service available?',
    aMr: 'होय, आम्ही नैताळे, निफाड, धरणगाव वीर, पिंपळगाव बसवंत, ओझर, लासलगाव, नंदूर मधमेश्वर, रामपूर, कुंडेगाव आणि शिवारे–सातारा रोडवरील गावांमध्ये पिकअप आणि ड्रॉप सेवा देतो.',
    aEn: 'Yes, we provide pickup and drop service across Naitale, Niphad, Dharangaon Vir, Pimpalgaon Baswant, Ozar, Lasalgaon, Nandur Madhmeshwar, Rampur, Kundegaon and villages along the Shivare–Satara Road.'
  },
  {
    qMr: 'कार सर्व्हिसिंग किंवा दुरुस्तीचा खर्च किती येतो?',
    qEn: 'How much does car service cost?',
    aMr: 'खर्च गाडीचे मॉडेल आणि कामाच्या प्रकारावर अवलंबून असतो. काम सुरू करण्यापूर्वी आम्ही मोफत आणि पारदर्शक अंदाज देतो. तुमच्या मंजुरीशिवाय कोणतेही छुपे शुल्क लावले जात नाही. त्वरित अंदाजासाठी WhatsApp करा.',
    aEn: 'Cost depends on the car model and work required. We give a full transparent upfront estimate before starting — no hidden charges. Call or WhatsApp for a quick quote.'
  },
  {
    qMr: 'रात्री किंवा आपत्कालीन ब्रेकडाऊनसाठी सेवा मिळते का?',
    qEn: 'Is emergency breakdown support available at night?',
    aMr: 'आम्ही नियमितपणे सकाळी ८:०० ते रात्री ११:०० उघडे असतो. रस्त्यात गाडी बंद पडल्यास रात्रीच्या वेळीही आपत्कालीन कॉल स्वीकारले जातात (रात्रीच्या सहाय्यासाठी वाजवी अतिरिक्त शुल्क लागू होऊ शकते).',
    aEn: 'We are open daily 8:00 AM – 11:00 PM. Emergency breakdown assistance is accepted even at night (reasonable night charges may apply).'
  },
  {
    qMr: 'विमा दाव्यात (Insurance Claim) मदत मिळते का?',
    qEn: 'Do you help with insurance claims?',
    aMr: 'होय, अपघातग्रस्त वाहनांसाठी कॅशलेस किंवा रीइंबर्समेंट विमा दाव्यातील कागदपत्रे, सर्व्हेअर तपासणी आणि संपूर्ण बॉडी वर्क दुरुस्तीमध्ये आम्ही पूर्ण मदत करतो.',
    aEn: 'Yes, we assist with cashless/reimbursement insurance claim paperwork, surveyor inspection coordination, and complete accidental body repairs.'
  },
  {
    qMr: 'AC दुरुस्ती आणि डेंटिंग-पेंटिंगचे काम कसे केले जाते?',
    qEn: 'How is AC repair and denting-painting done?',
    aMr: 'AC साठी कॉम्प्युटराइज्ड गॅस रिफिलिंग, कंप्रेसर टेस्ट आणि लिकेज डिटेक्शन केले जाते. डेंटिंग-पेंटिंगसाठी स्क्रॅच रिमूव्हल, पॅनल अलाइनमेंट आणि मूळ रंगाशी अचूक मॅचिंग करून शोरूम फिनिश दिली जाते.',
    aEn: 'For AC, we perform leak detection, compressor overhaul and precision gas refill. For denting-painting, we provide scratch removal, panel alignment, and computerized paint matching with showroom finish.'
  }
];
