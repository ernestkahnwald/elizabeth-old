from django.db import models

from budget.models.choices import OperationType
from budget.models.mixins import AuthorMixin


class Operation(AuthorMixin, models.Model):
    name = models.CharField(
        'название расчета',
        max_length=100,
        help_text=(
            'вы можете указать свое название для расчета, либо просто укажите '
            'категорию'
        ),
        blank=True,
    )
    size = models.DecimalField(
        'размер расчета',
        max_digits=10,
        decimal_places=2,
        default=0,
    )
    type = models.IntegerField(
        'тип расчета',
        default=OperationType.EXPENSE,
        choices=OperationType.CHOICES,
    )
    created_at = models.DateTimeField(
        'дата создания',
        auto_now_add=True,
    )
    kind = models.ForeignKey(
        'budget.OperationKind',
        on_delete=models.SET_NULL,
        verbose_name='вид расхода',
        blank=True, null=True,
    )

    class Meta:
        verbose_name = 'операция'
        verbose_name_plural = 'операции'
        default_related_name = 'operations'
        ordering = ['-created_at']

    def __str__(self):
        if all([self.name, self.size]):
            return f'{self.name} {self.size}'
        return super().__init__()


class OperationKind(AuthorMixin, models.Model):
    name = models.CharField(
        'название',
        max_length=100,
    )

    class Meta:
        verbose_name = 'вид операции'
        verbose_name_plural = 'виды операций'
        default_related_name = 'kinds'

    def __str__(self):
        if self.name:
            return self.name
        return super().__init__()
