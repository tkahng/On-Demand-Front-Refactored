# Generated by Django 3.0.2 on 2020-02-13 05:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('adminpage', '0014_auto_20200206_1711'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seen', models.BooleanField(default=False)),
                ('received_message', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='adminpage.ReceivedMessage')),
                ('request', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='adminpage.Request')),
            ],
        ),
    ]
