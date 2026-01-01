from rest_framework import serializers
from .models import Task

class TaskSer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'desc']
