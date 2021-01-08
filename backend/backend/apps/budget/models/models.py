from django.db import models

from budget.models.choices import OperationType
from budget.models.mixins import AuthorMixin


class Operation(AuthorMixin, models.Model):
    sum = models.DecimalField(
        'сумма',
        max_digits=10,
        decimal_places=2,
        default=0,
    )
    type = models.IntegerField(
        'тип',
        default=OperationType.EXPENSE,
        choices=OperationType.CHOICES,
    )
    created_at = models.DateTimeField(
        'дата проведения',
        auto_now_add=True,
    )
    kind = models.ForeignKey(
        'budget.Category',
        on_delete=models.SET_NULL,
        verbose_name="категория",
        blank=True, null=True,
    )

    class Meta:
        verbose_name = 'операция'
        verbose_name_plural = 'операции'
        default_related_name = 'operations'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.kind} {self.sum}' \
            if all([self.kind, self.sum]) else super().__init__()


class Category(AuthorMixin, models.Model):
    name = models.CharField(
        'название',
        max_length=100,
    )
    parent = models.ForeignKey(
        'self',
        verbose_name='Родительская категория',
        on_delete=models.SET_NULL,
        blank=True, null=True,
    )
    icon = models.CharField(
        'иконка',
        max_length=100,
        default="fas fa-mug-hot",
    )

    class Meta:
        verbose_name = 'категория'
        verbose_name_plural = 'категории'
        default_related_name = 'categories'

    def __str__(self):
        return self.name or super().__init__()
