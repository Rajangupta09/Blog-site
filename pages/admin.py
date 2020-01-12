from django.contrib import admin
from .models import blog
from .models import Contact
class blogAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_published', 'blog_date', 'Type', 'author')
    list_display_links = ('id', 'title', 'blog_date')
    list_filter = ('Type',)
    list_per_page = 20
    list_editable = ('is_published',)
admin.site.register(blog, blogAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'Name', 'Email', 'Phone', 'contact_date')
    list_display_links = ('id', 'Name', 'Email')
    list_per_page = 25
admin.site.register(Contact, ContactAdmin)