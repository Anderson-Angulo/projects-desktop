from django.shortcuts import render
from django.http import HttpResponse
from .models import Author,Entry
# Create your views here.
def queries(request):
  authors=Author.objects.all()
  
  filtered=Author.objects.filter(email="erin47@example.com")
  
  alpha=sorted(authors,key=lambda author: author.name)[:10]
  
  
  # Obtener un unico objeto
  author=Author.objects.get(id=1)
  
  
  # Obtener todos los autores cuyo id sea meno igual de 15
  filtered2=Author.objects.filter(id__lte=15)
  
  return render(request,"post/queries.html",{"authors":authors,"filtered":filtered,"author":author,"alpha":alpha,"filtered2":filtered2})

def update(request):
  author=Author.objects.get(id=1)
  author.name="Juanjo"
  author.email="juanjo@demo@.com"
  author.save()
  return HttpResponse("Modificado")