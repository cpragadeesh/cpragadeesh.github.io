var fname = "Pragadeesh"
var frole = "Web"

htmln = HTMLheaderName.replace("%data%", fname);
htmlr = HTMLheaderRole.replace("%data%", frole);

$("header").append(htmln);
$("header").prepend(htmlr);
