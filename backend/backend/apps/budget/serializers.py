from rest_framework import serializers

from budget.models import Operation


class OperationSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()
    kind = serializers.StringRelatedField()

    class Meta:
        model = Operation
        fields = (
            'id', 'name', 'size', 'type', 'kind', 'created_at',
        )

    def get_type(self, obj):
        return {
            'label': obj.get_type_display(),
            'value': obj.type,
        }

