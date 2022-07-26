function IsPhone() {
    var info = navigator.userAgent;
    var isPhone = /mobile/i.test(info);
    return isPhone;
}
