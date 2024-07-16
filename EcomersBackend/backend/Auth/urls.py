from django.urls import path , re_path
from .views import *

urlpatterns = [
    re_path('login'      , login),
    re_path('signup'     , signup),
    re_path('test_token' , test),
    re_path('logout'     , logout)
]
