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

    cases = [
        {
            "title": getattr(case, f"title_{lang}", case.title_ru),
            "description": getattr(case, f"description_{lang}", case.description_ru),
            "image": case.image,
        }
        for case in Case.objects.all()
    ]

    testimonies = [
        {
            "name": getattr(t, f"name_{lang}", t.name_ru),
            "position": getattr(t, f"position_{lang}", t.position_ru),
            "text": getattr(t, f"text_{lang}", t.text_ru),
            "image": t.image,
        }
        for t in Testimony.objects.all()
    ]

    context = {
        'cases': cases,
        'testimonies': testimonies,
    }
    return render(request, template, context)
