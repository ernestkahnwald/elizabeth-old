document.addEventListener('DOMContentLoaded', function() {
    if (!window.IconPicker) { alert('iconpicker is not defined') }

    IconPicker.Init({
        jsonUrl: '/static/@furcan/iconpicker/dist/iconpicker-1.5.0.json',
        searchPlaceholder: 'Поиск',
        showAllButton: 'Показать все',
        cancelButton: 'Отменить',
        noResultsFound: 'Результаты не найдены.',
        borderRadius: '20px',
    });

    var fields = document.querySelectorAll('.icon-field');
    var getFormField = function (field) {
        return field.querySelector('[name]');
    }
    var getSelector = function (field) {
        return '#icon-button-' + field.name;
    }

    fields.forEach(function(field) {
        var field = getFormField(field);
        if (!field) {
            throw new ReferenceError(
                'form field for ' + field.toString() + ' is not defined');
        }

        var selector = getSelector(field);
        IconPicker.Run(selector);
    });
});
