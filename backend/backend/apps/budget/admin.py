from django import forms
from django.conf import settings
from django.contrib import admin
from django.forms.fields import CharField
from django.utils.safestring import mark_safe

from budget.models import Operation, Category


class IconWidget(forms.TextInput):
    template_name = 'budget/fields/icon.html'

    class Media:
        css = {
            'all': [
                '@furcan/iconpicker/dist/fontawesome-5.11.2/css/all.min.css',
                '@furcan/iconpicker/dist/iconpicker-1.5.0.css',
                'budget/css/icon.css',
            ],
        }
        js = [
            'admin/js/vendor/jquery/jquery%s.js' % (
                '' if settings.DEBUG else '.min'),
            'admin/js/jquery.init.js',
            'budget/js/jQueryFix.js',
            '@furcan/iconpicker/dist/iconpicker-1.5.0.js',
            'budget/js/fields/icon.js',
        ]


class CategoryForm(forms.ModelForm):
    """Добавляем поле для выбора иконки."""
    icon = CharField(label='Иконка', widget=IconWidget)

    class Meta:
        model = Category
        fields = '__all__'


@admin.register(Operation)
class OperationAdmin(admin.ModelAdmin):
    list_display = ('kind', 'sum', 'type', 'created_at', 'author')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    form = CategoryForm
    list_display = ('indented_name',)
    list_select_related = ('parent',)

    def indented_name(self, obj):
        return mark_safe(
            '&nbsp;' * 4 +
            f'{obj.parent} / {obj}' if obj.parent_id else obj
        )
    indented_name.short_description = 'название'
