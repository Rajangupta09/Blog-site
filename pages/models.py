from django.db import models
from datetime import datetime
from ckeditor.fields import RichTextField

class blog(models.Model):
    title = models.CharField(max_length=100)
    Type = models.CharField(max_length=20)
    author = models.CharField(max_length=100)
    content = RichTextField()
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

class Comment(models.Model):
    post = models.ForeignKey(blog, on_delete=models.CASCADE, related_name='comments')
    Name = models.CharField(max_length=100)
    Email= models.EmailField(max_length=254)
    Body = models.TextField()
    Created = models.DateTimeField(auto_now_add=True)
    Active = models.BooleanField(default=True)
    Parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='replies')

    class Meta:
        ordering = ('-Created',)

    def __str__(self):
        return 'Comment By {}'.format(self.Name)


class Team(models.Model):
    Name = models.CharField(max_length=100)
    Picture = models.ImageField(upload_to='Team/%Y/')
    Designation = models.CharField(max_length=100)
    facebook_link= models.CharField(max_length=100)
    twitter_link= models.CharField(max_length=100)
    in_link= models.CharField(max_length=100)
    def __str__(self):
        return self.Designation

