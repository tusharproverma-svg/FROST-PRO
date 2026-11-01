FROST v33 — Hindi / English / Hinglish typing support

What's changed:
- AI system instructions now tell the assistant to understand Devanagari Hindi, English, and Roman Hindi/Hinglish, including common spelling variations and mixed-language sentences.
- The assistant should generally reply in the language/style the user typed in.
- Added a small offline alias layer for common Hinglish commands such as “kaise ho”, “time kya hua hai”, “battery kitni hai”, “joke sunao”, “dark mode on”, “thanks”, and “hello”.
- Original user text remains unchanged when sent to online AI.
- Service-worker cache name updated so the browser can fetch the new files.

Limitations:
- This improves language handling; it does not add a new AI model.
- Broad, open-ended Hinglish understanding still depends on a connected AI service and configured API/provider.
- Offline support is limited to built-in commands and aliases; it does not provide full offline conversational AI.
- This is a PWA/web project, not a native Android APK. The complete app has not been device-tested in this build.

Install/update:
1. Keep a backup of the existing project.
2. Replace the existing project files with the files in this ZIP.
3. Commit/publish the changes in the hosting repository.
4. Reload the PWA. If the old version persists, close it and reopen after clearing the site's cached data.
