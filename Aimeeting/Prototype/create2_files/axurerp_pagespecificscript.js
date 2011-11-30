
var PageName = 'create2';
var PageId = '8b22720c65db47999f2e55ea20c1bd89'
var PageUrl = 'create2.html'
document.title = 'create2';
var PageNotes = 
{
"pageName":"create2",
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

var u21 = document.getElementById('u21');

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

	NewTab("advance.html" + GetQuerystring(), "");

}

}
gv_vAlignTable['u86'] = 'top';
var u51 = document.getElementById('u51');

var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');

var u76 = document.getElementById('u76');

var u31 = document.getElementById('u31');

var u77 = document.getElementById('u77');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u53 = document.getElementById('u53');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u27 = document.getElementById('u27');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u8 = document.getElementById('u8');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u17 = document.getElementById('u17');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u19 = document.getElementById('u19');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u79 = document.getElementById('u79');

var u81 = document.getElementById('u81');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u15 = document.getElementById('u15');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	SendToBack("u20");

	BringToFront("u42");

	SetPanelVisibility('u42','','none',500);

}

}
gv_vAlignTable['u36'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u37 = document.getElementById('u37');

var u2 = document.getElementById('u2');

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{
windowEvent = e;


if (true) {

	SendToBack("u20");

	BringToFront("u42");

	SetPanelVisibility('u42','','none',500);

}

}
gv_vAlignTable['u83'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u52 = document.getElementById('u52');

var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u84 = document.getElementById('u84');

var u20 = document.getElementById('u20');

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u39','','none',500);

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u39 = document.getElementById('u39');

var u69 = document.getElementById('u69');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u4 = document.getElementById('u4');

var u6 = document.getElementById('u6');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u14','','none',500);

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{
windowEvent = e;


if (true) {

	SendToBack("u42");

	SetPanelVisibility('u69','','none',500);

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	SendToBack("u42");

	BringToFront("u20");

	SetPanelVisibility('u20','','none',500);

}

}
gv_vAlignTable['u12'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');

var u72 = document.getElementById('u72');

var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u67 = document.getElementById('u67');

var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');

var u40 = document.getElementById('u40');

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
if (window.OnLoad) OnLoad();
