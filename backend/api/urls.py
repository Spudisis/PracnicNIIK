from django.urls import path
from . import views

urlpatterns =[
    path('project/', views.getProject, name="project"),
    path('user/', views.getUser, name="user"),
    path('employee/', views.getEmployee, name="employee"),
]