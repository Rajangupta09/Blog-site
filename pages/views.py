from django.shortcuts import get_object_or_404, render, redirect
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.http import HttpResponse
from django.contrib import messages
from .models import blog
from .models import Contact
from .models import Comment
from .models import Team
from .models import *
from .forms import *


def index(request):
    teams = Team.objects.all()
    testimonial = Testimonial.objects.all()
    associate = Association.objects.all()
    context = {
        'teams':teams,
        'testimonial' : testimonial,
        'associate' : associate
    }
    return render(request, 'pages/index.html', context)

def Blog(request):
    b = blog.objects.all()
    paginator = Paginator(b, 3)
    page = request.GET.get('page')
    paged_b = paginator.get_page(page)
    return render(request, 'Blogs/blog.html', { 'b' : paged_b })

def post(request, blog_id):
    post = get_object_or_404(blog, pk=blog_id)
    posts = blog.objects.order_by('-blog_date')[:3]
    comments = post.comments.filter(Active=True, Parent__isnull=True)
    if request.method =='POST':
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():
            Parent_obj = None
            try:
                Parent_id = int(request.POST.get('parent_id'))
            except:
                Parent_id = None
            if Parent_id:
                Parent_obj = Comment.objects.get(id=Parent_id)
                if Parent_obj:
                    reply_comment = comment_form.save(commit=False)
                    reply_comment.Parent = Parent_obj
            new_comment = comment_form.save(commit=False)
            new_comment.post_id = int(blog_id)
            new_comment.save()
            return redirect ('/1')
    else:
        comment_form = CommentForm()
             
    context = {
        'comment': comments,
        'comment_form' : comment_form, 
        'posts': posts,
        'post' : post
    }
    return render(request, 'Blogs/single-post.html', context)

def contact(request):
    if request.method == 'POST':
        Name = request.POST['Name']
        Email = request.POST['Email']
        Phone = request.POST['Phone']
        Message = request.POST['Message']

        contact = Contact(Name=Name, Email=Email, Phone=Phone, Message=Message)
        contact.save()

        messages.success(request, 'Your request has been submitted')
        return redirect('/#contact')
    else:
         return redirect('/#contact')

