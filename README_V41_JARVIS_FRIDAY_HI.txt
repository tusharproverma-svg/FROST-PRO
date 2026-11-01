FROST-PRO v41 — JARVIS × FRIDAY Add-on

यह v40 merged pack पर additive update है। पुराना index, Notebook Lab, dotted orb, mini-game, Google/YouTube shortcuts, HD themes, manifest, icons, service worker और AI starter ZIP को हटाया नहीं गया। नया Command Center पुरानी FROST Lab के अंदर जोड़ा गया है।

नई सुविधाएँ: browser speech input (जहाँ supported), speech synthesis, compatible chat-completions API connection, session-only API key memory, image prompt builder, coding request organizer, external search shortcuts, basic timer, notes/settings export, safe-upgrade plan JSON export।

सुरक्षा/सीमाएँ:
- Public GitHub Pages में API key न डालें। Browser में key पूरी तरह सुरक्षित नहीं होती; production के लिए server-side proxy/backend बेहतर है।
- API feature provider endpoint, CORS और model के अनुसार काम करेगा; हर provider compatible नहीं।
- Image Studio prompt बनाता है, image generate नहीं करता।
- Coding Desk code execute/compile नहीं करता। छह भाषाओं के runtime अलग से चाहिए।
- Upgrade Planner checklist बनाता है; अपने-आप source files नहीं बदलता।
- Speech recognition सभी browsers में उपलब्ध नहीं; HTTPS और browser support आवश्यक हो सकता है।
- यह ZIP native APK नहीं है। Device पर पूरा runtime test नहीं किया गया।

GitHub upload: backup लें; ZIP extract करें; repository root में नई index.html को upload/replace करें और README_V41_JARVIS_FRIDAY_HI.txt जोड़ें। बाकी assets न हटाएँ। Commit करें और Pages deploy होने दें। यदि service worker cache पुरानी साइट दिखाए, site data/cache clear करके reload करें।
