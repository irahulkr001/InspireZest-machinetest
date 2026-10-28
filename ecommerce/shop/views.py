from django.shortcuts import render,get_object_or_404

# Create your views here.
from shop.models import Product, ProductVariant

def home(request):
    products=Product.objects.prefetch_related("variants").all()
    return render(request,'home.html',{'products':products})

def product_detail(request,i):
    product=get_object_or_404(Product.objects.prefetch_related('variants'),id=i)
    return render(request,'product_detail.html',{'product':product})
