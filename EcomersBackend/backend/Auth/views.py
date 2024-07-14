from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import UserJson
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


# create the endpoints for the api

# login api end point
@api_view(['POST'])
def signup(e):

     # fetch the data form the requests 
     seril = UserJson(data=e.data)
     # make sure the data is valid 
     if seril.is_valid():
          seril.save()
          # create the user from the data 
          user = User.objects.get(username = e.data['username'])
          user.set_password(e.data['password'])
          user.save()
          # save the user enc password
          
          
          token = Token.objects.create(user = user)
          return Response(
               {
                    "token":token.key,
                    "user" :seril.data
               }
          )
     return Response(
          seril.errors,
          status=status.HTTP_400_BAD_REQUEST
          )


# endpoint for signin 
@api_view(['POST'])
def login(e):
     user = get_object_or_404(User , username = e.data['username'])
     if not user.check_password(e.data['password']):
          return Response(
               {"detail":"Not found"},status=status.HTTP_404_NOT_FOUND
          )
          
     token,create = Token.objects.get_or_create(user = user)
     serial       = UserJson(instance=user)
     
     return Response({
          "token":token.key,
          "user" : serial.data
     })

from rest_framework.decorators import authentication_classes , permission_classes
from rest_framework.authentication import SessionAuthentication , TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# endpoint for token -> refresh token 
@api_view(['GET'])
@authentication_classes([SessionAuthentication , TokenAuthentication])
@permission_classes([IsAuthenticated])
def test(e):
     return Response("passed for {}".format(e.user.username))