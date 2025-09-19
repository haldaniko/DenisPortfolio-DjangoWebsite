from django.shortcuts import render
from .models import Case, Testimony


def index(request):
    cases = Case.objects.all()
    testimonies = Testimony.objects.all()
    context = {
        'cases': cases,
        'testimonies': testimonies
    }
    return render(request, "index.html", context)
