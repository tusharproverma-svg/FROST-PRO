FROST V47 — AI TOOLS WORKBENCH
==============================

यह V46 पर ADDITIVE पैकेज है। पुराने files/features को हटाए बिना ai-tools-workbench/ अलग module जोड़ा गया है।

इस module में:
- Coding Studio: task request JSON और user-provided code file export
- Image Studio: prompt/style request JSON
- Video Studio: prompt/duration/aspect ratio request JSON
- Web Search: browser में Google search खोलना और request JSON
- Provider connection status / backend integration notes

सटीक सीमाएँ:
- Text/coding AI API से connected नहीं है; इसलिए यह खुद नया code generate नहीं करता।
- Image generation provider connected नहीं है; यह image file generate नहीं करता।
- Video generation provider connected नहीं है; यह video file generate नहीं करता।
- Search button public browser search खोलता है; integrated search-result extraction नहीं है।
- API keys को frontend में न रखें। सुरक्षित backend, environment secrets, authentication, rate limits, timeouts और validation जोड़ें।
- ZIP integrity और module markers जाँचे गए। Android पर end-to-end testing नहीं हुई।

इस्तेमाल:
1. ZIP extract करें।
2. ai-tools-workbench/index.html browser में खोलें।
3. Coding, Image, Video या Search panel चुनें।
4. वास्तविक AI tools के लिए backend/provider integration अलग से implement करें।
