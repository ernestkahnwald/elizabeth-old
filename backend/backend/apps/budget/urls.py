from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter

from budget.viewsets import OperationViewSet


router = DefaultRouter()
router.register('operations', OperationViewSet, basename='operation')
urlpatterns = router.urls
