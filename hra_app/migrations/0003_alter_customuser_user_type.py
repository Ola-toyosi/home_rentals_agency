# Generated by Django 4.2 on 2023-08-29 23:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hra_app', '0002_alter_customuser_managers_customuser_phone_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(choices=[(1, 'SuperAdmin'), (2, 'Lister'), (3, 'User')], max_length=10),
        ),
    ]