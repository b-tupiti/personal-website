# Generated by Django 5.1.3 on 2024-11-12 13:06

import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_blogpage_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpage',
            name='body',
            field=wagtail.fields.StreamField([('paragraph', 0)], block_lookup={0: ('wagtail.blocks.RichTextBlock', (), {'help_text': 'paragraph', 'max_length': 100})}),
        ),
    ]
