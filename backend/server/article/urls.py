from django.urls import include, path

from rest_framework.routers import DefaultRouter

from .views import ArticleViewSet, ArticleTextViewSet, ExtraViewSet, BonusViewSet


app_name = 'article'

router = DefaultRouter()

router.register('articles', ArticleViewSet, basename='articles')
router.register('article-text', ArticleTextViewSet, basename='article-text')
router.register('extra', ExtraViewSet, basename='extra')
router.register('bonus', BonusViewSet, basename='bonus')

urlpatterns = [
    path("", include(router.urls)),
]