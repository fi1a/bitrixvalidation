import moment from "moment";

export const mustBeLessOrEqualDate = (field, formatField = '') => function (value, siblings, vm) {
    let format = 'd.m.Y H:i:s';
    if (formatField && siblings[formatField]) {
        format = siblings[formatField];
    }
    format = vm.$toMomentFormat(format);

    return moment(siblings[field], format).isSameOrAfter(moment(value, format));
}