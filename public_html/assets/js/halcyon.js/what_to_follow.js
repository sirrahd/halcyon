var what_to_follow_0 = JSON.parse(localStorage.getItem("what_to_follow_0"));
var what_to_follow_1 = JSON.parse(localStorage.getItem("what_to_follow_1"));
var what_to_follow_2 = JSON.parse(localStorage.getItem("what_to_follow_2"));

$('.what_to_follow_0 > .icon_box img').attr('src', what_to_follow_0.avatar);
$('.what_to_follow_0 .label_box > a').attr('href', getRelativeURL(what_to_follow_0.url, what_to_follow_0.id) );
$('.what_to_follow_0 .label_box > a > h3 .dn').text(what_to_follow_0.display_name);
$('.what_to_follow_0 .label_box > a > h3 .un').text('@'+what_to_follow_0.username);
$('.what_to_follow_0 .label_box > .follow_button').attr('mid', what_to_follow_0.id);
$('.what_to_follow_0 .label_box > .follow_button').attr('data', what_to_follow_0.url);

$('.what_to_follow_1 > .icon_box img').attr('src', what_to_follow_1.avatar);
$('.what_to_follow_1 .label_box > a').attr('href', getRelativeURL(what_to_follow_1.url, what_to_follow_1.id) );
$('.what_to_follow_1 .label_box > a > h3 .dn').text(what_to_follow_1.display_name);
$('.what_to_follow_1 .label_box > a > h3 .un').text('@'+what_to_follow_1.username);
$('.what_to_follow_1 .label_box > .follow_button').attr('mid', what_to_follow_1.id);
$('.what_to_follow_0 .label_box > .follow_button').attr('data', what_to_follow_1.url);

$('.what_to_follow_2 > .icon_box img').attr('src', what_to_follow_2.avatar);
$('.what_to_follow_2 .label_box > a').attr('href', getRelativeURL(what_to_follow_2.url, what_to_follow_2.id) );
$('.what_to_follow_2 .label_box > a > h3 .dn').text(what_to_follow_2.display_name);
$('.what_to_follow_2 .label_box > a > h3 .un').text('@'+what_to_follow_2.username);
$('.what_to_follow_2 .label_box > .follow_button').attr('mid', what_to_follow_2.id);
$('.what_to_follow_0 .label_box > .follow_button').attr('data', what_to_follow_2.url);