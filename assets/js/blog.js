// ARTICLE DATA: the single place to register articles. Add new ones at the top.
// editorPick:true  -> appears in Editor's Picks (set by hand; no analytics are implied)
// featured:true    -> the Featured Story on the Home page (use one)
// parent:"slug"    -> makes this a sub-article and shows "Back to Main Article"
var articles = [
 {
  "title": "Why Wellness Is More Than Just Physical Health",
  "slug": "why-wellness-is-more-than-physical-health",
  "category": "wellness",
  "excerpt": "Good health matters, but a well-lived life rests on more than a strong body. Here is a wider way to look at wellbeing.",
  "image": "assets/images/articles/why-wellness-is-more-than-physical-health.svg",
  "alt": "Calm morning light over a notebook and a cup of tea",
  "date": "2026-10-06",
  "updatedDate": "2026-10-06",
  "readingTime": "5 min read",
  "url": "articles/why-wellness-is-more-than-physical-health/",
  "featured": true,
  "editorPick": true,
  "parent": "",
  "tags": [
   "wellness",
   "balance",
   "habits"
  ]
 },
 {
  "title": "Why Financial Wellbeing Is Part of a Healthy Life",
  "slug": "financial-wellbeing-and-a-healthy-life",
  "category": "financial-wellness",
  "excerpt": "Money is not everything, but financial stress touches sleep, mood and relationships. Why calm money habits belong in a wellness life.",
  "image": "assets/images/articles/financial-wellbeing-and-a-healthy-life.svg",
  "alt": "Simple household budget notebook with a pen and calculator",
  "date": "2026-10-05",
  "updatedDate": "2026-10-05",
  "readingTime": "5 min read",
  "url": "articles/financial-wellbeing-and-a-healthy-life/",
  "featured": false,
  "editorPick": true,
  "parent": "",
  "tags": [
   "money",
   "habits",
   "balance"
  ]
 },
 {
  "title": "Healthy Relationships Begin With Self-Respect",
  "slug": "healthy-relationships-begin-with-self-respect",
  "category": "relationship-wellness",
  "excerpt": "How we treat ourselves quietly shapes how we let others treat us. Notes on respect, boundaries and kinder connection.",
  "image": "assets/images/articles/healthy-relationships-begin-with-self-respect.svg",
  "alt": "Two cups of tea on a table between two chairs",
  "date": "2026-10-04",
  "updatedDate": "2026-10-04",
  "readingTime": "5 min read",
  "url": "articles/healthy-relationships-begin-with-self-respect/",
  "featured": false,
  "editorPick": true,
  "parent": "",
  "tags": [
   "relationships",
   "boundaries",
   "self-respect"
  ]
 },
 {
  "title": "Small Daily Habits That Can Support a Happier Life",
  "slug": "small-daily-habits-for-a-happier-life",
  "category": "mind-emotional-wellness",
  "excerpt": "Happiness rarely arrives in one big moment. Small, repeatable habits can make ordinary days feel lighter.",
  "image": "assets/images/articles/small-daily-habits-for-a-happier-life.svg",
  "alt": "Sunlit window with a plant and an open journal",
  "date": "2026-10-03",
  "updatedDate": "2026-10-03",
  "readingTime": "4 min read",
  "url": "articles/small-daily-habits-for-a-happier-life/",
  "featured": false,
  "editorPick": false,
  "parent": "",
  "tags": [
   "habits",
   "happiness",
   "wellness"
  ]
 },
 {
  "title": "What Does a Truly Meaningful Life Look Like?",
  "slug": "what-does-a-meaningful-life-look-like",
  "category": "meaningful-life",
  "excerpt": "Meaning looks different for everyone. A reflective look at values, purpose and living with intention.",
  "image": "assets/images/articles/what-does-a-meaningful-life-look-like.svg",
  "alt": "Path through a quiet forest at sunrise",
  "date": "2026-10-02",
  "updatedDate": "2026-10-02",
  "readingTime": "6 min read",
  "url": "articles/what-does-a-meaningful-life-look-like/",
  "featured": false,
  "editorPick": true,
  "parent": "",
  "tags": [
   "purpose",
   "values",
   "balance"
  ]
 }
];
var categories = [
 {
  "slug": "wellness",
  "name": "Wellness",
  "short": "Wellness",
  "desc": "Physical health, healthy habits, food, sleep, exercise and daily wellbeing."
 },
 {
  "slug": "financial-wellness",
  "name": "Financial Wellness",
  "short": "Financial Wellness",
  "desc": "Money habits, saving, discipline, prosperity and responsible financial thinking."
 },
 {
  "slug": "mind-emotional-wellness",
  "name": "Mind & Emotional Wellness",
  "short": "Mind & Emotions",
  "desc": "Happiness, emotional balance, confidence, stress and self-awareness."
 },
 {
  "slug": "relationship-wellness",
  "name": "Relationship Wellness",
  "short": "Relationships",
  "desc": "Family, marriage, friendship, love, communication and boundaries."
 },
 {
  "slug": "self-respect-personal-growth",
  "name": "Self-Respect & Personal Growth",
  "short": "Self-Respect",
  "desc": "Self-worth, discipline, confidence, boundaries and character."
 },
 {
  "slug": "spiritual-wellness",
  "name": "Spiritual Wellness",
  "short": "Spirituality",
  "desc": "Meditation, devotion, inner peace, meaning and awareness."
 },
 {
  "slug": "healthy-living",
  "name": "Healthy Living",
  "short": "Healthy Living",
  "desc": "Lifestyle, routines, food, movement, sleep and everyday habits."
 },
 {
  "slug": "meaningful-life",
  "name": "Meaningful Life",
  "short": "Meaningful Life",
  "desc": "Purpose, fulfilment, wisdom, values and living intentionally."
 }
];

// ---- Rendering (reads the data above; usually no edits needed) ----
(function(){
var D=document.body.dataset,R=D.root||'',pg=D.page;
function $(i){return document.getElementById(i);}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function cat(s){for(var i=0;i<categories.length;i++)if(categories[i].slug===s)return categories[i];return {slug:s,name:s,short:s};}
function fdate(s){var m=['January','February','March','April','May','June','July','August','September','October','November','December'],p=s.split('-');return m[+p[1]-1]+' '+(+p[2])+', '+p[0];}
function newest(L){return (L||articles).slice().sort(function(a,b){return a.date<b.date?1:a.date>b.date?-1:0;});}
function find(s){for(var i=0;i<articles.length;i++)if(articles[i].slug===s)return articles[i];}
function put(id,h){var e=$(id);if(e)e.innerHTML=h;}
function card(a){var c=cat(a.category),u=R+a.url;return '<article class="card"><a href="'+u+'" tabindex="-1" aria-hidden="true"><img src="'+R+a.image+'" alt="'+esc(a.alt)+'" width="1200" height="630" loading="lazy" decoding="async"></a><div class="cb"><a class="tag" href="'+R+'categories/'+c.slug+'.html">'+esc(c.short)+'</a><h3><a href="'+u+'">'+esc(a.title)+'</a></h3><p>'+esc(a.excerpt)+'</p><p class="meta">'+fdate(a.date)+' &middot; '+esc(a.readingTime)+'</p><a class="more" href="'+u+'">Read More<span class="sr"> about '+esc(a.title)+'</span></a></div></article>';}
function item(a){return '<li><a href="'+R+a.url+'">'+esc(a.title)+'</a><span class="meta">'+esc(cat(a.category).short)+'</span></li>';}
function related(a,n){var o=newest().filter(function(x){return x.slug!==a.slug;}).map(function(x){var s=x.category===a.category?10:0;x.tags.forEach(function(t){if(a.tags.indexOf(t)>-1)s+=3;});return {x:x,s:s};});
o.sort(function(p,q){return q.s-p.s;});return o.slice(0,n).map(function(v){return v.x;});}
function picks(n,ex){return newest().filter(function(x){return x.editorPick&&x.slug!==ex;}).slice(0,n);}
if(pg==='home'){var f=articles.filter(function(a){return a.featured;})[0]||newest()[0];
 if(f){var c=cat(f.category),u=R+f.url;put('featured','<article class="feat"><a href="'+u+'"><img src="'+R+f.image+'" alt="'+esc(f.alt)+'" width="1200" height="630" decoding="async"></a><div><a class="tag" href="'+R+'categories/'+c.slug+'.html">'+esc(c.short)+'</a><h3><a href="'+u+'">'+esc(f.title)+'</a></h3><p>'+esc(f.excerpt)+'</p><p class="meta">'+fdate(f.date)+' &middot; '+esc(f.readingTime)+'</p><a class="btn" href="'+u+'">Read Article</a></div></article>');
 put('latest',newest().filter(function(a){return a.slug!==f.slug;}).slice(0,3).map(card).join(''));put('picks',picks(3,f.slug).map(item).join(''));}}
if(pg==='blog'){var sel='by',q='',shown=12,STEP=12,box=$('results'),more=$('more'),cnt=$('count');
 function blocks(){return categories.map(function(c){var L=newest(articles.filter(function(a){return a.category===c.slug;})),u=R+'categories/'+c.slug+'.html';
  return '<section class="cblock"><div class="chead"><h2><a href="'+u+'">'+esc(c.name)+'</a></h2><a class="vall" href="'+u+'">View All '+esc(c.name)+' &rarr;</a></div>'+(L.length?'<div class="grid">'+L.slice(0,3).map(card).join('')+'</div>':'')+(L.length<3?'<p class="soon">More articles coming soon.</p>':'')+'</section>';}).join('');}
 function draw(){if(sel==='by'&&!q){box.className='';box.innerHTML=blocks();more.hidden=true;cnt.textContent='';return;}
  var L=newest().filter(function(a){return (sel==='by'||sel==='all'||a.category===sel)&&(a.title+' '+a.excerpt+' '+a.tags.join(' ')).toLowerCase().indexOf(q)>-1;});
  box.className='grid';box.innerHTML=L.length?L.slice(0,shown).map(card).join(''):'<p>No articles match. Try a different search or category.</p>';more.hidden=L.length<=shown;cnt.textContent=L.length+(L.length===1?' article':' articles');}
 $('q').addEventListener('input',function(e){q=e.target.value.toLowerCase().trim();shown=STEP;draw();});
 [].forEach.call(document.querySelectorAll('.chip'),function(b){b.addEventListener('click',function(){[].forEach.call(document.querySelectorAll('.chip'),function(x){x.classList.remove('on');});b.classList.add('on');sel=b.dataset.cat;shown=STEP;draw();});});
 more.addEventListener('click',function(){shown+=STEP;draw();});draw();}
if(pg==='category'){var L=newest(articles.filter(function(a){return a.category===D.cat;}));
 put('cat-grid',L.length?L.map(card).join(''):'<p class="soon">More articles coming soon. <a href="'+R+'blog.html">Browse all articles</a>.</p>');}
if(pg==='article'){var a=find(D.slug);if(a){var rel=related(a,5),all=newest(),i=all.indexOf(a),prev=all[i+1],next=all[i-1];
 put('related',rel.map(item).join(''));put('recent',all.filter(function(x){return x!==a;}).slice(0,5).map(item).join(''));put('picks',picks(3,a.slug).map(item).join(''));put('continue',rel.slice(0,3).map(card).join(''));
 put('pn',(prev?'<a href="'+R+prev.url+'">&larr; Previous Article<br><strong>'+esc(prev.title)+'</strong></a>':'<span></span>')+(next?'<a href="'+R+next.url+'">Next Article &rarr;<br><strong>'+esc(next.title)+'</strong></a>':'<span></span>'));
 var par=a.parent&&find(a.parent);if(par)[].forEach.call(document.querySelectorAll('.parentlink'),function(e){e.innerHTML='<a href="'+R+par.url+'">&larr; Back to Main Article: '+esc(par.title)+'</a>';});}}
})();
