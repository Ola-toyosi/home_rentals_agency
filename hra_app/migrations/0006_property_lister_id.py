# Generated by Django 4.2 on 2023-09-01 15:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hra_app', '0005_alter_enduser_admin_alter_lister_admin'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='lister_id',
            field=models.ForeignKey(default=11, on_delete=django.db.models.deletion.CASCADE, to='hra_app.lister'),
            preserve_default=False,
        ),
    ]