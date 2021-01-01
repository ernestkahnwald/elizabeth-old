from django.conf import settings
from django.db import models

from budget.models.managers import AuthorQuerySet


class AuthorMixin:
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
    )

    objects = AuthorQuerySet.as_manager()
