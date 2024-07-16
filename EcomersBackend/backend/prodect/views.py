from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import offerSerial , prodectSerial
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import *

@api_view(['GET'])
def get_prodects(e):
     prodects = prodect.objects.all()
     serlData = prodectSerial(instance=prodects , many=True)
     return Response(
          status=status.HTTP_200_OK , 
          data=serlData.data
     )


@api_view(['POST'])
def get_prodect(e):
     prodec = get_object_or_404(prodect , id = e.data['id'])
     return Response(
          status=status.HTTP_200_OK,
          data=prodectSerial(instance=prodec).data
     )


@api_view(['GET'])
def get_offers(e):
     offers = offerse.objects.all()
     return Response(
          status=status.HTTP_200_OK,
          data=offerSerial(instance=offers , many = True).data
     )