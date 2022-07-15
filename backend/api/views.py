from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project,Employee
from .serializers import ProjectSerializer,EmployeeSerializer

# Create your views here.

@api_view(['GET'])
def getProject(request):
    projects = Project.objects.all()
    seralizer = ProjectSerializer(projects, many=True)
    return Response(seralizer.data)
@api_view(['GET'])
def getEmployee(request):
    employees = Employee.objects.all()
    seralizer = EmployeeSerializer(employees, many=True)
    return Response(seralizer.data)