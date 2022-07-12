from django.db import models

# Create your models here.
class Employee(models.Model):
    em_fio =models.TextField()
    em_phone=models.TextField()

class User(models.Model):
    ur_login=models.CharField(max_length=20,null=True)
    ur_fio=models.TextField()
    ur_password=models.CharField(max_length=20,null=True)
    ur_private=models.PositiveIntegerField()

class Project(models.Model):
    pr_name = models.CharField(max_length=100,null=True)
    pr_start = models.DateField(null=True)
    pr_end = models.DateField(null=True)
    pr_stage = models.CharField(max_length=150,null=True)
    pr_price = models.PositiveIntegerField(default=1000)
    pr_discription = models.TextField(null=True)
    pr_type =models.PositiveIntegerField(default=1)
    pr_emloyee =models.ManyToManyField(Employee, related_name="Employee")
    pr_buyer=models.ManyToManyField(User, related_name="User")
