from django.urls import path
from . import views

urlpatterns =[
    path('',views.getRoutes,name="routes"),
    path('project/', views.getProject, name="project"),
]