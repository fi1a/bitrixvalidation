import moment from "moment";

export const mustBeGreaterOrEqualDate = (field, formatField = '') => function (value, siblings, vm) {
    let format = 'd.m.Y H:i:s';
    if (formatField && siblings[formatField]) {
        format = siblings[formatField];
    }
    format = vm.$toMomentFormat(format);

    return moment(value, format).isSameOrAfter(moment(siblings[field], format));
}