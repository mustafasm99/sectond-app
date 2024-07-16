from django.urls import path , re_path
from .views import *

urlpatterns = [
    re_path("get_all_prodects" , get_prodects , name="all_prodects"),
    re_path("get_prodect" , get_prodect , name="one_prodect"),
    re_path("get_offiers" , get_offers)
]
