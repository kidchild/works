
var PageName = 'richeng';
var PageId = 'aa171b2c5c5848039ae65dc0ddc2c64f'
var PageUrl = 'richeng.html'
document.title = 'richeng';
var PageNotes = 
{
"pageName":"richeng",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '8');
  value = value.replace(/\[\[GenMonth\]\]/g, '10');
  value = value.replace(/\[\[GenMonthName\]\]/g, '十月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期六');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

if (bIE) document.getElementById('u151').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u151'); });
else document.getElementById('u151').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u151'); }, true);

widgetIdToDragFunction['u151'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u151',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}
widgetIdToDragDropFunction['u151'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u132', 'pd3u132','none','',500,'none','',500);

	SetPanelState('u4', 'pd0u4','none','',500,'none','',500);

}

}
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u32 = document.getElementById('u32');

var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');

var u236 = document.getElementById('u236');

var u88 = document.getElementById('u88');

var u4 = document.getElementById('u4');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u226 = document.getElementById('u226');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u17 = document.getElementById('u17');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u135 = document.getElementById('u135');

var u212 = document.getElementById('u212');

u212.style.cursor = 'pointer';
if (bIE) u212.attachEvent("onclick", u212Click);
else u212.addEventListener("click", u212Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u212LinksClick'></DIV>")
var u212LinksClick = document.getElementById('u212LinksClick');
function u212Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u212LinksClick');
}

InsertBeforeEnd(u212LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u212Clicku66009e24648442ea9e985ba78c1b7c78(event)'>Case 1</div>");
function u212Clicku66009e24648442ea9e985ba78c1b7c78(e)
{

	SetPanelVisibility('u209','hidden','none',500);

	SetPanelVisibility('u132','','none',500);

	ToggleLinks(e, 'u212LinksClick');
}

InsertBeforeEnd(u212LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u212Clicku19395cada5f14d4f80cbc4d909689cfb(event)'>Case 2</div>");
function u212Clicku19395cada5f14d4f80cbc4d909689cfb(e)
{

	SetPanelState('u132', 'pd1u132','none','',500,'none','',500);

	SetPanelVisibility('u209','hidden','none',500);

	ToggleLinks(e, 'u212LinksClick');
}

InsertBeforeEnd(u212LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u212Clickuf9782490e0024e45a7bce36eb259cfd7(event)'>Case 3</div>");
function u212Clickuf9782490e0024e45a7bce36eb259cfd7(e)
{

	SetPanelState('u4', 'pd1u4','none','',500,'none','',500);

	SetPanelState('u132', 'pd2u132','none','',500,'none','',500);

	SetPanelVisibility('u209','hidden','none',500);

	ToggleLinks(e, 'u212LinksClick');
}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u168 = document.getElementById('u168');

var u229 = document.getElementById('u229');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u186 = document.getElementById('u186');

var u14 = document.getElementById('u14');

var u5 = document.getElementById('u5');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u27 = document.getElementById('u27');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u102 = document.getElementById('u102');

var u52 = document.getElementById('u52');

var u20 = document.getElementById('u20');

var u122 = document.getElementById('u122');

var u11 = document.getElementById('u11');

var u120 = document.getElementById('u120');

var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u223','','none',500);

}

}

var u24 = document.getElementById('u24');

var u6 = document.getElementById('u6');

var u48 = document.getElementById('u48');

var u108 = document.getElementById('u108');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u238 = document.getElementById('u238');

u238.style.cursor = 'pointer';
if (bIE) u238.attachEvent("onclick", Clicku238);
else u238.addEventListener("click", Clicku238, true);
function Clicku238(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u223','hidden','none',500);

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u62 = document.getElementById('u62');

var u141 = document.getElementById('u141');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u21 = document.getElementById('u21');

var u133 = document.getElementById('u133');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u34 = document.getElementById('u34');

var u7 = document.getElementById('u7');

var u89 = document.getElementById('u89');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u213 = document.getElementById('u213');

var u184 = document.getElementById('u184');

var u228 = document.getElementById('u228');

var u72 = document.getElementById('u72');

var u112 = document.getElementById('u112');

var u149 = document.getElementById('u149');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u66 = document.getElementById('u66');

var u44 = document.getElementById('u44');

var u78 = document.getElementById('u78');

var u179 = document.getElementById('u179');

var u231 = document.getElementById('u231');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u191 = document.getElementById('u191');

var u16 = document.getElementById('u16');

var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u170', 'pd0u170','none','',500,'none','',500);

	MoveWidgetTo('u4', 240,267,'swing',500);

}

}

var u125 = document.getElementById('u125');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u10 = document.getElementById('u10');

var u25 = document.getElementById('u25');

var u158 = document.getElementById('u158');

var u54 = document.getElementById('u54');

var u195 = document.getElementById('u195');

var u197 = document.getElementById('u197');

var u67 = document.getElementById('u67');

var u189 = document.getElementById('u189');

var u38 = document.getElementById('u38');

var u176 = document.getElementById('u176');

var u26 = document.getElementById('u26');

var u174 = document.getElementById('u174');

var u216 = document.getElementById('u216');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');

var u182 = document.getElementById('u182');

var u110 = document.getElementById('u110');

var u100 = document.getElementById('u100');

var u23 = document.getElementById('u23');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u82 = document.getElementById('u82');

var u75 = document.getElementById('u75');

var u30 = document.getElementById('u30');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u116 = document.getElementById('u116');

var u187 = document.getElementById('u187');

var u74 = document.getElementById('u74');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u223 = document.getElementById('u223');

var u114 = document.getElementById('u114');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u160 = document.getElementById('u160');

var u166 = document.getElementById('u166');

var u221 = document.getElementById('u221');

var u92 = document.getElementById('u92');

var u46 = document.getElementById('u46');

var u137 = document.getElementById('u137');

var u71 = document.getElementById('u71');

var u181 = document.getElementById('u181');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u98 = document.getElementById('u98');

var u214 = document.getElementById('u214');

var u127 = document.getElementById('u127');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u56 = document.getElementById('u56');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u42 = document.getElementById('u42');

var u151 = document.getElementById('u151');

var u106 = document.getElementById('u106');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u40 = document.getElementById('u40');

var u227 = document.getElementById('u227');

u227.style.cursor = 'pointer';
if (bIE) u227.attachEvent("onclick", Clicku227);
else u227.addEventListener("click", Clicku227, true);
function Clicku227(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd1u132','none','',500,'none','',500);

	SetPanelVisibility('u223','hidden','none',500);

	SetPanelState('u4', 'pd0u4','none','',500,'none','',500);

}

}
gv_vAlignTable['u227'] = 'top';
var u139 = document.getElementById('u139');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u193 = document.getElementById('u193');

var u104 = document.getElementById('u104');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u19 = document.getElementById('u19');

var u65 = document.getElementById('u65');

var u164 = document.getElementById('u164');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u84 = document.getElementById('u84');

var u50 = document.getElementById('u50');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');

var u170 = document.getElementById('u170');

var u76 = document.getElementById('u76');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u81 = document.getElementById('u81');

var u177 = document.getElementById('u177');

var u209 = document.getElementById('u209');

var u94 = document.getElementById('u94');

var u60 = document.getElementById('u60');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u185 = document.getElementById('u185');

var u9 = document.getElementById('u9');

var u73 = document.getElementById('u73');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u173 = document.getElementById('u173');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u147 = document.getElementById('u147');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');

u131.style.cursor = 'pointer';
if (bIE) u131.attachEvent("onclick", Clicku131);
else u131.addEventListener("click", Clicku131, true);
function Clicku131(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u209','','none',500);

}

}

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u230 = document.getElementById('u230');

var u162 = document.getElementById('u162');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u210 = document.getElementById('u210');

var u13 = document.getElementById('u13');

var u29 = document.getElementById('u29');

var u111 = document.getElementById('u111');

var u132 = document.getElementById('u132');

var u172 = document.getElementById('u172');

var u175 = document.getElementById('u175');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u129 = document.getElementById('u129');

var u86 = document.getElementById('u86');

var u68 = document.getElementById('u68');

var u183 = document.getElementById('u183');

var u36 = document.getElementById('u36');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u171 = document.getElementById('u171');

var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u83 = document.getElementById('u83');

var u178 = document.getElementById('u178');

var u8 = document.getElementById('u8');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u15 = document.getElementById('u15');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u170', 'pd1u170','swing','up',500,'swing','down',500);

	MoveWidgetTo('u4', 240,510,'swing',500);

}

}

var u80 = document.getElementById('u80');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u58 = document.getElementById('u58');

var u145 = document.getElementById('u145');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u12 = document.getElementById('u12');

var u201 = document.getElementById('u201');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u199 = document.getElementById('u199');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u215 = document.getElementById('u215');

var u118 = document.getElementById('u118');

var u90 = document.getElementById('u90');

var u18 = document.getElementById('u18');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u224 = document.getElementById('u224');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u77 = document.getElementById('u77');

var u22 = document.getElementById('u22');

var u143 = document.getElementById('u143');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u69 = document.getElementById('u69');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u180 = document.getElementById('u180');

var u28 = document.getElementById('u28');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
if (window.OnLoad) OnLoad();
