const EXAMS = [
  {id:"up-police",name:"UP Police Constable",short:"UP POLICE",desc:"Constable भर्ती की तैयारी",icon:"✦",bg:"#e8efff",color:"#2463eb"},
  {id:"up-si",name:"UP Police SI",short:"UP SI",desc:"Sub-Inspector परीक्षा",icon:"⚖",bg:"#fff0df",color:"#d77b21"},
  {id:"pet",name:"UPSSSC PET",short:"PET",desc:"Preliminary Eligibility Test",icon:"▣",bg:"#e0f8ee",color:"#11966a"}
];

const QUESTIONS = [
 {id:"d1",exam:"all",subject:"इतिहास",topic:"प्राचीन इतिहास",question:"सिंधु घाटी सभ्यता का प्रमुख बंदरगाह कौन-सा था?",options:["हड़प्पा","लोथल","कालीबंगा","रोपड़"],answer:1,explanation:"लोथल (वर्तमान गुजरात) को सिंधु घाटी सभ्यता के प्रमुख बंदरगाह स्थलों में गिना जाता है।",source:"Demo practice question"},
 {id:"d2",exam:"all",subject:"भारतीय राजव्यवस्था",topic:"संविधान",question:"भारतीय संविधान कब लागू हुआ?",options:["15 अगस्त 1947","26 नवंबर 1949","26 जनवरी 1950","2 अक्टूबर 1950"],answer:2,explanation:"भारतीय संविधान 26 जनवरी 1950 को लागू हुआ। 26 नवंबर 1949 को इसे अंगीकृत किया गया था।",source:"Demo practice question"},
 {id:"d3",exam:"all",subject:"भूगोल",topic:"भारत का भूगोल",question:"क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?",options:["उत्तर प्रदेश","मध्य प्रदेश","राजस्थान","महाराष्ट्र"],answer:2,explanation:"क्षेत्रफल के आधार पर राजस्थान भारत का सबसे बड़ा राज्य है।",source:"Demo practice question"},
 {id:"d4",exam:"all",subject:"सामान्य विज्ञान",topic:"जीव विज्ञान",question:"मानव शरीर में रक्त को पंप करने वाला अंग कौन-सा है?",options:["फेफड़ा","हृदय","यकृत","गुर्दा"],answer:1,explanation:"हृदय संकुचन और शिथिलन द्वारा रक्त को पूरे शरीर में पंप करता है।",source:"Demo practice question"},
 {id:"d5",exam:"all",subject:"हिंदी",topic:"व्याकरण",question:"‘सुंदर’ शब्द किस शब्द-भेद का उदाहरण है?",options:["संज्ञा","सर्वनाम","विशेषण","क्रिया"],answer:2,explanation:"‘सुंदर’ किसी संज्ञा या सर्वनाम की विशेषता बताता है, इसलिए यह विशेषण है।",source:"Demo practice question"},
 {id:"d6",exam:"all",subject:"रीजनिंग",topic:"संख्या श्रृंखला",question:"श्रृंखला पूरी करें: 2, 4, 8, 16, __",options:["18","24","30","32"],answer:3,explanation:"हर अगली संख्या पिछली संख्या का दोगुना है; 16 × 2 = 32।",source:"Demo practice question"},
 {id:"d7",exam:"all",subject:"भारतीय राजव्यवस्था",topic:"मौलिक अधिकार",question:"भारतीय संविधान में मौलिक अधिकार किस भाग में दिए गए हैं?",options:["भाग I","भाग II","भाग III","भाग IV"],answer:2,explanation:"मौलिक अधिकार संविधान के भाग III में अनुच्छेद 12 से 35 तक दिए गए हैं।",source:"Demo practice question"},
 {id:"d8",exam:"all",subject:"भूगोल",topic:"नदियाँ",question:"गंगा नदी का उद्गम किस हिमनद से संबंधित है?",options:["सियाचिन","गंगोत्री","पिंडारी","मिलम"],answer:1,explanation:"भागीरथी नदी का उद्गम गंगोत्री हिमनद के गौमुख क्षेत्र से होता है।",source:"Demo practice question"},
 {id:"d9",exam:"all",subject:"सामान्य विज्ञान",topic:"रसायन विज्ञान",question:"पानी का रासायनिक सूत्र क्या है?",options:["CO₂","O₂","H₂O","NaCl"],answer:2,explanation:"पानी के एक अणु में दो हाइड्रोजन परमाणु और एक ऑक्सीजन परमाणु होता है: H₂O।",source:"Demo practice question"},
 {id:"d10",exam:"all",subject:"हिंदी",topic:"विलोम शब्द",question:"‘लाभ’ का विलोम शब्द क्या है?",options:["आय","हानि","धन","मूल्य"],answer:1,explanation:"‘लाभ’ का विलोम ‘हानि’ है।",source:"Demo practice question"},
 {id:"d11",exam:"all",subject:"इतिहास",topic:"आधुनिक भारत",question:"भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ?",options:["1919","1930","1942","1946"],answer:2,explanation:"भारत छोड़ो आंदोलन अगस्त 1942 में शुरू हुआ।",source:"Demo practice question"},
 {id:"d12",exam:"all",subject:"रीजनिंग",topic:"वर्गीकरण",question:"इनमें से अलग कौन है?",options:["सेब","आम","गाजर","केला"],answer:2,explanation:"सेब, आम और केला फल हैं; गाजर सामान्यतः सब्जी के रूप में वर्गीकृत की जाती है।",source:"Demo practice question"},
 {id:"d13",exam:"all",subject:"उत्तर प्रदेश सामान्य ज्ञान",topic:"उत्तर प्रदेश",question:"उत्तर प्रदेश की राजधानी कौन-सी है?",options:["कानपुर","लखनऊ","प्रयागराज","वाराणसी"],answer:1,explanation:"लखनऊ उत्तर प्रदेश की राजधानी है।",source:"Demo practice question"},
 {id:"d14",exam:"all",subject:"गणित",topic:"प्रतिशत",question:"200 का 25% कितना होगा?",options:["25","40","50","75"],answer:2,explanation:"200 × 25/100 = 50।",source:"Demo practice question"},
 {id:"d15",exam:"all",subject:"सामान्य विज्ञान",topic:"भौतिक विज्ञान",question:"बल की SI इकाई क्या है?",options:["जूल","वाट","न्यूटन","पास्कल"],answer:2,explanation:"बल की SI इकाई न्यूटन (N) है।",source:"Demo practice question"}
];

const PAPER_DATA = []; // केवल सत्यापित स्रोत वाले वास्तविक पेपर यहाँ जोड़े जाएँ।
const STORAGE = {attempts:"ss_exam_attempts_v1",saved:"ss_exam_saved_v1",theme:"ss_exam_theme_v1"};
const $ = (sel,root=document)=>root.querySelector(sel);
const $$ = (sel,root=document)=>[...root.querySelectorAll(sel)];
const state = {page:"home",examFilter:"all",subjectFilter:"all",search:"",quiz:null,timer:null,seconds:0};
const safeGet=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}};
const safeSet=(key,val)=>{try{localStorage.setItem(key,JSON.stringify(val))}catch{}};
const attempts=()=>safeGet(STORAGE.attempts,[]);
const saved=()=>safeGet(STORAGE.saved,[]);
const escapeHTML=(s)=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const examName=id=>EXAMS.find(e=>e.id===id)?.name || "सभी परीक्षाएँ";
function updateStats(){
 const a=attempts();$("#statAttempts").textContent=a.length;$("#statSaved").textContent=saved().length;
 $("#statAccuracy").textContent=a.length?Math.round(a.reduce((s,x)=>s+x.percent,0)/a.length)+"%":"—";
}
function examCards(){return EXAMS.map(e=>`<button class="exam-card" data-exam="${e.id}"><div class="exam-top"><span class="exam-icon" style="background:${e.bg};color:${e.color}">${e.icon}</span><span class="exam-tag">${e.short}</span></div><h3>${e.name}</h3><p>${e.desc}</p><span class="exam-link">↗</span></button>`).join("")}
function homePage(){
 return `<section class="hero"><div class="hero-copy"><span class="eyebrow">आपकी तैयारी, आपकी रफ्तार</span><h1>सरकारी परीक्षा की तैयारी<br><em>अब आसान बनाएं।</em></h1><p>Quiz लगाएँ, Mock Test दें और अपनी तैयारी का स्कोर देखें — बिल्कुल फ्री।</p><button class="primary-button" data-action="start-daily">आज का Quiz शुरू करें <span>→</span></button></div><div class="hero-art" aria-hidden="true"><div class="art-circle"></div><div class="art-paper"><span>EXAM</span><b>✓</b><i></i><i></i><i></i></div><div class="art-star">✦</div><div class="art-pill">FREE PRACTICE</div></div></section>
 <section class="stats-grid"><article class="stat-card"><span class="stat-icon violet">▤</span><div><strong id="statAttempts">${attempts().length}</strong><small>Quiz दिए</small></div></article><article class="stat-card"><span class="stat-icon mint">✓</span><div><strong id="statAccuracy">${attempts().length?Math.round(attempts().reduce((s,x)=>s+x.percent,0)/attempts().length)+"%":"—"}</strong><small>औसत सटीकता</small></div></article><article class="stat-card"><span class="stat-icon amber">☆</span><div><strong id="statSaved">${saved().length}</strong><small>Saved प्रश्न</small></div></article></section>
 <section class="section-block"><div class="section-heading"><div><span class="eyebrow">अपना लक्ष्य चुनें</span><h2>परीक्षा के अनुसार तैयारी</h2></div><span class="section-count">03 EXAMS</span></div><div class="exam-grid">${examCards()}</div></section>
 <section class="section-block"><div class="section-heading"><div><span class="eyebrow">आज से अभ्यास करें</span><h2>Practice Zone</h2></div></div><div class="practice-grid"><button class="practice-card" data-page="quiz"><span class="practice-icon blue">✎</span><strong>Topic-wise Quiz</strong><small>विषय के अनुसार प्रश्न हल करें</small><span class="card-arrow">↗</span></button><button class="practice-card" data-page="mock"><span class="practice-icon orange">◷</span><strong>Mock Test</strong><small>समय के साथ टेस्ट का अभ्यास</small><span class="card-arrow">↗</span></button><button class="practice-card" data-page="papers"><span class="practice-icon green">▤</span><strong>Previous Papers</strong><small>पेपर और उत्तर-कुंजी खोजें</small><span class="card-arrow">↗</span></button><button class="practice-card" data-page="saved"><span class="practice-icon purple">☆</span><strong>Saved Questions</strong><small>अपने सेव किए प्रश्न देखें</small><span class="card-arrow">↗</span></button></div></section>
 <section class="notice"><span>ⓘ</span><p><strong>ध्यान दें:</strong> इस शुरुआती वर्जन में दिए गए प्रश्न अभ्यास के लिए demo questions हैं, आधिकारिक Previous Year Questions नहीं। असली PYQ स्रोत सत्यापित करने के बाद जोड़े जाएँगे।</p></section>`;
}
function pageHeader(title,desc){return `<div class="page-title"><span class="eyebrow">SISODIYASHORTS EXAM HUB</span><h1>${title}</h1><p>${desc}</p></div>`}
function quizPage(){
 const subjects=[...new Set(QUESTIONS.map(q=>q.subject))];
 return `${pageHeader("Quiz Practice","विषय चुनें और अभ्यास शुरू करें।") }<div class="toolbar"><select id="quizExamFilter" class="field"><option value="all">सभी परीक्षाएँ</option>${EXAMS.map(e=>`<option value="${e.id}">${e.name}</option>`).join("")}</select><select id="quizSubjectFilter" class="field"><option value="all">सभी विषय</option>${subjects.map(s=>`<option>${s}</option>`).join("")}</select></div><div class="list-card"><div class="list-icon">✎</div><div class="list-main"><h3>मिक्स्ड प्रैक्टिस Quiz</h3><p>10 प्रश्न · सामान्य ज्ञान, हिंदी, विज्ञान, रीजनिंग · Demo practice</p></div><button class="small-button" data-action="start-quiz">शुरू करें</button></div>${subjects.map(s=>`<div class="list-card"><div class="list-icon">▤</div><div class="list-main"><h3>${s}</h3><p>${QUESTIONS.filter(q=>q.subject===s).length} अभ्यास प्रश्न उपलब्ध</p></div><button class="small-button" data-subject="${escapeHTML(s)}">अभ्यास</button></div>`).join("")}<p class="notice"><span>ⓘ</span><span>ये डेमो अभ्यास प्रश्न हैं। इन्हें आधिकारिक PYQ न मानें।</span></p>`;
}
function papersPage(){
 return `${pageHeader("Previous Year Papers","वास्तविक पेपर और उनकी सत्यापित उत्तर-कुंजी खोजें।")}<div class="toolbar"><input class="field" id="paperSearch" placeholder="पेपर या परीक्षा खोजें…" /><select class="field" id="paperExam"><option value="all">सभी परीक्षाएँ</option>${EXAMS.map(e=>`<option value="${e.id}">${e.name}</option>`).join("")}</select><select class="field" id="paperYear"><option value="all">सभी वर्ष</option>${[2025,2024,2023,2022,2021,2020].map(y=>`<option>${y}</option>`).join("")}</select></div><div id="paperResults">${renderPaperResults()}</div><div class="notice"><span>ⓘ</span><p><strong>स्रोत सत्यापन:</strong> इस वर्जन में अभी कोई वास्तविक पेपर अपलोड नहीं है। असली PDF/पेपर जोड़े जाने तक यहाँ खाली सूची दिखेगी। किसी भी डेमो प्रश्न को आधिकारिक PYQ नहीं कहा जाएगा।</p></div>`;
}
function renderPaperResults(){
 const search=(($("#paperSearch")?.value)||"").toLowerCase(),exam=$("#paperExam")?.value||"all",year=$("#paperYear")?.value||"all";
 const filtered=PAPER_DATA.filter(p=>(exam==="all"||p.exam===exam)&&(year==="all"||String(p.year)===year)&&(`${p.title} ${p.exam} ${p.year}`.toLowerCase().includes(search)));
 if(!filtered.length)return `<div class="empty-state"><strong>अभी कोई सत्यापित पेपर उपलब्ध नहीं है</strong>प्रश्नपत्र जोड़ने के बाद वे यहाँ दिखाई देंगे।</div>`;
 return filtered.map(p=>`<div class="list-card"><div class="list-icon">▤</div><div class="list-main"><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(examName(p.exam))} · ${p.year} · ${p.verified?"सत्यापित":"सत्यापन बाकी"}</p></div>${p.url?`<a class="small-button" href="${escapeHTML(p.url)}" target="_blank" rel="noopener">पेपर देखें</a>`:""}</div>`).join("");
}
function mockPage(){return `${pageHeader("Mock Test","टाइमर के साथ परीक्षा जैसे माहौल में अभ्यास करें।")}<div class="exam-grid">${EXAMS.map(e=>`<article class="exam-card"><div class="exam-top"><span class="exam-icon" style="background:${e.bg};color:${e.color}">${e.icon}</span><span class="exam-tag">DEMO MOCK</span></div><h3>${e.name}</h3><p>10 प्रश्न · 10 मिनट · +1 सही उत्तर</p><button class="primary-small" style="margin-top:14px" data-mock="${e.id}">Mock Test शुरू करें →</button></article>`).join("")}</div><div class="notice" style="margin-top:20px"><span>ⓘ</span><p>यह शुरुआती अभ्यास टेस्ट है, आधिकारिक परीक्षा पैटर्न की गारंटी नहीं। वास्तविक परीक्षा के अंक और नकारात्मक अंकन लागू करने से पहले संबंधित नोटिफिकेशन सत्यापित करें।</p></div>`}
function profilePage(){
 const a=attempts().slice().reverse();
 return `${pageHeader("मेरी प्रगति","आपके इसी डिवाइस पर सेव अभ्यास रिकॉर्ड।")}<div class="stats-grid"><article class="stat-card"><span class="stat-icon violet">▤</span><div><strong>${a.length}</strong><small>कुल टेस्ट</small></div></article><article class="stat-card"><span class="stat-icon mint">✓</span><div><strong>${a.length?Math.round(a.reduce((s,x)=>s+x.percent,0)/a.length)+"%":"—"}</strong><small>औसत सटीकता</small></div></article><article class="stat-card"><span class="stat-icon amber">☆</span><div><strong>${saved().length}</strong><small>Saved प्रश्न</small></div></article></div><div class="section-heading"><div><h2>हाल के परिणाम</h2></div><button class="plain-button" data-action="clear-history">इतिहास मिटाएँ</button></div>${a.length?a.map(x=>`<div class="list-card"><div class="list-icon">✓</div><div class="list-main"><h3>${escapeHTML(x.title)}</h3><p>${new Date(x.date).toLocaleString("hi-IN")} · ${x.correct}/${x.total} सही</p></div><strong>${x.percent}%</strong></div>`).join(""):`<div class="empty-state"><strong>अभी कोई टेस्ट नहीं दिया</strong>Quiz पूरा करने के बाद आपके परिणाम यहाँ दिखेंगे।</div>`}<div class="notice" style="margin-top:18px"><span>ⓘ</span><p>यह रिकॉर्ड केवल इस ब्राउज़र/डिवाइस में सेव है। ऐप डेटा साफ करने या डिवाइस बदलने पर यह खो सकता है।</p></div>`;
}
function savedPage(){
 const ids=saved(),items=QUESTIONS.filter(q=>ids.includes(q.id));
 return `${pageHeader("Saved Questions","आपके बुकमार्क किए हुए प्रश्न।")}${items.length?items.map(q=>`<div class="list-card"><div class="list-icon">☆</div><div class="list-main"><h3>${escapeHTML(q.question)}</h3><p>${escapeHTML(q.subject)} · Demo practice</p></div><button class="small-button" data-unsave="${q.id}">हटाएँ</button></div>`).join(""):`<div class="empty-state"><strong>अभी कोई प्रश्न सेव नहीं है</strong>Quiz के दौरान ☆ बटन दबाकर प्रश्न सेव करें।</div>`}`;
}
function renderPage(page){
 stopTimer();state.page=page;state.quiz=null;
 const app=$("#app");
 app.innerHTML=page==="home"?homePage():page==="quiz"?quizPage():page==="papers"?papersPage():page==="mock"?mockPage():page==="profile"?profilePage():page==="saved"?savedPage():homePage();
 $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page||(page==="saved"&&b.dataset.page==="profile")));
 app.focus({preventScroll:true});window.scrollTo({top:0,behavior:"smooth"});
}
function startQuiz({title="मिक्स्ड प्रैक्टिस Quiz",subject="all",exam="all",count=10,timed=true}={}){
 const pool=QUESTIONS.filter(q=>(subject==="all"||q.subject===subject)&&(exam==="all"||q.exam==="all"||q.exam===exam));
 const shuffled=pool.slice().sort(()=>Math.random()-.5).slice(0,Math.min(count,pool.length));
 if(!shuffled.length){alert("इस फ़िल्टर में अभी प्रश्न उपलब्ध नहीं हैं।");return}
 state.quiz={title,questions:shuffled,answers:{},index:0,submitted:false,startedAt:Date.now(),timed};
 state.seconds=timed?Math.max(60,shuffled.length*60):0;
 renderQuizQuestion();
 if(timed){state.timer=setInterval(()=>{if(!state.quiz||state.quiz.submitted)return;state.seconds--;const t=$("#timer");if(t)t.textContent=formatTime(state.seconds);if(state.seconds<=0)submitQuiz(true)},1000)}
}
function stopTimer(){if(state.timer){clearInterval(state.timer);state.timer=null}}
function formatTime(s){s=Math.max(0,s);return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
function renderQuizQuestion(){
 const qz=state.quiz;if(!qz)return;const q=qz.questions[qz.index],n=qz.questions.length,selected=qz.answers[q.id];
 $("#app").innerHTML=`<div class="quiz-shell"><div class="page-title"><span class="eyebrow">DEMO PRACTICE</span><h1>${escapeHTML(qz.title)}</h1><p>प्रश्न ध्यान से पढ़ें और सबसे उपयुक्त उत्तर चुनें।</p></div><div class="quiz-head"><div><strong>प्रश्न ${qz.index+1} / ${n}</strong><small>${escapeHTML(q.subject)} · ${escapeHTML(q.topic)}</small></div>${qz.timed?`<div class="timer" id="timer">${formatTime(state.seconds)}</div>`:`<div class="timer">Practice</div>`}</div><div class="progress-track"><div class="progress-fill" style="width:${(qz.index+1)/n*100}%"></div></div><article class="question-card"><div class="question-meta"><span>प्रश्न ${qz.index+1}</span><button class="plain-button" data-save="${q.id}">${saved().includes(q.id)?"★ Saved":"☆ Save प्रश्न"}</button></div><h2>${escapeHTML(q.question)}</h2><div class="option-list">${q.options.map((o,i)=>`<button class="option-button ${selected===i?"selected":""}" data-answer="${i}"><span class="option-letter">${"ABCD"[i]}</span><span>${escapeHTML(o)}</span></button>`).join("")}</div><div class="quiz-controls"><button class="secondary-button" data-action="prev-question" ${qz.index===0?"disabled":""}>← पिछला</button>${qz.index<n-1?`<button class="primary-small" data-action="next-question">अगला प्रश्न →</button>`:`<button class="primary-small" data-action="confirm-submit">टेस्ट सबमिट करें</button>`}</div></article><div style="display:flex;justify-content:space-between;gap:8px;margin-top:14px;flex-wrap:wrap"><button class="plain-button" data-action="quit-quiz">टेस्ट छोड़ें</button><span style="font-size:12px;color:var(--muted)">चुने गए उत्तर इसी डिवाइस पर अस्थायी रूप से रखे जाते हैं।</span></div></div>`;
}
function submitQuiz(auto=false){
 const qz=state.quiz;if(!qz||qz.submitted)return;stopTimer();qz.submitted=true;
 let correct=0,wrong=0,skipped=0;
 qz.questions.forEach(q=>{const a=qz.answers[q.id];if(a===undefined)skipped++;else if(a===q.answer)correct++;else wrong++});
 const percent=Math.round(correct/qz.questions.length*100);
 const record={title:qz.title,correct,wrong,skipped,total:qz.questions.length,percent,date:new Date().toISOString()};
 const hist=attempts();hist.push(record);safeSet(STORAGE.attempts,hist.slice(-100));
 renderResult(qz,record,auto);
}
function renderResult(qz,r,auto){
 const wrongItems=qz.questions.filter(q=>qz.answers[q.id]!==q.answer);
 $("#app").innerHTML=`<div class="quiz-shell"><div class="page-title"><span class="eyebrow">TEST COMPLETED</span><h1>${auto?"समय पूरा हुआ":"बहुत अच्छा, टेस्ट पूरा हुआ!"}</h1><p>${escapeHTML(qz.title)} · आपका परिणाम नीचे है।</p></div><section class="result-card"><div class="score-ring" style="--score-angle:${r.percent*3.6}deg"><div><strong>${r.percent}%</strong><small>सटीकता</small></div></div><h2>${r.correct===r.total?"शानदार!":r.percent>=70?"अच्छा प्रदर्शन!":"अभ्यास जारी रखें!"}</h2><p style="color:var(--muted)">आपने ${r.total} में से ${r.correct} प्रश्न सही किए।</p><div class="result-stats"><div class="result-stat"><strong class="correct-text">${r.correct}</strong><small>सही</small></div><div class="result-stat"><strong class="wrong-text">${r.wrong}</strong><small>गलत</small></div><div class="result-stat"><strong>${r.skipped}</strong><small>छोड़े</small></div></div><button class="primary-small" data-action="retry-quiz">फिर से टेस्ट दें</button> <button class="secondary-button" data-action="go-home">होम पर जाएँ</button></section><div class="section-heading" style="margin-top:28px"><div><h2>उत्तर और व्याख्या</h2></div></div>${qz.questions.map((q,i)=>{const a=qz.answers[q.id],ok=a===q.answer;return `<article class="review-item"><h3>${i+1}. ${escapeHTML(q.question)}</h3><p class="${ok?"correct-text":"wrong-text"}">आपका उत्तर: ${a===undefined?"उत्तर नहीं दिया":escapeHTML(q.options[a])}</p><p class="correct-text">सही उत्तर: ${escapeHTML(q.options[q.answer])}</p><p>व्याख्या: ${escapeHTML(q.explanation)}</p><button class="plain-button" data-save="${q.id}">${saved().includes(q.id)?"★ Saved":"☆ प्रश्न सेव करें"}</button></article>`}).join("")}</div>`;
 state.lastQuiz={title:qz.title,subject:"all",exam:"all",count:qz.questions.length,timed:qz.timed};
}
function showModal(title,message,onConfirm,confirmText="हाँ, सबमिट करें"){
 $("#modalRoot").innerHTML=`<div class="modal-backdrop" role="dialog" aria-modal="true"><div class="modal"><h2>${escapeHTML(title)}</h2><p>${escapeHTML(message)}</p><div class="modal-actions"><button class="secondary-button" data-modal-cancel>रद्द करें</button><button class="primary-small" data-modal-confirm>${escapeHTML(confirmText)}</button></div></div></div>`;
 $("#modalRoot").onclick=e=>{if(e.target.matches("[data-modal-cancel]")||e.target.classList.contains("modal-backdrop")){$("#modalRoot").innerHTML="";return}if(e.target.matches("[data-modal-confirm]")){$("#modalRoot").innerHTML="";onConfirm()}};
}
function toggleSaved(id){let s=saved();s=s.includes(id)?s.filter(x=>x!==id):[...s,id];safeSet(STORAGE.saved,s);if(state.quiz&&!state.quiz.submitted)renderQuizQuestion();else if(state.page==="saved")renderPage("saved");else{updateStats();const b=$(`[data-save="${id}"]`);if(b)b.textContent=s.includes(id)?"★ Saved":"☆ प्रश्न सेव करें"}}
function handleClick(e){
 const btn=e.target.closest("button,[data-page],a[data-page]");if(!btn)return;
 if(btn.dataset.page){renderPage(btn.dataset.page);return}
 if(btn.dataset.exam){state.examFilter=btn.dataset.exam;startQuiz({title:examName(btn.dataset.exam)+" — Practice",exam:btn.dataset.exam,count:10,timed:false});return}
 if(btn.dataset.answer!==undefined&&state.quiz){state.quiz.answers[state.quiz.questions[state.quiz.index].id]=Number(btn.dataset.answer);renderQuizQuestion();return}
 if(btn.dataset.save){toggleSaved(btn.dataset.save);return}
 if(btn.dataset.unsave){toggleSaved(btn.dataset.unsave);return}
 if(btn.dataset.subject){startQuiz({title:btn.dataset.subject+" Quiz",subject:btn.dataset.subject,count:10,timed:false});return}
 if(btn.dataset.mock){startQuiz({title:examName(btn.dataset.mock)+" — Demo Mock Test",exam:btn.dataset.mock,count:10,timed:true});return}
 const action=btn.dataset.action;
 if(action==="start-daily")startQuiz({title:"आज का Daily Quiz",count:10,timed:false});
 else if(action==="open-quiz")renderPage("quiz");
 else if(action==="open-mock")renderPage("mock");
 else if(action==="open-papers")renderPage("papers");
 else if(action==="open-bookmarks")renderPage("saved");
 else if(action==="start-quiz"){startQuiz({title:"मिक्स्ड प्रैक्टिस Quiz",subject:$("#quizSubjectFilter")?.value||"all",exam:$("#quizExamFilter")?.value||"all",count:10,timed:false})}
 else if(action==="next-question"){if(state.quiz.index<state.quiz.questions.length-1){state.quiz.index++;renderQuizQuestion()}}
 else if(action==="prev-question"){if(state.quiz.index>0){state.quiz.index--;renderQuizQuestion()}}
 else if(action==="confirm-submit")showModal("टेस्ट सबमिट करें?","सबमिट करने के बाद उत्तर नहीं बदल पाएँगे। क्या आप परिणाम देखना चाहते हैं?",()=>submitQuiz(false));
 else if(action==="quit-quiz")showModal("टेस्ट छोड़ें?","इस टेस्ट का परिणाम सेव नहीं होगा।",()=>{stopTimer();renderPage("quiz")},"टेस्ट छोड़ें");
 else if(action==="retry-quiz"){const r=state.lastQuiz||{title:"मिक्स्ड प्रैक्टिस Quiz",count:10,timed:false};startQuiz(r)}
 else if(action==="go-home")renderPage("home");
 else if(action==="clear-history")showModal("इतिहास मिटाएँ?","इस डिवाइस पर सेव सभी टेस्ट परिणाम हट जाएँगे।",()=>{safeSet(STORAGE.attempts,[]);renderPage("profile")},"इतिहास मिटाएँ");
}
document.addEventListener("click",handleClick);
document.addEventListener("change",e=>{
 if(e.target.id==="paperSearch"||e.target.id==="paperExam"||e.target.id==="paperYear")$("#paperResults").innerHTML=renderPaperResults();
});
$("#themeToggle").addEventListener("click",()=>{document.body.classList.toggle("dark");safeSet(STORAGE.theme,document.body.classList.contains("dark")?"dark":"light")});
if(safeGet(STORAGE.theme,"light")==="dark")document.body.classList.add("dark");
renderPage("home");
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
