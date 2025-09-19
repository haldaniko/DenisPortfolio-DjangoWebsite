from django.shortcuts import render
from .models import Case


def index(request):
    cases = Case.objects.all()
    context = {
        'cases': cases
    }
    return render(request, "index.html", context)
