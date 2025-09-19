from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("ua/", views.index, {'lang': 'ua'}, name="index_ua"),
    path("bg/", views.index, {'lang': 'bg'}, name="index_bg"),
    path("en/", views.index, {'lang': 'en'}, name="index_en"),
]

app_name = "website"
