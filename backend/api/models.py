from django.db import models

# Create your models here.
class Projects(models.Model):
    pr_name = models.CharField(max_length=128)
    pr_discript = models.TextField()
    pr_photo = models.TextField()

    class Meta:
        db_table = 'projects'
