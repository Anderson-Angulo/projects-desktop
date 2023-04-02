from django.shortcuts import render
from django.http import HttpResponse
from .models import Comment
# Create your views here.
def test(request):
  return HttpResponse("funciona correctamente")

def create(request):
  # comment= Comment(name="Juan",score="5",comment="Este es un comentario")
  # comment.save()
  Comment.objects.create(name="Piero")
  return HttpResponse('Se ha creado con exito un comentario')

def delete(request):
  # comment=Comment.objects.get(id=1)
  # comment.delete()
  Comment.objects.filter(id=2).delete()
  return HttpResponse("Se ha borrado el comentario con id 1")