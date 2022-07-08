from django.db import models

# Create your models here.
class Project(models.Model):
    name=models.TextField(null=True, blank=True)
    discription=models.TextField(null=True, blank=True)

