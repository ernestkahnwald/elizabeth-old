from rest_framework import serializers

from budget.models import Operation


class OperationSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField(method_name='get_type_dict')
    kind = serializers.StringRelatedField()

    class Meta:
        model = Operation
        fields = (
            'id', 'name', 'size', 'type', 'kind', 'created_at',
        )

    def get_type_dict(self, obj):
        return {
            'value': obj.type,
            'label': obj.get_type_display(),
        }

