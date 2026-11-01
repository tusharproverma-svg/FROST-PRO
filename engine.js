/* FROST Self-Upgrade Engine — isolated planner/validator (no arbitrary execution)
 * Browser-only prototype. It plans safe UI updates and prepares feature specifications.
 * It intentionally does NOT eval generated code, rewrite source files, or deploy to GitHub.
 */
(function (root) {
  'use strict';
  const VERSION = '1.0.0';
  const ALLOWED = new Set(['theme', 'glow', 'spacing', 'radius', 'branding', 'feature_request']);
  const PALETTES = {
    ice: {accent:'#62eaff', glow:0.16, radius:20, spacing:'normal', name:'Ice Blue'},
    purple: {accent:'#b98aff', glow:0.24, radius:22, spacing:'normal', name:'Cyber Purple'},
    emerald: {accent:'#53f0b2', glow:0.18, radius:16, spacing:'normal', name:'Emerald'},
    gold: {accent:'#ffd166', glow:0.20, radius:18, spacing:'normal', name:'Solar Gold'},
    rose: {accent:'#ff8fc7', glow:0.19, radius:22, spacing:'normal', name:'Rose'},
    mono: {accent:'#d8e0ed', glow:0.05, radius:12, spacing:'compact', name:'Mono'}
  };
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const safeText = (s, max=1200) => String(s || '').replace(/[<>]/g, '').trim().slice(0,max);
  function interpret(prompt, current={}) {
    const raw = safeText(prompt, 1200);
    const t = raw.toLowerCase();
    const prefs = Object.assign({}, current);
    const actions = [];
    let matched = false;
    const themeWords = [
      [['purple','बैंगनी','पर्पल'], 'purple'], [['blue','नीला','ice blue'], 'ice'],
      [['green','हरा','emerald','एमराल्ड'], 'emerald'], [['gold','सुनहरा','golden'], 'gold'],
      [['pink','गुलाबी','rose'], 'rose'], [['mono','monochrome','सादा'], 'mono']
    ];
    for (const [words,key] of themeWords) {
      if (words.some(w => t.includes(w))) {
        prefs.theme = key;
        prefs.accent = PALETTES[key].accent;
        prefs.glow = PALETTES[key].glow;
        prefs.radius = PALETTES[key].radius;
        prefs.spacing = PALETTES[key].spacing;
        actions.push({type:'theme', value:key, label:'Theme → '+PALETTES[key].name});
        matched = true; break;
      }
    }
    if (t.includes('glow') || t.includes('ग्लो') || t.includes('चमक')) {
      prefs.glow = (t.includes('कम') || t.includes('less') || t.includes('reduce')) ? 0.05 : 0.24;
      actions.push({type:'glow',value:prefs.glow,label:prefs.glow<0.1?'Reduce glow':'Increase glow'});
      matched = true;
    }
    if (t.includes('compact') || t.includes('कम जगह') || t.includes('छोटा')) {
      prefs.spacing = 'compact'; actions.push({type:'spacing',value:'compact',label:'Compact spacing'}); matched = true;
    } else if (t.includes('spacious') || t.includes('खुला') || t.includes('normal spacing')) {
      prefs.spacing = 'normal'; actions.push({type:'spacing',value:'normal',label:'Normal spacing'}); matched = true;
    }
    if (t.includes('round') || t.includes('गोल') || t.includes('rounded')) {
      prefs.radius = 24; actions.push({type:'radius',value:24,label:'Round cards'}); matched = true;
    } else if (t.includes('square') || t.includes('कम गोल')) {
      prefs.radius = 8; actions.push({type:'radius',value:8,label:'Sharper cards'}); matched = true;
    }
    const nameMatch = raw.match(/(?:app name|नाम|name)\s*(?:को|is|=|:)?\s*["“]?([^"”.,;\n]{2,48})/i);
    if (nameMatch) { prefs.brandName = safeText(nameMatch[1],48); actions.push({type:'branding',value:prefs.brandName,label:'App name change'}); matched=true; }
    const knownDesign = matched;
    // Anything beyond the allowlisted design controls is captured as a feature request/spec, not executed.
    const featureIntent = /\b(add|create|build|make|implement|feature|studio|dashboard|coding|meta|logo|icon|self.?upgrade|जोड़|बनाओ|बना दो|फीचर|लोगो|ऐड|डैशबोर्ड|स्टूडियो)\b/i.test(raw);
    let spec = null;
    if (!knownDesign || featureIntent) {
      spec = {
        title: raw.slice(0,100),
        userRequest: raw,
        goals: ['Preserve existing FROST features','Add new functionality in an isolated module','Create a backup before merge','Validate syntax and dependencies','Test on a separate branch/build','Require user approval before applying/deploying'],
        implementationStatus: 'SPEC_ONLY_NOT_IMPLEMENTED',
        createdAt: new Date().toISOString()
      };
      actions.push({type:'feature_request',value:spec,label:'Feature request/spec prepared (not implemented yet)'});
    }
    return {version:VERSION, prompt:raw, recognized:matched, prefs, actions, spec};
  }
  function validatePlan(plan) {
    const errors = [];
    if (!plan || !Array.isArray(plan.actions)) return {ok:false,errors:['Invalid plan structure']};
    for (const action of plan.actions) {
      if (!ALLOWED.has(action.type)) errors.push('Disallowed action type: '+String(action.type));
      if (action.type==='theme' && !Object.prototype.hasOwnProperty.call(PALETTES, action.value)) errors.push('Unknown theme');
      if (action.type==='glow' && !(Number(action.value)>=0 && Number(action.value)<=0.3)) errors.push('Glow out of safe range');
      if (action.type==='radius' && !(Number(action.value)>=6 && Number(action.value)<=30)) errors.push('Radius out of safe range');
      if (action.type==='spacing' && !['compact','normal'].includes(action.value)) errors.push('Unknown spacing');
    }
    return {ok:errors.length===0,errors};
  }
  function applyToDocument(prefs, doc) {
    if (!doc || !doc.documentElement || !doc.body) return {ok:false,message:'Document unavailable'};
    const accent = /^#[0-9a-f]{6}$/i.test(prefs.accent||'') ? prefs.accent : '#62eaff';
    const glow = clamp(Number(prefs.glow)||0,0,0.3);
    const radius = clamp(Number(prefs.radius)||18,6,30);
    doc.documentElement.style.setProperty('--frost-self-accent',accent);
    doc.documentElement.style.setProperty('--frost-self-glow',String(glow));
    doc.documentElement.style.setProperty('--frost-self-radius',radius+'px');
    doc.body.classList.toggle('frost-self-compact',prefs.spacing==='compact');
    let style=doc.getElementById('frost-self-upgrade-runtime');
    if(!style){style=doc.createElement('style');style.id='frost-self-upgrade-runtime';doc.head.appendChild(style);}
    style.textContent=`
      #f44-workbench,#f43-updater{border-color:${accent}}
      #f44-workbench .f44-card{border-radius:${radius}px}
      body.frost-self-compact button,body.frost-self-compact input,body.frost-self-compact textarea{padding:7px}
      #f44-workbench{box-shadow:0 0 ${Math.round(glow*100)}px ${accent}22}
    `;
    return {ok:true,message:'Allowlisted UI preferences applied locally'};
  }
  const api = {VERSION,PALETTES,interpret,validatePlan,applyToDocument};
  if (typeof module!=='undefined' && module.exports) module.exports=api;
  root.FROSTSelfUpgradeEngine=api;
})(typeof window!=='undefined'?window:globalThis);
