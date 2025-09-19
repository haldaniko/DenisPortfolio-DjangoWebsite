from django.contrib import admin
from .models import Case, Testimony


@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Testimony)
class TestimonyAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'created_at')
    search_fields = ('name', 'position')
    readonly_fields = ('created_at',)
