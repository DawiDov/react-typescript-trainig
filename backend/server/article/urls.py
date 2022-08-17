from django.urls import include, path

from rest_framework.routers import DefaultRouter

from .views import UserAccessViewSet, ArticleTextViewSet, BonusViewSet, ExtraViewSet


app_name = 'article'

router = DefaultRouter()

router.register('user-access', UserAccessViewSet, basename='user-access')
router.register('article-text', ArticleTextViewSet, basename='article-text')
router.register('extra', ExtraViewSet, basename='extra')
router.register('bonus', BonusViewSet, basename='bonus')

urlpatterns = [
    path("", include(router.urls)),
]
