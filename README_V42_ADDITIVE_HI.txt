FROST-PRO v42 — ADDITIVE BOOST
================================

यह पैकेज v41 JARVIS/FRIDAY source pack पर आधारित है। पुराने HTML और पुराने scripts को हटाने के बजाय v42 का एक अलग, additive System Hub जोड़ा गया है।

नया जोड़ा गया:
- System Hub में feature/API presence check (यह वास्तविक security audit या AI connection test नहीं है)
- अलग Quick Notes area और JSON export
- Add-only upgrade planner और JSON plan download
- Keyboard accessibility/focus styles और reduced-motion preference support
- पुरानी Notebook Lab, Dotted Orb, theme controls, JARVIS/FRIDAY panel और PWA files को पैकेज में बनाए रखा गया

सीमाएँ:
- AI provider कनेक्शन तभी काम करेगा जब सही compatible endpoint, model, authorization और CORS/backend व्यवस्था हो।
- Browser speech APIs device/browser के हिसाब से बदल सकती हैं और हर जगह उपलब्ध नहीं हैं।
- Upgrade planner केवल योजना बनाता है; source code अपने-आप edit नहीं करता।
- यह APK नहीं है। यह web/PWA source pack है।
- ZIP में मौजूद सभी सुविधाओं का वास्तविक Android device पर end-to-end test नहीं किया गया है।
- निजी notes केवल उसी browser की local storage में रहते हैं; shared device पर संवेदनशील जानकारी न रखें।

इंस्टॉल/अपडेट:
1. ZIP extract करें।
2. पुराने project की अलग backup copy रखें।
3. मौजूदा GitHub Pages/PWA project में files review करके upload करें।
4. पहले staging/नई branch पर test करें; original project को सीधे overwrite न करें।
5. Android Chrome में पुरानी cache दिखे तो site data/cache refresh करें।

मुख्य source: index.html, manifest.webmanifest, sw.js और icons।
