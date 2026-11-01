FROST Self-Upgrade Engine — अलग मॉड्यूल
=====================================

यह V45 पैकेज में अलग `self-upgrade-engine/` फोल्डर है। इसका उद्देश्य natural-language request को plan/spec में बदलना और allowlisted UI preferences को सुरक्षित रूप से लागू करने का prototype देना है।

कैसे टेस्ट करें:
1. `self-upgrade-engine/index.html` को browser में खोलें।
2. उदाहरण लिखें: `Make the theme purple and add a coding studio`.
3. `Interpret & validate` दबाएँ।
4. Plan JSON देखें और `Export plan JSON` से डाउनलोड करें।

यह अभी क्या करता है:
- कुछ रंग, glow, spacing, radius और app-name बदलाव पहचानता है।
- नए feature requests के लिए spec बनाता है।
- plan structure और कुछ allowed values validate करता है।
- `engine.js` के `applyToDocument()` से सीमित styling स्थानीय रूप से लागू की जा सकती है।

यह क्या नहीं करता:
- arbitrary नया feature खुद से पूरा code करके integrate नहीं करता।
- generated code execute नहीं करता; eval या remote script injection नहीं है।
- GitHub पर commit/push, APK build/sign या app publish नहीं करता।
- किसी real AI model/API से जुड़ा नहीं है।

वास्तविक self-upgrade के लिए अगला चरण:
- trusted AI backend / API connection
- source file inventory and feature map
- isolated branch/worktree or sandbox
- automatic backups and diff review
- lint/tests/build in sandbox
- user approval before merge/deploy
- secrets never embedded in browser code
