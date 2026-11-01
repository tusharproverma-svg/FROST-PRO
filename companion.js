(()=> {
const $=id=>document.getElementById(id), messages=$('messages'), status=$('status');
let lastAnswer='';
const history=[];
function add(text,role){const d=document.createElement('div');d.className='msg '+role;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight;return d}
async function check(){try{const r=await fetch('/api/health');if(!r.ok)throw new Error('backend status '+r.status);const j=await r.json();status.textContent=j.providerConfigured?'● Backend online · AI provider configured':'● Backend online · AI provider not configured';status.style.color=j.providerConfigured?'#a9f4d1':'#ffd99c'}catch(e){status.textContent='● Backend disconnected. README_HI.txt में setup steps देखें।';status.style.color='#ffd99c'}}
check();
$('chat-form').addEventListener('submit',async e=>{
 e.preventDefault();const text=$('message').value.trim();if(!text)return;
 add(text,'user');$('message').value='';const pending=add('FROST जवाब तैयार कर रहा है…','assistant');$('send').disabled=true;
 const note=$('memory-consent').checked?localStorage.getItem('frost_v48_memory_note')||'':'';
 try{
  const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[...history,{role:'user',content:text}],memoryNote:note})});
  const data=await r.json();if(!r.ok)throw new Error(data.error||('HTTP '+r.status));
  const answer=String(data.reply||'').trim();if(!answer)throw new Error('AI provider ने खाली उत्तर दिया।');
  pending.textContent=answer;lastAnswer=answer;history.push({role:'user',content:text},{role:'assistant',content:answer});
  if(history.length>20)history.splice(0,history.length-20);
 }catch(err){pending.textContent='अभी वास्तविक AI जवाब नहीं मिल पाया। '+err.message+'\\n\\nBackend/provider configuration जाँचो।';}
 finally{$('send').disabled=false;$('message').focus()}
});
$('clear').onclick=()=>{messages.replaceChildren();history.length=0;lastAnswer='';add('इस चैट की स्क्रीन साफ़ कर दी गई।','system')};
$('save-memory').onclick=()=>{
 if(!$('memory-consent').checked){$('memory-status').textContent='पहले मेमोरी सेव करने की अनुमति वाला बॉक्स चुनो।';return}
 const note=$('memory-note').value.trim();if(!note){$('memory-status').textContent='पहले कोई नोट लिखो।';return}
 localStorage.setItem('frost_v48_memory_note',note);$('memory-status').textContent='मेमोरी नोट इस ब्राउज़र में सेव हुआ। इसे हटाने के लिए “मेमोरी हटाओ” दबाओ।'
};
$('delete-memory').onclick=()=>{localStorage.removeItem('frost_v48_memory_note');$('memory-note').value='';$('memory-status').textContent='इस मॉड्यूल का लोकल मेमोरी नोट हटा दिया गया।'};
$('voice').onclick=()=>{
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!SR){$('memory-status').textContent='इस ब्राउज़र में Speech Recognition उपलब्ध नहीं है।';return}
 const rec=new SR();rec.lang='hi-IN';rec.onresult=e=>{$('message').value=e.results[0][0].transcript};rec.onerror=()=>{$('memory-status').textContent='Voice input पूरा नहीं हो पाया।'};rec.start()
};
$('speak').onclick=()=>{if(!lastAnswer){$('memory-status').textContent='पहले AI का जवाब आने दो।';return}if(!('speechSynthesis'in window)){$('memory-status').textContent='इस ब्राउज़र में text-to-speech उपलब्ध नहीं है।';return}const u=new SpeechSynthesisUtterance(lastAnswer);u.lang='hi-IN';speechSynthesis.cancel();speechSynthesis.speak(u)};
})();