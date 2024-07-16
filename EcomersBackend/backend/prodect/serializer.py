from .models import *
from rest_framework import serializers


class prodectSerial(serializers.ModelSerializer):
     class Meta:
          model = prodect
          fields = "__all__"

class offerSerial(serializers.ModelSerializer):
     class Meta:
          model = offerse
          fields = "__all__"