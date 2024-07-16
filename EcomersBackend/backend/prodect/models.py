from django.db import models

# Create your models here.

class prodect(models.Model):
     title     = models.CharField(max_length=120)
     price     = models.DecimalField(decimal_places=3 , max_digits=6)
     image     = models.ImageField(upload_to="medai/prodect/")
     quintety  = models.IntegerField(default=0)
     cell_count= models.IntegerField(default=0)
     add_time  = models.DateTimeField(auto_now_add=True)
     updaet_time = models.DateTimeField(auto_now=True)
     
     
     def __str__(self):
          return self.title
     
class offerse(models.Model):
     title          = models.CharField(max_length=120)
     price          = models.DecimalField(decimal_places=3 , max_digits=6)
     image          = models.ImageField(upload_to="medai/offerse/")
     clicks         = models.IntegerField(default=0)
     add_time       = models.DateTimeField(auto_now_add=True)
     updaet_time    = models.DateTimeField(auto_now=True)


     def __str__(self) -> str:
          return self.title