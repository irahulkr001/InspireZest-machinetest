from django.db import models

# Create your models here.
class Product(models.Model):
    name=models.CharField(max_length=200)
    description=models.TextField()
    price=models.IntegerField()
    def __str__(self):
        return self.name

class ProductVariant(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name="variants")
    colour=models.CharField(max_length=25)
    colour_code=models.CharField(max_length=20)
    image=models.ImageField(upload_to='products/')
    stock=models.PositiveIntegerField(default=10)
    def __str__(self):
        return f"{self.product.name}-{self.colour}"