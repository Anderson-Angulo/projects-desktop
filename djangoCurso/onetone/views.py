from django.shortcuts import render
from django.http import HttpResponse
from .models import Place,Restaurant
# Create your views here.
def create(request):
  # place=Place.objects.create(name="Lugar 1",address="Calle demo")
  place=Place.objects.get(id=2)
  restaurant=Restaurant.objects.create(place=place,number_of_employees=50)
  return HttpResponse(restaurant)