# SisodiyaShorts Exam Hub — शुरुआती वर्जन

यह मोबाइल-फ्रेंडली फ्री वेब ऐप है। इसमें:
- UP Police Constable, UP Police SI और UPSSSC PET के exam cards
- Demo practice questions वाला quiz
- Timer वाला demo mock test
- Result, सही/गलत/छोड़े गए प्रश्न और explanation
- Saved questions और local practice history
- Search/filter वाला PYQ पेज (वास्तविक papers जोड़ने के लिए तैयार)
- Dark mode और basic PWA/offline caching

## सबसे आसान तरीका: अपने Android फोन पर चलाना

1. ZIP फाइल डाउनलोड करके फोन में Extract करें।
2. `index.html` खोलकर देखने की कोशिश कर सकते हैं, लेकिन सभी PWA सुविधाएँ file mode में काम नहीं करेंगी।
3. बेहतर तरीका: पूरे प्रोजेक्ट को GitHub repository में upload करें और GitHub Pages चालू करें, या किसी static hosting service पर deploy करें।
4. वेबसाइट का HTTPS लिंक मोबाइल Chrome में खोलें।
5. Chrome के मेन्यू में “Add to Home screen” या “Install app” विकल्प दिखे तो उसे चुनें।

## कंप्यूटर उपलब्ध हो तो लोकल प्रीव्यू

Python 3 स्थापित हो तो प्रोजेक्ट फ़ोल्डर में चलाएँ:

```bash
python -m http.server 8000
```

फिर ब्राउज़र में `http://localhost:8000` खोलें।

## महत्वपूर्ण सीमाएँ

- यह Version 1 फ्रंटएंड डेमो है; अभी कोई shared database, secure admin login या cloud sync नहीं है।
- प्रश्न `app.js` में `QUESTIONS` array में रखे हैं। नए प्रश्न जोड़ते समय हर प्रश्न के लिए unique `id`, चार `options`, सही `answer` (0 से 3 तक) और `explanation` दें।
- अभी के 15 प्रश्न demo practice questions हैं, आधिकारिक Previous Year Questions नहीं।
- वास्तविक PYQ जोड़ने के लिए आधिकारिक/विश्वसनीय स्रोत से पेपर और answer key सत्यापित करें। PDF डाउनलोड/प्रकाशित करने से पहले अनुमति/लाइसेंस जाँचें।
- `PAPER_DATA` अभी खाली है; सत्यापित पेपर का रिकॉर्ड जोड़ने के बाद ही पेपर सूची में दिखाई देगा।
- प्रगति और bookmarks उसी browser/device के local storage में सेव होते हैं; device बदलने पर sync नहीं होंगे।
- यह वेब ऐप है, native Android APK नहीं। आगे इसे Capacitor जैसे wrapper से APK में पैकेज किया जा सकता है; उसके लिए Android build environment की जरूरत होगी।
- Google Fonts इंटरनेट मिलने पर लोड होते हैं; बाकी ऐप को basic offline support देने के लिए service worker शामिल है।
