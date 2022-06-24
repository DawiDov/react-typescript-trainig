from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .pagination import StandardResultsSetPagination
from .models import Article, ArticleText, Extra, Bonus
from .serializers import ArcticleSerializer, ArticleTextSerializer, ExtraSerializer, BonusSerializer


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArcticleSerializer
    pagination_class = StandardResultsSetPagination

class ArticleTextViewSet(ModelViewSet):
    queryset = ArticleText.objects.all()
    serializer_class = ArticleTextSerializer

class ExtraViewSet(ModelViewSet):
    queryset = Extra.objects.all()
    serializer_class = ExtraSerializer

class BonusViewSet(ModelViewSet):
    queryset = Bonus.objects.all()
    serializer_class = BonusSerializer



