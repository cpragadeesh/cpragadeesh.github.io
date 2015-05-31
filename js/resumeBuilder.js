var fname = "Pragadeesh"
var frole = "Web"

HTMLheaderName = HTMLheaderName.replace("%data%", fname);
HTMLroleName = HTMLroleName.replace("%data%", frole);

$("header").append(HTMLheaderName);
$("header").prepend(HTMLroleName);
