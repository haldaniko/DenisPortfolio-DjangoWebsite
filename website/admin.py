from django.contrib import admin
from .models import Case, Testimony


@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ('title_ru', 'created_at')  # показываем заголовок на русском
    search_fields = ('title_ru', 'title_en', 'title_ua', 'title_bg')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ("Русский", {
            "fields": ("title_ru", "description_ru")
        }),
        ("Украинский", {
            "fields": ("title_ua", "description_ua")
        }),
        ("Болгарский", {
            "fields": ("title_bg", "description_bg")
        }),
        ("Английский", {
            "fields": ("title_en", "description_en")
        }),
        ("Медиа", {
            "fields": ("image",)
        }),
        ("Служебное", {
            "fields": ("created_at", "updated_at")
        }),
    )


@admin.register(Testimony)
class TestimonyAdmin(admin.ModelAdmin):
    list_display = ('name_ru', 'position_ru', 'created_at')
    search_fields = (
        'name_ru', 'name_en', 'name_ua', 'name_bg',
        'position_ru', 'position_en', 'position_ua', 'position_bg'
    )
    readonly_fields = ('created_at',)
    fieldsets = (
        ("Русский", {
            "fields": ("name_ru", "position_ru", "text_ru")
        }),
        ("Украинский", {
            "fields": ("name_ua", "position_ua", "text_ua")
        }),
        ("Болгарский", {
            "fields": ("name_bg", "position_bg", "text_bg")
        }),
        ("Английский", {
            "fields": ("name_en", "position_en", "text_en")
        }),
        ("Медиа", {
            "fields": ("image",)
        }),
        ("Служебное", {
            "fields": ("created_at",)
        }),
    )
