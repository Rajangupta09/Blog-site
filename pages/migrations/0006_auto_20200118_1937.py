# Generated by Django 3.0.2 on 2020-01-18 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0005_comment_team'),
    ]

    operations = [
        migrations.CreateModel(
            name='Association',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Logo', models.ImageField(upload_to='Association/%Y/')),
                ('Link', models.CharField(blank=True, max_length=100)),
                ('Name', models.CharField(blank=True, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Testimonal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Profile', models.ImageField(upload_to='Testimonial/%Y/')),
                ('Designation', models.CharField(blank=True, max_length=50)),
            ],
        ),
        migrations.AlterField(
            model_name='team',
            name='facebook_link',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='team',
            name='in_link',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='team',
            name='twitter_link',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]