FROST V46 — IMMERSIVE WORLD MODE (ADDITIVE)
============================================

इस पैकेज में V45 के सभी मौजूदा फाइल/फीचर रखकर एक नया full-screen World Mode जोड़ा गया है।

नया:
- मोबाइल पर immersive full-screen interface
- animated glowing orb, sci-fi depth grid, star field
- बड़ा typing area और in-page chat log
- मन की बात / समस्या / सीखने / आइडिया के quick prompts
- Enter-to-send, Shift+Enter newline, Escape से बंद करना
- reduced-motion preference का सम्मान

महत्वपूर्ण सच्चाई:
- यह एक visual + interaction prototype है, वास्तविक AI model नहीं।
- कुछ demo replies नियम-आधारित हैं; वे सचमुच भावनाएँ नहीं समझते।
- असली contextual conversation के लिए server-side AI API/backend जोड़ना होगा।
- API key को index.html/JavaScript में कभी न रखें।
- यह package APK build/sign या GitHub deploy नहीं करता।
- ZIP structure और HTML marker की जाँच हुई है; Android device पर end-to-end test नहीं किया गया।

कैसे देखें:
1. ZIP extract करें।
2. index.html को browser में खोलें या अपने existing web app/PWA source में merge करें।
3. FROST Immersive World Mode सेक्शन में “Enter World Mode” दबाएँ।
4. असली AI connection अभी अलग implementation task है।
