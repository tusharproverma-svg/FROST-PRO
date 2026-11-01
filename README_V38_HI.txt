FROST-PRO v38 Notebook Lab source pack
यह v34 source को बनाए रखकर Notebook Lab जोड़ता है:
- dotted orb / cartoon-like avatar morph demo
- speaking animation demo (असली voice synthesis नहीं)
- local notes, mini dot-catching game, Google/YouTube search shortcuts
- glow/theme controls
- provider/endpoint preference only; कोई API key या असली AI connection नहीं

अपलोड:
1. GitHub repository का backup लो।
2. ZIP Extract करो।
3. root website files (index.html, manifest.webmanifest, sw.js, icons) upload करो। अन्य पुरानी files को बिना देखे delete मत करो।
4. Commit changes करो और GitHub Pages deployment का इंतजार करो।
5. पुराना page दिखे तो tab बंद करके दोबारा खोलो; जरूरत हो तो site data clear करो।

सीमाएँ:
- GitHub Pages static HTML host करता है, Python server.py नहीं चलाता।
- 127.0.0.1 तभी चलेगा जब उसी device पर local server चालू हो।
- API key public HTML/GitHub में कभी न डालें; real AI के लिए secure backend proxy चाहिए।
- यह website source है, APK नहीं।
- Avatar/game demos हैं; real image-generation AI या GPT model connected नहीं है।
