from django.db import models
from datetime import datetime

class blog(models.Model):
    title = models.CharField(max_length=100)
    Type = models.CharField(max_length=20)
    author = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    photo_blog = models.ImageField(upload_to='blog/%Y/%m/%d/')
    is_published = models.BooleanField(default=True)
    blog_date = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.title

class Contact(models.Model):
    Name = models.CharField(max_length=200)
    Email = models.CharField(max_length=200)
    Phone = models.CharField(max_length=200)
    Message = models.TextField(blank=True)
    contact_date= models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.Name