# Generated by Django 4.1.7 on 2023-08-23 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event_request', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Speaker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='speakers/')),
            ],
        ),
    ]
