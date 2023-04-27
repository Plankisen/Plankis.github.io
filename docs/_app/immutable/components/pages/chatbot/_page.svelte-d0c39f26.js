import{S as M,i as F,s as $,k as _,a as K,l as x,m as D,h as k,c as Y,n as P,b as C,D as W,L,M as j,B as S,N as q,q as E,r as A,u as T}from"../../../chunks/index-6c645415.js";import{p as B}from"../../../chunks/parse-c28c2630.js";import{d as I}from"../../../chunks/singletons-71757e84.js";/* empty css                               */I.disable_scroll_handling;I.goto;const G=I.invalidate,N=I.invalidateAll;I.prefetch;I.prefetch_routes;const Q=I.before_navigate;I.after_navigate;const O=I.apply_action;function U(o){const e=JSON.parse(o);return e.data&&(e.data=B(e.data)),e}function V(o,e=()=>{}){const s=async({action:n,result:h,reset:c})=>{h.type==="success"&&(c!==!1&&HTMLFormElement.prototype.reset.call(o),await N()),(location.origin+location.pathname===n.origin+n.pathname||h.type==="redirect"||h.type==="error")&&O(h)};async function y(n){var g,r,p,w,b;n.preventDefault();const h=new URL((g=n.submitter)!=null&&g.hasAttribute("formaction")?n.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(o).action),c=new FormData(o),f=(r=n.submitter)==null?void 0:r.getAttribute("name");f&&c.append(f,(w=(p=n.submitter)==null?void 0:p.getAttribute("value"))!=null?w:"");const u=new AbortController;let i=!1;const d=(b=await e({action:h,cancel:()=>i=!0,controller:u,data:c,form:o}))!=null?b:s;if(i)return;let t;try{const v=await fetch(h,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:c,signal:u.signal});t=U(await v.text())}catch(v){if((v==null?void 0:v.name)==="AbortError")return;t={type:"error",error:v}}d({action:h,data:c,form:o,update:v=>s({action:h,result:t,reset:v==null?void 0:v.reset}),result:t,get type(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get location(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get error(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")}})}return HTMLFormElement.prototype.addEventListener.call(o,"submit",y),{destroy(){HTMLFormElement.prototype.removeEventListener.call(o,"submit",y)}}}var z={};z.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];z.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];z.elizaQuits=["bye","goodbye","done","exit","quit"];z.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];z.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];z.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};z.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];z.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var a=z;function m(o){this.noRandom=!!o,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}m.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var o=0;o<a.elizaKeywords.length;o++){this.lastchoice[o]=[];for(var e=a.elizaKeywords[o][2],s=0;s<e.length;s++)this.lastchoice[o][s]=-1}};m.prototype._dataParsed=!1;m.prototype._init=function(){var o={};if(a.elizaSynons&&typeof a.elizaSynons=="object")for(var e in a.elizaSynons)o[e]="("+e+"|"+a.elizaSynons[e].join("|")+")";(!a.elizaKeywords||typeof a.elizaKeywords.length>"u")&&(a.elizaKeywords=[["###",0,[["###",[]]]]]);for(var s=/@(\S+)/,y=/(\S)\s*\*\s*(\S)/,n=/^\s*\*\s*(\S)/,h=/(\S)\s*\*\s*$/,c=/^\s*\*\s*$/,f=/\s+/g,u=0;u<a.elizaKeywords.length;u++){var i=a.elizaKeywords[u][2];a.elizaKeywords[u][3]=u;for(var e=0;e<i.length;e++){var l=i[e];if(l[0].charAt(0)=="$"){for(var d=1;l[0].charAt[d]==" ";)d++;l[0]=l[0].substring(d),l[2]=!0}else l[2]=!1;for(var t=s.exec(l[0]);t;){var g=o[t[1]]?o[t[1]]:t[1];l[0]=l[0].substring(0,t.index)+g+l[0].substring(t.index+t[0].length),t=s.exec(l[0])}if(c.test(l[0]))l[0]="\\s*(.*)\\s*";else{if(t=y.exec(l[0]),t){for(var r="",p=l[0];t;)r+=p.substring(0,t.index+1),t[1]!=")"&&(r+="\\b"),r+="\\s*(.*)\\s*",t[2]!="("&&t[2]!="\\"&&(r+="\\b"),r+=t[2],p=p.substring(t.index+t[0].length),t=y.exec(p);l[0]=r+p}if(t=n.exec(l[0]),t){var r="\\s*(.*)\\s*";t[1]!=")"&&t[1]!="\\"&&(r+="\\b"),l[0]=r+l[0].substring(t.index-1+t[0].length)}if(t=h.exec(l[0]),t){var r=l[0].substring(0,t.index+1);t[1]!="("&&(r+="\\b"),l[0]=r+"\\s*(.*)\\s*"}}l[0]=l[0].replace(f,"\\s+"),f.lastIndex=0}}if(a.elizaKeywords.sort(this._sortKeywords),m.prototype.pres={},m.prototype.posts={},a.elizaPres&&a.elizaPres.length){for(var w=new Array,e=0;e<a.elizaPres.length;e+=2)w.push(a.elizaPres[e]),m.prototype.pres[a.elizaPres[e]]=a.elizaPres[e+1];m.prototype.preExp=new RegExp("\\b("+w.join("|")+")\\b")}else m.prototype.preExp=/####/,m.prototype.pres["####"]="####";if(a.elizaPosts&&a.elizaPosts.length){for(var w=new Array,e=0;e<a.elizaPosts.length;e+=2)w.push(a.elizaPosts[e]),m.prototype.posts[a.elizaPosts[e]]=a.elizaPosts[e+1];m.prototype.postExp=new RegExp("\\b("+w.join("|")+")\\b")}else m.prototype.postExp=/####/,m.prototype.posts["####"]="####";(!a.elizaQuits||typeof a.elizaQuits.length>"u")&&(a.elizaQuits=[]),m.prototype._dataParsed=!0};m.prototype._sortKeywords=function(o,e){return o[1]>e[1]?-1:o[1]<e[1]||o[3]>e[3]?1:o[3]<e[3]?-1:0};m.prototype.transform=function(o){var e="";this.quit=!1,o=o.toLowerCase(),o=o.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),o=o.replace(/\s+-+\s+/g,"."),o=o.replace(/\s*[,\.\?!;]+\s*/g,"."),o=o.replace(/\s*\bbut\b\s*/g,"."),o=o.replace(/\s{2,}/g," ");for(var s=o.split("."),y=0;y<s.length;y++){var n=s[y];if(n!=""){for(var h=0;h<a.elizaQuits.length;h++)if(a.elizaQuits[h]==n)return this.quit=!0,this.getFinal();var c=this.preExp.exec(n);if(c){for(var f="",u=n;c;)f+=u.substring(0,c.index)+this.pres[c[1]],u=u.substring(c.index+c[0].length),c=this.preExp.exec(u);n=f+u}this.sentence=n;for(var i=0;i<a.elizaKeywords.length;i++)if(n.search(new RegExp("\\b"+a.elizaKeywords[i][0]+"\\b","i"))>=0&&(e=this._execRule(i)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var i=this._getRuleIndexByKey("xnone");i>=0&&(e=this._execRule(i))}return e!=""?e:"I am at a loss for words."};m.prototype._execRule=function(o){for(var e=a.elizaKeywords[o],s=e[2],y=/\(([0-9]+)\)/,n=0;n<s.length;n++){var h=this.sentence.match(s[n][0]);if(h!=null){var c=s[n][1],f=s[n][2],u=this.noRandom?0:Math.floor(Math.random()*c.length);this.noRandom&&this.lastchoice[o][n]>u||this.lastchoice[o][n]==u?(u=++this.lastchoice[o][n],u>=c.length&&(u=0,this.lastchoice[o][n]=-1)):this.lastchoice[o][n]=u;var i=c[u];if(this.debug&&alert(`match:
key: `+a.elizaKeywords[o][0]+`
rank: `+a.elizaKeywords[o][1]+`
decomp: `+s[n][0]+`
reasmb: `+i+`
memflag: `+f),i.search("^goto ","i")==0){var l=this._getRuleIndexByKey(i.substring(5));if(l>=0)return this._execRule(l)}var d=y.exec(i);if(d){for(var t="",g=i;d;){var r=h[parseInt(d[1])],p=this.postExp.exec(r);if(p){for(var w="",b=r;p;)w+=b.substring(0,p.index)+this.posts[p[1]],b=b.substring(p.index+p[0].length),p=this.postExp.exec(b);r=w+b}t+=g.substring(0,d.index)+r,g=g.substring(d.index+d[0].length),d=y.exec(g)}i=t+g}if(i=this._postTransform(i),f)this._memSave(i);else return i}}return""};m.prototype._postTransform=function(o){if(o=o.replace(/\s{2,}/g," "),o=o.replace(/\s+\./g,"."),a.elizaPostTransforms&&a.elizaPostTransforms.length)for(var e=0;e<a.elizaPostTransforms.length;e+=2)o=o.replace(a.elizaPostTransforms[e],a.elizaPostTransforms[e+1]),a.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var s=/^([a-z])/,y=s.exec(o);y&&(o=y[0].toUpperCase()+o.substring(1))}return o};m.prototype._getRuleIndexByKey=function(o){for(var e=0;e<a.elizaKeywords.length;e++)if(a.elizaKeywords[e][0]==o)return e;return-1};m.prototype._memSave=function(o){this.mem.push(o),this.mem.length>this.memSize&&this.mem.shift()};m.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var o=Math.floor(Math.random()*this.mem.length),e=this.mem[o],s=o+1;s<this.mem.length;s++)this.mem[s-1]=this.mem[s];return this.mem.length--,e}else return""};m.prototype.getFinal=function(){return a.elizaFinals?a.elizaFinals[Math.floor(Math.random()*a.elizaFinals.length)]:""};m.prototype.getInitial=function(){return a.elizaInitials?a.elizaInitials[Math.floor(Math.random()*a.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(o){return this[this.length]=o});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var o=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,o});var J=m;function H(o,e,s){const y=o.slice();return y[0]=e[s],y}function R(o){let e,s=o[0].user+"",y,n,h=o[0].text+"",c,f;return{c(){e=_("span"),y=E(s),n=E(": "),c=E(h),f=K(),this.h()},l(u){e=x(u,"SPAN",{class:!0});var i=D(e);y=A(i,s),n=A(i,": "),c=A(i,h),f=Y(i),i.forEach(k),this.h()},h(){P(e,"class","svelte-1y9jbsr")},m(u,i){C(u,e,i),W(e,y),W(e,n),W(e,c),W(e,f)},p(u,i){i&1&&s!==(s=u[0].user+"")&&T(y,s),i&1&&h!==(h=u[0].text+"")&&T(c,h)},d(u){u&&k(e)}}}function X(o){let e,s,y,n,h,c,f,u,i,l=o[0],d=[];for(let t=0;t<l.length;t+=1)d[t]=R(H(o,l,t));return{c(){e=_("div"),s=_("div"),y=_("article");for(let t=0;t<d.length;t+=1)d[t].c();n=K(),h=_("form"),c=_("input"),this.h()},l(t){e=x(t,"DIV",{class:!0});var g=D(e);s=x(g,"DIV",{class:!0});var r=D(s);y=x(r,"ARTICLE",{});var p=D(y);for(let b=0;b<d.length;b+=1)d[b].l(p);p.forEach(k),r.forEach(k),n=Y(g),h=x(g,"FORM",{});var w=D(h);c=x(w,"INPUT",{type:!0,name:!0}),w.forEach(k),g.forEach(k),this.h()},h(){P(s,"class","scrollable"),P(c,"type","text"),P(c,"name","text"),P(e,"class","container")},m(t,g){C(t,e,g),W(e,s),W(s,y);for(let r=0;r<d.length;r+=1)d[r].m(y,null);W(e,n),W(e,h),W(h,c),u||(i=L(f=V.call(null,h,o[2])),u=!0)},p(t,[g]){if(g&1){l=t[0];let r;for(r=0;r<l.length;r+=1){const p=H(t,l,r);d[r]?d[r].p(p,g):(d[r]=R(p),d[r].c(),d[r].m(y,null))}for(;r<d.length;r+=1)d[r].d(1);d.length=l.length}f&&j(f.update)&&g&1&&f.update.call(null,t[2])},i:S,o:S,d(t){t&&k(e),q(d,t),u=!1,i()}}}function Z(o,e,s){Q(()=>{G()});let y=new J,n=[{user:"Eliza",text:y.getInitial()}];async function h(f){const u=y.transform(f);await new Promise(i=>setTimeout(i,1e3+Math.random()*1e3)),n.push({user:"Eliza",text:u}),s(0,n)}return[n,h,({form:f,data:u,action:i,cancel:l})=>{l();const d=u.get("text");n.push({user:"You",text:d}),s(0,n),h(d),f.reset()}]}class ne extends M{constructor(e){super(),F(this,e,Z,X,$,{})}}export{ne as default};
