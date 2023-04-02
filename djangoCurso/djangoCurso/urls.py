from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/',views.index,name="home"),
    path('about/',views.about,name="about"),
    path('services/',views.services,name="services"),
    path('comments/',include('comentarios.urls')),
    path('queries/',include('post.urls')),
    path('one/',include('onetone.urls'))
]
