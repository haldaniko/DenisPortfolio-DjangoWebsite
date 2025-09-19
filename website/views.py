from django.shortcuts import render
from .models import Case, Testimony

LANG_TEMPLATES = {
    'ru': 'index.html',
    'ua': 'index_ua.html',
    'bg': 'index_bg.html',
    'en': 'index_en.html',
}


def index(request, lang='ru'):
    template = LANG_TEMPLATES.get(lang, 'index.html')
    context = {
        'cases': Case.objects.all(),
        'testimonies': Testimony.objects.all()
    }
    return render(request, template, context)
