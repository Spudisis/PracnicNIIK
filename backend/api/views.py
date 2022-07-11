from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Projects
from .serializers import ProjectSerializer

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('fds')

@api_view(['GET'])
def getProject(request):
    projects = Projects.objects.all()
    seralizer = ProjectSerializer(projects, many=True)
    return Response(seralizer.data)