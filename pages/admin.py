from django.contrib import admin
from .models import blog , Comment
from .models import Contact
from .models import Team
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

class TeamAdmin(admin.ModelAdmin):
    list_display = ('id', 'Name', 'Designation',)
    list_display_links = ('id', 'Name', 'Designation')
    list_per_page = 10
admin.site.register(Team, TeamAdmin)

class CommentAdmin(admin.ModelAdmin):
    list_display = ('Name', 'post', 'Created', 'Active')
    list_filter = ('Active', 'Created')
    search_fields = ('Name', 'Email', 'Body')
    actions = ['approve_comments']

    def approve_comments(self, request, queryset):
        queryset.update(active=True)

admin.site.register(Comment, CommentAdmin)
