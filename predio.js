/* Predio da empresa do Otavio: monta o menu dentro de #eo-root */
(function(){var R=document.getElementById("eo-root");if(!R){R=document.createElement("div");document.body.appendChild(R)}R.innerHTML="<h2 class=\"sr-only\">A empresa do Otávio: foto de um prédio de vidro à noite, um setor por andar. Ao passar a seta num andar, abre um balão com o que o setor faz e os botões das tarefas, que mandam o pedido para a conversa.</h2>\n<style>\n.eo{position:relative;border-radius:14px;overflow:hidden;background:#05060d;line-height:0}\n.eo img{width:100%;height:auto;display:block}\n.eo svg{position:absolute;inset:0;width:100%;height:100%}\n.eo .fz{fill:transparent;stroke:transparent;cursor:pointer;transition:fill .25s,stroke .25s}\n.eo .fz.on{fill:rgba(175,169,236,.10);stroke:#CECBF6;stroke-width:2.5}\n.eo .sg rect{fill:rgba(8,8,16,.62);stroke:rgba(175,169,236,.45);stroke-width:1}\n.eo .sg text{fill:#ecebfa;font:500 17px var(--font-sans);letter-spacing:.14em}\n.eo .tk{opacity:0;animation:tk 9s ease-in-out infinite}\n@keyframes tk{0%,58%{opacity:0}64%,90%{opacity:1}96%,100%{opacity:0}}\n.eo-bl{position:absolute;width:250px;line-height:1.35;background:rgba(12,11,24,.97);border:1px solid #534AB7;border-radius:12px;padding:12px 12px 10px;color:#ecebfa;opacity:0;pointer-events:none;transform:translateY(4px);transition:opacity .2s,transform .2s;z-index:3}\n.eo-bl.on{opacity:1;pointer-events:auto;transform:none}\n.eo-bl em{display:block;font-style:normal;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#AFA9EC}\n.eo-bl b{display:block;font-family:var(--font-voice);font-weight:500;font-size:17px;margin:2px 0 4px}\n.eo-bl p{margin:0 0 9px;font-size:12px;color:#e2e0f7!important}\n.eo-bl .bt{display:flex;flex-wrap:wrap;gap:6px}\n.eo-bl button{all:unset;box-sizing:border-box;cursor:pointer;font-size:12.5px;font-weight:500;padding:6px 10px;border:1px solid #7F77DD!important;border-radius:8px;background:#2a2556!important;color:#ffffff!important;-webkit-text-fill-color:#ffffff!important;opacity:1!important;transition:border-color .15s,background .15s}\n.eo-bl button:hover,.eo-bl button:focus-visible{border-color:#ffffff!important;background:#3C3489!important}\n.eo-bl button::after{content:\" ↗\";color:#CECBF6;-webkit-text-fill-color:#CECBF6}\n.eo-msg{min-height:16px;margin:8px 0 0;text-align:center;font-size:12.5px;color:#AFA9EC}\n.eo-msg kbd{font-family:inherit;border:1px solid #3C3489;border-radius:5px;padding:0 5px}\n@media (prefers-reduced-motion:reduce){.eo .tk{animation:none}}\n</style>\n<div class=\"eo\" id=\"eo\">\n<img id=\"eoimg\" alt=\"\" src=\"https://cdn.jsdelivr.net/gh/otaviodossanto19-ship-it/empresa-imagens@v3/predio.jpg\" onerror=\"this.closest('.eo').style.minHeight='200px';document.getElementById('eomsg').textContent='A foto do prédio não carregou. Os andares continuam funcionando: passe a seta.'\">\n<svg id=\"eosv\" viewBox=\"0 0 1024 1174\" aria-hidden=\"true\">\n<defs><filter id=\"nb\" x=\"-30%\" y=\"-30%\" width=\"160%\" height=\"160%\"><feGaussianBlur stdDeviation=\"3.2\" result=\"b\"/><feMerge><feMergeNode in=\"b\"/><feMergeNode in=\"b\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter>\n<g id=\"brn\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M49 14C40 8 26 10 23 22C13 24 9 36 14 44C7 50 8 64 17 68C17 80 30 88 41 84C44 89 48 90 49 89Z\"/><path d=\"M31 27C37 29 39 35 35 40M20 47C27 45 33 49 31 56M24 69C30 66 36 69 37 75M39 52C43 56 44 62 41 66\"/><path d=\"M49 22V89\"/></g></defs>\n<g id=\"cube\"></g>\n<g id=\"zones\"></g>\n<g id=\"signs\"></g>\n<g id=\"talk\"></g>\n</svg>\n<div class=\"eo-bl\" id=\"eobl\" role=\"dialog\" aria-live=\"polite\"></div>\n</div>\n<p class=\"eo-msg\" id=\"eomsg\" role=\"status\" aria-live=\"polite\"></p>";
(()=>{
const PAINEL='https://claude.ai/artifact/DJrkpzhBRafPkSKiH8cdKQ';
const XL=290,XC=705,XR=785;
const LN={roof:[245,212,276],l0:[294,268,328],l1:[421,405,440],l2:[545,541,551],l3:[671,677,663],l4:[795,812,775],l5:[919,948,886],base:[1040,1069,1008]};
const yF=(l,x)=>LN[l][0]+(LN[l][1]-LN[l][0])*(x-XL)/(XC-XL);
const FL=[
{k:'adm',t:'1º andar',n:'Setor de Administração',sg:'ADMINISTRAÇÃO',a:'l5',b:'base',d:'A recepção da empresa: abre o dia, mede os números e guarda tudo no cérebro.',bt:[
 ['Abrir o dia','bom dia: lê o Onde paramos.md e abre o dia, com o resumo e as prioridades de hoje.'],
 ['Placar da semana','placar: lê os números do @deumsalaoprooutro (só leitura, conferindo antes que o Chrome está na minha conta e não na da Talyta) e me diz sem rodeio o que funcionou, o que não funcionou, por quê e o que trocar. Grava em Cerebro\\placar.md.'],
 ['Fechar a sessão','fechar: consolida a sessão no cérebro e atualiza o Onde paramos.md.']]},
{k:'cri',t:'2º andar',n:'Setor de Criação de Conteúdo',sg:'CRIAÇÃO DE CONTEÚDO',a:'l4',b:'l5',d:'Reels, stories, posts, textos e figurinhas. Tudo passa pelo Gestor Sênior antes de chegar em você.',bt:[
 ['Novo Reels','Quero fazer um Reels falado. Usa o agente reels: pega o tema pelo cérebro (semana, estratégia, o que falta postar) e me entrega o roteiro com até 4 falas e como filmar, na minha voz. Se eu mandar um tema ou referência, usa ele. O Gestor Sênior aprova antes de me mostrar.'],
 ['Reels do Radar','Reels de tela do Radar: usa o agente sistemas para preparar a tela com dados de exemplo e o agente reels para gravar e editar, na minha voz. O Gestor Sênior aprova antes de me mostrar.'],
 ['Stories de hoje','Quero os stories de hoje. Monta a sequência do dia com o estrategista, os textos com o redator e as figurinhas com o agente figurinhas, e me diz o que eu preciso filmar ou fotografar. O Gestor Sênior aprova antes de me mostrar.'],
 ['Post ou carrossel','Quero um post de feed (foto ou carrossel de texto). Usa o agente designer com o redator: escolhe o tema pelo cérebro e me entrega pronto, com a legenda. Se faltar foto, me diz qual e onde colocar. O Gestor Sênior aprova antes de me mostrar.'],
 ['Texto ou legenda','Quero um texto na minha voz (legenda, texto na tela ou roteiro). Usa o agente redator e me pergunta o que é. O Gestor Sênior aprova antes de me mostrar.'],
 ['Figurinhas','figurinhas: mostra as prévias de Design\\frases\\ e, se eu pedir mais, o agente figurinhas cria.'],
 ['Chegou material','Chegaram fotos ou vídeos no meu iCloud (C:\\Users\\User\\Pictures\\iCloud Photos\\Photos). Pega os mais novos, me mostra a seleção e diz para qual post cada um serve.']]},
{k:'sis',t:'3º andar',n:'Setor de Sistemas',sg:'SISTEMAS',a:'l3',b:'l4',d:'O Radar e os sistemas que a empresa vai vender. Sempre com dados de exemplo.',bt:[
 ['Radar','Usa o agente sistemas: abre o Radar e me pergunta o que eu quero mexer ou mostrar. Sempre com dados de exemplo.']]},
{k:'est',t:'4º andar',n:'Setor de Estratégia',sg:'ESTRATÉGIA',a:'l2',b:'l3',d:'O estrategista: as ideias do dia, a semana planejada e o rumo do perfil.',bt:[
 ['Ideias de hoje','Usa o agente estrategista: lê a estratégia, as decisões e o placar e me diz as ideias de hoje para o perfil, cada uma com gancho, CTA e o material que falta.'],
 ['Montar a semana','monta a semana: o estrategista planeja a semana que vem em Conteudo\\semanas\\<semana>\\SEMANA.md, os agentes produzem as peças, o Gestor Sênior aprova tudo com nota mínima 8,5 e você me mostra a semana inteira para eu aprovar peça por peça.']]},
{k:'ges',t:'5º andar',n:'Setor do Gestor Sênior',sg:'GESTOR SÊNIOR',a:'l1',b:'l2',d:'Aprova tudo o que a empresa faz, com nota mínima 8,5. Abaixo disso, a peça volta para o agente refazer. Responde só a você.',bt:[
 ['Revisar uma peça','Usa o agente gestor-senior para revisar a peça que eu vou mandar agora: nota de 0 a 10 pelo checklist. Com 8,5 ou mais, APROVADO; abaixo disso, devolve ao agente que fez, com as correções, e revisa de novo antes de me mostrar.'],
 ['O que está esperando','Usa o agente gestor-senior: me diz o que está em produção, o que já foi aprovado com a nota de cada peça e o que está esperando o meu "pode fazer".']]},
{k:'ceo',t:'Cobertura',n:'Sala do CEO',sg:'CEO',a:'roof',b:'l1',d:'Otávio. A ideia da empresa é sua, e a última palavra também: nada sai sem o seu "pode fazer".',bt:[
 ['Visão da empresa','Me mostra a visão da empresa hoje: o que cada setor está fazendo, o que o Gestor Sênior aprovou e o que está esperando o meu "pode fazer".'],
 ['Painel completo',null,PAINEL]]}
];
const NS='http://www.w3.org/2000/svg',el=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e};
const zones=document.getElementById('zones'),signs=document.getElementById('signs'),talk=document.getElementById('talk'),cube=document.getElementById('cube');
const bl=document.getElementById('eobl'),eo=document.getElementById('eo'),msg=document.getElementById('eomsg');
const x0=420,x1=588,H=150,sd=26,ss=.42,yb1=yF('roof',x1+sd)-sd*ss-6,yb0=yb1+(yF('roof',x0)-yF('roof',x1));
[[x0+18],[x1-18],[x1+sd-6]].forEach(([px],n)=>{const top=n<2?yb0+(yb1-yb0)*(px-x0)/(x1-x0):yb1+sd*ss*(px-x1)/sd;el('rect',{x:px-4,y:top-2,width:8,height:yF('roof',px)+3-top,fill:n<2?'#101018':'#07070c'},cube);el('rect',{x:px-4,y:yF('roof',px)+3,width:8,height:yF('l0',px)-yF('roof',px)-6,fill:'#0b0b12',opacity:.5},cube)});
el('polygon',{points:`${x1},${yb1} ${x1+sd},${yb1+sd*ss} ${x1+sd},${yb1+sd*ss-H} ${x1},${yb1-H}`,fill:'#08080e',stroke:'#24223a','stroke-width':1.5},cube);
el('polygon',{points:`${x0},${yb0} ${x1},${yb1} ${x1},${yb1-H} ${x0},${yb0-H}`,fill:'#0c0c14',stroke:'#2c2a44','stroke-width':1.5},cube);
const glow=(m,w)=>{const g=el('g',{transform:m,filter:'url(#nb)'},cube);const u=el('g',{stroke:'#c9bfff','stroke-width':w},g);u.innerHTML='<use href="#brn"/><use href="#brn" transform="translate(98 0) scale(-1 1)"/>'};
const fa=(x1-x0)/100,fb=(yb1-yb0)/100;glow(`matrix(${fa*.72},${fb*.72},0,${H/100*.72},${x0+(x1-x0)*.14},${yb0-H+H*.14+fb*14})`,3.2);
glow(`matrix(${sd/100*.7},${sd*ss/100*.7},0,${H/100*.7},${x1+sd*.15},${yb1-H+H*.15+sd*ss*.15})`,4.5);
FL.forEach((f,i)=>{const a=LN[f.a],b=LN[f.b];
 const pts=`${XL},${a[0]} ${XC},${a[1]} ${XR},${a[2]} ${XR},${b[2]} ${XC},${b[1]} ${XL},${b[0]}`;
 const z=el('polygon',{points:pts,class:'fz','data-i':i},zones);
 const sx=XL+44,sy=yF(f.b,sx)-12,ang=Math.atan2(b[1]-b[0],XC-XL)*180/Math.PI,w=f.sg.length*12.4+22;
 const g=el('g',{class:'sg',transform:`translate(${sx} ${sy}) rotate(${ang})`},signs);el('rect',{x:0,y:-22,width:w,height:28,rx:4},g);const tx=el('text',{x:11,y:-3},g);tx.textContent=f.sg;
 z.addEventListener('mouseenter',()=>abrir(i));z.addEventListener('mouseleave',fechaDepois);z.addEventListener('click',()=>abrir(i));});
[[468,592,0],[540,592,3],[650,1010,1.5],[470,870,4.5],[480,706,6]].forEach(([x,y,d])=>{const g=el('g',{class:'tk',style:`animation-delay:${d}s`},talk);el('rect',{x:x-18,y:y-14,width:36,height:20,rx:10,fill:'#f4f2ff'},g);el('path',{d:`M${x-8} ${y+5}l-4 7l10-7z`,fill:'#f4f2ff'},g);[-8,0,8].forEach(o=>el('circle',{cx:x+o,cy:y-4,r:2.4,fill:'#3C3489'},g))});
let cur=-1,tmo=null;
function abrir(i){clearTimeout(tmo);if(cur===i&&bl.classList.contains('on'))return;cur=i;const f=FL[i];
 zones.querySelectorAll('.fz').forEach(z=>z.classList.toggle('on',+z.dataset.i===i));
 bl.innerHTML=`<em>${f.t}</em><b>${f.n}</b><p>${f.d}</p><div class="bt">${f.bt.map((b,j)=>`<button data-j="${j}">${b[0]}</button>`).join('')}</div>`;
 bl.querySelectorAll('button').forEach(bt=>bt.addEventListener('click',()=>pedir(f,f.bt[+bt.dataset.j])));
 const r=eo.getBoundingClientRect(),k=r.width/1024,mid=(yF(f.a,XR)+LN[f.b][2])/2*k;
 bl.style.left=Math.min(r.width-260,XR*k-70)+'px';bl.classList.add('on');
 const bh=bl.offsetHeight;bl.style.top=Math.max(8,Math.min(r.height-bh-8,mid-bh/2))+'px'}
function fechaDepois(){clearTimeout(tmo);tmo=setTimeout(()=>{bl.classList.remove('on');zones.querySelectorAll('.fz').forEach(z=>z.classList.remove('on'));cur=-1},450)}
bl.addEventListener('mouseenter',()=>clearTimeout(tmo));bl.addEventListener('mouseleave',fechaDepois);
function copiar(t){try{navigator.clipboard.writeText(t).catch(()=>{})}catch(e){}try{const a=document.createElement('textarea');a.value=t;a.style.cssText='position:absolute;left:-9999px';document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}catch(e){}}
function pedir(f,b){const nome=b[0];if(b[2]){try{openLink(b[2]);msg.innerHTML=`<b>${nome}</b>: abrindo o painel.`}catch(e){msg.textContent=b[2]}return}
 let erro=0;try{const r=sendPrompt(b[1]);if(r&&r.then)r.catch(()=>{msg.innerHTML=`<b>${nome}</b>: o app recusou. Está copiado: <kbd>Ctrl</kbd>+<kbd>V</kbd> e <kbd>Enter</kbd>.`})}catch(e){erro=1}
 setTimeout(()=>copiar(b[1]),300);
 msg.innerHTML=erro?`<b>${nome}</b>: o app recusou. Está copiado: <kbd>Ctrl</kbd>+<kbd>V</kbd> e <kbd>Enter</kbd>.`:`<b>${nome}</b>: pedido enviado ao ${f.n}.`}
})();
})();
