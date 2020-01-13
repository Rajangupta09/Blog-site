from django.shortcuts import get_object_or_404, render, redirect
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.http import HttpResponse
from django.contrib import messages
from .models import blog
from .models import Contact

def index(request):
    return render(request, 'pages/index.html')

def Blog(request):
    b = blog.objects.all()
    paginator = Paginator(b, 3)
    page = request.GET.get('page')
    paged_b = paginator.get_page(page)
    return render(request, 'Blogs/blog.html', { 'b' : paged_b })

def post(request, blog_id):
    post = get_object_or_404(blog, pk=blog_id)

    context = {
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