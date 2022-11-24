export const multipleRequired = function (value) {
    let notEmpty = true;

    value.forEach((item) => {
        notEmpty = notEmpty && Boolean(item.value);
    })

    return notEmpty;
}