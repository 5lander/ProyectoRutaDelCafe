# Generated by Django 4.1.3 on 2023-02-07 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("administrativo", "0005_rename_emprendimientorate_rating_emprendimiento"),
    ]

    operations = [
        migrations.AlterField(
            model_name="emprendimiento",
            name="descripcion",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="emprendimiento",
            name="horaApertura",
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="emprendimiento",
            name="horaCierre",
            field=models.DateField(blank=True, null=True),
        ),
    ]