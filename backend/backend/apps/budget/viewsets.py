from rest_framework.viewsets import ModelViewSet

from budget.models import Operation
from budget.serializers import OperationSerializer


class OperationViewSet(ModelViewSet):
    serializer_class = OperationSerializer
    queryset = Operation.objects.all()
