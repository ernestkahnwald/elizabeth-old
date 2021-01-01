from django.contrib import admin

from budget.models import Operation, OperationKind


@admin.register(Operation)
class OperationAdmin(admin.ModelAdmin):
    list_display = ('name', 'size', 'type', 'created_at', 'author')


@admin.register(OperationKind)
class OperationKindAdmin(admin.ModelAdmin):
    list_display = ('name', 'author')
