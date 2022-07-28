from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Article, ArticleText, Bonus, Extra
from .pagination import StandardResultsSetPagination
from .serializers import ArcticleSerializer, ArticleTextSerializer, BonusSerializer, ExtraSerializer


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all().order_by("pk")
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
