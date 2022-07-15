from rest_framework.serializers import ModelSerializer
from .models import Project,Employee

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields ='__all__'

class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields ='__all__'
