from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('blog', views.Blog, name='blog'),
    path('<int:blog_id>',views.post, name='blogs'),
    path('contact', views.contact, name='contact'),
]