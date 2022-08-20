from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from .models import Article, UserAccess, ArticleText, Bonus, Extra
from .pagination import StandardResultsSetPagination
from .serializers import ( 
    UserAccessSerializer, 
    ArticleTextSerializer, 
    BonusSerializer, 
    ExtraSerializer,
)


class UserAccessViewSet(ModelViewSet):
    serializer_class =UserAccessSerializer 
    pagination_class = StandardResultsSetPagination
    

    def get_queryset(self):
       user = self.request.user
       return UserAccess.objects.filter(user=user)


class ArticleTextViewSet(ModelViewSet):
    queryset = ArticleText.objects.all()
    serializer_class = ArticleTextSerializer

    
class ExtraViewSet(ModelViewSet):
    queryset = Extra.objects.all()
    serializer_class = ExtraSerializer


class BonusViewSet(ModelViewSet):
    queryset = Bonus.objects.all()
    serializer_class = BonusSerializer
