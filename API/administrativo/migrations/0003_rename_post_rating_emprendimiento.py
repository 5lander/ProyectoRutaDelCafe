# Generated by Django 4.1.3 on 2023-01-12 22:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("administrativo", "0002_rating"),
    ]

    operations = [
        migrations.RenameField(
            model_name="rating",
            old_name="post",
            new_name="emprendimiento",
        ),
    ]
