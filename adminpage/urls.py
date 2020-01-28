from django.urls import path
from adminpage import views

urlpatterns = [
    path('request/', views.request),
    path('', views.index, name='index'),
]