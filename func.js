module.exports.isUndefToObj = function(obj) {
    for (key in obj) {
        if (obj[key] == undefined || obj[key] == null || obj[key] == "")
            return true;
    }
    return false;
}