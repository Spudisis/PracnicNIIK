

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_delete_client_alter_project_pr_buyer'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectCards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50)),
                ('discription', models.CharField(blank=True, max_length=255)),
                ('url', models.CharField(default='https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-805-340x340.png', max_length=255)),
                ('type', models.PositiveIntegerField(default=1)),
            ],
        ),
    ]