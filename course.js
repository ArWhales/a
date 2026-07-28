/* =========================================================
   حيتان العرب — course.js
   Powers course.html: i18n, media, quizzes, flashcards,
   free preview, route guard, collapsible mobile sidebar.
   ========================================================= */

/* ===================== i18n dictionary (UI chrome) ===================== */

// أضف هذا في أول ملف course.js مباشرةً إذا لم يكن موجوداً
window.TRACKS = window.TRACKS || {
  "crypto-basics": {
    type: "leveled",
    title: "أساسيات الكريبتو",
    title_en: "Crypto Basics",
    icon: "🪙",
    levels: [
      {
        id: "lvl1",
        name: "المستوى الأول",
        badge: "مبتدئ",
        lessons: [
          { id: "les1", title: "مقدمة في البلوكشين", content: "محتوى الدرس الأول..." }
        ],
        exam: { pass: 70, questions: [] }
      }
    ]
  }
};

const I18N = {
  ar: {
    nav_home:"الرئيسية", nav_about:"من نحن", nav_edu:"التعليم ▾", nav_articles:"المقالات",
    nav_contact:"تواصل معنا", nav_join:"انضم الآن", nav_login:"تسجيل الدخول",
    hub_eyebrow:"مسار تعليمي متكامل", hub_title:"المسارات التعليمية",
    hub_subtitle:"اختر مساراً وابدأ التعلم خطوة بخطوة.",
    back_to_hub:"→ كل المسارات", toggle_lessons:"قائمة الدروس",
    prev_lesson:"الدرس السابق", next_lesson:"إنهاء الدرس والانتقال للتالي", next_lesson_done:"تم ✓ — الدرس التالي",
    exam_title:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="examGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#00F2FE" />
    </linearGradient>
  </defs>
  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M14 2V8H20" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M16 13H8M16 17H8M10 9H8" stroke="url(#examGrad)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
 اختبار اجتياز المستوى`, exam_submit:"إرسال الإجابات",
    quiz_title:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="examGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#00F2FE" />
    </linearGradient>
  </defs>
  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M14 2V8H20" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M16 13H8M16 17H8M10 9H8" stroke="url(#examGrad)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
 اختبر فهمك`, quiz_submit:"تحقق من الإجابة",
    quiz_pass:`إجابة صحيحة! أحسنت <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="passGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#34D399" />
    </linearGradient>
  </defs>
  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="url(#passGrad)" stroke-width="1.8" fill="url(#passGrad)" fill-opacity="0.2" stroke-linejoin="round"/>
</svg>
`, quiz_fail:"إجابة غير صحيحة، حاول مرة أخرى.",
    en_note:"محتوى هذا الدرس متاح بالعربية حالياً، والترجمة الإنجليزية قيد الإعداد.",
    greeting:"مرحباً", preview_banner:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
  </defs>
  <rect x="5" y="11" width="14" height="10" rx="2" stroke="url(#lockGrad)" stroke-width="1.8" fill="url(#lockGrad)" fill-opacity="0.15"/>
  <path d="M8 11V7C8 4.79086 9.79086 3 12 3C13.8638 3 15.4299 4.27477 15.874 6" stroke="url(#lockGrad)" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="12" cy="16" r="1" fill="url(#lockGrad)"/>
</svg>
 معاينة مجانية — هذا الدرس متاح للجميع بدون تسجيل دخول.`,
    modal_title:"يرجى تسجيل الدخول أولاً",
    modal_body:"للوصول إلى هذا المحتوى التعليمي، تحتاج لتسجيل الدخول أو إنشاء حساب أولاً.",
    modal_cancel:"إلغاء", modal_confirm:"تسجيل الدخول",
    lesson_of:"درس", of_word:"من",
  },
  en: {
    nav_home:"Home", nav_about:"About", nav_edu:"Learn ▾", nav_articles:"Articles",
    nav_contact:"Contact", nav_join:"Join Now", nav_login:"Log In",
    hub_eyebrow:"Full Learning Path", hub_title:"Learning Tracks",
    hub_subtitle:"Pick a track and start learning step by step.",
    back_to_hub:"← All Tracks", toggle_lessons:"Lessons Menu",
    prev_lesson:"Previous Lesson", next_lesson:"Finish & Continue", next_lesson_done:"Done ✓ — Next Lesson",
    exam_title:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="examGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#00F2FE" />
    </linearGradient>
  </defs>
  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M14 2V8H20" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M16 13H8M16 17H8M10 9H8" stroke="url(#examGrad)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
 Level Exam`, exam_submit:"Submit Answers",
    quiz_title:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="examGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#00F2FE" />
    </linearGradient>
  </defs>
  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M14 2V8H20" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M16 13H8M16 17H8M10 9H8" stroke="url(#examGrad)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
 Test Your Understanding`, quiz_submit:"Check Answer",
    quiz_pass:`Correct! Well done <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="passGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#34D399" />
    </linearGradient>
  </defs>
  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="url(#passGrad)" stroke-width="1.8" fill="url(#passGrad)" fill-opacity="0.2" stroke-linejoin="round"/>
</svg>
`, quiz_fail:"Not quite — try again.",
    en_note:"This lesson's content is currently available in Arabic only — English translation is in progress.",
    greeting:"Welcome", preview_banner:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
  </defs>
  <rect x="5" y="11" width="14" height="10" rx="2" stroke="url(#lockGrad)" stroke-width="1.8" fill="url(#lockGrad)" fill-opacity="0.15"/>
  <path d="M8 11V7C8 4.79086 9.79086 3 12 3C13.8638 3 15.4299 4.27477 15.874 6" stroke="url(#lockGrad)" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="12" cy="16" r="1" fill="url(#lockGrad)"/>
</svg>
 Free preview — this lesson is open to everyone, no login required.`,
    modal_title:"Please log in first",
    modal_body:"To access this learning content, you need to log in or create an account first.",
    modal_cancel:"Cancel", modal_confirm:"Log In",
    lesson_of:"Lesson", of_word:"of",
  }
};
let currentLang = localStorage.getItem('aw_lang') || 'ar';

function applyLang(){
  const t = I18N[currentLang];
  const root = document.getElementById('htmlRoot');
  if(root) {
    root.lang = currentLang;
    root.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }
  document.body.classList.toggle('lang-en', currentLang === 'en');
  const langToggle = document.getElementById('langToggle');
  if(langToggle) langToggle.textContent = currentLang === 'ar' ? '🌐 EN' : '🌐 AR';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(t[key]){
      if(key === 'nav_edu'){
        el.childNodes[0].nodeValue = t[key].replace('▾','').trim() + ' ';
      } else {
        el.textContent = t[key];
      }
    }
  });
  
  const mTitle = document.getElementById('modalTitle');
  if(mTitle) mTitle.textContent = t.modal_title;
  const mBody = document.getElementById('modalBody');
  if(mBody) mBody.textContent = t.modal_body;
  const mCancel = document.getElementById('modalCancel');
  if(mCancel) mCancel.textContent = t.modal_cancel;
  const mConfirm = document.getElementById('modalConfirm');
  if(mConfirm) mConfirm.textContent = t.modal_confirm;

  if(!currentTrackId){
    const pEyebrow = document.getElementById('pageEyebrow');
    if(pEyebrow) pEyebrow.textContent = t.hub_eyebrow;
    const pTitle = document.getElementById('pageMainTitle');
    if(pTitle) pTitle.textContent = t.hub_title;
    const pSub = document.getElementById('pageSubtitle');
    if(pSub) pSub.textContent = t.hub_subtitle;
  }
  if(currentTrackId) render();
}

const langBtn = document.getElementById('langToggle');
if(langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('aw_lang', currentLang);
    applyLang();
  });
}

/* Helpers to pick translated field with graceful fallback */
function tField(obj, base){
  if(currentLang === 'en' && obj[base + '_en']) return obj[base + '_en'];
  return obj[base];
}
function hasEnglish(obj){ return !!(obj.title_en && obj.content_en); }

/* ===================== Nav: hamburger + dropdown ===================== */
const navHamburger = document.getElementById('navHamburger');
if(navHamburger) {
  navHamburger.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    if(navLinks) navLinks.classList.toggle('mobile-open');
  });
}

function buildEduDropdown(){
  const list = document.getElementById('eduDropdownList');
  if(!list || typeof TRACKS === 'undefined') return;
  let html = '';
  Object.keys(TRACKS).forEach(id => {
    const t = TRACKS[id];
    const title = currentLang === 'en' && t.title_en ? t.title_en : t.title;
    const tag = t.type === 'leveled' ? '3 مستويات' : (t.lessons ? t.lessons.length + ' دروس' : '');
    html += `<a href="course.html?track=${id}">${t.icon || '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3B82F6" /><stop offset="100%" stop-color="#1D4ED8" /></linearGradient><linearGradient id="bookGlow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#60A5FA" /><stop offset="100%" stop-color="#93C5FD" /></linearGradient></defs><path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20V4H6.5C5.11929 4 4 5.11929 4 6.5V19.5Z" stroke="url(#bookGrad)" stroke-width="1.8" fill="url(#bookGrad)" fill-opacity="0.15" stroke-linejoin="round"/><path d="M6.5 17C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H20V17H6.5Z" stroke="url(#bookGrad)" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8H16" stroke="url(#bookGlow)" stroke-width="1.5" stroke-linecap="round"/><path d="M8 11.5H14" stroke="url(#bookGlow)" stroke-width="1.5" stroke-linecap="round"/><circle cx="18" cy="4" r="1.2" fill="url(#bookGlow)" /><circle cx="3" cy="18" r="1" fill="url(#bookGlow)" /></svg>'} ${title} <span class="tag">${tag}</span></a>`;
  });
  list.innerHTML = html;
}

const eduDropdown = document.getElementById('eduDropdown');
const eduTrigger = document.getElementById('eduTrigger');
if(eduTrigger && eduDropdown) {
  eduTrigger.addEventListener('click', (e) => { e.stopPropagation(); eduDropdown.classList.toggle('open'); });
  document.addEventListener('click', (e) => { if(!eduDropdown.contains(e.target)){ eduDropdown.classList.remove('open'); } });
}

/* ===================== Ticker ===================== */
const FALLBACK_COINS = [
  {symbol:'BTC', price:'—', chg:null},{symbol:'ETH', price:'—', chg:null},
  {symbol:'USDT', price:'—', chg:null},{symbol:'BNB', price:'—', chg:null},
  {symbol:'SOL', price:'—', chg:null},{symbol:'XRP', price:'—', chg:null},
  {symbol:'USDC', price:'—', chg:null},{symbol:'ADA', price:'—', chg:null},
  {symbol:'DOGE', price:'—', chg:null},{symbol:'TRX', price:'—', chg:null},
];
function fetchWithTimeout(url, ms=8000){
  const controller = new AbortController();
  const id = setTimeout(()=>controller.abort(), ms);
  return fetch(url, {signal:controller.signal}).finally(()=>clearTimeout(id));
}
function renderTicker(coins){
  const track = document.getElementById('tickerTrack');
  if(!track) return;
  const items = coins.map(c => {
    if(c.chg === null){
      return `<div class="tick-item"><span class="tick-sym">${c.symbol}</span><span class="tick-price">${c.price}</span></div>`;
    }
    const chgClass = c.chg >= 0 ? 'up' : 'down';
    const arrow = c.chg >= 0 ? '▲' : '▼';
    return `<div class="tick-item"><span class="tick-sym">${c.symbol}</span><span class="tick-price">$${c.price}</span><span class="tick-chg ${chgClass}">${arrow} ${Math.abs(c.chg).toFixed(2)}%</span></div>`;
  }).join('');
  track.innerHTML = items + items;
}
async function tryCoinGecko(){
  const res = await fetchWithTimeout('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&price_change_percentage=24h');
  if(!res.ok) throw new Error('coingecko http ' + res.status);
  const data = await res.json();
  if(!Array.isArray(data) || data.length === 0) throw new Error('coingecko empty response');
  return data.map(c => ({
    symbol: c.symbol.toUpperCase(),
    price: c.current_price >= 1 ? c.current_price.toLocaleString('en-US',{maximumFractionDigits:2}) : c.current_price.toPrecision(4),
    chg: c.price_change_percentage_24h ?? 0
  }));
}
async function tryCoinCap(){
  const res = await fetchWithTimeout('https://api.coincap.io/v2/assets?limit=10');
  if(!res.ok) throw new Error('coincap http ' + res.status);
  const json = await res.json();
  const data = json.data;
  if(!Array.isArray(data) || data.length === 0) throw new Error('coincap empty response');
  return data.map(c => {
    const price = parseFloat(c.priceUsd);
    const chg = parseFloat(c.changePercent24Hr);
    return {
      symbol: c.symbol.toUpperCase(),
      price: price >= 1 ? price.toLocaleString('en-US',{maximumFractionDigits:2}) : price.toPrecision(4),
      chg: isNaN(chg) ? 0 : chg
    };
  });
}
let tickerRetries = 0;
async function loadTicker(){
  const track = document.getElementById('tickerTrack');
  if(!track) return;
  try{ const coins = await tryCoinGecko(); renderTicker(coins); tickerRetries = 0; return; }
  catch(e1){
    try{ const coins = await tryCoinCap(); renderTicker(coins); tickerRetries = 0; return; }
    catch(e2){
      tickerRetries++;
      if(tickerRetries === 1){ track.innerHTML = '<div class="tick-item mono">جاري إعادة محاولة تحميل الأسعار...</div>'; }
      else{ renderTicker(FALLBACK_COINS); }
      setTimeout(loadTicker, 12000);
    }
  }
}
loadTicker();
setInterval(loadTicker, 60000);

/* ===================== Login state & nav UI ===================== */
let userIsLoggedIn = false;
let currentUsername = null;

async function checkLoginStatus(){
  if(typeof IS_BACKEND_CONFIGURED !== 'undefined' && IS_BACKEND_CONFIGURED){
    const { data: { session } } = await supabaseClient.auth.getSession();
    if(session && session.user.email_confirmed_at){
      userIsLoggedIn = true;
      currentUsername = session.user.user_metadata?.username || session.user.email.split('@')[0];
    }
  } else {
    const demoSession = localStorage.getItem('aw_demo_session');
    if(demoSession){
      const s = JSON.parse(demoSession);
      userIsLoggedIn = true;
      currentUsername = s.username || s.email.split('@')[0];
    }
  }
  updateAuthNavUI();
}
function updateAuthNavUI(){
  const joinBtn = document.getElementById('joinBtn');
  if(joinBtn) joinBtn.style.display = userIsLoggedIn ? 'none' : '';
  const authNavBtn = document.getElementById('authNavBtn');
  if(authNavBtn) authNavBtn.style.display = userIsLoggedIn ? 'none' : '';
  const badge = document.getElementById('userBadge');
  if(badge) badge.style.display = userIsLoggedIn ? 'flex' : 'none';
  const badgeName = document.getElementById('userBadgeName');
  if(userIsLoggedIn && badgeName) badgeName.textContent = currentUsername;
}
function closeLoginModal(){ 
  const overlay = document.getElementById('loginModalOverlay');
  if(overlay) overlay.style.display = 'none'; 
}
function showLoginModal(){ 
  const overlay = document.getElementById('loginModalOverlay');
  if(overlay) overlay.style.display = 'flex'; 
}

/* ===================== Lightbox ===================== */
function openLightbox(url, caption){
  const img = document.getElementById('lightboxImg');
  if(img) img.src = url;
  const cap = document.getElementById('lightboxCaption');
  if(cap) cap.textContent = caption || '';
  const overlay = document.getElementById('lightboxOverlay');
  if(overlay) overlay.style.display = 'flex';
}
function closeLightbox(){ 
  const overlay = document.getElementById('lightboxOverlay');
  if(overlay) overlay.style.display = 'none'; 
}
const lbOverlay = document.getElementById('lightboxOverlay');
if(lbOverlay) {
  lbOverlay.addEventListener('click', (e) => {
    if(e.target.id === 'lightboxOverlay') closeLightbox();
  });
}

/* ===================== Progress / storage helpers ===================== */
const STORAGE_PREFIX = "aw_course_";
function isLessonDone(trackId, lessonId){ return localStorage.getItem(STORAGE_PREFIX + trackId + "_" + lessonId) === "1"; }
function markLessonDone(trackId, lessonId){ localStorage.setItem(STORAGE_PREFIX + trackId + "_" + lessonId, "1"); }
function isExamPassed(trackId){ return localStorage.getItem(STORAGE_PREFIX + trackId + "_exam_passed") === "1"; }
function markExamPassed(trackId){ localStorage.setItem(STORAGE_PREFIX + trackId + "_exam_passed", "1"); }
function isLevelUnlocked(track, levelIndex){
  if(levelIndex === 0) return true;
  return isExamPassed(track.levels[levelIndex - 1].id);
}
function isFirstLesson(track, levelIndex, lessonIndex){
  if(track.type === 'leveled') return levelIndex === 0 && lessonIndex === 0;
  return lessonIndex === 0;
}

/* ===================== Comments (demo, localStorage) ===================== */
function getComments(key){ return JSON.parse(localStorage.getItem('aw_comments_' + key) || '[]'); }
function addComment(key, text){
  const comments = getComments(key);
  comments.push({text, ts: new Date().toLocaleString('ar-EG')});
  localStorage.setItem('aw_comments_' + key, JSON.stringify(comments));
}
function commentsListHtml(key){
  const comments = getComments(key);
  return comments.length
    ? comments.map(c => `<div class="comment-item"><div class="c-meta">${c.ts}</div><div class="c-body">${c.text.replace(/</g,'&lt;')}</div></div>`).join('')
    : '<div class="empty-comments">لا توجد تعليقات بعد — كن أول من يبدأ النقاش.</div>';
}
function renderComments(key){
  return `
    <div class="comments-section">
      <h4>💬 النقاش حول هذا الدرس</h4>
      <p class="comments-note">تعليقات تجريبية محفوظة على جهازك فقط — تحتاج ربط قاعدة بيانات ليراها بقية الطلاب.</p>
      <div class="comment-form">
        <input type="text" id="commentInput" placeholder="اكتب تعليقك أو سؤالك...">
        <button class="btn-primary" id="commentSubmit" style="padding:11px 20px;">إرسال</button>
      </div>
      <div id="commentsList">${commentsListHtml(key)}</div>
    </div>
  `;
}
function wireCommentForm(key){
  const submitBtn = document.getElementById('commentSubmit');
  if(!submitBtn) return;
  submitBtn.onclick = () => {
    const input = document.getElementById('commentInput');
    if(!input || input.value.trim() === '') return;
    addComment(key, input.value.trim());
    input.value = '';
    const list = document.getElementById('commentsList');
    if(list) list.innerHTML = commentsListHtml(key);
  };
}

/* ===================== Media: video player + image gallery ===================== */
function getYouTubeId(url){
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}
function renderVideoBlock(lesson){
  if(!lesson.video_url) return '';
  const yt = getYouTubeId(lesson.video_url);
  const inner = yt
    ? `<iframe src="https://www.youtube.com/embed/${yt}" allowfullscreen loading="lazy"></iframe>`
    : `<video controls preload="metadata" playsinline
         onerror="this.parentElement.innerHTML = '<div class=&quot;media-placeholder&quot; style=&quot;height:220px;display:flex;align-items:center;justify-content:center;color:var(--text-dim);&quot;>🎬 تعذّر تحميل الفيديو</div>';">
         <source src="${lesson.video_url}" type="video/mp4">
       </video>`;
  return `<div class="video-block">${inner}<div class="video-watermark">🐋 ArabicWhales حيتان العرب</div></div>`;
}
function renderGallery(lesson){
  let images = lesson.images;
  if(!images && lesson.image_url) images = [{url: lesson.image_url, caption: lesson.title}];
  if(!images || !images.length) return '';
  const items = images.map((img, idx) => `
    <div class="gallery-item" onclick="openLightbox('${img.url}', ${JSON.stringify(currentLang==='en' && img.caption_en ? img.caption_en : (img.caption||'')).replace(/"/g,'&quot;')})">
      <img src="${img.url}" alt="${(img.caption||lesson.title).replace(/"/g,'&quot;')}" loading="lazy"
        onerror="this.closest('.gallery-item').style.display='none';">
      <div class="gallery-watermark">🐋 ArabicWhales</div>
      <div class="gallery-caption">${currentLang==='en' && img.caption_en ? img.caption_en : (img.caption || '')}</div>
    </div>
  `).join('');
  return `<div class="gallery">${items}</div>`;
}

/* ===================== Flashcards ===================== */
function renderFlashcards(lesson){
  if(!lesson.flashcards || !lesson.flashcards.length) return '';
  const cards = lesson.flashcards.map((fc, idx) => {
    const q = currentLang === 'en' && fc.q_en ? fc.q_en : fc.q;
    const a = currentLang === 'en' && fc.a_en ? fc.a_en : fc.a;
    return `
      <div class="flashcard" id="fc-${idx}">
        <div class="flashcard-q" onclick="document.getElementById('fc-${idx}').classList.toggle('open')">
          <span>${q}</span><span class="fc-caret">▾</span>
        </div>
        <div class="flashcard-a">${a}</div>
      </div>
    `;
  }).join('');
  return `<div class="flashcards">${cards}</div>`;
}

/* ===================== Per-lesson quiz ===================== */
function renderLessonQuiz(lesson, trackId, keyPrefix){
  if(!lesson.quiz) return '';
  const t = I18N[currentLang];
  const q = currentLang === 'en' ? lesson.quiz.q_en : lesson.quiz.q;
  const opts = currentLang === 'en' ? lesson.quiz.options_en : lesson.quiz.options;
  const already = isLessonDone(trackId, keyPrefix + '_quiz');
  const optsHtml = opts.map((opt, oi) => `
    <label class="quiz-opt" data-o="${oi}" onclick="selectQuizOption(this)">
      <input type="radio" name="lq" value="${oi}"> ${opt}
    </label>
  `).join('');
  return `
    <div class="quiz-block" id="lessonQuizBlock">
      <h4>${t.quiz_title}</h4>
      <p style="font-size:14.5px;margin-bottom:14px;">${q}</p>
      <div id="quizOptions">${optsHtml}</div>
      <button class="btn-primary" id="quizSubmitBtn" style="margin-top:10px;">${t.quiz_submit}</button>
      <div id="quizFeedback"></div>
    </div>
  `;
}
function selectQuizOption(el){
  document.querySelectorAll('#quizOptions .quiz-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}
function wireLessonQuiz(lesson, trackId, keyPrefix){
  if(!lesson.quiz) return;
  const btn = document.getElementById('quizSubmitBtn');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const selected = document.querySelector('#quizOptions .quiz-opt.selected');
    const feedback = document.getElementById('quizFeedback');
    const t = I18N[currentLang];
    if(!selected){ return; }
    const oi = parseInt(selected.dataset.o);
    document.querySelectorAll('#quizOptions .quiz-opt').forEach(o => {
      const idx = parseInt(o.dataset.o);
      if(idx === lesson.quiz.correct) o.classList.add('correct');
      else if(idx === oi) o.classList.add('wrong');
    });
    const passed = oi === lesson.quiz.correct;
    if(feedback) feedback.innerHTML = `<div class="quiz-feedback ${passed ? 'pass' : 'fail'}">${passed ? t.quiz_pass : t.quiz_fail}</div>`;
    if(passed){
      markLessonDone(trackId, keyPrefix + '_quiz');
      buildSidebar();
    }
  });
}

/* ===================== Media block wrapper (video + gallery) ===================== */
function renderMediaBlock(lesson){
  return renderVideoBlock(lesson) + renderGallery(lesson);
}

/* ===================== Hub ===================== */
function trackProgressPct(id, track){
  if(track.type === 'leveled'){
    const total = track.levels.reduce((s,l) => s + l.lessons.length + 1, 0);
    let done = 0;
    track.levels.forEach(l => {
      done += l.lessons.filter(les => isLessonDone(l.id, les.id)).length;
      if(isExamPassed(l.id)) done++;
    });
    return Math.round((done/total)*100);
  } else {
    const done = track.lessons.filter(l => isLessonDone(id, l.id)).length;
    return Math.round((done/track.lessons.length)*100);
  }
}
function renderHub(){
  const grid = document.getElementById('hubGrid');
  if(!grid) return;
  if (typeof TRACKS === 'undefined' || !TRACKS || Object.keys(TRACKS).length === 0) {
    grid.innerHTML = '<div style="text-align:center; padding:40px; color:var(--text-dim);">⚠️ لم يتم العثور على بيانات المسارات.</div>';
    return;
  }
  let html = '';
  Object.keys(TRACKS).forEach(id => {
    const t = TRACKS[id];
    const title = currentLang === 'en' && t.title_en ? t.title_en : t.title;
    const count = t.type === 'leveled'
      ? t.levels.reduce((s,l)=>s+l.lessons.length,0) + (currentLang==='en' ? ' lessons · 3 levels' : ' درس · 3 مستويات')
      : (t.lessons ? t.lessons.length : 0) + (currentLang==='en' ? ' lessons' : ' دروس');
    const pct = trackProgressPct(id, t);
    const completed = pct === 100;
    html += `<a class="hub-card" href="course.html?track=${id}">
      <div class="icon">${t.icon || '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3B82F6" /><stop offset="100%" stop-color="#1D4ED8" /></linearGradient><linearGradient id="bookGlow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#60A5FA" /><stop offset="100%" stop-color="#93C5FD" /></linearGradient></defs><path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20V4H6.5C5.11929 4 4 5.11929 4 6.5V19.5Z" stroke="url(#bookGrad)" stroke-width="1.8" fill="url(#bookGrad)" fill-opacity="0.15" stroke-linejoin="round"/><path d="M6.5 17C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H20V17H6.5Z" stroke="url(#bookGrad)" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8H16" stroke="url(#bookGlow)" stroke-width="1.5" stroke-linecap="round"/><path d="M8 11.5H14" stroke="url(#bookGlow)" stroke-width="1.5" stroke-linecap="round"/><circle cx="18" cy="4" r="1.2" fill="url(#bookGlow)" /><circle cx="3" cy="18" r="1" fill="url(#bookGlow)" /></svg>'}</div>
      <h3>${title}</h3>
      <div class="meta">${count}</div>
      <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${pct}%"></div></div>
      ${completed ? `<div class="badge-row"><span class="badge-pill"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFD700" /><stop offset="100%" stop-color="#FFA500" /></linearGradient><linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00F2FE" /><stop offset="100%" stop-color="#4FACFE" /></linearGradient></defs><circle cx="12" cy="12" r="9" stroke="url(#coinGrad)" stroke-width="2" fill="none" /><circle cx="12" cy="12" r="7" fill="url(#coinGrad)" fill-opacity="0.15" /><path d="M11 7H14C15.1046 7 16 7.89543 16 9C16 9.7958 15.5337 10.4828 14.8638 10.8038C15.5562 11.1098 16.0357 11.8021 16.0357 12.6071C16.0357 13.7117 15.1403 14.6071 14.0357 14.6071H11V7Z" stroke="url(#coinGrad)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 11H14.5" stroke="url(#coinGrad)" stroke-width="1.5" stroke-linecap="round"/><path d="M11 7V15" stroke="url(#coinGrad)" stroke-width="1.8" stroke-linecap="round"/><path d="M12.5 5.5V7" stroke="url(#coinGrad)" stroke-width="1.5" stroke-linecap="round"/><path d="M12.5 14.6V16.1" stroke="url(#coinGrad)" stroke-width="1.5" stroke-linecap="round"/><circle cx="19" cy="5" r="1" fill="url(#glowGrad)" /><circle cx="5" cy="19" r="1.5" fill="url(#glowGrad)" /></svg> ${currentLang==='en' ? 'Completed' : 'مكتمل'}</span></div>` : ''}
    </a>`;
  });
  grid.innerHTML = html;
}

/* ===================== Track engine ===================== */
const urlParams = new URLSearchParams(window.location.search);
const currentTrackId = urlParams.get('track');
let currentLevelIndex = 0;
let currentLessonIndex = 0;
let currentView = "lesson";

function buildSidebar(){
  const sidebar = document.getElementById('sidebar');
  if(!sidebar || !TRACKS[currentTrackId]) return;
  const track = TRACKS[currentTrackId];
  const t = I18N[currentLang];
  let html = `<div class="back-to-hub" onclick="window.location.href='course.html'">${t.back_to_hub}</div>`;
  const trackTitle = currentLang === 'en' && track.title_en ? track.title_en : track.title;
  html += `<div class="course-title">${track.icon || '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3B82F6" /><stop offset="100%" stop-color="#1D4ED8" /></linearGradient><linearGradient id="bookGlow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#60A5FA" /><stop offset="100%" stop-color="#93C5FD" /></linearGradient></defs><path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20V4H6.5C5.11929 4 4 5.11929 4 6.5V19.5Z" stroke="url(#bookGrad)" stroke-width="1.8" fill="url(#bookGrad)" fill-opacity="0.15" stroke-linejoin="round"/><path d="M6.5 17C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H20V17H6.5Z" stroke="url(#bookGrad)" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8H16" stroke="url(#bookGlow)" stroke-width="1.5" stroke-linecap="round"/><path d="M8 11.5H14" stroke="url(#bookGlow)" stroke-width="1.5" stroke-linecap="round"/><circle cx="18" cy="4" r="1.2" fill="url(#bookGlow)" /><circle cx="3" cy="18" r="1" fill="url(#bookGlow)" /></svg>'} ${trackTitle}</div>`;

  if(track.type === 'leveled'){
    track.levels.forEach((level, li) => {
      const unlocked = isLevelUnlocked(track, li);
      const openClass = li === currentLevelIndex ? "open" : "";
      const lockedClass = unlocked ? "" : "locked";
      const levelName = currentLang === 'en' && level.name_en ? level.name_en : level.name;
      html += `<div class="level-block ${openClass} ${lockedClass}" data-level="${li}">
        <div class="level-head" onclick="toggleLevel(${li})">
          <span>${unlocked ? '' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00F2FE" /><stop offset="100%" stop-color="#4FACFE" /></linearGradient></defs><path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="url(#secGrad)" stroke-width="1.8" stroke-linejoin="round"/><rect x="9.5" y="11" width="5" height="4.5" rx="1" stroke="url(#secGrad)" stroke-width="1.5" fill="url(#secGrad)" fill-opacity="0.2"/><path d="M10.5 11V9.5C10.5 8.67157 11.1716 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5V11" stroke="url(#secGrad)" stroke-width="1.5" stroke-linecap="round"/><circle cx="18" cy="5" r="1" fill="url(#secGrad)"/><circle cx="6" cy="18" r="1" fill="url(#secGrad)"/></svg> '}${levelName}</span>
          <span class="badge">${level.badge}</span>
        </div>
        <div class="level-lessons">`;
      level.lessons.forEach((lesson, lidx) => {
        const done = isLessonDone(level.id, lesson.id);
        const active = (li === currentLevelIndex && lidx === currentLessonIndex && currentView === "lesson") ? "active" : "";
        const title = currentLang === 'en' && lesson.title_en ? lesson.title_en : lesson.title;
        const preview = isFirstLesson(track, li, lidx) ? `<span class="preview-tag">${currentLang==='en'?'FREE':'مجاني'}</span>` : '';
        html += `<div class="lesson-link ${done ? 'done' : ''} ${active}" onclick="goToLesson(${li}, ${lidx})">
          <span class="check">${done ? '✓' : ''}</span> ${title} ${preview}
        </div>`;
      });
      const examDone = isExamPassed(level.id);
      const examActive = (li === currentLevelIndex && currentView === "exam") ? "active" : "";
      html += `<div class="lesson-link exam-link ${examDone ? 'done' : ''} ${examActive}" onclick="${unlocked ? `goToExam(${li})` : ''}">
          <span class="check">${examDone ? '✓' : ''}</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="examGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#00F2FE" />
    </linearGradient>
  </defs>
  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M14 2V8H20" stroke="url(#examGrad)" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M16 13H8M16 17H8M10 9H8" stroke="url(#examGrad)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
 ${currentLang==='en'?'Level Exam':'اختبار اجتياز المستوى'}
        </div>`;
      html += `</div></div>`;
    });
  } else {
    html += `<div class="level-lessons open" style="display:block;">`;
    track.lessons.forEach((lesson, lidx) => {
      const done = isLessonDone(currentTrackId, lesson.id);
      const active = (lidx === currentLessonIndex) ? "active" : "";
      const title = currentLang === 'en' && lesson.title_en ? lesson.title_en : lesson.title;
      const preview = lidx === 0 ? `<span class="preview-tag">${currentLang==='en'?'FREE':'مجاني'}</span>` : '';
      html += `<div class="lesson-link ${done ? 'done' : ''} ${active}" onclick="goToFlatLesson(${lidx})">
        <span class="check">${done ? '✓' : ''}</span> ${title} ${preview}
      </div>`;
    });
    html += `</div>`;
  }
  sidebar.innerHTML = html;
}

function toggleLevel(li){
  document.querySelectorAll('.level-block').forEach((b, idx) => {
    if(idx === li) b.classList.toggle('open'); else b.classList.remove('open');
  });
}

function requiresLogin(track, levelIndex, lessonIndex){
  if(userIsLoggedIn) return false;
  return !isFirstLesson(track, levelIndex, lessonIndex);
}

function goToLesson(li, lidx){
  const track = TRACKS[currentTrackId];
  if(requiresLogin(track, li, lidx)){ showLoginModal(); return; }
  currentLevelIndex = li; currentLessonIndex = lidx; currentView = "lesson"; render();
}
function goToExam(li){
  if(!userIsLoggedIn){ showLoginModal(); return; }
  currentLevelIndex = li; currentView = "exam"; render();
}
function goToFlatLesson(lidx){
  const track = TRACKS[currentTrackId];
  if(requiresLogin(track, 0, lidx)){ showLoginModal(); return; }
  currentLessonIndex = lidx; render();
}

function lessonBodyHtml(lesson){
  const content = tField(lesson, 'content');
  if(currentLang === 'en' && !hasEnglish(lesson)){
    return `<div class="en-content-note">ℹ️ ${I18N.en.en_note}</div><p class="lesson-content" dir="rtl" style="text-align:right;font-family:'IBM Plex Sans Arabic',sans-serif;">${lesson.content}</p>`;
  }
  return `<p class="lesson-content">${content}</p>`;
}

function previewBannerHtml(track, levelIndex, lessonIndex){
  if(userIsLoggedIn) return '';
  if(!isFirstLesson(track, levelIndex, lessonIndex)) return '';
  return `<div class="preview-banner">${I18N[currentLang].preview_banner}</div>`;
}

function renderLeveledLesson(){
  const track = TRACKS[currentTrackId];
  const level = track.levels[currentLevelIndex];
  const lesson = level.lessons[currentLessonIndex];
  const totalItems = level.lessons.length + 1;
  const doneCount = level.lessons.filter(l => isLessonDone(level.id, l.id)).length + (isExamPassed(level.id) ? 1 : 0);
  const pct = Math.round((doneCount / totalItems) * 100);
  const t = I18N[currentLang];
  const title = tField(lesson, 'title');
  const levelName = currentLang === 'en' && level.name_en ? level.name_en : level.name;
  const keyPrefix = level.id + '_' + lesson.id;

  const main = document.getElementById('mainPane');
  if(!main) return;
  main.innerHTML = `
    <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${pct}%"></div></div>
    ${previewBannerHtml(track, currentLevelIndex, currentLessonIndex)}
    <div class="lesson-eyebrow">${levelName} · ${t.lesson_of} ${currentLessonIndex + 1} ${t.of_word} ${level.lessons.length}</div>
    <h2 class="lesson-title">${title}</h2>
    ${renderMediaBlock(lesson)}
    ${lessonBodyHtml(lesson)}
    ${renderFlashcards(lesson)}
    ${renderLessonQuiz(lesson, level.id, keyPrefix)}
    <div class="lesson-nav">
      <button class="btn-ghost" id="prevBtn" ${currentLessonIndex === 0 ? 'disabled style="opacity:.4;cursor:not-allowed;"' : ''}>← ${t.prev_lesson}</button>
      <button class="btn-primary" id="nextBtn">${isLessonDone(level.id, lesson.id) ? t.next_lesson_done : t.next_lesson} →</button>
    </div>
    ${renderComments(keyPrefix)}
  `;
  markLessonDone(level.id, lesson.id);
  buildSidebar();
  wireCommentForm(keyPrefix);
  wireLessonQuiz(lesson, level.id, keyPrefix);

  const prevBtn = document.getElementById('prevBtn');
  if(prevBtn) prevBtn.onclick = () => { if(currentLessonIndex > 0){ currentLessonIndex--; render(); } };
  const nextBtn = document.getElementById('nextBtn');
  if(nextBtn) nextBtn.onclick = () => {
    if(currentLessonIndex < level.lessons.length - 1){ currentLessonIndex++; render(); }
    else { currentView = "exam"; render(); }
  };
}

function renderFlatLesson(){
  const track = TRACKS[currentTrackId];
  const lesson = track.lessons[currentLessonIndex];
  const doneCount = track.lessons.filter(l => isLessonDone(currentTrackId, l.id)).length;
  const pct = Math.round((doneCount / track.lessons.length) * 100);
  const t = I18N[currentLang];
  const title = tField(lesson, 'title');
  const trackTitle = currentLang === 'en' && track.title_en ? track.title_en : track.title;
  const keyPrefix = currentTrackId + '_' + lesson.id;

  const main = document.getElementById('mainPane');
  if(!main) return;
  main.innerHTML = `
    <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${pct}%"></div></div>
    ${previewBannerHtml(track, 0, currentLessonIndex)}
    <div class="lesson-eyebrow">${trackTitle} · ${t.lesson_of} ${currentLessonIndex + 1} ${t.of_word} ${track.lessons.length}</div>
    <h2 class="lesson-title">${title}</h2>
    ${renderMediaBlock(lesson)}
    ${lessonBodyHtml(lesson)}
    ${renderFlashcards(lesson)}
    ${renderLessonQuiz(lesson, currentTrackId, keyPrefix)}
    <div class="lesson-nav">
      <button class="btn-ghost" id="prevBtn" ${currentLessonIndex === 0 ? 'disabled style="opacity:.4;cursor:not-allowed;"' : ''}>← ${t.prev_lesson}</button>
      <button class="btn-primary" id="nextBtn" ${currentLessonIndex === track.lessons.length - 1 ? 'style="opacity:.6;"' : ''}>${isLessonDone(currentTrackId, lesson.id) ? t.next_lesson_done : t.next_lesson} →</button>
    </div>
    ${renderComments(keyPrefix)}
  `;
  markLessonDone(currentTrackId, lesson.id);
  buildSidebar();
  wireCommentForm(keyPrefix);
  wireLessonQuiz(lesson, currentTrackId, keyPrefix);

  const prevBtn = document.getElementById('prevBtn');
  if(prevBtn) prevBtn.onclick = () => { if(currentLessonIndex > 0){ currentLessonIndex--; render(); } };
  const nextBtn = document.getElementById('nextBtn');
  if(nextBtn) nextBtn.onclick = () => {
    if(currentLessonIndex < track.lessons.length - 1){ currentLessonIndex++; render(); }
  };
}

function levelName2(level){ return level ? level.name : ''; }

function renderExam(){
  const track = TRACKS[currentTrackId];
  const level = track.levels[currentLevelIndex];
  const t = I18N[currentLang];
  const main = document.getElementById('mainPane');
  if(!main) return;
  let html = `
    <div class="lesson-eyebrow">${currentLang==='en' && level.name_en ? level.name_en : level.name}</div>
    <h2 class="lesson-title">${t.exam_title}</h2>
    <p class="lesson-content" style="margin-bottom:20px;">${currentLang==='en' ? `Answer the following questions. You need at least ${level.exam.pass}% to pass and unlock the next level.` : `أجب عن الأسئلة التالية، وتحتاج ${level.exam.pass}% على الأقل للنجاح وفتح المستوى التالي.`}</p>
    <form id="examForm">
  `;
  if(level.exam && level.exam.questions) {
    level.exam.questions.forEach((q, qi) => {
      const qText = currentLang === 'en' && q.q_en ? q.q_en : q.q;
      const opts = currentLang === 'en' && q.options_en ? q.options_en : q.options;
      html += `<div class="exam-q"><h4>${qi+1}. ${qText}</h4>`;
      opts.forEach((opt, oi) => {
        html += `<label class="exam-opt" data-q="${qi}" data-o="${oi}"><input type="radio" name="q${qi}" value="${oi}"> ${opt}</label>`;
      });
      html += `</div>`;
    });
  }
  html += `</form><button class="btn-primary" id="submitExamBtn">${t.exam_submit}</button><div id="examResult"></div>`;
  main.innerHTML = html;
  buildSidebar();

  main.querySelectorAll('.exam-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const qi = opt.dataset.q;
      main.querySelectorAll(`.exam-opt[data-q="${qi}"]`).forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  const submitBtn = document.getElementById('submitExamBtn');
  if(submitBtn) {
    submitBtn.onclick = (e) => {
      e.preventDefault();
      let correct = 0;
      if(level.exam && level.exam.questions) {
        level.exam.questions.forEach((q, qi) => {
          const selected = main.querySelector(`.exam-opt[data-q="${qi}"].selected`);
          const selectedIdx = selected ? parseInt(selected.dataset.o) : -1;
          main.querySelectorAll(`.exam-opt[data-q="${qi}"]`).forEach(o => {
            const oi = parseInt(o.dataset.o);
            if(oi === q.correct) o.classList.add('correct');
            else if(oi === selectedIdx) o.classList.add('wrong');
          });
          if(selectedIdx === q.correct) correct++;
        });
      }
      const totalQ = (level.exam && level.exam.questions) ? level.exam.questions.length : 1;
      const scorePct = Math.round((correct / totalQ) * 100);
      const passed = scorePct >= level.exam.pass;
      if(passed) markExamPassed(level.id);
      const resultDiv = document.getElementById('examResult');
      const nextLevel = track.levels[currentLevelIndex + 1];
      const nextLevelName = nextLevel ? (currentLang==='en' && nextLevel.name_en ? nextLevel.name_en : nextLevel.name) : null;

      const passIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="passGradEx" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10B981" /><stop offset="100%" stop-color="#34D399" /></linearGradient></defs><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="url(#passGradEx)" stroke-width="1.8" fill="url(#passGradEx)" fill-opacity="0.2" stroke-linejoin="round"/></svg>`;
      const titleText = passed ? `${passIcon} ${currentLang==='en'?'Congratulations, you passed!':'مبروك، لقد اجتزت المستوى!'}` : `😕 ${currentLang==='en'?'Not quite there yet':'لم تحقيق النسبة المطلوبة بعد'}`;

      if(resultDiv) {
        resultDiv.innerHTML = `
          <div class="exam-result ${passed ? 'pass' : 'fail'}">
            <h3>${titleText}</h3>
            <div class="score">${correct} / ${totalQ} (${scorePct}%)</div>
            <p style="color:var(--text-dim);">${passed
              ? (nextLevel ? (currentLang==='en'?`${nextLevelName} is now unlocked.`:`تم فتح ${nextLevelName} الآن.`) : (currentLang==='en'?'You completed the whole track!':'لقد أكملت المسار بالكامل!'))
              : (currentLang==='en'?'Review the lessons and try again.':`أعد مراجعة دروس ${levelName2(level)} وحاول مرة أخرى.`)}</p>
            ${passed && nextLevel ? `<button class="btn-primary" style="margin-top:14px;" onclick="goToLesson(${currentLevelIndex+1}, 0)">${currentLang==='en'?'Start':'ابدأ'} ${nextLevelName}</button>` : ''}
            ${!passed ? `<button class="btn-ghost" style="margin-top:14px;" onclick="goToLesson(${currentLevelIndex}, 0)">${currentLang==='en'?'Review Lessons':'مراجعة الدروس'}</button>` : ''}
          </div>
        `;
      }
      submitBtn.style.display = 'none';
      buildSidebar();
    };
  }
}

function renderLockedState(track){
  const t = I18N[currentLang];
  const main = document.getElementById('mainPane');
  if(!main) return;
  main.innerHTML = `
    <div class="locked-card">
      <div class="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
  </defs>
  <rect x="5" y="11" width="14" height="10" rx="2" stroke="url(#lockGrad)" stroke-width="1.8" fill="url(#lockGrad)" fill-opacity="0.15"/>
  <path d="M8 11V7C8 4.79086 9.79086 3 12 3C13.8638 3 15.4299 4.27477 15.874 6" stroke="url(#lockGrad)" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="12" cy="16" r="1" fill="url(#lockGrad)"/>
</svg>
</div>
      <h3>${currentLang==='en' ? 'Log in to keep learning' : 'سجّل الدخول لمتابعة التعلّم'}</h3>
      <p>${currentLang==='en'
        ? 'You can freely browse lesson titles and the first lesson of this track. Reading further lessons or taking the exam requires logging in.'
        : 'يمكنك تصفح أسماء الدروس، وقراءة الدرس الأول من هذا المسار مجاناً. أما بقية الدروس والاختبار فتتطلب تسجيل دخول أولاً.'}</p>
      <div style="display:flex;gap:10px;justify-content:center;">
        <a href="auth.html" class="btn-primary">${currentLang==='en' ? 'Log In / Sign Up' : 'تسجيل الدخول / إنشاء حساب'}</a>
        <button class="btn-ghost" onclick="goToLesson(0,0)">${currentLang==='en' ? 'Try Free Lesson' : 'جرّب الدرس المجاني'}</button>
      </div>
    </div>
  `;
  buildSidebar();
}

function render(){
  if(typeof TRACKS === 'undefined' || !TRACKS[currentTrackId]) return;
  const track = TRACKS[currentTrackId];
  if(requiresLogin(track, currentLevelIndex, currentLessonIndex) && currentView !== 'exam'){
    renderLockedState(track);
    return;
  }
  if(currentView === 'exam' && !userIsLoggedIn){
    renderLockedState(track);
    return;
  }
  if(track.type === 'leveled'){
    if(currentView === "exam") renderExam(); else renderLeveledLesson();
  } else {
    renderFlatLesson();
  }
}

/* ===================== Mobile sidebar toggle ===================== */
const sidebarToggleMobile = document.getElementById('sidebarToggleMobile');
if(sidebarToggleMobile) {
  sidebarToggleMobile.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    if(sidebar) sidebar.classList.toggle('mobile-visible');
  });
}

/* ===================== Boot ===================== */
Promise.resolve(checkLoginStatus()).then(() => {
  buildEduDropdown();
  applyLang();
  if(currentTrackId && typeof TRACKS !== 'undefined' && TRACKS[currentTrackId]){
    const hubWrap = document.getElementById('hubWrap');
    if(hubWrap) hubWrap.style.display = 'none';
    const trackWrap = document.getElementById('trackWrap');
    if(trackWrap) trackWrap.style.display = 'grid';
    
    const track = TRACKS[currentTrackId];
    const trackTitle = currentLang === 'en' && track.title_en ? track.title_en : track.title;
    
    const pEyebrow = document.getElementById('pageEyebrow');
    if(pEyebrow) {
      pEyebrow.textContent = track.type === 'leveled'
        ? (currentLang==='en' ? 'Full Learning Path' : 'مسار تعليمي متكامل')
        : (currentLang==='en' ? 'Learning Track' : 'مسار تعليمي');
    }
    
    const pTitle = document.getElementById('pageMainTitle');
    if(pTitle) pTitle.textContent = (track.icon || '📚') + ' ' + trackTitle;
    
    const pSub = document.getElementById('pageSubtitle');
    if(pSub) {
      pSub.textContent = track.type === 'leveled'
        ? (currentLang==='en' ? '3 levels, each with its own lessons and level exam.' : '3 مستويات، كل مستوى له دروسه واختبار اجتياز خاص به.')
        : (currentLang==='en' ? `${track.lessons ? track.lessons.length : 0} lessons — complete them in any order you like.` : `${track.lessons ? track.lessons.length : 0} دروس — أكملها بالترتيب حسب رغبتك.`);
    }
    
    buildSidebar();
    render();
  } else {
    const hubWrap = document.getElementById('hubWrap');
    if(hubWrap) hubWrap.style.display = 'block';
    const trackWrap = document.getElementById('trackWrap');
    if(trackWrap) trackWrap.style.display = 'none';
    renderHub();
  }
});
