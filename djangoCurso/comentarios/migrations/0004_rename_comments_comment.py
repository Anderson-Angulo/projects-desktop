# Generated by Django 4.1.5 on 2023-01-30 00:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0003_comments_signature'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Comments',
            new_name='Comment',
        ),
    ]
