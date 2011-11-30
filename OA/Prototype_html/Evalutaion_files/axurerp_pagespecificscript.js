
var PageName = 'Evalutaion';
var PageId = 'd07d6595dc694b1c9d88f14c7577852f'
var PageUrl = 'Evalutaion.html'
document.title = 'Evalutaion';
var PageNotes = 
{
"pageName":"Evalutaion",
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
  value = value.replace(/\[\[GenMonth\]\]/g, '4');
  value = value.replace(/\[\[GenMonthName\]\]/g, '四月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期五');
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

var u115 = document.getElementById('u115');

var u122 = document.getElementById('u122');

var u21 = document.getElementById('u21');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u77', 'Zhang Cheng, Zhang Lei');

	SetPanelVisibility('u126','hidden','none',500);

}

}
gv_vAlignTable['u130'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u17 = document.getElementById('u17');

var u135 = document.getElementById('u135');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u55 = document.getElementById('u55');

var u101 = document.getElementById('u101');

var u14 = document.getElementById('u14');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u105 = document.getElementById('u105');

var u27 = document.getElementById('u27');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u37 = document.getElementById('u37');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u141 = document.getElementById('u141');

var u11 = document.getElementById('u11');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u133 = document.getElementById('u133');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u68 = document.getElementById('u68');

var u89 = document.getElementById('u89');

var u47 = document.getElementById('u47');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u103 = document.getElementById('u103');

var u99 = document.getElementById('u99');

var u66 = document.getElementById('u66');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');

var u57 = document.getElementById('u57');

var u119 = document.getElementById('u119');

var u16 = document.getElementById('u16');

var u125 = document.getElementById('u125');

var u41 = document.getElementById('u41');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');

var u10 = document.getElementById('u10');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u23 = document.getElementById('u23');

var u144 = document.getElementById('u144');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u74 = document.getElementById('u74');

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u76','hidden','none',500);

SetWidgetRichText('u52', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#434343;">' + (GetWidgetFormText('u122')) + '</span></p>');

SetWidgetRichText('u54', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#434343;">' + (GetWidgetFormText('u125')) + '</span></p>');

SetWidgetRichText('u56', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#009900;">已提醒</span></p>');

SetWidgetRichText('u46', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#434343;">00154-02</span></p>');

SetWidgetRichText('u48', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#434343;">Chen Yang</span></p>');

SetWidgetRichText('u50', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#434343;">Zhang Cheng</span></p>');

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u33 = document.getElementById('u33');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');

var u71 = document.getElementById('u71');

var u5 = document.getElementById('u5');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u127 = document.getElementById('u127');

var u43 = document.getElementById('u43');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u150 = document.getElementById('u150');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u139 = document.getElementById('u139');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u19 = document.getElementById('u19');

var u109 = document.getElementById('u109');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u76 = document.getElementById('u76');

var u134 = document.getElementById('u134');

var u81 = document.getElementById('u81');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u69 = document.getElementById('u69');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');

if (bIE) u131.attachEvent("onchange", Changeu131);
else u131.addEventListener("change", Changeu131, true);
function Changeu131(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u124', 'balabala');

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u117 = document.getElementById('u117');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u113 = document.getElementById('u113');

var u29 = document.getElementById('u29');

var u111 = document.getElementById('u111');

var u132 = document.getElementById('u132');

var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u77', 'Zhang Cheng,');

	SetPanelVisibility('u126','hidden','none',500);

}

}
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u39 = document.getElementById('u39');

var u0 = document.getElementById('u0');

if (bIE) u0.attachEvent("onmouseover", MouseOveru0);
else u0.addEventListener("mouseover", MouseOveru0, true);
function MouseOveru0(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u0',e)) return;
if (true) {

	SetPanelVisibility('u143','','fade',500);

}

}

if (bIE) u0.attachEvent("onmouseout", MouseOutu0);
else u0.addEventListener("mouseout", MouseOutu0, true);
function MouseOutu0(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u0',e)) return;
if (true) {

	SetPanelVisibility('u143','hidden','none',500);

}

}
gv_vAlignTable['u0'] = 'top';
var u31 = document.getElementById('u31');

var u83 = document.getElementById('u83');

var u8 = document.getElementById('u8');

var u3 = document.getElementById('u3');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u49 = document.getElementById('u49');

var u124 = document.getElementById('u124');

var u80 = document.getElementById('u80');

var u1 = document.getElementById('u1');

var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{
windowEvent = e;


if (true) {

	self.location.href="hr_Month_evaluation.html" + GetQuerystring();

}

}

var u93 = document.getElementById('u93');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="Member.html" + GetQuerystring();

}

}

var u25 = document.getElementById('u25');

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u76','','none',500);

}

}

var u137 = document.getElementById('u137');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u45 = document.getElementById('u45');

var u77 = document.getElementById('u77');

if (bIE) u77.attachEvent("onkeyup", KeyUpu77);
else u77.addEventListener("keyup", KeyUpu77, true);
function KeyUpu77(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u126','','fade',500);

}

}

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u143 = document.getElementById('u143');

var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');

var u136 = document.getElementById('u136');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
if (window.OnLoad) OnLoad();
